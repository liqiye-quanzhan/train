<template>
  <div class="zhongshang">
    <div class="zuo">
      <ul>
        <li v-for="(item,id) in jifang1" :key="id" @mouseenter="bianhua(id)">{{item}}</li>
      </ul>
    </div>
    <div class="zhong">
      <div class="quan">
        <p style="color:#fff">{{jifangname}}</p>
        <p class="p1">{{zczzl}}</p>
        <p class="p2">{{itemzzl}}%</p>
        <hr style="width:80%;height:0.1px;border:none;background:#1AC9FF;box-shadow:#1AC9FF 0 0 10px 1px;"/>
        <p class="p1">{{zczs}}</p>
        <p class="p2">{{itemzs}}</p>
      </div>
    </div>
    <div class="you">
      <ul>
        <li v-for="(item,id) in jifang2" :key="id" @mouseenter="bian(id)">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
data() {
    return { 
      jifang1:['机房一','机房二','机房三'],
      jifang2:['机房四','机房五','机房六'],
      zczzl:"资产增长率",
      zczs:'资产总数(万个)',
      itemzzl:'',
      itemzs:'',
      jifangname:"",
      yi:[
      {
        zzl:10,
        zs:10000,
      },
      {
        zzl:20,
        zs:20000,
      },
      {
        zzl:30,
        zs:30000,
      },],
      er:[
        {
        zzl:40,
        zs:40000,
      },
      {
        zzl:50,
        zs:50000,
      },
      {
        zzl:60,
        zs:60000,
      },]
    }
},
mounted() {
  this.jifangname = this.jifang1[0];
  this.itemzzl = this.yi[0].zzl;
  this.itemzs = this.yi[0].zs;
},
methods: {
  bianhua(id){
    this.itemzzl = this.yi[id].zzl;
    this.itemzs = this.yi[id].zs;
    this.jifangname = this.jifang1[id];
  },
  bian(id){
    this.itemzzl = this.er[id].zzl;
    this.itemzs = this.er[id].zs;
    this.jifangname = this.jifang2[id];
  }
},
}
</script>

<style scoped>
.zhongshang{
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
}
.zhong{
  width: 60%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  border: 1px solid #1AC9FF;
}
.quan{
  width: 250px;
  height: 250px;
  border: 2px dashed #1AC9FF;
  border-radius: 125px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.quan p{
  width: 50%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.p1{
  margin-top: 20px;
  color: white;
  border-left: 3px solid #1AC9FF;
  border-right: 3px solid #1AC9FF;
  box-shadow:#1AC9FF 0 0 10px 1px inset;
  font-size: 14px;
}
.p2{
  margin-bottom: 10px;
  font-size: 20px;
  color: #1AC9FF;
}
.zuo,.you{
  width: 20%;
  height: 100%;
}
.zuo ul,.you ul{
  width: 100%;
  height: 100%;
  margin-left: 20px;
}
.zuo ul li,.you ul li{
  width: 70%;
  height: 30px;
  list-style: none;
  margin-top: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 2px solid #1AC9FF;
  border-bottom: 2px solid #1AC9FF;
  box-shadow:#1AC9FF 0 0 10px 1px inset;
  color: white;
}
.zuo ul li:hover,.you ul li:hover{
  box-shadow: #1AC9FF 2px 2px 10px 2px;
  cursor: pointer;
}

</style>