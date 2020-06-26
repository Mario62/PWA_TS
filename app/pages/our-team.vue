<template>
  <div>
    <div>
      <div v-if="$nuxt.isOffline">You are offline</div>
      <div v-if="$nuxt.isOnline">You are Online</div>

      <!-- <nuxt-link to="/">Home Page</nuxt-link>          -->
      <nuxt-link v-for="user in users" v-bind:key="user.name" :to="'team/'+user.name">
        <P>{{ user.name }}</p>
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  layout: 'intro',
  data: function() {
    return {
      text: '',
      users: [
        { name: 'Arkadiusz' },
        { name: 'Mariusz' },
        { name: 'Piotr' },
        { name: 'Wiktor' }
      ]
    }
  }
})
</script>

<style scoped>
</style>