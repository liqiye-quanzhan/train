<template>
    <div class="top">
        <div class="topnr">
        <div class="zuo">
        <li @click="godenglu()">账号登录</li>
        <li @click="gozhuce()">用户注册</li>
        </div>       
        <!-- <li style="color:#9B592D;font-weight:bold" @click="gozhuce()">注册新账号></li> -->
    </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        gozhuce(){
            this.$router.push('/zhuce');
        },
        godenglu(){
            this.$router.push('/login')
        }
    },
}
</script>

<style scoped>
.top{
    width: 100%;
    height: 10%;
    border-bottom: 1px solid #666666;
}
.topnr{
    width: 80%;
    height: 100%;
    margin-left: 14%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.top li{
    list-style: none;
    color: #666666;
}
.top li:hover{
cursor: pointer;
}
.zuo{
    width: 40%;
    height: 100%;
    display: flex;
    
}
.zuo li{
    width: 50%;
    font-size: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.zuo li:hover{
    color: white;
    border-bottom: 1px solid white;
}
</style>
