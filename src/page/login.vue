<template>
    <div class="fd-main">
        <div class="fd-content">
            <div class="fd-content-left">
                <h1>网上保全系统</h1>
                <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm">
                    <el-form-item prop="username">
                        <el-input type="text" placeholder="请输入账号" v-model="ruleForm.username"></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input type="password" placeholder="请输入密码" v-model="ruleForm.password"></el-input>
                    </el-form-item>
                    <div>
                        <el-input type="text" placeholder="请输入验证码"></el-input><span>这里是验证码</span>
                    </div>
                    <div>
                        <span>自动登录</span><span>忘记密码？</span>
                    </div>
                    <el-form-item>
                        <el-button type="primary" :round="false" @click="submitForm('ruleForm')">登录</el-button>
                    </el-form-item>
                    <span>新用户注册</span>
                </el-form>
            </div>
            <div class="fd-content-right">
                <div class="fd-content-right-top">
                    <div>
                        <h2>网上保全</h2>
                        <p>通过网上保全系统向第三方担保机构申请担保，担保机构审核通过后，可在线生成电子担保书。 </p>
                    </div>
                    <div>
                        <h2>网上担保</h2>
                        <p>通过网上保全系统向各级人民法院申请保全。保全类别包括诉前保全、诉中保全、仲裁保全及执行前保全。保全类型包括财产保全、行为保全和</p>
                    </div>
                </div>
                <ul class="fd-content-right-bottom">
                    <li class="fd-content-right-bottom-item">保险公司</li>
                    <li class="fd-content-right-bottom-item">保险公司</li>
                    <li class="fd-content-right-bottom-item">保险公司</li>
                    <li class="fd-content-right-bottom-item">保险公司</li>
                </ul>
            </div>
        </div>
        <p class="fd-main-bottom">版权信息-备案号852741852963</p>
    </div>
</template>

<script>
    export default {
        data() {
            let validateUsername = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入用户名'));
                } else {
                    callback()
                }
            };
            let validatePassword = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    callback()
                }
            };
            return {
                ruleForm: {
                    username: '',
                    password: ''
                },
                rules: {
                    username: [
                        {validator: validateUsername, trigger: 'blur'}
                    ],
                    password: [
                        {validator: validatePassword, trigger: 'blur'}
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        let userinfo = this.ruleForm;
                        this.$store.dispatch('Login', userinfo).then(res => {
                            this.$router.push({path: '/'})
                        })
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style lang="less" rel="stylesheet/less">
    @import "../style/common";
    .fd-content{
        .el-center;
        width: 80%;
        height: 550px;
        .fd-content-left{
            float: left;
            width: 434px;
            height: 530px;
        }
        .fd-content-right{
            float: left;
            width: 50%;
            height: 100%;
            .fd-content-right-bottom{
                overflow: hidden;
                .fd-content-right-bottom-item{
                    float: left;
                }
            }
        }
    }
    .fd-main-bottom{
        position: absolute;
        bottom: 8px;
        width: 100%;
        text-align: center;
        font-size: 12px;
        color: #151515;
    }
</style>
