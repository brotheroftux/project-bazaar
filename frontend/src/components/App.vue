<template>
    <div>
        <router-link to="/">
            Home
        </router-link>
        <router-link to="/project/1">
            ProjectPage
        </router-link>
        <router-link to="/project/2">
            Another project
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