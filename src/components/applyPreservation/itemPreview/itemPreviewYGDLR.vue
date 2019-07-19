<template>
    <div class="fd-content">
        <MyTitle theTitle="原告代理人"/>
        <div class="fd-table-wrap">
            <el-table :data="tableData" size="mini" border stripe style="width: 100%">
                <el-table-column label="序号" width="65" type="index" />
                <el-table-column label="类型" width="180" prop="date" />
                <el-table-column label="名称" width="180" prop="name" />
                <el-table-column label="通讯地址" prop="address" />
                <el-table-column label="操作" width="200">
                    <template slot-scope="scope">
                        <span>编辑</span>
                        <span>删除</span>
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
    import MyTitle from '../../common/myTitle'
    export default {
        name: "itemYGDLR",
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