<template>
  <div class="landing full">
    <b-row class="full auto">
      <b-col cols="12" md="8" class="hero-container text-md-left text-center">
        <h1>LGBTQ Glassdoor</h1>
        <h2>Discover your work tribe</h2>
        <p>
          LGBTQ Glassdoor aims to help LGBTQ individuals share and find supportive work environments. LGBTQ individuals & allies can add inclusive companies even if they may not yet have official policies.
        </p>
        <div>
          <b-link :to="'add'"><div class="cta"><b-img src="../assets/plus-icon.png" alt="add company" class="icon"/>Add company</div></b-link>
          <b-link :to="'search'"><div class="cta"><b-img src="../assets/search-icon.png" alt="search" class="icon" />Search</div></b-link>
          <b-link :to="'list'"><div class="cta"><b-img src="../assets/list-icon.png" alt="all listings" class="icon" />All Listings</div></b-link>
        </div>
      </b-col>
      <b-col cols="12" md="4">
        <b-row>
          <b-col  class="add-company-container">
          <h3>Let's do it together!</h3>
          <p>Our goal is to crowdsource information on LGBTQ-friendly companies and workspaces for Hong Kong. </p><p>Anyone can add to the list and it is publicly available to view.</p>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="tags-container">
            <h4>View company by tags</h4>
            <div v-for="(category, catName) in this.allTags" v-bind:key="category">
              <b-link v-for="tag in category" v-bind:key="tag" :to="{name:'tag', params: { tag: tag }}"><span class="badge badge-pill badge-primary" :class="'badge-'+catName">{{tag}}</span></b-link>
            </div>

          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>

import Tag from '../models/tag'

export default {
  data () {
    return {
      allTags: {}
    }
  },
  mounted: function () {
    this.loadAllTags()
  },
  methods: {
    loadAllTags: function () {
      this.allTags = Tag.fetchAllTags()
      console.log(this.allTags)
    }
  },
  components: {}
}
</script>
