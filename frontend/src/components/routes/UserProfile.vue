<template>
    <div class="user-profile">
        <div class="info">
            <div class="header">
                    <!-- photo here-->
                <div class='user-photo-overlay'>
                    <img class='user-photo' :src="user.user_photo">
                </div>
                <div class="text-info">
                    <div class="full-name">
                        {{user.last_name}} {{user.first_name}} {{user.patronomic}}
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
                    <ui-button :className="activeTab==1?'about-tab-active':'about-tab'" text="О себе" @buttonClick=makeActive(1)>
                    </ui-button>
                    <ui-button :className="activeTab==2?'about-tab-active':'about-tab'" text="Опыт работы" @buttonClick=makeActive(2)>
                    
                    </ui-button>
                    <ui-button :className="activeTab==3?'about-tab-active':'about-tab'" text="Образование" @buttonClick=makeActive(3)>
                    
                    </ui-button>
                    <ui-button :className="activeTab==4?'about-tab-active':'about-tab'" text="Награды" @buttonClick=makeActive(4)>
                    
                    </ui-button>
                    <ui-button :className="activeTab==5?'about-tab-active':'about-tab'" text="Публикации" @buttonClick=makeActive(5)>
                    
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
        margin:auto;
        margin-top:50px;
        width:80%;
    }

    .user-photo {
        width:100%;
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
        justify-content: space-between;
    }
    
    .header {
        display:flex;
        min-height:200px;
        margin-bottom:1rem;
    }

    .userProjects {
        width:100%;
        display:flex;
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
    
    .tabsList {
        display:flex;
        margin-bottom:3px;
    }

    .user-photo-overlay {
        display:flex;
        justify-content:center;
        align-items:center;
    }
</style>
