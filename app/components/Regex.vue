<template>
  <div>
    <h2>ISBN</h2>
    {{ books }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'

export default Vue.extend({
  data: function() {
    return {
      books: ''
    }
  },
  methods: {
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
  async  getUser() {
    try {
      const response = await axios.get('/user?ID=12345');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

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
