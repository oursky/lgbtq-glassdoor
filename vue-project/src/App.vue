<style lang="scss" src="./styles/app.scss"></style>

<template>
  <div class="fill-container">
  <b-navbar toggleable type="light" variant="faded" class="nav-bar">
    <b-navbar-brand :to="{name:'home'}" class="brand color-text-flow"><span><span>L</span><span>G</span><span>B</span><span>T</span><span>Q</span><span> </span><span>G</span><span>l</span><span>a</span><span>s</span><span>s</span><span>d</span><span>o</span><span>o</span><span>r</span></span></b-navbar-brand>
<!--     <b-collapse is-nav id="nav_collapse">

      <b-navbar-nav>
        <b-nav-item href="https://skygear.io">Skygear docs</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right v-if="signedIn">
          <template slot="button-content">
            User
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item @click="signOut">Signout</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse> -->

      <b-navbar-nav class="lang-items ml-auto" right>
          <b-nav-item href="#" @click="switchToEn" class="lang-choice" v-bind:class="currentLang === 'en' ? 'selected' : ''">EN</b-nav-item>
          <b-nav-item href="#" @click="switchToZh" class="lang-choice" v-bind:class="currentLang === 'zh-cn' ? 'selected' : ''">繁</b-nav-item>
      </b-navbar-nav>
  </b-navbar>
  <router-view></router-view>

  <footer-section />
  <cta-component />
  <!-- navbar-1.vue -->
    <b-progress v-show="asyncState" :value="100" variant="secondary" animated :striped="false"></b-progress>
   <!--  <b-container v-if="!signedIn">
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
import CompanyListPage from './components/CompanyListPage'
import CompanyDetailPage from './components/CompanyDetailPage'
import FooterSection from './components/Footer'
import CtaComponent from './components/CtaComponent'

import config from './config'

function skygearSignUp () {
  if (!skygear.auth.currentUser) {
    skygear.auth.signupAnonymously().then((user) => {
      console.log('Signing up success')
      console.log(user)
    }, (error) => {
      console.error(error)
    })
  }
}

skygear.config({
  'endPoint': config.SKYGEAR_ENDPOINT,
  'apiKey': config.SKYGEAR_APIKEY
}).then((skygear) => {
  console.log('skygear container is now ready for making API calls.')
  console.log(skygear.auth.currentUser)

  // Check if auth is valid

  skygear.auth.whoami().then((me) => {
  }).catch((error) => {
    if (error) {
      skygear.auth.logout().then(() => {
        skygearSignUp()
      })
    }
  })
}, (error) => {
  console.error(error)
})

skygear.auth.onUserChanged(function (user) {
  if (user) {
    console.log('user logged in or signed up')
    // eslint-disable-next-line
    if (gtag) {
      // eslint-disable-next-line
      gtag('set', {'user_id': user.id}) // Set the user ID using signed-in user_id.
    }
  } else {
    console.log('user logged out or the access token expired')
  }
})

const LANG_STORAGE_KEY = 'language_choice'

export default {
  data () {
    return {
      asyncState: false,
      skygear: skygear,
      currentLang: 'en'
    }
  },
  computed: {
    signedIn: function () {
      return (skygear.auth.currentUser !== undefined || skygear.auth.currentUser !== null)
    }
  },
  mounted: function () {
    this.currentLang = this.loadCachedLang()
    this.switchToLanguage(this.currentLang)
  },
  methods: {
    loadCachedLang () {
      return window.localStorage.getItem(LANG_STORAGE_KEY) || 'en'
    },
    saveCachedLang (lang) {
      window.localStorage.setItem(LANG_STORAGE_KEY, lang)
    },
    switchToEn () {
      this.switchToLanguage('en')
    },
    switchToZh () {
      this.switchToLanguage('zh-cn')
    },
    switchToLanguage (lang) {
      this.currentLang = lang
      this.saveCachedLang(lang)
      this.$lang.setLang(lang)
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
    FooterSection,
    CompanyListPage,
    CtaComponent,
    CompanyDetailPage
  }
}
</script>
