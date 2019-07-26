<template>
    <div id="preservationCreate">
        <div class="fd-main">
            <i class="el-icon-close fd-btn-close"></i>
            <div class="fd-content">
                <MyTitle theTitle="创建保全申请"/>
                <el-form label-position="right" label-width="96px" :model="formLabelAlign">
                    <el-form-item label="选择法院">
                        <el-input v-model="formLabelAlign.name" @focus="isShowTree('block')"></el-input>
                        <el-tree id="fy-tree" :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
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
                },
                data: [{
                    label: '一级 1',
                    children: [{
                        label: '二级 1-1',
                        children: [{
                            label: '三级 1-1-1'
                        }]
                    }]
                }],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                }
            }
        },
        components: {
            MyTitle
        },
        computed: {
            RMB(){
                let num = 0

                if(num<1000){
                    num = 30
                }else if(num < 100000){
                    num = 30 + (num - 1000) * 0.01
                }else{
                    num = 1020 + (num - 100000) * 0.005
                }
                return num > 5000 ? 5000: num
            }
        },
        methods: {
            isShowTree(type){
                document.getElementById('fy-tree').style.display = type
            },
            handlerBtn(type){
                type ? this.$router.push('/index/applyPreservation/preservationInformation')
                     : this.$router.push('/index/applyPreservation/preservationGuide')
            },
            handleNodeClick(data) {
                console.log(data);
            }
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
                    margin-top: 18px;
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
    #fy-tree{
        box-sizing: border-box;
        overflow: auto;
        display: none;
        position: absolute;
        min-width: 100%;
        height: 250px;
        border: 1px solid #e5e5e5;
        z-index: 1;
    }
</style>