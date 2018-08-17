# 🌈 LGBTQ Glassdoor

## https://LGBTQglassdoor.com

LGBTQ Glassdoor aims to help LGBTQ individuals share and find supportive work environments. LGBTQ individuals & allies can add inclusive companies even if they may not yet have official policies.

## Technology

* Backend: [Skygear](https://skygear.io) with Python cloud code
* Frontend: VueJS
* Frontend Template: `vue-bootstrap`

## Folder Structure

The root directory contains a Skygear could functions project, while `public_html` contains the static HTMLs for deployment.

Entry point for cloud function Cloud code is `__init__.py`

The Frontend VueJS project is contained under `/vue-project`.


### Run Development
* `cd vue-project`
* `npm install`
* `npm start`

### Build for production
* `cd vue-project`
* `npm install`
* `npm run build`

The exported build will be at `/dist`, which can be deployed using [`skygear cli`](https://github.com/SkygearIO/skycli).

## Pages
* Landing
* Lising of Companies
* Company details
* Add a new company (Disclaimer, Contributor info, Company Info, Confirm page)
* About us page

## Table Schema
* Contributor
* company

## CMS

* [CMS at Skygear](https://lgbtq.skygeario.com/cms)

## Localization

* Using [vue-localization](https://github.com/valterlorran/vuejs-localization)
* Please update language text under `/lang`
