import Mock from 'mockjs'

// 设置全局延时 没有延时的话有时候会检测不到数据变化
Mock.setup({
    timeout: '300-600'
})

Mock.mock(/\/account\/login/, 'post', {
    code: 200,
    data: {
        message: '添加成功',
        token: 'admin'
    }
})

Mock.mock(/\/account\/info/, 'get', {
    code: 200,
    data: {
        message: '添加成功',
        roles: ['admin']
    }
})

Mock.mock(/\/account\/logout/, 'get', {
    code: 200,
    data: {}
})
