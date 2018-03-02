<template> 
    <div class="registrationForm">
        <div class="image-overlay">
            <img src="https://image.flaticon.com/icons/png/512/262/262812.png">
        </div>
        <div class="auth-overlay"> 
            <div class="welcome">Welcome back<br>to bazaar!</div>
            <div class="input-auth">
                <input placeholder = "Enter your email" class="input-email" type="email" v-model.trim="email"> 
                <ui-button className="authButton" text="Send Magic Link" @buttonClick="requestMagic(email)" /> 
            </div>
        </div>
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
    .auth-overlay {
        margin:40px;
        display:flex;
        flex-direction: column;
        text-align:center;
        align-items: center;
        justify-content: center;
    }

    .registrationForm {
        height:100vh;
        display:flex;
        text-align:center;
        align-items: center;
        justify-content: center;
    }
 
    .welcome {
        margin-bottom:40px;
        font-size:4rem;
        color:#444;
    }
    .image-overlay img{
        height:400px;
    }

    .input-email {
        width:100%;
        height:24px;    
        font-weight: 400;
        font-size: 16px;
        color: #44484f;
        letter-spacing: 0;
        padding: 13px 15px;
        border-radius: 4px 0 0 4px;
        background:#f8f9fc;
        border:1px solid #dee3eb;
        transition: all .2s linear;
        box-shadow: none;
    }

    .input-email:focus {
        outline: none;
        background: #fff;
        -webkit-box-shadow: inset 0 0 0 2px rgba(141,97,223,.2);
        box-shadow: inset 0 0 0 2px rgba(141,97,223,.2);
        border: 1px solid #015387;
        border-radius: 4px;
    }

    .input-auth {
        width:100%;
        display:flex;
    }
</style>