<template>
  <div class="home">
    <div class="zuobian">
    <Daohanglan></Daohanglan>
    <router-view />
    <Foot></Foot>
    </div>
    <div class="youbian">
      <Youbiandaohang></Youbiandaohang>
    </div>
    
  </div>
</template>

<script>
import Daohanglan from "../views/erji/daohanglan"
import Foot from "../views/erji/foot"
import Youbiandaohang from "./youbiandaohang"

export default {
  components:{
    Daohanglan,
    Foot,
    Youbiandaohang
  },
  data() {
    return {
      
    }
  },
}
</script>

<style scoped>
.home{
  width: 100%;
  display: flex;
}
.zuobian{
  width: 97.5%;
}
.youbian{
  width: 2.5%;
}

</style>