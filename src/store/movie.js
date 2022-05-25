export default {
  namespaced: true,
  state() {
    return {
      query: "",
      page: "",
      loading: false,
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
    setQuery(state, newQuery) {
      state.query = newQuery;
    },
    setPage(state, newPage) {
      state.page = newPage;
    },
    setLoading(state) {
      state.loading = !state.loading;
    },
  },
  actions: {
    async fetchMovie({ commit }, options) {
      commit("setLoading");
      const movieList = await fetch("/.netlify/functions/MovieListSearch", {
        method: "POST",
        body: JSON.stringify(options),
      }).then((res) => res.json());
      commit("setQuery", options.value);
      commit("setPage", options.page);
      commit("assignState", { movieList });
      commit("setLoading");
    },
    async fetchMovieDetail({ commit }, options) {
      commit("setLoading");
      const movieDetail = await fetch("/.netlify/functions/MovieInfoSearch", {
        method: "POST",
        body: JSON.stringify(options),
      }).then((res) => res.json());
      commit("assignState", {
        movieDetail,
      });
      commit("setLoading");
    },
  },
};
