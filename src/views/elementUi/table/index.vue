<template>
    <div class="main">

        <ol class="breadcrumb">
            <li class='breadcrumb-item'>
                <router-link to='/elementUi/table/doc'>文档</router-link>
                <router-link to='/elementUi/table/basic'>基础</router-link>
                <router-link to='/elementUi/table/stripe'>带斑马纹</router-link>
                <router-link to='/elementUi/table/border'>带边框</router-link>
                <router-link to='/elementUi/table/state'>带状态</router-link>
                <router-link to='/elementUi/table/fixHeader'>固定表头</router-link>
                <router-link to='/elementUi/table/fixColumn'>固定列</router-link>
                <router-link to='/elementUi/table/fixHeaderCloumn'>固定列和表头</router-link>
                <router-link to='/elementUi/table/flowHeight'>流体高度</router-link>
                <router-link to='/elementUi/table/multiHeader'>多级表头</router-link>
                <router-link to='/games/action/godOfWar'>单选</router-link>
                <router-link to='/games/action/godOfWar'>多选</router-link>
            </li>
        </ol>

        <router-view></router-view>
    </div>


</template>

<script type="text/ecmascript-6">

    export default{
        data(){
            return {
                //todo 这里是data区域

            }
        },
        components: {
            //TODO 添加子组件
        },
        computed: {
            //TODO 计算区
        },
        methods: {
            //TODO 方法区
        },
        mounted: function () {

            //TODO 函数执行区域
        }
    }
</script>
<style lang="scss">

</style>