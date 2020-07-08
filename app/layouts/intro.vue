<template>
  <div class="box">
    <navbar />
    <nuxt />
    <Footer />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'
// import { store } from '~/store/index'

export default Vue.extend({
  components: {
    Navbar,
    Footer
  },

  methods: {
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
  },
  mounted() {}
})
</script>
<style>
:root {
  --dark: #282828;
  --purple-50: #4600d3;
  --purple-100: #3500D3;
  --purple-200: #240090;
  --purple-300: #190061;
  --purple-400: #0C0032;
}

.box {
  background-color: var(--dark);
  margin: 0 auto;
  min-height: 100vh;
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  text-align: center;
}
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.homelink:hover {
  color: #fff;
  text-decoration: none;
}

.homelink:visited {
  color: #fff;
  text-decoration: none;
}
</style>
