<template>
    <div class="grid-container">
        <div class="product-img">
            <img class="img" src="https://trikky.ru/wp-content/blogs.dir/1/files/2020/06/10/d9b97b5646fbb691e29947a921049a1d.jpg">
        </div>
        <div class="product-info">
            <div class="info">
                <span class="product-name">Product name</span>
                <div class="full-name">
                    <span class="author">ФИО автора</span>
                    <div class="mark">
                        Оценка
                    </div>
                    <div class="reviews">
                        Отзывы
                    </div>
                </div>
                <hr>
                <div class="edition">
                    Издательство: 
                </div>
                <div class="year-publish">
                    Год издания: 
                </div>
                <div class="age">
                    Возрастные ограничение: 
                </div>
            </div>
            <div class="description">
                <span>Описание: </span>
            </div>
            <div class="buy">
                 В наличии:
                 <div class="btn-buy">
                 <v-btn elevation="2" large>
                    Купить
                 </v-btn>
                 </div>
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
        box-shadow: 5px 11px 13px 2px rgba(lightBlue,  0.5);
    }
    .img{
        width: 250px;
        height: 300px;
    }
    .product-info { 
        grid-area: info; 
        border-left: none;
        border-radius: 0 5px 5px 0;
        box-shadow: 5px 11px 13px 2px rgba(lightBlue,  0.5);
        display: flex;
        display: grid;
        grid-template-columns: 1fr 40%;
        grid-template-rows: 1fr 1.8fr;
        gap: 0px 0px;
        grid-template-areas:
        "info_ info_"
        "description buy";
    }
    .info{
        grid-area: info_;
        margin-left: 20px;
        margin-top: 20px;
        color: rgb(112, 106, 106);
    }
    .product-name{
        font-size: 20pt;
        font-weight: bold;
    }
    .full-name{
        margin-top: 10px;
        display: grid;
        grid-template-columns: 2fr 1fr 1fr 1fr;
        grid-template-rows: 30px;
        gap: 0px 0px;
        grid-template-areas:
            "author mark reviews .";
    }
    .author{
        grid-area: author;
        font-weight: bold;
    }
    .mark{
        grid-area: mark;
        font-weight: bold;
    }
    .reviews{
        grid-area: reviews;
        font-weight: bold;
    }
    hr{
        width: 550px;
        background-color: rgb(112, 106, 106);
    }
    .edition{
        font-size: 14pt;
        font-weight: bold;
        margin-top: 20px;
    }
    .year-publish{
        font-size: 14pt;
        font-weight: bold;
        margin-top: 15px;
    }
    .age{
        font-size: 14pt;
        font-weight: bold;
        margin-top: 15px;
    }
    .description{
        grid-area: description;
        margin-left: 20px;
        margin-top: 10px;
        color: rgb(112, 106, 106);
        font-weight: bold;
        font-size: 14pt;
    }
    .buy{
        grid-area: buy;
        margin-top: 200px;
        margin-left: 20px;
        color: rgb(112, 106, 106);
        font-size: 14pt;
        font-weight: bold;
    }
    .btn-buy{
        margin-top: 80px;
        margin-left: 150px;
    }
</style>