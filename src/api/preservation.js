import request from './axios'
// 1 保全申请列表查询
export function getBqsqList() {

    return request({
        url: '/bqsqs',
        method: 'get',
        data: {}
    })
}

// 2 保全申请查询
export function getBqsqInfo(id) {

    return request({
        url: '/bqsq',
        method: 'get',
        data: {
            id: id
        }
    })
}


/* 3 保全类型列表查询
 5 保全申请状态列表查询
 6 申请保全非诉期间查询
 7 申请保全选择法院查询
 8 担保方式查询*/
export function getCodeListByCodeType(codetype) {

    return request({
        url: '/code',
        method: 'get',
        data: {
            codetype:codetype
        }
    })
}

// 9 保全申请删除
export function deleteBqsq(id) {

    return request({
        url: '/bqsq',
        method: 'delete',
        data: {
            id:id
        }
    })
}

// 10 保全申请缴费

// 11 保全申请修改

// 12 保全申请数量查询

// 13 创建保全申请
export function saveBqsq() {

    return request({
        url: '/bqsq',
        method: 'post',
        data: {}
    })
}

// 14 申请保全暂存
export function saveTempBqsq() {

    return request({
        url: '/bqsq/tempsave',
        method: 'post',
        data: {}
    })
}

// 15 担保信息查询


// 16 新增担保信息
export function saveDbxx() {

    return request({
        url: '/dbxx',
        method: 'post',
        data: {}
    })
}

// 17 担保信息编辑

// 18 担保信息删除
export function deleteDbxx(id) {

    return request({
        url: '/dbxx',
        method: 'delete',
        data: {
            id:id
        }
    })
}

// 19 上传担保信息申请材料
export function uploadDbxxSqcl() {

    return request({
        url: '/dbxx/fileupload',
        method: 'post',
        data: {}
    })
}

// 20 申请人列表查询
export function getSqrList() {

    return request({
        url: '/sqrs',
        method: 'get',
        data: {}
    })
}
// 21 申请人详情
export function getSqr(id) {

    return request({
        url: '/sqr',
        method: 'get',
        data: {
            id: id
        }
    })
}
// 22 被申请人列表查询
export function getBsqrList() {

    return request({
        url: '/bsqrs',
        method: 'get',
        data: {}
    })
}
// 23 被申请人详情
export function getBsqr(id) {

    return request({
        url: '/bsqr',
        method: 'get',
        data: {
            id
        }
    })
}
// 24 原告代理人列表查询
export function getYgdlrList() {

    return request({
        url: '/ygdlrs',
        method: 'get',
        data: {}
    })
}
// 25 原告代理人详情
export function getYgdlr(id) {

    return request({
        url: '/ygdlr',
        method: 'get',
        data: {
            id: id
        }
    })
}
// 26 财产线索列表查询
export function getCcxsList() {

    return request({
        url: '/ccxss',
        method: 'get',
        data: {}
    })
}
// 27 财产线索详情
export function getCcxs(id) {

    return request({
        url: '/ccxs',
        method: 'get',
        data: {
            id
        }
    })
}
// 28 担保信息列表查询
export function getDbxxList() {

    return request({
        url: '/dbxxs',
        method: 'get',
        data: {}
    })
}

// 29 担保信息详情
export function getDbxx(id) {

    return request({
        url: '/dbxx',
        method: 'get',
        data: {
            id:id
        }
    })
}

// 30 上传材料列表查询
export function getScclList() {

    return request({
        url: '/sscls/sscl',
        method: 'get',
        data: {}
    })
}

// 31 上传材料详情
export function getSccl(id) {

    return request({
        url: '/sscls/sscl',
        method: 'get',
        data: {
            id: id
        }
    })
}
// 32 保全基本信息删除申请人
export function deleteSqr(id) {

    return request({
        url: '/bqsqs/sqr',
        method: 'delete',
        data: {
            id: id
        }
    })
}
// 33 保全基本信息删除被申请人
export function deleteBSqr(id) {

    return request({
        url: '/bqsqs/bsqr',
        method: 'delete',
        data: {
            id
        }
    })
}
// 34 保全基本信息删除原告代理人
export function deleteYgdlr(id) {

    return request({
        url: '/bqsqs/ygdlr',
        method: 'delete',
        data: {
            id: id
        }
    })
}
// 35 保全基本信息删除财产线索
export function deleteCcxs(id) {

    return request({
        url: '/bqsqs/ccxs',
        method: 'delete',
        data: {
            id: id
        }
    })
}
// 36 担保信息删除

// 37 上传材料删除
export function deleteSccl(id) {

    return request({
        url: '/sccls/sccl',
        method: 'delete',
        data: {
            id: id
        }
    })
}
// 38 变更担保变更申请书下载
export function downLoadTemplate() {

    return request({
        url: '/sccls/mbxz',
        method: 'get',
        data: {}
    })
}
// 39 申请变更担保提交
export function editBgdb() {

    return request({
        url: '/bqsqs/sqbgdb/bcdb',
        method: 'patch',
        data: {}
    })
}
// 40 补充担保提交
export function editBcdb() {

    return request({
        url: '/bqsqs/bcdb/bcdb',
        method: 'patch',
        data: {}
    })
}
// 41 申请保全选择法院
export function getCorpList() {

    return request({
        url: '/bqsqs/xzfy',
        method: 'get',
        data: {}
    })
}