<template>
    <div class="user-profile">
        <div class="info">
            <div class="header">
    
                    <!-- photo here-->
                <img class = 'user-photo' src="https://upload.wikimedia.org/wikipedia/commons/d/de/Windows_live_square.JPG">
                
                <div class="text-info">
                    <div class="full-name">
                        
                        {{user.lastname}} {{user.firstname}} {{user.patronomic}}
                    </div>
                    <div class="education">
                        <!-- education icon here-->
                        <img src = "https://drive.google.com/drive/u/0/folders/1KRFH1630DzGwPG3rYn-XJXDHhiWSBNNJ">
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
                    <ui-button text='Связаться' class="connect"></ui-button>
                </div>
            </div>
           
            
        </div>



         <div class = 'clouds'>
            <div class = 'interests'>
                <div>Интересы</div>
                <tag-cloud :tags = 'user.interests'></tag-cloud> 

            </div>
            <div class = 'instruments'>
                <div>Инcтрументы</div>
                <tag-cloud :tags = 'user.skills'></tag-cloud> 

            </div>
            
        </div>
    </div>
</template>

<script>
import store from '@/store'
import userProfile from '@/store/modules/userProfile'
import TagCloud from '@/components/core-ui/TagCloud.vue'

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

    components: {
        UiButton,
        TagCloud
    }
    
}
</script>

<style lang="scss" scoped>
    @import '~@/global-styles/vars.sass';

    .user-profile {
        display:flex;
    }

    .user-photo {
        height:100%;
        width: 200px;
        margin-right: 20px;
        border-radius: 5px;

    }

    .info {
        display:flex;
        width: 70%;
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

        max-height:200px;
    }
    .clouds {
        display: flex;
        width: 30%;
        flex-direction: column;
    }

    .full-name{
        font-size: 1.5rem;
        color: $blue;
    }

    .connect{
        font-size: 1rem;
        color: white;
        background-color: $blue;
        border-radius: 5px;
    }
    
</style>
