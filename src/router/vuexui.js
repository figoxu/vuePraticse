export default {
    path:"/vuex",
    meta: {
        requiresAuth:true
    },
    redirect:'/vuex/counter',
    component(resolve) {
        require.ensure(['views/vuex/index.vue'], () => {
            resolve(require('views/vuex/index.vue'));
        })
    },
    children:[{
        path:'/vuex/counter',
        component(resolve){
            require.ensure(['views/vuex/counter.vue'], () => {
                resolve(require('views/vuex/counter.vue'));
            })
        }
    },{
        path:'/vuex/counter',
        component(resolve){
            require.ensure(['views/vuex/counter.vue'], () => {
                resolve(require('views/vuex/counter.vue'));
            })
        }
    }]
}