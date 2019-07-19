<template>
    <div id="applyPreservation">
        <SideBar/>
        <div class="fd-main">
            <h2 id="to_0" class="fd-title">担保基础信息</h2>
            <div class="fd-content">
                <MyTitle theTitle="保全基本信息"/>
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
                <MyTitle theTitle="保全基本信息"/>
                <div class="fd-table-wrap">
                    <el-table :data="tableData_sqr" size="mini" border stripe style="width: 100%">
                        <el-table-column label="序号" width="65" type="index" />
                        <el-table-column label="类型" width="180" prop="date" />
                        <el-table-column label="名称" width="180" prop="name" />
                        <el-table-column label="通讯地址" prop="address" />
                        <el-table-column label="操作" width="200">
                            <template slot-scope="scope">
                                <span>编辑</span>
                                <span>删除1</span>
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
            <div class="fd-content">
                <MyTitle theTitle="保全基本信息"/>
                <div class="fd-table-wrap">
                    <el-table :data="tableData_bsqr" size="mini" border stripe style="width: 100%">
                        <el-table-column label="序号" width="65" type="index" />
                        <el-table-column label="类型" width="180" prop="date" />
                        <el-table-column label="名称" width="180" prop="name" />
                        <el-table-column label="通讯地址" prop="address" />
                        <el-table-column label="操作" width="200">
                            <template slot-scope="scope">
                                <span>编辑</span>
                                <span>删除1</span>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </div>
            <div class="fd-content">
                <MyTitle theTitle="保全基本信息"/>
                <div class="fd-table-wrap">
                    <el-table :data="tableData_ygdlr" size="mini" border stripe style="width: 100%">
                        <el-table-column label="序号" width="65" type="index" />
                        <el-table-column label="类型" width="180" prop="date" />
                        <el-table-column label="名称" width="180" prop="name" />
                        <el-table-column label="通讯地址" prop="address" />
                        <el-table-column label="操作" width="200">
                            <template slot-scope="scope">
                                <span>编辑</span>
                                <span>删除1</span>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </div>
            <div class="fd-content">
                <MyTitle theTitle="保全基本信息"/>
                <div class="fd-table-wrap">
                    <el-table :data="tableData_ygdlr" size="mini" border stripe style="width: 100%">
                        <el-table-column label="序号" width="65" type="index" />
                        <el-table-column label="类型" width="180" prop="date" />
                        <el-table-column label="名称" width="180" prop="name" />
                        <el-table-column label="通讯地址" prop="address" />
                        <el-table-column label="操作" width="200">
                            <template slot-scope="scope">
                                <span>编辑</span>
                                <span>删除1</span>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </div>
            <h2 id="to_1" class="fd-title">担保基础信息</h2>
            <div class="fd-content">
                <MyTitle theTitle="保全基本信息"/>
                <div class="fd-table-wrap">
                    <el-table :data="tableData_ygdlr" size="mini" border stripe style="width: 100%">
                        <el-table-column label="序号" width="65" type="index" />
                        <el-table-column label="类型" width="180" prop="date" />
                        <el-table-column label="名称" width="180" prop="name" />
                        <el-table-column label="通讯地址" prop="address" />
                        <el-table-column label="操作" width="200">
                            <template slot-scope="scope">
                                <span>编辑</span>
                                <span>删除1</span>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </div>
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
    import MyTitle from '../../components/common/myTitle'
    export default {
        name: "applyPreservation",
        data(){
            return {
                tableData_sqr: [
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
                tableData_bsqr: [
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
                tableData_ygdlr: []
            }
        },
        components: {
            SideBar,
            MyTitle
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
            .fd-content{
                margin-top: 10px;
                background: #fff;
                font-size: 14px;
                .fd-wrap{
                    box-sizing: border-box;
                    padding: 8px 20px;
                    width: 100%;
                    ul{
                        box-sizing: border-box;
                        width: 100%;
                        padding: 0 20px;
                        li{
                            float: left;
                            width: 25%;
                            height: 30px;
                            line-height: 30px;
                        }
                    }
                }
                .fd-table-wrap{
                    box-sizing: border-box;
                    padding: 20px;
                    width: 100%;
                }
            }
            .fd-btn-wrap{
                .el-button{
                    width: 150px;
                }
            }
        }

    }
</style>
