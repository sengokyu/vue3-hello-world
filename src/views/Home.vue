<template>
  <div class="home">
    <HelloForm @submit="onSubmit" :name="name"></HelloForm>
  </div>
</template>

<script>
import { defineComponent } from "vue";
// @ is an alias to /src
import HelloForm from "@/components/HelloForm.vue";

export default defineComponent({
  name: "Home",
  components: {
    HelloForm,
  },
  computed: {
    name() {
      return this.$store.state.helloWorld.name;
    },
  },
  methods: {
    onSubmit(value) {
      this.$store.commit("helloWorld/setName", value);
      this.$router.push("/result");
    },
  },
});
</script>
<style>
.home {
  margin: 16px;
}
</style>
