
        <template>
      <div class="main_container">

        <header class="header">
            <div class="logo"> 
                  <span class="logo-items"></span>
                <span class="title"><span>i</span><span>Biu</span></span>
            </div>
            <ul>
               <li><router-link to='/video'>视频</router-link></li>
                <li><router-link to='/posts'>文章</router-link></li>
                <li><router-link to='/games'>游戏</router-link></li>
                <li><router-link to='/music'>音乐</router-link></li>
                <li><router-link to='/elementUi'>elementUi</router-link></li>
            </ul>
            <div class="user-area">
              <span class="bell">
                <span class="alarm">20</span>
              </span>
              <span class="detail"></span>
                   <div class="favico"></div>
                   <span class="name"><span><router-link to="/login">admin</router-link></span><i></i></span>
            </div>
        </header>


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
  .contend {
    width:100%;
    height: 100%;
    background: #4caf50;
    .nav{
      width: 100px;
      height:100%;
      background: #00AAFF;
      position: absolute;
      left: 0;
      top:0;
    }
  }
</style>
