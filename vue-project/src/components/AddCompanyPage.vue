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
            <b-col sm="9"><b-form-input :id="newUserInfo.email"  v-model="newUserInfo.email" type="email" :required="step === '1'"></b-form-input></b-col>
          </b-row>

          <b-row class="my-1">
            <b-col sm="3"><label :for="newUserInfo.identify" :required="step === '1'">How do you identify? *</label></b-col>
            <b-col sm="9">
              <b-form-group label="Please select all that apply:">
                <b-form-checkbox-group name="newUserInfo.identify" stacked v-model="newUserInfo.identify" :options="identifyOptions">
                </b-form-checkbox-group>
              </b-form-group>
            </b-col>
          </b-row>

          <b-row class="my-1">
            <b-col sm="3"><label :for="newUserInfo.pronoun" :required="step === '1'">Pronoun Preference *</label></b-col>
            <b-col sm="9">
              <b-form-group label="Please select all that apply:">
                <b-form-checkbox-group name="newUserInfo.pronoun" v-model="newUserInfo.pronoun" :options="pronounOptions">
                </b-form-checkbox-group>
              </b-form-group>
            </b-col>
          </b-row>

          <div class="button-wrapper"><b-button @click="restart" class="prev">Prev</b-button> <b-button @click="step2">Next</b-button></div>
        </div>
        <!-- Step 2 -->
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
              <b-form-group label="Please select all that apply:">
                <b-form-checkbox-group name="newCompany.visibility" stacked v-model="newCompany.visibility" :options="visibilityOptions">
                </b-form-checkbox-group>
              </b-form-group>
            </b-col>
          </b-row>

          <b-row class="my-1">
            <b-col sm="6"><label :for="newCompany.policies">Non-Discrimination Policies</label></b-col>
            <b-col sm="6">
              <b-form-group label="Please select all that apply:">
                <b-form-checkbox-group name="newCompany.policies" stacked v-model="newCompany.policies" :options="policiesOptions">
                </b-form-checkbox-group>
              </b-form-group>
            </b-col>
          </b-row>

          <b-row class="my-1">
            <b-col sm="6"><label :for="newCompany.benefits">Does your company have support & benefits?</label></b-col>
            <b-col sm="6">
              <b-form-group label="Please select all that apply:">
                <b-form-checkbox-group name="newCompany.benefits" stacked v-model="newCompany.benefits" :options="benefitsOptions">
                </b-form-checkbox-group>
              </b-form-group>
            </b-col>
          </b-row>

          <b-row class="my-1">
            <b-col sm="6"><label :for="newCompany.space">Does your company have inclusive spaces?</label></b-col>
            <b-col sm="6">
              <b-form-group label="Please select all that apply:">
                <b-form-checkbox-group name="newCompany.space" stacked v-model="newCompany.space" :options="spaceOptions">
                </b-form-checkbox-group>
              </b-form-group>
            </b-col>
          </b-row>

          <b-row class="my-1">
            <b-col sm="6"><label :for="newCompany.community">Does your company have an inclusive culture / LGBTQ community?</label></b-col>
            <b-col sm="6">
              <b-form-group label="Please select all that apply:">
                <b-form-checkbox-group name="newCompany.community" stacked v-model="newCompany.community" :options="communityOptions">
                </b-form-checkbox-group>
              </b-form-group>
            </b-col>
          </b-row>

          <b-row class="my-1">
            <b-col sm="6"><label :for="newCompany.sponsorship">Does the company have public initiatives?</label></b-col>
            <b-col sm="6">
              <b-form-group label="Please select all that apply:">
                <b-form-checkbox-group name="newCompany.sponsorship" stacked v-model="newCompany.sponsorship" :options="sponsorshipOptions">
                </b-form-checkbox-group>
              </b-form-group>
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
import FormOptions from '../form-options'
import Company from '../models/company'
import Contributor from '../models/contributor'

export default {
  components: {},
  data () {
    return {
      step: 'disclaimer',
      newCompany: new Company(),
      newUserInfo: new Contributor(),
      identifyOptions: FormOptions.identifyOptions,
      pronounOptions: FormOptions.pronounOptions,
      industryOptions: FormOptions.industryOptions,
      sizeOptions: FormOptions.sizeOptions,
      visibilityOptions: FormOptions.visibilityOptions,
      benefitsOptions: FormOptions.benefitsOptions,
      policiesOptions: FormOptions.policiesOptions,
      spaceOptions: FormOptions.spaceOptions,
      communityOptions: FormOptions.communityOptions,
      sponsorshipOptions: FormOptions.sponsorshipOptions
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
    submit: function (e) {
      e.preventDefault()
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
