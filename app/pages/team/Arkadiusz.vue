<template>
  <div class="container">
    <div>
      <!-- <logo /> -->
      <Moscicki />
      <h1 class="title">VueNuxt</h1>
      <h2 class="subtitle">My sublime Nuxt.js project</h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green"
          >Documentation</a
        >
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
          >GitHub</a
        >
        <a href="/api/v1/two.json" target="_blank">Example API</a>
        <a
          href="https://jsonapi.org/examples/#error-objects-multiple-errors"
          target="_blank"
          >More Example API</a
        >{{$store.state.slider}}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Logo from '~/components/Logo.vue'
import Moscicki from '~/components/Moscicki.vue'

export default Vue.extend({
  components: {
    Logo,
    Moscicki
  }
})
</script>

<style>
</style>
