<template>
  <div class="zuoxia">
      <div ref="zhibao" style="width: 100%;height: 100%;"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
export default {
data() {
    return {
        data:[18203, 23489],
    }
},
mounted() {
    this.zhibaoqi();
},
methods: {
    zhibaoqi(){
        var myChart = this.$echarts.init(this.$refs.zhibao);

var option = {
    title: {
        text: '《质保到期',
        textStyle:{"fontSize": 15,"color": "#1AC9FF"},
        left:15,
        top:15,
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {//鼠标移动到之后选中部分显示方框灰色
            type: 'none',//阴影指示器
        }
    },
    legend: {
        data: []
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '5%',
        top:'25%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [1,1],
        axisLabel:{
            show:false,
        },//刻度标签
        splitLine: 'false',//分割线
        show:false,
        
    },
    yAxis: {
        type: 'category',
        data: ['今年到期', '预计明年到期'],
        axisLabel:{
            show:true,
            textStyle:{color:"#fff",fontSize:10}
        },//刻度标签
    },
    series: [//柱形图样式
        {
            type: 'bar',
            data: this.data,
            barCategoryGap:'60%',//数值越大越小
            label:{
            show:true,
            position:'right',
            textStyle:{
                color:'#fff'
            }
        },
            itemStyle:{
                normal:{
                    color:"#1AC9FF"
                    
                }
            }
        },
    ]
};            
    myChart.setOption(option);
},
}
}
</script>

<style scoped>
.zuoxia{
  width: 100%;
  height: 100%;
  border-right:1px solid #1AC9FF;
  border-left: 5px dashed #1AC9FF;
  position: relative;
  box-shadow:#1AC9FF 0 0 10px 1px inset;
}

</style>