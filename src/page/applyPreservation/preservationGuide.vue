<template>
    <div id="preservationGuide">
        <div class="fd-main">
            <i class="el-icon-close fd-btn-close"></i>
            <div class="fd-content">
                <MyTitle theTitle="网上保全须知"/>
                <ul>
                    <li class="fd-size-18 text_center fd-title">《民事诉讼法》</li>
                    <li class="fd-size-14 fd-item" v-for="(guideItem, guideIndex) in guideData" :key="guideIndex">
                        <span class="fd-bold" v-text="guideItem.title"></span>
                        <span>{{guideItem.value}}</span>
                    </li>
                </ul>
                <p><el-radio v-model="radio" label="1">我已阅读网上保全须知</el-radio></p>
                <div class="fd-btn-wrap">
                    <el-button  type="primary" @click="handlerBtn(false)">取消</el-button><el-button type="primary" @click="handlerBtn(true)">创建保全申请</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import MyTitle from '../../components/common/myTitle'
    export default {
        name: "preservationGuide",
        data () {
            return {
                radio: '0'
            };
        },
        components: {
            MyTitle
        },
        computed: {
            ...mapState(['applyPreservation']),
            guideData(){
                return this.applyPreservation.webData.GUIDE
            }
        },
        methods: {
            handlerBtn(type){
                type ? this.$router.push('/index/applyPreservation/preservationCreate')
                     : this.$router.push('/index/index')
            },

        }
    }
</script>

<style lang="less" rel="stylesheet/less">
    @import "../../style/common";
    #preservationGuide{
        position: relative;
        overflow: auto;
        width: 100%;
        height: 100%;
        color: #333;
        .fd-main{
            position: relative;
            margin: 50px auto;
            box-sizing: border-box;
            padding: 42px 20px 60px 60px;
            width: 80%;
            height: 80%;
            max-width: 1160px;
            max-height: 794px;
            background: #fff;
            .fd-content{
                height: 70%;
                max-height: 524px;
                .fd-title{
                    box-sizing: border-box;
                    border-bottom: 1px solid #eee;
                    span{
                        display: inline-block;
                        padding-left: 5px;
                        height: 20px;
                        font-size: 16px;
                        font-weight: normal;
                        border-left: 4px solid @color-basic;
                    }
                }
                &>ul{
                    box-sizing: border-box;
                    overflow: auto;
                    padding: 40px 0 0 20px;
                    width: 100%;
                    height: 100%;
                    .fd-title{
                        border: none;
                    }
                    .fd-item{
                        padding-right: 54px;
                        line-height: 30px;
                        color: #666;
                        span{
                            margin-right: 10px;
                            color: #333;
                        }
                    }
                }
                &>p{
                    text-align: center;
                    margin-top: 30px;
                }
                .fd-btn-wrap{
                    .el-button{
                        width: 150px;
                    }
                }
            }
        }
    }

</style>