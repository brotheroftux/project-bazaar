<template>
    <div class="user-profile">
        <div class="info">
            <div class="header">
                <div class="user-photo">
                    <!-- photo here-->
                    <img style="height:100%" src="https://upload.wikimedia.org/wikipedia/commons/d/de/Windows_live_square.JPG">
                </div>
                <div class="text-info">
                    <div class="fullName">
                         {{user.lastname}} {{user.firstname}} {{user.patronomic}}
                    </div>
                    <div class="education">
                        <!-- education icon here-->
                        <div>
                            {{user.education.qualification}}, {{user.education.degree}}, {{user.education.university}}
                        </div>
                    </div>
                    <div class="work">
                        <!-- work icon here-->
                        <div>
                            {{user.work.position}}, {{user.work.company}}
                        </div>
                    </div>
                    <div class="email">
                        {{user.email}}
                    </div>
                    <!-- need to add buttonClick Handler-->
                    <ui-button text="Связаться" class="connect"></ui-button>
                </div>
            </div>
            <div class="tabs">

            </div>
        </div>
        <div class="skills">

        </div>
    </div>
</template>

<script>
import store from '@/store'
import userProfile from '@/store/modules/userProfile'

import { mapState, mapActions } from 'vuex'

import UiButton from '@/components/core-ui/UIButton.vue'
export default {
    computed: mapState('userProfile', [
        'user'
    ]),
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
    },
    // data: function () { 
    //     return { 
    //         user: {
    //             lastname:'Панасовец',
    //             firstname:'Вячеслав',
    //             patronomic:'Викторович',
    //             education : {
    //                 qualification: 'Нубас'
    //             },
    //             work : {

    //             }
    //         }
    //     }
    // },

    components: {
        UiButton
    }
    
}
</script>

<style lang="scss" scoped>

    .user-profile {
        display:flex;
    }

    .user-photo {
        height:100%;
    }

    .info {
        display:flex;
    }

    .skills {
        display:flex;
    }

    .text-info {
        display:flex;
        flex-direction:column;
        justify-content: space-around;
    }
    
    .header {
        display:flex;

        max-height:100px;
    }
</style>
