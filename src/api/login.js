import service from "@/utils/request";

/**
 * 登录
 */
export function login(data){
    return service.request({
        method: "post",
        url: '/auth/signin',
        data: data
    })
}

/**
 * 注册
 */
export function register(data){
    return service.request({
        method: "post",
        url: '/auth/signup',
        data: data
    })
}

/**
 * 注销
 */
export function logout(){
    return service.request({
        method: "post",
        url: 'auth/logout',
    })
}

/**
 * 获取比赛列表
 */
export function competitionList(){
    return service.request({
        method: "get",
        url: '/competition/list',
    })
}

/**
 * 获取比赛信息
 */
export function competitionDetail(data){
    return service.request({
        method: "get",
        url: '/competition/detail/' + data,
    })
}
