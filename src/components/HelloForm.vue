<template>
  <ui-form type="|" item-margin-bottom="16">
    <ui-form-field class="required">
      <ui-textfield
        v-model="name_"
        :required="true"
        helper-text-id="name-field-helper"
        maxlength="240"
      >
        お名前
      </ui-textfield>
      <ui-textfield-helper id="name-field-helper" :valid-msg="true">
        お名前を入力してください。
      </ui-textfield-helper>
    </ui-form-field>
    <ui-form-field>
      <ui-button raised @click="$emit('submit', name_)">Submit</ui-button>
    </ui-form-field>
  </ui-form>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: { name: { type: String, default: "" } },
  data() {
    return {
      name_: this.name,
    };
  },
  emits: ["submit"],
});
</script>
