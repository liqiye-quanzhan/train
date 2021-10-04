<template>
  <div>
      <div class="query">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="姓名">
            <el-input v-model="formInline.name" placeholder="要查询的用户姓名"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
            <el-input v-model="formInline.mobileno" placeholder="要查询的用户手机号"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
        </el-form>
    </div>
    <el-table
      :data="tableData"
      style="width: 100%;margin-top: 10px;">
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="mobileno"
        label="手机号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="sex"
        label="性别"
        width="100">
      </el-table-column>
      <el-table-column
        prop="birthday"
        label="日期"
        width="280">
      </el-table-column>
      <el-table-column
        prop="money"
        label="余额"
        width="150">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
      <el-table-column
      fixed="right"
      label="操作"
      width="200">
      <template slot-scope="scope">
        <el-button @click="editClick(scope.row)" type="text" size="medium">编辑</el-button>
        <el-button @click="delClick(scope.row)" type="text" size="medium">删除</el-button>
      </template>
    </el-table-column>
    </el-table>

    <el-dialog title="个人信息" :visible.sync="dialogFormVisible">
      <el-form :model="peopledata">
        <el-form-item label="名称:" :label-width="formLabelWidth">
          <el-input v-model="peopledata.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="手机号:" :label-width="formLabelWidth">
          <el-input v-model="peopledata.mobileno" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别:" :label-width="formLabelWidth">
          <el-radio-group v-model="peopledata.sex">
            <el-radio label="1">男</el-radio>
            <el-radio label="0">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="生日:" :label-width="formLabelWidth">
            <el-date-picker
              v-model="peopledata.birthday"
              type="date"
              format="yyyy-MM-dd"
              value-format="timestamp"
              placeholder="选择日期">
            </el-date-picker>
        </el-form-item>
        <el-form-item label="地址:" :label-width="formLabelWidth">
          <el-input v-model="peopledata.address" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="余额:" :label-width="formLabelWidth">
          <p>{{peopledata.money}}</p>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="ok">确 定</el-button>
      </div>
    </el-dialog>
    <el-pagination
      background
      layout="prev, pager, next"
      style="float:right;margin:15px"
      :page-size="10"
      @current-change="change"
      :total="totalsum">
    </el-pagination>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
          tableData: [],
          formInline: {
          name: '',
          mobileno:'',
        },
          name:"",
          totalsum:0,
          peopledata: {},
          formLabelWidth: '120px',
          dialogFormVisible: false,
          peopledata:{},
        }
    },
    mounted() {
          this.show()
      },
    methods: {
        show(){
              const that = this
              this.name = sessionStorage.getItem('username')
              axios({
              method:'post',
              url:`http://192.168.31.130:8080/userInfoController/selectbypager`
            }).then(function(res){
              that.totalsum = res.data.rs.total
              that.tableData = res.data.rs.list
              for(let i = 0;i<that.tableData.length;i++){
                that.tableData[i].sex = that.transformation(that.tableData[i].sex)
                that.tableData[i].birthday = that.getLocalTime(that.tableData[i].birthday)
              }
            })
          },
          editClick(row){
            const that = this
            this.dialogFormVisible = true
            axios({
              method:'post',
              url:`http://192.168.31.130:8080/userInfoController/selectUser?id=${row.id}`,
            }).then(function(res){
               that.peopledata = res.data.rs  
               that.peopledata.sex = String(that.peopledata.sex)       
            }) 
          },
          delClick(row){
            const that = this
            axios({
              method:'post',
              url:`http://192.168.31.130:8080/userInfoController/delete?id=${row.id}`
            }).then(function(res){
              alert(res.data.msg);
              if(res.data.code == 0){
                that.show()
              }else{return}
            })
          },
          onSubmit() {
            const that = this
            axios({
              method:'post',
              url:`http://192.168.31.130:8080/userInfoController/selectbypager?name=${that.formInline.name}&mobileno=${that.formInline.mobileno}`
            }).then(function(res){
              console.log(res.data.rs);
              that.totalsum = res.data.rs.total
              that.tableData = res.data.rs.list
              for(let i = 0;i<that.tableData.length;i++){
                that.tableData[i].sex = that.transformation(that.tableData[i].sex)
                that.tableData[i].birthday = that.getLocalTime(that.tableData[i].birthday)
              }
            })
          },
          change(value){
            const that = this
            axios({
              method:'post',
              url:`http://192.168.31.130:8080/userInfoController/selectbypager?page=${value}`
            }).then(function(res){
              console.log(res.data.rs);
              that.totalsum = res.data.rs.total
              that.tableData = res.data.rs.list
              for(let i = 0;i<that.tableData.length;i++){
                that.tableData[i].sex = that.transformation(that.tableData[i].sex)
                that.tableData[i].birthday = that.getLocalTime(that.tableData[i].birthday)
              }
            })
          },
          transformation(val){
            if(val == 1) return "男"
            else{ return "女"}
          },
          getLocalTime(nS) {  
          return new Date(parseInt(nS)).toLocaleString().replace(/:\d{1,2}$/,' ');  
          },
          ok(){
            const that = this
            console.log(this.peopledata);
            axios({
              method:'post',
              url:`http://192.168.31.130:8080/userInfoController/updateUser?id=${that.peopledata.id}&name=${that.peopledata.name}&mobileno=${that.peopledata.mobileno}&sex=${that.peopledata.sex}&birthday=${that.peopledata.birthday}&address=${that.peopledata.address}`,
            }).then(function(res){
               that.show() 
               that.dialogFormVisible = false  
            }) 
          },
    },
}
</script>

<style>
.query{
    margin-top: 15px;
    margin-left: 30px;
}
</style>