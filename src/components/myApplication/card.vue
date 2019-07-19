<template>
    <div class="fd-card-main">
        <span class="fd-btn-del">删除</span>
        <CardTop/>
        <CardMiddle/>
        <CardBottom/>
    </div>
</template>

<script>
    import CardTop from './cardTop'
    import CardMiddle from './cardMiddle'
    import CardBottom from './cardBottom'
    export default {
        name: "card",
        components: {
            CardTop,
            CardMiddle,
            CardBottom,
        }
    }
</script>

<style lang="less" rel="stylesheet/less">
    @import "../../style/common";
    .fd-card-main{
        box-sizing: border-box;
        position: relative;
        display: inline-block;
        width: 500px;
        height: 445px;
        margin: 10px;
        padding: 50px 40px;
        background: #fff;
        color: #333;
        text-align: left;
        &:hover{
            box-shadow: 0 0 20px #ccc;
            transition: box-shadow .3s
        }
        &:hover>.fd-btn-del{
            display: inline-block !important;

        }
    }
    .fd-btn-del{
        position: absolute;
        top: 0;
        right: 0;
        display: none;
        width: 80px;
        height: 30px;
        background: #7d7d7d;
        font-size: 16px;
        color: #fff;
        line-height: 30px;
        text-align: center;
        cursor: pointer;
    }
    .fd-link-detail{
        color: @color-basic;
        cursor: pointer;
    }
    .fd-text-small{
        font-size: 16px;
        line-height: 25px;
    }
    .fd-text-medium{
        font-size: 22px;
        line-height: 25px;
    }
    .fd-text-title{
        font-size: 30px;
        line-height: 45px;
    }
    .fd-text-label{
        display: inline-block;
        margin-left: 10px;
        padding: 0 10px;
        height: 18px;
        background: @color-basic;
        font-size: 12px;
        line-height: 18px;
        color: #fff;
        border-radius: 5px;
    }
</style>