<script lang="ts">
import { defineComponent, ref } from 'vue';
import sourceData from '../assets/Material.json';

export default defineComponent({
  setup() {
    const value = ref('');
    const allowEmptyValueSearch = ref(true);

    const source = ref(sourceData);
    const selectValue = (e) => {
      console.log('selectValue', e);
    };
    const transInputFocusEmit = () => {
      console.log('transInputFocusEmit');
    };
    const position = ref(['bottom']);
    return {
      value,
      source,
      allowEmptyValueSearch,
      transInputFocusEmit,
      selectValue,
      position,
    };
  },
});
</script>


<template>
  <div class="G" style="align-items: center">
    <h1>建筑材料申请</h1>
    <d-auto-complete
        :delay="1000"
        :source="source"
        v-model="value"
        :allow-empty-value-search="allowEmptyValueSearch"
        :select-value="selectValue"
        :trans-input-focus-emit="transInputFocusEmit"
        :position="position"
        :width="420"
        :append-to-body="false"
    >
    </d-auto-complete>
  </div>
</template>

<style lang="scss">
h1 {
  margin: 0 0 0 0;
  padding-top: 20px;
  padding-bottom: 20px;
  color: var(--devui-text);
}
.flex-cc {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.G {
  background-color: var(--devui-global-bg);
  min-height: calc(100vh - 40px);
  display: flex;
  flex-direction: column;
}
</style>