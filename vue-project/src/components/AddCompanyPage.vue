<template>
  <div>
  <b-form @submit="submit" @reset="clearFormData" ref="addCompanyForm">
  <b-container class="add-container">
    <b-row>
      <b-col>
       <h1>Add Company</h1>

       <div class="steps" v-show="step !== 'success'"><div class="sub-step" :class="step == '1' || step == '2' || step == '3'? 'done' : ''">Step 1</div> <div class="sub-step" :class="step == '2' || step == '3'? 'done' : ''">Step 2</div><div class="sub-step" :class="step == '3'? 'done' : ''"> Step 3</div></div>
       <hr>

       <div class="form-content">

          <div v-show="step === 'disclaimer'">
          <h4>Disclaimer</h4>

          <p>
          LGBTQ Glassdoor is an open-source project made with love from Hong Kong by Oursky.
          Next up, you will get 1 short individual form and 1 short company form.
          We verify individual entries to prevent spam or duplicates.
          Your personal information will not be released or shared with third parties.
          <br><br>
          Only the company information will be shared. We may contact you directly to clarify a comment or verify information.
          </p>

          <p>Cheers!</p>

          <p>- Oursky Team</p>
          <div class="button-wrapper">
            <b-button @click="step1">Let's Start!</b-button>
          </div>

        </div>
        <div v-show="step === '1'">
          <p>
          Your information will not be released or shared with third parties. We may contact you directly to clarify or verify information. Thanks!
          </p>

          <b-row class="my-1">
            <b-col sm="3"><label :for="newUserInfo.firstName">Name</label></b-col>
            <b-col sm="4"><b-form-input :id="newUserInfo.firstName" v-model="newUserInfo.firstName" type="text" placeholder="First Name"></b-form-input></b-col>
            <b-col sm="5"><b-form-input :id="newUserInfo.lastName" v-model="newUserInfo.lastName" type="text" placeholder="Last Name"></b-form-input></b-col>
          </b-row>

          <b-row class="my-1">
            <b-col sm="3"><label :for="newUserInfo.company">Company *</label></b-col>
            <b-col sm="9"><b-form-input :id="newUserInfo.company" v-model="newUserInfo.company" type="text" :required="step === '1'"></b-form-input></b-col>
          </b-row>

          <b-row class="my-1">
            <b-col sm="3"><label :for="newUserInfo.role">Role *</label></b-col>
            <b-col sm="9"><b-form-input :id="newUserInfo.role" v-model="newUserInfo.role" type="text" :required="step === '1'"></b-form-input></b-col>
          </b-row>

          <b-row class="my-1">
            <b-col sm="3"><label :for="newUserInfo.email">E-mail *</label></b-col>
            <b-col sm="9"><b-form-input :id="newUserInfo.email" v-model="newUserInfo.email" type="email" :required="step === '1'"></b-form-input></b-col>
          </b-row>

          <b-row class="my-1">
            <b-col sm="3"><label :for="newUserInfo.identify" :required="step === '1'">How do you identify? *</label></b-col>
            <b-col sm="9">
              <b-form-select multiple :select-size="4" v-model="newUserInfo.identify" :options="identifyOptions" class="mb-3" placeholder="Select your identity">
              </b-form-select>
            </b-col>
          </b-row>

          <b-row class="my-1">
            <b-col sm="3"><label :for="newUserInfo.pronoun" :required="step === '1'">Pronoun Preference *</label></b-col>
            <b-col sm="9">
              <b-form-select multiple :select-size="4" v-model="newUserInfo.pronoun" :options="pronounOptions" class="mb-3">
              </b-form-select>
            </b-col>
          </b-row>

          <div class="button-wrapper"><b-button @click="restart" class="prev">Prev</b-button> <b-button @click="step2">Next</b-button></div>
        </div>
        <div v-show="step === '2'">
          <h4>Company Information</h4>

          <p>Please add your company to this directory if you would recommend it as a safe and supportive environment for LGBTQ friends.</p>
          <p>Whether your company has 2 or 2000 people, we'd love to learn about it.</p>

          <p>Your company does not need to have formal policies and instead we encourage individuals to make recommendations based on their personal, positive experiences.</p>

          <b-row class="my-1">
            <b-col sm="6"><label :for="newCompany.name" required>Company *</label></b-col>
            <b-col sm="6"><b-form-input :id="newCompany.name" v-model="newCompany.name" type="text" placeholder="Name of the company" :required="step === '2'"></b-form-input></b-col>
          </b-row>

          <b-row class="my-1">
            <b-col sm="6"><label :for="newCompany.industry">Industry</label></b-col>
            <b-col sm="6">
              <b-form-select v-model="newCompany.industry" :options="industryOptions" class="mb-3" :id="newCompany.industry">
                <template slot="first">
                  <!-- this slot appears above the options from 'options' prop -->
                  <option :value="null" disabled>-- Please select an option --</option>
                </template>
              </b-form-select>
            </b-col>
          </b-row>

          <b-row class="my-1">
            <b-col sm="6"><label :for="newCompany.companySize">Company Size</label></b-col>
            <b-col sm="6">
              <b-form-select v-model="newCompany.companySize" :options="sizeOptions" class="mb-3" :id="newCompany.companySize">
                <template slot="first">
                  <option :value="null" disabled>-- Please select an option --</option>
                </template>
              </b-form-select>
            </b-col>
          </b-row>

          <b-row class="my-1">
            <b-col sm="12">
              <h4>What makes this organization LGBTQ-friendly?</h4>
            </b-col>
          </b-row>

          <b-row class="my-1">
            <b-col sm="6"><label :for="newCompany.visibility" required>Visibility *</label></b-col>
            <b-col sm="6">
              <b-form-select multiple :select-size="4" v-model="newCompany.visibility" :options="visibilityOptions" class="mb-3" placeholder="Select options" :required="step === '2'">
              </b-form-select>
            </b-col>
          </b-row>

          <b-row class="my-1">
            <b-col sm="6"><label :for="newCompany.policies">Non-Discrimination Policies</label></b-col>
            <b-col sm="6">
              <b-form-select multiple :select-size="4" v-model="newCompany.policies" :options="policiesOptions" class="mb-3" placeholder="Select options">
              </b-form-select>
            </b-col>
          </b-row>

          <b-row class="my-1">
            <b-col sm="6"><label :for="newCompany.benefits">Does your company have support & benefits?</label></b-col>
            <b-col sm="6">
              <b-form-select multiple :select-size="4" v-model="newCompany.benefits" :options="benefitsOptions" class="mb-3" placeholder="Select options">
              </b-form-select>
            </b-col>
          </b-row>

          <b-row class="my-1">
            <b-col sm="6"><label :for="newCompany.space">Does your company have inclusive spaces?</label></b-col>
            <b-col sm="6">
              <b-form-select multiple :select-size="4" v-model="newCompany.space" :options="spacesOptions" class="mb-3" placeholder="Select options">
              </b-form-select>
            </b-col>
          </b-row>

          <b-row class="my-1">
            <b-col sm="6"><label :for="newCompany.community">Does your company have an inclusive culture / LGBTQ community?</label></b-col>
            <b-col sm="6">
              <b-form-select multiple :select-size="4" v-model="newCompany.community" :options="communityOptions" class="mb-3" placeholder="Select options">
              </b-form-select>
            </b-col>
          </b-row>

          <b-row class="my-1">
            <b-col sm="6"><label :for="newCompany.sponsorship">Does the company have public initiatives?</label></b-col>
            <b-col sm="6">
              <b-form-select multiple :select-size="4" v-model="newCompany.sponsorship" :options="sponsorshipOptions" class="mb-3" placeholder="Select options">
              </b-form-select>
            </b-col>
          </b-row>

          <div class="button-wrapper"><b-button @click="step1" class="prev">Prev</b-button> <b-button @click="step3">Next</b-button></div>
        </div>
        <div v-show="step === '3'">
          <h4>Company Information</h4>
          <b-row class="my-1">
          <b-col sm="12"><label :for="newCompany.thoughts">Final thoughts</label>
            <p>Is there something we've missed that you love? Share it here! Your comments will be anonymous on the company directory.</p>

          </b-col>
            <b-col sm="12">
              <b-form-textarea :id="newCompany.thoughts"
                         v-model="newCompany.thoughts"
                         placeholder="Tell the world more about this company."
                         :rows="7"
                         :max-rows="20">
              </b-form-textarea>
            </b-col>

          </b-row>
          <div class="button-wrapper"><b-button @click="step2" class="prev">Prev</b-button> <b-button type="submit">Submit</b-button></div>
        </div>

        <div v-show="step === 'success'" class="success">
          <h1>👍</h1>
          <h4>You are awesome!<br> Thanks for your Contribution by submitting {{this.newCompany.name}}.</h4>

          <p>Your personal information will <b>NOT</b> be released.Only your LGBTQ-related answers will be public. We don't have a login yet, but you can recommend as many companies as you like!</p>

          <p>Cheers!</p>

          <div class="button-wrapper">
            <b-button :to="{name:'list'}">View all listings</b-button>
          </div>
        </div>

      </div>
      </b-col>
    </b-row>

  </b-container>
  </b-form>
  <div class="last-row"></div>
  </div>
