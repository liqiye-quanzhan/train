<template>
    <div class="zoumadeng">      
   <el-carousel indicator-position="outside" height="600px">
    <el-carousel-item v-for="item in img" :key="item">
      <img :src="item" alt="">
    </el-carousel-item>
  </el-carousel>
  </div>
</template>

<script>
export default {
    data() {
        return {
        img:[
        require('../../assets/img/top1.webp'),
        require('../../assets/img/top2.webp'),
        require('../../assets/img/top3.webp'),
        require('../../assets/img/top4.webp'),
      ],
        }
    },
}
</script>

<style scoped>
.zoumadeng{
    width: 98%;
    margin-left: 29px;
}
.el-carousel{
  z-index: -1;
}
.el-carousel-item img{
  z-index: -2;
}
</style>
