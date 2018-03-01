import Vue from 'vue'
import VueRouter from 'vue-router'

// route components
import UserProfile from '@/components/routes/UserProfile.vue'
import ProjectPage from '@/components/routes/ProjectPage.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/user/:id/', component: UserProfile },
    { path: '/project/:id/', component: ProjectPage }
]

export default new VueRouter({
    mode: 'history',
    routes
})