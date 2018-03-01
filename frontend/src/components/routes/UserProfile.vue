<template>
    <div class="user-profile">

    </div>
</template>

<script>
import store from '@/store'
import userProfile from '@/store/modules/userProfile'

import { mapActions } from 'vuex'

export default {
    methods: mapActions('userProfile', [
        'getUserProfile'
    ]),
    // vue-router
    beforeRouteEnter: function (to, from, next) {
        store.registerModule('userProfile', userProfile)

        store.dispatch('userProfile/getUserProfile', to.params.id).then(next)
    },
    beforeRouteUpdate: function (to, from, next) {
        const userId = to.params.id
        
        this.getUserProfile(userId)
        
        next()
    },
    beforeRouteLeave: function (to, from, next) {
        store.unregisterModule('userProfile')
        next()
    }
}
</script>

<style lang="scss" scoped>

</style>
