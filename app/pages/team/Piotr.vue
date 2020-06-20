<template>
  <div class="container">
    <div>
      <!-- <logo /> -->
      <!-- <Moscicki />  -->
      <client-only placeholder="Loading...">
        <!-- this component will only be rendered on client-side -->
        <!-- <comments /> -->
        <div>
          <b-spinner type="grow" label="Loading..."></b-spinner>
        </div>
      </client-only>

      <img src="/C.jpg" alt="static image" style="max-width:30vh" />
      <br />
      <NLink to="/">Home Page</NLink>

      <search />
      <books />
      <reg />

      <!-- <div class="container"> -->
      <!-- <h2>Users</h2>
    <ul class="users">
      <li v-for="user in users" :key="user.id">
        <NuxtLink :to="'/users/'+user.id">
          {{ user.name }}
        </NuxtLink>
      </li>
      </ul>-->
      <!-- </div> -->
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Logo from '~/components/Logo.vue'
import Moscicki from '~/components/Moscicki.vue'
import axios from 'axios'
import Search from '~/components/Search.vue'
import Reg from '~/components/Reg.vue'
import Books from '~/components/Books.vue'

export default Vue.extend({
  layout: 'error',
  components: {
    Moscicki,
    Search,
    Logo,
    Reg,
    Books
  }
})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
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
