import request from "../../network/request";

export async function getHomeData() {
    return await request.get("/api/index");
}

export async function getHomeGoods(type="sales", page=1) {
    return await request.get(`/api/index?${type}=1&page=${page}`)
}