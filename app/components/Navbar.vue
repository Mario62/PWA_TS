<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand>
      <NuxtLink to="/" class="homelink">M-Book</NuxtLink>
    </b-navbar-brand>
    <!-- s<link rel="stylesheet" href="fonts/font-awesome.min.css" /> -->
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item>
          <NuxtLink to="example" class="text-white">Kategorie</NuxtLink>
        </b-nav-item>

        <b-nav-item>
          <NuxtLink to="/our-team" class="text-white">Zespół</NuxtLink>
        </b-nav-item>
        <b-nav-item
          href="https://www.zst-tarnow.pl/category/biblioteka/"
          class="text-white"
        >Biblioteka</b-nav-item>

        <b-nav-item href="https://github.com/Mario62/PWA_TS/tree/dev">
          <b-badge variant="light">
            <i class="fa fa-github" aria-hidden="true"></i> Alpha
          </b-badge>
        </b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <!-- <b-nav-form class="search"> -->
        <!-- <b-form-input list="searchlist" size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>-->
        <Search class="p-0" />
        <!-- </b-nav-form> -->
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
// @import 'fonts/font-awesome.min.css'
import Search from '~/components/Search.vue'
export default {
  components: {
    Search
  }
}
</script>

<style>
@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
.search {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>