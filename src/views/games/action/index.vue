
        <template>
  <div class="main">

    <ol class="breadcrumb">

      <!--<li class="breadcrumb-item">-->
      <!--<router-link to='first1/sec1/third1'>三级导航</router-link>-->
      <!--</li>-->
      <li class='breadcrumb-item'><router-link to='/games/action/godOfWar'>战神</router-link></li><li class='breadcrumb-item'><router-link to='/games/action/hunter'>全职猎人</router-link></li><li class='breadcrumb-item'><router-link to='/games/action/GTA5'>GTA5</router-link></li>
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