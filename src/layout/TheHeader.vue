<template>
    <div>
        header
        <el-button @click="layout()">登出</el-button>
    </div>
</template>

<script>
    export default {
        //组件
        components: {},
        //外部数据
        props: [],
        //内部数据
        data() {
            return {}
        },
        //方法函数
        methods: {
            layout() {
                this.$store.dispatch('LogOut').then(() => {
                    location.reload();
                })
            },
        },
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
