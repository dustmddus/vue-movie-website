export default {
  namespaced: true,
  state() {
    return {
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
  },
  actions: {
    async fetchMovie({ commit }, options) {
      const movieList = await fetch("/.netlify/functions/MovieListSearch", {
        method: "POST",
        body: JSON.stringify(options),
      }).then((res) => res.json());
      commit("assignState", {
        movieList,
      });
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
