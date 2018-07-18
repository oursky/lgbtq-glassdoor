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
          <b-link :to="{ name: 'list'}"><div class="cta"><b-img src="../assets/list-icon.png" alt="all listings" class="icon" />All Listings</div></b-link>
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
          <b-col  class="tags-container">
            <h4>View company by tags</h4>
            <b-link :to="{name:'tag', params: { tag: 'LGB Colleagues' }}"><span class="badge badge-pill badge-primary">LGB colleagues</span></b-link>
            <b-link :to="{name:'tag', params: { tag: 'Software Engineering' }}"><span class="badge badge-pill badge-secondary">Software Engineering</span></b-link>
            <b-link :to="{name:'tag', params: { tag: 'Gender neutral washroom' }}"><span class="badge badge-pill badge-success">Gender neutral washroom</span></b-link>
<!--             <span class="badge badge-pill badge-danger">Danger</span>
            <span class="badge badge-pill badge-warning">Warning</span>
            <span class="badge badge-pill badge-info">Info</span>
            <span class="badge badge-pill badge-light">Light</span>
            <span class="badge badge-pill badge-dark">Dark</span> -->

          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>

export default {
  data () {
    return {}
  },
  methods: {},
  components: {}
}
</script>
