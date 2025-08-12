import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"

// Import centralized styles
import "./styles/main.css"
import "./styles/components.css"

const app = createApp(App)

app.use(router)

// Global error handler
app.config.errorHandler = (err, vm, info) => {
  console.error("Global error:", err, info)
}

app.mount("#app")
