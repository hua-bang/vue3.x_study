import { request } from "../network/request";

export function getData() {
    return new Promise((resolve, reject) => {
        request.get("user/API_kdd531mytfdzm06i?sdAS1dsnuUa3sd=32&Jsdh4bajs99dii=gnnvkeaux1fhyhvm")
            .then(res => {
                resolve(res)
            }).catch(err => {
                reject(err);
        })
    })
}

export async function getAsyncData() {
    return await request.get("user/API_kdd531mytfdzm06i?sdAS1dsnuUa3sd=32&Jsdh4bajs99dii=gnnvkeaux1fhyhvm");
}