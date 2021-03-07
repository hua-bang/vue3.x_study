#### 认识axios和了解课程内容

ajax比较局限 并且使用ajax需要引入整个jq 但现在用vue 颠覆了dom操作

#### 认识axios

- Axios简单的理解就是Ajax的封装
- Axios是一个基于Promise的http库
- 支持node和游览器端
- 使用Promise管理异步，告别传统的callback回调
- 丰富的配置项，全局配置，支持拦截器等高级配置
- 转发请求数据和响应数据

#### 接口案例

RestFul API规范（URL，HTTP，版本，状态码，返回值，请求条件等规范）

模板式编程和接口式编程

- GET（Select）:从服务器中取出资源
- POST(CREATE)：新建资源
- PUT(UPDATE)：修改完整资源
- PATCH(UPDATE)：修改提供改变的属性
- DELETE(DELETE)：删除资源

#### 资源

网址：https://www.npmjs.com/package/axios

#### 使用

- get请求

  ```js
  let url = "https://json.tewx.cn/user/API_kdd531mytfdzm06i?sdAS1dsnuUa3sd=32&Jsdh4bajs99dii=czmaliu9jahf4dws";
  axios.get(url).then(res => {
  	console.log(res.data);
  })
  ```

- 对象配置请求

  ```js
  axios({
   	....
  }).then(res => {});
  ```

- 并发请求

  ```js
  axios.all([]).then(res => {})
  
  //demo
  let axiosTest = axios.get(url);
  axios.all([axiosTest,axiosTest,axiosTest]).then(res => {
      console.log(res);
  }).catch(err => {
      console.log(err);
  })
  ```

  ```json
  [
      {
          "data": {
              "code": 200001,
              "msg": "success",
              "data": {
                  "JSON": {
                      "data": "test"
                  }
              }
          },
          "status": 200,
          "statusText": "",
          "headers": {
              "content-length": "75",
              "content-type": "application/json;charset=UTF-8"
          },
          "config": {
              "url": "https://json.tewx.cn/user/API_kdd531mytfdzm06i?sdAS1dsnuUa3sd=32&Jsdh4bajs99dii=czmaliu9jahf4dws",
              "method": "get",
              "headers": {
                  "Accept": "application/json, text/plain, */*"
              },
              "transformRequest": [
                  null
              ],
              "transformResponse": [
                  null
              ],
              "timeout": 0,
              "xsrfCookieName": "XSRF-TOKEN",
              "xsrfHeaderName": "X-XSRF-TOKEN",
              "maxContentLength": -1,
              "maxBodyLength": -1
          },
          "request": {}
      },
      {
          "data": {
              "code": 200001,
              "msg": "success",
              "data": {
                  "JSON": {
                      "data": "test"
                  }
              }
          },
          "status": 200,
          "statusText": "",
          "headers": {
              "content-length": "75",
              "content-type": "application/json;charset=UTF-8"
          },
          "config": {
              "url": "https://json.tewx.cn/user/API_kdd531mytfdzm06i?sdAS1dsnuUa3sd=32&Jsdh4bajs99dii=czmaliu9jahf4dws",
              "method": "get",
              "headers": {
                  "Accept": "application/json, text/plain, */*"
              },
              "transformRequest": [
                  null
              ],
              "transformResponse": [
                  null
              ],
              "timeout": 0,
              "xsrfCookieName": "XSRF-TOKEN",
              "xsrfHeaderName": "X-XSRF-TOKEN",
              "maxContentLength": -1,
              "maxBodyLength": -1
          },
          "request": {}
      },
      {
          "data": {
              "code": 200001,
              "msg": "success",
              "data": {
                  "JSON": {
                      "data": "test"
                  }
              }
          },
          "status": 200,
          "statusText": "",
          "headers": {
              "content-length": "75",
              "content-type": "application/json;charset=UTF-8"
          },
          "config": {
              "url": "https://json.tewx.cn/user/API_kdd531mytfdzm06i?sdAS1dsnuUa3sd=32&Jsdh4bajs99dii=czmaliu9jahf4dws",
              "method": "get",
              "headers": {
                  "Accept": "application/json, text/plain, */*"
              },
              "transformRequest": [
                  null
              ],
              "transformResponse": [
                  null
              ],
              "timeout": 0,
              "xsrfCookieName": "XSRF-TOKEN",
              "xsrfHeaderName": "X-XSRF-TOKEN",
              "maxContentLength": -1,
              "maxBodyLength": -1
          },
          "request": {}
      }
  ]
  ```

#### 全局配置

```js
axios.defaults.baseURL = "https://json.tewx.cn/";	//基本地址 全局配置只能式是一个
axios.defaults.timeout = 5000;	//超时时间
axios.defaults.headers.post['content-type'] = "application/x-www-form-urlencoded";	

axios.defaults.transformRequest = function (data) {
    return JSON.stringify(data);
}
```

#### 实例配置

```js
// 实例
let selfAxios = axios.create({
    baseURL: "https://json.tewx.cn/",
    timeout: 3000
});

selfAxios.get("user/API_kdd531mytfdzm06i?sdAS1dsnuUa3sd=32&Jsdh4bajs99dii=czmaliu9jahf4dws").then(res => {
    console.log(res);
})
```

#### 拦截器应用

- 为每个请求带上的参数，比如token，时间戳

- 对返回的状态进行判断，token是否过期

- 请求拦截器

  ```js
  // 请求拦截器
  selfAxios.interceptors.request.use(config => {
      console.log("request");
      config.headers['token'] = "123";
      return config;  //放行
  },err => {
      console.log(err);
  })
  ```

- 响应拦截器

  ```js
  // 响应拦截器
  selfAxios.interceptors.response.use(resp => {
      console.log("response");
      console.log(resp);
      return resp;  //放行
  },err => {
      console.log(err);
  })
  ```

