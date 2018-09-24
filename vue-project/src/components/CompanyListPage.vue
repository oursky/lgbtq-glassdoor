<template>
  <b-container class="full" fluid>
    <b-row>
      <b-col cols="12" class="search-bar" :v-show="search">
        <b-form-input size="sm" class="mr-sm-2 search" type="text" :placeholder="searchHint" v-model="searchQuery" v-on:input="searchHandler" id="search" ref="search"/>
          <b-tooltip target="search" placement="bottom">
            {{$lang.list.search_hint}}
          </b-tooltip>
      </b-col>
    </b-row>
    <b-row class="company-list-view">
      <b-col cols="12" sm="4" md="3" xl="2" class="list-menu">
        <b-button :to="{name: 'add'}" class="add-company-button">{{$lang.list.add_company}}</b-button>

        <h4 class="filter-header">{{$lang.list.filter_by}}</h4>
        <b-list-group>
          <b-list-group-item>{{$lang.list.industry}}
            <b-button class="add-filter-button" variant="link" id="industryPopOver">+</b-button>
            <hr>
            <div v-for="selectedFilter in industryFilters" v-bind:key="selectedFilter" class="selectedFilter" v-html="toIndustryText(selectedFilter)"></div>
            <b-popover target="industryPopOver" title="Industry" triggers="click blur">
              <b-form-checkbox-group id="industry" name="industry" v-model="industryFilters">
              <div v-for="industry in industryOptions" v-bind:key="industry.value">
                <b-form-checkbox :value="industry.value">
                  {{industry.text}}
                </b-form-checkbox>
              </div>
              </b-form-checkbox-group>
            </b-popover>
          </b-list-group-item>
           <b-list-group-item>
            {{$lang.list.visibility}}
            <b-button class="add-filter-button" variant="link" id="visibilityPopOver">+</b-button>
            <hr>
            <div v-for="selectedFilter in visibilityFilters" v-bind:key="selectedFilter" class="selectedFilter" v-html="tagToText('visibility', selectedFilter)"></div>
            <b-popover target="visibilityPopOver" title="Visibility" triggers="click blur">
              <b-form-checkbox-group id="visibility" name="visibility" v-model="visibilityFilters">
                <div v-for="visibility in visibilityOptions" v-bind:key="visibility.value">
                  <b-form-checkbox :value="visibility.value">
                    {{visibility.text}}
                  </b-form-checkbox>
                </div>
              </b-form-checkbox-group>
            </b-popover>
          </b-list-group-item>
          <b-list-group-item>
            {{$lang.list.policy}}
            <b-button class="add-filter-button" variant="link" id="policiesPopOver">+</b-button>
            <hr>
            <div v-for="selectedFilter in policiesFilters" v-bind:key="selectedFilter" class="selectedFilter" v-html="tagToText('policies', selectedFilter)"></div>
            <b-popover target="policiesPopOver" title="Non-Discrimination Policy" triggers="click blur">
              <b-form-checkbox-group id="policies" name="policies" v-model="policiesFilters">
                <div v-for="policies in policiesOptions" v-bind:key="policies.value">
                  <b-form-checkbox :value="policies.value">
                    {{policies.text}}
                  </b-form-checkbox>
                </div>
              </b-form-checkbox-group>
            </b-popover>
          </b-list-group-item>
          <b-list-group-item>
            {{$lang.list.size}}
            <b-button class="add-filter-button" variant="link" id="sizePopOver">+</b-button>
            <hr>
            <div v-for="selectedFilter in companySizeFilters" v-bind:key="selectedFilter" class="selectedFilter" v-html="tagToText('companySize', selectedFilter)"></div>
            <b-popover target="sizePopOver" title="Company Size" triggers="click blur">
              <b-form-checkbox-group id="companySize" name="companySize" v-model="companySizeFilters">
                <div v-for="companySize in sizeOptions" v-bind:key="companySize.value">
                  <b-form-checkbox :value="companySize.value">
                    {{companySize.text}}
                  </b-form-checkbox>
                </div>
            </b-form-checkbox-group>
            </b-popover>
          </b-list-group-item>
          <b-list-group-item>
            {{$lang.list.sponsorship}}
            <b-button class="add-filter-button" variant="link" id="sponsorshipPopOver">+</b-button>
            <hr>
            <div v-for="selectedFilter in sponsorshipFilters" v-bind:key="selectedFilter" class="selectedFilter" v-html="tagToText('sponsorship', selectedFilter)"></div>
            <b-popover target="sponsorshipPopOver" title="Public Sponsorship" triggers="click blur">
              <b-form-checkbox-group id="sponsorship" name="sponsorship" v-model="sponsorshipFilters">
                <div v-for="sponsorship in sponsorshipOptions" v-bind:key="sponsorship.value">
                  <b-form-checkbox :value="sponsorship.value">
                    {{sponsorship.text}}
                  </b-form-checkbox>
                </div>
              </b-form-checkbox-group>
            </b-popover>
          </b-list-group-item>
          <b-list-group-item>
            {{$lang.list.space}}
            <b-button class="add-filter-button" variant="link" id="spacePopOver">+</b-button>
            <hr>
            <div v-for="selectedFilter in spaceFilters" v-bind:key="selectedFilter" class="selectedFilter" v-html="tagToText('space', selectedFilter)"></div>
            <b-popover target="spacePopOver" title="Space" triggers="click blur">
              <b-form-checkbox-group id="space" name="space" v-model="spaceFilters">
                <div v-for="space in spaceOptions" v-bind:key="space.value">
                  <b-form-checkbox :value="space.value">
                    {{space.text}}
                  </b-form-checkbox>
                </div>
              </b-form-checkbox-group>
            </b-popover>
          </b-list-group-item>
          <b-list-group-item>
            {{$lang.list.benefits}}
            <b-button class="add-filter-button" variant="link" id="benefitsPopOver">+</b-button>
            <hr>
            <div v-for="selectedFilter in benefitsFilters" v-bind:key="selectedFilter" class="selectedFilter" v-html="tagToText('benefits', selectedFilter)"></div>
            <b-popover target="benefitsPopOver" title="Support & Benefits" triggers="click blur">
              <b-form-checkbox-group id="benefits" name="benefits" v-model="benefitsFilters">
                <div v-for="benefits in benefitsOptions" v-bind:key="benefits.value">
                  <b-form-checkbox :value="benefits.value">
                    {{benefits.text}}
                  </b-form-checkbox>
                </div>
              </b-form-checkbox-group>
            </b-popover>
          </b-list-group-item>
          <b-list-group-item>
            {{$lang.list.community}}
            <b-button class="add-filter-button" variant="link" id="communityPopOver">+</b-button>
            <hr>
            <div v-for="selectedFilter in communityFilters" v-bind:key="selectedFilter" class="selectedFilter" v-html="tagToText('community', selectedFilter)"></div>
            <b-popover target="communityPopOver" title="Community" triggers="click blur">
              <b-form-checkbox-group id="community" name="community" v-model="communityFilters">
                <div v-for="community in communityOptions" v-bind:key="community.value">
                  <b-form-checkbox :value="community.value">
                    {{community.text}}
                  </b-form-checkbox>
                </div>
              </b-form-checkbox-group>
            </b-popover>
          </b-list-group-item>
        </b-list-group>
        <b-button class="clear-button" variant="link" @click="clear">{{$lang.list.clear}}</b-button>

        <b-list-group class="disclaimer-container">
          <b-list-group-item><h5>{{$lang.list.disclaimer_title}}</h5>
          <p>{{$lang.list.disclaimer_text}}</p></b-list-group-item>
        </b-list-group>

      </b-col>
      <b-col cols="12" sm="8" md="9" xl="10" class="text-sm-left text-center">
        <h4>🌈 {{$lang.list.all_listings}}</h4>
        <b-card-group deck>
            <template v-for="company in this.filteredCompanies">
              <b-link :to="'/detail/'+company.name" v-bind:key="company.id">
              <b-card :title="company.name"
                      class="company-card"
                      v-bind:key="company.name"
                  >
                  <p>{{toIndustryText(company.industry)}}</p>
                  <p>👥 {{company.companySize || '-'}}</p>

                  <p><a :href="company.website" target="_blank" v-if="company.website" @click="openURL(company.website)">🌐 {{$lang.list.website}}</a></p>
                  <p><a :href="company.linkedin" target="_blank" v-if="company.linkedin" @click="openURL(company.linkedin)">🔗 {{$lang.list.linkedin}}</a></p>
                  <!-- Tags -->
                  <template v-for="visibilityTag in company.visibility">
                    <b-link :to="{name:'tag', params: { cat: 'visibility', tag: visibilityTag }}" v-bind:key="company.name+'visibilityTag'+visibilityTag" exact>
                      <span class="badge badge-pill badge-secondary" v-html="tagToText('visibility', visibilityTag)"></span>
                    </b-link>
                  </template>

                  <template v-for="policiesTag in company.policies">
                    <b-link :to="{name:'tag', params: { cat: 'policies', tag: policiesTag }}" v-bind:key="company.name+'policiesTag'+policiesTag">
                      <span class="badge badge-pill badge-success" v-html="tagToText('policies', policiesTag)"></span>
                    </b-link>
                  </template>

                  <template v-for="communityTag in company.community">
                    <b-link :to="{name:'tag', params: { cat: 'community', tag: communityTag }}" v-bind:key="company.name+'communityTag'+communityTag">
                      <span class="badge badge-pill badge-danger" v-html="tagToText('community', communityTag)"></span>
                    </b-link>
                  </template>

                  <template v-for="benefitsTag in company.benefits">
                    <b-link :to="{name:'tag', params: { cat: 'benefits', tag: benefitsTag }}" v-bind:key="company.name+'benefitsTag'+benefitsTag">
                      <span class="badge badge-pill badge-warning" v-html="tagToText('benefits', benefitsTag)"></span>
                    </b-link>
                  </template>

                  <template v-for="spaceTag in company.space">
                    <b-link :to="{name:'tag', params: { cat: 'space', tag: spaceTag }}" v-bind:key="company.name+'spaceTag'+spaceTag">
                      <span class="badge badge-pill badge-info" v-html="tagToText('space', spaceTag)"></span>
                    </b-link>
                  </template>

                  <template v-for="sponsorshipTag in company.sponsorship">
                    <b-link :to="{name:'tag', params: { cat: 'sponsorship', tag: sponsorshipTag }}" v-bind:key="company.name+'sponsorshipTag'+sponsorshipTag">
                      <span class="badge badge-pill badge-primary" v-html="tagToText('sponsorship', sponsorshipTag)"></span>
                    </b-link>
                  </template>

              </b-card>
              </b-link>
            </template>
        </b-card-group>
        <div v-if="this.filteredCompanies.length == 0" class="empty-message">
          <p>{{$lang.list.no_match}}</p>
          <p>{{$lang.list.no_match_text}}</p>
          <br>
          <b-button :to="{name: 'add'}" variant="outline-secondary">{{$lang.list.add_company}}</b-button>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>

