import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '@/store'

// route components
import Auth from '@/components/routes/Auth.vue'
import UserProfile from '@/components/routes/UserProfile.vue'
import ProjectPage from '@/components/routes/ProjectPage.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/auth/:magic/', component: Auth, meta: { noAuth: true }},
    { path: '/auth/', component: Auth, meta: { noAuth: true }},
    { path: '/', component: Auth, meta: { noAuth: true }},
    { path: '/user/:id/', component: UserProfile },
    { path: '/project/:id/', component: ProjectPage }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
    if (!to.matched.some(record => record.meta.noAuth)) {
        if (!store.getters.isAuthorized) {
            next({
                path: '/auth'
            })
        } else {
            next()
        }
    } else {
        next()
    }
})

export default router