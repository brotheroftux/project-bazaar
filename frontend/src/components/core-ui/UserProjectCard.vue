<template>
    <div class="userProjectCard">
        <div @click="changeSide"  class="cardSide" v-if='activeSide==0'>
            <div class="title">{{userProjectCard.project.title}}</div>
            <div class="role">{{userProjectCard.title}}</div>
            <ui-button @buttonClick="changeSide" text="Подробнее" class="changeCardSide"></ui-button>
        </div>

        <div @click="changeSide" class="cardSide" v-if='activeSide==1'>
            <div class="projectFullInfo">
                <ui-button @buttonClick="changeSide" text="Кратко" class="changeCardSide"></ui-button>
            </div>
        </div>
    </div>
</template>

<script>
import UiButton from '@/components/core-ui/UIButton.vue'

export default {
    props: ['userProjectCard'],
    data: function () { 
        return { 
            activeSide: 0
        }
    },
    components: {
        UiButton
    },
    methods: {
        changeSide: function() {
            this.activeSide=(this.activeSide+1)%2
        }
    }
}
</script>

<style lang='scss'>
    @import '~@/global-styles/vars.sass';

    .userProjectCard {
        width:250px;
        margin:20px;
        background-color: #fff;
        min-height:220px;
        border-radius: 3px;
    }

    .title {
        font-size:1.2em;
       // font-weight:bold;
        text-align:center;
        color: $blue;
        margin: 15px;
    }

    .role {
        font-size:1em;
        color:#444;
        font-family: Roboto;
    }

    .cardSide {
        height:100%;
        width:100%;
        display:flex;
        
        flex-direction:column;
        justify-content:space-around;
        align-items:center;
        cursor:pointer;
    }

</style>