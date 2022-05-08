<template>
  <HeaderOfApp :title="titleOfApp" />
  <router-view @onAddClick="messageFromAddView" />
  <div v-if="show">
    <p>{{ message }}</p>
  </div>
  <FooterOfApp />
</template>

<script>
import FooterOfApp from "@/components/FooterOfApp.vue";
import HeaderOfApp from "@/components/HeaderOfApp.vue";
export default {
  components: {
    HeaderOfApp,
    FooterOfApp,
  },
  methods: {
    messageFromAddView(value) {
      console.log("messageFromAddView: " + value);
      this.message = value;
      this.show = true;
      setTimeout(() => {
        this.show = false;
      }, 2500);
    },
  },
  data() {
    return {
      titleOfApp: "TodoApp",
      message: "",
      show: false,
    };
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-flow: column;
  height: 100%;
}
nav {
  /* padding: 30px; */
  overflow: hidden;
}

nav a {
  float: left;
  display: block; /* Displays an element as a block element (like <p>). It starts on a new line, and takes up the whole width */
  text-align: center;
  padding: 30px;
  min-width: max-content;
  color: #2c3e50;
  text-decoration: none;
  font-weight: bold;
  font-size: large;
}
nav a:hover {
  background-color: #2c3e50;
  border-radius: 10px;
  color: white;
}

nav a.router-link-exact-active {
  color: #42b983;
}
button {
  padding: 10px 20px;
  border: 1px solid #ddd;
  color: #333;
  background-color: #fff;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.info {
  background-color: #2c3e50;
  font-weight: bold;
  border: 2px solid rgba(66, 185, 131, 0.5);
  color: #fff;
}
.info:hover {
  background-color: rgba(66, 185, 131, 1);
  color: white;
}
.add {
  font-weight: bold;
  font-size: large;
  color: #2c3e50;
  border: 2px solid rgba(66, 185, 131, 0.5);
}
.add:hover {
  background-color: #2c3e50;
  color: white;
}
/* Customize the label (the container) */
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #2196f3;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
