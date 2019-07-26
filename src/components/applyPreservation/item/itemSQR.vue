<template>
    <div class="fd-content">
        <MyTitle theTitle="申请人">
            <span class="fd-btn-add" name="add" @click="visible = !visible">+ 添加</span>
        </MyTitle>
        <!--   弹出层    -->
        <el-popover
                placement="bottom"
                title="申请人"
                width="700"
                trigger="manual"
                v-model="visible">
                <el-form label-position="right" label-width="96px" :model="formLabelAlign">
                    <el-form-item label="选择法院">
                        <el-input v-model="formLabelAlign.name" @focus="isShowTree('block')"></el-input>
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
                </el-form>
                <div class="fd-btn-wrap">
                    <el-button type="primary"  @click="visible = !visible">取消</el-button>
                    <el-button type="primary"  @click="visible = !visible">保存</el-button>
                </div>
        </el-popover>
        <div class="fd-table-wrap">
            <el-table :data="tableData" size="mini" border stripe style="width: 100%">
                <el-table-column label="序号" width="65" type="index" />
                <el-table-column
                    v-for="(item, index) in tableTitle"
                    :key="index" :label="item.name"
                    :width="item.width"
                    :prop="item.id" />
                <el-table-column label="操作" width="200">
                    <template slot-scope="scope">
                        <span class="fd-table-text"><i class="el-icon-delete"></i>删除</span>
                        <el-divider direction="vertical" class="fd-table-text"></el-divider>
                        <span class="fd-table-text"><i class="el-icon-edit-outline"></i>编辑</span>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import MyTitle from '../../common/myTitle'
    export default {
        name: "itemSQR",
        data(){
            return {
                visible: false,
                formLabelAlign: {
                    name: '',
                    name1: '',
                    name2: '',
                    name3: '',
                },
                tableTitle: []
            }
        },
        components: {
            MyTitle,
        },
        computed: {
            ...mapState(['applyPreservation']),
            tableData(){
                return this.applyPreservation.tableData.SQR
            }
        },
        methods: {
            addCol(){
                this.tableTitle = this.applyPreservation.tableTitle.SQR
            }
        },
        mounted(){
            this.addCol()
        }
    }
</script>

<style lang="less" rel="stylesheet/less">
    @import "../../../style/common";
    .fd-content{
        margin-top: 10px;
        background: #fff;
        font-size: 14px;
        .fd-table-wrap{
            box-sizing: border-box;
            padding: 20px;
            width: 100%;
        }
    }
</style>