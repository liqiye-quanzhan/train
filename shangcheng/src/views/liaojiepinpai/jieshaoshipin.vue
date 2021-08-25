<template>
    <div class="jieshaoshipin">
    <video  preload:none :poster="shipinimg.src" controls>
        <source :src="shipin.url"  type="video/mp4">
        您的浏览器不支持 HTML5 video 标签。
    </video>
    </div>
</template>

<script>
export default {
    data() {
        return {
            shipin:{
                url:require('../../assets/img/liaojiepinpai/shipin.mp4'),
            },
            shipinimg:{
                src:require('../../assets/img/liaojiepinpai/shipin.png'),
            }        
        }
    },
}
</script>

<style scoped>
.jieshaoshipin{
    width: 100%;
    height: 600px;
}
.jieshaoshipin video{
    width: 98%;
    margin-left: 29px;
    height: 100%;
    outline: none;
}
.jieshaoshipin video:hover{
    cursor: pointer;
}
</style>