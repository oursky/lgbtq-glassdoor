<template>
  <b-container class="full" fluid>
    <b-row>
      <b-col cols="12" class="search-bar" :v-show="search">
        <b-form-input size="sm" class="mr-sm-2 search" type="text" placeholder="🔍 Search by any keyword" v-model="searchText" v-on:input="searchHandler" id="search" ref="search"/>
          <b-tooltip target="search" placement="bottom">
            🔮 Search for a company!
          </b-tooltip>
      </b-col>
    </b-row>
    <b-row class="company-list-view">
      <b-col cols="12" sm="4" md="3" xl="2" class="list-menu">
        <b-button :to="{name: 'add'}" class="add-company-button">Add company</b-button>

        <h4 class="filter-header">Filter by</h4>
        <b-list-group>
          <b-list-group-item>Industry
            <b-button class="add-filter-button" variant="link" id="industryPopOver">+</b-button>
            <b-popover target="industryPopOver" title="Industry" triggers="focus">
              <b-form-checkbox-group id="industry" name="industry" v-model="currentFilters.industry">
              <div v-for="industry in FormOptions.industryOptions" v-bind:key="industry.value">
                <b-form-checkbox :value="industry.value">
                  {{industry.value}}
                </b-form-checkbox>
              </div>
              </b-form-checkbox-group>
            </b-popover>
          </b-list-group-item>
          <b-list-group-item>
            Non-Discrimination Policy
            <b-button class="add-filter-button" variant="link" id="policiesPopOver">+</b-button>
            <b-popover target="policiesPopOver" title="Non-Discrimination Policy" triggers="focus">
              <b-form-checkbox-group id="policy" name="policy" v-model="currentFilters.policy">
                <div v-for="policy in FormOptions.policiesOptions" v-bind:key="policy.value">
                  <b-form-checkbox :value="policy.value">
                    {{policy.value}}
                  </b-form-checkbox>
                </div>
              </b-form-checkbox-group>
            </b-popover>
          </b-list-group-item>
          <b-list-group-item>
            Campany Size
            <b-button class="add-filter-button" variant="link" id="sizePopOver">+</b-button>
            <b-popover target="sizePopOver" title="Campany Size" triggers="focus">
              <b-form-checkbox-group id="companySize" name="companySize" v-model="currentFilters.companySize">
                <div v-for="companySize in FormOptions.sizeOptions" v-bind:key="companySize.value">
                  <b-form-checkbox :value="companySize.value">
                    {{companySize.value}}
                  </b-form-checkbox>
                </div>
            </b-form-checkbox-group>
            </b-popover>
          </b-list-group-item>
          <b-list-group-item>
            Public Sponsorship
            <b-button class="add-filter-button" variant="link" id="sponsorshipPopOver">+</b-button>
            <b-popover target="sponsorshipPopOver" title="Public Sponsorship" triggers="focus">
              <b-form-checkbox-group id="sponsorship" name="sponsorship" v-model="currentFilters.sponsorship">
                <div v-for="sponsorship in FormOptions.sponsorshipOptions" v-bind:key="sponsorship.value">
                  <b-form-checkbox :value="sponsorship.value">
                    {{sponsorship.value}}
                  </b-form-checkbox>
                </div>
              </b-form-checkbox-group>
            </b-popover>
          </b-list-group-item>
          <b-list-group-item>
            Visibility
            <b-button class="add-filter-button" variant="link" id="visibilityPopOver">+</b-button>
            <b-popover target="visibilityPopOver" title="Visibility" triggers="focus">
              <b-form-checkbox-group id="visibility" name="visibility" v-model="currentFilters.visibility">
                <div v-for="visibility in FormOptions.visibilityOptions" v-bind:key="visibility.value">
                  <b-form-checkbox :value="visibility.value">
                    {{visibility.value}}
                  </b-form-checkbox>
                </div>
              </b-form-checkbox-group>
            </b-popover>
          </b-list-group-item>
          <b-list-group-item>
            Space
            <b-button class="add-filter-button" variant="link" id="spacePopOver">+</b-button>
            <b-popover target="spacePopOver" title="Space" triggers="focus">
              <b-form-checkbox-group id="space" name="space" v-model="currentFilters.space">
                <div v-for="space in FormOptions.spaceOptions" v-bind:key="space.value">
                  <b-form-checkbox :value="space.value">
                    {{space.value}}
                  </b-form-checkbox>
                </div>
              </b-form-checkbox-group>
            </b-popover>
          </b-list-group-item>
          <b-list-group-item>
            Support & Benefits
            <b-button class="add-filter-button" variant="link" id="benefitsPopOver">+</b-button>
            <b-popover target="benefitsPopOver" title="Support & Benefits" triggers="focus">
              <b-form-checkbox-group id="benefits" name="benefits" v-model="currentFilters.benefits">
                <div v-for="benefits in FormOptions.benefitsOptions" v-bind:key="benefits.value">
                  <b-form-checkbox :value="benefits.value">
                    {{benefits.value}}
                  </b-form-checkbox>
                </div>
              </b-form-checkbox-group>
            </b-popover>
          </b-list-group-item>
          <b-list-group-item>
            Community
            <b-button class="add-filter-button" variant="link" id="communityPopOver">+</b-button>
            <b-popover target="communityPopOver" title="Community" triggers="focus">
              <b-form-checkbox-group id="community" name="community" v-model="currentFilters.community">
                <div v-for="community in FormOptions.communityOptions" v-bind:key="community.value">
                  <b-form-checkbox :value="community.value">
                    {{community.value}}
                  </b-form-checkbox>
                </div>
              </b-form-checkbox-group>
            </b-popover>
          </b-list-group-item>
        </b-list-group>
        <b-button class="clear-button" variant="link" @click="clear">Clear</b-button>
      </b-col>
      <b-col cols="12" sm="8" md="9" xl="10" class="text-sm-left text-center">
        <h4>🌈 All listings</h4>
        <b-card-group deck>
            <template v-for="company in this.filteredCompanies">
              <b-link :to="'/detail/'+company.name" href='#' v-bind:key="company.url">
              <b-card :title="company.name"
                      class="company-card"
                      v-bind:key="company.name"
                      >
                  <p>{{company.industry}}</p>
                  <p>👥 {{company.companySize || '-'}}</p>
                  <!-- Tags -->
                  <template v-for="visibilityTag in company.visibility">
                    <b-link :to="{name:'tag', params: { tag: visibilityTag }}" v-bind:key="visibilityTag"><span class="badge badge-pill badge-secondary">{{visibilityTag}}</span></b-link>
                  </template>

                  <template v-for="policiesTag in company.policies">
                    <b-link :to="{name:'tag', params: { tag: policiesTag }}" v-bind:key="policiesTag"><span class="badge badge-pill badge-success">{{policiesTag}}</span></b-link>
                  </template>

                  <template v-for="communityTag in company.community">
                    <b-link :to="{name:'tag', params: { tag: communityTag }}" v-bind:key="communityTag"><span class="badge badge-pill badge-danger">{{communityTag}}</span></b-link>
                  </template>

                  <template v-for="benefitsTag in company.benefits">
                    <b-link :to="{name:'tag', params: { tag: benefitsTag }}" v-bind:key="benefitsTag"><span class="badge badge-pill badge-warning">{{benefitsTag}}</span></b-link>
                  </template>

                  <template v-for="spaceTag in company.space">
                    <b-link :to="{name:'tag', params: { tag: spaceTag }}" v-bind:key="spaceTag"><span class="badge badge-pill badge-info">{{spaceTag}}</span></b-link>
                  </template>

                  <template v-for="sponsorshipTag in company.sponsorship">
                    <b-link :to="{name:'tag', params: { tag: sponsorshipTag }}" v-bind:key="sponsorshipTag"><span class="badge badge-pill badge-primary">{{sponsorshipTag}}</span></b-link>
                  </template>
              </b-card>
              </b-link>
            </template>
        </b-card-group>
        <div v-if="this.filteredCompanies.length == 0" class="empty-message">
          <p>No mataching entries... yet. 👀</p>
          <p>Please help adding supporting organizations to this directory!</p>
          <br>
          <b-button :to="{name: 'add'}" variant="outline-secondary">Add a company</b-button>
        </div>
      </b-col>
    </b-row>

  </b-container>
