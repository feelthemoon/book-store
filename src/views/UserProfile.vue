<template>
    <div class="grid-container">
        <div class="myProfile">
            Мой профиль
        </div>
        <div class="fio">
            <v-text-field
            append-icon="mdi-account-box"
            type="text"
            outlined
            label="ФИО"
            small
            ></v-text-field>
        </div>
        <div class="phone">
            <v-text-field
            append-icon="mdi-account-box"
            type="text"
            outlined
            label="Телефон"
            small
            ></v-text-field>
        </div>
        <div class="mail">
            <v-text-field
            append-icon="mdi-account-box"
            type="text"
            outlined
            label="E-mail"
            small
            ></v-text-field>
        </div>
        <div class="address">
            <v-text-field
            append-icon="mdi-account-box"
            type="text"
            outlined
            label="Address"
            small
            ></v-text-field>
        </div>
        <div class="change">
        <v-btn
          elevation="2"
          large
          class="btn-proceed"
          append-icon="mdi-arrow-right"
          color="blue"
        >
          Изменить
        </v-btn>
        </div>
        <div class="active">
            <span class="spanAct">Активные заказы:</span>
        </div>
        <div class="history">
            <span class="spanHist">История заказов:</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
       return{

       } 
    },
}
</script>

<style lang="scss">

.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 50px 1fr 0.8fr 0.8fr 0.8fr 0.8fr 0.8fr 0.8fr 0.8fr 0.8fr 2.4fr;
  gap: 0px 0px;
  grid-template-areas:
    ". . . . . . . . . . . . ."
    ". myProfile myProfile myProfile . active active active . history history history ."
    ". . img . . active active active . history history history ."
    ". fio fio fio . active active active . history history history ."
    ". phone phone phone . active active active . history history history ."
    ". mail mail mail . . . . . . . . ."
    ". address address address . . . . . . . . ."
    ". change change change . . . . . . . . ."
    ". . . . . . . . . . . . ."
    ". . . . . . . . . . . . .";

    
}

.myProfile { 
    grid-area: myProfile;
    font-size: 40pt;
    font-weight: bold;
}
.img { grid-area: img; }
.active { 
    grid-area: active; 
    border-radius: 5px 5px 5px 5px;
    box-shadow: 5px 11px 13px 2px rgba(lightBlue, 0.5);
    overflow-y: scroll;
}
.spanAct{
    margin-left: 60px;
    font-size: 20pt;
    font-weight: bold;
}
.history { 
    grid-area: history; 
    border-radius: 5px 5px 5px 5px;
    box-shadow: 5px 11px 13px 2px rgba(lightBlue, 0.5);
    overflow-y: scroll;
}
.spanHist{
    margin-left: 60px;
    font-size: 20pt;
    font-weight: bold;
}
.fio { grid-area: fio; }
.phone { grid-area: phone; }
.mail { grid-area: mail; }
.address { grid-area: address; }
.change { 
    grid-area: change;
    margin-left: 100px; 
}

</style>