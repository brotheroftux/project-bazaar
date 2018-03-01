<template>
    <div>
        <router-link to="/">
            Home
        </router-link>
        <router-link to="/user/1">
            UserProfile component
        </router-link>
        <router-link to="/user/2">
            Another user
        </router-link>
        <router-view />
    </div>
</template>

<script>
export default {

}
</script>

<style lang='scss'>
    @import '~@/global-styles/vars.sass';

</style>