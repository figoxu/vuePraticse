export default {
    path: "/elementUi",
    meta: {
        requiresAuth: true
    },
    redirect: '/elementUi/table',
    component(resolve) {
        require.ensure(['views/elementUi/index.vue'], () => {
            resolve(require('views/elementUi/index.vue'));
        })
    },
    children: [{
        path: "/elementUi/table",
        component(resolve) {
            require.ensure(['views/elementUi/table/index.vue'], () => {
                resolve(require('views/elementUi/table/index.vue'));
            })
        }
        , redirect: '/elementUi/table/doc'
        , children: [
            {
                path: "/elementUi/table/basic",
                component(resolve) {
                    require.ensure(['views/elementUi/table/basic.vue'], () => {
                        resolve(require('views/elementUi/table/basic.vue'));
                    })
                }
            },
            {
                path: "/elementUi/table/doc",
                component(resolve) {
                    require.ensure(['views/elementUi/table/doc.vue'], () => {
                        resolve(require('views/elementUi/table/doc.vue'));
                    })
                }
            },
            {
                path: "/elementUi/table/stripe",
                component(resolve) {
                    require.ensure(['views/elementUi/table/stripe.vue'], () => {
                        resolve(require('views/elementUi/table/stripe.vue'));
                    })
                }
            },
            {
                path: "/elementUi/table/border",
                component(resolve) {
                    require.ensure(['views/elementUi/table/border.vue'], () => {
                        resolve(require('views/elementUi/table/border.vue'));
                    })
                }
            },
            {
                path: "/elementUi/table/state",
                component(resolve) {
                    require.ensure(['views/elementUi/table/state.vue'], () => {
                        resolve(require('views/elementUi/table/state.vue'));
                    })
                }
            },
            {
                path: "/elementUi/table/fixHeader",
                component(resolve) {
                    require.ensure(['views/elementUi/table/fixHeader.vue'], () => {
                        resolve(require('views/elementUi/table/fixHeader.vue'));
                    })
                }
            },
            {
                path: "/elementUi/table/fixColumn",
                component(resolve) {
                    require.ensure(['views/elementUi/table/fixColumn.vue'], () => {
                        resolve(require('views/elementUi/table/fixColumn.vue'));
                    })
                }
            },
            {
                path: "/elementUi/table/fixHeaderCloumn",
                component(resolve) {
                    require.ensure(['views/elementUi/table/fixHeaderCloumn.vue'], () => {
                        resolve(require('views/elementUi/table/fixHeaderCloumn.vue'));
                    })
                }
            },
            {
                path: "/elementUi/table/flowHeight",
                component(resolve) {
                    require.ensure(['views/elementUi/table/flowHeight.vue'], () => {
                        resolve(require('views/elementUi/table/flowHeight.vue'));
                    })
                }
            },
            {
                path: "/elementUi/table/multiHeader",
                component(resolve) {
                    require.ensure(['views/elementUi/table/multiHeader.vue'], () => {
                        resolve(require('views/elementUi/table/multiHeader.vue'));
                    })
                }
            }
        ]
    }
    ,{
        path: "/elementUi/form",
        component(resolve) {
            require.ensure(['views/elementUi/form/index.vue'], () => {
                resolve(require('views/elementUi/form/index.vue'));
            })
        }
        , redirect: '/elementUi/form/basic'
        , children: [
            {
                path: "/elementUi/form/basic",
                component(resolve) {
                    require.ensure(['views/elementUi/form/basic.vue'], () => {
                        resolve(require('views/elementUi/form/basic.vue'));
                    })
                }
            }
        ]

    }]
}