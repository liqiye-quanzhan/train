<template>
  <div class="zuozhong">
    <div ref="zcdt" style="width: 100%;height:100%;"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
data() {
    return {  
        zzdata:[320,520, 382, 611,340],  
        xdata:['2017','2018', '2019', '2020','2021'],
        bfdata:[500,140, 332, 161,450],
    }
},
mounted() {
  this.zichandongtai();
},
methods: {
  zichandongtai(){
    var myChart = this.$echarts.init(this.$refs.zcdt);

    var option = {
    color: ['#80FFA5', '#00DDFF'],
    title: {//标题
        text: '《近三年资产动态',
        textStyle: {"fontSize": 15,"color": "#1AC9FF"},
        left:10,
        top:10,
    },
    tooltip: {//鼠标移入时提示数据
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {//提示数据
        data: ['增长率', '报废'],
        top:10,
        textStyle:{
          color:'#fff',
        }
    },
   
    grid: {
        left: '6%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: this.xdata,
            axisLabel:{
            textStyle:{color:"#FFF",fontSize:10},
        }
        }
    ],
    yAxis: {
        show: false,
        axisLabel:{
            show:false,
        },//刻度标签
        splitLine: 'false',//分割线
        type: 'value',
    },
    series: [
        {
            name: '增长率',
            type: 'line',
            smooth: true,
            showSymbol: true,
            itemStyle:{//线条样式
              color:'red'          
            },
            lineStyle:{
                color:'red', //改变折线颜色
                width:1,//宽度
                },
            areaStyle: {
                opacity: 0.3,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'red',
                    
                }, {
                    offset: 1,
                    color: 'rgba(1, 191, 236)'
                }])
            },
            emphasis: {
                focus: 'series'
            },
            data: this.zzdata,
        },
        {
            name: '报废',
            type: 'line',
            smooth: true,//平滑曲线
            showSymbol: true,//数据点显示
            lineStyle:{
                color:'rgba(0, 221, 255)', //改变折线颜色
                width:1,
                },
            areaStyle: {
                opacity: 0.2,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0, 221, 255)'
                }, {
                    offset: 1,
                    color: 'rgba(77, 119, 255)'
                }])
            },
            emphasis: {
                focus: 'series'
            },
            data: this.bfdata,
        },
       
    ]
};
myChart.setOption(option);
  }
},
}
</script>

<style scoped>
.zuozhong{
  width: 100%;
  height: 100%;
  border-right:1px solid #1AC9FF;
  border-left: 5px dashed #1AC9FF;
  position: relative;
  box-shadow:#1AC9FF 0 0 10px 1px inset;
}
#zcdt{
  width: 100%;
  height: 100%;
}

</style>