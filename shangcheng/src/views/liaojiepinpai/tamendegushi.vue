<template>
    <div class="tamendegushi">
        <div class="jiantouzuo" @click="goLeft()">
            &lt;
        </div>
        <div class="tmdgs">
        <div class="tmdgsnr" v-for="item in gushiimg" :key="item.id">
            <img :src="item.url" alt="" v-show="n == item.id">
        </div>   
        </div>
        
        <div class="jiantouyou" @click="goRight()">
            &gt;
        </div> 
    </div>
</template>

<script>
export default {
    data() {
        return {
            gushiimg:[
                {
                    id:1,
                    url:require('../../assets/img/liaojiepinpai/gushiyi.png'),
                },
                {
                    id:2,
                    url:require('../../assets/img/liaojiepinpai/gushier.png'),
                },
                {
                    id:3,
                    url:require('../../assets/img/liaojiepinpai/gushisan.png'),
                },
            ],
            n:1,
        }
    },
    methods: {
        goLeft(){
            if(this.n >1){
                this.n--;
            }else{
                return;
            }
        },
        goRight(){
            if(this.n <3){
                this.n++;
            }else{
                return;
            }
        }
    },
}
</script>

<style scoped>
.tamendegushi{
    width: 80%;
    height: 500px;
    display: flex;
    margin-left: 10%;
}
.tmdgs{
    width: 100%;
    position: relative;  
}
.tmdgsnr{
    width: 100%;
    height: 100%;
    position: absolute;
}
.tmdgsnr img{
    width: 100%;
    height: 100%;
}
.jiantouzuo,.jiantouyou{
        width: 30px;
        height: 20px;
        font-size: 50px;
        padding: 20px 0;
        margin: 0 10px;
        font-family: "宋体";
        color: #666666;
        display: flex;
        align-items: center;
        margin-top: 15%;
}
.jiantouzuo:hover,.jiantouyou:hover{
        background: #333333;
        cursor: pointer;
}

</style>