import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Result from "../views/Result.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "/", component: Home },
  { path: "/result", component: Result },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
