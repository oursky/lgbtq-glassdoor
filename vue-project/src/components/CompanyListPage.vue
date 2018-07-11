<template>
  <b-container class="mt-3">
    <b-row class="mb-3">
      <b-col>
       <h1>Welcome to the list</h1>
      </b-col>
    </b-row>

    <b-row class="mb-3">
      <b-col>
        <results-chart @async-start="$emit('async-start')" @async-end="$emit('async-end')"/>
      </b-col>
    </b-row>

  </b-container>
</template>

<script>
// import skygear from 'skygear'

export default {
  components: {},
  data () {
    return {}
  },
  mounted: function () {},
  methods: {}
}
</script>
