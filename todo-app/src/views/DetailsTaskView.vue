<template>
  <div class="details">
    <div class="task-details">{{ tasks[taskID].details }}</div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "TaskDetails",
  data() {
    return {
      taskID: this.$route.params.id - 1,
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
details {
  display: flex;
  flex: 1 1 auto;
  /* The above is shorthand for:
  flex-grow: 0,
  flex-shrink: 1,
  flex-basis: auto
  */
  padding: 15px 40px;
}
</style>
