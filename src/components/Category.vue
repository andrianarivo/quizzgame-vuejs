<template>
  <div>
    <h1>{{ categoryTitle }}</h1>
    <button @click="test">Go</button>
  </div>
</template>

<script>
import PathBuilder from '@/models/PathBuilder'

export default {
  props: {
    categoryTitle: String,
    categoryValue: Number
  },
  data ()
  {
    return {
      path: ""
    }
  },
  methods: {
    test () {
      this.path = new PathBuilder(5)
      .withCategory(9)
      .withDifficulty("easy")
      .withType("multiple")
      .build().getPath()
    }
  }
};
</script>

<style></style>
