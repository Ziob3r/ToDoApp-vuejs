import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DetailsView from "../views/DetailsTaskView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/tasklist",
    name: "tasklist",
    component: () => import("../views/TaskListView.vue"),
    children: [
      {
        path: "details/:id",
        name: "details",
        // component: () => import("../views/DetailsTaskView.vue"),
        component: DetailsView,
      },
    ],
  },
  {
    path: "/add",
    name: "add",
    component: () => import("../views/AddTaskView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
