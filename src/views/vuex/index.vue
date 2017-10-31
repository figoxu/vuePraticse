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
                <ul>
                    <li><router-link to='/vuex/counter'>Counter</router-link></li>
                   
                </ul>
            </div>

        </div>
        <router-view></router-view>
    </div>
</template>
