import { createRouter, createWebHistory } from "vue-router";
import Movie from "./Movie";
import NotFound from "./NotFound";

export default createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      name: "Movie",
      path: "/movie/:id",
      component: Movie,
    },
    {
      path: "/:notFound(.*)",
      component: NotFound,
    },
  ],
});