</template>

<script>
import Company from '../models/company'
import Contributor from '../models/contributor'

export default {
  components: {},
  data () {
    return {
      step: 'disclaimer',
      newCompany: new Company(),
      newUserInfo: new Contributor(),
      identifyOptions: [
        { value: 'lesbian', text: 'Lesbian' },
        { value: 'gay', text: 'Gay' },
        { value: 'bisexual', text: 'Bisexual' },
        { value: 'tran', text: 'Tran' },
        { value: 'genderqueer', text: 'Genderqueer' },
        { value: 'queer', text: 'Queer' },
        { value: 'ally', text: 'Ally' },
        { value: 'other', text: 'Other' }
      ],
      pronounOptions: [
        { value: 'she', text: 'She / Her' },
        { value: 'he', text: 'He / Him' },
        { value: 'they', text: 'They / Them' }
      ],
      industryOptions: [
        { value: 'Accounting', text: 'Accounting' },
        { value: 'Airlines/Aviation', text: 'Airlines/Aviation' },
        { value: 'Alternative Dispute Resolution', text: 'Alternative Dispute Resolution' },
        { value: 'Alternative Medicine', text: 'Alternative Medicine' },
        { value: 'Animation', text: 'Animation' },
        { value: 'Architecture/Planning', text: 'Architecture/Planning' },
        { value: 'Arts/Crafts', text: 'Arts/Crafts' },
        { value: 'Automotive', text: 'Automotive' },
        { value: 'Aviation/Aerospace', text: 'Aviation/Aerospace' },
        { value: 'Banking/Mortgage', text: 'Banking/Mortgage' },
        { value: 'Biotechnology/Greentech', text: 'Biotechnology/Greentech' },
        { value: 'Broadcast Media', text: 'Broadcast Media' },
        { value: 'Building Materials', text: 'Building Materials' },
        { value: 'Business Supplies/Equipment', text: 'Business Supplies/Equipment' },
        { value: 'Capital Markets/Hedge Fund/Private Equity', text: 'Capital Markets/Hedge Fund/Private Equity' },
        { value: 'Chemicals', text: 'Chemicals' },
        { value: 'Civic/Social Organization', text: 'Civic/Social Organization' },
        { value: 'Civil Engineering', text: 'Civil Engineering' },
        { value: 'Commercial Real Estate', text: 'Commercial Real Estate' },
        { value: 'Computer Games', text: 'Computer Games' },
        { value: 'Computer Hardware', text: 'Computer Hardware' },
        { value: 'Computer Networking', text: 'Computer Networking' },
        { value: 'Computer Software Engineering', text: 'Computer Software Engineering' },
        { value: 'Computer Network Security', text: 'Computer Network Security' },
        { value: 'Construction', text: 'Construction' },
        { value: 'Consumer Electronics', text: 'Consumer Electronics' },
        { value: 'Consumer Goods', text: 'Consumer Goods' },
        { value: 'Consumer Services', text: 'Consumer Services' },
        { value: 'Cosmetics', text: 'Cosmetics' },
        { value: 'Co-working spaces / Event Spaces', text: 'Co-working spaces / Event Spaces' },
        { value: 'Dairy', text: 'Dairy' },
        { value: 'Defense/Space', text: 'Defense/Space' },
        { value: 'Design', text: 'Design' },
        { value: 'E-Learning', text: 'E-Learning' },
        { value: 'Education', text: 'Education' },
        { value: 'Electrical/Electronic Manufacturing', text: 'Electrical/Electronic Manufacturing' },
        { value: 'Entertainment/Movie Production', text: 'Entertainment/Movie Production' },
        { value: 'Environmental Services', text: 'Environmental Services' },
        { value: 'Events Services', text: 'Events Services' },
        { value: 'Executive Office', text: 'Executive Office' },
        { value: 'Facilities Services', text: 'Facilities Services' },
        { value: 'Farming', text: 'Farming' },
        { value: 'Fashion/Apparel', text: 'Fashion/Apparel' },
        { value: 'Financial Services', text: 'Financial Services' },
        { value: 'Fine Art', text: 'Fine Art' },
        { value: 'Fishery', text: 'Fishery' },
        { value: 'Food Production', text: 'Food Production' },
        { value: 'Food/Beverages', text: 'Food/Beverages' },
        { value: 'Fundraising', text: 'Fundraising' },
        { value: 'Furniture', text: 'Furniture' },
        { value: 'Gambling/Casinos', text: 'Gambling/Casinos' },
        { value: 'Glass/Ceramics/Concrete', text: 'Glass/Ceramics/Concrete' },
        { value: 'Government Administration', text: 'Government Administration' },
        { value: 'Government Relations', text: 'Government Relations' },
        { value: 'Graphic Design/Web Design', text: 'Graphic Design/Web Design' },
        { value: 'Health/Fitness', text: 'Health/Fitness' },
        { value: 'Higher Education/Acadamia', text: 'Higher Education/Acadamia' },
        { value: 'Hospital/Health Care', text: 'Hospital/Health Care' },
        { value: 'Hospitality', text: 'Hospitality' },
        { value: 'Human Resources/HR', text: 'Human Resources/HR' },
        { value: 'Import/Export', text: 'Import/Export' },
        { value: 'Individual/Family Services', text: 'Individual/Family Services' },
        { value: 'Industrial Automation', text: 'Industrial Automation' },
        { value: 'Information Services', text: 'Information Services' },
        { value: 'Information Technology/IT', text: 'Information Technology/IT' },
        { value: 'Insurance', text: 'Insurance' },
        { value: 'International Affairs', text: 'International Affairs' },
        { value: 'International Trade/Development', text: 'International Trade/Development' },
        { value: 'Internet', text: 'Internet' },
        { value: 'Investment Banking/Venture', text: 'Investment Banking/Venture' },
        { value: 'Investment Management/Hedge Fund/Private Equity', text: 'Investment Management/Hedge Fund/Private Equity' },
        { value: 'Judiciary', text: 'Judiciary' },
        { value: 'Law Enforcement', text: 'Law Enforcement' },
        { value: 'Law Practice/Law Firms', text: 'Law Practice/Law Firms' },
        { value: 'Legal Services', text: 'Legal Services' },
        { value: 'Legislative Office', text: 'Legislative Office' },
        { value: 'Leisure/Travel', text: 'Leisure/Travel' },
        { value: 'Library', text: 'Library' },
        { value: 'Logistics/Procurement', text: 'Logistics/Procurement' },
        { value: 'Luxury Goods/Jewelry', text: 'Luxury Goods/Jewelry' },
        { value: 'Machinery', text: 'Machinery' },
        { value: 'Management Consulting', text: 'Management Consulting' },
        { value: 'Maritime', text: 'Maritime' },
        { value: 'Market Research', text: 'Market Research' },
        { value: 'Marketing/Advertising/Sales', text: 'Marketing/Advertising/Sales' },
        { value: 'Mechanical or Industrial Engineering', text: 'Mechanical or Industrial Engineering' },
        { value: 'Media Production', text: 'Media Production' },
        { value: 'Medical Equipment', text: 'Medical Equipment' },
        { value: 'Medical Practice', text: 'Medical Practice' },
        { value: 'Mental Health Care', text: 'Mental Health Care' },
        { value: 'Military Industry', text: 'Military Industry' },
        { value: 'Mining/Metals', text: 'Mining/Metals' },
        { value: 'Motion Pictures/Film', text: 'Motion Pictures/Film' },
        { value: 'Museums/Institutions', text: 'Museums/Institutions' },
        { value: 'Music', text: 'Music' },
        { value: 'Nanotechnology', text: 'Nanotechnology' },
        { value: 'Newspapers/Journalism', text: 'Newspapers/Journalism' },
        { value: 'Non-Profit/Volunteering', text: 'Non-Profit/Volunteering' },
        { value: 'Oil/Energy/Solar/Greentech', text: 'Oil/Energy/Solar/Greentech' },
        { value: 'Online Publishing', text: 'Online Publishing' },
        { value: 'Other Industry', text: 'Other Industry' },
        { value: 'Outsourcing/Offshoring', text: 'Outsourcing/Offshoring' },
        { value: 'Package/Freight Delivery', text: 'Package/Freight Delivery' },
        { value: 'Packaging/Containers', text: 'Packaging/Containers' },
        { value: 'Paper/Forest Products', text: 'Paper/Forest Products' },
        { value: 'Performing Arts', text: 'Performing Arts' },
        { value: 'Pharmaceuticals', text: 'Pharmaceuticals' },
        { value: 'Philanthropy', text: 'Philanthropy' },
        { value: 'Photography', text: 'Photography' },
        { value: 'Plastics', text: 'Plastics' },
        { value: 'Political Organization', text: 'Political Organization' },
        { value: 'Primary/Secondary Education', text: 'Primary/Secondary Education' },
        { value: 'Printing', text: 'Printing' },
        { value: 'Professional Training', text: 'Professional Training' },
        { value: 'Program Development', text: 'Program Development' },
        { value: 'Public Relations/PR', text: 'Public Relations/PR' },
        { value: 'Public Safety', text: 'Public Safety' },
        { value: 'Publishing Industry', text: 'Publishing Industry' },
        { value: 'Railroad Manufacture', text: 'Railroad Manufacture' },
        { value: 'Ranching', text: 'Ranching' },
        { value: 'Real Estate/Mortgage', text: 'Real Estate/Mortgage' },
        { value: 'Recreational Facilities/Services', text: 'Recreational Facilities/Services' },
        { value: 'Religious Institutions', text: 'Religious Institutions' },
        { value: 'Renewables/Environment', text: 'Renewables/Environment' },
        { value: 'Research Industry', text: 'Research Industry' },
        { value: 'Restaurants', text: 'Restaurants' },
        { value: 'Retail Industry', text: 'Retail Industry' },
        { value: 'Security/Investigations', text: 'Security/Investigations' },
        { value: 'Semiconductors', text: 'Semiconductors' },
        { value: 'Shipbuilding', text: 'Shipbuilding' },
        { value: 'Sporting Goods', text: 'Sporting Goods' },
        { value: 'Sports', text: 'Sports' },
        { value: 'Social Enterprise', text: 'Social Enterprise' },
        { value: 'Staffing/Recruiting', text: 'Staffing/Recruiting' },
        { value: 'Supermarkets', text: 'Supermarkets' },
        { value: 'Telecommunications', text: 'Telecommunications' },
        { value: 'Textiles', text: 'Textiles' },
        { value: 'Think Tanks', text: 'Think Tanks' },
        { value: 'Tobacco', text: 'Tobacco' },
        { value: 'Translation/Localization', text: 'Translation/Localization' },
        { value: 'Transportation', text: 'Transportation' },
        { value: 'Travel/Tourism', text: 'Travel/Tourism' },
        { value: 'Utilities', text: 'Utilities' },
        { value: 'Venture Capital/VC', text: 'Venture Capital/VC' },
        { value: 'Veterinary', text: 'Veterinary' },
        { value: 'Warehousing', text: 'Warehousing' },
        { value: 'Wholesale', text: 'Wholesale' },
        { value: 'Wine/Spirits', text: 'Wine/Spirits' },
        { value: 'Wireless', text: 'Wireless' },
        { value: 'Writing/Editing', text: 'Writing/Editing' }
      ],
      sizeOptions: [
        { value: '0-5', text: '0-5' },
        { value: '6-10', text: '6-10' },
        { value: '11-20', text: '11-20' },
        { value: '21-50', text: '21-50' },
        { value: '51-100', text: '51-100' },
        { value: '101-200', text: '101-200' },
        { value: '201-500', text: '201-500' }
      ],
      visibilityOptions: [
        { value: 'LGB colleagues', text: 'LGB colleagues' },
        { value: 'Trans / genderqueer colleagues', text: 'Trans / Genderqueer colleagues' },
        { value: 'Allies', text: 'Strong and vocal allies' },
        { value: 'Others', text: 'Other (please fill in at the bottom of this questionaire)' }
      ],
      benefitsOptions: [
        { value: 'Same-sex benefits', text: 'Same-sex benefits' },
        { value: 'Rainbow families', text: 'Rainbow family support' },
        { value: 'Trans benefits', text: 'Trans benefits / transition support' },
        { value: 'Informal Benefits', text: 'Nothing official, but LGBTQ benefits provided for individual cases.' },
        { value: 'Other', text: 'Other (please fill in at the bottom of this questionaire)' }
      ],
      policiesOptions: [
        { value: 'Generic non-discrimination', text: 'Generic non-discrimination' },
        { value: 'Same-sex policies', text: 'Same-sex policies' },
        { value: 'Trans policies', text: 'Trans policies' },
        { value: 'Informal policies', text: 'No policies, but leadership actively helps for individual cases.' },
        { value: 'Unenforced policies', text: 'Has same-sex/trans policies, but they are not enforced.' },
        { value: 'Others', text: 'Other (please fill in at the bottom of this questionaire)' }
      ],
      spacesOptions: [
        { value: 'Trans washrooms', text: 'Trans washrooms' },
        { value: 'Gender neutral washrooms', text: 'Gender neutral washrooms' },
        { value: 'Others', text: 'Other (please fill in at the bottom of this questionaire)' }
      ],
      communityOptions: [
        { value: 'Allies', text: 'There are allies to turn to for help or raise issues with.' },
        { value: 'Inclusive culture', text: 'Generally an inclusive company.' },
        { value: 'Comfortable calling out', text: 'I feel comfortable calling out discrimination.' },
        { value: 'LGBTQ network', text: 'Internal LGBTQ Network' },
        { value: 'D&I events', text: 'Internal Diversity & Inclusion Events' },
        { value: 'Others', text: 'Other (please fill in at the bottom of this questionaire)' }
      ],
      sponsorshipOptions: [
        { value: 'Public events', text: 'Hosts public events / LGBTQ initiatives' },
        { value: 'Event sponsorships', text: 'Sponsors LGBTQ events' },
        { value: 'NGO sponsorships', text: 'Sponsors LGBTQ NGOs' },
        { value: 'Advocacy', text: 'Company does public advocacy' },
        { value: 'Others', text: 'Other (please fill in at the bottom of this questionaire)' }
      ]
    }
  },
  mounted: function () {},
  methods: {
    step1: function () {
      this.step = '1'
      console.log(this.newCompany)
      console.log(this.newUserInfo)
    },
    step2: function () {
      if (this.validate()) {
        this.step = '2'
      }

      console.log(this.newCompany)
      console.log(this.newUserInfo)
    },
    step3: function () {
      if (this.validate()) {
        this.step = '3'
      }

      console.log(this.newCompany)
      console.log(this.newUserInfo)
    },
    submit: function () {
      console.log(this.newCompany)
      console.log(this.newUserInfo)

      if (this.validate()) {
        if (confirm(`Thank you! Are you sure to submit ${this.newCompany.name} to the LGBTQ-friendly directory?`) === true) {
          this.step = 'success'
        }
        this.newUserInfo.save().then((user) => {
          this.newCompany.referenceAuthor(user)
          this.newCompany.save()
        }, (error) => {
          console.error(error)
        })
      }
    },
    restart: function () {
      if (confirm('Are you sure to clear all input and restart?') === true) {
        this.step = 'disclaimer'
      }
    },
    clearFormData: function () {

    },
    validate: function () {
      let addCompanyForm = this.$refs.addCompanyForm
      if (addCompanyForm.checkValidity()) {
        return true
      } else {
        if (addCompanyForm.reportValidity) {
          addCompanyForm.reportValidity()
        }
        return false
      }
    }
  }
}
</script>
