<template>
  <div class="container">
    <div>
      <!-- <logo /> -->
      <h5>Dzień dobry</h5>
      <h6>Czy możemy znaleźć coś dla Ciebie?</h6>
      <Moscicki color="C" />
      <div class="search">
        <Search />
      </div>
      <books v-show="$store.state.books" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Logo from '~/components/Logo.vue'
import Moscicki from '~/components/Moscicki.vue'
import Search from '~/components/Search.vue'
// import { CardPlugin, TablePlugin } from 'bootstrap-vue'
import Books from '~/components/Books.vue'

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
    // FileReader,
    Moscicki,
    Search,
    Books
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
