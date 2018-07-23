/**
 * 属性枚举
 */


// 生成一个枚举的value:index的映射对象
function get_value_index_object(O) {
    let N = {};
    for (let i in O) {
        if (O.hasOwnProperty(i)) {
            let value = O[i]["value"];
            N[value] = i;
        }
    }
    return N;
}

// 生成一个枚举的value:label的映射对象
function get_value_label_object(O) {
    let N = {};
    for (let i in O) {
        if (O.hasOwnProperty(i)) {
            let value = O[i]["value"];
            N[value] = O[i]["label"];
        }
    }
    return N;
}

// 广告类型
const advertisement_type = {
    // 这种第一个index是字符串的,被el-select渲染后，后面的index就算是integer也会变成string
    "": {
        value: "ALL",
        label: "全部"
    },
    0: {
        value: "MJ_ADVERTISEMENT_TYPE_NO_DISPLAY",
        label: "不展示"
    },
    1: {
        value: "MJ_ADVERTISEMENT_TYPE_HOMEPAGE_BANNER",
        label: "首页banner"
    },
    2: {
        value: "MJ_ADVERTISEMENT_TYPE_HOMEPAGE_RECOMENTED_LARGE",
        label: "首页推荐位(大)"
    },
    3: {
        value: "MJ_ADVERTISEMENT_TYPE_HOMEPAGE_RECOMENTED_LITTLE_ARTIST",
        label: "首页艺人推荐位(九格宫)"
    },
    4: {
        value: "MJ_ADVERTISEMENT_TYPE_SIDE_LEFT",
        label: "侧边悬浮广告位(左边)"
    },
    5: {
        value: "MJ_ADVERTISEMENT_TYPE_SIDE_RIGHT",
        label: "侧边悬浮广告位(右边)"
    },
    6: {
        value: "MJ_ADVERTISEMENT_TYPE_DEMAND_BANNER",
        label: "需求页面banner广告位"
    },
    7: {
        value: "MJ_ADVERTISEMENT_TYPE_HOMEPAGE_RECOMENTED_LITTLE_COMPANY",
        label: "首页公司推荐位(九格宫)"
    }
};

// 广告上架状态
const advertisement_show_status = {
    "": "全部",
    "show": "展示中",
    "hide": "隐藏中"
};

// 信誉分处理状态
const credit_score_status = {
    "": "全部",
    0: "未处理",
    1: "已处理",
    2: "无需处理"
};

// 信誉分违规分类
const credit_score_violation_type = {
    undefined: "其他违规",
    "0": "一般违规",
    "1": "严重违规",
    "2": "恶性违规",
    "3": "被举报"
};

// 信誉分违规对用户的权限限制分类
const user_limit_type = {
    undefined: "不限制",
    0: "限制申请",
    1: "限制发布需求",
    2: "限制邀请",
    3: "限制信息展示",
    4: "限制营销活动",
    5: "账号屏蔽",
};

// 审核管理-身份审核状态
const verify_role_status = {
    "": {
        value: "ALL",
        label: "全部"
    },
    0: {
        value: "MJ_CERIIFY_EXAMINE_RESULT_TYPE_HANG_UP",
        label: "挂起（等待审核）"
    },
    1: {
        value: "MJ_CERIIFY_EXAMINE_RESULT_TYPE_EXAMINING",
        label: "审核中"
    },
    2: {
        value: "MJ_CERIIFY_EXAMINE_RESULT_TYPE_PASS",
        label: "审核通过"
    },
    3: {
        value: "MJ_CERIIFY_EXAMINE_RESULT_TYPE_REJECT",
        label: "审核被拒绝"
    },
    4: {
        value: "MJ_CERIIFY_EXAMINE_RESULT_TYPE_UNKNOWN",
        label: "审核状态未知"
    },
};

// 审核管理-身份审核身份类型
const verify_role_type = {
    "artist": "艺人",
    "group": "团队",
    "broker": "经纪人",
    "sponser": "赞助商",
    "sponserCompany": "赞助商公司",
    "planningCompany": "策划公司"
};

