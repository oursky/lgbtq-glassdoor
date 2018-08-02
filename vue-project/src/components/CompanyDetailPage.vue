<template>
  <b-container class="detail-container">
    <b-link :to="'/list'">◄ {{$lang.detail.back}}</b-link>

    <div v-if="company">
      <h1>{{company.name}}</h1>
      <p class="industry">{{company.industry}}</p>
      <p>👥 {{company.companySize || '-'}}</p>
      <p><b-link :href="company.website" target="_blank" v-if="company.website">🌐 {{$lang.detail.website}}</b-link></p>
      <p><b-link :href="company.linkedin" target="_blank" v-if="company.linkedin">🔗 {{$lang.detail.linkedin}}</b-link></p>
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

      <h4>💬 {{$lang.detail.comments}}</h4>
      <b-card-group deck v-if="company.thoughts">
        <b-card class="company-card" v-bind:key="company.name">
          <p><pre>{{company.thoughts}}</pre></p>
          <p><small class="text-muted" v-if="company.createdAt">{{$lang.detail.posted_on}} {{company.createdAt.toLocaleDateString()}}</small></p>
        </b-card>
      </b-card-group>
      <p v-else>{{$lang.detail.comments_empty}}</p>
      <p><small class="text-muted" v-if="company.createdAt">{{$lang.detail.submitted_on}} {{company.createdAt.toLocaleDateString()}}</small></p>
    </div>
    <div v-else>
      💡 {{$lang.detail.loading}}
    </div>

  </b-container>
</template>

<script>

import Company from '../models/company'

export default {
  props: ['companyName'],
  data () {
    return {
      company: null
    }
  },
  mounted: function () {
    // load Company
    Company.fetchAllCompanies().then((companies) => {
      let companyList = Company.getCompany(this.companyName)
      console.log(this.companyName)
      console.log(companyList)
      this.company = companyList[0]
    })
  },
  methods: {
  }
}
</script>
