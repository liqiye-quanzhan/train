<template>
    <div class="xinwen">
        <div class="neirong" v-for="item in neirong.slice(n, m)" :key="item.id">
            <img :src="item.src" alt="">
            <div class="jieshao">
                <a href="">{{item.a}}</a>
                <p class="p1">{{item.p1}}</p>
                <p class="p2">{{item.p2}}</p>
                <i class="el-icon-sort-down"></i>
            </div>
        </div>
        <button class="anniu" @click="shangyiye()">《</button>
        <button class="anniu"  @click="huanye()">》</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            neirong:[
                {
                    id:1,
                    src:require("../../../assets/img/xinwenzixun/neirong1.webp"),
                    a:"明天!卡萨帝思享荟联合大商启动生态品牌联盟，落地场景方案",
                    p1:"你期待的高端家居生活是什么样的?可以用手机操控?能进行语音交互?还是具有品质的视觉享受?实际上，高端家电品牌目前所能达到的可远不止如此。",
                    p2:"2021.04.15",
                },
                {
                    id:2,
                    src:require("../../../assets/img/xinwenzixun/neirong2.webp"),
                    a:"未来智能家居的赛场不止在“家”里",
                    p1:"当你走到智能门禁前，“扫脸”后屋门自动打开，全屋灯光自动亮起、窗帘打开、音乐响起，通过屏幕可随时查看其他家人所在位置，食物用完后只需扫描包装条形码，冰箱就会自动将在网上下单补给商品......",
                    p2:"2021.04.15",
                },
                {
                    id:3,
                    src:require("../../../assets/img/xinwenzixun/neirong3.webp"),
                    a:"明天!卡萨帝思享荟联合大商启动生态品牌联盟，落地场景方案",
                    p1:"你期待的高端家居生活是什么样的?可以用手机操控?能进行语音交互?还是具有品质的视觉享受?实际上，高端家电品牌目前所能达到的可远不止如此。",
                    p2:"2021.04.15",
                },
                {
                    id:4,
                    src:require("../../../assets/img/xinwenzixun/neirong4.webp"),
                    a:"明天!卡萨帝思享荟联合大商启动生态品牌联盟，落地场景方案",
                    p1:"你期待的高端家居生活是什么样的?可以用手机操控?能进行语音交互?还是具有品质的视觉享受?实际上，高端家电品牌目前所能达到的可远不止如此。",
                    p2:"2021.04.15",
                },
                {
                    id:5,
                    src:require("../../../assets/img/xinwenzixun/neirong5.webp"),
                    a:"明天!卡萨帝思享荟联合大商启动生态品牌联盟，落地场景方案",
                    p1:"你期待的高端家居生活是什么样的?可以用手机操控?能进行语音交互?还是具有品质的视觉享受?实际上，高端家电品牌目前所能达到的可远不止如此。",
                    p2:"2021.04.15",
                },
                {
                    id:6,
                    src:require("../../../assets/img/xinwenzixun/neirong6.webp"),
                    a:"明天!卡萨帝思享荟联合大商启动生态品牌联盟，落地场景方案",
                    p1:"你期待的高端家居生活是什么样的?可以用手机操控?能进行语音交互?还是具有品质的视觉享受?实际上，高端家电品牌目前所能达到的可远不止如此。",
                    p2:"2021.04.15",
                },
                {
                    id:7,
                    src:require("../../../assets/img/xinwenzixun/neirong7.webp"),
                    a:"明天!卡萨帝思享荟联合大商启动生态品牌联盟，落地场景方案",
                    p1:"你期待的高端家居生活是什么样的?可以用手机操控?能进行语音交互?还是具有品质的视觉享受?实际上，高端家电品牌目前所能达到的可远不止如此。",
                    p2:"2021.04.15",
                },
                {
                    id:8,
                    src:require("../../../assets/img/xinwenzixun/neirong8.webp"),
                    a:"明天!卡萨帝思享荟联合大商启动生态品牌联盟，落地场景方案",
                    p1:"你期待的高端家居生活是什么样的?可以用手机操控?能进行语音交互?还是具有品质的视觉享受?实际上，高端家电品牌目前所能达到的可远不止如此。",
                    p2:"2021.04.15",
                },
                {
                    id:9,
                    src:require("../../../assets/img/xinwenzixun/neirong9.webp"),
                    a:"明天!卡萨帝思享荟联合大商启动生态品牌联盟，落地场景方案",
                    p1:"你期待的高端家居生活是什么样的?可以用手机操控?能进行语音交互?还是具有品质的视觉享受?实际上，高端家电品牌目前所能达到的可远不止如此。",
                    p2:"2021.04.15",
                },
                {
                    id:10,
                    src:require("../../../assets/img/xinwenzixun/neirong10.webp"),
                    a:"明天!卡萨帝思享荟联合大商启动生态品牌联盟，落地场景方案",
                    p1:"你期待的高端家居生活是什么样的?可以用手机操控?能进行语音交互?还是具有品质的视觉享受?实际上，高端家电品牌目前所能达到的可远不止如此。",
                    p2:"2021.04.15",
                },
            ],
            n:0,
            m:5,
            i:0,
        }
    },
    mounted() {
　　// 此处true需要加上，不加滚动事件可能绑定不成功
    window.addEventListener("scroll", this.handleScroll, true);
    },
    methods: {
        handleScroll() {
                   let scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
                   scrolltop > 30 ? (this.gotop = true) : (this.gotop = false);
        },
        huanye(){
            if(this.m<this.neirong.length){
                this.i = this.m-this.n;
                this.n = this.m;
                this.m = this.n + this.i;
            let top = document.body.scrollTop = document.documentElement.scrollTop;
            //实现滚动效果
            const timeTop = setInterval(() => {
            document.body.scrollTop = document.documentElement.scrollTop = top -= 10 ;
                    if (top <= 240) {
                        clearInterval(timeTop);
                    }
            }, 0.05);
            }
            else{
                return;
            }
        },
        shangyiye(){
             if(this.n>=1){
                this.i = this.m-this.n;
                this.m = this.n;
                this.n = this.m - this.i;
             let top = document.body.scrollTop = document.documentElement.scrollTop;
            //实现滚动效果
            const timeTop = setInterval(() => {
            document.body.scrollTop = document.documentElement.scrollTop = top -= 10 ;
                    if (top <= 240) {
                        clearInterval(timeTop);
                    }
            }, 0.5);
            }
            else{
                return;
            }
        }
    },
}
</script>

