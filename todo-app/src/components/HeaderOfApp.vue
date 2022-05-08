<template>
  <header>
    <h1 class="title">{{ title }}</h1>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/tasklist"> Tasks List </router-link>
      <router-link to="/about">About</router-link>
    </nav>
  </header>
</template>

<script>
// import MenuItem from "./MenuItem.vue";
export default {
  name: "HeaderOfApp",
  props: {
    title: String,
  },
  components: {},
  data() {
    return {};
  },
};
</script>

<style scoped>
header {
  display: flex;
  flex: 0 1 auto;
  /* The above is shorthand for:
  flex-grow: 0,
  flex-shrink: 1,
  flex-basis: auto
  */
  justify-content: space-between;
  border-bottom: 2px solid #2c3e502f;
}
.title {
  pointer-events: none;
}
</style>
