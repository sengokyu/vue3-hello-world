<template>
  <div class="hello-result">{{ message }}</div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    message: { type: String },
  },
});
</script>
