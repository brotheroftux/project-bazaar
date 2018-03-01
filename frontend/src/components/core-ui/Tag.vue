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
        background-color: rgb(248, 248, 248);
        border-radius: 3px;
        border-style: solid;
        border-width: 1px;
        border-color: gray;
        box-shadow: 1px 2px 2px 1px rgb(202, 202, 202);
        padding: 6px;
        padding-left: 5px;
        padding-right: 5px;
        font-size: 0.8rem;
        display: inline-block;
        margin: 5px;
        flex-grow: 1;
        text-align: center; 
    }


</style>