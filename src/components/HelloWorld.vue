<template>
    <div>
        hello
    </div>
</template>

<script>
    import axios from 'axios'
    import Mock from 'mockjs'
    Mock.mock('/news/api','get',{
        data: '你好'
    })
    export default {
        name: 'HelloWorld',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        created(){
            axios.get('/news/api').then((res)=>{
                console.log(res);
            })
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
