<template>
  <div class="container">
    <div>
      <!-- <logo /> -->
      <!-- <CardPlugin /> -->

      <Moscicki color="K" />
      <!-- <TempTable /> -->
      <!-- <i class="fa fa-github" aria-hidden="true"></i> -->
<loading />
      <!-- <table /> -->
      <regex />
      <!-- <h1 class="title">VueNuxte</h1> -->
      <!-- <h2 class="subtitle">My sublime Nuxt.js project</h2> -->
      <!-- <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a>
        
      </div>-->

      <!-- <textarea rows="10" v-model="text"></textarea> -->
      <br />
      <!-- <text-reader @load="text = $event"></text-reader> -->
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Logo from '~/components/Logo.vue'
import Moscicki from '~/components/Moscicki.vue'
import FileReader from '~/components/FileReader.vue'
import Search from '~/components/Search.vue'
import Table from '~/components/Table.vue'
import TempTable from '~/components/TempTable.vue'
import Regex from '~/components/Regex.vue'
import Loading from '~/components/Loading.vue'
import { CardPlugin, TablePlugin } from 'bootstrap-vue'

// Add the plugins to Vue
// Vue.use(CardPlugin)
// Vue.use(TablePlugin)

export default Vue.extend({
  layout: 'intro',
  //   data: function() {
  //     // return {
  //     //   text: '',
  //     //   users: [{ name: 'Arkadiusz' }, { name: 'Mariusz' }, { name: 'Piotr' }]
  //     // }
  //   },
  components: {
    Logo,
    FileReader,
    Moscicki,
    Search,
    // Table,
    Loading,
    TempTable,
    Regex
  }
})
</script>

<style>
.search {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.container {
  margin: 0 auto;
  padding: 10vh;
  /* min-height: 100vh; */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
