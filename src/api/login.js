import request from './axios'

const BASE_URL = '/account'

// 获取图片验证码
export function verificode() {

    return request({
        url: BASE_URL + '/verificode',
        method: 'post',
        data: {}
    })
}

// 用户注册
export function userRegister() {

    return request({
        url: BASE_URL,
        method: 'post',
        data: {}
    })
}

// 获取用户信息
export function getInfo(token) {

    return request({
        url: BASE_URL + '/info',
        method: 'get',
        params: {token}
    })
}

// 用户信息修改
export function userInfoEdit() {

    return request({
        url: BASE_URL,
        method: 'get',
        data: {

        }
    })
}

// 找回密码
export function findPassword(token) {

    return request({
        url: BASE_URL+ '/findpassword',
        method: 'post',
        params: {token}
    })
}

// 登录
export function login(username, password) {

    return request({
        url: BASE_URL + '/login',
        method: 'post',
        data: {
            username,
            password
        }
    })
}


// 登出
export function logout() {

    return request({
        url: BASE_URL + '/logout',
        method: 'post'
    })
}
