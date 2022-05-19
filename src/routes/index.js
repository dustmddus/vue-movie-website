import { createRouter, createWebHistory } from "vue-router";
import MovieInfo from "./MovieInfo";

export default createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      name: "MovieInfo",
      path: "/movieInfo/:id",
      component: MovieInfo,
    },
  ],
});
