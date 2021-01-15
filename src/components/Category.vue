<template>
  <div class="column">
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">
          {{ categoryTitle }}
        </p>
      </header>
      <footer class="card-footer">
        <a
          class="button is-info card-footer-item"
          v-bind:class="{ 'is-loading': loading }"
          @click="go"
          >Go</a
        >
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    categoryTitle: String,
    path: {},
  },
  data() {
    return {
      loading: false
    };
  },
  methods: {
    go() {      
      this.loading = true;
      this.$http.get(this.path.getPath()).then(
        (response) => {
          this.$store.commit("SAVE", response.body.results);
          // TODO: Add loading animation
          this.$router.push("/game");
          this.loading = false;
        },
        (error) => {
          console.log(error);
        }
      );
    },
  },
};
</script>

<style></style>
