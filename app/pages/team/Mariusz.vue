<template>
  <div class="box">
    <div class="container">
      <div>
        <!-- <logo /> -->
        <Moscicki color="Y" />
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
        </div>
        <Categories />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Logo from '~/components/Logo.vue'
import Moscicki from '~/components/Moscicki.vue'
import Table from '~/components/Table.vue'
import TempTable from '~/components/TempTable.vue'
import Regex from '~/components/Regex.vue'
import Categories from '~/components/Categories.vue'

export default Vue.extend({
  components: {
    Regex,
    Logo,
    Table,
    Moscicki,
    TempTable,
    Categories
  }
})
</script>

<style></style>
