<template>
<div>
 <!-- <p onclick="show"> tt</p> -->
  <img img="~/assets/moscicki/M.jpg" class="NuxtLogo" />
  {{ books }}
</div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
 

export default Vue.extend({
 data: function () {
    return {
      books: "",
    }
  },
  methods: {   
    bar()
    {
      return;
    }
  },
  mounted() { // onload function
 
    axios
    .get("/02.2020.min.csv")
    .then(res => 
    { 
      this.books = res.data;   
     
      if (this.books !== null)
      {
        var a = performance.now();
        console.log( "First 'Mickiewicz' at: " + this.books.indexOf('Mickiewicz') )             
        var b = performance.now();
        console.info('It took ' + (b - a) + ' ms.');
        
        var a = performance.now();
        console.log( "First 'Mickiewicz' at: " + /Mickiewicz./g.exec(this.books) || '{}'  )           
        var b = performance.now();
        console.info('It took ' + (b - a) + ' ms.');
      }
      else console.error("books obj is NULL")
      
      //  axios.get("/db.txt").then(res => {
      // this.books = res.data;

    });
  } 
})
</script>

<style>
</style>
