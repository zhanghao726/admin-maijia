/**
 * 管理员相关Class
 */
import {api_get_designated_manager_info, api_get_all_manager_info, api_get_manageLog_list} from '../api/manager';
import store from '../store';
import {find_obj_from_arr_by_id} from '../utils/common';
import {api_get_list} from "../api/trade";

class ManagerClass {
    /**
     * 获取指定的管理员信息管理员信息
     * @param id 管理员id
     * @returns {Promise<void>}
     */
    static async get_designated_manager_info(id) {
        let [data] = await api_get_designated_manager_info(id);
        return data;
    }

    /**
     * 获取所有管理员信息
     * @returns {Promise<void>}
     */
    static async get_all_manager_info() {
        let [data] = await api_get_all_manager_info();
        return data;
    }

    /**
     * 从store中获取某一个管理员信息
     * @param id
     */
    static get_one_manager_info_from_store(id) {
        let [, manager] = find_obj_from_arr_by_id("id", id, store.getters.all_manager_info);
        return manager;
    }

    /**
     * 获取管理员操作日志
     * @param page
     * @param size
     * @param type
     * @param value1
     * @returns {Promise<*[]>}
     */
    static async get_manageLog_list(page, size,type,value1) {
        let [data] = await api_get_manageLog_list(page, size,type,value1);
        let list = data.content;
        // 生成分页数据
        let page_temp = {
            size: data.size,
            number: data.number + 1,// 后端分页页码是从0开始的
            totalElements: data.totalElements,
            totalPages: data.totalPages,
            numberOfElements: data.numberOfElements,
            first: data.first,
            last: data.last,
            sort: data.sort,
        };
        return [list, page_temp];
    }
}

export {
    ManagerClass
}
