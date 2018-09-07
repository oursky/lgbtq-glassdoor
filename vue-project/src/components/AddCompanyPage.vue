<template>
  <div>
  <b-form @submit="submit" @keydown.enter.prevent="" @reset="clearFormData" ref="addCompanyForm">
  <b-container class="add-container">
    <b-row>
      <b-col>
       <h1>{{$lang.add.add_company}}</h1>

       <div class="steps" v-show="step !== 'success'"><div class="sub-step" :class="step == '1' || step == '2' || step == '3'? 'done' : ''">{{$lang.add.step1}}</div> <div class="sub-step" :class="step == '2' || step == '3'? 'done' : ''">{{$lang.add.step2}}</div><div class="sub-step" :class="step == '3'? 'done' : ''">{{$lang.add.step3}}</div></div>
       <hr>

       <div class="form-content">
          <div v-show="step === 'disclaimer'">
          <h4>{{$lang.add.disclaimer}}</h4>

          <p>
          {{$lang.add.disclaimer_line_1}}
          {{$lang.add.disclaimer_line_2}}
          {{$lang.add.disclaimer_line_3}}
          <br><br>
          {{$lang.add.disclaimer_line_4}}
          </p>

          <p>{{$lang.add.disclaimer_line_5}}</p>

          <p>{{$lang.add.disclaimer_line_6}}</p>
          <div class="button-wrapper">
            <b-button @click="step1">{{$lang.add.disclaimer_next_button}}</b-button>
          </div>

        </div>
        <div v-show="step === '1'">
          <p>
          {{$lang.add.individual_form_header}}
          </p>

          <b-row class="my-1">
            <b-col sm="3"><label :for="newUserInfo.firstName">{{$lang.add.name}}</label></b-col>
            <b-col sm="4"><b-form-input :id="newUserInfo.firstName" v-model="newUserInfo.firstName" type="text" :placeholder="this.$lang.add.firstname"></b-form-input></b-col>
            <b-col sm="5"><b-form-input :id="newUserInfo.lastName" v-model="newUserInfo.lastName" type="text" :placeholder="this.$lang.add.lastname"></b-form-input></b-col>
          </b-row>

          <b-row class="my-1">
            <b-col sm="3"><label :for="newUserInfo.company">{{$lang.add.company}} *</label></b-col>
            <b-col sm="9"><b-form-input :id="newUserInfo.company" v-model="newUserInfo.company" type="text" :required="step === '1'"></b-form-input></b-col>
          </b-row>

          <b-row class="my-1">
            <b-col sm="3"><label :for="newUserInfo.role">{{$lang.add.role}} *</label></b-col>
            <b-col sm="9"><b-form-input :id="newUserInfo.role" v-model="newUserInfo.role" type="text" :required="step === '1'"></b-form-input></b-col>
          </b-row>

          <b-row class="my-1">
            <b-col sm="3"><label :for="newUserInfo.email">{{$lang.add.email}} *</label></b-col>
            <b-col sm="9"><b-form-input :id="newUserInfo.email"  v-model="newUserInfo.email" type="email" :required="step === '1'"></b-form-input></b-col>
          </b-row>

          <b-row class="my-1">
            <b-col sm="3"><label :for="newUserInfo.identify" :required="step === '1'">{{$lang.add.how_do_you_identify}} *</label></b-col>
            <b-col sm="9">
              <b-form-group :label="$lang.add.select_all_apply">
                <b-form-checkbox-group name="newUserInfo.identify" stacked v-model="newUserInfo.identify" :options="identifyOptions">
                </b-form-checkbox-group>
              </b-form-group>
            </b-col>
          </b-row>

          <b-row class="my-1">
            <b-col sm="3"><label :for="newUserInfo.pronoun" :required="step === '1'">{{$lang.add.pronoun}} *</label></b-col>
            <b-col sm="9">
              <b-form-group :label="$lang.add.select_all_apply">
                <b-form-checkbox-group name="newUserInfo.pronoun" v-model="newUserInfo.pronoun" :options="pronounOptions">
                </b-form-checkbox-group>
              </b-form-group>
            </b-col>
          </b-row>

          <div class="button-wrapper"><b-button @click="restart" class="prev">{{$lang.add.prev}}</b-button> <b-button @click="step2">{{$lang.add.next}}</b-button></div>
        </div>
        <!-- Step 2 -->
        <div v-show="step === '2'">
          <h4>{{$lang.add.company_information}}</h4>
          <p>{{$lang.add.company_information_text_1}}</p>
          <p>{{$lang.add.company_information_text_2}}</p>

          <!-- <b-row class="my-1">
            <b-col sm="6"><label :for="newCompany.name" required>{{$lang.add.company_name}} *</label></b-col>
            <b-col sm="6"><b-form-input :id="newCompany.name" v-model="newCompany.name" type="text" :placeholder="$lang.add.company_name_hint" :required="step === '2'"></b-form-input></b-col>
          </b-row> -->

          <b-row class="my-1">
            <b-col sm="6"><label :for="newCompany.name" required>{{$lang.add.company_name}} *</label></b-col>
            <b-col sm="6">
            <v-autocomplete :items="companyAutoCompleteItems" v-model="companyAutoCompleteItem" :get-label="getLabel" :component-item='template' @update-items="updateItems"  @item-selected="itemSelected" @change="companyFieldBlur" @item-clicked="itemClicked" :min-len='1' :auto-select-one-item='false' :id="newUserInfo.Company" :input-attrs="{'type': 'input', 'class': 'form-control', ':placeholder': '$lang.add.company_name_hint' }" :placeholder="$lang.add.company_name_hint"></v-autocomplete>

            <span class="company-matched-hint" v-if="this.isCompanyMatched"> 💡{{newCompany.name}} {{$lang.add.company_matched_hint}}</span>
            </b-col>
          </b-row>
          <b-row class="my-1">
            <b-col sm="6"><label :for="newCompany.website" required>{{$lang.add.website}}</label></b-col>
            <b-col sm="6"><b-form-input :id="newCompany.website" v-model="newCompany.website" type="text" :placeholder="$lang.add.website_hint"></b-form-input></b-col>
          </b-row>
          <b-row class="my-1">
            <b-col sm="6"><label :for="newCompany.linkedin" required>{{$lang.add.linkedin}}</label></b-col>
            <b-col sm="6"><b-form-input :id="newCompany.linkedin" v-model="newCompany.linkedin" type="text" :placeholder="$lang.add.linkedin_hint"></b-form-input></b-col>
          </b-row>
          <b-row class="my-1">
            <b-col sm="6"><label :for="newCompany.industry">{{$lang.add.industry}}</label></b-col>
            <b-col sm="6">
              <b-form-select v-model="newCompany.industry" :options="industryOptions" class="mb-3" :id="newCompany.industry">
                <template slot="first">
                  <!-- this slot appears above the options from 'options' prop -->
                  <option :value="null" disabled>-- {{$lang.add.select_an_option}} --</option>
                </template>
              </b-form-select>
            </b-col>
          </b-row>

          <b-row class="my-1">
            <b-col sm="6"><label :for="newCompany.companySize">{{$lang.add.company_size}}</label></b-col>
            <b-col sm="6">
              <b-form-select v-model="newCompany.companySize" :options="sizeOptions" class="mb-3" :id="newCompany.companySize">
                <template slot="first">
                  <option :value="null" disabled>-- {{$lang.add.select_an_option}} --</option>
                </template>
              </b-form-select>
            </b-col>
          </b-row>

          <b-row class="my-1">
            <b-col sm="12">
              <h4>{{$lang.add.what_makes_friendly}}</h4>
              <p>{{$lang.add.what_makes_friendly_text}}</p>
            </b-col>
          </b-row>

          <b-row class="my-1">
            <b-col sm="6"><label :for="newCompany.visibility" required>{{$lang.add.visibility_text}} *</label></b-col>
            <b-col sm="6">
              <b-form-group :label="$lang.add.select_all_apply">
                <b-form-checkbox-group name="newCompany.visibility" stacked v-model="newCompany.visibility" :options="visibilityOptions">
                </b-form-checkbox-group>
              </b-form-group>
            </b-col>
          </b-row>

          <b-row class="my-1">
            <b-col sm="6"><label :for="newCompany.policies">{{$lang.add.policies_text}}</label></b-col>
            <b-col sm="6">
              <b-form-group :label="$lang.add.select_all_apply">
                <b-form-checkbox-group name="newCompany.policies" stacked v-model="newCompany.policies" :options="policiesOptions">
                </b-form-checkbox-group>
              </b-form-group>
            </b-col>
          </b-row>

          <b-row class="my-1">
            <b-col sm="6"><label :for="newCompany.benefits">{{$lang.add.benefits_text}}</label></b-col>
            <b-col sm="6">
              <b-form-group :label="$lang.add.select_all_apply">
                <b-form-checkbox-group name="newCompany.benefits" stacked v-model="newCompany.benefits" :options="benefitsOptions">
                </b-form-checkbox-group>
              </b-form-group>
            </b-col>
          </b-row>

          <b-row class="my-1">
            <b-col sm="6"><label :for="newCompany.space">{{$lang.add.spaces_text}}</label></b-col>
            <b-col sm="6">
              <b-form-group :label="$lang.add.select_all_apply">
                <b-form-checkbox-group name="newCompany.space" stacked v-model="newCompany.space" :options="spaceOptions">
                </b-form-checkbox-group>
              </b-form-group>
            </b-col>
          </b-row>

          <b-row class="my-1">
            <b-col sm="6"><label :for="newCompany.community">{{$lang.add.community_text}}</label></b-col>
            <b-col sm="6">
              <b-form-group :label="$lang.add.select_all_apply">
                <b-form-checkbox-group name="newCompany.community" stacked v-model="newCompany.community" :options="communityOptions">
                </b-form-checkbox-group>
              </b-form-group>
            </b-col>
          </b-row>

          <b-row class="my-1">
            <b-col sm="6"><label :for="newCompany.sponsorship">{{$lang.add.sponsorship_text}}</label></b-col>
            <b-col sm="6">
              <b-form-group :label="$lang.add.select_all_apply">
                <b-form-checkbox-group name="newCompany.sponsorship" stacked v-model="newCompany.sponsorship" :options="sponsorshipOptions">
                </b-form-checkbox-group>
              </b-form-group>
            </b-col>
          </b-row>

          <div class="button-wrapper"><b-button @click="step1" class="prev">{{$lang.add.prev}}</b-button> <b-button @click="step3">{{$lang.add.next}}</b-button></div>
        </div>
        <div v-show="step === '3'">
          <h4>{{$lang.add.company_information}}</h4>
          <b-row class="my-1">
          <b-col sm="12"><label :for="newThoughts">{{$lang.add.final_thoughts_text}}</label>
            <p>{{$lang.add.final_thoughts_text_2}}</p>
          </b-col>
            <b-col sm="12">
              <b-form-textarea :id="newThoughts"
                         v-model="newThoughts"
                         :placeholder="$lang.add.final_thoughts_hint"
                         :rows="7"
                         :max-rows="20">
              </b-form-textarea>
            </b-col>

          </b-row>
          <div class="button-wrapper"><b-button @click="step2" class="prev">{{$lang.add.prev}}</b-button> <b-button type="submit">{{$lang.add.submit}}</b-button></div>
        </div>

        <div v-show="step === 'success'" class="success">
          <h1>👍</h1>
          <h4>{{$lang.add.success_message_title}}</h4>

          <p>{{$lang.add.success_message_text_1}}</p>
          <p>{{$lang.add.success_message_text_2}}</p>
          <p>{{$lang.add.success_message_text_3}}</p>
          <p>{{$lang.add.success_message_text_4}}</p>
          <p>{{$lang.add.success_message_text_5}}</p>

          <div class="button-wrapper">
            <b-button :to="{name:'list'}">{{$lang.add.view_my_entry}}</b-button>
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
import FormOptions from '../models/form-options'
import Company from '../models/company'
import Contributor from '../models/contributor'
import Autocomplete from 'v-autocomplete'
import ItemTemplate from './ItemTemplate.vue'

