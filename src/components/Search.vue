<template>
  <div class="logo">영화 검색해보슈</div>
  <form @submit.prevent="onSubmit">
    <input ref="query" @input="value = $event.target.value" />
    <button>검색</button>
  </form>
  <Loading v-show="loading" />
</template>

<script>
import Loading from "~/components/Loading";

export default {
  data() {
    return {
      value: "",
      loading: false,
    };
  },
  methods: {
    onSubmit() {
      this.loading = true;
      this.$store.dispatch("movie/fetchMovie", { value: this.value });
      this.loading = false;
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

<style>
form {
  text-align: center;
}

.logo {
  color: aliceblue;
  font-weight: bold;
  font-size: 30px;
  text-align: center;
  padding: 20px;
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
