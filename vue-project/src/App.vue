<style lang="scss" src="./styles/app.scss"></style>

<template>
  <div class="fill-container">
  <b-navbar toggleable="sm" type="light" variant="faded">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand href="#">LGBTQ Glassdoor</b-navbar-brand>
    <b-collapse is-nav id="nav_collapse">
<!--
      <b-navbar-nav>
        <b-nav-item href="https://skygear.io">Skygear docs</b-nav-item>
      </b-navbar-nav> -->

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right v-if="signedIn">
          <!-- Using button-content slot -->
          <template slot="button-content">
            User
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item @click="signOut">Signout</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
  <landing-page />
  <footer-section />
  <!-- navbar-1.vue -->
<!--     <b-progress v-show="asyncState" :value="100" variant="secondary" animated :striped="false"></b-progress>
    <b-container v-if="!signedIn">
      <b-row align-v="center" style="min-height: 100vh;">
          <b-col>
            <auth-page @sign-in="signIn" @async-start="onAsyncStart" @async-end="onAsyncEnd"/>
          </b-col>
      </b-row>
    </b-container> -->
    <!-- <main-page v-else @sign-out="signOut" @async-start="onAsyncStart" @async-end="onAsyncEnd"/> -->
  </div>
</template>

<script>
import skygear from 'skygear'
import AuthPage from './components/AuthPage'
import MainPage from './components/MainPage'
import LandingPage from './components/LandingPage'
import FooterSection from './components/Footer'

export default {
  data () {
    console.log(skygear.auth.currentUser)
    return {
      asyncState: false,
      signedIn: false
    }
  },
  mounted: function () {
    skygear.config({
      'endPoint': 'lgbtq',
      'apiKey': '48c5c34bd6b6437685b7d1a09f3978cd'
    }).then(() => {
      console.log('skygear container is now ready for making API calls.')
      console.log(skygear.auth.currentUser)
      if (skygear.auth.currentUser) {
        this.signedIn = true
      }
    }, (error) => {
      console.error(error)
    })

    skygear.auth.onUserChanged(function (user) {
      if (user) {
        console.log('user logged in or signed up')
        this.signedIn = true
      } else {
        console.log('user logged out or the access token expired')
        this.signedIn = false
      }
    })
  },
  methods: {
    signIn () {
      this.signedIn = true
    },
    onAsyncStart () {
      this.asyncState = true
    },
    onAsyncEnd () {
      this.asyncState = false
    },
    signOut () {
      this.$emit('async-start')
      skygear.auth.logout()
        .finally(() => {
          this.$emit('async-end')
        })
        .then(() => {
          this.$emit('sign-out')
          this.signedIn = false
        })
        .catch(({ error }) => {
          console.error(error)
          this.setState({
            event: {
              type: 'error',
              message: error.message
            }
          })
        })
    }
  },
  components: {
    AuthPage,
    MainPage,
    LandingPage,
    FooterSection
  }
}
</script>
