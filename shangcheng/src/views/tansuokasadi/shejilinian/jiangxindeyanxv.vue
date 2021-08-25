<template>
    <div class="jiangxindeyanxv" :style="{height: pmheight + 'px'}">
        <img :src="jiangxin.url" alt="">
         <div class="neirong"> 
            <a class="a1">{{jiangxin.a1}}</a>
            <a class="a2">{{jiangxin.a2}}</a>
            <a class="a3">{{jiangxin.a3}}</a>
            <a class="a4">{{jiangxin.a4}}</a>
            <a class="a5">{{jiangxin.a5}}</a>
            <a class="a6">{{jiangxin.a6}}</a>
            <a class="a7">{{jiangxin.a7}}</a>
            <video width="600" height="360" controls :poster="jiangxin.srcimg">
               <source :src="jiangxin.src"  type="video/mp4">
                您的浏览器不支持 HTML5 video 标签。
            </video>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            jiangxin:{
                id:1,
                url:require("../../../assets/img/shejilinian/jiangxindeyanxv.webp"),
                src:require("../../../assets/img/liaojiepinpai/shipin.mp4"),
                srcimg:require("../../../assets/img/shejilinian/yanxv.png"),
                a1:"EXTENSION",
                a2:"匠心的延续",
                a3:"精益 追求 使命",
                a4:"PEFNEMENT PLRSUIT MISSION",
                a5:"艺术的创想不止于草图，再制造工程中，拿着丝绸的工人要对每一台洗衣机内筒的380个筒孔进行试擦，最终让一个产品从内到外都犹如一件艺术品，值得人细细品味。",
                a6:"FLOATINGLAYER",
                a7:"层次感",
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
.jiangxindeyanxv{
    width: 99.8%;
}
.jiangxindeyanxv img{
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
    left: 83%;
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