<template>
  <div>
    <Category category-title="caca" category-value=9 />
    <router-link to="/" tag="button">Home</router-link>
  </div>
</template>

<script>
import Category from '@/components/Category.vue' 

export default {  

  components: {
    Category
  }
};
</script>

<style></style>
