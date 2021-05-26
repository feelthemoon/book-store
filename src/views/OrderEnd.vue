<template>
  <div class="grid-container">
    <div class="order">
      <h4>Заказ №104356 оформлен</h4>
      <div class="name top">Имя:</div>
      <div class="surname top">Фамилия:</div>
      <div class="address top">Адрес:</div>
      <div class="index top">Индекс:</div>
      <div class="phone top">Телефон:</div>
      <router-link to="/" class="back-to-shop">Вернуться в магазин</router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="scss">
@import "@/assets/styles/_variables";
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 100px 400px 100px 1fr;
  gap: 0px 0px;
  grid-template-areas:
    ". . . . . ."
    ". . . . . ."
    ". order order order order ."
    ". order order order order ."
    ". . . . . .";
}
.order {
  grid-area: order;
  position: relative;
  border-radius: 5px 5px 5px 5px;
  box-shadow: 5px 11px 13px 2px rgba(lightBlue, 0.5);
  font-size: 20pt;
  font-weight: bold;
  margin-left: 20px;
}
h4 {
  margin-top: 20px;
  margin-left: 300px;
}
.top {
  margin-top: 30px;
  margin-left: 20px;
}
.back-to-shop {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  text-decoration: none;
  padding: 10px 20px;
  background-color: $lightBlue;
  color: #fff;
  font-weight: 400;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
  &:hover {
    opacity: 0.8;
    transition: all 0.2s ease-in-out;
  }
}
</style>