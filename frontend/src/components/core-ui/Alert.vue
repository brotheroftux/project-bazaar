<template>
    <div class = 'alert'>
        {{alertContert}}
    </div>
</template>

<script>


export default {
    props: ['alertContert'],
    
}
</script>

<style lang='scss'>
    @import '~@/global-styles/vars.sass';

    .alert {
        display: block;
        border-radius: 5px;
        position: absolute;
        padding: 10px;
        width: 200px;
        font-size: 0.8rem;
        background-color: rgb(197, 197, 197);
        border-style: solid;
        border-width: 1px;
        word-wrap: break-word;
    }

</style>