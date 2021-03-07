<template>
  <ui-top-app-bar
    content-selector="#content-main"
    fixed
    @nav="openMenu = !openMenu"
  >
    <div>
      Vue.js ことはじめ
    </div>
  </ui-top-app-bar>
  <div id="content-main">
    <ui-menu-anchor absolute>
      <ui-menu v-model="openMenu" @selected="onSelected">
        <ui-menuitem value="/">
          <ui-menuitem-icon><ui-icon>home</ui-icon></ui-menuitem-icon>
          <ui-menuitem-text>HOME</ui-menuitem-text>
        </ui-menuitem>
        <ui-menuitem value="/result">
          <ui-menuitem-icon></ui-menuitem-icon>
          <ui-menuitem-text>RESULT</ui-menuitem-text>
        </ui-menuitem>
      </ui-menu>
    </ui-menu-anchor>
    <router-view />
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      openMenu: false,
    };
  },
  methods: {
    onSelected(data) {
      this.$router.push(data.value);
    },
  },
});
</script>
