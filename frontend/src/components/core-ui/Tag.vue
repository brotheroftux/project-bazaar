<template>
    <div class = 'tag'>
        {{ tagValue }}
    </div>
</template>

<script>
export default {
    props: ['tagValue'],
   
}
</script>

<style lang='scss'>
    @import '~@/global-styles/vars.sass';

    .tag {
        background-color: rgb(231, 231, 231);
        border-radius: 5px;
        border-style: solid;
        border-width: 1px;
        border-color: gray;
        padding: 3px;
        padding-left: 5px;
        padding-right: 5px;
        font-size: 0.8rem;
        display: inline-block;

    }


</style>