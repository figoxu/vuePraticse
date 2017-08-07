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
        ,redirect: '/elementUi/table/basic/index'
        ,children:[
            {
                path: "/elementUi/table/basic/index",
                component(resolve) {
                    require.ensure(['views/elementUi/table/basic/index.vue'], ()=> {
                        resolve(require('views/elementUi/table/basic/index.vue'));
                })
                }
            }
        ]
    }]
}



// ,redirect: '/games/action/godOfWar',
// children: [{
//     path: "/games/action/godOfWar",
//     component(resolve) {
//         require.ensure(['views/games/action/godOfWar/index.vue'], () => {
//             resolve(require('views/games/action/godOfWar/index.vue'));
//     })
//     }
// }]
// /views/elementUi/cmp/index.vue