<template>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand ><NuxtLink to="/" class="homelink">M-Book</NuxtLink></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="https://bootstrap-vue.org/docs/components/badge">Components</b-nav-item>
          <b-nav-item href="https://github.com/Mario62/PWA_TS/tree/dev">
            <b-badge variant="light">Alpha</b-badge>
          </b-nav-item>
        </b-navbar-nav>





        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input list="searchlist" size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
      <datalist id="searchlist">
    <option>Manual Option</option>
    <option v-for="size in sizes">{{ size }}</option>
  </datalist>
    </b-navbar>
    
</template>

<script>
  export default {
    data() {
      return {
        sizes: ['Small', 'Medium', 'Large', 'Extra Large']
      }
    }
  }
</script>

<style>
</style>