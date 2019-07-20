<template>
    <div class="fd-content">
        <MyTitle theTitle="被申请人"/>
        <div class="fd-table-wrap">
            <el-table :data="tableData" size="mini" border stripe style="width: 100%">
                <el-table-column label="序号" width="65" type="index" />
                <el-table-column
                    v-for="(item, index) in tableTitle"
                    :key="index" :label="item.name"
                    :width="item.width"
                    :prop="item.id" />
            </el-table>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import MyTitle from '../../common/myTitle'
    export default {
        name: "itemBSQR",
        data(){
            return {
                tableTitle: [],
            }
        },
        components: {
            MyTitle,
        },
        computed: {
            ...mapState(['applyPreservation']),
            tableData(){
                return this.applyPreservation.tableData.BSQR
            }
        },
        methods: {
            addCol(){
                this.tableTitle = this.applyPreservation.tableTitle.BSQR
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