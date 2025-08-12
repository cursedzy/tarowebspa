import { createRouter, createWebHistory } from "vue-router"
import routes from "./routes"

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top when changing routes
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

// Navigation guards
router.beforeEach((to, from, next) => {
  // Update document title based on route meta
  if (to.meta.title) {
    document.title = `${to.meta.title} - Таро Spirit`
  } else {
    document.title = "Таро Spirit - Профессиональные расклады и обучение"
  }

  next()
})

export default router
