<template>
    <div class="jieshaopinpai">
        <Jieshaoshipin></Jieshaoshipin>
        <Ljppzoumadeng></Ljppzoumadeng>       
        <Yanyigengduojingcai></Yanyigengduojingcai>
        <Tamendegushi></Tamendegushi>
    </div>
</template>

<script>
import Jieshaoshipin from "./jieshaoshipin"
import Ljppzoumadeng from "./ljppzoumadeng"
import Tamendegushi from "./tamendegushi"
import Yanyigengduojingcai from "./yanyigengduojingcai"
export default {
    components:{
        Jieshaoshipin,
        Ljppzoumadeng,
        Tamendegushi,
        Yanyigengduojingcai,
    },
    data() {
        return {
            
        }
    },
}
</script>

<style scoped>
.jieshaopinpai{
    width: 100%;
}

</style>