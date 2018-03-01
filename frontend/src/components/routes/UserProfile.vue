<template>
    <div class="user-profile">

    </div>
</template>

<script>
import store from '@/store'

export default {
    beforeRouteEnter: function (to, from, next) {

        next()
    },
    beforeRouteUpdate: function (to, from, next) {
        const userId = to.params.id


        next()
    }
}
</script>

<style lang="scss" scoped>

</style>
