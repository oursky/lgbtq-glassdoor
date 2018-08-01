<template>
  <div class="landing full">
    <b-row class="full auto">
      <b-col cols="12" md="8" class="hero-container text-md-left text-center">
        <h1>LGBTQ Glassdoor</h1>
        <h2>{{$lang.landing.tagline}}</h2>
        <p>
          {{$lang.landing.splash_text}}
        </p>
        <div>
          <b-link :to="'add'"><div class="cta"><b-img src="../assets/plus-icon.png" alt="add company" class="icon"/>{{$lang.landing.add_company}}</div></b-link>
          <b-link :to="'search'"><div class="cta"><b-img src="../assets/search-icon.png" alt="search" class="icon" />{{$lang.landing.search}}</div></b-link>
          <b-link :to="'list'"><div class="cta"><b-img src="../assets/list-icon.png" alt="all listings" class="icon" />{{$lang.landing.all_listings}}</div></b-link>
        </div>
      </b-col>
      <b-col cols="12" md="4">
        <b-row>
          <b-col  class="add-company-container">
          <h3>{{$lang.landing.lets_do_it_together}}</h3>
          <p>{{$lang.landing.lets_do_it_together_text}}</p>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="tags-container">
            <h4>{{$lang.landing.view_company_text}}</h4>
            <div v-for="(category, catName) in this.allTags" v-bind:key="catName">
              <b-link v-for="(tag, tagValue) in category" v-bind:key="tagValue" :to="{path:'tag/'+catName+'/'+tagValue}"><span class="badge badge-pill badge-primary" :class="'badge-'+catName">
                <span v-if="$lang.getLang() === 'en'">{{tag.en}}</span>
                <span v-if="$lang.getLang() === 'zh-cn'">{{tag.zh}}</span>
              </span></b-link>
              <br><br>
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
      allTags: Tag.fetchAllTags()
    }
  },
  mounted: function () {
  },
  methods: {
  },
  components: {}
}
</script>
