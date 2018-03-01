<template>
    <div>
<<<<<<< Updated upstream
        <router-link to="/user/1">
            UserProfile component
        </router-link>
        <router-view />
=======
        Hello
        <alert> </alert>
>>>>>>> Stashed changes
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