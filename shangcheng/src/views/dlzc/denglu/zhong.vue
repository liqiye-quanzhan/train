<template>
    <div class="zhongbu">
        <div class="biaodan">
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
    </div>
</template>

<script>
export default {
    data() {
        return {
        ruleForm: {
          name: '',
          powssd:'',
        },
        rules: {
          name: [
            { required: true, message: '请输入账号', trigger: 'blur' },
            { min: 3, max: 3, message: '长度在 3 个字符', trigger: 'blur' }
          ],
          powssd: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
        }
        }
    },
    methods: {
        submitForm(formName) {
          let {name,powssd} = this.ruleForm;
        this.$refs[formName].validate((valid) => {
          if(name == 'aaa' && powssd == '1111'){
            //缓存
            sessionStorage.setItem('username',name);

            //跳转
            this.$router.push('/home');
          }else{
            alert('用户名或密码不正确')
          }
        });
      },
    },
}
</script>

<style scoped>
.zhongbu{
    width: 100%;
    height: 84%;
}
.biaodan{
    width: 30%;
    height: 50%;
    float: right;
    margin-top: 8%;
    margin-right: 8%;
    
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
    width: 40%;
    height: 40px;
    margin-top: 50px;
    margin-left: 30%;
    background: #333333;
    border: #333333;
}
</style>
