<template>
  <div class="logo">
    <RouterLink to="/">영화 검색해보슈👀</RouterLink>
  </div>
  <form @submit.prevent="onSubmit">
    <input ref="query" @input="value = $event.target.value" />
    <button>검색</button>
  </form>
  <Loading v-show="$store.state.movie.loading" />
</template>

<script>
import Loading from "~/components/Loading";

export default {
  data() {
    return {
      value: "",
    };
  },
  methods: {
    onSubmit() {
      this.$store.dispatch("movie/fetchMovie", {
        value: this.value,
        page: 1,
      });
      this.$router.push({
        name: "MovieList",
        params: {
          query: this.value,
        },
      });
    },
  },
  components: {
    Loading,
  },
};
</script>

<style lang="scss" scoped>
form {
  text-align: center;
}

.logo {
  text-align: center;
  margin-top: 20px;
  a {
    text-decoration: none;
    color: white;
    font-size: 30px;
  }
}

input {
  width: 400px;
  height: 40px;
  font-size: 13px;
  border: 0;
  border-radius: 15px;
  outline: none;
  padding-left: 15px;
  margin-bottom: 50px;
  margin-top: 20px;
  background-color: rgb(233, 233, 233);
}
button {
  margin-left: 10px;
  background-color: aliceblue;
  width: 50px;
  height: 40px;
  border-radius: 7px;
}

</style>
