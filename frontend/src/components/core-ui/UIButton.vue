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

    .about-tab {
        background-color: #fff;
        outline: none;
        border-style: none;
        font-size: 1.2rem;
        margin: 7px;
        color: #888;
    }
    .about-tab-active {
        background-color: #fff;
        outline: none;
        border-style: none;
        font-size: 1.2rem;
        margin: 7px;
        color:#444;
        text-decoration: underline;
    }

</style>