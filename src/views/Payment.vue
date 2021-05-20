<template>
    <div class="grid-container">
        <div class="payment">
            <div class="name">
                <span>Оплата банковской картой</span>
            </div>
            <div class="card">
                <v-text-field
                    class="number"
                    append-icon="mdi-credit-card"
                    type="text"
                    outlined
                    label="Номер карты"
                ></v-text-field>
                <v-text-field
                    class="month"
                    type="text"
                    outlined
                    label="мм"
                ></v-text-field>
                <p class="text">/</p>
                <v-text-field
                    class="year"
                    type="text"
                    outlined
                    label="гг"
                ></v-text-field>
                <v-text-field
                    class="cvv"
                    type="text"
                    outlined
                    label="CVV"
                ></v-text-field>
                <v-text-field
                    class="userName"
                    type="text"
                    outlined
                    label="Владелец"
                ></v-text-field>
            </div>
            <div class="btn">
                <v-btn elevation="2" large class="btn-pay">
                     Оплатить    
                 </v-btn>
            </div>
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
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: 10% 100px 400px 100px 10%;
        gap: 0px 0px;   
        grid-template-areas:
            ". . . . . . ."
            ". . . . . . ."
            ". . payment payment payment . ."
            ". . . . . . ."
            ". . . . . . .";
}
.payment { 
    grid-area: payment; 
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 0px 0px;
    border-radius: 5px 5px 5px 5px;
    box-shadow: 5px 11px 13px 2px rgba(lightBlue,  0.5);
    grid-template-areas:
        "name name name name name name name"
        "card card card card card card card"
        "card card card card card card card"
        "card card card card card card card"
        "btn btn btn btn btn btn btn"
        "btn btn btn btn btn btn btn";
}

.name { 
    grid-area: name; 
    font-size: 20pt;
    font-weight: bold;
    margin-top: 15px;
    margin-left: 140px;
}
.card { 
    grid-area: card; 
    display: grid;
    
    grid-template-columns: 10% 10% 5% 10% 1fr 1fr 10%;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 0px 0px;
    grid-template-areas:
        ". . . . . . ."
        ". number number number number number ."
        ". . . . . . ."
        ". month text year . cvv ."
        ". . . . . . ."
        ". userName userName userName userName userName ."
        ". . . . . . ."
        ". . . . . . .";
}
.number { grid-area: number; }
.month { grid-area: month; }
.year { grid-area: year; }
.text { 
    grid-area: text; 
    font-size: 30pt;
    color: grey;
    margin-top: 5px;
    margin-left: 8px;
}
.cvv { grid-area: cvv; }

.btn { 
    grid-area: btn; 
    margin-top: 70px;
    margin-left: 250px;
}
.userName {
    grid-area: userName;
}
</style>

