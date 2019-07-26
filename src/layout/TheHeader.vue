<template>
    <div id="header" class="clear">
        <div class="fd-header-left">
            <h1>网上保全系统</h1>
        </div>
        <div class="fd-header-right">
            <div>
                <span><i class="el-icon-user"></i></span>
                <el-button size="mini" @click="layout">登出</el-button>
            </div>
        </div>
        <div class="fd-header-center">
            <ul class="fd-menu clear" :style="`width:${menuWidth}`">
                <li v-for="(menuItem, menuIndex) in menuList"
                    :key="menuIndex"
                    :class="{'active': isActive(menuItem.path)}"
                    v-text="menuItem.name"
                    @click="handlerMenu(menuItem.path)"
                ></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        //组件
        components: {},
        //外部数据
        props: [],
        //内部数据
        data() {
            return {
                menuList: [
                    {
                        name: '我的申请',
                        path: '/index/index',
                    },
                    {
                        name: '申请保单',
                        path: '/index/applyGuarantee',
                    },
                    {
                        name: '申请保全',
                        path: '/index/applyPreservation',
                    }
                ],
                activeNav: '/index/index'
            }
        },
        //方法函数
        methods: {
            handlerMenu(path){
                this.activeNav = path
                this.$router.push(path)
            },
            layout() {
                this.$store.dispatch('LogOut').then(() => {
                    location.reload();
                })
            },
        },
        //计算属性
        computed: {
            menuWidth(){
                return this.menuList.length*102 + 'px'
            },
            routerPath(){
                return this.$route.path
            },
            isActive(){
               return path => this.routerPath.indexOf(path)>-1
            }
        },
        //监视函数
        watch: {},
        //生命周期函数
        created() {
        },
        mounted() {
        },

    }
</script>

<style lang="less" rel="stylesheet/less">
    @import "../style/common";
    #header{
        position: fixed;
        top: 0;
        z-index: 9999;
        width: 100%;
        height: 50px;
        background: @color-basic;
        color: #fff;
        text-align: center;
        line-height: 50px;
        .fd-header-left{
            float: left;
            h1{
                margin-left: 40px;
                padding-left: 36px;
                font-size: 24px;
            }
        }
        .fd-header-center{
            width: 100%;
            .fd-menu{
                margin: 0 auto;
                li{
                    float: left;
                    width: 102px;
                    height: 50px;
                    cursor: pointer;
                }
                .active{
                    background-color: #313131;
                    transition: .3s;
                }
                li:hover{
                    .active;
                    transition: .3s;
                }

            }
        }
        .fd-header-right{
            float: right;
            i{
                font-size: 25px;
            }
        }
    }
</style>
