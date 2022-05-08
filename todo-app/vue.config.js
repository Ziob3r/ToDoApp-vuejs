const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});

//Adding pages field that change my title of app
module.exports = {
  pages: {
    index: {
      entry: "src/main.js",
      title: "TodoApp",
    },
  },
};
