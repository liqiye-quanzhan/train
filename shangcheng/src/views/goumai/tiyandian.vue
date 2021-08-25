<template>
  <div class="tiyandian">

    <div class="zongti">
    <div class="zuo">
    <Youditu @click.native="kuoda(1)" style="width: 100%;height: 40%;margin-left: 20px;"></Youditu>
    <Zuozhong  @click.native="kuoda(2)" style="width: 100%;height: 30%;  margin-left: 20px;top: 10px;"></Zuozhong>
    <Zuoxia @click.native="kuoda(3)" style="width: 100%;height: 26%;margin-left: 20px;  top: 20px;"></Zuoxia>
    </div>
    <div class="zhong">
    <Zhongshang @click.native="kuoda(4)" style="width: 100%;height: 50%;margin-left: 40px;"></Zhongshang> 
    <Zhongxia @click.native="kuoda(5)" style="width: 100%;height: 45%;margin-top: 10px;  margin-left: 40px;"></Zhongxia>
    </div>
    <div class="you">
      <Youshang @click.native="kuoda(6)" style="  margin-left: 60px;  width: 100%;height: 48%;margin-top: 8px;"></Youshang>
      <Youxia @click.native="kuoda(7)" style="width: 100%;height: 48%;  margin-left: 60px;margin-top: 8px;"></Youxia>
    </div>
    </div> 

    <div class="yingying" v-if="dianji != 0" @click="qvxiao()">
    </div>
    <transition name="fade">
    <div class="neirong" v-if="dianji != 0">
        <Youditu v-show="dianji == 1"></Youditu>
        <Zuozhong v-show="dianji == 2"></Zuozhong>
        <Zuoxia v-show="dianji == 3"></Zuoxia>
        <Zhongshang v-show="dianji == 4"></Zhongshang>
        <Zhongxia v-show="dianji == 5"></Zhongxia>
        <Youshang v-show="dianji == 6"></Youshang>
        <Youxia v-show="dianji == 7"></Youxia>
      </div>
       </transition>

  </div>
</template>

<script>
import Youditu from './zuoshang'
import Zuozhong from './zuozhong'
import  Zuoxia from './zuoxia'
import Zhongshang from './zhongshang'
import Zhongxia from './zhongxia'
import Youshang from './youshang'
import Youxia from './youxia'
export default {
  components:{
    Youditu,
    Zuozhong,
    Zuoxia,
    Zhongshang,
    Zhongxia,
    Youshang,
    Youxia
  },
data() {
    return {
        dianji:0,
    }
},
methods: {
  qvxiao(){
    this.dianji =0;
  },
  kuoda(index){
  this.dianji =index;
  }
},
}
</script>

<style scoped>
.tiyandian{
  width: 100%;
  height: 620px;
  background: #000836; 
  position: relative;
}
.yingying{
  width: 100%;
  height: 100%;
  background: white;
  position: absolute;
  top: 0px;
  opacity: 0.3;
}
.neirong{
  width: 50%;
  height: 80%;
  position: absolute;
  top: 10%;
  left: 25%;
  background: black;
}
.zongti{
  width: 100%;
  height: 100%;
  display: flex;
}
.zuo{
  width: 30%;
  height: 100%;
}
.zhong{
  width: 40%;
  height: 100%;
}
.you{
  width: 25%;
  height: 100%;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>