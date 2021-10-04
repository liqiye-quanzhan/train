<template>
<div>
    <div class="top">
        <div class="navigationbar">
            <div class="user" @click="goorder('1')" :class="{hover:hover == '1'}">
                用户管理
            </div>
            <div class="shopping" @click="goorder('2')" :class="{hover:hover == '2'}">
                订单管理
            </div>
        </div>
        <span class="span"><h2>{{name}}</h2><el-button type="primary" @click="Logout()">退出登录</el-button></span>
    </div>
    <router-view></router-view>
</div>
</template>

<script>
export default {
    data() {
        return {
          name:sessionStorage.getItem('username'),
          hover:'1',
        }
      },
      methods: {         
          Logout(){
            this.$router.push("/login")
          },         
          goorder(n){
            if(n == '1'){this.$router.push('/admin');this.hover  = n}
            else{this.$router.push('/order');this.hover = n}
          },
      },
}
</script>

<style>
*{
    margin: 0px;
    padding: 0px;
}
.top{
    width: 100%;
    height: 100px;
    background: #1E1E1E;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 150px;
    box-sizing: border-box;
}
.navigationbar{
    padding-left: 50px;
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.user,.shopping{
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 28px;
    color: #fff;
    transition: 0.5s;
}
.user:hover,.shopping:hover{
    cursor: pointer;
    background: #409EFF;
}
.span{
    display: flex;
    margin-left: 100px;
}
.span h2{
    color: #fff;
}
.span button{
    margin-left: 20px;
}
.hover{
    background: #409EFF;
}
</style>