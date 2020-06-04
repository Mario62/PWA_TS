<template>
<div>
 <!-- <p onclick="show"> tt</p> -->
  <img img="~/assets/moscicki/M.jpg" class="NuxtLogo" />
  {{ books }}
</div>
</template>

<script lang="ts">
import Vue from "vue";
// import fs from 'fs';
import axios from "axios";
 

export default Vue.extend({
 data: function () {
    return {
      books: ""
    }
  },
  methods: {   
    //   showFile() {

    //     this.fs.readFile('file.txt', function (err:any, data:any) {
    //         if (err) {
    //             return console.error(err);
    //         }
    //         console.log("Asynchronous read: " + data.toString());
    //     });
    // },
    reg()
    {     
  // fs.readFileSync('foo.txt','utf8');
  // fs.readFile(filename, “utf8")
  // ~/assets/moscicki/Ignaś M.jpg
      const url = 'foo/bar';
      // const url = 'https://google.com/foo/bar';
      // const regex = /^(.+)\/.*$/ig;
      const regex = /[w+]/ig;
      const matches = regex.exec(url);
      
      // console.info(matches[0]) /* 1 = group index */
       console.info("matches[0]") /* 1 = group index */


      //  const fs = require('fs')

      //   const path = './file.txt'

  

      //     //file exists
      //   })
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
        console.log( "First 'Mickiewicz' at: " + /Mickiewicz/.exec(this.books) || '{}'  )           
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
