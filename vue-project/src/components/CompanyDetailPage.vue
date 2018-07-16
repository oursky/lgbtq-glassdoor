<template>
  <b-container class="full company-list-view" fluid>
    Detail

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
