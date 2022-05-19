<template>
  <div class="logo">영화 검색해보슈~</div>
  <form @submit.prevent="onSubmit">
    <input ref="query" @input="value = $event.target.value" />
    <button>검색</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      value: "",
    };
  },
  methods: {
    onSubmit() {
      this.$store.dispatch("movie/fetchMovie", this.value);
    },
  },
};
</script>

<style>
body {
  background-color: black;
}
form {
  text-align: center;
}

.logo {
  color: aliceblue;
  font-weight: bold;
  font-size: 30px;
  text-align: center;
  padding: 10px;
}

input {
  width: 500px;
  height: 40px;
  font-size: 13px;
  border: 0;
  border-radius: 15px;
  outline: none;
  padding-left: 15px;
  margin: 15px;
  background-color: rgb(233, 233, 233);
}
button {
}
</style>
