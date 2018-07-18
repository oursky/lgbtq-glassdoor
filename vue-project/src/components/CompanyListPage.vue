<template>
  <b-container class="full" fluid>
    <b-row>
      <b-col cols="12" class="search-bar" :v-show="search">
        🔍 Search Function Work in Progress
      </b-col>
    </b-row>
    <b-row class="company-list-view">
      <b-col cols="12" sm="4" md="3" xl="2" class="list-menu">
        <b-button :to="{name: 'add'}" class="add-company-button">Add company</b-button>

        <b-list-group>
          <b-list-group-item>Industry
            <b-button class="add-filter-button" variant="link">+</b-button>
          </b-list-group-item>
          <b-list-group-item>
            Non-Discrimination Policy
            <b-button class="add-filter-button" variant="link">+</b-button>
          </b-list-group-item>
          <b-list-group-item>
            Campany Size
            <b-button class="add-filter-button" variant="link">+</b-button>
          </b-list-group-item>
          <b-list-group-item>
            Public Sponsorship
            <b-button class="add-filter-button" variant="link">+</b-button>
          </b-list-group-item>
          <b-list-group-item>
            Visibility
            <b-button class="add-filter-button" variant="link">+</b-button>
          </b-list-group-item>
          <b-list-group-item>
            Space
            <b-button class="add-filter-button" variant="link">+</b-button>
          </b-list-group-item>
          <b-list-group-item>
            Support & Benfits
            <b-button class="add-filter-button" variant="link">+</b-button>
          </b-list-group-item>
          <b-list-group-item>
            Community
            <b-button class="add-filter-button" variant="link">+</b-button>
          </b-list-group-item>
        </b-list-group>
        <b-button class="clear-button" variant="link">Clear</b-button>
      </b-col>
      <b-col cols="12" sm="8" md="9" xl="10" class="text-sm-left text-center">
        <h4>🌈 All listings</h4>
        <b-card-group deck>
            <template v-for="company in this.companies">
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
      </b-col>
    </b-row>

  </b-container>
</template>

<script>

import Company from '../models/company'

export default {
  props: ['search'],
  components: {},
  data () {
    return {
      companies: [],
      currentFilters: []
    }
  },
  mounted: function () {
    // load Companies
    this.loadCachedList()
    this.loadRemoteCompanies()

    if (this.search) {
      this.showSearch()
    }
  },
  methods: {
    clear: function () {
      this.currentFilters = []
    },
    loadCachedList: function () {
      this.companies = this.companies.concat(Company.getDefaultCompanies())
    },
    loadRemoteCompanies: function () {
      Company.fetchAllCompanies().then((companies) => {
        this.companies = this.companies.concat(Array.from(companies))
      }, (error) => {
        console.error(error)
      })
    }
  }
}
</script>
