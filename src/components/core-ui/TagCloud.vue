<template>
    <div class = 'tags-cloud'>
        <tag v-for = '(tag, index) in tags' :key = 'index'>{{tags}}</tag>
    <div>

</template>

<script>
import Tag from './Tag'

export default {
    props: ['tags'],
}
</script>

<style lang='scss' scoped>
    @import '~@/global-styles/vars.sass';

    .tag-cloud {
        display: flex;
        padding : 5px;
        width: 300px;
        border-width: 1px;
    }


</style>