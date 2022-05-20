import { createRouter, createWebHistory } from "vue-router";
import MovieInfo from "./MovieInfo";
import Search from "./Search";
import MovieList from "./MovieList";

export default createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      name: "MovieInfo",
      path: "/movieInfo/:id",
      component: MovieInfo,
    },
    {
      name: "MovieList",
      path: "/movieList/:query",
      component: MovieList,
    },
    {
      name: "Search",
      path: "/",
      component: Search,
    },
  ],
});
