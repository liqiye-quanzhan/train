<template>
    <div class="zucezhongbu">
    <div class="zucebiaodan">
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
            { validator: validatePass, trigger: 'blur' }
          ],

          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
        }
        }
    },
    methods: {
        submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$router.push('/login');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
       resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
}
</script>

<style scoped>
.zucezhongbu{
    width: 100%;
    height: 84%;
}
.zucebiaodan{
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


/* .zucezhongbu{
    width: 100%;
    height: 84%;
}
.zucebiaodan{
    width: 30%;
    height: 40%;
    float: left;
    margin-top: 7%;
    margin-left: 8%;
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
} */
</style>
