// 通用方法js

// 对小于10的数字补0，并返回字符串
export function lessthan10by0(number) {
    if (number < 10) {
        number = "0" + number;
    }
    return number;
}

//中国标准时间转换成datetime格式
export function date_format(time, format) {
    let t = new Date(time);
    let tf = function (i) {
        return (i < 10 ? "0" : "") + i
    };
    return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function (a) {
        switch (a) {
            case "yyyy":
                return tf(t.getFullYear());
                break;
            case "MM":
                return tf(t.getMonth() + 1);
                break;
            case "mm":
                return tf(t.getMinutes());
                break;
            case "dd":
                return tf(t.getDate());
                break;
            case "HH":
                return tf(t.getHours());
                break;
            case "ss":
                return tf(t.getSeconds());
                break;
        }
    })
}

//datetime格式转换成中国标准时间
export function parserDate(date) {
    let t = Date.parse(date);
    if (!isNaN(t)) {
        return new Date(Date.parse(date.replace(/-/g, "/")));
    } else {
        return new Date();
    }
}


/**
 * 获取query参数
 * @param name 参数名称
 * @returns {string}
 */
export function getQuery(name) {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    let r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return decodeURI(r[2]);
    } else {
        return "";
    }
}

/**
 * 获取cookie
 * @param c_name cookie名称
 * @returns 内容
 */
export function getCookie(c_name) {
    if (document.cookie.length > 0) {
        let c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            let c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) c_end = document.cookie.length;
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
}

/**
 * 设置cookie
 * @param c_name 键
 * @param value 值
 * @param expire_seconds 过期秒数
 */
export function setCookie(c_name, value, expire_seconds) {
    let exdate = new Date(new Date().getTime() + expire_seconds * 1000);
    document.cookie = c_name + "=" + escape(value) +
        ((expire_seconds == null) ? "" : ";expires=" + exdate.toUTCString());
}

/**
 * 存值到localStorage中
 * @param key
 * @param value
 */
export function setLocalStorage(key, value) {
    localStorage.setItem(key, value);
}

/**
 * 从localStorage中取值
 */
export function getLocalStorage(key) {
    return localStorage.getItem(key)
}

/**
 * 存值到sessionStorage中
 * @param key
 * @param value
 */
export function setSessionStorage(key, value) {
    sessionStorage.setItem(key, value);
}

/**
 * 从sessionStorage中取值
 */
export function getSessionStorage(key) {
    return sessionStorage.getItem(key)
}

/**
 * 动态加载js
 * @param filepath
 * @param onloadCallback
 */
export function loadScript(filepath, onloadCallback) {
    let scriptDom = document.createElement("script");
    scriptDom.onload = scriptDom.onreadystatechange = onloadCallback;
    scriptDom.type = "text/javascript";
    scriptDom.src = filepath;
    document.body.appendChild(scriptDom);
}

/**
 * 检测手机号码是否符合要求
 * @param phone 手机号
 */
export function checkPhone(phone) {
    let re = /^1(3|4|5|7|8)\d{9}$/;
    return re.test(phone);
}

/**
 * 对形如[{},{},{}]的数组进行排序
 * @param key 要对其进行排序的key
 * edgar 2016.1.17
 * 遍历次数（1+2+3+。。+length次）
 */
export function array_object_sort(arr, key) {
    let last_arr = [];
    let result_arr = [];
    let arr_length = arr.length;
    let arr_length_ori = arr.length;
    while (last_arr.length < arr_length_ori) {
        for (let i = 0; i < arr_length; i++) {// 找出最大的一个
            if (result_arr.length == 0) {// 初始化
                result_arr.push(arr[0]);
            } else {
                if (arr[i][key] >= result_arr[0][key]) {// 如果大于
                    result_arr.splice(0, 0, arr[i]);
                } else {// 如果小于
                    result_arr.push(arr[i]);
                }
            }
        }

        if (last_arr.length > 0) {// 加入最大的一个
            if (last_arr[0][key] > result_arr[0][key]) {
                last_arr.push(result_arr[0]);
            } else {
                last_arr.splice(0, 0, result_arr[0]);
            }
        } else {
            last_arr.push(result_arr[0]);
        }

        // 重置再次开始循环
        result_arr.splice(0, 1);
        arr = result_arr;
        arr_length = arr.length;
        result_arr = [];
    }
    return last_arr;
}

/**
 * 对形如[1,2,3,4,5,6]之类的数组求和
 * @param arr
 * @param start
 * @param end
 */
