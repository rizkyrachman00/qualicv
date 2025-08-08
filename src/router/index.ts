import { createRouter, createWebHistory } from "vue-router";

import homeRoutes from "./routes/home.routes";
import uploadRoutes from "./routes/upload.routes";

const routes = [
  ...homeRoutes, 
  ...uploadRoutes
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
