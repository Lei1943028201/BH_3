<template>
    <div id="preservationCreate">
        <div class="fd-main">
            <i class="el-icon-close fd-btn-close"></i>
            <div class="fd-content">
                <!--<h2 class="fd-title">创建保全申请</h2>-->
                <MyTitle theTitle="创建保全申请"/>
                <el-form label-position="right" label-width="96px" :model="formLabelAlign">
                    <el-form-item label="选择法院">
                        <el-input v-model="formLabelAlign.name"></el-input>
                    </el-form-item>
                    <el-form-item label="保全类别">
                        <el-radio-group v-model="formLabelAlign.name1">
                            <el-radio label="诉前保全"></el-radio>
                            <el-radio label="诉讼保全"></el-radio>
                            <el-radio label="仲裁保全"></el-radio>
                            <el-radio label="执行前保全"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="保全类型">
                        <el-radio-group v-model="formLabelAlign.name2">
                            <el-radio label="财产保全"></el-radio>
                            <el-radio label="证据保全"></el-radio>
                            <el-radio label="行为保全"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="非诉期间">
                        <el-select v-model="formLabelAlign.name3" placeholder="请选择非诉期间">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="申请保全金额">
                        <el-input v-model="formLabelAlign.name" class="fd-input-sqbqje"></el-input>元
                    </el-form-item>
                </el-form>


            </div>
            <div class="fd-btn-wrap">
                <el-button type="primary" @click="handlerBtn(false)">返回</el-button><el-button  type="primary" @click="handlerBtn(true)">创建保全</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    import MyTitle from '../../components/common/myTitle'
    export default {
        name: "preservationCreate",
        data(){
            return {
                formLabelAlign: {
                    name: '',
                    name1: '',
                    name2: '',
                    name3: '',
                }
            }
        },
        components: {
            MyTitle
        },
        methods: {
            handlerBtn(type){
                type ? this.$router.push('/index/applyPreservation/preservationInformation')
                     : this.$router.push('/index/applyPreservation/preservationGuide')
            },

        }
    }
</script>

<style lang="less" rel="stylesheet/less">
    @import "../../style/common";
    #preservationCreate{
        position: relative;
        width: 100%;
        height: 100%;
        .fd-main{
            .el-center;
            box-sizing: border-box;
            padding: 18px 76px 40px;
            width: 660px;
            height: 480px;
            background: #fff;
            .fd-content{
                .fd-title{
                    text-align: center;
                    font-size: 18px;
                    font-weight: normal;
                    color: #333;
                }
                .el-form{
                    margin-top: 36px;
                }
            }
            .fd-btn-wrap{
                .el-button{
                    width: 120px;
                }
            }
        }
    }
    .fd-input-sqbqje{
        margin-right: 5px;
        width: 92%;
    }
</style>