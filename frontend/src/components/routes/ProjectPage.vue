<template>
    <div class="project-page">

    </div>
</template>

<script>
import store from '@/store'
import projectPage from '@/store/modules/projectPage'

import { mapActions } from 'vuex'

export default {
    methods: mapActions('projectPage', [
        'getProjectData'
    ]),
    // vue-router
    beforeRouteEnter: function (to, from, next) {
        store.registerModule('projectPage', projectPage)

        store.dispatch('projectPage/getProjectData', to.params.id).then(next)
    },
    beforeRouteUpdate: function (to, from, next) {
        const userId = to.params.id
        
        this.getProjectData(userId)
        
        next()
    },
    beforeRouteLeave: function (to, from, next) {
        store.unregisterModule('projectPage')
        next()
    }
}
</script>

<style lang="scss" scoped>

</style>
