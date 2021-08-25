<template>
    <div class="zucetop">
        <div class="topnr">
        <div class="zuo">
        <li>邮箱账号注册</li>
        <li>手机账号注册</li>
        </div>       
        <li style="color:#9B592D;font-weight:bold" @click="godenglu()">已有账号，立即登录></li>
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
        godenglu(){
            this.$router.push('/login');
        }
    },
}
</script>

<style scoped>
.zucetop{
    width: 100%;
    height: 10%;
    border-bottom: 1px solid #666666;
}
.topnr{
    width: 80%;
    height: 100%;
    margin-left: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #666666;
}
.zucetop li{
    list-style: none;
    color: #666666;
}
.zucetop li:hover{
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
