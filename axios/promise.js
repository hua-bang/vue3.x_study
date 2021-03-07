/**
 * @author hug
 * @date 2021/3/7 8:13
 */
new Promise((resolve, reject) => {
    resolve(1)
}).then(res => {
    return new Promise((resolve) => {
        resolve(++res)
    })
}).then(res => {
    return new Promise(resolve => {
        resolve(++res)
    })
}).then(res => {
    console.log(res);
    return res; //默认式Promise.resolve
})
