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
        border-width: 1px;
        flex-wrap: wrap;
    }


</style>