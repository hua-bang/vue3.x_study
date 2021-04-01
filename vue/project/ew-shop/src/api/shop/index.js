import request from "../../network/request";

export async function getHomeData() {
    return await request.get("/api/index");
}