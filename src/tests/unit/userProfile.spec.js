import { createLocalVue, mount } from "@vue/test-utils";
import Vuetify from "vuetify";
import Vue from "vue";
import Vuex from "vuex";
import VueMask from "v-mask";
import profile from "@/store/profile";
import UserProfile from "@/views/UserProfile";

Vue.use(Vuetify);
Vue.use(Vuex);
Vue.use(VueMask);
const store = new Vuex.Store({
  modules: {
    profile,
  },
});

const localVue = createLocalVue();

const factory = (vuetify) =>
  mount(UserProfile, {
    localVue,
    vuetify,
    store,
  });

describe("Профиль польователя", () => {
  let vuetify;
  beforeEach(() => {
    vuetify = new Vuetify();
  });
  it("Имеет пять текстовых полей", () => {
    const wrapper = factory(vuetify);
    expect(wrapper.findAll("input").length).toEqual(5);
  });
  it("Имеет кнопку", () => {
    const wrapper = factory(vuetify);
    expect(wrapper.get("button")).toBeTruthy();
  });
});
