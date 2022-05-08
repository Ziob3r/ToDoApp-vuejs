<template>
  <footer>
    <p>
      TodoApp Copyright &copy;{{ new Date().getFullYear() }} Poland
      <strong> Maciej Ziobrowski</strong>
      <br />All rights reserved
    </p>
  </footer>
</template>

<script>
export default {
  name: "FooterOfApp",
};
</script>

<style scoped>
footer {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  text-align: center;
  width: 100%;
}
</style>
