export default {
    path: "/posts",
    meta: {
        requiresAuth: true
    },
    redirect: '/posts/soup',
    component(resolve) {
        require.ensure(['views/posts/index.vue'], () => {
            resolve(require('views/posts/index.vue'));
        })
    },
    children: [{
            path: "/posts/soup",
            component(resolve) {
                require.ensure(['views/posts/soup/index.vue'], () => {
                    resolve(require('views/posts/soup/index.vue'));
                })
            },
            redirect: '/posts/soup/taintSoup1',
            children: [{
                    path: "/posts/soup/taintSoup1",
                    component(resolve) {
                        require.ensure(['views/posts/soup/taintSoup1/index.vue'], () => {
                            resolve(require('views/posts/soup/taintSoup1/index.vue'));
                        })
                    }
                },
                {
                    path: "/posts/soup/taintSoup2",
                    component(resolve) {
                        require.ensure(['views/posts/soup/taintSoup2/index.vue'], () => {
                            resolve(require('views/posts/soup/taintSoup2/index.vue'));
                        })
                    }
                },
            ]
        },
        {
            path: "/posts/essays",
            component(resolve) {
                require.ensure(['views/posts/essays/index.vue'], () => {
                    resolve(require('views/posts/essays/index.vue'));
                })
            },
            redirect: '/posts/essays/homeNews',
            children: [{
                    path: "/posts/essays/homeNews",
                    component(resolve) {
                        require.ensure(['views/posts/essays/homeNews/index.vue'], () => {
                            resolve(require('views/posts/essays/homeNews/index.vue'));
                        })
                    }
                },
                {
                    path: "/posts/essays/inernationalNews",
                    component(resolve) {
                        require.ensure(['views/posts/essays/inernationalNews/index.vue'], () => {
                            resolve(require('views/posts/essays/inernationalNews/index.vue'));
                        })
                    }
                },
                {
                    path: "/posts/essays/socialFocus",
                    component(resolve) {
                        require.ensure(['views/posts/essays/socialFocus/index.vue'], () => {
                            resolve(require('views/posts/essays/socialFocus/index.vue'));
                        })
                    }
                },
            ]
        },
        {
            path: "/posts/fiction",
            component(resolve) {
                require.ensure(['views/posts/fiction/index.vue'], () => {
                    resolve(require('views/posts/fiction/index.vue'));
                })
            },
            redirect: '/posts/fiction/historyFiction',
            children: [{
                    path: "/posts/fiction/historyFiction",
                    component(resolve) {
                        require.ensure(['views/posts/fiction/historyFiction/index.vue'], () => {
                            resolve(require('views/posts/fiction/historyFiction/index.vue'));
                        })
                    }
                },
                {
                    path: "/posts/fiction/scienceFiction",
                    component(resolve) {
                        require.ensure(['views/posts/fiction/scienceFiction/index.vue'], () => {
                            resolve(require('views/posts/fiction/scienceFiction/index.vue'));
                        })
                    }
                },
            ]
        },
        {
            path: "/posts/literature",
            component(resolve) {
                require.ensure(['views/posts/literature/index.vue'], () => {
                    resolve(require('views/posts/literature/index.vue'));
                })
            },
            redirect: '/posts/literature/third1',
            children: [{
                    path: "/posts/literature/third1",
                    component(resolve) {
                        require.ensure(['views/posts/literature/third1/index.vue'], () => {
                            resolve(require('views/posts/literature/third1/index.vue'));
                        })
                    }
                },
                {
                    path: "/posts/literature/poetry",
                    component(resolve) {
                        require.ensure(['views/posts/literature/poetry/index.vue'], () => {
                            resolve(require('views/posts/literature/poetry/index.vue'));
                        })
                    }
                },
            ]
        },

    ]
}