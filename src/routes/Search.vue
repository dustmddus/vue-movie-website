<template>
  <div class="search">
    <Search />
  </div>
</template>

<script>
import Search from "~/components/Search";

export default {
  components: {
    Search,
  },
};
</script>

<style lang="scss" scoped>
.search {
  margin: 200px;
}
</style>
