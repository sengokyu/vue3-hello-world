<template>
  <ui-top-app-bar type="1">Vue.js ことはじめ</ui-top-app-bar>
  <div class="main-container">
    <UiGallery></UiGallery>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UiGallery from "./components/UiGallery.vue";

export default defineComponent({
  name: "App",
  components: {
    UiGallery,
  },
});
</script>
<style>
.mdc-top-app-bar {
  top: 0;
}
.main-container {
  margin-top: 80px;
}
</style>
