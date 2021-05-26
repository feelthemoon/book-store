import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: () => import("@/views/Login.vue"),
    meta: {
      layout: "auth",
    },
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("@/views/Register.vue"),
    meta: {
      layout: "auth",
    },
  },
  {
    path: "/books",
    name: "Books",
    component: () => import("@/views/Books.vue"),
    meta: {
      layout: "auth",
    },
  },
  {
    path: "/payment",
    name: "Payment",
    component: () => import("@/views/Payment.vue"),
    meta: {
      layout: "auth",
    }
  }
  {
    path: "/books/:id",
    component: () => import("@/views/ProductPage.vue"),
    meta: {
      layout: "auth",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to, _, next) => {
  if (
    to.name !== "Login" &&
    to.name !== "Register" &&
    !localStorage.getItem("auth")
  ) {
    next({ name: "Login" });
  } else if (
    (to.name === "Login" || to.name === "Register") &&
    localStorage.getItem("auth")
  ) {
    next({ name: "Books" });
  } else {
    next();
  }
});
export default router;
