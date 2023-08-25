import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from "@/views/Dashboard.vue";
import Notification from "@/views/Notification.vue";
import Revenue from "@/views/Revenue.vue";

const routes = [
  { path: "/" ,name: "Dashboard", component: Dashboard},
  { path: "/Notification" ,name: "Notification", component: Notification},
  { path: "/Revenue" ,name: "Revenue", component: Revenue},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router