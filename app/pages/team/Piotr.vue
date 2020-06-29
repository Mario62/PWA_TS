<template>
  <div class="container">
    <div>
      <!-- <logo /> -->
      <!-- <Moscicki />  -->

      <!-- this component will only be rendered on client-side -->
      <!-- <comments /> -->

      <img src="/C.jpg" alt="static image" style="max-width:30vh" />
      <br />
      <NLink to="/">Home Page</NLink>

      async: {{ project }}
      <!-- <search /> -->
      <card />
      <client-only placeholder="Loading...">
        <!-- <books /> -->
        <!-- <reg /> -->
      </client-only>

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
import Card from '~/components/Card.vue'
import { mapState } from 'vuex'

export default Vue.extend({
  layout: 'intro',
  components: {
    Moscicki,
    Search,
    Logo,
    Reg,
    Books,
    Card
  },
  fetch({ store }) {
    store.commit('increment')
  },
  computed: mapState(['counter']),
  methods: {
    increment() {
      this.$store.commit('increment')
    }
  },
  data() {
    return { project: 'default' }
  },
  // async asyncData(context) {
  //   return { project: 'nuxt' }
  // },
  asyncData() {
    return new Promise((resolve) => {
      setTimeout(function() {
        resolve({ name: 'world' })
      }, 1000)
    })
  }
})
</script>

<style></style>
