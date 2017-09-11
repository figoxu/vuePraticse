<template>
        <router-view></router-view>
</template>
<script>
    import Vue from 'vue'
    import ElementUI from 'element-ui'
    import 'element-ui/lib/theme-default/index.css'
    import VueECharts from 'vue-echarts/dist/vue-echarts'
    import App from './App.vue'
    Vue.use(ElementUI);
    Vue.component('chart', VueECharts);
    export default {
        data() {
            return {

            };
        },
        mounted() {

        },
        beforeDestroy() {

        },
        methods: {

        }
    };
</script>