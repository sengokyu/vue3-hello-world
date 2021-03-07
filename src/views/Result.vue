<template>
  <div class="result">
    <HelloResult :message="message"></HelloResult>
  </div>
</template>
<script lang="ts">
import HelloResult from "@/components/HelloResult.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    HelloResult,
  },
  computed: {
    message() {
      return this.$store.getters["helloWorld/message"];
    },
  },
});
</script>
<style>
.result {
  text-align: center;
  font-size: 3em;
}
</style>
