<template>
    <div class = 'alert'>
        {{alertContent}}
    </div>
</template>

<script>


export default {
    props: ['alertContent', 'type'],
    
}

</script>

<style lang='scss'>
    @import '~@/global-styles/vars.sass';

    .alert {
        display: block;
        border-radius: 5px;
        position: absolute;
        padding: 10px;
        margin: auto;
        width: 200px;
        font-size: 0.8rem;
        background-color: rgb(197, 197, 197);
        border-style: solid;
        border-width: 1px;
        word-wrap: break-word;
    }

</style>