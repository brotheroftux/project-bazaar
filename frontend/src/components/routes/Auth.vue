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
    ])
} 
</script> 
 
<style lang='scss'> 
    @import '~@/global-styles/vars.sass'; 
 
 
</style>