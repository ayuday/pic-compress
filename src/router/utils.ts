
import {
    type RouterHistory,
    type RouteRecordRaw,
    type RouteComponent,
    createWebHistory,
    createWebHashHistory
  } from "vue-router";


/** 获取路由历史模式 https://next.router.vuejs.org/zh/guide/essentials/history-mode.html */
export function getHistoryMode(routerHistory): RouterHistory {
    // len为1 代表只有历史模式 为2 代表历史模式中存在base参数 https://next.router.vuejs.org/zh/api/#%E5%8F%82%E6%95%B0-1
    const historyMode = routerHistory.split(",");
    const leftMode = historyMode[0];
    const rightMode = historyMode[1];
    // no param
    if (historyMode.length === 1) {
        if (leftMode === "hash") {
        return createWebHistory("");
        } else if (leftMode === "h5") {
        return createWebHistory("");
        }
    } //has param
    else if (historyMode.length === 2) {
        if (leftMode === "hash") {
        return createWebHistory(rightMode);
        } else if (leftMode === "h5") {
        return createWebHistory(rightMode);
        }
    }
}
