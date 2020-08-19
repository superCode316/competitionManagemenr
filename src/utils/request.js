import axios from 'axios'

// import { Message } from "element-ui";

//创建axios,赋给变量service
const BASEURL = process.env.NODE_PATH === 'production' ? '' : '/devApi';

const service = axios.create({
    baseURL:BASEURL,
    timeout:10000,
});

// 添加请求拦截器
service.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(function (response) {
    // 对响应数据做点什么

    console.log(response.data.message)
    return response;

}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default service;