<template>
  <div class="navbar">
    <h1>BOOLFLIX</h1>
    <form @submit.prevent = " $emit('queryChange', queryString) ">
      <label for="s">
        <input id="s" type="text" placeholder="cerca..." v-model="queryString">
        <button>cerca</button>
      </label>
    </form>  </div>
</template>

<script>
export default {
  name: 'HeaderPage',
  data() {
    return {
      queryString: '',
    };
  },
};
</script>

<style lang="scss" scoped>
.navbar{
  background-color: black;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  width: 100vw;
  height: 5rem;
}
h1{
  color: red;
}

</style>
