<template>
    <div class="chuangyideqidian" :style="{height: pmheight + 'px'}">
        <img :src="chuangyi.url" alt="">
        <div class="neirong"> 
            <a class="a1">{{chuangyi.a1}}</a>
            <a class="a2">{{chuangyi.a2}}</a>
            <a class="a3">{{chuangyi.a3}}</a>
            <a class="a4">{{chuangyi.a4}}</a>
            <a class="a5">{{chuangyi.a5}}</a>
            <a class="a6">{{chuangyi.a6}}</a>
            <a class="a7">{{chuangyi.a7}}</a>
            <video width="600" height="360" controls :poster="chuangyi.srcimg">
               <source :src="chuangyi.src"  type="video/mp4">
                您的浏览器不支持 HTML5 video 标签。
            </video>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            chuangyi:{
                id:1,
                url:require("../../../assets/img/shejilinian/chuangyideqidian.webp"),
                src:require("../../../assets/img/liaojiepinpai/shipin.mp4"),
                srcimg:require("../../../assets/img/shejilinian/qidian.png"),
                a1:"ORIGIN",
                a2:"创艺的起点",
                a3:"融合 碰撞 迸发",
                a4:"INTEGRATION COLLISION EXPLOSION",
                a5:"在卡萨帝的设计中心，有着来自世界各国的设计师不同的文化背景使他们的想法不断碰撞、交融、而将每件产品当作优雅的艺术品来创造是他们共同的目标。",
                a6:"MONOLITH",
                a7:"浑然天成",
            },
            pmheight:0,
        }
    },
    mounted() {
        this.pmheight = document.documentElement.clientHeight-81;
    },
}
</script>

<style scoped>
.chuangyideqidian{
    width: 99.80%;
    position: relative;
}
.chuangyideqidian img{
    width: 100%;
    height: 100%;
}
.neirong{
    position: absolute;
    top: 0px;
    width: 100%;
    height: 100%;
}
.a1{
    position: absolute;
    font-size: 80px;
    color: white;
    opacity: 0.5;
    top: 5%;
    left: 10%;
}
.a2{
    position: absolute;
    font-size: 40px;
    color: white;
    top: 20%;
    left: 11%;
}
.a3{
    position: absolute;
    font-size: 20px;
    color: white;
    opacity: 0.9;
    top: 21%;
    left: 26%;
}
.a4{
    position: absolute;
    font-size: 10px;
    color: white;
    opacity: 0.5;
    top: 25%;
    left: 26%;
}
.a5{
    position: absolute;
    font-size: 12px;
    color: white;
    font-family: "黑体";
    top: 87%;
    left: 10%;
    width: 520px;
    line-height: 20px;
}
.a6{
    position: absolute;
    font-size: 50px;
    color: white;
    opacity: 0.9;
    font-family: "楷书";
    top: 45%;
    left: 84%;
    transform: rotate(90deg);

}
.a7{
    position: absolute;
    font-size: 25px;
    color: white;
    opacity: 0.9;
    top: 40%;
    left: 95.5%;
    width: 25px;
    font-family: "宋体";
}
.neirong video{
    position: absolute;
    top: 30%;
    left: 10%;
    outline: none;
}
.neirong video:hover{
    cursor: pointer;
}
</style>