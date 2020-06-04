<template>
<div>
  <img src="~/assets/moscicki/B.jpg" class="NuxtLogo" />
  <!-- <p> {{ books }} </p> -->
</div>
</template>

<script>
export default {
  data: function () {
    return {
      src: "~/assets/moscicki/Ignaś M.jpg",
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
