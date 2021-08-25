<template>
    <div class="zuce" :style="{height:screenHeight + 'px'}">
        <Zucetop></Zucetop>
        <Zucezhong></Zucezhong>
        <Zucefoot></Zucefoot>
    </div>
</template>

<script>
import Zucetop from "./top"
import Zucezhong from "./zhong"
import Zucefoot from "../denglu/foot"
export default {
    components:{
            Zucetop,
            Zucezhong,
            Zucefoot,
        },
    data() {
        return {
           screenHeight:0, 
        }
    },
    mounted() {
        this.screenHeight = document.documentElement.scrollHeight;
    },
}
</script>

<style scoped>
body{
    overflow:hidden;
}
.zuce{
    width: 100%;
    background-image: url("../../../assets/img/zucebeijing.jpeg");
    background-size:cover;
}

</style>
