<template>

  <div class="container">
    <div>
      <!-- <logo /> -->

      <div>
        <div v-if="$nuxt.isOffline">You are offline</div>
        <div v-if="$nuxt.isOnline">You are Online</div>

        <!-- <nuxt-link to="/">Home Page</nuxt-link>          -->
        
      </div>
      <!-- <CardPlugin /> -->

      <Moscicki color="K" />
      
      <div class="search">
        <Search />
      </div>

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
import { CardPlugin, TablePlugin } from 'bootstrap-vue'

// Add the plugins to Vue
Vue.use(CardPlugin)
Vue.use(TablePlugin)

export default Vue.extend({
  layout: 'intro',
  data: function() {
    return {
      text: '',
      users: [{ name: 'Arkadiusz' }, { name: 'Mariusz' }, { name: 'Piotr' }]
    }
  },
  components: {
    Logo,
    FileReader,
    Moscicki,
    Search
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
  min-height: 100vh;
  /* display:; */
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
