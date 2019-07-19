<template>
    <div class="fd-banner">
        <div class="fd-content">
            <p class="fd-size-16">internet  service</p>
            <p class="fd-size-50 fd-bold">网上保全系统</p>
            <p class="fd-size-26">
                <span>高效</span>
                <span>专业</span>
                <span>一站式保全服务平台</span>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "banner"
    }
</script>

<style lang="less" rel="stylesheet/less">
    @import "../../style/common";
    .fd-banner{
        position: relative;
        height: 250px;
        //background: #ccc url("../../../static/img/bg-banner.png") no-repeat center / 100% 100%;
        background: #ccc;
        .fd-content{
            .el-center;
            padding-left: 10%;
            height: 130px;
            color: #fff;
            .fd-size-26{
                margin-top: 10px;
            }
        }
    }
</style>