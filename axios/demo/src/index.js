import axios from "axios";
let url = "https://json.tewx.cn/user/API_kdd531mytfdzm06i?sdAS1dsnuUa3sd=32&Jsdh4bajs99dii=czmaliu9jahf4dws"

// axios.get(url).then(res => {
//     console.log(res);
// });

// 并发处理
// let axiosTest = axios.get(url);
// axios.all([axiosTest,axiosTest,axiosTest]).then(
//     axios.spread((res1, res2, res3) => {
//         console.log(res1, res2, res3);
//     })
// ).catch(err => {
//     console.log(err);
// })

// 全局配置方案
axios.defaults.baseURL = "https://json.tewx.cn/";
axios.defaults.timeout = 5000;
axios.defaults.headers.post['content-type'] = "application/x-www-form-urlencoded";

axios.defaults.transformRequest = function (data) {
    return JSON.stringify(data);
}

axios.get("user/API_kdd531mytfdzm06i?sdAS1dsnuUa3sd=32&Jsdh4bajs99dii=czmaliu9jahf4dws").then(res => {
    console.log(res);
})


// 实例
let selfAxios = axios.create({
    baseURL: "https://json.tewx.cn/",
    timeout: 3000
});

// 请求拦截器
selfAxios.interceptors.request.use(config => {
    console.log("request");
    config.headers['token'] = "123";
    return config;  //放行
},err => {
    console.log(err);
})

// 响应拦截器
selfAxios.interceptors.response.use(resp => {
    console.log("response");
    console.log(resp);
    return resp;  //放行
},err => {
    console.log(err);
})

selfAxios.get("user/API_kdd531mytfdzm06i?sdAS1dsnuUa3sd=32&Jsdh4bajs99dii=czmaliu9jahf4dws").then(res => {
    console.log(res);
})
