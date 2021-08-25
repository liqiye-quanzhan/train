<template>
    <div class="error">
        <div class="nr">
          <p>页面找不到</p>
          <p>请检查网络链接是否正常或路由是否正确</p>  
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
.error{
    width: 100%;
    height: 100%;
}
.nr{
    margin-top: 150px;
}
.nr p{
    display: flex;
    justify-content: center;
    margin-top: 20px;
    font-size: 25px;
}

</style>