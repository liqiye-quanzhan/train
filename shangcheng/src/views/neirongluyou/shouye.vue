<template>
  <div class="shouye">
    <Zoumadeng></Zoumadeng>
    <Kasadifuwu></Kasadifuwu>
    <Kasadiyangban></Kasadiyangban>
    <Bingfenkasadi></Bingfenkasadi>  
  </div>
</template>

<script>
import Zoumadeng from "../erji/zoumadeng"
import Kasadifuwu from "../erji/kasadifuwu"
import Kasadiyangban from "../erji/kasadiyangban"
import Bingfenkasadi from "../erji/bingfenkasadi"

export default {
  components:{
    Zoumadeng,
    Kasadifuwu,
    Kasadiyangban,
    Bingfenkasadi,
  },
  data() {
    return {
      
    }
  },
}
</script>

<style scoped>
.shouye{
  width: 100%;
}
</style>
