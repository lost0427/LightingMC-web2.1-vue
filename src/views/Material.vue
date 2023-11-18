<script lang="ts">
import { ref, onMounted } from 'vue';

import { gsap } from 'gsap';

const text = ref(null);

onMounted(() => {
  gsap.from(text.value, {
    delay: 0.5,
    duration: 1,
    y: 100,
    autoAlpha: 0,
    ease: "back.out(1.7)",
  });
});
</script>


<template>
  <div class="G" style="align-items: center">
    <h1 ref="text" class="text">建筑材料申请</h1>
    <div class="contaner flex-cc">
      <div class="inventory">

      </div>
      <div class="publicise">

      </div>
    </div>
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