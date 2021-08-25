<template>
    <div class="buzhidezhuiqiu" :style="{height: pmheight + 'px'}">
        <img :src="zhuiqiu.url" alt="">
        <div class="neirong"> 
            <a class="a1">{{zhuiqiu.a1}}</a>
            <a class="a2">{{zhuiqiu.a2}}</a>
            <a class="a3">{{zhuiqiu.a3}}</a>
            <a class="a4">{{zhuiqiu.a4}}</a>
            <a class="a5">{{zhuiqiu.a5}}</a>
            <a class="a6">{{zhuiqiu.a6}}</a>
            <a class="a7">{{zhuiqiu.a7}}</a>
            <video width="600" height="360" controls :poster="zhuiqiu.srcimg">
               <source :src="zhuiqiu.src"  type="video/mp4">
                您的浏览器不支持 HTML5 video 标签。
            </video>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            zhuiqiu:{
                id:1,
                url:require("../../../assets/img/shejilinian/buzhidezhuiqiu.webp"),
                src:require("../../../assets/img/liaojiepinpai/shipin.mp4"),
                srcimg:require("../../../assets/img/shejilinian/zhuiqiu.png"),
                a1:"PURSUIT",
                a2:"不止的追求",
                a3:"敬畏 谦和 极致",
                a4:"AWE HUMBLE ACME",
                a5:"在追求极致的道路上，卡萨帝不止于艺术的灵魂与精湛的工艺,汲取全球科技基因注入产品使产品充满人性的温暖，艺术与实用并济,创造颠覆性的用户体验。",
                a6:"UNIQUEPROPORTION",
                a7:"独特比例",
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
.buzhidezhuiqiu{
    width: 99.8%;
}
.buzhidezhuiqiu img{
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
    font-size: 40px;
    color: white;
    opacity: 0.9;
    font-family: "楷书";
    top: 45%;
    left: 79.5%;
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