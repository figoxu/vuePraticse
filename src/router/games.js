export default {
    path: "/games",
    meta: {
        requiresAuth: true
    },
    redirect: '/games/action',
    component(resolve) {
        require.ensure(['views/games/index.vue'], () => {
            resolve(require('views/games/index.vue'));
        })
    },
    children: [{
            path: "/games/action",
            component(resolve) {
                require.ensure(['views/games/action/index.vue'], () => {
                    resolve(require('views/games/action/index.vue'));
                })
            },
            redirect: '/games/action/godOfWar',
            children: [{
                    path: "/games/action/godOfWar",
                    component(resolve) {
                        require.ensure(['views/games/action/godOfWar/index.vue'], () => {
                            resolve(require('views/games/action/godOfWar/index.vue'));
                        })
                    }
                },
                {
                    path: "/games/action/hunter",
                    component(resolve) {
                        require.ensure(['views/games/action/hunter/index.vue'], () => {
                            resolve(require('views/games/action/hunter/index.vue'));
                        })
                    }
                },
                {
                    path: "/games/action/GTA5",
                    component(resolve) {
                        require.ensure(['views/games/action/GTA5/index.vue'], () => {
                            resolve(require('views/games/action/GTA5/index.vue'));
                        })
                    }
                },
            ]
        },
        {
            path: "/games/shooting",
            component(resolve) {
                require.ensure(['views/games/shooting/index.vue'], () => {
                    resolve(require('views/games/shooting/index.vue'));
                })
            },
            redirect: '/games/shooting/callOfDuty',
            children: [{
                    path: "/games/shooting/callOfDuty",
                    component(resolve) {
                        require.ensure(['views/games/shooting/callOfDuty/index.vue'], () => {
                            resolve(require('views/games/shooting/callOfDuty/index.vue'));
                        })
                    }
                },
                {
                    path: "/games/shooting/BandOfBrothers",
                    component(resolve) {
                        require.ensure(['views/games/shooting/BandOfBrothers/index.vue'], () => {
                            resolve(require('views/games/shooting/BandOfBrothers/index.vue'));
                        })
                    }
                },
                {
                    path: "/games/shooting/MGS",
                    component(resolve) {
                        require.ensure(['views/games/shooting/MGS/index.vue'], () => {
                            resolve(require('views/games/shooting/MGS/index.vue'));
                        })
                    }
                },
            ]
        },
        {
            path: "/games/strategy",
            component(resolve) {
                require.ensure(['views/games/strategy/index.vue'], () => {
                    resolve(require('views/games/strategy/index.vue'));
                })
            },
            redirect: '/games/strategy/redAlert',
            children: [{
                    path: "/games/strategy/redAlert",
                    component(resolve) {
                        require.ensure(['views/games/strategy/redAlert/index.vue'], () => {
                            resolve(require('views/games/strategy/redAlert/index.vue'));
                        })
                    }
                },
                {
                    path: "/games/strategy/earchEmpire",
                    component(resolve) {
                        require.ensure(['views/games/strategy/earchEmpire/index.vue'], () => {
                            resolve(require('views/games/strategy/earchEmpire/index.vue'));
                        })
                    }
                },
                {
                    path: "/games/strategy/warcraft",
                    component(resolve) {
                        require.ensure(['views/games/strategy/warcraft/index.vue'], () => {
                            resolve(require('views/games/strategy/warcraft/index.vue'));
                        })
                    }
                },
            ]
        },

    ]
}