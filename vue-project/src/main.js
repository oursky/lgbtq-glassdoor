// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import App from './App'

import Autocomplete from 'v-autocomplete'

// You need a specific loader for CSS files like https://github.com/webpack/css-loader
import 'v-autocomplete/dist/v-autocomplete.css'

// import skygear from 'skygear'
// import AuthPage from './components/AuthPage'
// import MainPage from './components/MainPage'
import LandingPage from './components/LandingPage'
// import FooterSection from './components/Footer'

import CompanyDetailPage from './components/CompanyDetailPage'
import CompanyListPage from './components/CompanyListPage'
import AddCompanyPage from './components/AddCompanyPage'
import AboutPage from './components/AboutPage'

// Notice that you need to specify the lang folder, in this case './lang'
const Lang = require('vuejs-localization')
Lang.requireAll(require.context('./lang', true, /\.js$/))

const SocialSharing = require('vue-social-sharing')

Vue.use(SocialSharing)
Vue.use(Lang)
Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(Autocomplete)
Vue.config.productionTip = false

const routes = [
  { name: 'search',
    path: '/search',
    component: CompanyListPage,
    props: {
      search: true,
      searchText: ''
    },
    meta: {
      metaTags: [
        {
          property: 'og:url',
          content: 'https://lgbtqglassdoor.com/#search'
        }
      ]
    }
  },
  { name: 'searchWithText',
    path: '/search/:searchText',
    component: CompanyListPage,
    props: {
      search: true
    }
  },
  { name: 'tag',
    path: '/tag/:cat/:tag',
    component: CompanyListPage,
    props: true
  },
  { name: 'list',
    path: '/list',
    component: CompanyListPage,
    props: { searchText: '' },
    meta: {
      metaTags: [
        {
          property: 'og:url',
          content: 'https://lgbtqglassdoor.com/#list/'
        }
      ]
    }
  },
  { name: 'detail',
    path: '/detail/:companyName',
    component: CompanyDetailPage,
    props: true,
    meta: {
      metaTags: [
        {
          property: 'og:url',
          content: 'https://lgbtqglassdoor.com/#detail/'
        }
      ]
    }
  },
  { name: 'add',
    path: '/add',
    component: AddCompanyPage,
    meta: {
      metaTags: [
        {
          property: 'og:url',
          content: 'https://lgbtqglassdoor.com/#add'
        }
      ]
    }
  },
  { name: 'subscribe',
    path: '/subscribe',
    component: AddCompanyPage
  },
  { name: 'about',
    path: '/about',
    component: AboutPage
  },
  { name: 'home',
    path: '/',
    component: LandingPage,
    meta: {
      metaTags: [
        {
          property: 'og:url',
          content: 'https://lgbtqglassdoor.com/'
        }
      ]
    }
  }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title)

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags)
  // const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags)

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle) document.title = nearestWithTitle.meta.title

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el))

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) return next()

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta')

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key])
    })

    // We use this to track which meta tags we create, so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '')

    return tag
  })
  // Add the meta tags to the document head.
    .forEach(tag => document.head.appendChild(tag))

  next()
})

/* eslint-disable no-new */
new Vue({
  router: router,
  el: '#app',
  components: {App},
  template: '<App/>'
})
