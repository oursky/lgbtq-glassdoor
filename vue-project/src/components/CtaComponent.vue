<template>
    <b-card :hidden="hidden"
            bg-variant="secondary"
            header="💁‍♂️ <b>Welcome!</b> "
            text-variant="white"
            class="text-center cta-card">
        <p class="card-text"> If like this directory, can you please <br>help spread this project? Thanks! </p>
        <b-button :to="{name:'subscribe'}" variant="primary" @click="hidePopup">Share</b-button><br>
        <b-link @click="hidePopup">Dismiss</b-link>
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
