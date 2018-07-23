/**
 * element自定义组件
 */
import {Message} from 'element-ui'

// 错误信息弹出框
export function msg_err(msg) {
    Message({
        message: msg,
        type: 'error',
        duration: 5 * 1000
    });
}

// 成功消息弹出框
export function msg_success(msg) {
    Message({
        message: msg,
        type: 'success',
        duration: 5 * 1000
    });
}
