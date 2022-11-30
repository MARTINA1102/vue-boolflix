<template>
  <div class="navbar">
    <h1>BOOLFLIX</h1>
    <div>
      <label for="textf">Search your title
      <input type="text" id="textf" name="textf">
    </label>
    <button>CERCA</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderPage',
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
