<template>
    <div class="fd-content">
        <MyTitle theTitle="担保信息">
            <span class="fd-btn-add" name="add">+ 添加</span>
            <div class="right" style="margin-right: 20px;">
                <span>提示：请先确保您已经办理了保全担保，否则请走线下流程。立即</span>
                <el-button type="primary" size="mini">线上申请担保</el-button>
            </div>
        </MyTitle>
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
            <p class="fd-table-bottom">担保总价值：222.87万元</p>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import MyTitle from '../../common/myTitle'
    export default {
        name: "itemDBXX",
        data(){
            return {
                tableTitle: []
            }
        },
        components: {
            MyTitle,
        },
        computed: {
            ...mapState(['applyPreservation']),
            tableData(){
                return this.applyPreservation.tableData.DBXX
            }
        },
        methods: {
            addCol(){
                this.tableTitle = this.applyPreservation.tableTitle.DBXX
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
            .fd-table-bottom{
                padding-top: 20px;
                font-size: 16px;
                text-align: right;
            }
        }
    }
</style>