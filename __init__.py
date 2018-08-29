# Copyright 2017 Oursky Ltd.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
import uuid
import copy
from .util.skymail import Mailer
import requests
import skygear
from skygear.models import Location, Record, RecordID
from . import settings
from skygear.options import options

from skygear.container import SkygearContainer

def getSkygearContainer():
    container = SkygearContainer(api_key=options.apikey)
    return container


def merge_filters(listing_record, company, force_update = False):
    # Handle filters
    benefits = listing_record['benefits']
    community = listing_record['community']
    policies = listing_record['policies']
    space = listing_record['space']
    sponsorship = listing_record['sponsorship']
    visibility = listing_record['visibility']

    # benefits
    benefits.extend(company['benefits'])
    benefits = list(set(benefits))
    listing_record['benefits'] = benefits

    # community
    community.extend(company['community'])
    community = list(set(community))
    listing_record['community'] = community
    # policies
    policies.extend(company['policies'])
    policies = list(set(policies))
    listing_record['policies'] = policies
    # space
    space.extend(company['space'])
    space = list(set(space))
    listing_record['space'] = space
    # sponsorship
    sponsorship.extend(company['sponsorship'])
    sponsorship = list(set(sponsorship))
    listing_record['sponsorship'] = sponsorship
    # visibility
    visibility.extend(company['visibility'])
    visibility = list(set(visibility))
    listing_record['visibility'] = visibility

    # companySize (Use the latest record)
    # industry (Use the latest record)
    # linkedin (Use the latest record)
    # website (Use the latest record)
    # name (No need to Merge)

    need_update = '_created_at' in company and (company['_created_at'] >= listing_record['_created_at'])

    if force_update or need_update:
        if 'linkedin' in company: listing_record['linkedin'] = company['linkedin']
        if 'website' in company: listing_record['website'] = company['website']
        if 'industry' in company: listing_record['industry'] = company['industry']
        if 'companySize' in company: listing_record['companySize'] = company['companySize']

    return listing_record


def query_listing(name):
    query = {
        'database_id': '_public',
        'record_type': 'listing',
        'limit': 1,
        'predicate': [
            'eq',
            {
                '$type': 'keypath',
                '$val': 'name',
            },
            name,
        ],
    }

    response = getSkygearContainer().send_action('record:query', query)
    records = response.get('result', []) # returned rows are in 'result'

    if (len(records) == 0):
        return None

    matched_item = records[0]
    return matched_item


def query_company_records(name):
    query = {
        'database_id': '_public',
        'record_type': 'company',
        'limit': 999,
        'predicate': [
            'eq',
            {
                '$type': 'keypath',
                '$val': 'name',
            },
            name,
        ],
    }

    response = getSkygearContainer().send_action('record:query', query)
    records = response.get('result', []) # returned rows are in 'result'

    return records


def create_listing_according_to_company(company_name):
    master_container = SkygearContainer(
        api_key=options.masterkey,
        user_id="0469404a-5441-4af0-b1b9-d89eb2d36264"
    )

    if (company_name is not None):
        company_records = query_company_records(company_name)
        if len(company_records) == 0:
            return {'error': True, 'message': 'No matching company found.'}

        listing_record = merge_company_records_to_listing_record(company_records)
    else:
        return {'error': True, 'message': 'No given company_name'}

    listing_record['_id'] = 'listing/' + str(uuid.uuid4()) # generate an ID
        # 'description': 'Complete the sales report',
        # 'reviewer': { # a foreign key to user
        #     '$type': 'ref',
        #     '$id': 'user/1a5f91c9-b9c0-487d-8d48-bff0b156f38d',
        # },

    master_container.send_action(
        'record:save',
        {
            'database_id': '_public',
            'records': [listing_record],
        }
    )

    return listing_record


def update_listing_record(existing_listing, company_record):
    master_container = SkygearContainer(
        api_key=options.masterkey,
        user_id="0469404a-5441-4af0-b1b9-d89eb2d36264"
    )

    existing_listing = merge_filters(existing_listing, company_record, True)
    created_at = company_record.created_at if company_record.created_at else company_record['_created_at']
    thoughtObject = {'text': company_record['thoughts'], '_created_at': created_at}
    existing_listing['thoughts'].append(thoughtObject)

    master_container.send_action(
        'record:save',
        {
            'database_id': '_public',
            'records': [existing_listing],
        }
    )

    return existing_listing

