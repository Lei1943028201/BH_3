import Mock from 'mockjs'

// 设置全局延时 没有延时的话有时候会检测不到数据变化
Mock.setup({
    timeout: '300-600'
})

