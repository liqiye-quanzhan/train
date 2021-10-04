<template>
<div>
  <div class="daohanglan">
    <div class="zuo">
        <li class="li" id="tansuoksd">探索卡萨帝</li>        
        <li class="li" id="chanp">产品</li>
        <li class="li" id="huodong">活动</li>
        <li class="li" id="goum">购买</li>
        <img src="../../assets/logo.png" alt="logo" @click="gohome()">
        <li class="li" id="fuw">服务</li>
        <li class="li" id="huiyuanjlb">会员俱乐部</li>
        <div class="yinying" :style="{height:heighth + 'px'}"></div>
        <ul class="tansuokasadi">
              <div class="tansuoneirong">
                <li class="tansuo" v-for="tansuoi in tansuokasadisum" :key="tansuoi.id">
                  <img :src="tansuoi.url" alt="" @click="tansuogo(tansuoi.id)">
                  <p>{{tansuoi.p}}</p>
                  </li>   
              </div>                 
            </ul>            
            <ul class="fuwu">
              <div class="fuwunr">
                <li class="fw" v-for="fuwui in fuwusum" :key="fuwui.id">
                  <img :src="fuwui.url" alt="">
                  <p>{{fuwui.p}}</p>
                  </li>   
              </div>                 
            </ul>  
            <ul class="goumai">
              <div class="goumainr">
                <li class="gm" v-for="goumaii in goumaisum" :key="goumaii.id">
                  <img :src="goumaii.url" alt="" @click="gotiyandian()">
                  <p>{{goumaii.p}}</p>
                  </li>   
              </div>                 
            </ul>  
            <ul class="huiyuan">
              <div class="huiyuannr">
                <li class="hy" v-for="huiyuani in huiyuansum" :key="huiyuani.id">
                  <img :src="huiyuani.url" alt="">
                  <p>{{huiyuani.p}}</p>
                  </li>   
              </div>                 
            </ul>  
            <ul class="chanpin">
              <div class="chanpinnr">
                <div class="jiantouzuo" @click="goLeft()">
                &lt;
            </div>
            <div class="huodongnr">
            <div class="yizu" id="yiyi" v-show="n==0">                
                <div class="neirong" v-for="item in huodongyi" :key="item.id" @click="chanpingo(item.id)">
                    <img :src="item.url" alt="">
                    <a href="#">{{item.a}}</a>
                </div>                          
            </div> 
            <div class="yizu" id="erer" v-show="n==1">                
                <div class="neirong" v-for="item in huodonger" :key="item.id">
                    <img :src="item.url" alt="">
                    <a>{{item.a}}</a>                   
                </div>                          
            </div> 
            </div>
                <div class="jiantouyou" @click="goRight()">
                  &gt;
                </div>  
              </div>                 
            </ul>  
        <div class="yinyinger" :style="{height:heighth + 'px'}"></div>
            
    </div>
    <div class="you">
      <i class="el-icon-search"></i>
      <i class="el-icon-s-custom" @click="dialogFormVisible = true"></i>
      <!-- <p><a @click="godenglu()">登录/</a><a @click="gozhuce()">注册</a></p> -->
      <p><a @click="godenglu()">{{dlzc}}</a></p>
    </div>
  </div>
  <el-dialog title="个人信息" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="名称:" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="手机号:" :label-width="formLabelWidth">
          <el-input v-model="form.mobileno" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别:" :label-width="formLabelWidth">
          <el-radio-group v-model="form.sex">
            <el-radio label="1">男</el-radio>
            <el-radio label="0">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="生日:" :label-width="formLabelWidth">
            <el-date-picker
              v-model="form.birthday"
              type="date"
              format="yyyy-MM-dd"
              value-format="timestamp"
              placeholder="选择日期">
            </el-date-picker>
        </el-form-item>
        <el-form-item label="地址:" :label-width="formLabelWidth">
          <el-input v-model="form.address" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="余额:" :label-width="formLabelWidth">
          <p>{{form.money}}</p>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="ok">确 定</el-button>
      </div>
    </el-dialog>
</div>
  
</template>

