<template>
    <div class="userProjectCard">
        <div class="cardSide" v-if='activeSide==0'>
            <div class="title">{{userProjectCard.title}}</div>
            <div class="role">{{userProjectCard.role.title}}</div>
            <ui-button @buttonClick="changeSide" text="Подробнее" class="changeCardSide"></ui-button>
        </div>
        <div class="cardSide" v-if='activeSide==1'>
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
        box-shadow: 1px 2px 7px 1px #aaa;
        margin:20px;
        padding:10px;
        min-height:220px;
        width:220px;
    }

    .title {
        font-size:1rem;
        font-weight:bold;
        text-align:center;
    }

    .role {
        font-size:0.9rem;
    }

    .cardSide {
        height:100%;
        width:100%;
        display:flex;
        flex-direction:column;
        justify-content:space-around;
        align-items:center;
    }
</style>