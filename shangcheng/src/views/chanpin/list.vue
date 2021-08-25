<template>
    <div class="list">
        <div class="mulu">
            <p>{{mulu.p1}}</p>
            <p>{{mulu.p2}}</p>
            <p @click="sortchanpins()">{{mulu.p3}}{{mulu.jiantou}}</p>
        </div>
        <div class="chanpinsum">
            <div class="chanpin" v-for="items in chanpins" :key="items.id">
            <p class="pp1">{{items.pyi}}</p>
            <p class="pp2">{{items.per}}</p>
            <p class="pp3">{{items.psan}}</p>
            <img :src="items.url" alt="">
            <p class="pp4">￥{{items.psi}}</p>
            <div class="caozuo">
            <p class="pp5">{{items.pwu}}</p>
            <p class="pp6" @click="goduibi(items.id)">{{items.pliu}}</p>
            </div> 
            </div>
        </div>
        <div class="gouwuche" v-show="duibim != '' && zongjine != 0" :style="{top:gouwucheh + 'px'}">
            <div class="duibi">
                <p>产品对比</p>
                <p @click="yincang()">{{yincangp}}</p>
            </div>
            <div class="chanpinduibi">
                <div class="liebiao" v-for="liebiaos in chanpins" :key="liebiaos.id" v-show="liebiaos.pliu == duibim">
                    <img :src="liebiaos.url" alt="">
                    <div class="liebiaop">
                    <p>{{liebiaos.psan}}</p>
                    <p>{{liebiaos.per}}</p>
                    <p>￥{{liebiaos.psi}}</p>   
                    </div>                   
                    <p class="liebiaox" @click="duibix(liebiaos.id)">X</p>
                </div>
                <div class="liebiaoduibi">
                    <p>总金额：{{zongjine}}</p>
                    <p class="p1">对比</p>
                    <p @click="qingkong()">清空对比栏</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            mulu:{
                p1:"上市时间",
                p2:"人气",
                p3:"价格",
                jiantou:""
            },
            chanpins:[
                {
                    id:1,
                    pyi:"633升嵌入式多门冰箱",
                    per:"BCD-633WIGWUI",
                    psan:"指挥家1",
                    psi:37999,
                    pwu:"收藏",
                    pliu:"+加入对比",
                    url:require("../../assets/img/chanpin/zhihuijia.png")
                },
                {
                    id:2,
                    pyi:"633升嵌入式多门冰箱",
                    per:"BCD-633WIGWUI",
                    psan:"指挥家2",
                    psi:27999,
                    pwu:"收藏",
                    pliu:"+加入对比",
                    url:require("../../assets/img/chanpin/zhihuijia.png")
                },
                {
                    id:3,
                    pyi:"633升嵌入式多门冰箱",
                    per:"BCD-633WIGWUI",
                    psan:"指挥家3",
                    psi:67999,
                    pwu:"收藏",
                    pliu:"+加入对比",
                    url:require("../../assets/img/chanpin/zhihuijia.png")
                },
                {
                    id:4,
                    pyi:"633升嵌入式多门冰箱",
                    per:"BCD-633WIGWUI",
                    psan:"指挥家4",
                    psi:17999,
                    pwu:"收藏",
                    pliu:"+加入对比",
                    url:require("../../assets/img/chanpin/zhihuijia.png")
                },
                {
                    id:5,
                    pyi:"633升嵌入式多门冰箱",
                    per:"BCD-633WIGWUI",
                    psan:"指挥家5",
                    psi:57999,
                    pwu:"收藏",
                    pliu:"+加入对比",
                    url:require("../../assets/img/chanpin/zhihuijia.png")
                },
                {
                    id:6,
                    pyi:"633升嵌入式多门冰箱",
                    per:"BCD-633WIGWUI",
                    psan:"指挥家6",
                    psi:47999,
                    pwu:"收藏",
                    pliu:"+加入对比",
                    url:require("../../assets/img/chanpin/zhihuijia.png")
                },
                {
                    id:7,
                    pyi:"633升嵌入式多门冰箱",
                    per:"BCD-633WIGWUI",
                    psan:"指挥家7",
                    psi:77999,
                    pwu:"收藏",
                    pliu:"+加入对比",
                    url:require("../../assets/img/chanpin/zhihuijia.png")
                },
            ],
            duibim:'',
            gouwucheh:600,
            yincangp:"隐藏",
            sx:0,
            zongjine:0,
        }
    },
    methods: {
        sortByKey(array,key){
            return array.sort(function(a,b){
                var x = a[key];
                var y = b[key];
                return((x<y)?-1:((x>y)?1:0));
            })
        },
        ByKey(array,key){
            return array.sort(function(a,b){
                var x = a[key];
                var y = b[key];
                return((x>y)?-1:((x<y)?1:0));
            })
        },
        goduibi(i){
            for(var l = 1;l<=this.chanpins.length;l++){
                if(this.chanpins[l-1].id == i){
                    if(this.chanpins[l-1].pliu == "+加入对比"){
                this.duibim = this.chanpins[l-1].pliu = "X";
                this.zongjine += this.chanpins[l-1].psi;
            }else{
                this.chanpins[l-1].pliu = "+加入对比"; 
                this.zongjine -= this.chanpins[l-1].psi;             
            };
                }
            }
          
        },
        yincang(){
            
            if(this.gouwucheh == 600){
               this.gouwucheh = 720;
               this.yincangp = "展开"; 
               
            }else{
                this.gouwucheh = 600;
                this.yincangp = "隐藏";
            }
            
        },
        sortchanpins(){
            if(this.sx==0){
                this.sx++;
                this.mulu.jiantou="👆";
             return this.sortByKey(this.chanpins,"psi"); 
               
            }
            if(this.sx==1){
                this.sx--;
                this.mulu.jiantou="👇";
               return this.ByKey(this.chanpins,"psi"); 
               
            }
            
        },
        duibix(j){
            for(var l = 1;l<=this.chanpins.length;l++){
                if(this.chanpins[l-1].id == j){
                    this.chanpins[l-1].pliu = "+加入对比";
                    this.zongjine -= this.chanpins[l-1].psi;
                }
            }
        },
        qingkong(){
            for(var j=1;j<=this.chanpins.length;j++){
                this.chanpins[j-1].pliu = "+加入对比";
            }
            this.duibim = '';
        },
    },
    
}
</script>