<script src="https://ajax.aspnetcdn.com/ajax/jquery/jquery-3.4.1.min.js"></script>
<script>
import axios from 'axios'
export default {
    data() { 
        return {   
          tansuokasadisum:[
            {
              id:1,
              url:require('../../assets/img/tansuo1.webp'),
              p:"了解品牌>",
            }, {
              id:2,
              url:require('../../assets/img/tansuo2.webp'),
              p:"设计理念>",
            },
             {
              id:3,
              url:require('../../assets/img/tansuo3.webp'),
              p:"发展历程>",
            },
             {
              id:4,
              url:require('../../assets/img/tansuo4.webp'),
              p:"新闻资讯>",
            }
          ],
          fuwusum:[
            {
              id:1,
              url:require('../../assets/img/fuwu1.webp'),
              p:"在线报修>",
            }, {
              id:2,
              url:require('../../assets/img/fuwu2.webp'),
              p:"预约安装>",
            },
             {
              id:3,
              url:require('../../assets/img/fuwu3.webp'),
              p:"使用手册下载>",
            }
          ],
          goumaisum:[
            {
              id:1,
              url:require('../../assets/img/goumai.webp'),
              p:"体验店>",
            }
          ],
          huiyuansum:[
            {
              id:1,
              url:require('../../assets/img/huiyuan1.webp'),
              p:"会员认证>",
            },
            {
              id:2,
              url:require('../../assets/img/huiyuan2.webp'),
              p:"权益商城>",
            },
            {
              id:3,
              url:require('../../assets/img/huiyuan3.webp'),
              p:"晒单代言>",
            },
            {
              id:4,
              url:require('../../assets/img/huiyuan4.webp'),
              p:"私享互动>",
            },
          ],
          huodongyi:[
                {
                    id:1,
                    url:require('../../assets/img/zhinengjiadian.png'),
                    a:"智能家电"                   
            },
            {
                    id:2,
                    url:require('../../assets/img/muyingjiadian.png'),
                    a:"母婴家电"                 
            },
            {
                    id:3,
                    url:require('../../assets/img/bingxiang.png'),
                    a:"冰箱"                  
            },
            {
                    id:4,
                    url:require('../../assets/img/xiyiji.png'),
                    a:"洗衣机"                
            },
            {
                    id:5,
                    url:require('../../assets/img/kongtiao.png'),
                    a:"空调"              
            },
            {
                    id:6,
                    url:require('../../assets/img/lenggui.png'),
                    a:"冷柜"                   
            },
            {
                    id:7,
                    url:require('../../assets/img/bingba.png'),
                    a:"冰吧"                
            },
            {
                    id:8,
                    url:require('../../assets/img/jiugui.png'),
                    a:"酒柜"                 
            },
            {
                    id:9,
                    url:require('../../assets/img/chufangdianqi.png'),
                    a:"厨房电器"               
            },
            {
                    id:10,
                    url:require('../../assets/img/reshuiqi.png'),
                    a:"热水器"               
            },
            ],
          huodonger:[
            {
                    id:1,
                    url:require('../../assets/img/dianshi.png'),
                    a:"电视"               
            },
            {
                    id:2,
                    url:require('../../assets/img/zhinengjiadian.png'),
                    a:"生活家电"               
            },
            {
                    id:3,
                    url:require('../../assets/img/shuiba.png'),
                    a:"水吧"               
            },
            {
                    id:4,
                    url:require('../../assets/img/zhinengjiajv.png'),
                    a:"智能家居"               
            },
            {
                    id:5,
                    url:require('../../assets/img/zhinengmensuo.png'),
                    a:"智能门锁"               
            },
          ],
            n:0,
            m:2,
            heighth:0,
            dlzc:"登录/注册",
            dialogFormVisible: false,
            id:'',
            form: {},
            formLabelWidth: '120px',
        }
    },
    mounted() {
      this.heighth = document.documentElement.clientHeight -281;
      this.usershow()
    },
    beforeMount() {
      if(sessionStorage.getItem('username')){
        this.dlzc = sessionStorage.getItem('username');       
      }
    },
    methods: {
      godenglu(){
        if(sessionStorage.getItem('username')){
          this.form = {}
          this.$router.push('/login')
        }else{
          this.$router.push('/login');
        }
      }, 
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
        },
        tansuogo(tansuoj){
          if(tansuoj == 1){
            this.$router.push('/liaojiepinpai')
          }
          if(tansuoj == 2){
            this.$router.push('/shejilinian')
          }
          if(tansuoj == 4){
            this.$router.push('/xinwenzixun')
          }
        },
        chanpingo(chanpinid){
          if(chanpinid == 1){
            this.$router.push('/zhinengjiadian')
          }
        },
        gotiyandian(){
          this.$router.push('/tiyandian')
        },
        gohome(){
          this.$router.push('/home')
        },
        usershow(){
          this.id = sessionStorage.getItem("username")
          const that = this
          axios({
              method:'post',
              url:`http://192.168.31.130:8080/userInfoController/selectUser?id=${that.id}`,
            }).then(function(res){
               that.form = res.data.rs    
               that.form.sex = String(that.form.sex)     
            }) 
        },
        ok(){
          const that = this
          console.log(this.form);
          axios({
              method:'post',
              url:`http://192.168.31.130:8080/userInfoController/updateUser?id=${that.id}&name=${that.form.name}&mobileno=${that.form.mobileno}&sex=${that.form.sex}&birthday=${that.form.birthday}&address=${that.form.address}`,
            }).then(function(res){
               console.log(res); 
               that.dialogFormVisible = false  
            }) 
        },
    },
}
</script>

