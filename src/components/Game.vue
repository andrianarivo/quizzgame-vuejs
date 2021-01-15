<template>
  <div>
    <div v-for="(val, key) in questions" :key="key">
      <Question :question-title="val.question" />
      <div class="columns my-3">
        <IncorrectAnswer
          v-for="(v, k) in val.incorrect_answers"
          :key="k"
          :incorrect-title="v"
        />
        <CorrectAnswer :correct-title="val.correct_answer" />
      </div>
    </div>
    <router-link class="button is-warning is-rounded" to="/categories" tag="button">Back</router-link>
  </div>
</template>

<script>
import Question from "@/components/Question.vue";
import IncorrectAnswer from "@/components/IncorrectAnswer.vue";
import CorrectAnswer from "@/components/CorrectAnswer.vue";

export default {
  data() {
    return {
      questions: [],
    };
  },

  components: {
    Question,
    IncorrectAnswer,
    CorrectAnswer,
  },

  mounted() {
    this.questions = this.$store.state.questions;
  },
};
</script>

<style>
</style>