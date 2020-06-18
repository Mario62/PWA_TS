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
<<<<<<< HEAD
      books: ""
    }
  },
  methods: {   

=======
      books: "",
    }
  },
  methods: {   
    bar()
    {
      return;
    }
>>>>>>> Mariusz
  },
  mounted() { // onload function
 
    axios
    .get("/02.2020.min.csv")
    .then(res => 
    { 
<<<<<<< HEAD
      this.books = res.data;   
=======
      this.books = res.data;    
>>>>>>> Mariusz
     
      if (this.books !== null)
      {
        var a = performance.now();
        console.log( "First 'Mickiewicz' at: " + this.books.indexOf('Mickiewicz') )             
        var b = performance.now();
        console.info('It took ' + (b - a) + ' ms.');
        
        var a = performance.now();
<<<<<<< HEAD
        console.log( "First 'Mickiewicz' at: " + /Mickiewicz/.exec(this.books) || '{}'  )           
=======
        console.log( "First 'ISBN' at: " + /920\s*a([0-9]{1,5}\-[0-9]{1,7}[-\ ]{0,2}[0-9]{1,6}\-[0-9X]{1,6}-[0-9X]{1})[\s.]+/g.exec(this.books) || '{}'  )           
>>>>>>> Mariusz
        var b = performance.now();
        console.info('It took ' + (b - a) + ' ms.');
      }
      else console.error("books obj is NULL")
      
      //  axios.get("/db.txt").then(res => {
      // this.books = res.data;

<<<<<<< HEAD
    });
=======
    }); 
>>>>>>> Mariusz
  } 
})
</script>

<style>
</style>
