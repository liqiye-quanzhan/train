<template>
    <div class="dlfoot">
        <div class="footzuo">
           <li>首页</li>
           <li>帮助</li>
           <li>服务条款</li>
           <li>联系我们</li>
           <li>法律声明</li>
        </div>
        <div class="footyou">
            <p>Copyrightc 2011 - 2021 casarte.com ALL Rights Reserved</p>
            <a href="#">鲁ICP备09096283号-1</a>
        </div>
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
.dlfoot{
    width: 100%;
    height: 6%;
    background: #333333;
    display: flex;
    align-items: center;
    opacity: 0.3;
}
.footzuo{
    width: 50%;
    height: 100%;
    display: flex;
    margin-left: 10%; 
    align-items: center;
}
.footzuo li{
    width: 9%;
    height: 40%;
    font-size: 12px;
    color: white;
    list-style: none;
    border-right: 1px solid white;
    margin-left: 5px;
    display: flex;
    justify-content: center;
}
.footzuo li:hover{
    cursor: pointer;
}
.footyou{
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;  
    margin-left: 5%;   
}
.footyou p,.footyou a{
    color: white;
    font-size: 12px;
}
.footyou a{
    text-decoration: none;
    margin-left: 10px;
}
.footyou a:hover{
    color:#A88747 ;
}
</style>
