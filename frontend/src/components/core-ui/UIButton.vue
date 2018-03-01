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
        background-color: white;
        outline: none;
        border-style: none;
        font-size: 1rem;
        margin: 5px;
        color:grey;
    }
    .about-tab-active {
        background-color: white;
        outline: none;
        border-style: none;
        font-size: 1rem;
        margin: 5px;
        color: black;
        text-decoration: underline;
    }

</style>