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
                        <img class="education--icon" src = "http://pm-pu.ru/pb/svg/school.svg">
                        <div class="education--text">
                            {{user.education.qualification}}, {{user.education.degree}}, {{user.education.university}}
                        </div>
                    </div>
                    <div :v-if="user.work" class="work">
                        <img class="work--icon" src = "http://pm-pu.ru/pb/svg/business.svg">
                        <div class="work--text">
                            {{user.work.position}}, {{user.work.company}}
                        </div>
                    </div>
                    <div class="email">
                        <img class="email--icon" src = "http://pm-pu.ru/pb/svg/email.svg">
                        <div class="email--text">
                        {{user.email}}
                        </div>
                    </div>
                    <!-- need to add buttonClick Handler-->
                    <ui-button text='Связаться' className="connect"></ui-button>

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
                    <div class="about-user" v-if='activeTab==1'>{{user.about}}</div>
                </div>
            <div class='inform-panel'>
                <div class = "userProjects">
                    <user-project-card v-for="userProject in roles" :key="userProject.id" :userProjectCard="userProject">
                    </user-project-card>
                </div>
            </div>
        </div>
        <div class = 'clouds'>
            <div class = 'interests'>
                <div class='interests-title'>Интересы</div>
                <tag-cloud :tags = 'user.interests'></tag-cloud> 
            </div>
            <div class = 'instruments'>
                <div class='interests-title'>Инcтрументы</div>
                <tag-cloud :tags = 'user.skills'></tag-cloud> 
            </div>
        </div>
    </div>
</template>

<script>
import store from '@/store'
import userProfile from '@/store/modules/userProfile'
import TagCloud from '@/components/core-ui/TagCloud.vue'
 

 
import { mapGetters, mapActions } from 'vuex'
 
import UiButton from '@/components/core-ui/UIButton.vue'
import UserProjectCard from '@/components/core-ui/UserProjectCard.vue'
export default {
    computed: mapGetters('userProfile', [
        'user',
        'roles'
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

    .about-user{
        line-height:1.5em;
        color: #444;
        text-align: justify;
         margin: 10px 15px 15px 20px;
    }

    .user-photo {
        height:200px;
        margin: 20px;
        border-radius: 3px;
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
        margin: 20px 10px;
        flex-direction:column;
        justify-content: space-between;
    }
    
    .header {
        display:flex;
        min-height:200px;
        margin:0 15px 10px 15px;
        background-color: #fff;
      //  border: 1px solid #aaa;
     //   border-radius: 3px; 
     //   box-shadow: 1px 2px 0 0 #ddd;

        border-bottom: 2px solid #dee3eb;
    }

    .inform-panel{
        background-color: #f8f9fc;
        border: 1px solid #dee3eb;
     //   border: 1px solid #aaa;
        margin: 10px 15px 10px 15px;
        border-radius: 3px;
   //     box-shadow: 1px 2px 0px 0px #ddd;
    }

    .userProjects {
        width:100%;
    
        display:flex;
        min-height: 100px;
    }

    .interests-title{
        margin:12px;
        font-size: 1.3em;
        color: $blue;
    }

    .instruments, .interests {
        text-align:center;
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
        font-size: 1.1em;
        color: white;
        background-color: $blue;
        border-radius: 5px;
        padding: 4px;
        border: 0;
    }
    
    .tabs{
        margin: 10px 15px 15px 20px;
    }

    .tabsList {
        display:flex;
        margin-bottom:3px;
        justify-content: space-between;
        flex-wrap:wrap;
    }

    .user-photo-container {
        display:flex;
        justify-content:center; 
        align-items:center;
    }

    .education, .work, .email {
        display: flex;
        justify-content: start;
        flex-direction: wrap;
        align-items: center;
    }

    .education--icon, .work--icon, .email--icon {
        width: 25px;
        margin: 0 10px 0 0;
        color: red;
    }
</style>
