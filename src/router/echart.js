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
    },{
        path: "/echart/pure",
        component(resolve) {
            require.ensure(['views/echart/pure.vue'], () => {
                resolve(require('views/echart/pure.vue'));
            })
        }
    },{
        path: "/echart/calendar/count",
        component(resolve) {
            require.ensure(['views/echart/calendar/count.vue'], () => {
                resolve(require('views/echart/calendar/count.vue'));
            })
        }
    },{
        path: "/echart/calendar/heat",
        component(resolve) {
            require.ensure(['views/echart/calendar/heat.vue'], () => {
                resolve(require('views/echart/calendar/heat.vue'));
            })
        }
    },{
        path: "/echart/calendar/pie",
        component(resolve) {
            require.ensure(['views/echart/calendar/pie.vue'], () => {
                resolve(require('views/echart/calendar/pie.vue'));
            })
        }
    }],
}


