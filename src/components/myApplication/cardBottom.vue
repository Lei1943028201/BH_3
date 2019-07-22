<template>
    <ul class="fd-card-bottom">
        <li>
            <p class="fd-text-small">保单号-0287419638552</p>
            <p class="fd-text-small">北京第三中级人民法院</p>
            <p class="fd-text-small">申请人：李源洪</p>
        </li>
        <li class="fd-ul-li-btn-content">
            <el-button type="primary">立即缴费</el-button><br/>
            <span class="fd-text-small fd-link-detail" @click="handlerDetail()">查看详情<i class="el-icon-d-arrow-right"></i></span>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "cardBottom",
        methods: {
            handlerDetail(){
                this.$router.push('/index/applyPreservation/preservationInformation')
            }
        },
    }
</script>

<style lang="less" rel="stylesheet/less">
    .fd-card-bottom{
        width: 100%;
        li{
            float: left;
            width: 50%;
        }
        .fd-ul-li-btn-content{
            text-align: right;
        }
    }
</style>