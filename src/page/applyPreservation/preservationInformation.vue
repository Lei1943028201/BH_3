<template>
    <div id="applyPreservation">
        <SideBar/>
        <div class="fd-main">
            <h2 id="to_0" class="fd-title">担保基础信息</h2>
            <!-- 保全基本信息 -->
            <ItemBQJBXX/>
            <!-- 申请人 -->
            <ItemSQR/>

            <!-- 被申请人 -->
            <ItemBSQR/>
            <!-- 原告代理人 -->
            <ItemYGDLR/>
            <!-- 财产线索 -->
            <ItemCCXS/>
            <h2 id="to_1" class="fd-title">担保信息</h2>
            <!-- 担保信息 -->
            <ItemDBXX/>
            <h2 id="to_2" class="fd-title">上传材料</h2>
            <!-- 上传材料 -->
            <ItemSCCL/>
            <div class="fd-btn-wrap">
                <el-button type="primary" @click="handlerBtn(false)">上一步</el-button>
                <el-button type="primary">暂存</el-button>
                <el-button type="primary" @click="handlerBtn(true)">预览</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    import SideBar from '../../components/applyPreservation/sideBar'
    import ItemBQJBXX from '../../components/applyPreservation/item/itemBQJBXX'  // 保全基本信息
    import ItemSQR from '../../components/applyPreservation/item/itemSQR'        // 申请人
    import ItemBSQR from '../../components/applyPreservation/item/itemBSQR'      // 被申请人
    import ItemYGDLR from '../../components/applyPreservation/item/itemYGDLR'    // 原告代理人
    import ItemCCXS from '../../components/applyPreservation/item/itemCCXS'      // 财产线索
    import ItemDBXX from '../../components/applyPreservation/item/itemDBXX'      // 担保信息
    import ItemSCCL from '../../components/applyPreservation/item/itemSCCL'      // 上传材料
    export default {
        name: "applyPreservation",
        data(){
            return {

            }
        },
        components: {
            SideBar,
            ItemBQJBXX,
            ItemSQR,
            ItemBSQR,
            ItemYGDLR,
            ItemCCXS,
            ItemDBXX,
            ItemSCCL,
        },
        methods: {
            handlerBtn(type){
                type ? this.$router.push('/index/applyPreservation/preservationPreview')
                     : this.$router.push('/index/applyPreservation/preservationCreate')
            },
        },
    }
</script>

<style lang="less" rel="stylesheet/less">
    @import "../../style/common";
    #applyPreservation{
        box-sizing: border-box;
        padding-top: 50px;
        padding-bottom: 26px;
        width: 100%;
        height: 100%;
        background: #f5f5f5;
        .fd-main{
            box-sizing: border-box;
            overflow: auto;
            margin-bottom: -46px;
            width: 100%;
            max-height: 100%;
            padding: 0 20px 20px 210px;
            .fd-title{
                margin-top: 20px;
                text-align: center;
                font-size: 20px;
                font-weight: normal;
            }
            .fd-btn-wrap{
                .el-button{
                    width: 150px;
                }
            }
        }

    }
</style>
