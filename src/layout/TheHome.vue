<template>
    <div class="home">
        <TheHeader/>
        <div class="left-fixed-right-auto">
            <div class="content_page">
                <div class="content">
                    <TheBread/>
                    <router-view></router-view><!--页面渲染入口-->
                </div>
            </div>
        </div>
        <TheFooter/>
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
        computed: {},
        //监视函数
        watch: {},
        //生命周期函数
        created() {
        },
        mounted() {
        },

    }
</script>

<style lang="less" rel="stylesheet/less" scoped>

</style>
