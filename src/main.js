import Vue from 'vue'
import App from '@/components/App.vue'

import store from '@/store'
import router from '@/router'

import '@/global-styles/global.sass'

new Vue({
    el: '#app-root',
    store,
    router,
    render: h => h(App)
})