<template> 
    <div class = "registrationForm"> 
        <div>Авторизация</div> 
        <input type = "email" v-model.trim="email"> 
        <ui-button @buttonClick = "sendAuth"></ui-button> 
    </div> 
</template> 
 
<script> 
import UiButton from '@/components/core-ui/UIButton.vue' 
 
export default { 
    data: function () { 
        return { 
            email: '' 
        } 
    }, 
    components: { 
        UiButton 
    }, 
    methods: { 
        sendAuth(email) { 
            let state = this.$store.dispatch('sendAuth', email) 
            if (state == true) { 
                state = 1 
            } 
            else { 
                state = 0 
            } 
        } 
    } 
} 
</script> 
 
<style lang='scss'> 
    @import '~@/global-styles/vars.sass'; 
 
 
</style>