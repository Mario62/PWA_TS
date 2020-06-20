<template>
  <div>
    Tabela tu ma być
    <table />
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import axios from 'axios'
import Table from '~/components/Table.vue'
// import Card from '~/components/Card.vue' // TODO

export default Vue.extend({
  components: {
    // Card,
    Table
  }
})
</script>

<style>
</style>