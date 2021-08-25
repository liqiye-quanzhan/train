<template>
    <div class="kasadiyangban">
        <div class="anli" v-for="item in anli" :key="item.id">
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
             anli:[
         {
          id:1,
          url:require('../../assets/img/zhong21.webp'),
          a:'简约现代',
          p:'简约中求艺术，化繁为简。从简单舒适中体现生活的精致。'
      },
       {
          id:2,
          url:require('../../assets/img/zhong22.webp'),
          a:'优雅不凡',
          p:'遇见它，即遇见了灵感，是那么内涵、灵性、与众不同。'
      },
      ],
        }
    },
}
</script>

<style scoped>
.kasadiyangban{
    width: 100%;
    display: flex;
  justify-content: space-between;
}

.anli{
  width: 50%;
  height: 450px;
  margin-left: 28px;
  margin-top: 20px;
}
.anli img{
  width: 98%;
}

.anli a{
 margin-top: 15px;
 text-decoration: none;
  color:black;
  font-size: 16px;
}
.anli p{
  margin-top: 10px;
  color: #999999;
  font-size: 12px;
  letter-spacing:2px;

}
</style>
