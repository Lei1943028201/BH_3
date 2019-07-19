<template>
    <div id="myApplication">
        <Banner/>
        <div class="fd-main">
            <ul class="fd-tab clear">
                <li v-for="(tabItem, tabIndex) in tabList"
                    :key="tabIndex"
                    :class="['fd-tab-item','left', {active: isActiveTab(tabItem)}]"
                    v-text="tabItem.name"
                    @click="handlerTab(tabItem)"
                ></li>
            </ul>
            <div class="fd-card-content clear">
                <Card v-for="item in cardLength" :key="item"/>
            </div>
            <div class="fd-pagination">
                <span class="fd-btn disabled"><i class="el-icon-arrow-left"></i></span>
                <span class="fd-btn"><i class="el-icon-arrow-right"></i></span>
            </div>
        </div>
    </div>
</template>

<script>
    import Card from '../../components/myApplication/card'
    import Banner from '../../components/myApplication/banner'
    export default {
        name: "myApplication",
        data(){
            return {
                windowWidth: 0,
                tabList: [
                    {
                        name: '担保申请',
                    },
                    {
                        name: '保全申请'
                    }
                ],
                activeTab: {
                    name : '担保申请'
                }
            }
        },
        components: {
            Card,
            Banner
        },
        computed: {
            isActiveTab(){
               return tabItem => this.activeTab.name === tabItem.name
            },
            cardLength(){
                if(this.windowWidth<1140){
                    return 1
                }else if(this.windowWidth<1660){
                    return 2
                }else{
                    return 3
                }
            }
        },
        methods: {
            handlerTab(tabItem){
                this.activeTab = tabItem
            },
            getCardWrapHeight(){
                this.windowWidth = window.innerWidth
                window.onresize = ()=> {
                    this.windowWidth = window.innerWidth
                }
            }
        },
        mounted(){
            this.getCardWrapHeight()
        }
    }
</script>

<style lang="less" rel="stylesheet/less">
    @import "../../style/common";
    #myApplication{
        box-sizing: border-box;
        width: 100%;
        min-height: 100%;
        margin-bottom: -26px;
        padding-top: 49px;
        background: #f5f5f5;
        .fd-main{
            box-sizing: border-box;
            width: 100%;
            padding: 20px 30px 26px;
            .fd-tab{
                color: #fff;
                font-size: 16px;
                line-height: 33px;
                text-align: center;
                .fd-tab-item{
                    width: 110px;
                    height: 35px;
                    background: #999;
                    border: 1px solid #7d7d7d;
                    cursor: pointer;
                }
                .fd-tab-item:hover{
                    background: @color-basic;
                    border: 1px solid @color-basic;
                    transition: .3s;
                }
                .active{
                    background: @color-basic;
                    border: 1px solid @color-basic;
                }
            }
            .fd-card-content{
                margin-top: 20px;
                text-align: center;
            }
            .fd-pagination{
                width: 100%;
                margin: 10px 0;
                text-align: center;
                .fd-btn{
                    display: inline-block;
                    margin: 0 10px;
                    width: 36px;
                    height: 36px;
                    background: @color-basic;
                    font-size: 26px;
                    line-height: 36px;
                    color: #fff;
                }
                .disabled{
                    background: #999;
                }
            }
        }
    }
</style>
