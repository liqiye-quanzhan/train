<template>
    <div class="ljppzoumadeng">
<el-carousel indicator-position="outside" height="760px">
    <el-carousel-item v-for="item in img" :key="item.id">
      <img :src="item.url" alt="">
      <div class="neirong">
        <h1>{{item.h1}}</h1>
        <h3>{{item.h3}}</h3>
        <p>{{item.p}}</p>
        <h5>{{item.h5}}</h5>
      </div>
    </el-carousel-item>
</el-carousel>
    </div>
</template>

<script>
export default {
    data() {
        return {
             img:[
               {
                 id:1,
                 url:require('../../assets/img/liaojiepinpai/guojigaoduanjiadian.webp'),
                 h1:"国际高端家电品牌",
                 h3:"卡萨帝，国际高端家电品牌她为爱而生，是家的艺术",
                 p:"卡萨帝在全球市场的品牌为Casarte，源于意大利语，“Lacasa”是“家”，“arte”是“艺术”，Casarte将两者合二为一，寓意“家的艺术”。",
                 h5:"---MORE---"
               },
               {
                 id:2,
                 url: require('../../assets/img/liaojiepinpai/quanliuchenggaoduantiyan.webp'),
                 h1:"全流程高端体验",
                 h3:"品牌是对用户的承诺与责任高端品牌是全流程的高端体验",
                 p:"卡萨帝有高端的原创科技能力。在全球布局5大研发中心，海尔一系列的全球并购，为卡萨帝兼收并蓄了全球的优势。",
                 h5:"---MORE---"
               },
               {
                 id:3,
                 url:require('../../assets/img/liaojiepinpai/rendanheyisuoguo.webp'),
                 h1:"人单合一硕果",
                 h3:"核心在于有效践行人单合一的管理模式",
                 p:"卡萨帝坚守高端战略，市场像荷塘效应一样全面爆发，核心在于有效践行人单合一的管理模式，进行颠覆式创新。",
                 h5:"---MORE---"
               },
               {
                 id:4,
                 url:require('../../assets/img/liaojiepinpai/yinlingshenghuofangshibiange.webp'),
                 h1:"引领生活方式变革",
                 h3:"没有成功的企业，只有时代的企业",
                 p:"卡萨帝将持续引领生活方式变革，创建物联网时代的高端生态品牌。",
                 h5:"---MORE---"
               },   
      ],
        }
    },
}
</script>

<style scoped>
.ljppzoumadeng{
    width: 96%;
    margin-left: 40px;
}
.el-carousel{
  z-index: -1;
}
.el-carousel-item{
  position: relative;
}
.neirong{
  position: absolute;
  width: 450px;
  height: 300px;
  background: #9354B4;
  top: 100px;
  left: 150px;
  color: white;
  opacity: 0.85;
}
.neirong h1{
  text-align: center;
  margin-top: 40px;
  font-size: 40px;
}
.neirong h3{
  margin-top: 10px;
  width: 60%;
  margin-left: 15%;
  font-size: 15px;
  letter-spacing:2px
}
.neirong p{
  margin-top: 30px;
  width: 80%;
  margin-left: 10%;
  color: #999999;
  font-size: 14px;
}
.neirong h5{
  margin-top: 30px;
  font-size: 14px;
}

</style>