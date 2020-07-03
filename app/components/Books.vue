<template>
  <div>
    <Table :items="$store.state.books" />
    <!-- <Card /> -->
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import axios from 'axios'
import Table from '~/components/Table.vue'
import Card from '~/components/Card.vue'

export default Vue.extend({
  components: {
    // Card,
    Table
  }
})
</script>

<style>
</style>