import Company from '../models/company'
import FormOptions from '../models/form-options'
import Tag from '../models/tag'

export default {
  props: ['search', 'searchText'],
  components: {},
  data () {
    return {
      cat: this.$route.params.cat,
      tag: this.$route.params.tag,
      searchQuery: '',
      companies: Company.allCompanies,
      industryFilters: [],
      visibilityFilters: [],
      policiesFilters: [],
      companySizeFilters: [],
      sponsorshipFilters: [],
      spaceFilters: [],
      benefitsFilters: [],
      communityFilters: [],
      FormOptions: FormOptions,
      allTags: Tag.fetchAllTags(),
      show: false
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
    searchHint: function () {
      return this.$lang.list.search_text
    },
    filteredCompanies: function () {
      let result = this.matchedCompanies.filter(company => {
        let currentFilters = {
          // industry: this.industryFilters, // Handle industry independently
          visibility: this.visibilityFilters,
          policies: this.policiesFilters,
          companySize: this.companySizeFilters,
          sponsorship: this.sponsorshipFilters,
          space: this.spaceFilters,
          benefits: this.benefitsFilters,
          community: this.communityFilters
        }

        for (let key in currentFilters) {
          let companyTag = company[key]
          let tagsRequired = currentFilters[key]

          if (!tagsRequired || tagsRequired.length === 0) { continue } // skip if no tag is required
          if (!companyTag) {
            return false // if there is tag requirement but no tag in company, it fails
          }

          for (let tagKey in tagsRequired) {
            if (!companyTag.includes(tagsRequired[tagKey])) {
              return false // Fail one tag requirement = fail
            } else {
            }
          }
        }
        return true
      })

      // Match industry
      result = result.filter(company => {
        let industryFilters = this.industryFilters
        if (industryFilters.length === 0 ) {
          return true
        }
        return industryFilters.includes(company.industry)
      })

      return result
    },
    matchedCompanies: {
      get: function (companies) {
        return this.companies.filter(company => {
          let query = this.searchQuery
          let result = company.name.match(new RegExp('[^,]*' + query + '[^,]*', 'ig'))
          return result
        })
      },
      set: function (value) {
      }
    }
  },
  beforeRouteUpdate (to, next) {
    this.cat = to.params.cat
    this.tag = to.params.tag

    if (this.cat && this.tag) {
      this.addFilter(this.cat, this.tag)
      window.history.pushState(null, '', '#/tag/' + this.cat + '/' + this.tag)
    }
  },
  mounted: function () {
    // load Companies
    this.loadRemoteCompanies()

    console.log('mounted')

    if (this.search) {
      this.$refs.search.focus()
    }

    this.searchQuery = this.searchText ? this.searchText : ''

    if (this.cat && this.tag) {
      console.log('add tag')
      this.addFilter(this.cat, this.tag)
    }
  },
  methods: {
    addFilter: function (cat, tag) {
      this.clear()
      switch (cat) {
        case 'industry':
          this.industryFilters.push(tag)
          break
        case 'visibility':
          this.visibilityFilters.push(tag)
          break
        case 'benefits':
          this.benefitsFilters.push(tag)
          break
        case 'policies':
          this.policiesFilters.push(tag)
          break
        case 'space':
          this.spaceFilters.push(tag)
          break
        case 'community':
          this.communityFilters.push(tag)
          break
        case 'sponsorship':
          this.sponsorshipFilters.push(tag)
          break
        case 'companySize':
          this.companySizeFilters.push(tag)
          break
        default:
          console.log('no match Category')
      }
    },
    clear: function () {
      this.industryFilters = []
      this.visibilityFilters = []
      this.policiesFilters = []
      this.companySizeFilters = []
      this.sponsorshipFilters = []
      this.spaceFilters = []
      this.benefitsFilters = []
      this.communityFilters = []
    },
    loadRemoteCompanies: function () {
      Company.fetchAllCompanies().then((resultCompanies) => {
        this.companies = resultCompanies
        this.searchHandler()
      }, (error) => {
        console.error(error)
      })
    },
    searchHandler: function () {
      this.matchedCompanies = this.companies.filter(company => {
        let query = this.searchQuery
        let result = company.name.match(new RegExp('[^,]*' + query + '[^,]*', 'ig'))
        return result
      })
      window.history.pushState(null, '', '#/search/' + this.searchQuery)
    },
    tagToText: function (cat, tagValue) {
      try {
        let tagCat = this.allTags[cat]
        let tagObject = tagCat[tagValue]

        if (this.$lang.getLang() === 'en') {
          return tagObject.en
        }

        if (this.$lang.getLang() === 'zh-cn') {
          return tagObject.zh
        }
      } catch (e) {
        // console.error(e)
      }
      return ''
    },
    toIndustryText: function (tagValue) {
      let result = this.industryOptions.filter(function (item) {
        return item.value === tagValue
      })

      return result.length > 0 ? result[0].text : ''
    },
    openURL: function (url) {
      window.open(url)
    }
  }
}
</script>
