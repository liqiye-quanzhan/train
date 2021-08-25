<template>
    <div class="yonghuwenjuan">
        <div class="jieshao">
            <p class="p">{{jieshao.p}}</p>
            <p class="a">{{jieshao.a}}</p>
        </div>
        <div class="neirong">
            <div class="shang">
            <div class="biaoti"><p class="tubiao">1</p><p class="title">您认为有哪些需要改善的地方？</p></div>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px"  class="demo-ruleForm">
            <el-form-item prop="desc" style="margin-bottom:50px">
            <el-input type="textarea" v-model="ruleForm.desc" placeholder="谈谈您对该页面的使用体验和感受"></el-input>
            </el-form-item>
            <hr>
            <div class="biaoti"><p class="tubiao">2</p><p class="title">您的联系方式？</p></div>
            <el-form-item label="称呼" prop="name">
            <el-input v-model="ruleForm.name" placeholder="您的称呼"></el-input>
            </el-form-item>
            <el-form-item prop="email" label="邮箱" :rules="[
            { required: true, message: '请输入邮箱地址', trigger: 'blur' },
            { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }]">
            <el-input v-model="ruleForm.email" placeholder="请输入您的邮箱"></el-input>
            </el-form-item>
            <el-form-item label="手机号" prop="name">
            <el-input v-model="ruleForm.name" placeholder="请输入您的手机号"></el-input>
            </el-form-item>
            <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            </el-form-item>
            </el-form>
            </div>
            
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            jieshao:{
                p:"卡萨帝用户问卷",
                a:"感谢您访问卡萨帝官网，为了让您有更好的网站使用体验，请告诉我们您对登录页面的意见和建议，我们会对网站进行持续的优化，谢谢!",
            },
            ruleForm: {
                desc: '',
                domains: [
                { value: ''}
                ],
                email: '',
            },
            rules: {
                desc: [
                { required: true, message: '请填写您的评价', trigger: 'blur' }
                ]
            },
           
        }
    },
    methods: {
        submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    },
}
</script>

<style scoped>
hr{
    background-color: #eeeeee;
    height: 0.5px;
    border: 0;
}
.yonghuwenjuan{
    width: 100%;
}
.jieshao{
    width: 80%;
    height: 200px;
    margin-left: 10%;
    border-bottom: 1px solid #EEEEEE;
}
.jieshao .p{
    font-size: 32px;
    color: #333333;
    margin-top: 5%;
    margin-left: 45%; 
}
.jieshao .a{
    width: 60%;
    font-size: 16px;
    color: #666666;
    margin-top: 20px;
    margin-left: 25%;
    text-align: center;
    line-height: 25px;
}
.neirong{
    width: 100%;
}
.shang{
    width: 60%;
    margin-left: 20%;
}
.biaoti{
    display: flex;
    margin-left: 100px;
    margin-bottom: 20px;
    margin-top: 40px;
}
.tubiao{
    width: 30px;
    height: 30px;
    background: #A88747;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    border-radius: 15px;
}
.title{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
}
.el-form{
    width: 100%;
}
.el-button{
    width: 300px;
    height: 50px;
    background: #A88747;
    border:1px solid #A88747;
    outline: none;
    border-radius: 0;
}
.el-button:hover{
    background: #9A7326;
}

</style>