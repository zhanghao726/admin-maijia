import {param2Obj} from '@/utils'

// 权限mock
const userMap = {
    admin: {
        roles: ['admin'], // 是个数组 多重角色
        token: 'admin',
        introduction: '我是超级管理员',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        name: 'Super Admin'
    },
    editor: {
        roles: ['editor'],
        token: 'editor',
        introduction: '我是编辑',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        name: 'Normal Editor'
    }
};

export default {
    loginByUsername: config => {
        const {username} = JSON.parse(config.body)
        // console.log(password)
        return userMap[username]
    },
    getUserInfo: config => {
        const {token} = param2Obj(config.url)
        if (userMap[token]) {
            return userMap[token]
        } else {
            return false
        }
    },
    logout: () => 'success'
}
