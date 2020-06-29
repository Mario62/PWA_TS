<template>
  <div v-if="loading" class="loading-page">
    <img class="svg" src="~/assets/moscicki/B.svg" />
    <p>Loading...</p>
    <b-spinner type="grow" label="Loading..."></b-spinner>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  //   asyncData () {
  //   return new Promise((resolve) => {
  //     setTimeout(function () {
  //       resolve({ name: 'world' })
  //     }, 1000)
  //   })
  // },
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
  background: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding-top: 200px;
  font-size: 30px;
  font-family: sans-serif;
}

.svg {
  max-width: 80vh;
}
</style>
