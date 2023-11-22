import { createRouter, createWebHistory } from "vue-router";

import { HomePage, Gallery, Material, about, ErrorPage, Reg, Login } from '@views/';


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
        path: "/Material",
        name: "Material",
        component: Material,
      },

      {
        path: "/about",
        name: "about",
        component: about,
      },

      {
        path: "/Reg",
        name: "Reg",
        component: Reg,
      },

      {
        path: "/Login",
        name: "Login",
        component: Login,
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