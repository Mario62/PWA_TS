<template>
  <div>
    <!-- {{$store.state.categories}} -->
    <b-button @click.prevent="countCat">Odśwież</b-button>
    <b-table striped hover :items="$store.state.categories"></b-table>
    <!-- {{items}} -->
    {{ $store.state.categories }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  layout: 'intro',
  data: function() {
    return {
      bel: 0,
      bio: 0,
      i: 0,
      items: [{ a: '1' }, { a: '3' }]
    }
  },
  created() {
    let categories = this.$store.state.categories
    let hist = []

    let tr = categories.map((x: number, y: string) => {
      // policz ilość wystąpień
      return 4
    })
    console.log(tr)
    // categories.forEach((value, index) => {
    //   // console.log(index) // 0, 1, 2, 3
    //   // console.log(value) // lektury, beletrystyka
    //   hist[index] = index
    // })

    // var bel = 0
    // var bio = 0
    // var i = 0
    // console.log('Oto countCat: ' + this.i++)
    // var tempUnique: String = ''
    // var unique = catArray.filter((v, i, a) => a.indexOf(v) === i)
    // tempUnique = String(unique)
    // var uniqueArray = tempUnique.split(',')
    // //console.log(uniqueArray)
    // uniqueArray.forEach(function(uniqueval: String) {
    //   catArray.forEach(function(value: String) {
    //     if (value == 'beletrystyka') {
    //       bel = bel + 1
    //       // console.log('Beletrystyka: ' + this.bel)
    //     } else if (value == 'biografie') {
    //       bio = bio + 1
    //       // console.log('Biografia: ' + this.bio)
    //     }
    //   })
    // })
    // console.log('Beletrystyka: ' + bel)
    // console.log('Biografia: ' + bio)
    // this.items = unique
    // // this.$store.state.list = unique
    // const userStr = JSON.stringify(catArray, this.replacer)
    // console.warn(unique)
    // console.warn(userStr)
  },
  methods: {
    replacer(key, value) {
      console.log(typeof value)
      if (key === 'beletrystyka') {
        return undefined
      }
      return value
    },
    countCat() {
      // this.items = 33
      // var bel = 0
      // var bio = 0
      // var i = 0
      // console.log('Oto countCat: ' + this.i++)
      // this.$store.state.categories.forEach(function(value: String) {
      //   if (value == 'beletrystyka') {
      //     bel = bel + 1
      //     // console.log('Beletrystyka: ' + this.bel)
      //   } else if (value == 'biografie') {
      //     bio = bio + 1
      //     // console.log('Biografia: ' + this.bio)
      //   }
      // })
      // console.log('Beletrystyka: ' + bel)
      // console.log('Biografia: ' + bio)
    }
  }
})
</script>

<style></style>
