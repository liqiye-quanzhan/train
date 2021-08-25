<template>
    <div class="toubu">
        <img :src="toubuimg.url" alt="">
        <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>新闻资讯</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
export default {
    data() {
        return {
            toubuimg:{
                url:require("../../../assets/img/xinwenzixun/toubuimg.png"),
            }
        }
    },
}
</script>

<style scoped>
.toubu{
    width: 98%;
    height: 230px;
    margin-left: 30px;
    border-bottom: 1px solid #999999;
}
.toubu img{
    width: 100%;
    height: 65%;
}
.el-breadcrumb{
    margin-top: 30px;
    margin-left: 150px;
}
.el-breadcrumb-item{
    color: #999999;
    font-size: 14px;
}

</style>