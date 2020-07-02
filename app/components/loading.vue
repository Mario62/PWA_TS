<template>
  <div v-if="loading" class="loading-page">
    <!-- <img class="svg" src="~/assets/moscicki/Bez nazwy-1.svg" /> -->
    <!-- <img class="svg" src="~/assets/moscicki/bg.svg" />
    <img class src="~/assets/moscicki/fg.svg" />
    <img class src="~/assets/moscicki/fgb.svg" />-->
    <!-- <p>Loading...</p> -->
    <h3 class="text-white">
      <!-- M-Book -->

      <b-spinner variant="success" label="Spinning"></b-spinner>
      <br />
      <!-- <b-spinner variant="success" type="grow" label="Spinning"></b-spinner> -->
      <b-badge pill variant="success">M-Book</b-badge>
    </h3>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  asyncData() {
    return new Promise((resolve) => {
      setTimeout(function() {
        resolve({ name: 'world' })
      }, 1000)
    })
  },
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    }
  }
}
</script>

<style scoped>
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  text-align: center;
  padding-top: 200px;
  font-size: 30px;
  font-family: sans-serif;
  z-index: 10;
}

.svg {
  max-width: 400px;
  /* -webkit-filter: invert(100%); safari 6.0 - 9.0 */
  /* filter: invert(100%); */
}
</style>
