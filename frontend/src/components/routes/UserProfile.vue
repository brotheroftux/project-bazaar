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
             <div class="tabs">
                <div class="tabsList">
                    <ui-button text="О себе" @buttonClick=makeActive(1)>
                    </ui-button>
                    <ui-button text="Опыт работы" @buttonClick=makeActive(2)>
                       
                    </ui-button>
                    <ui-button text="Образование" @buttonClick=makeActive(3)>
                       
                    </ui-button>
                    <ui-button text="Награды" @buttonClick=makeActive(4)>
                       
                    </ui-button>
                    <ui-button text="Публикации" @buttonClick=makeActive(5)>
                       
                    </ui-button>
                </div>
                <div v-if='activeTab==1'>{{user.about}}</div>
            </div>
            <div class = "userProjects">
                <user-project-card v-for="userProject in user.projects" :key="userProject.id" :userProjectCard="userProject">
                </user-project-card>
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
import UserProjectCard from '@/components/core-ui/UserProjectCard.vue'
export default {
    computed: mapState('userProfile', [
        'user'
    ]),
    methods: {
        ...mapActions('userProfile', [
            'getUserProfile'    
        ]),
        makeActive: function (id) {
            this.activeTab = id
        }
    },
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
    data: function () {
        return {
            activeTab: 1
        }
    },
 
    components: {
        UiButton,
        UserProjectCard,
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
        width: 200px;
        margin-right: 20px;
        border-radius: 5px;
    }

    .info {
        display:flex;
        flex-direction:column;
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

    .userProjects {
        width:100%;
        display:flex;
        background-color:whitesmoke;
        min-height: 100px;
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
