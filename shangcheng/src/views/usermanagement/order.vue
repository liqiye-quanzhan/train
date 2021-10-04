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
        prop="status"
        label="订单状态"
        width="100">
      </el-table-column>
      <el-table-column
        prop="creatdate"
        label="日期"
        width="280">
      </el-table-column>
      <el-table-column
        prop="money"
        label="金额"
        width="150">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
      <el-table-column
        prop="goodsname"
        label="商品名称">
      </el-table-column>
      <el-table-column
        prop="quantity"
        label="商品数量">
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

    <el-dialog title="更改个人信息" :visible.sync="dialogFormVisible">
      <el-form :model="peopledata">
        <el-form-item label="名称:" :label-width="formLabelWidth">
          <el-input v-model="peopledata.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="手机号:" :label-width="formLabelWidth">
          <el-input v-model="peopledata.mobileno" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="地址:" :label-width="formLabelWidth">
          <el-input v-model="peopledata.address" autocomplete="off"></el-input>
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
              url:`http://192.168.31.130:8080/orderController/selectbypager`
            }).then(function(res){
              that.totalsum = res.data.rs.total
              that.tableData = res.data.rs.list
              for(let i = 0;i<that.tableData.length;i++){
                that.tableData[i].status = that.transformation(that.tableData[i].status)
                that.tableData[i].creatdate = that.getLocalTime(that.tableData[i].creatdate)
                that.tableData[i].goodsname = that.tableData[i].goods.mark
              }
            })
          },
          editClick(row){
            const that = this
            this.dialogFormVisible = true
            axios({
              method:'post',
              url:`http://192.168.31.130:8080/orderController/select?id=${row.id}`,
            }).then(function(res){
               that.peopledata = res.data.rs  
               that.peopledata.status= String(that.peopledata.status)       
            }) 
          },
          delClick(row){
            const that = this
            console.log(row);
            axios({
              method:'post',
              url:`http://192.168.31.130:8080/orderController/delete?id=${row.id}`
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
              url:`http://192.168.31.130:8080/orderController/selectbypager?name=${that.formInline.name}&mobileno=${that.formInline.mobileno}`
            }).then(function(res){
              console.log(res.data.rs);
              that.totalsum = res.data.rs.total
              that.tableData = res.data.rs.list
              for(let i = 0;i<that.tableData.length;i++){
                that.tableData[i].status = that.transformation(that.tableData[i].status)
                that.tableData[i].creatdate = that.getLocalTime(that.tableData[i].creatdate)
              }
            })
          },
          change(value){
            const that = this
            axios({
              method:'post',
              url:`http://192.168.31.130:8080/orderController/selectbypager?page=${value}`
            }).then(function(res){
              that.totalsum = res.data.rs.total
              that.tableData = res.data.rs.list
              for(let i = 0;i<that.tableData.length;i++){
                that.tableData[i].status = that.transformation(that.tableData[i].status)
                that.tableData[i].creatdate = that.getLocalTime(that.tableData[i].creatdate)
              }
            })
          },
          transformation(val){
            if(val == "2") return "待发货"
            else{ return "待收货"}
          },
          getLocalTime(nS) {  
          return new Date(parseInt(nS)).toLocaleString().replace(/:\d{1,2}$/,' ');  
          },
          ok(){
            const that = this
            console.log(this.peopledata);
            axios({
              method:'post',
              url:`http://192.168.31.130:8080/orderController/update?id=${that.peopledata.id}&name=${that.peopledata.name}&mobileno=${that.peopledata.mobileno}&address=${that.peopledata.address}`,
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