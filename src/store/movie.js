export default {
  namespaced: true,
  state() {
    return {
      movieList: {},
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
        `https://www.omdbapi.com?apikey=7035c60c&s=${value}"`,
        {
          method: "GET",
        }
      ).then((res) => res.json());
      commit("assignState", {
        movieList,
      });
    },
  },
};
