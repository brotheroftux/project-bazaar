<template>
    <button :class="className" @click = "$emit('buttonClick')"></button>
</template>

<script>
export default {
    props: ['className']
}
</script>

<style lang='scss'>
    @import '~@/global-styles/vars.sass';
    
    .authButton {
        color:blue;
    }

</style>