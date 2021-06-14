<template>
    <div class="grid-container">
        <div class="cart">
            <span class="spanCart">Корзина:</span>
            <div class="cartStr">
                <cart :cart="cart"></cart>
            </div>
        </div>

        <div class="buy">
                <span class="spanBuy">Сумма:</span>
            <div class="btnBuy">
                <v-btn
                elevation="2"
                large
                class="btn-proceed"
                append-icon="mdi-arrow-right"
                color="blue"
                >
                Купить
                </v-btn>
            </div>
        </div>
    </div>
</template>

<script>
import CartComp from "@/components/CartComp.vue";

export default {
    data() {
        return{

        }
    },
    components: {
        CartComp,
        },
    }
</script>

<style lang="scss">
.grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1.2fr 1fr;
    grid-template-rows: 50px 500px 150px;
    gap: 0px 0px;
    grid-template-areas:
    ". . . . . ."
    ". cart cart cart buy ."
    ". . . . . .";
}
.cart {
    grid-area: cart;
    border-radius: 5px 5px 5px 5px;
    box-shadow: 5px 11px 13px 2px rgba(lightBlue, 0.5);
    overflow-y: scroll;
}
.spanCart{
    font-size: 20pt;
    font-weight: bold;
}
.buy {
    grid-area: buy;
}
.spanBuy{
    margin-left: 20px;
    font-size: 20pt;
    font-weight: bold;
}
.btnBuy{
    margin-left:70px;
    margin-top: 40px;
}

.cartStr{
    margin-left: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    width: 600px;
    height: 100px;
}
</style>