<template>
    <div class="black">
    <img class="svg" src="~/assets/moscicki/B.svg" />
     <!-- <img class="svg" src="~/assets/moscicki/B .svg" /> -->
     <!-- <img class="svg" src="~/assets/moscicki/fgb.svg" /> -->
      <!-- Image and text -->
      <b-navbar variant="faded" type="light">
        <b-navbar-brand href="#">
          <img src="https://placekitten.com/g/30/30" class="d-inline-block align-top" alt="Kitten" />
          BootstrapVue
        </b-navbar-brand>
      </b-navbar>
    </div>
  
</template>
 
<script>
export default {
  props: {
    source: String
  },

  data: () => ({
    drawer: null
  }),

  created() {
    this.$vuetify.theme.dark = true
  }
}
</script>
<style scoped>
.black{
  background: rgba(0, 0, 0, 0.9);
}
.svg {
  max-width: 400px;
   /* -webkit-filter: invert(100%); safari 6.0 - 9.0 */
  /* filter: invert(100%);  */
}
</style>
