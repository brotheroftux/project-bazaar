import Vue from 'vue'
import VueRouter from 'vue-router'

// route components
import UserProfile from '@/components/routes/UserProfile.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/user/:id/', component: UserProfile }
]

export default new VueRouter({
    mode: 'history',
    routes
})