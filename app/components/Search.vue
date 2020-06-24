<template>
  <!--Navbar-->
  <nav class="navbar navbar-expand-lg navbar-dark indigo mb-4">
    <!-- Navbar brand -->
    <!-- <a class="navbar-brand" href="#">Navbar</a> -->

    <!-- Collapsible content -->
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <form class="form-inline ml-auto" id="searchForm" v-bind:action="saveData()">
        <div class="md-form my-0">
          <input list="searchlist" class="form-control" type="text" placeholder="Search" aria-label="Search" />
        </div>
        <button href="#!" class="btn btn-outline-white btn-md my-0 ml-sm-2" type="submit">Search</button>
        <!-- <button v-on:click="warn('Form cannot be submitted yet.', $event)">Los</button> -->
        <button @click="f">Refresh</button>
        <!-- <Regex /> -->
      </form>
       <form>
    <input type="text" ref="my_input">
    <button @click.prevent="getFormValues()">Get values</button>
  </form>
  Output: {{ output }}
    </div>
    {{ $store.state.sugestions }}

    <!-- Collapsible content -->
    <datalist id="searchlist">
    <option>Manual Option</option>
    <option v-for="el in sugestions">{{  $store.state }}</option>
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
        sizes: '',
        
        output: ''
      }
  },    
  methods: {
    getFormValues () {
      this.output = this.$refs.my_input.value
      this.sizes = this.$refs.my_input.value
    },

    saveData() {
      // alert("msg")
      console.log("Works");
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
}
)
</script>

<style>
</style>