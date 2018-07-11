<template>
  <b-form @submit="onSubmit">
    <b-form-group :state="state" :invalid-feedback="invalidFeedback">
      <b-form-input v-model="username" type="text" placeholder="Username" required></b-form-input>
    </b-form-group>

    <b-form-group>
      <b-form-input v-model="password" type="password" placeholder="Password" required></b-form-input>
    </b-form-group>

    <div class="text-center">
      <b-button type="submit" variant="primary" block>Sign up</b-button>
      <b-button variant="link" @click="$emit('swap-form')">Have an account already? Sign in</b-button>

    </div>
  </b-form>
</template>

<script>
import skygear from 'skygear'

export default {
  data () {
    return {
      username: '',
      password: '',
      state: null,
      invalidFeedback: ''
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      skygear.auth.signupWithUsername(this.username, this.password)
        .finally(() => {
          this.$emit('async-end')
        })
        .then((user) => {
          console.log(user) // user record
          this.$emit('sign-in')
        })
        .catch((error) => {
          console.error(error)
          if (error.error.code === skygear.ErrorCodes.Duplicated) {
            // the username has already existed
            this.state = false
            this.invalidFeedback = 'Username has already existed'
          } else {
            // other kinds of error
            this.state = false
            this.invalidFeedback = error.error.message
          }
        })
    }
  }
}
</script>
