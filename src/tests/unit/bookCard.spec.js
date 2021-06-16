import { createLocalVue, mount } from "@vue/test-utils";
import Vuetify from "vuetify";
import Vue from "vue";
import BookCard from "@/components/BookCard";

Vue.use(Vuetify);

const localVue = createLocalVue();

const factory = (vuetify) =>
  mount(BookCard, {
    localVue,
    vuetify,
  });

describe("Компонент книжной карточки", () => {
  let vuetify;
  beforeEach(() => {
    vuetify = new Vuetify();
  });
  it("Имеет 2 кнопки", () => {
    const wrapper = factory(vuetify);
    expect(wrapper.findAll("button").length).toEqual(2);
  });
  it("Имеет изображение", () => {
    const wrapper = factory(vuetify);
    expect(wrapper.get("img")).toBeTruthy();
  });
});
