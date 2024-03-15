<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value = ref('');
    const allowEmptyValueSearch = ref(true);
    const source = ref([
      'C#',
      'C',
      'C++',
      'CPython',
      'Java',
      'JavaScript',
      'Go',
      'Python',
      'Ruby',
      'F#',
      'TypeScript',
      'SQL',
      'LiveScript',
      'CoffeeScript',
    ]);
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

<style lang="scss" scoped>
h1 {
  margin: 0 0 0 0;
  padding-top: 20px;
  padding-bottom: 20px;
  color: var(--devui-text);
}

.G {
  background-color: var(--devui-global-bg);
  min-height: calc(100vh - 40px);
  display: flex;
  flex-direction: column;
}

.box {
  width: 80%;
  display: flex;
}
.part {
  width: 50%;
  height: 100%;
}
.part, .inventory{
  flex: 1;

}
.inventory {
  height: 28rem;
}
.inv-pic {
  width: 100%;
}
.flex-cc {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.bni {
  position: relative;
  width: 100%;
  margin-top: -6px;
  margin-bottom: -6px;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  &:before {
    content: '';
    display: block;
    padding-top: calc((135 / 194) * 100%);
  }
}
.overlay-s {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  &:before {
    content: '';
    display: block;
    padding-top: 100%;
    user-select: none;
  }
}
.tabs {
  flex: 1;
  height: 3rem;
  width: 3rem;
}
.flex-center-sb {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.reverse {
  transform: scaleY(-1);
}
.inventory {
  user-select: none;
}
.tab_img {
  width: 60%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>