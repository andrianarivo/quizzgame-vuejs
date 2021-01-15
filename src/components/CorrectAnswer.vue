<template>
  <div class="column">
    <div class="card correct">
      <div class="card-content">
        <div class="content" v-html="correctTitle"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    correctTitle: {},
  },
};
</script>

<style>
.correct
{
  background-color: #42f5a7;
}
</style>