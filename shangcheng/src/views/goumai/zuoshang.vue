<template>
  <div class="zuoshang">
    <div ref="sbzk" style="width: 100%;height:100%;"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
// import 'echarts/map/js/china'
export default {
data() {
    return {
      data:[
                {value: 735, name: '在库'},
                {value: 580, name: '安装中'},
                {value: 484, name: '使用中'},
                {value: 300, name: '维护中'},
            ],
            zhi:0,
    }
},
mounted() {
  this.yxqk();
  this.shebeizhuangkuang();
},
methods: {
  yxqk(){
    var zongshu = this.data[0].value+this.data[1].value+this.data[2].value+this.data[3].value;
    this.zhi = (zongshu - this.data[3].value)/zongshu*100;
    this.zhi = this.zhi.toFixed(0);//取小数点后几位
  },
  shebeizhuangkuang(){
    var myChart = this.$echarts.init(this.$refs.sbzk);
        // 指定图表的配置项和数据
    var option ={
      title:{
        text:'《设备状况',
        left:15,
        top:15,
        textStyle: {"fontSize": 15,"color": "#1AC9FF"}
      },
    tooltip: {
        trigger: 'item',
    },
    legend: {
      orient:'vertical',//排列方向
      right: 10,
      top: 20,
      bottom: 20,
      data:this.data.name,
      textStyle:{
          color:'#fff',
        }
    },
    color:['#1AC9FF','red'],
    series: [
        {
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
                borderRadius: 10,
                borderColor: '#000836',
                borderWidth: 5
            },
            data:this.sldata,
            label: {           
                normal:{//在环形图中间显示数据
                  show: true,
                    position: 'center',
                    formatter: this.zhi+'%\r\n\n 运行情况',
                    textStyle:{
                        fontSize:15,
                        color:"#fff"
                    }
                },
                emphasis: {
                    show: false,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }              
                }
            },
            
            labelLine: {
                show: false
            },
            data: this.data,
        }
    ],
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
  }
  
},
}
</script>

<style scoped>
.zuoshang{
  width: 100%;
  height: 100%;
  border-right:1px solid #1AC9FF;
  border-left: 5px dashed #1AC9FF;
  position: relative;
  box-shadow:#1AC9FF 0 0 10px 1px inset;
}

</style>