<style scoped>
.xinwen{
    width: 70%;
    margin-left: 15%;
    margin-top: 60px;
}
.neirong{
    width: 100%;
    height: 300px;
    margin-top: 30px;
    display: flex;
    border-bottom: 1px solid #EEEEEE;
}
.neirong:hover{
    border-bottom: 1px solid #A88747;
    transition-duration:2s;
}
.neirong img{
    width: 40%;
    height: 85%;
}
.neirong img:hover{
    cursor: pointer;
}
.jieshao{
    width: 52%;
    height: 85%;
    margin-left: 3%;
}
.neirong:hover .el-icon-sort-down{
    opacity: 1;
    transition-duration: 1s;
    cursor: pointer;
}
.jieshao a{
    color: #333333;
    text-decoration: none;
    font-size: 25px;
    width: 10%;
    height: 30px;
}
.jieshao .p1{
    color: #999999;
    font-size: 12px;
    margin-top: 10px;
    letter-spacing: 0.5px;
}
.jieshao a:hover{
    cursor: pointer;
    color: #A88747;
}
.jieshao .p2{
    color: #666666;
    font-size: 14px;
    margin-top: 15px;
}
.jieshao i{
    margin-left: 95%;
    margin-top: 20%;
    transform:rotate(270deg);
    font-size: 30px;
    opacity: 0;
    color: #A88747;
}
.anniu{
    width: 45px;
    height: 45px;
    border: 1px solid #EEEEEE;
    outline: none;
    background: white;
    margin-top: 50px;
    margin-bottom: 50px;
    color: #666666;
}
.anniu:hover{
    cursor: pointer;
    background: black;
    color: white;
}

</style>