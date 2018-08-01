<template>
    <b-card :hidden="hidden"
            bg-variant="light"
            :header="$lang.default.cta_welcome_title"
            text-variant="black"
            class="text-center cta-card">
        <p class="card-text" v-html="$lang.default.cta_welcome_text"></p>
        <b-button :to="{name:'subscribe'}" variant="primary" @click="hidePopup">{{$lang.default.cta_welcome_button}}</b-button><br>
        <b-link @click="hidePopup">{{$lang.default.cta_welcome_dismiss}}</b-link>
    </b-card>
</template>

<script>

export default {
  components: {},
  data () {
    return {
      hidden: true
    }
  },
  mounted: function () {
    this.showPopup()
  },
  methods: {
    showPopup: function () {
      var self = this
      setTimeout(function () {
        self.hidden = false
      }, 10000)
    },
    hidePopup: function () {
      this.hidden = true
    }
  }
}
</script>
