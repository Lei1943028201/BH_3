<template>
    <ul class="fd-card-middle clear">
        <li>
            <span class="fd-text-medium fd-bold">2018-09-29</span><br/>
            <span class="fd-text-small">申请时间</span>
        </li>
        <li>
            <span class="fd-text-medium fd-bold">2200</span><br/>
            <span class="fd-text-small">保全数额</span>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "cardItem"
    }
</script>

<style lang="less" rel="stylesheet/less">
    .fd-card-middle{
        width: 100%;
        margin: 40px 0;
        li{
            float: left;
            margin: 10px 0;
            width: 50%;
        }
    }
</style>