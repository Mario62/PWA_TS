<template>
  <div class="box">
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
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div>
      <nuxt />
    </div>
    
  </div>
</template>

<style>
.box {
  background-color:antiquewhite;
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
