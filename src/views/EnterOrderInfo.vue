<template>
    <div class="grid-container">
        <div class="main">
            <div class="dev-method">
                <span>Выберите способ доставки:</span>
                <tr></tr>
                <v-btn elevation="2" large class="btn-courier">
                    Курьер
                 </v-btn>
                 <v-btn elevation="2" large class="btn-pochta">
                    Почта РФ
                 </v-btn>
            </div>
            <div class="info">
                    <div class="ent-field">
                        Заполните поля:
                    </div>
                    <tr></tr>
                    <v-text-field
                        class="name"
                        append-icon="mdi-account-box"
                        type="text"
                        outlined
                        label="Имя"
                        small
                    ></v-text-field>
                    <v-text-field
                        class="surname"
                        append-icon="mdi-account-box"
                        type="text"
                        outlined
                        label="Фамилия"
                    ></v-text-field>
                    <v-text-field
                        class="punkt"
                        append-icon="mdi-city"
                        type="text"
                        outlined
                        label="Населенный пункт"
                    ></v-text-field>
                    <v-text-field
                        class="index"
                        append-icon="mdi-information"
                        type="text"
                        outlined
                        label="Индекс"
                    ></v-text-field>
                    <v-text-field
                        class="street"
                        append-icon="mdi-information"
                        type="text"
                        outlined
                        label="Улица"
                    ></v-text-field>
                    <v-text-field
                        class="home"
                        append-icon="mdi-home"
                        type="text"
                        outlined
                        label="Дом/Корпус"
                    ></v-text-field>
                    <v-text-field
                        class="phone"
                        append-icon="mdi-phone"
                        type="text"
                        outlined
                        label="Телефон"
                    ></v-text-field>
                    <v-text-field
                        class="mail"
                        append-icon="mdi-email"
                        type="text"
                        outlined
                        label="E-mail"
                    ></v-text-field>
                    <div class="check">
                        <input type="checkbox" id="scales" name="scales"
                                checked>
                        <label for="scales"> Я согласен на обработку персональных данных</label>
                    </div>
            </div>
            <div class="proceed">
                <v-btn elevation="2" large class="btn-proceed" append-icon="mdi-arrow-right">
                    Продолжить
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
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: 10% 600px 10%;
        gap: 0px 0px;
        grid-template-areas:
            ". . . . ."
            ". main main main ."
            ". . . . ."
            ". . . . ."
            ". . . . .";
    }
    .main { 
        grid-area: main; 
        display: flex;
        border-radius: 5px 5px 5px 5px;
        box-shadow: 5px 11px 13px 2px rgba(lightBlue,  0.5);

        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: 10% 10% 1fr 1fr 20%;
        gap: 0px 0px;
        grid-template-areas:
            "dev-method dev-method dev-method dev-method dev-method"
            "dev-method dev-method dev-method dev-method dev-method"
            "info info info info info"
            "info info info info info"
            "proceed proceed proceed proceed proceed";
    }

    .dev-method { 
        grid-area: dev-method; 
        margin-left: 30px;
        margin-top: 10px;
        font-size: 20pt;
        font-weight: bold;
    }
    .btn-courier{
        margin-top: 20px;
        margin-left: 10px;
    }
    .btn-pochta{
        margin-top: 20px;
        margin-left: 100px;
    }
    .info { 
        grid-area: info; 
        font-size: 20pt;
        font-weight: bold;
        margin-left: 30px;

        display: grid;
        grid-template-columns: 1fr 1fr 10% 1fr 1fr 10%;
        grid-template-rows: 10% 10% 10% 10% 10% 10% 10% 10% 10% 0.8fr;
        gap: 0px 0px;
        grid-template-areas:
            "ent-field ent-field ent-field ent-field ent-field ent-field"
            "name name . surname surname ."
            ". . . . . ."
            "punkt punkt . index index ."
            ". . . . . ."
            "street street . home home ."
            ". . . . . ."
            "phone phone . mail mail ."
            ". . . . . ."
            "check check check check check check";
    }
    .ent-field { grid-area: ent-field; }
    .name { 
        grid-area: name; 
    }
    .surname { 
        grid-area: surname; 
    }
    .punkt { 
        grid-area: punkt; 
    }
    .index { 
        grid-area: index; 
    }
    .street { 
        grid-area: street; 
    }
    .home { 
        grid-area: home; 
    }
    .phone { 
        grid-area: phone; 
    }
    .mail { 
        grid-area: mail; 
    }
    .check { 
        grid-area: check; 
        font-size: 14pt;
        margin-top: 10px;
        margin-left: 180px;
        color: grey;
    }

    .proceed {
        grid-area: proceed; 
        margin-top: 30px;
        margin-left: 350px;
    }
</style>