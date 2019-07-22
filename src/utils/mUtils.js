/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
    if (!name) return;
    if (typeof content !== 'string') {
        content = JSON.stringify(content);
    }
    window.localStorage.setItem(name, content);
}

/**
 * 获取localStorage
 */
export const getStore = name => {
    if (!name) return;
    let value = window.localStorage.getItem(name);
    if (value !== null) {
        try {
            value = JSON.parse(value);
        } catch (e) {
            value = value;
        }
    }
    return value;
}

/**
 * 删除localStorage
 */
export const removeStore = name => {
    if (!name) return;
    window.localStorage.removeItem(name);
}

/**
 * @param {date} 标准时间格式:Fri Nov 17 2017 09:26:23 GMT+0800 (中国标准时间)
 * @param {type} 类型
 *   type == 1 ---> "yyyy-mm-dd hh:MM:ss.fff"
 *   type == 2 ---> "yyyymmddhhMMss"
 *   type == '' ---> "yyyy-mm-dd hh:MM:ss"
 */
export const formatDate = (date, type) => {
    let year = date.getFullYear();//年
    let month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;//月
    let day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();//日
    let hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();//时
    let minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();//分
    let seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();//秒
    let milliseconds = date.getMilliseconds() < 10 ? "0" + date.getMilliseconds() : date.getMilliseconds() //毫秒
    if (type == 1) {
        return year + "-" + month + "-" + day + " " + hour + ":" + minutes + ":" + seconds + "." + milliseconds;
    } else if (type == 2) {
        return year + "" + month + "" + day + "" + hour + "" + minutes + "" + seconds;
    } else if (type == 3) {
        return year + "-" + month + "-" + day;
    } else {
        return year + "-" + month + "-" + day + " " + hour + ":" + minutes + ":" + seconds;
    }
}
/**
 * 时间转换：20150101010101 --> '2015-01-01 01:01:01'
 */
export const parseToDate = (timeValue) => {
    let result = "";
    let year = timeValue.substr(0, 4);
    let month = timeValue.substr(4, 2);
    let date = timeValue.substr(6, 2);
    let hour = timeValue.substr(8, 2);
    let minute = timeValue.substr(10, 2);
    let second = timeValue.substr(12, 2);
    result = year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
    return result;
}
/**
 * 判断空值
 */
export const isEmpty = (keys) => {
    if (typeof keys === "string") {
        keys = keys.replace(/\"|&nbsp;|\\/g, '').replace(/(^\s*)|(\s*$)/g, "");
        if (keys == "" || keys == null || keys == "null" || keys === "undefined") {
            return true;
        } else {
            return false;
        }
    } else if (typeof keys === "undefined") {  // 未定义
        return true;
    } else if (typeof keys === "number") {
        return false;
    } else if (typeof keys === "boolean") {
        return false;
    } else if (typeof keys == "object") {
        if (JSON.stringify(keys) == "{}") {
            return true;
        } else if (keys == null) { // null
            return true;
        } else {
            return false;
        }
    }

    if (keys instanceof Array && keys.length == 0) {// 数组
        return true;
    }

}

/**
 * 返回两位的小数的字符串
 */
export const toFixedNum = (num) => {
    const tonum = Number(num).toFixed(2);
    return tonum;
}

export const showMessage = () => {
    this.$message({
        showClose: true,
        message: '对不起，您暂无此操作权限~',
        type: 'success'
    });
}

/**
 * 读取base64
 */
export const readFile = file => {
    //判断是否是图片类型
    if (!/image\/\w+/.test(file.raw.type)) {
        alert("只能选择图片");
        return false;
    }
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function (e) {
        let filedata = {
            filename: file.name,
            filebase64: e.target.result
        }
        alert(e.target.result)
    }
}

/**
 * 动态插入css
 */
export const loadStyle = url => {
    const link = document.createElement('link')
    link.type = 'text/css'
    link.rel = 'stylesheet'
    link.href = url
    const head = document.getElementsByTagName('head')[0]
    head.appendChild(link)
}
/**
 * 设置浏览器头部标题
 */
export const setTitle = (title) => {
    title = title ? `${title}` : '管理系统'
    window.document.title = title
}

export const param2Obj = url => {
    const search = url.split('?')[1]
    if (!search) {
        return {}
    }
    return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
}

//是否为正整数
export const isInteger = (s) => {
    let re = /^[0-9]+$/;
    return re.test(s)
}
