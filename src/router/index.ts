import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue"
import Gallery from "../views/Gallery.vue"
import Material from "../views/Material.vue"
import Material_ from "../views/Material_.vue"
import Documents from "../views/Documents.vue"
import About from "../views/About.vue";
import ErrorPage from "../views/ErrorPage.vue";
import Login from "../views/Login.vue";
import Reg from "../views/Reg.vue";
import Test from "../views/Test.vue";
import PleaseQQ from "../views/PleaseQQ.vue";
import Blind from "../views/Blind.vue";

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
        path: "/About",
        name: "About",
        component: About,
      },

      {
        path: "/Login",
        name: "Login",
        component: Login,
      },

      {
        path: "/Reg",
        name: "Reg",
        component: Reg,
      },

      {
        path: "/Test",
        name: "Test",
        component: Test,
      },

      {
        path: "/PleaseQQ",
        name: "PleaseQQ",
        component: PleaseQQ,
      },

      {
        path: "/Blind",
        name: "Blind",
        component: Blind,
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