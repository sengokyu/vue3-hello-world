<template>
  <div class="ui-button">
    <ui-button>テキスト</ui-button>
    <ui-button outlined>アウトラインのみ</ui-button>
    <ui-button raised>浮き上がり</ui-button>
    <ui-button icon="favorite">アイコンあり</ui-button>
  </div>
  <div class="ui-form">
    <ui-form nowrap item-margin-bottom="16" label-width="80">
      <template #default="{ subitemClass, actionClass }">
        <ui-form-field>
          <label class="required">Input:</label>
          <ui-textfield></ui-textfield>
        </ui-form-field>
        <ui-form-field>
          <label>Select:</label>
          <ui-select></ui-select>
        </ui-form-field>
        <ui-form-field>
          <label>Checkbox:</label>
          <div :class="subitemClass">
            <ui-form-field v-for="i in 3" :key="i">
              <ui-checkbox :value="i" :input-id="`checkbox-${i}`"></ui-checkbox>
              <label :for="`checkbox-${i}`">Checkbox {{ i }}</label>
            </ui-form-field>
          </div>
        </ui-form-field>
        <ui-form-field>
          <label>Radio:</label>
          <div :class="subitemClass">
            <ui-form-field v-for="i in 3" :key="i">
              <ui-radio
                name="radio"
                :value="i"
                :input-id="`radio-${i}`"
              ></ui-radio>
              <label :for="`radio-${i}`">Radio {{ i }}</label>
            </ui-form-field>
          </div>
        </ui-form-field>
        <ui-form-field :class="actionClass">
          <ui-button raised>Submit</ui-button>
          <ui-button outlined>Cancel</ui-button>
        </ui-form-field>
      </template>
    </ui-form>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UiGallery",
});
</script>
<style>
</style>
