<template>
  <div>
    <div class="columns">
      <Category category-title="Film" v-bind:path="filmPath" />
      <Category category-title="Music" v-bind:path="musicPath" />
      <Category category-title="Games" v-bind:path="gamesPath" />
      <Category category-title="Board Games" v-bind:path="boardGamesPath" />
      <Category category-title="Manga" v-bind:path="mangaPath" />
    </div>
    <router-link class="button is-danger is-rounded" to="/" tag="button">Home</router-link>
  </div>
</template>

<script>
import Category from "@/components/Category.vue";
import PathBuilder from "@/models/PathBuilder";

export default {
  data() {
    return {
      filmPath: {},
      musicPath: {},
      gamesPath: {},
      boardGamesPath: {},
      mangaPath: {},
    };
  },

  components: {
    Category,
  },

  mounted() {
    this.filmPath = new PathBuilder(5)
      .withCategory(11)
      .withDifficulty("easy")
      .withType("multiple")
      .build();
    this.musicPath = new PathBuilder(5)
      .withCategory(12)
      .withDifficulty("easy")
      .withType("multiple")
      .build();
    this.gamesPath = new PathBuilder(5)
      .withCategory(15)
      .withDifficulty("easy")
      .withType("multiple")
      .build();
    this.boardGamesPath = new PathBuilder(5)
      .withCategory(16)
      .withDifficulty("easy")
      .withType("multiple")
      .build();
    this.mangaPath = new PathBuilder(5)
      .withCategory(31)
      .withDifficulty("easy")
      .withType("multiple")
      .build();
  },
};
</script>

<style></style>
