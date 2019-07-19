<template>
    <div id="home">
        <TheHeader v-if="showHeader" />
        <router-view></router-view><!--页面渲染入口-->
        <TheFooter v-if="showFooter" />
    </div>
</template>

<script>
    import TheHeader from './TheHeader.vue'
    import TheFooter from './TheFooter.vue'
    import TheBread from './TheBread.vue'

    export default {
        //组件
        components: {
            TheHeader,
            TheFooter,
            TheBread
        },
        //外部数据
        props: [],
        //内部数据
        data() {
            return {}
        },
        //方法函数
        methods: {},
        //计算属性
        computed: {
            showHeader(){
                return this.$route.meta.showHeader === false ? false : true
            },
            showFooter(){
                return this.$route.meta.showFooter === false ? false : true
            }
        },
        //监视函数
        watch: {},
        //生命周期函数
        created() {
        },
        mounted() {
        },

    }
</script>

<style lang="less" rel="stylesheet/less">
    #home{
        overflow: auto;
        width: 100%;
        height: 100%;
    }
</style>
