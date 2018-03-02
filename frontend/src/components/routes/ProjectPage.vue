<template>
    <div class="project-profile">
        <div class = 'info'>
             <div class="header">
                    <!-- photo here-->
                <div class='project-photo-overlay'>
                    <img class='project-photo' :src="project.project_photo">
                </div>
                <div class="text-info">
                    <div class="project-title">
                        {{project.title}}
                    </div>
                    <div class="project-type">
                        <div>
                            {{project.type_project}}
                        </div>
                    </div>
                    <div class="project-dates">
                        <div class="info-titles">
                            Реализация проекта: 
                        </div>
                        <div>
                            с {{project.date_start}} по {{project.date_finish}} год
                        </div>
                    </div>
                    <div class="project-organisation">
                        <div class="info-titles">
                            Организация: 
                        </div>
                        <div>
                            {{project.organisation}}
                        </div>
                    </div>
                    <div class="project-results">
                        <div class="info-titles">
                            Результаты: 
                        </div>
                        <div>
                            {{project.results}}
                        </div>
                    </div>
                   <div class="project-resources">
                        <div class="info-titles">
                            Ресурсы: 
                        </div>
                        <div>
                            {{project.resources}}
                        </div>
                    </div>
                </div>
            </div>
            <div class="description">
                <div class="description-header">
                    ОПИСАНИЕ ПРОЕКТА
                </div>
                <div class="description-text">
                    {{project.description_project}}
                </div>
            </div>
            <div class="team">
                <div class="team-header">
                    КОМАНДА
                </div>
                <!-- ЗАГЛУШКА, НУЖНО ЗАМЕНИТЬ НА РЕАЛЬНЫХ УЧАСТНИКОВ-->
                <div class="team-members">
                    <team-member v-for="member in roles" :key="member.id" :member="member" />
                    <div class="team-member">
                        <div class="team-member-photo" style="background-color:gray">

                        </div>
                        <div class="team-member-textinfo">
                            Вакантная роль в команде<br>
                            Задачи: тащить еще лучше<br>
                            <ui-button text="подать заявку на участие"></ui-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class = 'clouds'>
            <div class = 'interests'>
                <div>Интересы</div>
                    <tag-cloud :tags="interests"></tag-cloud> 
                </div>
            <div class = 'instruments'>
                <div>Инcтрументы</div>
                    <tag-cloud :tags="skills"></tag-cloud> 
                </div>
        </div>
    </div>
</template>

<script>
import store from '@/store'
import projectPage from '@/store/modules/projectPage'

import UiButton from '@/components/core-ui/UIButton.vue'
import TagCloud from '@/components/core-ui/TagCloud.vue'
import TeamMember from '@/components/TeamMember.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
    methods: mapActions('projectPage', [
        'getProjectData'
    ]),
    computed: {
        ...mapGetters('projectPage', [
            'skills',
            'interests',
            'project',
            'roles'
        ])
    },
    // vue-router
    beforeRouteEnter: function (to, from, next) {
        store.registerModule('projectPage', projectPage)

        store.dispatch('projectPage/getProjectData', to.params.id).then(next)
    },
    beforeRouteUpdate: function (to, from, next) {
        const userId = to.params.id
        
        this.getProjectData(userId)
        
        next()
    },
    beforeRouteLeave: function (to, from, next) {
        store.unregisterModule('projectPage')
        next()
    },
    components: {
        TagCloud,
        UiButton,
        TeamMember
    }
}
</script>

<style lang="scss" scoped>
    @import '~@/global-styles/vars.sass';

    .project-profile {
        display:flex;
        margin:auto;
        margin-top:50px;
        width:80%;
    }

    .info-titles {
        font-weight:bold;
    }

    .project-photo {
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

    .project-title{
        font-size: 1.5rem;
        color: $blue;
    }

    .team {
        display:flex;
        flex-direction: column;
    }
    
    .team-member {
        display:flex;
    }

    .team-members {
        display: flex;
        flex-direction: column;
    }

    .team-member-photo {
        background-color: $blue;
        height:80px;
        width:80px;
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

    .project-photo-overlay {
        display:flex;
        justify-content:center;
        align-items:center;
    }

    .description {
        display:flex;
        flex-direction: column;
    }

    .interests, .instruments {
        text-align:center;
    }
</style>
