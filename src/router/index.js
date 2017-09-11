import Vue from 'vue';
import Router from 'vue-router';
import contend from 'views/index.vue'
import login from 'views/login.vue'
import notF from 'views/404.vue'



import video from './video.js';
import posts from './posts.js';
import games from './games.js';
import music from './music.js';
import elementUi from './elementUi';
import echart from './echart'


Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'home',
            redirect: '/video',
            component: contend,
            children: [
                video,
                posts,
                games,
                music,
                elementUi,
                echart,
            ]

        },
        {
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '*',
            name: '404',
            component: notF
        }
    ]
})