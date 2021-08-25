<template>
    <div class="denglu" :style="{height:screenHeight + 'px'}">
        <Top></Top>
        <router-view />
        <Foot></Foot>
    </div>
</template>

<script>
import Top from './top'
import Foot from './foot'

export default {
    components:
    {
        Top,
        Foot,
        },
    data() {
        return {
           screenHeight:0, 
        }
    },
    mounted() {
        this.screenHeight = document.documentElement.scrollHeight - 1;
    },
}
</script>

<style scoped>
body{
    overflow:hidden;
}  

.denglu{
    width: 100%;
    background-image: url("../../../assets/img/denglubeijing.jpeg");
}
</style>

