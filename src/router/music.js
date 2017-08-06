export default {
    path: "/music",
    meta: {
        requiresAuth: true
    },
    redirect: '/music/DM',
    component(resolve) {
        require.ensure(['views/music/index.vue'], () => {
            resolve(require('views/music/index.vue'));
        })
    },
    children: [{
            path: "/music/DM",
            component(resolve) {
                require.ensure(['views/music/DM/index.vue'], () => {
                    resolve(require('views/music/DM/index.vue'));
                })
            },
            redirect: '/music/DM/house',
            children: [{
                    path: "/music/DM/house",
                    component(resolve) {
                        require.ensure(['views/music/DM/house/index.vue'], () => {
                            resolve(require('views/music/DM/house/index.vue'));
                        })
                    }
                },
                {
                    path: "/music/DM/trance",
                    component(resolve) {
                        require.ensure(['views/music/DM/trance/index.vue'], () => {
                            resolve(require('views/music/DM/trance/index.vue'));
                        })
                    }
                },
                {
                    path: "/music/DM/china",
                    component(resolve) {
                        require.ensure(['views/music/DM/china/index.vue'], () => {
                            resolve(require('views/music/DM/china/index.vue'));
                        })
                    }
                },
            ]
        },
        {
            path: "/music/folk",
            component(resolve) {
                require.ensure(['views/music/folk/index.vue'], () => {
                    resolve(require('views/music/folk/index.vue'));
                })
            },
            redirect: '/music/folk/songdongye',
            children: [{
                    path: "/music/folk/songdongye",
                    component(resolve) {
                        require.ensure(['views/music/folk/songdongye/index.vue'], () => {
                            resolve(require('views/music/folk/songdongye/index.vue'));
                        })
                    }
                },
                {
                    path: "/music/folk/chenbi",
                    component(resolve) {
                        require.ensure(['views/music/folk/chenbi/index.vue'], () => {
                            resolve(require('views/music/folk/chenbi/index.vue'));
                        })
                    }
                },
                {
                    path: "/music/folk/zxzz",
                    component(resolve) {
                        require.ensure(['views/music/folk/zxzz/index.vue'], () => {
                            resolve(require('views/music/folk/zxzz/index.vue'));
                        })
                    }
                },
            ]
        },
        {
            path: "/music/popMusic",
            component(resolve) {
                require.ensure(['views/music/popMusic/index.vue'], () => {
                    resolve(require('views/music/popMusic/index.vue'));
                })
            },
            redirect: '/music/popMusic/eason',
            children: [{
                    path: "/music/popMusic/eason",
                    component(resolve) {
                        require.ensure(['views/music/popMusic/eason/index.vue'], () => {
                            resolve(require('views/music/popMusic/eason/index.vue'));
                        })
                    }
                },
                {
                    path: "/music/popMusic/jay",
                    component(resolve) {
                        require.ensure(['views/music/popMusic/jay/index.vue'], () => {
                            resolve(require('views/music/popMusic/jay/index.vue'));
                        })
                    }
                },
                {
                    path: "/music/popMusic/Joker",
                    component(resolve) {
                        require.ensure(['views/music/popMusic/Joker/index.vue'], () => {
                            resolve(require('views/music/popMusic/Joker/index.vue'));
                        })
                    }
                },
            ]
        },
        {
            path: "/music/classical",
            component(resolve) {
                require.ensure(['views/music/classical/index.vue'], () => {
                    resolve(require('views/music/classical/index.vue'));
                })
            },
            redirect: '/music/classical/john',
            children: [{
                    path: "/music/classical/john",
                    component(resolve) {
                        require.ensure(['views/music/classical/john/index.vue'], () => {
                            resolve(require('views/music/classical/john/index.vue'));
                        })
                    }
                },
                {
                    path: "/music/classical/hansishi",
                    component(resolve) {
                        require.ensure(['views/music/classical/hansishi/index.vue'], () => {
                            resolve(require('views/music/classical/hansishi/index.vue'));
                        })
                    }
                },
                {
                    path: "/music/classical/Hans Zimmer",
                    component(resolve) {
                        require.ensure(['views/music/classical/Hans Zimmer/index.vue'], () => {
                            resolve(require('views/music/classical/Hans Zimmer/index.vue'));
                        })
                    }
                },
            ]
        },

    ]
}