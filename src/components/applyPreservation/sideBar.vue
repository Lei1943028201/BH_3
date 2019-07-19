<template>
    <div class="fd-side-bar">
        <ul>
            <li v-for="(sideBarItem, sideBarIndex) in sideBarList"
                :key="sideBarIndex"
                :class="{'active': isActiveSideBar(sideBarItem)}"
                @click="handlerSideBar(sideBarItem)"
            ><a :href="`#to_${sideBarIndex}`"
                v-text="sideBarItem.name"></a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "sideBar",
        data(){
            return {
                sideBarList: [
                    {
                        name: '担保基础信息',
                    },
                    {
                        name: '担保信息',
                    },
                    {
                        name: '上传材料',
                    }
                ],
                activeSideBar: {
                    name: '担保基础信息'
                },
            }
        },
        computed:{
            isActiveSideBar(){
                return sideBarItem => this.activeSideBar.name === sideBarItem.name
            }
        },
        methods: {
            handlerSideBar(sideBarItem){
                this.activeSideBar = sideBarItem
            },
        }
    }

</script>

<style lang="less" rel="stylesheet/less">
    @import "../../style/common";
    .fd-side-bar{
        box-sizing: border-box;
        overflow: auto;
        position: absolute;
        top: 0;
        left: 0;
        padding-top: 50px;
        width: 200px;
        height: 100%;
        background: #fff;
        ul{
            box-sizing: border-box;
            margin-top: 20px;
            width: 100%;
            font-size: 16px;
            line-height: 40px;
            li{
                box-sizing: border-box;
                width: 100%;
                border-left: 2px solid #fff;
                padding-left: 30px;
                cursor: pointer;
                a{
                    color: #333;
                }
                &:hover{
                   .active
                }
            }
            .active{
                background: #fae6e6;
                color: @color-basic;
                border-left: 2px solid @color-basic;
            }
        }
    }

</style>