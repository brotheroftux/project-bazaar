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

import Alert from './core-ui/Alert.vue'

export default {
    components: {
        Alert
    }
    
}
</script>

<style lang='scss'>
    @import '~@/global-styles/vars.sass';

</style>