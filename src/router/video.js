export default {
    path: "/video",
    meta: {
        requiresAuth: true
    },
    redirect: '/video/funny',
    component(resolve) {
        require.ensure(['views/video/index.vue'], () => {
            resolve(require('views/video/index.vue'));
        })
    },
    children: [{
            path: "/video/funny",
            component(resolve) {
                require.ensure(['views/video/funny/index.vue'], () => {
                    resolve(require('views/video/funny/index.vue'));
                })
            },
            redirect: '/video/funny/sproof',
            children: [{
                    path: "/video/funny/sproof",
                    component(resolve) {
                        require.ensure(['views/video/funny/sproof/index.vue'], () => {
                            resolve(require('views/video/funny/sproof/index.vue'));
                        })
                    }
                },
                {
                    path: "/video/funny/wulitou",
                    component(resolve) {
                        require.ensure(['views/video/funny/wulitou/index.vue'], () => {
                            resolve(require('views/video/funny/wulitou/index.vue'));
                        })
                    }
                },
            ]
        },
        {
            path: "/video/scary",
            component(resolve) {
                require.ensure(['views/video/scary/index.vue'], () => {
                    resolve(require('views/video/scary/index.vue'));
                })
            },
            redirect: '/video/scary/ghost',
            children: [{
                    path: "/video/scary/ghost",
                    component(resolve) {
                        require.ensure(['views/video/scary/ghost/index.vue'], () => {
                            resolve(require('views/video/scary/ghost/index.vue'));
                        })
                    }
                },
                {
                    path: "/video/scary/blood",
                    component(resolve) {
                        require.ensure(['views/video/scary/blood/index.vue'], () => {
                            resolve(require('views/video/scary/blood/index.vue'));
                        })
                    }
                },
            ]
        },
        {
            path: "/video/sports",
            component(resolve) {
                require.ensure(['views/video/sports/index.vue'], () => {
                    resolve(require('views/video/sports/index.vue'));
                })
            },
            redirect: '/video/sports/skating',
            children: [{
                    path: "/video/sports/skating",
                    component(resolve) {
                        require.ensure(['views/video/sports/skating/index.vue'], () => {
                            resolve(require('views/video/sports/skating/index.vue'));
                        })
                    }
                },
                {
                    path: "/video/sports/surfing",
                    component(resolve) {
                        require.ensure(['views/video/sports/surfing/index.vue'], () => {
                            resolve(require('views/video/sports/surfing/index.vue'));
                        })
                    }
                },
            ]
        },
        {
            path: "/video/travel",
            component(resolve) {
                require.ensure(['views/video/travel/index.vue'], () => {
                    resolve(require('views/video/travel/index.vue'));
                })
            },
            redirect: '/video/travel/history',
            children: [{
                    path: "/video/travel/history",
                    component(resolve) {
                        require.ensure(['views/video/travel/history/index.vue'], () => {
                            resolve(require('views/video/travel/history/index.vue'));
                        })
                    }
                },
                {
                    path: "/video/travel/scenery",
                    component(resolve) {
                        require.ensure(['views/video/travel/scenery/index.vue'], () => {
                            resolve(require('views/video/travel/scenery/index.vue'));
                        })
                    }
                },
            ]
        },

    ]
}