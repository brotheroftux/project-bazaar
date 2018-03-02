<template>
    <div class = 'tags-cloud'>
        <tag v-for = '(tag, index) in tags' :key = 'index' :tag-value = 'tag' ></tag>
    </div>

</template>

<script>

import Tag from '@/components/core-ui/Tag.vue'

export default {
    props: ['tags'],
    components: {
        Tag
    }
}
</script>

<style lang='scss' scoped>
    @import '~@/global-styles/vars.sass';

    .tags-cloud {
        display: flex;
        padding : 5px;
        width: 100%;
        border-radius: 2px;
        flex-wrap: wrap;
        background-color: #fff;
    //    border: 1px solid #aaa;
        border-radius: 3px; 
    //    box-shadow: 1px 2px 0 0 #ddd;
    }

     .clouds {
        display: flex;
        width: 30%;
        flex-direction: column;
    }


</style>