<script setup lang="ts">
import {
  tab_img1, tab_img2, tab_img3, tab_img4, tab_img5
} from "@/assets/Material/gui/tab/tab_img.js";

import { ref } from "vue";

const tab_img = [tab_img1, tab_img2, tab_img3, tab_img4, tab_img5]; // 将图像引用存储在数组中
const tab = [
  '建筑方块',
  '装饰性方块',
  '红石',
  '交通运输',
  '杂项',
  '食物',
  '工具',
  '战斗用品',
  '酿造',
  '生产模式物品栏'
]

const inv_top = ref<Array<{ id: string; tab: string; tab_img: any }>>([]);
const inv_down = ref<Array<{ id: string; tab: string; tab_img: any }>>([]);

for (let i = 1; i <= 5; i++) {
  inv_top.value.push({
    id: i.toString().padStart(3, '0'),
    tab: tab[i % tab.length],
    tab_img: tab_img[i % tab_img.length]
  });
}
for (let i = 6; i <= 10; i++) {
  inv_down.value.push({
    id: i.toString().padStart(3, '0'),
    tab: tab[i % tab.length],
    tab_img: tab_img[i % tab_img.length]
  });
}
</script>


<template>
  <div class="G" style="align-items: center">
    <h1>建筑材料申请</h1>
    <div class="box">
      <div class="inventory">
        <div class="inv-pic flex-center-sb">
          <div class="left flex-center-sb" style="justify-content: left">
            <div style="position: relative " v-for="item in inv_top">
              <img class="tabs" src="../assets/Material/gui/creative_inventory/tab-classify-set.png">
              <div class="overlay-s">
                <img :key="item.id" :src="item.tab_img" class="overlay-s tab_img" alt="">
              </div>
            </div>
          </div>
          <div style="position: relative " class="right flex-center-sb">
            <img class="tabs" src="../assets/Material/gui/creative_inventory/tab-classify-set.png">
            <div class="overlay-s"></div>
          </div>
        </div>
        <div class="bni">
          <img class="inv-pic" src="../assets/Material/gui/creative_inventory/tab_items.png">
          <div class="overlay">
        </div>

        </div>
        <div class="inv-pic flex-center-sb">
          <div class="left flex-center-sb" style="justify-content: left">
            <div style="position: relative " v-for="item in inv_down">
              <img class="tabs reverse" src="../assets/Material/gui/creative_inventory/tab-classify-set.png">
              <div class="overlay-s">
                <img :key="item.id" :src="item.tab_img" class="overlay-s tab_img" alt="">
              </div>
            </div>
          </div>
          <div style="position: relative " class="right flex-center-sb">
            <img class="tabs reverse" style="margin-top: -5px" src="../assets/Material/gui/creative_inventory/tab-classify-set.png">
            <div class="overlay-s"></div>
          </div>
        </div>
      </div>
      <div class="part">

      </div>
    </div>
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