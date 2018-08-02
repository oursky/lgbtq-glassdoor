<template>
    <div>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/regular.css" integrity="sha384-zkhEzh7td0PG30vxQk1D9liRKeizzot4eqkJ8gB3/I+mZ1rjgQk+BSt2F6rT2c+I" crossorigin="anonymous">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/brands.css" integrity="sha384-nT8r1Kzllf71iZl81CdFzObMsaLOhqBU1JD2+XoAALbdtWaXDOlWOZTR4v1ktjPE" crossorigin="anonymous">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/fontawesome.css" integrity="sha384-HbmWTHay9psM8qyzEKPc8odH4DsOuzdejtnr+OFtDmOcIVnhgReQ4GZBH7uwcjf6" crossorigin="anonymous">
        <b-card :hidden="hidden"
                bg-variant="light"
                :header="$lang.default.cta_welcome_title"
                text-variant="black"
                class="text-center cta-card">
            <p class="card-text" v-html="$lang.default.cta_welcome_text"></p>
            <b-button variant="primary" @click="showSharePopup">{{$lang.default.cta_welcome_button}}</b-button><br>
            <b-link @click="hidePopup">{{$lang.default.cta_welcome_dismiss}}</b-link>
        </b-card>
        <b-modal ref="shareModalRef" hide-footer :title="$lang.default.cta_share_title">
          <div class="d-block text-center share-container">
            <h5>{{$lang.default.cta_share_caption}}</h5>
            <social-sharing url="https://lgbtqglassdoor.com/"
                                  title="LGBTQ Glassdoor"
                                  description="LGBTQ Glassdoor aims to help LGBTQ individuals share and find supportive work environments. LGBTQ individuals & allies can add inclusive companies even if they may not yet have official policies."
                                  quote="LGBTQ Glassdoor aims to help LGBTQ individuals share and find supportive work environments. LGBTQ individuals & allies can add inclusive companies even if they may not yet have official policies."
                                  hashtags="lgbtq,workspace,hongkong"
                                  twitter-user="lgbtqglassdoor"
                                  inline-template>
              <div>
                <network network="email">
                    <i class="far fa-envelope"></i> Email
                </network>
                <br>
                <network network="facebook">
                  <i class="fab fa-facebook"></i> Facebook
                </network>
                <br>
                <network network="googleplus">
                  <i class="fab fa-google-plus"></i> Google +
                </network>
                <br>
                <network network="linkedin">
                  <i class="fab fa-linkedin"></i> LinkedIn
                </network>
                <br>
                <network network="reddit">
                  <i class="fab fa-reddit"></i> Reddit
                </network>
                <br>
                <network network="sms">
                  <i class="far fa-commenting-o"></i> SMS
                </network>
                <br>
                <network network="telegram">
                  <i class="fab fa-telegram"></i> Telegram
                </network>
                <br>
                <network network="twitter">
                  <i class="fab fa-twitter"></i> Twitter
                </network>
                <br>
                <network network="whatsapp">
                  <i class="fab fa-whatsapp"></i> Whatsapp
                </network>
              </div>
            </social-sharing>
          </div>
          <b-btn class="mt-3" variant="outline-primary" block @click="hideSharePopup">Done</b-btn>
        </b-modal>
    </div>
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
      }, 1)
    },
    hidePopup: function () {
      this.hidden = true
    },
    showSharePopup: function () {
      this.$refs.shareModalRef.show()
    },
    hideSharePopup: function () {
      this.$refs.shareModalRef.hide()
    }
  }
}
</script>
