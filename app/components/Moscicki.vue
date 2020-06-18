<template>
<div>
<<<<<<< HEAD
  <img src="~/assets/moscicki/B.jpg" class="NuxtLogo" />
=======
  <!-- <img src="~/assets/moscicki/B.jpg" class="NuxtLogo" /> -->
  <img src="~/assets/moscicki/B.jpg"  class="NuxtLogo" />
>>>>>>> Mariusz
  <!-- <p> {{ books }} </p> -->
</div>
</template>

<<<<<<< HEAD
<script>
export default {
  data: function () {
    return {
      src: "~/assets/moscicki/Ignaś M.jpg",
=======
<script lang="ts">

export default {
  data: function () {
    return {
      source: "~/assets/moscicki/M.jpg",
>>>>>>> Mariusz
      path: "~/assets/moscicki/",
      filename: "Ignaś ",
      color: "M",
      ext: ".jpg"
    }
  },
  methods: {
    imgPathByColor(color = "B") {
      console.log("clorr" + color);
      return "~/assets/moscicki/B.jpg";
    }
  }  
<<<<<<< HEAD

=======
>>>>>>> Mariusz
}
</script>

<style>
.NuxtLogo {
  animation: 1s appear;
  margin: auto;
  max-width: 40vh;
  width: 20vh;
  margin: 3vh;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