// 公司类型
const company_type = {
    'MJ_COMPANY_TYPE_PERFORMANCE_CO': "演出公司",
    "MJ_COMPANY_TYPE_PUBLIC_RELATIONS_CO": "公关公司",
    "MJ_COMPANY_TYPE_ADVERTISING_CO": "广告公司",
    "MJ_COMPANY_TYPE_WEDDING_CO": "婚庆礼仪公司",
};

/**
 * 需求状态
 * 2018.6.21 为了解决bug #14 隐藏其他状态
  */
const demand_status = {
    "": "全部",
    //0: "待完善",
    1: "待审核",
    //2: "等待报名",
    2: "审核通过",
    //3: "报名结束",
    //4: "寻找替补",
    //5: "替补已找到",
    //6: "需求完成",
    7: "审核不通过",
};

// 用户筛选当前身份
const user_current_roles = {
    "02": "普通会员",
    "03": "艺人个人",
    "04": "艺人个人(已实名)",
    "05": "艺人团队",
    "06": "艺人团队(已实名)",
    "07": "经纪人(已实名)",
    "08": "主办方公司(已实名)",
    "09": "主办方个人(已实名)",
    "10": "策划公司",
    "11": "策划公司(已实名)",
};

// 订单商品tye
const trade_order_type = {
    "MJ_PRODUCT_TYPE_VIP_1": "vip1",
    "MJ_PRODUCT_TYPE_VIP_2": "vip2",
    "MJ_PRODUCT_TYPE_VIP_3": "vip3",
    "MJ_PRODUCT_TYPE_VIP_4": "vip4",
    "MJ_PRODUCT_TYPE_DEPOSIT_1": "保证金1",
    "MJ_PRODUCT_TYPE_DEPOSIT_2": "保证金2",
    "MJ_PRODUCT_TYPE_DEPOSIT_3": "保证金3",
    "MJ_PRODUCT_TYPE_UNKNOWN": "未知",
    "MJ_PRODUCT_TYPE_DEMAND_PUT_DOWN": "需求定金",
    "MJ_PRODUCT_TYPE_DEMAND_FINAL_PAY": "需求尾款",
    "MJ_PRODUCT_TYPE_DEMAND_FULL_BOND": "需求全款",
    "MJ_PRODUCT_TYPE_DEMAND_TOP_1": "需求置顶12小时",
    "MJ_PRODUCT_TYPE_DEMAND_TOP_2": "需求置顶24小时",
    "MJ_PRODUCT_TYPE_DEMAND_TOP_3": "需求置顶48小时",
    "MJ_PRODUCT_TYPE_DEMAND_TOP_4": " 需求置顶72小时",
};

// 订单支付平台
const trade_pay_platform = {
    "MJ_TRADE_PAY_PLATFORM_ALIPAY": "支付宝",
    "MJ_TRADE_PAY_PLATFORM_WXPAY": "微信",
};

// 交易订单状态
const trade_order_status = {
    "TRADE_FINISHED": "交易完成",
    "TRADE_SUCCESS": "支付成功",
    "WAIT_BUYER_PAY": "交易创建(等待支付)",
    "TRADE_CLOSED": "交易关闭",
};

// 日志等级
const manageLog_level = {
    0: "普通",
    1: "警告",
    2: "危险",
};

// 消息模板类型
const message_template_type = {
    0: "短信模板",
    1: "邮件模板",
    2: "站内信模板",
};

// 消息模板启用状态
const message_template_state = {
    0: "未启用",
    1: "启用",
};

// 提现申请订单状态
const withDraw_state = {
    0: "发起申请",
    1: "审核中",
    2: "审核成功",
    3: "提现中",
    4: "提现成功"
};

// 提速平台
const withDraw_platform_type = {
    0: "支付宝",
    1: "微信",
    2: "银行卡",
    3: "其他",
};

