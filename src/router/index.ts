import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue"
import Gallery from "../views/Gallery.vue"
import Material from "../views/Material.vue"
import Material_ from "../views/Material_.vue"
import Documents from "../views/Documents.vue"
import about from "../views/about.vue";
import ErrorPage from "../views/ErrorPage.vue";

const router = createRouter(
  {
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: "/",
        name: "HomePage",
        component: HomePage,
      },
      {
        path: "/Gallery",
        name: "Gallery",
        component: Gallery,
      },
      {
        path: "/Documents",
        name: "Documents",
        component: Documents,
      },

      {
        path: "/Material",
        name: "Material",
        component: Material,
      },

      {
        path: "/Material_",
        name: "Material_",
        component: Material_,
      },

      {
        path: "/about",
        name: "about",
        component: about,
      },

      {
        path:'/:pathMatch(.*)',
        name:'ErrorPage',
        component: ErrorPage,
      }
    ]
  }
)

export default router;