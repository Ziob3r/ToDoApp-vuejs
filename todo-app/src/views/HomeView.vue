<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <p>TodoApp created in Vue.js</p>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>
<style scoped>
.home {
  padding-left: 20px;
  padding-right: 20px;
  flex: 1 1 auto;
  /* The above is shorthand for:
  flex-grow: 0,
  flex-shrink: 1,
  flex-basis: auto
  */
}
.home img {
  max-width: 100%;
  height: auto;
  margin: 100px 100px 0px 100px;
}
.home p {
  font-weight: bold;
  font-size: xx-large;
}
</style>
