<template>
  <!--Navbar-->
  <nav class="navbar navbar-expand-lg navbar-dark indigo">
    <!-- Navbar brand -->
    <!-- <a class="navbar-brand" href="#">Navbar</a> -->

    <!-- Collapsible content -->

    <b-form inline display-flex>
      <input
        list="searchlist"
        type="text"
        ref="my_input"
        class="form-control"
        placeholder="Search"
        aria-label="Search"
        @keyup.enter.prevent="getFormValues"
      />
      <b-button
        @click.prevent="getFormValues"
        squared
        variant="success"
        class="ml-3"
        >Szukaj</b-button
      >
    </b-form>
    <!-- Collapsible content -->
    <datalist id="searchlist">
      <!-- <option>Manual Option</option> -->
      <option
        v-for="sugestion in $store.state.categories"
        v-bind:key="sugestion"
        >{{ sugestion }}</option
      >
    </datalist>

    <!-- {{$store.state.sugestions}} -->
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
  asyncData: function() {
    return {
      sizes: 'dsaaa',
      output: '',
      inputText: 'test'
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
      console.log('Hee: ' + text2)
      if (text.trim()) {
        this.$store.commit('addToList', { text })
        //this.$store.commit('addBooks', { text })
      }
      e.target.value = ''
      let locallist = this.$store.state.list
      locallist.forEach((element) => {
        console.log(element.author)
        //if(this.$refs.my_input.value ==)

        console.log(length)
        for (let i = 0; i < element.author.length - text.length; i++) {
          if (text == element.author.slice(i, text.length + i)) {
            this.$store.commit('addBooks', { element })
            console.log('We are the champions! ')
          }
        }
      })
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
  }
})
</script>

<style></style>
