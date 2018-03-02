<template>
    <div class="team-member">
        <div class="team-member-photo">
            <div v-if="member.user" class="photo-overlay">
                <img :src="member.user.user_photo">
            </div>
            <div v-else class="photo-mock">ФОТО</div>
        </div>
        <div class="team-member-textinfo">
            <div class="member-title">{{member.title}}</div>
            <div class="member-title" v-if="member.user">
                <router-link :to="'/user/' + member.id_user">
                    {{ member.user.first_name }} {{ member.user.last_name }}
                </router-link>
            </div>
            <div class="cutted-description">{{cutedDescription}}</div>
        </div>
    </div>
</template>

<script>

export default {
    props: ['member'],
    computed: {
        cutedDescription: function () {
            return this.member.description.substr(0,400)
        },
    }
}
</script>

<style lang='scss'>
    @import '~@/global-styles/vars.sass';

    .team-member {
        display:flex;
        margin:10px;
        margin-left:0px;
    }

    .member-title {
        font-size:1rem;
        font-weight:bold;
        margin-bottom:10px;
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

    .team-member-photo {
        display:flex;
        justify-content:center;
        align-items:center;
        margin:0px 20px 0px 0;
        height: 100%;

    }

    .photo-overlay, .photo-mock {
        height:80px;
        width:80px;
        display:flex;
        justify-content:center;
        align-items:center;
    }

    .photo-overlay img {
        width: 100%
    }

    .photo-mock {
        background-color:$blue;
        color:white;
        font-weight:500;
    }
</style>
