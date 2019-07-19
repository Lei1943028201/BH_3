<template>
    <div id="preservationPreview">
        <div class="fd-main">
            <span class="fd-btn-close">X</span>
            <div class="fd-content">
                <h2 class="fd-title">保全信息预览</h2>
            </div>
            <div class="fd-content">
                <div class="fd-content-title-wrap">
                    <h3 class="fd-content-title">保全基本信息</h3>
                </div>
                <div class="fd-wrap">
                    <ul class="clear">
                        <li>
                            <span class="fd-label">选择法院：</span><span class="">北京市高级人民法院</span>
                        </li>
                        <li>
                            <span class="fd-label">选择法院：</span><span class=""></span>
                        </li>
                        <li>
                            <span class="fd-label">选择法院：</span><span class=""></span>
                        </li>
                        <li>
                            <span class="fd-label">选择法院：</span><span class=""></span>
                        </li>

                        <li>
                            <span class="fd-label">选择法院：</span><span class="">北京市高级人民法院</span>
                        </li>
                        <li>
                            <span class="fd-label">选择法院：</span><span class=""></span>
                        </li>
                        <li>
                            <span class="fd-label">选择法院：</span><span class=""></span>
                        </li>
                        <li>
                            <span class="fd-label">选择法院：</span><span class=""></span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="fd-content">
                <div class="fd-content-title-wrap">
                    <h3 class="fd-content-title">申请人</h3>
                </div>
                <div class="fd-wrap">
                    <ul class="clear">
                        <li>
                            <span class="fd-label">选择法院：</span><span class="">北京市高级人民法院</span>
                        </li>
                        <li>
                            <span class="fd-label">选择法院：</span><span class=""></span>
                        </li>
                        <li>
                            <span class="fd-label">选择法院：</span><span class=""></span>
                        </li>
                        <li>
                            <span class="fd-label">选择法院：</span><span class=""></span>
                        </li>
                        <li>
                            <span class="fd-label">选择法院：</span><span class="">北京市高级人民法院</span>
                        </li>
                        <li>
                            <span class="fd-label">选择法院：</span><span class=""></span>
                        </li>
                        <li>
                            <span class="fd-label">选择法院：</span><span class=""></span>
                        </li>
                        <li>
                            <span class="fd-label">选择法院：</span><span class=""></span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="fd-content">
                <div class="fd-content-title-wrap">
                    <h3 class="fd-content-title">申请人</h3>
                </div>
                <div class="fd-table-wrap">
                    <el-table :data="tableData_sqr" size="mini" border stripe style="width: 100%">
                        <el-table-column label="序号" width="65" type="index" />
                        <el-table-column label="类型" width="180" prop="date" />
                        <el-table-column label="名称" width="180" prop="name" />
                        <el-table-column label="通讯地址" prop="address" />
                    </el-table>
                </div>
            </div>
            <div class="fd-btn-wrap">
                <el-button type="primary" @click="handlerBtn(false)">返回</el-button><el-button  type="primary" @click="handlerBtn(true)">创建保全</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "preservationPreview",
        methods: {
            handlerBtn(type){
                if(type){
                    this.$router.push('/index/index')
                }else{
                    this.$router.push('/index/applyPreservation/preservationInformation')
                }
            },
        }
    }
</script>

<style lang="less" rel="stylesheet/less">
    @import "../../style/common";
    #preservationPreview{
        position: relative;
        width: 100%;
        height: 100%;
        .fd-main{
            .el-center;
            box-sizing: border-box;
            padding: 30px 76px 40px;
            width: 1120px;
            background: #fff;
            .fd-content{
                .fd-title{
                    text-align: center;
                    font-size: 18px;
                    font-weight: normal;
                    color: #333;
                }
                .fd-content-title-wrap{
                    box-sizing: border-box;
                    padding-top: 12px;
                    height: 44px;
                    border-bottom: 1px solid #f5f5f5;
                    .fd-content-title{
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
                .fd-wrap{
                    box-sizing: border-box;
                    padding: 8px 0;
                    width: 100%;
                    ul{
                        box-sizing: border-box;
                        width: 100%;
                        font-size: 14px;
                        li{
                            float: left;
                            width: 25%;
                            height: 30px;
                            line-height: 30px;
                        }
                    }
                }
            }
            .fd-btn-wrap{
                .el-button{
                    width: 120px;
                }
            }
        }
    }
</style>