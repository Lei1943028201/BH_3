<template>
    <div class="fd-content">
        <MyTitle theTitle="上传材料"/>
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
                        <span>上传</span>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination
                    background
                    layout="prev, pager, next, jumper"
                    :total="100">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import MyTitle from '../../common/myTitle'
    export default {
        name: "itemSCCL",
        data(){
            return {
                tableData: [
                    {
                        date: '2016-05-02',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1518 弄'
                    },
                    {
                        date: '2016-05-04',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1517 弄'
                    },
                    {
                        date: '2016-05-03',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1516 弄'
                    }
                ],
            }
        },
        components: {
            MyTitle,
        },
        computed: {
            ...mapState(['applyPreservation']),
            tableTitle(){
                return this.applyPreservation.tableTitle.SCCL
            }
        },
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