</template>

<script>

import Company from '../models/company'
import FormOptions from '../form-options'

export default {
  props: ['search', 'searchText'],
  components: {},
  data () {
    return {
      companies: [],
      matchedCompanies: [],
      currentFilters: [],
      FormOptions: FormOptions,
      show: false
    }
  },
  computed: {
    filteredCompanies: function (currentFilters) {
      return this.getFilteredCompanies()
    }
  },
  mounted: function () {
    // load Companies
    this.loadCachedList()
    this.loadRemoteCompanies()

    if (this.search) {
      this.$refs.search.focus()
    }
  },
  methods: {
    getFilteredCompanies: function () {
      console.log('hey2')
      console.log(this.currentFilters)
      let result = this.matchedCompanies.filter(company => {
        console.log('processing: ' + company.name)
        for (let key in this.currentFilters) {
          let companyTag = company[key]
          let tagsRequired = this.currentFilters[key]

          if (tagsRequired.length === 0) { continue } // skip if no tag is required
          if (!companyTag) {
            console.log('no match tags')
            return false // if there is tag requirement but no tag in company, it fails
          }

          for (let tagKey in tagsRequired) {
            if (!companyTag.includes(tagsRequired[tagKey])) {
              console.log(tagsRequired[tagKey])
              console.log(`* ${company.name}: not matched ${tagsRequired[tagKey]} in ${key}`)
              return false // Fail one tag requirement = fail
            } else {
              console.log(`${company.name}: matched ${tagsRequired[tagKey]} in ${key}`)
            }
          }
        }
        return true
      })
      return result
    },
    clear: function () {
      this.currentFilters = {}
    },
    loadCachedList: function () {
      this.companies = this.companies.concat(Company.getDefaultCompanies())
      this.searchHandler()
    },
    loadRemoteCompanies: function () {
      Company.fetchAllCompanies().then((companies) => {
        this.companies = this.companies.concat(Array.from(companies))
        this.searchHandler()
      }, (error) => {
        console.error(error)
      })
    },
    searchHandler: function () {
      window.history.pushState(null, '', '#/search/' + this.searchText)
      this.matchedCompanies = this.companies.filter(company => {
        let query = this.searchText
        let result = company.name.match(new RegExp('[^,]*' + query + '[^,]*', 'ig'))
        return result
      })
    }
  }
}
</script>
