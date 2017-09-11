export default {
    path: "/echart",
    meta: {
        requiresAuth: true
    },
    redirect: '/echart/home',
    component(resolve) {
        require.ensure(['views/echart/index.vue'], () => {
            resolve(require('views/echart/index.vue'));
        })
    },
    children: [{
        path: "/echart/home",
        component(resolve) {
            require.ensure(['views/echart/home.vue'], () => {
                resolve(require('views/echart/home.vue'));
            })
        }
    }],
}