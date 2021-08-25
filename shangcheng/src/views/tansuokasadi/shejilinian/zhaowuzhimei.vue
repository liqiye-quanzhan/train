<template>
    <div class="zhaowuzhimei">
          <img :src="zhaowu.url" alt="">
          <div class="neirong">
              <p>{{zhaowu.p3}}</p>
              <a>{{zhaowu.a}}</a>
          </div>
          <h5><a>V</a><a>V</a><a>V</a><a>V</a></h5>
          <p>{{zhaowu.p1}}</p>
          <p style="margin-bottom: 30px;">{{zhaowu.p2}}</p>  
    </div>
</template>

<script>
export default {
    data() {
        return {
            zhaowu:{
                 url:require('../../../assets/img/shejilinian/zaowuzhimei.webp'),
                 p1:"卡萨帝在全球拥有14个设计中心、28个合作研发机构(如麻省理工等)",
                 p2:"有着由许多在业界享有盛名的设计师所带领的跨越多个国家的300多位设计师团队(意大利、英国、德国、法国、美国、日本、中国等12个国家)",
                 p3:"造物之美，唯有匠心",
                 a:"Beauty of crealion, only ingenuily",
            },
        }
    },
    
}
</script>

<style scoped>
.zhaowuzhimei{
    width: 99.8%;
    height: 0px;
    position: relative;
}
.zhaowuzhimei img{
    width: 100%;
    margin-bottom: 20px;
}
.neirong{
    position: absolute;
    top:30%;
    left: 35%;
}
.zhaowuzhimei .neirong p{
    color: white;
    font-size: 50px;
    margin-top: 50%;
    margin-bottom: 10px;
}
.zhaowuzhimei .neirong a{
    color: white;
    margin-left: 20%;
    font-family: "宋体";
}
.zhaowuzhimei h5{
    position: absolute;
    margin-left: 50%;
    margin-top: -8%;
    display: flex;
    flex-direction: column;
}
.zhaowuzhimei h5 a{
    color: #999999;
    height: 15px;
}
.zhaowuzhimei h5:hover{
    cursor: pointer;
}
.zhaowuzhimei p{
    text-align: center;
    color: #666666;
    font-size: 12px;
    margin-top: 5px;
}

</style>