export function array_get_total(arr, start, end) {
    let total = 0;
    start = start - 1;
    if (arr.length > end - 1) {
        let arr_do = arr.slice(start, end);
        let l = arr_do.length;
        for (let i = 0; i < l; i++) {
            total = total + arr_do[i];
        }
    } else {

    }
    return total;
}

/**
 * 删除树形结构的某个节点
 * 要求的树形结构格式
 * [
 *  {
 *      id:0,
 *      children:[
 *        {
 *          pid:0,
 *          id:1
 *        },
 *        {
 *          pid:0,
 *          id:2,
 *        }
 *      ]
 *  }
 * ]
 */
export function delete_tree_point($tree, $id, $pid) {
    // 第一步 找到要删除节点的父节点
    function find_parent(obj) {
        for (let k in obj) {
            if (obj.hasOwnProperty(k)) {
                if (obj[k].id === $pid) {
                    f_d(obj[k].children, $id);
                } else {
                    find_parent(obj[k].children);
                }
            }
        }
    }

    // 第二步 找到这个节点在父节点中的排序，并删除
    function f_d(obj, id) {
        let i = 0;
        for (let k in obj) {
            if (obj.hasOwnProperty(k)) {
                if (obj[k].id === id) {
                    obj.splice(i, 1);
                    break;
                }
                i++
            }
        }
    }

    find_parent($tree, $id, $pid);
    return $tree;
}


/**
 * 根据id找到数组里面的某个对象
 * name id的名称
 * val id的值
 * arr 寻找的数组
 * return [k,obj] k:obj在arr中的序号 obj:找到的obj
 */
export function find_obj_from_arr_by_id(name, val, arr) {
    let obj = undefined;
    let k;
    for (k in arr) {
        if (arr.hasOwnProperty(k)) {
            if (arr[k][name] === val) {
                obj = arr[k];
                break;
            }
        }
    }
    return [k, obj];
}

/**
 * 根据id找到数组里有同一属性名的对象，加入新数组后返回
 */
export function find_objs_from_arr_by_id(name, val, arr) {
    let objs = [];
    let obj = {};
    let k;
    for (k in arr) {
        if (arr.hasOwnProperty(k)) {
            if (arr[k][name] === val) {
                obj = arr[k];
                objs.push(obj);
            }
        }
    }
    return objs;
}

/**
 * 一位数组转为tree格式数组
 * @returns {Array}
 */
export function arr_to_tree() {
    // 数组求差集
    Array.prototype.minus = function (arr) {
        let result = [];
        let obj = {};
        for (let i = 0; i < arr.length; i++) {
            obj[arr[i]] = 1;
        }
        for (let j = 0; j < this.length; j++) {
            if (!obj[this[j]]) {
                obj[this[j]] = 1;
                result.push(this[j]);
            }
        }
        return result;
    };
    // arr格式
    const data = [
        {
            id: 1,
            pid: 0,
            title: "a"
        },
        {
            id: 4,
            pid: 2,
            title: "d"
        },
        {
            id: 3,
            pid: 1,
            title: "c",
        },
        {
            id: 5,
            pid: 4,
            title: "e"
        },
        {
            id: 2,
            pid: 1,
            title: "b"
        },
        {
            id: 6,
            pid: 3,
            title: "f"
        },
    ];

    let tree = []; // 最终返回的tree；
    let all_id = [];// 所有id数组
    let finded = [];// 已经加入tree的id

    // 找到根节点，将所有id加入all_id数组
    for (let i in data) {
        if (data.hasOwnProperty(i)) {
            // 如果是根节点
            if (data[i].pid === 0) {
                let root = data[i];
                root["children"] = []; // 为tree添加根节点
                tree.push(root);
                finded.push(root.id);
            }
            all_id.push(data[i].id);
        }
    }

    b();

    // 递归 直到所有id都已经加入tree
    function b() {
        let unfind = all_id.minus(finded);
        if (unfind.length > 0) {
            for (let j in unfind) {
                if (unfind.hasOwnProperty(j)) {
                    let [, obj] = find_obj_from_arr_by_id("id", unfind[j], data);
                    x(tree, obj);
                }
            }
            b();
        }
    }

    // 递归 找到obj对应的父节点将自己加入其中
    function x(c, obj) {
        for (let i in c) {
            if (c.hasOwnProperty(i)) {
                if (c[i].id === obj.pid) {
                    obj["children"] = [];
                    c[i].children.push(obj);
                    finded.push(obj.id);
                    break;
                } else {
                    if (c[i].children.length > 0) {
                        x(c[i].children, obj);
                    }
                }
            }
        }
    }

    console.log(JSON.stringify(tree));
    return tree;
}
