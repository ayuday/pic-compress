const { VITE_HIDE_HOME } = import.meta.env;
import {
  type Router,
  createRouter,
  type RouteRecordRaw,
  type RouteComponent,
  createWebHistory,
  createWebHashHistory
} from "vue-router";
import { getHistoryMode } from "./utils";

const remainingRouter: Array<RouteRecordRaw> = 
[
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/home/index.vue"),
    meta: {
      title: "登录",
      showLink: false,
      rank: 101
    }
  },
]


/** 创建路由实例 */
export const router: Router = createRouter({
  history: createWebHistory(),
  routes: remainingRouter,
  strict: true,
});



export default router;