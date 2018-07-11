<template>
<!--   <b-container>
    <b-row align-h="center" align-v="center">
      <b-col cols="2">
        <b-img class="p-3" src="../assets/logo.png" fluid alt="hi"/>
      </b-col>
      <b-col cols="6">
        <h1>Skygear x Vue</h1>
        <p><small>A simple demo connecting to Skygear</small></p>
        <p class="hihi">Hihi</p>
      </b-col>
    </b-row>

    <b-row align-h="center">
      <b-col cols="6">
        <sign-in-form v-if="wantSignIn" @swap-form="swapForm" @sign-in="$emit('sign-in')" @async-start="$emit('async-start')" @async-end="$emit('async-end')"/>
        <sign-up-form v-else @swap-form="swapForm" @sign-in="$emit('sign-in')" @async-start="$emit('async-start')" @async-end="$emit('async-end')"/>
      </b-col>
    </b-row> -->

  <div class="landing full">
    <b-row class="full">
      <b-col cols="8" class="hero-container">
        <h1>LGBTQ Glassdoor</h1>
        <h2>LGBTQ-Friendly Work Directory Hong Kong</h2>
      </b-col>
      <b-col  cols="4">
        <b-row>
          <b-col  class="add-company-container">
          <h3>Let's do it together!</h3>
          <p>Our goal is to crowdsource information on LGBTQ-friendly companies and workspaces for Hong Kong. Anyone can add to the list and it is publicly available to view.

          </p>
          </b-col>
        </b-row>
        <b-row>
          <b-col  class="tags-container">
            <h4>View company by tags</h4>
            <span class="badge badge-pill badge-primary">LGB colleagues</span>
            <span class="badge badge-pill badge-secondary">Software Engineering</span>
            <span class="badge badge-pill badge-success">Gender neutral washroom</span>
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
