<template>
    <div class="youbiandaohang">
        <div class="toubu">
            <i class="el-icon-user" @click="gowdqy()"></i>
            <i class="el-icon-star-off" @click="gowdsc()"></i>
            <i class="el-icon-s-grid"></i>
            <i class="el-icon-edit" @click="gowenjuan()"></i>

               <ul class="wdquanyi">
                   <li class="quanyi">我的权益</li>                 
               </ul>
               <ul class="dengluzhuce" v-show="wdqy==1">
                <div class="topnr">
                <li @click="gozhuce()">账号登录</li>
                <li @click="godenglu()">用户注册</li>
                <li @click="tuichu()" class="tuichu">X</li>
                </div> 
                <div class="biaodan" v-show="n==0">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="账号" prop="name">
                <el-input v-model="ruleForm.name" placeholder='请输入账号'></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="powssd">
                <el-input type="password" v-model="ruleForm.powssd" placeholder='请输入密码'></el-input>
                </el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                </el-form>
                </div>
                <div class="zucebiaodan" v-show="n==1">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="账号" prop="name">
                <el-input v-model="ruleForm.name" placeholder='请输入账号'></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="powssd">
                <el-input type="password" v-model="ruleForm.powssd" autocomplete="off" placeholder='请输入密码' ></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass">
                <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" placeholder='请再次输入密码' ></el-input>
                </el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">立即注册</el-button>
                </el-form>
                </div>
               </ul>
               <ul class="wdshoucang">
                    <li class="shoucang">我的收藏</li>
               </ul>
               <ul class="ewm">
                    <li class="erweima">
                        <img src="../assets/img/erweima.png" alt="">
                    </li>
               </ul>
        </div>
        <div class="weibu" @click="TOP">
            <i class="el-icon-top"></i>
        </div>
        
    </div>
</template>

<script>
export default {
    data() {
         var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.powssd) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };

        return {
          ruleForm: {
          name: '',
          powssd:'',
          checkPass:'',
        },
        rules: {
          name: [
            { required: true, message: '请输入账号', trigger: 'blur' },
            { min: 3, max: 3, message: '长度在 3 个字符', trigger: 'blur' }
          ],
          powssd: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' },
            { validator: validatePass, trigger: 'blur' },
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
        },
        n:0,
        wdqy:0,
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
        TOP(){
             let top = document.body.scrollTop = document.documentElement.scrollTop;
            //实现滚动效果
            const timeTop = setInterval(() => {
            document.body.scrollTop = document.documentElement.scrollTop = top -= 10 ;
                    if (top <= 0) {
                        clearInterval(timeTop);
                    }
            }, 0.05);
        },
        gowenjuan(){
            this.$router.push('/yonghuwenjuan');
        },
        submitForm(formName) {
          let {name,powssd} = this.ruleForm;
        this.$refs[formName].validate((valid) => {
          if(name == 'aaa' && powssd == '1111'){
            //缓存
            sessionStorage.setItem('username',name);

            //跳转
            this.wdqy = 0;
            window.location.reload();
            
          }else{
            alert('用户名或密码不正确')
          }
        });
      },
      godenglu(){
          this.n = 1;
      },
      gozhuce(){
          this.n = 0;
      },
      gowdqy(){
      var name =  sessionStorage.getItem("username");
       if(name == null){
           this.wdqy = 1;
       }else{
           return;
       }         
      },
      gowdsc(){
          var name =  sessionStorage.getItem("username");
          if(name == null){
           this.wdqy = 1;
       }else{
           return;
       }    
      },
      tuichu(){
          this.wdqy = 0;
      }
    },
}
</script>

<style scoped>
.el-icon-user,.el-icon-star-off,.el-icon-s-grid,.el-icon-edit{
    color: #A88747;
    padding-left: 10px;
    padding-top: 5px;
    margin-top: 15px;
    width: 100%;
    height: 100%;
}
.el-icon-user:hover,.el-icon-star-off:hover,.el-icon-s-grid:hover,.el-icon-edit:hover{
    color: white;
}
.youbiandaohang{
    width: 100%;
    height: 650px;
    position: fixed;
}
.toubu {
    width: 100%;
    height: 93%;
    margin-top: 100px;
}
.toubu i{
    height: 25px;
    width: 100%;
    font-size: 20px;
}
.toubu i:hover{
    background: #A88747;
    cursor: pointer;
}
.weibu{
    width: 100%;
    height: 7%;
    background: #A88747;
}
.weibu:hover{
    cursor: pointer;
}
.weibu i{
    font-size: 35px;
    margin-top: 10px;
}
.wdquanyi{
    list-style: none;
    background: #A88747;
    margin-top: -165px;
    left: 3%;
    width: 80px;
    line-height: 30px;
    position: absolute;
    z-index: 4;
}
.quanyi,.shoucang{
    width: 100%;
    height: 100%;
    color: white;
    font-size: 12px;
    display: flex;
    justify-content: center;
}
.dengluzhuce{
    width: 400px;
    height: 400px;
    list-style: none;
    background: white;
    margin-top: -100px;
    left: -402px;
    position: absolute;
    z-index: 5;
    position: relative;
}
.topnr{
    width: 100%;
    height: 14%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.topnr li{
    list-style: none;
    color: #666666;
    width: 48%;
    height: 100%;
    font-size: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #8A6F3A;
}
.topnr .tuichu{
    width: 14%;
    height: 100%;
    border-left: 1px solid #eeeeee;
    font-size: 25px;
}
.topnr .tuichu:hover{
    background: white;
    color: #666666;
}
.topnr li:hover{
    cursor: pointer;
    color: white;
    background: #8A6F3A;
}
.biaodan{
    width: 100%;
}
.el-form-item{
    width: 80%;
    height: 20px;
    margin-top: 50px;
}
.el-form-item input{
    background: #E4E7ED;
    font-size: 14px;
    color: #000000;
}
.el-button{
    width: 80%;
    height: 40px;
    margin-top: 80px;
    margin-left: 10%;
    background: #A88747;
    border: white;
    border-radius: 0;
}
.zucebiaodan{
    width: 100%;
    position: absolute;
}
.zucebiaodan .el-button{
    margin-top: 40px;
}
.wdshoucang{
 list-style: none;
    background: #A88747;
    margin-top: -120px;
    left: 13%;
    width: 80px;
    line-height: 30.5px;
    position: absolute;
    z-index: 4;
}
.ewm{
 list-style: none;
    margin-top: -145px;
    left: 13%;
    width: 100px;
    line-height: 30px;
    position: absolute;
    z-index: 4;
}
.erweima img{
    width: 100px;
    height: 100px;
}
.el-icon-user:hover ~ .wdquanyi,.wdquanyi:hover{
    left: -5.2%;
    cursor: pointer;
    transition-duration:0.05s;
}
.el-icon-star-off:hover ~ .wdshoucang,.wdshoucang:hover{
    left: -5.2%;
    cursor: pointer;
    transition-duration:0.05s;
}
.el-icon-s-grid:hover ~ .ewm,.ewm:hover{
    left: -6.5%;
    cursor: pointer;
}

</style>
