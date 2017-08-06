
        <template>
  <div class="main">

    <ol class="breadcrumb">

      <!--<li class="breadcrumb-item">-->
      <!--<router-link to='first1/sec1/third1'>三级导航</router-link>-->
      <!--</li>-->
      <li class='breadcrumb-item'><router-link to='/music/popMusic/eason'>陈奕迅</router-link></li><li class='breadcrumb-item'><router-link to='/music/popMusic/jay'>周杰伦</router-link></li><li class='breadcrumb-item'><router-link to='/music/popMusic/Joker'>薛之谦</router-link></li>
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