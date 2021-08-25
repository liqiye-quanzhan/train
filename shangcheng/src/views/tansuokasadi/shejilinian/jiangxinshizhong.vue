<template>
    <div class="jiangxinshizhong">
        <img :src="jiangxin.url" alt="">
        <p>匠心始终，时间见证</p>
        <a>继续探索-发展历程 ></a>
    </div>
</template>

<script>
export default {
    data() {
        return {
            jiangxin:{
                url:require("../../../assets/img/shejilinian/jiangxinshizhong.webp")
            }
        }
    },
}
</script>

<style scoped>
.jiangxinshizhong{
    width: 99.8%;
    position: relative;
    margin-bottom: 11.3%;
}
.jiangxinshizhong img{
    width: 100%;
}
.jiangxinshizhong p{
    position: absolute;
    font-size: 50px;
    color: white;
    top: 25%;
    left: 58%;
}
.jiangxinshizhong a{
    position: absolute;
    font-size: 20px;
    color: #A88646;
    top: 42%;
    left: 58.5%;
}
.jiangxinshizhong a:hover{
    cursor: pointer;
}

</style>