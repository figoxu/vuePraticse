<template>
    <div class="main_content" style="margin-left: 200px;">
        <div id="pieCalendar"></div>
    </div>
</template>
<script>
    import echarts from 'echarts'
    export default {
        data() {
            return {
                chart:null,
                cellSize:[80,80],
                pieRadius:30,
                pieInitialized:false,
            }
        },
        methods:{
            drawPie(id){
                this.chart = echarts.init(document.getElementById(id));
                var option = this.option();
                this.chart.setOption(option);
                var thiz = this
                setTimeout(function () {
                    thiz.pieInitialized = true;
                    thiz.chart.setOption({
                        series: thiz.getPieSeries(thiz.getVirtulData(), thiz.chart)
                    });
                }, 10);
            },
            option(){
                var scatterData = this.getVirtulData();
                var option = {
                    tooltip : {},
                    legend: {
                        data: ['工作', '娱乐', '睡觉'],
                        bottom: 20
                    },
                    calendar: {
                        top: 'middle',
                        left: 'center',
                        orient: 'vertical',
                        cellSize: this.cellSize,
                        yearLabel: {
                            show: false,
                            textStyle: {
                                fontSize: 30
                            }
                        },
                        dayLabel: {
                            margin: 20,
                            firstDay: 1,
                            nameMap: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
                        },
                        monthLabel: {
                            show: false
                        },
                        range: ['2017-02']
                    },
                    series: [{
                        id: 'label',
                        type: 'scatter',
                        coordinateSystem: 'calendar',
                        symbolSize: 1,
                        label: {
                            normal: {
                                show: true,
                                formatter: function (params) {
                                    return echarts.format.formatTime('dd', params.value[0]);
                                },
                                offset: [-this.cellSize[0] / 2 + 10, -this.cellSize[1] / 2 + 10],
                                textStyle: {
                                    color: '#000',
                                    fontSize: 14
                                }
                            }
                        },
                        data: scatterData
                    }]
                };
                return option;
            },
            getVirtulData(){
                var date = +echarts.number.parseDate('2017-02-01');
                var end = +echarts.number.parseDate('2017-03-01');
                var dayTime = 3600 * 24 * 1000;
                var data = [];
                for (var time = date; time < end; time += dayTime) {
                    data.push([
                        echarts.format.formatTime('yyyy-MM-dd', time),
                        Math.floor(Math.random() * 10000)
                    ]);
                }
                return data;
            },
            getPieSeries(scatterData, chart){
                var thiz = this;
                return echarts.util.map(scatterData, function (item, index) {
                    var center = chart.convertToPixel('calendar', item);
                    return {
                        id: index + 'pie',
                        type: 'pie',
                        center: center,
                        label: {
                            normal: {
                                formatter: '{c}',
                                position: 'inside'
                            }
                        },
                        radius: thiz.pieRadius,
                        data: [
                            {name: '工作', value: Math.round(Math.random() * 24)},
                            {name: '娱乐', value: Math.round(Math.random() * 24)},
                            {name: '睡觉', value: Math.round(Math.random() * 24)}
                        ]
                    };
                });
            },
            getPieSeriesUpdate(scatterData, chart){//todo resize时候调用
                return echarts.util.map(scatterData, function (item, index) {
                    var center = chart.convertToPixel('calendar', item);
                    return {
                        id: index + 'pie',
                        center: center
                    };
                });
            }
        },
        mounted(){
            this.$nextTick(function () {
                this.drawPie('pieCalendar')
            })
        }
    }
</script>
<style scoped>
    #pieCalendar {
        position: relative;
        left: 50%;
        margin-left: -400px;
        margin-bottom: 70px;
        width: 800px;
        height: 600px;
        border: solid #D01257 1px;
        box-shadow: 0 0 8px #FB90B7;
        border-radius: 10px;
    }
</style>