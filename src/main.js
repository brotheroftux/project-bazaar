import Vue from 'vue'
import App from '@/components/App.vue'

import store from '@/store'

import '@/global-styles/global.sass'

new Vue({
    el: '#app-root',
    store,
    render: h => h(App)
})