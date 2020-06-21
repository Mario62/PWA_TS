<template>
  <div>
    <h2>Random book</h2>
    {{ book }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'

export default Vue.extend({
  data: function() {
    return {
      books: '',
      book: ''
    }
  },
  methods: {
    getRandom() {
      return 'ddd'
    }
    // initialize() {
    //   this.books = this.books + '1' // Should work now
    // }
    // bar() {
    //   return

    //     if (!empty($value[$n['OPIS_DANE']])) {
    // if (preg_match('/920\s*a([0-9]{1,5}\-[0-9]{1,7}[-\ ]{0,2}[0-9]{1,6}\-[0-9X]{1,6}-[0-9X]{1})[\s.]+/', $value[$n['OPIS_DANE']], $isbn))
    //     $isbn = $isbn[1];//99% centerly 10386/10480 books founded
    // else if (preg_match('/920\s*a([0-9]{9,12}[0-9X]{1})[\s.]+/', $value[$n['OPIS_DANE']], $isbn))
    //     $isbn = $isbn[1];//,5%
    // else if (preg_match('/920\s*a([0-9]{1,5}\-[0-9]{1,7}\-[0-9]{1,6})[\s.]+/', $value[$n['OPIS_DANE']], $isbn))
    //     $isbn = $isbn[1];//,2%
    // else if (preg_match('/920\s*a([0-9]{2}\-[0-9]{5}\-[0-9]{2}\-[0-9X]{1})/', $value[$n['OPIS_DANE']], $isbn))
    //     $isbn = $isbn[1];//,05%
    // else if (preg_match('/920\s*a([0-9]{2,3}\-[0-9]{2,7}\-[0-9]{1,5}\-[0-9X]{1,2})[\s.]+/', $value[$n['OPIS_DANE']], $isbn))
    //     $isbn = $isbn[1];// 1 book found
    // }
    // async getUser() {
    //   try {
    //     const response = await axios.get('/user?ID=12345')
    //     console.log(response)
    //   } catch (error) {
    //     console.error(error)
    //   }
    // }
  },
  mounted() {
    // onload function
    axios
      .get('/02.2020.min.csv')
      .then((res) => {
        // if (this.books) {
        // this.setState({
        this.books = res.data
        // })
        // }
        // if (this.books! !== null)
      })
      .catch((error) => {
        console.warn(error)
      })
    var bookRegExp = /(\d{1,6})\|([^\|]*)\|([^\|]*)\|([^\|]*)\|([^\|]*)\|([^\|]*)\|([^\|]*)\|([^\|]*)\|([^\d]+)/g

    var tx =
      '11560|001  amol2000080  a884-1+884(091)-1"18"A/Z100  a5938245  aKonrad WallenrodcAdam Mickiewicz250  aWyd. 3 zm.260  aWrocławbZakład Narodowy im. Ossolińskichc1991300  aCLXXIII, [1], 116, [2] s.c17 cm440  a258xISSN 0208-4104vnr 72500  aKole|Mickiewicz, Adam (1798-1855).|Konrad Wallenrod|Zakład Narodowy im. Ossoliński|Wrocław|1991|lektury|Lektury11561|001  amol2000080  a830-3100  a5982245  aCierpienia młodego WerteracJohann Wolfgang Goethe ; przeł. [z niem.] Leopold Staff260  aBydgoszczb"Arcanum"c[1990]300  a91, [1] s.c21 cm440  a294xv500  aTyt. oryg.: Die Leiden des jungen Werthers|Goethe, Johann Wolfgang von (1749-1832).|Cierpienia młodego Wertera|"Arcanum"|Bydgoszcz|[1990]|lektury|Lektury11561|001  amol2000080  a830-3100  a5982245  aCierpienia młodego WerteracJohann Wolfgang Goethe ; przeł. [z niem.] Leopold Staff260  aBydgoszczb"Arcanum"c[1990]300  a91, [1] s.c21 cm440  a294xv500  aTyt. oryg.: Die Leiden des jungen Werthers'
    let found = bookRegExp.exec(tx)
    this.book! = found[0]
    console.warn(this.books)
    console.warn(found)
    // console.warn(found(0))
    // console.warn(found[1])
    let str = 'More about JavaScript at https://javascript.info'
    let regexp = /javascript/gi
    //codesandbox.io/s/github/nuxt/nuxt.js/tree/dev/examples/vuex-store?from-embed=&file=/pages/index.vue
    // https: 
    let result

    while ((result = regexp.exec(str))) {
      console.log(`Found ${result[0]} at position ${result.index}`)
      // Found JavaScript at position 11, then
      // Found javascript at position 33
    }

    // console.log(
    //   "First 'ISBN' at: " +
    //     /920\s*a([0-9]{1,5}\-[0-9]{1,7}[-\ ]{0,2}[0-9]{1,6}\-[0-9X]{1,6}-[0-9X]{1})[\s.]+/g.exec(
    //       this.books
    //     ) || '{}'
    // )
  }
})
</script>

<style></style>
