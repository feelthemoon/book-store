import { createLocalVue, mount } from "@vue/test-utils";
import Vuetify from "vuetify";
import Vue from "vue";
import VueRouter from "vue-router";
import AuthLayout from "@/layouts/AuthLayout";

Vue.use(VueRouter);
Vue.use(Vuetify);

const localVue = createLocalVue();

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [],
});

const factory = (vuetify) =>
  mount(AuthLayout, {
    localVue,
    vuetify,
    router,
  });

describe("Основной лэйаут", () => {
  let vuetify;
  beforeEach(() => {
    vuetify = new Vuetify();
  });
  it("Имеет ссылку для перехода на главную страницу", () => {
    const wrapper = factory(vuetify);
    expect(wrapper.get("a")).toBeTruthy();
  });
});
