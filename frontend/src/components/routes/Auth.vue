<template> 
    <div class="registrationForm"> 
        <div>Авторизация</div> 
        <input type="email" v-model.trim="email"> 
        <ui-button @buttonClick="requestMagic(email)" /> 
    </div> 
</template> 
 
<script> 
import UiButton from '@/components/core-ui/UIButton.vue' 

import { mapActions } from 'vuex'
import store from '@/store'
 
export default { 
    data: function () { 
        return { 
            email: '' 
        } 
    }, 
    components: { 
        UiButton 
    }, 
    methods: mapActions([
        'requestMagic'
    ]),
    // vue-router
    beforeRouteEnter: async function (to, from, next) {
        const magic = to.params.magic

        if (magic) {
            await store.dispatch('authorize', magic)
            next({
                name: 'profile',
                params: {
                    id: store.state.userId
                }
            })
        } else {
            next()
        }
    }
} 
</script> 
 
<style lang='scss'> 
    @import '~@/global-styles/vars.sass'; 
 
 
</style>