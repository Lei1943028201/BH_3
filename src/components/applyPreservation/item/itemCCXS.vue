<template>
    <div class="fd-content">
        <MyTitle theTitle="财产线索">
            <span class="fd-btn-add">+ 添加</span>
            <div class="right" style="margin-right: 20px;">
                <el-button type="primary" size="mini">申请财产查控</el-button>
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
            <p class="fd-table-bottom">财产总价值：222.87万元</p>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import MyTitle from '../../common/myTitle'
    export default {
        name: "itemCCXS",
        data(){
            return {
                tableTitle:[]
            }
        },
        components: {
            MyTitle,
        },
        computed: {
            ...mapState(['applyPreservation']),
            tableData(){
                return this.applyPreservation.tableData.CCXS
            }
        },
        methods: {
            addCol(){
                this.tableTitle = this.applyPreservation.tableTitle.CCXS
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