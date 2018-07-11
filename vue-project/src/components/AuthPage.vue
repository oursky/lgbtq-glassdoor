<template>
  <b-container>
    <b-row align-h="center">
      <b-col cols="6">
        <sign-in-form v-if="wantSignIn" @swap-form="swapForm" @sign-in="$emit('sign-in')" @async-start="$emit('async-start')" @async-end="$emit('async-end')"/>
        <sign-up-form v-else @swap-form="swapForm" @sign-in="$emit('sign-in')" @async-start="$emit('async-start')" @async-end="$emit('async-end')"/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>

// Auto login to Skygear

// import SignInForm from './SignInForm'
// import SignUpForm from './SignUpForm'

// export default {
//   data () {
//     return {
//       wantSignIn: true
//     }
//   },
//   methods: {
//     swapForm () {
//       this.wantSignIn = !this.wantSignIn
//     }
//   },
//   components: {
//     SignInForm,
//     SignUpForm
//   }
// }
import skygear from 'skygear'

export default {
  components: {},
  data () {
    return {}
  },
  mounted: function () {
    if (!skygear.auth.currentUser) {
      console.log('Signing up')
      skygear.auth.signupAnonymously().then(function (user) {
        console.log('Signing up success')
        console.log(user)
      })
    }
  },
  methods: {}
}

</script>
