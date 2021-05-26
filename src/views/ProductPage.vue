<template>
  <div class="grid-container">
    <div class="product-img">
      <img
        class="img"
        :src="`data:image/jpeg;base64,/${product.img}`"
        :alt="product.book"
      />
    </div>
    <div class="product-info">
      <div class="text-info">
        <span class="product-name">{{ product.book }}</span>
        <div class="full-name">
          <span class="author">{{ product.author }}</span>
          <div class="mark">Оценка</div>
          <div class="reviews">Отзывы</div>
        </div>
        <hr />
        <div class="edition">Издательство: АЛЬМЕГО</div>
        <div class="year-publish">Год издания: 2020</div>
        <div class="age">Возрастное ограничение: 18+</div>
      </div>
      <div class="description">
        <span
          >Описание: Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Adipisci rerum nihil vitae eos quae voluptatum officiis ipsum
          distinctio, soluta et asperiores, eius accusantium sint quis
          reiciendis nesciunt, quod obcaecati eveniet!</span
        >
      </div>
      <div class="buy">
        В наличии: <span class="has-product">ДА</span>
        <div class="btn-buy">
          <v-btn elevation="2" large color="primary"> В корзину </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: mapState({ product: (state) => state.books.product }),
  beforeRouteEnter(_, __, next) {
    next(async (vm) => {
      try {
        await vm.getProductInfo();
      } catch (error) {}
    });
  },
  methods: {
    ...mapActions(["getProduct"]),
    async getProductInfo() {
      try {
        await this.getProduct(this.$route.params.id);
      } catch (error) {}
    },
  },
};
</script>
<style lang="scss">
.grid-container {
  display: grid;
  grid-template-columns: 8% 1.2fr 1% 1fr 1fr 10%;
  grid-template-rows: 10% 600px 15%;
  gap: 0px 0px;
  grid-template-areas:
    ". . . . . ."
    ". img . info info ."
    ". . . . . .";
}
.product-img {
  grid-area: img;
  border-radius: 5px 0 0 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 5px 11px 13px 2px rgba(lightBlue, 0.5);
}
.img {
  width: 100%;
  height: 100%;
}
.product-info {
  grid-area: info;
  border-left: none;
  border-radius: 0 5px 5px 0;
  box-shadow: 5px 11px 13px 2px rgba(lightBlue, 0.5);
  display: flex;
  display: grid;
  grid-template-columns: 1fr 40%;
  grid-template-rows: 1fr 1.8fr;
  gap: 0px 0px;
  grid-template-areas:
    "info_ info_"
    "description buy";
}
.text-info {
  grid-area: info_;
  margin-left: 20px;
  margin-top: 20px;
  color: rgb(112, 106, 106);
}
.product-name {
  font-size: 20pt;
  font-weight: bold;
}
.full-name {
  margin-top: 10px;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  grid-template-rows: 30px;
  gap: 0px 0px;
  grid-template-areas: "author mark reviews .";
}
.author {
  grid-area: author;
  font-weight: bold;
}
.mark {
  grid-area: mark;
  font-weight: bold;
}
.reviews {
  grid-area: reviews;
  font-weight: bold;
}
hr {
  width: 550px;
  background-color: rgb(187, 70, 70);
}
.edition {
  font-size: 14pt;
  font-weight: bold;
  margin-top: 20px;
}
.year-publish {
  font-size: 14pt;
  font-weight: bold;
  margin-top: 15px;
}
.age {
  font-size: 14pt;
  font-weight: bold;
  margin-top: 15px;
}
.description {
  grid-area: description;
  margin-left: 20px;
  margin-top: 10px;
  color: rgb(112, 106, 106);
  font-weight: bold;
  font-size: 14pt;
}
.buy {
  grid-area: buy;
  margin-top: 200px;
  margin-left: 20px;
  color: rgb(112, 106, 106);
  font-size: 14pt;
  font-weight: bold;
}
.btn-buy {
  margin-top: 80px;
  margin-left: 130px;
}
.has-product {
  color: rgb(21, 248, 21);
}
</style>