def merge_company_records_to_listing_record(company_records):
    if len(company_records) == 0:
        return {}
    listing_record = copy.deepcopy(company_records[0])
    listing_record['thoughts'] = []

    for x in company_records:
        # Merge filters
        listing_record = merge_filters(listing_record, x)

        # Merge thoughts
        thoughtObject = {'text': x['thoughts'], '_created_at': x['_created_at']}
        listing_record['thoughts'].append(thoughtObject)

    return listing_record

@skygear.after_save('company', async=False)
def after_company_save_handler(record, original_record, db):
    print("After company saved")

    name = record['name']
    existing_listing = query_listing(name)

    if existing_listing is None:
    # Create if not exists
        return create_listing_according_to_company(name)
    else:
    # Merge with existing record
        return update_listing_record(existing_listing, record)


@skygear.after_save('Contributor', async=False)
def send_thanks_email(record, original_record, db):
    print("After saved contributor")

    thanks_content = "\
Hello,\
\
This is a confirmation e-mail that your review has been entered.\
\
Thank you for taking the time to contribute to this open-source project. You can clone the Github repository here to host one for another city.\
\
If you are ever thinking about building a web or mobile app or AI solutions for your business, you can check out our guides for more information. We also offer free ballpark estimates for projects, so get in touch if you have a project you'd like to discuss!\
\
- The Oursky Team"
    if hasattr(record, 'email'):
        email = record.email
    return record


@skygear.op('send_invitation_email')
def send_invitation_email(to_email, subject="", custom_message=""):
    print("Prepare to send")
    sender = settings.config["default_sender"]
    reply_to = settings.config["default_reply_to"]

    subject = subject
    text = custom_message
    html = '<p>'+custom_message+'</p>'

    mailer = Mailer(
      smtp_host=settings.smtp_settings["smtp_host"],
      smtp_port=settings.smtp_settings["smtp_port"],
      smtp_mode=settings.smtp_settings["smtp_mode"],
      smtp_login=settings.smtp_settings["smtp_login"],
      smtp_password=settings.smtp_settings["smtp_password"]
    )
    mailer.send_mail(sender, to_email, subject, text, html=html, reply_to=reply_to)
    print("Email sent")
    return {
      'result': 'OK',
    }


@skygear.handler('get_listing')
def get_listing_handler(request):
    params = request.args
    company_name = None

    if 'company_name' in params:
      company_name = params['company_name']

    if company_name:
        return query_listing(company_name)
    else:
        return {'error': True, 'message': 'No given company_name'}


@skygear.handler('create_listing')
def create_listing_handler(request):
    # Manual API for converting `company` to `entries`
    params = request.args
    company_name = None

    if 'company_name' in params:
      company_name = params['company_name']

    if (company_name is not None):
        return create_listing_according_to_company(company_name)
    else:
        return {'error': True, 'message': 'No given company_name'}


@skygear.op('fetch_all_companies')
def fetch_all_companies():
    # finding the `company` records
    query = {
        'database_id': '_public',
        'record_type': 'company',
        'limit': 999,
        'predicate': [
            'eq',
            {
                '$type': 'keypath',
                '$val': 'live',
            },
            'true',
        ],
    }

    response = getSkygearContainer().send_action('record:query', query)
    records = response.get('result', []) # returned rows are in 'result'
    companyDict = {}
    processed = []

    for company in records:
        name = company['name']
        if name in companyDict:
            companyDict[name] = merge_filters(companyDict[name], company)
            thoughtObject = {'text': company['thoughts'], '_created_at': company['_created_at']}
            if thoughtObject['text']:
                companyDict[name]['thoughts'].append(thoughtObject)
        else:
            companyDict.update({ name: company })
            thoughtObject = {'text': company['thoughts'], '_created_at': company['_created_at']}
            companyDict[name]['thoughts'] = []
            if thoughtObject['text']:
                companyDict[name]['thoughts'].append(thoughtObject)

    for key in companyDict:
        processed.append(companyDict[key])

    return processed

@skygear.op('fetch_all_listings')
def fetch_all_listings():
    # finding the `listing` records
    query = {
        'database_id': '_public',
        'record_type': 'listing',
        'limit': 999,
        'predicate': [
            'eq',
            {
                '$type': 'keypath',
                '$val': 'live',
            },
            'true',
        ],
    }

    response = getSkygearContainer().send_action('record:query', query)
    records = response.get('result', []) # returned rows are in 'result'
 
    return records
