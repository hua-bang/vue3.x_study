import axios from "axios";

axios.defaults.baseURL = "https://json.tewx.cn/";

const request = axios.create({
    baseURL: "https://json.tewx.cn/",
});
request.interceptors.request.use(config => {
    config.transformRequest = [
        function (data) {
            let str = "";
            for (const key in data) {
                str += `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}&`
            }
            return str;
        }
    ];
    config.headers = {
        "Content-type": "application/x-www-form-urlencoded",
        "token": "hua-bang-token"
    };
    return config;
});

request.interceptors.response.use(response => {
    return response.data;
})

export {request};

export function get(url, params) {
    return axios.get(url, params);
}

export function post(url, params) {
    return axios.post(url,params, {
        transformRequest: [
            function (data) {
                let str = "";
                for (const key in data) {
                    str += `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}&`
                }
                return str;
            }
        ],
        headers: {
            "Content-type": "application/x-www-form-urlencoded"
        }
    })
}

