<template>
    <div class="foot">
    <div class="shengming">
    <a href="#">联系我们</a>
    <a href="#">法律声明</a>
    <a href="#">帮助中心</a>
    <a href="#">服务条款</a>
    <a href="#">卡萨帝体验店</a>
    </div>
    <p>Copyright @2011-2021 casarte.com ALL Rights Reserved 鲁ICP备09096283号-1</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
}
</script>

<style scoped>
.foot{
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    border-top: 1px solid #666666;
}
.shengming{
    margin-left: 15%;
}
.shengming a{
  margin-left: 15px;
  font-size: 10px;
  text-decoration: none;
  color: #999999;
}
.foot p{
  margin-left: 200px;
  font-size: 10px;
  color: #999999;
}


</style>