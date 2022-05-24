export default {
  namespaced: true,
  state() {
    return {
      query: "",
      page: "1",
      movieList: {},
      movieDetail: {},
    };
  },
  mutations: {
    assignState(state, payload) {
      Object.keys(payload).forEach((key) => {
        state[key] = payload[key];
      });
    },
    query(state, newQuery) {
      state.query = newQuery;
    },
    page(state, newPage) {
      state.page = newPage;
    },
  },
  actions: {
    async fetchMovie({ commit }, options) {
      const movieList = await fetch("/.netlify/functions/MovieListSearch", {
        method: "POST",
        body: JSON.stringify(options),
      }).then((res) => res.json());
      commit("query", options.value);
      commit("page", options.page);
      commit("assignState", { movieList });
    },
    async fetchMovieDetail({ commit }, options) {
      const movieDetail = await fetch("/.netlify/functions/MovieInfoSearch", {
        method: "POST",
        body: JSON.stringify(options),
      }).then((res) => res.json());
      commit("assignState", {
        movieDetail,
      });
    },
  },
};
