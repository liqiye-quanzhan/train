<template>
    <div class="top">
        <img :src="img.url" alt="">
        <p class="p1">{{img.p}}</p>
        <ul class="ul">
            <li class="li"><img :src="tubiao.url" alt=""><p class="p3">{{tubiao.p}}</p></li>
            <p class="p2">{{tubiao.p}}</p>
            <div class="yinying" :style="{height:heighth + 'px'}"></div>

            <div class="zhihuijiadian">          
                <li class="jiadian" v-for="item in znjjsum" :key="item.id">
                  <img :src="item.url" alt="">
                  <p>{{item.p}}</p>
                  </li>                    
            </div>
            <div class="yinyinger" :style="{height:heighth + 'px'}"></div>
        </ul>
    
    </div>
</template>

<script>
export default {
    data() {
        return {
            img:{
                url:require("../../assets/img/chanpin/zhinengjiadian.webp"),
                p:"人性的科技，家的温暖"
            },
            tubiao:{
                url:require("../../assets/img/zhinengjiadian.png"),
                p:"智慧家电"
            },
            znjjsum:[
                {
                    id:1,
                    url:require("../../assets/img/zhinengjiadian.png"),
                    p:"空调",
                },
                {
                    id:2,
                    url:require("../../assets/img/zhinengjiadian.png"),
                    p:"空调",
                },
                {
                    id:3,
                    url:require("../../assets/img/zhinengjiadian.png"),
                    p:"空调",
                },
                {
                    id:4,
                    url:require("../../assets/img/zhinengjiadian.png"),
                    p:"空调",
                },
                {
                    id:5,
                    url:require("../../assets/img/zhinengjiadian.png"),
                    p:"空调",
                },
                {
                    id:6,
                    url:require("../../assets/img/zhinengjiadian.png"),
                    p:"空调",
                },
                {
                    id:7,
                    url:require("../../assets/img/zhinengjiadian.png"),
                    p:"空调",
                },
                {
                    id:8,
                    url:require("../../assets/img/zhinengjiadian.png"),
                    p:"空调",
                },
                {
                    id:9,
                    url:require("../../assets/img/zhinengjiadian.png"),
                    p:"空调",
                },
                {
                    id:10,
                    url:require("../../assets/img/zhinengjiadian.png"),
                    p:"空调",
                },
                {
                    id:11,
                    url:require("../../assets/img/zhinengjiadian.png"),
                    p:"空调",
                },
                {
                    id:12,
                    url:require("../../assets/img/zhinengjiadian.png"),
                    p:"空调",
                },
                {
                    id:13,
                    url:require("../../assets/img/zhinengjiadian.png"),
                    p:"空调",
                },
                {
                    id:14,
                    url:require("../../assets/img/zhinengjiadian.png"),
                    p:"空调",
                },

            ],
            heighth:0,
        }
    },
    mounted() {
      this.heighth = document.documentElement.clientHeight -80;
    },
}
</script>

<style scoped>
.top{
    width: 97.5%;
    height: 380px;
    margin-left: 30px;
    position: relative;
    border-bottom: 2px solid #eeeeee;
}
.top img{
    width: 100%;
    height: 80%;
}
.p1{
    position: absolute;
    top: 40%;
    left: 10%;
    color: white;
    font-size: 30px;
}
.ul{
    width: 80%;
    height: 19%;
    display: flex;
    margin-left: 10%;
}
.li{
    width: 7%;
    height: 100%;
    list-style: none;
    border-left: 1px solid #999999;
    border-right: 1px solid #999999;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}
.p3{
    position: absolute;
    width: 100%;
    top: 75%;
    left: 20%;
    font-size: 10px;
    color: #999999;
    opacity: 0;
}
.li:hover{
    cursor: pointer;
}
.li:hover .p3{
    opacity: 1;
}
.p2{
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #222222;
}
.p2:hover{
    color: #A88747;
    cursor: pointer;
}
.li img{
    width: 50%;
    height: 60%;
}
.zhihuijiadian{
  list-style: none;
  background: white;
  width: 250px;
  line-height: 50px;
  z-index: 13;
  position: absolute;
  top: -480px;
  left: 145px;
  display: flex;
  flex-wrap: wrap;
  border-top: 1px solid #eeeeee;
}
.li:hover ~ .zhihuijiadian,.zhihuijiadian:hover{
  top:380px;
}
.jiadian{
  width: 45%;
  height: 50px;
  position: relative;
  margin-left: 10px;
  border-bottom: 1px solid #eeeeee;
  display: flex;
  align-items: center;
}
.jiadian img{
  width: 30%;
  height: 60%;
}
.jiadian:hover{
  cursor: pointer;
}
.jiadian p{
  position: absolute;
  font-size: 12px;
  left: 50%;
  color: #222222;
}
.yinying{
  position: absolute;
  width: 103%;
  background:black;
  opacity: 0.6;
  margin-left: -12.5%;
  top: -1200px;
  z-index: -2;
}
.yinyinger{
  position: absolute;
  width: 103%;
  background:black;
  opacity: 0.6;
  margin-left: -12.5%;
  top: -1200px;
  z-index: -2;
}
.li:hover ~ .yinying,.zhihuijiadian:hover ~.yinyinger{
  top:382px;
}

</style>