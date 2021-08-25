<template>
    <div class="shejilinian">
        <transition name="cydqd">
        <Zhaowuzhimei  v-show="n == 0"></Zhaowuzhimei>
        </transition>
        <transition name="cydqd">
        <Chuangyideqidian class="Chuangyideqidian"  v-show="n == 1"></Chuangyideqidian>
        </transition>
        <transition name="cydqd">
        <Jiangxindeyanxv class="Jiangxindeyanxv"  v-show="n == 2"></Jiangxindeyanxv>
        </transition>
        <transition name="cydqd">
        <Buzhidezhuiqiu class="Buzhidezhuiqiu"  v-show="n == 3"></Buzhidezhuiqiu>
        </transition>
        <transition name="cydqd">
        <Jiangxinshizhong class="Jiangxinshizhong"  v-show="n == 4"></Jiangxinshizhong>
        </transition>
        
        
        
    </div>
</template>

<script>
import Zhaowuzhimei from "./zhaowuzhimei"
import Chuangyideqidian from "./chuangyideqidian"
import Jiangxindeyanxv from "./jiangxindeyanxv"
import Buzhidezhuiqiu from "./buzhidezhuiqiu"
import Jiangxinshizhong from "./jiangxinshizhong"

export default {
    components:{
        Zhaowuzhimei,
        Chuangyideqidian,
        Jiangxindeyanxv,
        Buzhidezhuiqiu,
        Jiangxinshizhong,
    },
    data() {
        return {
            n:0,
        }
    },
    mounted() {
            this.scrollInit();
    },
    methods: {
     scrollInit() {
 	  // 获取要绑定事件的元素
      const scrollDiv = document;
      // document.addEventListener('DOMMouseScroll', handler, false)
      // 添加滚轮滚动监听事件，一般是用下面的方法，上面的是火狐的写法
      scrollDiv.addEventListener('mousewheel', handler, false)
      var thism = this;
      // 滚动事件的出来函数
     function  handler(event){
        // 获取滚动方向
        const detail = event.wheelDelta || event.detail;
        // 判断滚动方向,这里的100可以改，代表滚动幅度，也就是说滚动幅度是自定义的
        if (detail < 0) {  
            if(thism.n<4){
               thism.n++; 
            }else{
                return;
            }                    
        } else {   
            if(thism.n>0){
               thism.n--; 
            }else{
                return;
            }     
         
        }
      }
      
    }
   }
}
</script>

<style scoped>
.shejilinian{
    position: relative;
}
.Chuangyideqidian{
    position: absolute;
    top: 0;
}
.Buzhidezhuiqiu{
    position: absolute;
    top: 0;
}
.Jiangxindeyanxv{
    position: absolute;
    top: 0;
}
.cydqd-enter-active {
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.cydqd-leave-active {
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.cydqd-enter, .cydqd-leave-to{
  transform: translateX(10px);
  opacity: 0;
}
</style>