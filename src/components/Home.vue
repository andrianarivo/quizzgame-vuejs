<template>
  <div class="columns buttons are-medium">
    <div class="column is-one-third flex-center">
      <router-link class="button is-success is-rounded" to="/categories" tag="button">Play</router-link> 
    </div>
    <div class="column is-one-third flex-center">
      |
    </div>
    <div class="column is-one-third flex-center">
      <router-link class="button is-rounded" to="/about" tag="button">About</router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.flex-center {
  display: flex;
  justify-content: center;
}
</style>