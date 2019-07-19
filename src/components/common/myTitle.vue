<template>
    <div class="my-title">
        <h3>{{theTitle}}</h3><!--<span class="fd-btn-add">+ 添加</span>-->
    </div>
</template>

<script>
    export default {
        name: "fromTitle",
        props: ['theTitle']
    }
</script>

<style lang="less" rel="stylesheet/less">
    @import "../../style/common";
    .my-title{
        box-sizing: border-box;
        padding-top: 12px;
        height: 44px;
        border-bottom: 1px solid #f5f5f5;
        h3{
            display: inline-block;
            padding-left: 5px;
            width: 110px;
            height: 20px;
            line-height: 20px;
            font-size: 16px;
            font-weight: normal;
            border-left: 4px solid @color-basic;
        }
    }
</style>