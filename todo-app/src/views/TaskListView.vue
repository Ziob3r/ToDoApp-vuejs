<template>
  <div class="tasklist">
    <div class="div-button">
      <button class="add" @click="showAddView()">Add New Task</button>
    </div>
    <div
      class="tasks-list"
      v-for="(task, index) in $store.state.tasks"
      :key="task.id"
    >
      <div class="task-row">
        <div class="column">
          <div class="name">{{ task.name }}</div>
        </div>
        <div class="column">
          <div class="container-checkbox">
            <label class="container">
              Done
              <input type="checkbox" v-model="task.finish" />
              <span class="checkmark"></span>
            </label>
          </div>
        </div>
        <div class="column">
          <button class="info" v-on:click="getDetails(task)">Details</button>
        </div>
        <div class="task-info" v-if="showDetails">
          <div v-show="index === showDetailsID">
            <router-view :key="$route.path.id"></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "TaskList",
  methods: {
    getDetails(task) {
      this.showDetailsID = task.id - 1;
      this.$router.push({ name: "details", params: { id: task.id } });
      this.showDetails = !this.showDetails;
      if (!this.showDetails) {
        this.$router.push({ name: "tasklist" });
      }
    },
    showAddView() {
      this.$router.push({ name: "add" });
    },
  },
  data() {
    return {
      showDetails: false,
      showDetailsID: -1,
    };
  },
  setup() {
    const store = useStore();
    let tasks = computed(function () {
      return store.state.tasks;
    });
    return {
      tasks,
    };
  },
};
</script>

<style scoped>
.tasklist {
  padding-left: 20px;
  padding-right: 20px;
  flex: 1 1 auto;
  /* The above is shorthand for:
  flex-grow: 0,
  flex-shrink: 1,
  flex-basis: auto
  */
}
.div-button {
  padding: 50px 0px;
}

/* Clear floats after the columns */
.task-row:after {
  content: "";
  display: table;
  clear: both;
  padding: 20px;
}
.column {
  float: left;
  width: 33.33%;
  height: 70px;
  font-weight: bold;
  border-bottom: 2px solid #2c3e502f;
}
.task-info {
  padding: 15px 40px;
}
.container-checkbox {
  width: fit-content;
  margin: auto auto;
}
</style>
