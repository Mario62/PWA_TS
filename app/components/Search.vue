<template>
  <!--Navbar-->
  <nav class="navbar navbar-expand-lg navbar-dark indigo mb-4">
    <!-- Navbar brand -->
    <!-- <a class="navbar-brand" href="#">Navbar</a> -->

    <!-- Collapsible content -->

    <b-form inline display-flex>
      <input
        list="searchlist"
        type="text"
        ref="my_input"
        class="form-control"
        value="example"
        placeholder="Search"
        aria-label="Search"
      />
      <b-button @click.prevent="getFormValues" squared variant="primary">Szukaj</b-button>
    </b-form>
    <!-- Collapsible content -->
    <datalist id="searchlist">
      <option>Manual Option</option>
      <option v-for="sugestions in  $store.state.sugestions ">{{ sugestions }}</option>
    </datalist>
  </nav>
  <!--/.Navbar-->
</template>

<script lang="ts">
// import { store } from '~/store/index.js'

import Vue from 'vue'
import Regex from '~/components/Regex.vue'

export default Vue.extend({
  components: {
    Regex
  },
  data: function() {
    return {
      sizes: 'dsaaa',

      output: ''
    }
  },
  methods: {
    getFormValues: function(e) {
      //this.output = this.$refs.my_input.value
      //this.sizes = this.$refs.my_input.value
      // this.$store.state.sugestions.push(this.$refs.my_input.value)
      // @ts-ignore: Unreachable code error
      const text: String = this.$refs.my_input.value
      const text2: String = e.target.value
      console.log(text2)
      if (text.trim()) {
        this.$store.commit('addToList', { text })
      }
      e.target.value = ''
    },

    // addText: function(e) {
    //   //DZIAŁA ALE WYŚWIETLA {"text": "fssaas"}, czyli źle. POSZEDŁEM NA POSIŁEK
    //   const text = e.target.value
    //   console.log(text)
    //   if (text.trim()) {
    //     this.$store.commit('addToList', { text })
    //   }
    //   e.target.value = ''
    //   console.log('Works1')
    // },

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
    // this.$store.state.count = 3
  }
})
</script>

<style>
</style>