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
    async fetchMovie({ commit }, value = "") {
      const movieList = await fetch(
        `https://www.omdbapi.com?apikey=7035c60c&s=${value}&page=89"`,
        {
          method: "GET",
        }
      ).then((res) => res.json());
      commit("assignState", {
        movieList,
      });
    },
    async fetchMovieDetail({ commit }, payload) {
      const { id } = payload;
      const movieDetail = await fetch(
        `https://www.omdbapi.com?apikey=7035c60c&i=${id}&plot=full"`,
        {
          method: "GET",
        }
      ).then((res) => res.json());
      commit("assignState", {
        movieDetail,
      });
    },
  },
};
