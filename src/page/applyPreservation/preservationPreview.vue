<template>
    <div id="preservationPreview">
        <div class="fd-main">
            <i class="el-icon-close fd-btn-close"></i>
            <!-- 保全基本信息 -->
            <ItemPreviewBQJBXX/>
            <!-- 申请人 -->
            <ItemPreviewSQR/>
            <!-- 被申请人 -->
            <ItemPreviewBSQR/>
            <!-- 原告代理人 -->
            <ItemPreviewYGDLR/>
            <!-- 财产线索 -->
            <ItemPreviewCCXS/>
            <!-- 担保信息 -->
            <ItemPreviewDBXX/>
            <!-- 上传材料 -->
            <ItemPreviewSCCL/>
            <div class="fd-btn-wrap">
                <el-button type="primary" @click="handlerBtn(false)">返回</el-button><el-button  type="primary" @click="handlerBtn(true)">创建保全</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    import ItemPreviewBQJBXX from '../../components/applyPreservation/itemPreview/itemPreviewBQJBXX'  // 保全基本信息
    import ItemPreviewSQR from '../../components/applyPreservation/itemPreview/itemPreviewSQR'        // 申请人
    import ItemPreviewBSQR from '../../components/applyPreservation/itemPreview/itemPreviewBSQR'      // 被申请人
    import ItemPreviewYGDLR from '../../components/applyPreservation/itemPreview/itemPreviewYGDLR'    // 原告代理人
    import ItemPreviewCCXS from '../../components/applyPreservation/itemPreview/itemPreviewCCXS'      // 财产线索
    import ItemPreviewDBXX from '../../components/applyPreservation/itemPreview/itemPreviewDBXX'      // 担保信息
    import ItemPreviewSCCL from '../../components/applyPreservation/itemPreview/itemPreviewSCCL'      // 上传材料

    export default {
        name: "preservationPreview",
        components: {
            ItemPreviewBQJBXX,
            ItemPreviewSQR,
            ItemPreviewBSQR,
            ItemPreviewYGDLR,
            ItemPreviewCCXS,
            ItemPreviewDBXX,
            ItemPreviewSCCL,
        },
        methods: {
            handlerBtn(type){
                type ? this.$router.push('/index/index')
                     : this.$router.push('/index/applyPreservation/preservationInformation')
            },
        }
    }
</script>

<style lang="less" rel="stylesheet/less">
    @import "../../style/common";
    #preservationPreview{
        position: relative;
        overflow: auto;
        width: 100%;
        height: 100%;
        color: #333;
        .fd-main{
            box-sizing: border-box;
            position: relative;
            margin: 50px auto;
            padding: 30px 76px 40px;
            width: 80%;
            min-width: 960px;
            max-width: 1280px;
            background: #fff;
            .fd-btn-wrap{
                .el-button{
                    width: 120px;
                }
            }
        }
    }
</style>