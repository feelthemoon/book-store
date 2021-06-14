<template>
    <div>
        <img class="bookImg" width="80" height="80" src="" alt="">
        <span class="name"></span>
        <span class="author"></span>
        <span class="price"></span>
    </div>
</template>
<script>
export default {
    props: {
    cart: Object,
    },
}
</script>

<style lang="scss">
.bookImg{
    width: 80px;
    height: 80pх;
}
</style>