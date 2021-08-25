<template>
    <div class="kasadifuwu">
        <div class="fuwu" v-for="item in fuwu" :key="item.id">
        <img :src="item.url" alt="">
        <a href="#">{{item.a}}</a>
        <p>{{item.p}}</p>
      </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
             fuwu:[
        {
          id:1,
          url:require('../../assets/img/zhong1.webp'),
          a:'指挥科技.诠释智慧',
          p:'卡萨帝指挥家高端成套家电'
      },
      {
          id:2,
           url:require('../../assets/img/zhong2.webp'),
          a:'卡萨帝智慧高端成套厨房',
          p:'全空间嵌入 智慧烹饪家'
      },
      {
          id:3,
           url:require('../../assets/img/zhong1.webp'),
          a:'卡萨帝体验店',
          p:'格调生活，触手可及'
      },
      {
          id:4,
           url:require('../../assets/img/zhong2.webp'),
          a:'卡萨帝品牌视频',
          p:'家的艺术，在于发现爱的意义'
      },
      ],
        }
    },
}
</script>

<style scoped>
.kasadifuwu{
    width: 100%;
    display: flex;
   justify-content: space-between;
}

.fuwu{
  width: 25%;
  height: 275px;
  margin-left: 28px;
  margin-top: 15px;
}
.fuwu img{
  width: 96%;
  height: 150px;
  display: flex;
}
.fuwu a{
  display: flex;
  justify-content: center;
  margin-top: 20px;
  text-decoration: none;
  color:black;
  font-size: 16px;
}

.fuwu p{
  display: flex;
  justify-content: center;
  margin-top: 10px;
  color: #999999;
  font-size: 12px;
  letter-spacing:2px;
}
</style>

