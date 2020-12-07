import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Home from "../views/client/Home/index";
import Dashboard from "../views/admin/DashBoard/index";
import Users from "../views/admin/Users/index";
import Questions from "../views/admin/Questions/index";
import Results from "../views/admin/Results/index";
import Categories from "../views/admin/Category/index";
import Seasons from "../views/admin/Seasons/index";
import Levels from "../views/admin/Levels/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Homepage",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard
  },
  {
    path: "/categories",
    name: "Categories",
    component: Categories
  },
  {
    path: "/users",
    name: "Users",
    component: Users
  },
  {
    path: "/questions",
    name: "Questions",
    component: Questions
  },
  {
    path: "/results",
    name: "Results",
    component: Results
  },
  {
    path: "/seasons",
    name: "Seasons",
    component: Seasons
  },
  {
    path: "/levels",
    name: "Levels",
    component: Levels
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
