import { createLocalVue, mount } from "@vue/test-utils";
import Vuetify from "vuetify";
import Vue from "vue";
import EnterOrderInfo from "@/views/EnterOrderInfo";

Vue.use(Vuetify);

const localVue = createLocalVue();

const factory = (vuetify) =>
  mount(EnterOrderInfo, {
    localVue,
    vuetify,
  });

describe("Страница данных для доставки", () => {
  let vuetify;
  beforeEach(() => {
    vuetify = new Vuetify();
  });
  it("Имеет восемь текстовых полей и один чекбокс", () => {
    const wrapper = factory(vuetify);
    expect(wrapper.findAll("input").length).toEqual(9);
  });
});
