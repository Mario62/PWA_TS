<template>
  <!--Navbar-->
  <div>
  <!-- <nav class="navbar navbar-expand-lg navbar-dark indigo"> -->
    <!-- Navbar brand -->
    <!-- <a class="navbar-brand" href="#">Navbar</a> -->
    <!-- Collapsible content -->
    <b-form inline display-flex v-on:submit.prevent="getFormValues">
      <input
        list="searchlist"
        type="text"
        ref="my_input"
        class="form-control"
        placeholder="Autor, tytuł książki ..."
        aria-label="Search"
      />
      <b-button @click.prevent="getFormValues" squared variant="success" class="ml-3"><span class="hidden-phone">Szukaj</span> <i class="fa fa-search active" aria-hidden="true"></i></b-button>
      <b-button @click.prevent="getFormValues" squared variant="primary" class="ml-3"><span class="hidden-phone"><i class="fa fa-send-o active" aria-hidden="true"></i> Losuj książkę</span></b-button>
    </b-form>
    <!-- Collapsible content -->
    <datalist id="searchlist">
      <!-- <option>Manual Option</option> -->
      <option v-for="sugestion in $store.state.categories" v-bind:key="sugestion">{{ sugestion }}</option>
    </datalist>

    <div v-if="!examples">
    <p>Przykłady</p>
       <tt> {{ examples }}</tt>
    </div>
</div>
    <!-- {{$store.state.sugestions}} -->
  <!-- </nav> -->
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
  data() {
    return {
      sizes: 'dsaaa',
      output: '',
      inputText: 'test',
      examples: 'eee'
    }
  },
  methods: {
    getFormValues: function(e) {
      // TO DO
      // foreach
      // wyszukiwanie powyżej 2 znaków
      // wyświetl w podpowiedziach jeśli < 4
      // styole

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
        //console.log(element.author)
        //if(this.$refs.my_input.value ==)

        //console.log(length)
        for (let i = 0; i < element.author.length - text.length; i++) {
          if (text == element.author.slice(i, text.length + i)) {
            this.$store.commit('addBooks', {
              id: element.id,
              author: element.author,
              title: element.title,
              publisher: element.publisher,
              city: element.city,
              year: element.year,
              category: element.category
            })
            console.log('We are the champions! ')
            break
          }
        }
      })

      let txtIn = text.toUpperCase()
      let sygnatura = this.$store.state.categories
      let podpowiedzi : string[] = []

      sygnatura.forEach((element:string) => {
        let el = element.toUpperCase()

        if (el.indexOf(txtIn) > 0) podpowiedzi.push(element)
        else if (this.levenshtein(el, txtIn) < 4) podpowiedzi.push(element)
      })

      console.warn(podpowiedzi)
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
    },
    levenshtein(a: string, b: string): number {
      const an = a ? a.length : 0
      const bn = b ? b.length : 0
      if (an === 0) {
        return bn
      }
      if (bn === 0) {
        return an
      }
      const matrix = new Array<number[]>(bn + 1)
      for (let i = 0; i <= bn; ++i) {
        let row = (matrix[i] = new Array<number>(an + 1))
        row[0] = i
      }
      const firstRow = matrix[0]
      for (let j = 1; j <= an; ++j) {
        firstRow[j] = j
      }
      for (let i = 1; i <= bn; ++i) {
        for (let j = 1; j <= an; ++j) {
          if (b.charAt(i - 1) === a.charAt(j - 1)) {
            matrix[i][j] = matrix[i - 1][j - 1]
          } else {
            matrix[i][j] =
              Math.min(
                matrix[i - 1][j - 1], // substitution
                matrix[i][j - 1], // insertion
                matrix[i - 1][j] // deletion
              ) + 1
          }
        }
      }
      return matrix[bn][an]
    }
  }
})
</script>

<style>

input[type="text"]:not(.browser-default):focus:not([readonly]), .md-form input[type="password"]:not(.browser-default):focus:not([readonly]), .md-form input[type="email"]:not(.browser-default):focus:not([readonly]), .md-form input[type="url"]:not(.browser-default):focus:not([readonly]), .md-form input[type="time"]:not(.browser-default):focus:not([readonly]), .md-form input[type="date"]:not(.browser-default):focus:not([readonly]), .md-form input[type="datetime"]:not(.browser-default):focus:not([readonly]), .md-form input[type="datetime-local"]:not(.browser-default):focus:not([readonly]), .md-form input[type="tel"]:not(.browser-default):focus:not([readonly]), .md-form input[type="number"]:not(.browser-default):focus:not([readonly]), .md-form input[type="search"]:not(.browser-default):focus:not([readonly]), .md-form input[type="phone"]:not(.browser-default):focus:not([readonly]), .md-form input[type="search-md"]:focus:not([readonly]), .md-form textarea.md-textarea:focus:not([readonly]) {
    border-bottom: 1px solid #4285f4;
    -webkit-box-shadow: 0 1px 0 0 #4285f4;
    box-shadow: 0 1px 0 0 #4285f4;
}
input:not([type]), input[type="text"]:not(.browser-default), input[type="password"]:not(.browser-default) {
      -webkit-box-sizing: content-box;
    box-sizing: content-box;
    background-color: transparent;
    border: 0;
    border-bottom: 1px solid #ced4da;
    border-radius: 0;
    outline: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
    -webkit-transition: border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
    transition: border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
}

.active-cyan-2 input.form-control[type=text]:focus:not([readonly]) {
  border-bottom: 1px solid #4dd0e1;
  box-shadow: 0 1px 0 0 #4dd0e1;
}
.active-cyan input.form-control[type=text] {
  border-bottom: 1px solid #4dd0e1;
  box-shadow: 0 1px 0 0 #4dd0e1;
}
.active-cyan .fa, .active-cyan-2 .fa {
  color: #4dd0e1;
}
</style>
