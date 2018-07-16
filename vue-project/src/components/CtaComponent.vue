<template>
    <b-card :hidden="hidden"
            bg-variant="secondary"
            header="💁‍♂️ <b>Hope you liked this site!</b> "
            text-variant="white"
            class="text-center cta-card">
        <p class="card-text"> Want to build a digital project? <br>Talk to us.</p>
        <b-button :to="{name:'subscribe'}" variant="primary" @click="hidePopup">Drop us a line</b-button>
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
