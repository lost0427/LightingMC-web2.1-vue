<script setup lang="ts">
import {
  img1, img2, img3, img4, img5, img6, img7, img8, img9,
  img10, img11, img12, img13, img14, img15, img16, img17, img18, img19
} from "@/assets/Gallery";

import { ref } from "vue";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9,
  img10, img11, img12, img13, img14, img15, img16, img17, img18, img19]; // 将图像引用存储在数组中
const texts = [
  '2017暑假合影纪念',
  '2018暑假合影纪念',
  '服务器最近一段时间举办的最盛大的派对活动，最高峰的参与人数达到11人',
  '2022暑假合影',
  '黄昏的灵动机场',
  '灵动机场跑道起点',
  '午后的白鹭公馆',
  '白鹭公馆内部，Neboer的房间',
  'Groundhog建造的烧烤亭',
  '七周年派对准备点，Groundhog建造的，有蛋糕和多种木头。',
  '银色派对活动中心，由xx建造，我们在这里度过了一段难忘的时光',
  'Groundhog的家，很优雅的小楼',
  'Groundhog的另一个家，用来吸烟的……是不是有点奇怪？',
  '白天的灵动主岛，位于灵动主城的背面。',
  '灵动MC的主城的俯瞰景色',
  '黄昏的灵动主岛，也是首页配图的出处',
  '灵动博物馆的入口，在白天的景色',
  '灵动MC上一周目的首页配图',
  'Krusl和Neboer在这里开启了灵动MC的最新一周目',
]

const list = ref<Array<{ id: string; text: string; img: any }>>([]);

for (let i = 1; i <= 19; i++) {
  list.value.push({
    id: i.toString().padStart(3, '0'),
    text: texts[i % texts.length],
    img: images[i % images.length]
  });
}

</script>

<template>
  <div class="G flex-cc">
    <h1>灵动MC风景画廊</h1>
    <div class="gallery" v-d-image-preview>
      <div v-for="item in list" class="flex-cc">
        <img :key="item.id" class="img demo-card" :src="item.img" loading="lazy" alt=""/>
        {{ item.text }}

      </div>
    </div>


  </div>
  <div style="height: 60px"></div>
</template>

<style lang="scss" scoped>
.demo-card {
  cursor: pointer;
  transition:
      box-shadow .3s cubic-bezier(.645,.045,.355,1),
      transform .3s cubic-bezier(.645,.045,.355,1);

  &:hover {
    box-shadow: 0 4px 16px 0 rgba(0,0,0,.1);
    transform: translateY(-5px);
  }

  .card-block {
    /* margin-right: 16px;
*/
    i {
      cursor: pointer;
      font-size: 16px;
      vertical-align: middle;
    }

    i + span {
      vertical-align: middle;
    }
  }

  img {
    max-width: none;
  }

  .action-text {
    color: #8a8e99;
  }
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
}
h1 {
  margin: 0 0 0 0;
  padding-top: 20px;
  padding-bottom: 20px;
  color: var(--devui-text);
}
.gallery {
  min-height: 100vh;
  max-width: 80vw;
  background-color: beige;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.img {
  height: 300px;
  width: 500px;
  border-radius: 10px;
  margin: 10px 10px 10px 10px;
}
</style>