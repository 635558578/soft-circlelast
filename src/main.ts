import { createSSRApp } from "vue"
import App from "./App.vue"
<<<<<<< HEAD
import uviewPlus from "uview-plus"
=======

>>>>>>> a7dcd15 (软圈项目整合)
import pinia from "./store"

export function createApp() {
  const app = createSSRApp(App)
  app.use(pinia)
<<<<<<< HEAD
  app.use(uviewPlus)
=======
>>>>>>> a7dcd15 (软圈项目整合)
  return {
    app
  }
}
