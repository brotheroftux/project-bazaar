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
        //box-shadow: 1px 1px 1px 1px #015387;
        //opacity:.7;
        display: inline-block;
        margin: 5px;
        flex-grow: 1;
        text-align: center; 
        font-weight: 400;
        font-size: 16px;
        color: #44484f;
        letter-spacing: 0;
        padding: 7px 7px;
        border-radius: 4px 4px 4px 4px;
        background: #f8f9fc;
        border: 1px solid #dee3eb;
        transition: all .2s linear;
        box-shadow: none;
        //background-color:#015387;
    }

    .tag:hover {
        background : rgb(163, 197, 255);
    }


</style>