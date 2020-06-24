<template>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand ><NuxtLink to="/" class="homelink">M-Book</NuxtLink></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="https://bootstrap-vue.org/docs/components/badge">Components</b-nav-item>
          <i class="fa fa-github" aria-hidden="true"></i>

          <b-nav-item href="https://github.com/Mario62/PWA_TS/tree/dev">
            <b-badge variant="light">Alpha</b-badge>
          </b-nav-item>
        </b-navbar-nav>


        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <!-- <b-form-input list="searchlist" size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button> -->
            <Search />
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
     
    </b-navbar>
    
</template>

<script>
import Search from '~/components/Search.vue'
  export default {
    components: {
      Search
    }
  }
</script>

<style>
</style>