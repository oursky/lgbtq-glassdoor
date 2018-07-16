<template>
  <b-container class="full company-list-view" fluid>
    <b-row>
      <b-col cols="12" sm="3" xl="2" class="list-menu">
        <b-button :to="{name: 'add'}">Add company</b-button>

        <b-list-group>
          <b-list-group-item>Industry</b-list-group-item>
          <b-list-group-item>Non-Discrimination Policy</b-list-group-item>
          <b-list-group-item>Campany Size</b-list-group-item>
          <b-list-group-item>Public Sponsorship</b-list-group-item>
          <b-list-group-item>Visibility</b-list-group-item>
          <b-list-group-item>Space</b-list-group-item>
          <b-list-group-item>Support & Benfits</b-list-group-item>
          <b-list-group-item>Community</b-list-group-item>
        </b-list-group>
        <b-button>Clear</b-button>
      </b-col>
      <b-col cols="9">
        <h4>All listings</h4>
        <b-card-group deck>
            <template v-for="company in this.companies">
              <b-link :to="{name: 'detail'}" href='#' v-bind:key="company">
              <b-card :title="company.name"
                      v-bind:key="company"
                      class="company-card"
                      >
                  <p>{{company.industry}}</p>
                  <p>👥 {{company.size}}</p>
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
  components: {},
  data () {
    return {
      companies: [],
      currentFilters: []
    }
  },
  mounted: function () {
    // load Companies
    this.companies = Company.fetchAllCompanies()
  },
  methods: {
    clear: function () {
      this.currentFilters = []
    },
    loadCachedList: function () {
      this.companies = []
    }
  }
}
</script>
