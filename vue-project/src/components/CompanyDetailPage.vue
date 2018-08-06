<template>
  <b-container class="detail-container">
    <b-link :to="'/list'">◄ {{$lang.detail.back}}</b-link>

    <div v-if="company">
      <h1>{{company.name}}</h1>
      <p>{{toIndustryText(company.industry)}}</p>
      <p>👥 {{company.companySize || '-'}}</p>
      <p><b-link :href="company.website" target="_blank" v-if="company.website">🌐 {{$lang.detail.website}}</b-link></p>
      <p><b-link :href="company.linkedin" target="_blank" v-if="company.linkedin">🔗 {{$lang.detail.linkedin}}</b-link></p>
      <!-- Tags -->
      <template v-for="visibilityTag in company.visibility">
        <b-link :to="{name:'tag', params: { cat: 'visibility', tag: visibilityTag }}" v-bind:key="company.name+'visibilityTag'+visibilityTag">
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
import FormOptions from '../form-options'
import Tag from '../models/tag'

export default {
  props: ['companyName'],
  data () {
    return {
      company: null,
      allTags: Tag.fetchAllTags()
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
  computed: {
    industryOptions () {
      const translatedForm = new FormOptions(this.$lang)
      return translatedForm.industryOptions
    }
  },
  methods: {
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
    }
  }
}
</script>
