<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand>
      <NuxtLink to="/" class="homelink text-white">M-Book</NuxtLink>
    </b-navbar-brand>

    <b-navbar-toggle class="animated fadeIn" target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <client-only>
        <b-navbar-nav>
          <b-nav-item>
            <NuxtLink to="/example" class="text-white">Kategorie</NuxtLink>
          </b-nav-item>

          <b-nav-item>
            <NuxtLink to="/our-team" class="text-white">Zespół</NuxtLink>
          </b-nav-item>
        </b-navbar-nav>
      </client-only>
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
NuxtLink:visited{
  color: #fff;
}
NuxtLink:visited{
  color: #fff;
}
</style>
