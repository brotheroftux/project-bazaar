<template>
    <button :class="className" @click = "$emit('buttonClick')">{{text}}</button>
</template>

<script>
export default {
    props: ['className', 'text']
}
</script>

<style lang='scss'>
    @import '~@/global-styles/vars.sass';
    
    .authButton {
        color:blue;
    }

</style>