import axios from "axios";

// 创建一个request实例
const request = axios.create({
    baseURL: "https://api.shop.eduwork.cn/",
    timeout: 5000
});

// 请求拦截
request.interceptors.request.use(config => {
    config.headers['token'] = "hug-token-2021-04-01";
    return config;
})

// 响应拦击
request.interceptors.response.use(response => {
    if(response.status !== 200) {
        console.log(`status is not 200, but ${response.status}`);
    }
    return response.data;
})


export default request;