import type { RouteRecordRaw } from "vue-router";

const uploadRoutes: RouteRecordRaw[] = [
  {
    path: "/upload",
    name: "Upload",
    component: () => import("@/views/Upload.vue"),
  },
];

export default uploadRoutes;