<style scoped>
.list{
    width: 100%;
    margin-top: 100px;
    border-top: 2px solid #eeeeee;
}
.mulu{
    width: 80%;
    margin-left: 10%;
    display: flex;
    margin-top: 50px;
    margin-bottom: 40px;
}
.mulu p{
    color: #999999;
    margin-left: 30px;
}
.mulu p:hover{
    cursor: pointer;
    color: #A88747;
}
.chanpinsum{
    width: 80%;
    margin-left: 10%;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 150px;
}
.chanpin{
    width: 20%;
    margin-left: 4%;
    border: 1px solid #999999;
    margin-bottom: 30px;
}
.chanpin:hover{
    border: 1px solid #A88747;
}
.chanpin img{
    width: 34%;
    margin-left: 33%;
    margin-top: 10px;
}
.pp1,.pp2,.pp3,.pp4{
    text-align: center;
}
.pp1{
    color: #222222;
    margin-top: 30px;
    font-size: 16px;
}
.pp2{
    color: #999999;
    font-size: 10px;
    margin-top: 5px;
}
.pp3{
    margin-top: 15px;
    font-size: 14px;
}
.pp4{
    margin-top: 15px;
    color: #A88747;
    font-size: 18px;
    font-family: "宋体";
}
.caozuo{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    height: 50px;
    border-top: 1px solid #eeeeee;
}
.caozuo p{
    width: 50%;
    height: 100%;
    display: flex;
    justify-content:center;
    align-items: center;
    color: #666666;
    font-size: 14px;
}
.caozuo p:hover{
    cursor: pointer;
    color: #A88747;
}
.gouwuche{
    width: 100%;
    height: 150px;
    border-top: 1px solid #333333;
    position: fixed;
    background: white;
}
.duibi{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 94%;
    height: 30px;
    margin-left: 3%;
    border-bottom: 1px solid #666666;
}
.duibi p{
    font-size: 12px;
}
.duibi p:hover{
    cursor: pointer;
    color: #A88747;
}
.chanpinduibi{
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: space-between;
}
.liebiao{
    width: 13%;
    height: 100%;
    display: flex;
    flex-direction:row;
}
.liebiao img:hover{
    cursor: pointer;
}
.liebiao img{
    width: 20%;
    height: 70%;
    margin-left: 10px;
    display: flex;
    align-items: center;
    margin-top: 10%;
}
.liebiaop{
    margin-top: 15%;
    margin-left: 10px;
}
.liebiaop p{
    color: #A88747;
    font-size: 12px;
    margin-top: 5px;
}
.liebiaox{
    font-size: 12px;
    margin-left: 12%;
}
.liebiaox:hover{
    cursor: pointer;
}
.liebiaoduibi{
    margin-top: 10px;
    margin-right: 40px;
}
.liebiaoduibi p{
    margin-top: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    color: #666666;
    font-size: 12px;
    margin-left: 30px;
}
.liebiaoduibi p:hover{
    cursor: pointer;
}
.liebiaoduibi .p1{
    background: #A88747;
    color: white;
}
.liebiaoduibi .p1:hover{
    background: #9A7326;
}

</style>