<style scoped>
.daohanglan{
    width: 100%;
    height: 80px;
    display: flex;
}
.zuo{
  display: flex;
  list-style:none;
  width: 70%;
  height: 100%;
  justify-content:space-around ;
  margin-left: 150px;
}
.li{
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  transition: 0.8s;
}
.li:hover{
   background: #80429F;
   cursor: pointer;
}
.you{
  display: flex;
  justify-content: flex-start;
  align-items:center;
  margin-left: 20px;
}
.you i{
  font-size: 25px;
  margin-left: 15px;
}
.you p{
  margin-left: 25px;
}
.you p a{
  color: #8A6F3A;
  text-decoration: none;
}
.you p a:hover{
  cursor: pointer;
}
.tansuokasadi,.huiyuan{
  list-style: none;
  background: white;
  margin-left: 145px;
  width: 97.5%;
  line-height: 50px;
  z-index: 3;
  position: absolute;
  top: -280px;
  display: flex;
}
#tansuoksd:hover ~ .tansuokasadi,.tansuokasadi:hover,#huiyuanjlb:hover ~ .huiyuan,.huiyuan:hover{
  top:80px;
}
.tansuoneirong,.huiyuannr{
  width: 80%;
  height: 200px;
  margin-left: 10%;
  display: flex;
  justify-content: space-between;
}
.tansuo,.hy{
  width: 20%;
  margin-left: 5%;
  position: relative;
}
.tansuo img,.hy img{
  width: 100%;
  height: 60%;
  margin-top: 20%;
}
.tansuo:hover,.hy:hover{
  cursor: pointer;
}
.tansuo p,.hy p{
  position: absolute;
  top: 64%;
  left: 2%;
  color: white;
  font-size: 12px;
}

.fuwu,.goumai{
  list-style: none;
  background: white;
  margin-left: 145px;
  width: 97.5%;
  line-height: 50px;
  z-index: 3;
  position: absolute;
  top: -280px;
  display: flex;
}
#fuw:hover ~ .fuwu,.fuwu:hover,#goum:hover ~ .goumai,.goumai:hover{
  top:80px;
}

.fuwunr,.goumainr{
  width: 80%;
  height: 200px;
  margin-left: 10%;
  display: flex;
}
.fw,.gm{
  width: 20%;
  margin-left: 5%;
  position: relative;
}
.fw img,.gm img{
  width: 100%;
  height: 60%;
  margin-top: 20%;
}
.fw:hover,.gm:hover{
cursor: pointer;
}
.fw p,.gm p{
  position: absolute;
  top: 64%;
  left: 2%;
  color: white;
  font-size: 12px;
}
.chanpin{
  list-style: none;
  background: white;
  margin-left: 145px;
  width: 97.5%;
  line-height: 50px;
  z-index: 3;
  position: absolute;
  top: -280px;
  display: flex;
}
#chanp:hover ~ .chanpin,.chanpin:hover{
  top:80px;
}
.chanpinnr{
  width: 80%;
  height: 200px;
  margin-left: 10%;
  display: flex;
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
        margin-top: 4%;
}
.jiantouzuo:hover,.jiantouyou:hover{
        background: #333333;
        cursor: pointer;       
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
    margin-top: 2%;
}
.neirong{
    width: 7%;
    height: 60%;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    margin-left: 2.8%;
}
.neirong:hover{
    cursor: pointer;
}
.neirong img{
    width: 100%;
    height: 100%;
}
.neirong a{
    font-size: 10px;
    text-decoration: none;
    color: #333333;
    text-align: center;
}
.neirong a:hover{
  color: #80429F;
}
.el-icon-search:hover,.el-icon-s-custom:hover{
cursor: pointer;
}
.el-icon-s-custom,.el-icon-search{
  color: #8A6F3A;
}
.yinying{
  position: absolute;
  width: 100%;
  background:black;
  opacity: 0.6;
  margin-left: 106px;
  margin-top: -580px;
}
.yinyinger{
  position: absolute;
  width: 100%;
  background:black;
  opacity: 0.6;
  margin-left: 106px;
  margin-top: -580px;
}
.li:hover ~ .yinying{
  top: 860px;
}
.zuo ul:hover ~ .yinyinger{
  top: 860px;
}
#huodong:hover ~ .yinying{
  top: -580px;
}
</style>>


