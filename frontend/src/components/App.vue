<template>
    <div>
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