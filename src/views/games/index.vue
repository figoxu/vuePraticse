
<template>
            <div class="body">

        <div class="left_col ">

    <!--一级导航区域-->
    <div class="left_link">

       <div class="leftBoard">
      <span class="icon"></span>
      <span class='sideTitle'>Sidebars</span>
      <span class='info'>new</span>
      </div>
   <ul><li><router-link to='/games/action'>动作游戏</router-link></li><li><router-link to='/games/shooting'>射击游戏</router-link></li><li><router-link to='/games/strategy'>策略</router-link></li></ul>
  </div>

     </div>
                
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
