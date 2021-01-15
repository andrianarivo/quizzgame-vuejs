<template>
  <div>
    <h1 class="title" v-html="questionTitle"></h1>
  </div>
</template>

<script>
export default {
  props: {
    questionTitle: {}
  },
};
</script>

<style>
</style>