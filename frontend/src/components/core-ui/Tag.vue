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
    //    background-color:#fafafa;
        border-radius: 3px;
        border-style: solid;
        border-width: 1px;
        border-color: #888;
       // box-shadow: 1px 2px 2px 1px rgb(202, 202, 202);
        color:#444;
        padding: 6px;
        font-size: 0.9em;
        display: inline-block;
        margin: 5px;
        flex-grow: 1;
        text-align: center; 
    }


</style>