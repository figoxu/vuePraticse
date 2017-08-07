export default {
    path: "/elementUi",
    meta: {
        requiresAuth: true
    },
    redirect: '/elementUi/table/index',
    component(resolve) {
        require.ensure(['views/elementUi/index.vue'], ()=> {
            resolve(require('views/elementUi/index.vue'));
        })
    },
    children: [{
        path: "/elementUi/table/index",
        component(resolve) {
            require.ensure(['views/elementUi/table/index.vue'], ()=> {
                        resolve(require('views/elementUi/table/index.vue'));
            })
        }
        ,redirect: '/elementUi/table/doc/index'
        ,children:[
            {
                path: "/elementUi/table/basic/index",
                component(resolve) {
                    require.ensure(['views/elementUi/table/basic/index.vue'], ()=> {
                        resolve(require('views/elementUi/table/basic/index.vue'));
                })
                }
            },
            {
                path: "/elementUi/table/doc/index",
                component(resolve) {
                    require.ensure(['views/elementUi/table/doc/index.vue'], ()=> {
                        resolve(require('views/elementUi/table/doc/index.vue'));
                })
                }
            }
        ]
    }]
}