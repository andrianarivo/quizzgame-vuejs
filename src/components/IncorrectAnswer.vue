<template>
  <div class="column">
    <div class="card incorrect">
      <div class="card-content">
        <div class="content" v-html="incorrectTitle"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {  
  props: {
    incorrectTitle: {}
  },
};
</script>

<style>
.incorrect
{
  color: #f2f2f2;
  background-color: #f54269;
}
</style>