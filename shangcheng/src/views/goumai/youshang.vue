<template>
  <div class="youshang">
    <div ref="top" style="width: 100%;height:100%;"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
data() {
    return { 
        data:[120, 200, 150, 80, 70, 110, 130, 220, 178, 290], 
        dataname: ['交换机', '路由器', '服务器', '防火墙', '负载均衡设备', 'IP电话', '存储设备','笔记本','台式机','显示器'],
    }
},
mounted() {
  this.topt();
},
methods: {
sortArr(){
    return this.data.sort(this.sortNumber);
},
sortNumber(a,b){
    return b-a;
},

    topt(){
    var myChart = this.$echarts.init(this.$refs.top);

    var option = {
    title:{
        text:"TOP10",
        textStyle: {"fontSize": 15,"color": "#1AC9FF"},
        left:10,
        top:10,
    },
    xAxis: {
        type: 'category',
        data: this.dataname,
        
        axisLabel:{
            formatter(value){//x轴文字纵向显示
                return value.split('').join("\n");
            },
            textStyle:{color:"#FFF",fontSize:10},
        }
    },
    yAxis: {
        show: false,
        axisLabel:{
            show:false,
        },//刻度标签
        splitLine: 'false',//分割线
        
    },
    series: [{
        data: this.sortArr(),
        type: 'bar',
        showBackground: true,
        barCategoryGap:'60%',//数值越大越小
        label:{//在柱形图顶部显示数值
            show:true,
            position:'top',
            textStyle:{
                color:'#fff',
                fontSize:10,
            }
        },
        backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)'
        },
        itemStyle: {
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: '#83bff6'},
                        {offset: 0.5, color: '#188df0'},
                        {offset: 1, color: '#188df0'}
                    ]
                )
            },
            emphasis: {
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#2378f7'},
                            {offset: 0.7, color: '#2378f7'},
                            {offset: 1, color: '#83bff6'}
                        ]
                    )
                }
            },
    }]
};

 myChart.setOption( option );
  }
},
}
</script>

<style scoped>
.youshang{
  width: 100%;
  height: 100%;
  border:1px solid #1AC9FF;
  border-left: 5px dashed #1AC9FF;
  position: relative;
  box-shadow:#1AC9FF 0 0 10px 1px inset;
}

</style>