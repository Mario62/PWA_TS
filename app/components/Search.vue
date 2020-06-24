<template>
  <!--Navbar-->
  <nav class="navbar navbar-expand-lg navbar-dark indigo mb-4">
    <!-- Navbar brand -->
    <!-- <a class="navbar-brand" href="#">Navbar</a> -->

    <!-- Collapsible content -->

    <form>
      <input
        list="searchlist"
        type="text"
        ref="my_input"
        class="form-control"
        placeholder="Search"
        aria-label="Search"
      />
      <button @click.prevent="getFormValues()">Get values</button>
    </form>
    Output: {{ output }}
    Sizes: {{ sizes }}
    {{ $store.state.sugestions }}
    <!-- Collapsible content -->
    <datalist id="searchlist">
      <option>Manual Option</option>
      <option v-for="sugestions in  $store.state.sugestions ">{{ sugestions }}</option>
    </datalist>
    <todos />
  </nav>
  <!--/.Navbar-->
</template>

<script lang="ts">
// import { store } from '~/store/index.js'

import Vue from 'vue'
import Regex from '~/components/Regex.vue'
import todos from '~/components/todos.vue'

export default Vue.extend({
  components: {
    Regex,
    todos
  },
  data: function() {
    return {
      sizes: 'dsaaa',

      output: ''
    }
  },
  methods: {
    getFormValues: function() {
      this.output = this.$refs.my_input.value
      this.sizes = this.$refs.my_input.value
      this.$store.state.sugestions.push(this.$refs.my_input.value)
    },

    saveData() {
      // alert("msg")
      console.log('Works')
    },
    // warn: function(message, event) {
    //   // now we have access to the native event
    //   if (event) {
    //     event.preventDefault()
    //   }
    //   this.$store.commit('increment')
    //   // this.$store
    //   console.log(this.$store.state.count) // -> 1
    //   // this.$store.dispatch('loadData')
    // alert(Regex.getRandom)
    //   // alert(message)
    // },
    f() {
      // preventDefault()
      this.$store.commit('increment')
      console.log(this.$store.state.count)
    }
  },
  mounted() {
    this.$store.state.count = 3
  }
})
</script>

<style>
</style>