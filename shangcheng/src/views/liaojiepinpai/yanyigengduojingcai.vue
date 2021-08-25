<template>
    <div class="yanyigengduojingcai">
        <a>演绎更多精彩</a>
        <p>作为艺术生活的创造者，卡萨帝不只是优秀产品，还有诸多精彩纷呈的部分等待着你去发现</p>
        <div class="jingcainr">
        <div class="jingcai" v-for="item in jingcai" :key="item.id">
        <img :src="item.url" alt="">
        <a>{{item.a}}</a>
        <p>{{item.p}}</p>
      </div>
      </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            jingcai:[
        {
          id:1,
          url:require('../../assets/img/liaojiepinpai/chuangyishenghuoguan.webp'),
          a:'线上线下优质的服务与体验',
          p:'创艺生活馆'
      },
      {
          id:2,
           url:require('../../assets/img/liaojiepinpai/chanpinxilietuijian.webp'),
          a:'艺术与生活完美结合',
          p:'产品系列推荐'
      },
      {
          id:3,
           url:require('../../assets/img/liaojiepinpai/pinpaihuodong.webp'),
          a:'精彩纷呈的活动',
          p:'品牌活动'
      },
      {
          id:4,
           url:require('../../assets/img/liaojiepinpai/huiyuanjvlebu.webp'),
          a:'会员尊享高端权益',
          p:'会员俱乐部'
      },
      ],
        }
    },
}
</script>

<style scoped>
.yanyigengduojingcai{
    width: 100%;
    text-align: center;
    margin-top: 70px;
    border-bottom: 1px solid wheat;
}
.yanyigengduojingcai a{
    color: #333333;
    font-size: 30px;
}
.yanyigengduojingcai p{
    margin-top: 10px;
    color: #999999;
    font-size: 14px;
    font-family: "宋体";
}
.jingcainr{
    display: flex;
    width: 80%;
    margin-left: 10%;
    margin-top: 10px;
}
.jingcai{
  width: 25%;
  height: 275px;
  margin-left: 28px;
  margin-top: 15px;
}
.jingcai img{
  width: 96%;
  height: 125px;
  display: flex;
}
.jingcai a{
  display: flex;
  justify-content: center;
  margin-top: 20px;
  text-decoration: none;
  color:#666666;
  font-size: 14px;
}

.jingcai p{
  width: 120px;
  height: 30px;
  margin-top: 10px;
  margin-left: 27.5%;
  color: #A88747;
  font-size: 12px;
  letter-spacing:2px;
  border: 1px solid #A88747;
  font-size: 12px;
  font-family: "宋体";
  display: flex;
  justify-content: center;
  align-items: center;
}
.jingcai p:hover{
    cursor: pointer;
}
</style>