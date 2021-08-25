<template>
  <div class="zhongxia">
    <div class="title"><p>》滚屏</p></div>
    <div class="gunping">
        <ul v-for="item in gunping.slice(n,m)" :key="item.id">
            <li>
                <p class="p1">{{item.time}}</p>
                <p style="color:#1AC9FF">{{item.time2}}</p>
                <p>{{item.name}}</p>
                <p class="p4" :style="{color:item.colorr}">{{item.zhuangtai}}</p>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>

export default {
data() {
    return { 
        gunping:[
            {
                id:1,
                time:"2021-04-01 星期三",
                time2:"2021-04-08 星期四",
                name:"路由器",
                zhuangtai:'待付款',
                colorr:'',
            },
            {
                id:2,
                time:"2021-04-02 星期三",
                time2:"2021-04-08 星期四",
                name:"路由器",
                zhuangtai:'待付款',
                colorr:'',
            },
            {
                id:3,
                time:"2021-04-03 星期三",
                time2:"2021-04-08 星期四",
                name:"路由器",
                zhuangtai:'已付款',
                colorr:'',
            },
            {
                id:4,
                time:"2021-04-04 星期三",
                time2:"2021-04-08 星期四",
                name:"路由器",
                zhuangtai:'已付款',
                colorr:'',
            },
            {
                id:5,
                time:"2021-04-05 星期三",
                time2:"2021-04-08 星期四",
                name:"路由器",
                zhuangtai:'待评价',
                colorr:'',
            },
            {
                id:6,
                time:"2021-04-06 星期三",
                time2:"2021-04-08 星期四",
                name:"路由器",
                zhuangtai:'待评价',
                colorr:'',
            },
            {
                id:7,
                time:"2021-04-07 星期三",
                time2:"2021-04-08 星期四",
                name:"路由器",
                zhuangtai:'已超时',
                colorr:'',
            },
            {
                id:8,
                time:"2021-04-08 星期三",
                time2:"2021-04-08 星期四",
                name:"路由器",
                zhuangtai:'已取消',
                colorr:'',
            },
            {
                id:9,
                time:"2021-04-09 星期三",
                time2:"2021-04-08 星期四",
                name:"路由器",
                zhuangtai:'待付款',
                colorr:'',
            },
            {
                id:10,
                time:"2021-04-09 星期三",
                time2:"2021-04-08 星期四",
                name:"路由器",
                zhuangtai:'已付款',
                colorr:'',
            },
             {
                id:11,
                time:"2021-04-10 星期三",
                time2:"2021-04-08 星期四",
                name:"路由器",
                zhuangtai:'待付款',
                colorr:'',
            },
            {
                id:12,
                time:"2021-04-11 星期三",
                time2:"2021-04-08 星期四",
                name:"路由器",
                zhuangtai:'已付款',
                colorr:'',
            },
             {
                id:13,
                time:"2021-04-12 星期三",
                time2:"2021-04-08 星期四",
                name:"路由器",
                zhuangtai:'待付款',
                colorr:'',
            },
            {
                id:14,
                time:"2021-04-13 星期三",
                time2:"2021-04-08 星期四",
                name:"路由器",
                zhuangtai:'已付款',
                colorr:'',
            },
            {
                id:15,
                time:"2021-04-14 星期三",
                time2:"2021-04-08 星期四",
                name:"路由器",
                zhuangtai:'待付款',
                colorr:'',
            },
            {
                id:16,
                time:"2021-04-15 星期三",
                time2:"2021-04-08 星期四",
                name:"路由器",
                zhuangtai:'已付款',
                colorr:'',
            },

        ],
        n:0,
        m:8,
    }
},
mounted() {
    this.yanse();
    this.gundong();
},

methods: {
  yanse(){
      for(var i =0;i<this.gunping.length;i++){
          if(this.gunping[i].zhuangtai == '待付款'){
        this.gunping[i].colorr = 'red';
      }else if(this.gunping[i].zhuangtai == '已付款'){
          this.gunping[i].colorr = 'orange';
      }else if(this.gunping[i].zhuangtai == '待评价'){
          this.gunping[i].colorr = 'green';
      }else{
          this.gunping[i].colorr = 'grey';
      }  
    }
    },
    gundong(){
        const dong = setInterval(() => {
            if(this.m < this.gunping.length){
                this.n++;
                this.m++;
            }else{
                this.n = 0;
                this.m = 8;
            }
        },1000);
    }
},
}
</script>

<style scoped>
.zhongxia{
  width: 100%;
  height: 100%;
  border:1px solid #1AC9FF;
  border-top: 5px dashed #1AC9FF;
  position: relative;
  box-shadow:#1AC9FF 0 0 10px 1px inset;
}
.title{
    width: 100%;
    height: 10%;
}
.title p{
    color: #1AC9FF;
    font-size: 14px;
    margin-left: 20px;
    margin-top: 2%;
}
.gunping{
    width: 100%;
    height: 86%;
}
.gunping ul{
    height: 7%;
}
.gunping ul li{
    height: 100%;
    display: flex;
    align-items: center;
    list-style: none;
    margin-top: 1.5%;
    background-color: rgba(255, 255, 255, 0.1); 
}
.gunping ul li p{
    margin-left: 8%;   
    color: white;
    font-size: 12px;
}
.p1{
    border-left: 3px solid #1AC9FF;  
    padding-left: 2%;
}
.p4{
    border-right: 3px solid #1AC9FF;
    padding-right: 2%;
}

</style>