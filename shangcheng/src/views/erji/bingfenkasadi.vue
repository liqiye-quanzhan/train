<template>
    <div class="bingfenkasadi">
        <div class="top">
            <p>缤纷卡萨帝</p>
            <a href="#">查看全部</a>
        </div>
        <hr>
        <div class="boom">
            <div class="jiantouzuo" @click="goLeft()">
                &lt;
            </div>
            <div class="huodongnr">
            <div class="yizu" id="yiyi" v-show="n==0">                
                <div class="neirong" v-for="item in huodongyi" :key="item.id">
                    <img :src="item.url" alt="">
                    <a href="#">{{item.a}}</a>
                    <div class="gw"><img src="../../assets/img/gwlogo.png" alt=""><p>{{item.p}}</p></div>
                </div>                          
            </div> 
            <div class="yizu" id="erer" v-show="n==1">                
                <div class="neirong" v-for="item in huodonger" :key="item.id">
                    <img :src="item.url" alt="">
                    <a href="#">{{item.a}}</a>
                    <div class="gw"><img src="../../assets/img/gwlogo.png" alt=""><p>{{item.p}}</p></div>
                </div>                          
            </div> 
            </div>
                <div class="jiantouyou" @click="goRight()">
                  &gt;
                </div>           
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            huodongyi:[
                {
                    id:1,
                    url:require('../../assets/img/weibu.webp'),
                    a:"卡萨帝思享荟精致艺术体验会",
                    p:"卡萨帝官网",
            },
            {
                    id:2,
                    url:require('../../assets/img/weibu.webp'),
                    a:"卡萨帝黑标行动时尚发布会",
                    p:"卡萨帝官网",
            },
            {
                    id:3,
                    url:require('../../assets/img/weibu.webp'),
                    a:"你好生活家",
                    p:"卡萨帝官网",
            },
            {
                    id:4,
                    url:require('../../assets/img/weibu.webp'),
                    a:"卡萨帝生活艺术超级发布会",
                    p:"卡萨帝官网",
            },
            ],
            huodonger:[
                {
                    id:1,
                    url:require('../../assets/img/tansuo1.webp'),
                    a:"卡萨帝思享荟精致艺术体验会",
                    p:"卡萨帝官网",
            },
            {
                    id:2,
                    url:require('../../assets/img/tansuo2.webp'),
                    a:"卡萨帝黑标行动时尚发布会",
                    p:"卡萨帝官网",
            },
            {
                    id:3,
                    url:require('../../assets/img/tansuo3.webp'),
                    a:"你好生活家",
                    p:"卡萨帝官网",
            },
            {
                    id:4,
                    url:require('../../assets/img/tansuo4.webp'),
                    a:"卡萨帝生活艺术超级发布会",
                    p:"卡萨帝官网",
            },
            ],
            n:0,
            m:2,
        }
    },
    methods: {
        // go(){//定时器,n自动改变
        // setInterval(() =>{
        //     if(n == 0){
        //     this.n++;                
        //     }          
        // },5000)
        // },

        goLeft(){
            if(this.n == 1){
                this.n--;
            }else{
                return;
            }
        },
        goRight(){
            if(this.n == 0){
                this.n++;
                console.log(this.n);
            }else{
                return;
            }
        }
    },
    mounted() {//定义在进入页面之后自动运行
        // this.go()
    },
    
}
</script>



<style scoped>
.bingfenkasadi{
    width: 70%;
    height: 300px;
    margin-left: 15%;
}
.top{
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}
.top p{
    font-size: 25px;
    color: #333333;
}
.top a{
    text-decoration: none;
    color: #666666;
}
.boom{
    width: 100%;
    height: 250px;
    display: flex;
}
.huodongnr{
    width: 100%;
    display: flex;
    position: relative;
}
.yizu{
    width: 100%;
    height: 100%;
    display: flex;
    position: absolute;
}
.neirong{
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    margin-left: 20px;
}
.neirong img{
    width: 90%;
    height: 50%;
}
.neirong a{
    margin-top: 15px;
    font-size: 13px;
    text-decoration: none;
    color: #333333;
}
.gw{
    display: flex;
    align-items: center;
    margin-top: 25px;
}
.gw img{
    width: 20px;
    height: 20px;
}
.gw p{
    margin-left: 10px;
    font-size: 10px;
    color: #666666;
}
.jiantouzuo,.jiantouyou{
        width: 30px;
        height: 20px;
        font-size: 50px;
        padding: 20px 0;
        margin: 0 10px;
        font-family: "宋体";
        color: #666666;
        display: flex;
        align-items: center;
        margin-top: 40px;
}
.jiantouzuo:hover,.jiantouyou:hover{
        background: #333333;
        cursor: pointer;
}
</style>
