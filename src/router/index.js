import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CategoryDetail from "../views/CategoryDetail.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: '/category/:id',
    name: 'categoryDetail',
    component: CategoryDetail
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
