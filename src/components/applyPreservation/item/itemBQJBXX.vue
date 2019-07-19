<template>
    <div class="fd-content">
        <MyTitle theTitle="保全基本信息"/>
        <div class="fd-wrap">
            <ul class="clear">
                <li v-for="(item, index) in tableTitle" :key="index">
                    <span class="fd-label">{{`${item.name}：`}}</span><span>{{`${tableData[item.id]}`}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import MyTitle from '../../common/myTitle'
    export default {
        name: "itemBQJBXX",
        data(){
            return {
                tableData: {
                    c_xqfy: '北京市高级人民法院'
                }
            }
        },
        computed: {
            ...mapState(['applyPreservation']),
            tableTitle(){
                return this.applyPreservation.tableTitle.BQJBXX
            },
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
        .fd-wrap{
            box-sizing: border-box;
            padding: 8px 0;
            width: 100%;
            ul{
                box-sizing: border-box;
                width: 100%;
                li{
                    float: left;
                    width: 25%;
                    min-height: 30px;
                    line-height: 30px;
                    .fd-label{
                        display: inline-block;
                        width: 100px;
                        text-align: right;
                    }
                }
            }
        }
    }
</style>