// 需求流程订单状态
const demand_entry_order_status = {
    0: {
        value: "MJ_DEMAND_ENTRY_STATUS_ENTERED",
        label: "已报名",
    },
    1: {
        value: "MJ_DEMAND_ENTRY_STATUS_INTERVIEW_INVITED",
        label: "已被邀请面试/商谈",
    },
    2: {
        value: "MJ_DEMAND_ENTRY_STATUS_INTERVIEW_ACCEPT",
        label: "已接受面试/商谈邀请",
    },
    3: {
        value: "MJ_DEMAND_ENTRY_STATUS_INTERVIEW_REJECT",
        label: "已拒绝面试/商谈邀请",
    },
    4: {
        value: "MJ_DEMAND_ENTRY_STATUS_INTERVIEWED",
        label: "面试/商谈已完成",
    },
    5: {
        value: "MJ_DEMAND_ENTRY_STATUS_COOPERATE_INVITED",
        label: "已被邀请合作",
    },
    6: {
        value: "MJ_DEMAND_ENTRY_STATUS_COOPERATE_ACCEPT",
        label: "已接受合作邀请",
    },
    7: {
        value: "MJ_DEMAND_ENTRY_STATUS_COOPERATE_REJECT",
        label: "已拒绝合作邀请",
    },
    8: {
        value: "MJ_DEMAND_ENTRY_STATUS_COOPERATE_COMPLETE",
        label: "合作完成",
    },
    9: {
        value: "MJ_DEMAND_ENTRY_STATUS_COOPERATE_FAILURE",
        label: "合作失败",
    },
    10: {
        value: "MJ_DEMAND_ENTRY_STATUS_MONEY_TRUSTEESHIP",
        label: "资金托管中",
    },
    11: {
        value: "MJ_DEMAND_ENTRY_STATUS_COOPERATE_CANCEL_ING",
        label: "艺人申请取消合作中",
    },
    12: {
        value: "MJ_DEMAND_ENTRY_STATUS_ARTIST_COMMENT",
        label: "合作方已评价",
    },
    13: {
        value: "MJ_DEMAND_ENTRY_STATUS_COMPANY_COMMENT",
        label: "需求方已评价",
    },
    14: {
        value: "MJ_DEMAND_ENTRY_STATUS_IGNORED",
        label: "被忽略",
    },
    15: {
        value: "MJ_DEMAND_ENTRY_STATUS_COOPERATE_REJECT_INITIATIVE",
        label: "被需求方主动拒绝合作",
    },
};

// 需求订单状态
const demand_order_status = {
    0: {
        value: "MJ_DEMAND_ORDER_STATE_CREATED",
        label: "已生成",
    },
    1: {
        value: "MJ_DEMAND_ORDER_STATE_WAIT_PAY",
        label: "等待支付",
    },
    2: {
        value: "MJ_DEMAND_ORDER_STATE_PAID_DOWN_PAYMENT",
        label: "已支付定金",
    },
    3: {
        value: "MJ_DEMAND_ORDER_STATE_PAID_FULL_PAYMENT",
        label: "已支付全款",
    },
    4: {
        value: "MJ_DEMAND_ORDER_STATE_CANCELED",
        label: "取消合作",
    },
    5: {
        value: "MJ_DEMAND_ORDER_STATE_BREAK_CONTRACT",
        label: "毁约",
    },
    6: {
        value: "MJ_DEMAND_ORDER_STATE_COMPLETE",
        label: "合作完成",
    },
    7: {
        value: "MJ_DEMAND_ORDER_STATE_CANCEL_ING",
        label: "取消合作中",
    },
    8: {
        value: "MJ_DEMAND_ORDER_STATE_MONEY_TRUSTEESHIP",
        label: "资金托管中",
    },
    9: {
        value: "MJ_DEMAND_ORDER_STATE_ARTIST_COMMENT",
        label: "合作方已评价",
    },
    10: {
        value: "MJ_DEMAND_ORDER_STATE_COMPANY_COMMENT",
        label: "需求方已评价",
    },
};

export {
    get_value_index_object,
    get_value_label_object,
    advertisement_type,
    advertisement_show_status,
    credit_score_status,
    credit_score_violation_type,
    user_limit_type,
    verify_role_status,
    verify_role_type,
    company_type,
    demand_status,
    user_current_roles,
    trade_order_type,
    trade_order_status,
    trade_pay_platform,
    manageLog_level,
    message_template_type,
    message_template_state,
    withDraw_state,
    withDraw_platform_type,
    demand_entry_order_status,
    demand_order_status
};