export default {
  components: {'v-autocomplete': Autocomplete},
  data () {
    return {
      step: 'disclaimer',
      defaultNewCompany: new Company(),
      newUserInfo: new Contributor(),
      companyAutoCompleteItem: null,
      companyAutoCompleteItems: [],
      template: ItemTemplate,
      newThoughts: ''
    }
  },
  computed: {
    identifyOptions () {
      const translatedForm = new FormOptions(this.$lang)
      return translatedForm.identifyOptions
    },

    pronounOptions () {
      const translatedForm = new FormOptions(this.$lang)
      return translatedForm.pronounOptions
    },

    industryOptions () {
      const translatedForm = new FormOptions(this.$lang)
      return translatedForm.industryOptions
    },

    sizeOptions () {
      const translatedForm = new FormOptions(this.$lang)
      return translatedForm.sizeOptions
    },

    visibilityOptions () {
      const translatedForm = new FormOptions(this.$lang)
      return translatedForm.visibilityOptions
    },

    benefitsOptions () {
      const translatedForm = new FormOptions(this.$lang)
      return translatedForm.benefitsOptions
    },

    policiesOptions () {
      const translatedForm = new FormOptions(this.$lang)
      return translatedForm.policiesOptions
    },

    spaceOptions () {
      const translatedForm = new FormOptions(this.$lang)
      return translatedForm.spaceOptions
    },

    communityOptions () {
      const translatedForm = new FormOptions(this.$lang)
      return translatedForm.communityOptions
    },

    sponsorshipOptions () {
      const translatedForm = new FormOptions(this.$lang)
      return translatedForm.sponsorshipOptions
    },

    isCompanyMatched () {
      return !!(this.companyAutoCompleteItem)
    },

    newCompany () {
      return this.companyAutoCompleteItem ? this.companyAutoCompleteItem : this.defaultNewCompany
    }
  },
  mounted: function () {
    Company.fetchAllCompanies().then(companies => {
      this.companyAutoCompleteItems = companies
    })
  },
  methods: {
    getLabel (item) {
      if (item) {
        return item.name
      }
      return ''
    },
    updateItems (text) {
      console.log('text: ' + text)
      console.log(Company.allCompanies)
      this.companyAutoCompleteItems = Company.allCompanies.filter((item) => {
        return (new RegExp(text.toLowerCase())).test(item.name.toLowerCase())
      })
    },
    itemSelected (item) {
      console.log('Selected item!', item)
    },
    itemClicked (item) {
      console.log('You clicked an item!', item)
    },
    companyFieldBlur (text) {
      console.log(text)
      console.log(this.companyAutoCompleteItem)
      this.defaultNewCompany.name = text
    },
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
        if (confirm(this.$lang.add.confirm_submission_message) === true) {
          this.step = 'success'

          this.newUserInfo.save().then((user) => {
            let toSaveCompany = this.newCompany
            if (this.newCompany instanceof Company !== true) {
              toSaveCompany = new Company(this.newCompany)
            }

            toSaveCompany.referenceAuthor(user)
            toSaveCompany.thoughts = this.newThoughts
            toSaveCompany.live = true // default will show on the list
            toSaveCompany.save()
          }, (error) => {
            console.error(error)
          })
        }
      }
    },
    restart: function () {
      if (confirm(this.$lang.add.clear_prompt) === true) {
        this.step = 'disclaimer'
      }
    },
    clearFormData: function () {
      this.defaultNewCompany = Company()
      this.item = null
      this.newUserInfo = new Contributor()
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
