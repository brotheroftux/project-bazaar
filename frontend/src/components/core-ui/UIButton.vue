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
        background-color:#015387;;
        flex-grow:1;
        min-width: 140px;
        font-weight: 400;
        font-size: 14px;
        color:#fff;
        transition: all .2s linear;
        text-decoration: none;
        border-width:0px;
    }

    .connect{
        padding:5px;
        margin-top: 10px;
        font-size: 1rem;
        color: white;
        background-color: $blue;
        border-radius: 1px;
        width: 100%;
    }

    .about-tab {
        background-color: #fff;
        outline: none;
        border-style: none;
        font-size: 1.2rem;
        margin: 7px;
        color: #888;
        transition: all .2s linear;
    }

    .about-tab:hover {
        color:#444;
        text-decoration: underline;
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