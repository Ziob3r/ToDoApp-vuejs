<template>
  <div class="addview">
    <h2>New Task</h2>
    <div>
      <p>
        <input
          class="input-data"
          v-model="name"
          type="text"
          placeholder="Title"
        />
      </p>
      <p>
        <textarea
          class="input-details"
          v-model="details"
          type="text"
          placeholder="Details"
        />
      </p>
      <div class="container-checkbox">
        <label class="container">
          Done
          <input type="checkbox" v-model="finish" />
          <span class="checkmark"></span>
        </label>
      </div>
      <div class="add-button">
        <button class="add" @click="onAddClick">Add</button>
      </div>
      <!-- <button v-on:click="onAddClick">AddEmit</button> -->
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "AddTask",
  data() {
    return {
      name: "",
      details: "",
      finish: false,
    };
  },
  methods: {
    onAddClick() {
      // this.$store.dispatch('addTodo', {title: this.title, details: this.details, done: this.done});
      this.$emit("onAddClick", "Added new task!");
      this.$router.push("/tasklist");
      this.addNewClick(this.name, this.details, this.finish);
    },
  },
  setup() {
    const store = useStore();
    let tasks = computed(function () {
      return store.state.tasks;
    });
    function addNewClick(_name, _details, _finish) {
      store.dispatch("addNewElement", {
        id: 0,
        name: _name,
        details: _details,
        finish: _finish,
      });
    }
    return {
      tasks,
      addNewClick,
    };
  },
};
</script>

<style scoped>
.addview {
  padding-left: 20px;
  padding-right: 20px;
  flex: 1 1 auto;
  /* The above is shorthand for:
  flex-grow: 0,
  flex-shrink: 1,
  flex-basis: auto
  */
}
input[type="text"] {
  min-width: 300px;
  padding: 10px;
  font-size: 19px;
  border-width: 2px;
  border-color: #cccccc;
  background-color: #ffffff;
  color: #2c3e50;
  border-style: solid;
  border-radius: 10px;
  box-shadow: 0px 0px 5px #2c3e502f;
}
input[type="text"]:focus {
  outline: none;
}
input[type="text"]::placeholder {
  color: rgba(44, 62, 80, 0.5);
}
.input-details {
  min-width: 300px;
  height: 150px;
  padding: 10px;
  box-sizing: border-box;
  border: 2px solid #cccccc;
  border-radius: 10px;
  background-color: #ffffff;
  font-size: 19px;
  box-shadow: 0px 0px 5px #2c3e502f;
  resize: none;
}
.input-details::placeholder {
  color: rgba(44, 62, 80, 0.5);
}
input[type="checkbox"] {
  width: 50px;
}
.add-button {
  padding: 20px;
}
</style>
