<script setup lang="ts">
import img1 from "../assets/Gallery/2017summer.png";
import img2 from "../assets/Gallery/2018summer.png";
import img3 from "../assets/Gallery/Party1.png";
import img4 from "../assets/Gallery/2022summer.png";
import img5 from "../assets/Gallery/Airport1.png";
import img6 from "../assets/Gallery/Airport2.png";

import img7 from "../assets/Gallery/Bailu1.png";
import img8 from "../assets/Gallery/Bailu2.png";
import img9  from "../assets/Gallery/BBQ.png";
import img10 from "../assets/Gallery/Party2.png";
import img11 from "../assets/Gallery/Party3.png";
import img12 from "../assets/Gallery/Groundhog1.png";
import img13 from "../assets/Gallery/Groundhog2.png";
import img14 from "../assets/Gallery/LDMC1.png";
import img15 from "../assets/Gallery/LDMC2.png";
import img16 from "../assets/Gallery/LDMC3.png";
import img17 from "../assets/Gallery/Museum1.png";
import img18 from "../assets/Gallery/LDMC4.png";
import img19 from "../assets/Gallery/LDMC5.png";
</script>

<template>
  <div class="G flex-cc">
    <h1>灵动MC风景画廊</h1>
    <d-card v-d-image-preview v-ripple="{ duration: 300 }" class="demo-card" :src=img1>

      <template #content>
        2017暑假合影纪念
      </template>
    </d-card>
    <d-card v-d-image-preview v-ripple="{ duration: 300 }" class="demo-card" :src=img2>

      <template #content>
        2018暑假合影纪念
      </template>
    </d-card>
    <d-card v-d-image-preview v-ripple="{ duration: 300 }" class="demo-card" :src=img3>

      <template #content>
        服务器最近一段时间举办的最盛大的派对活动，最高峰的参与人数达到11人
      </template>
    </d-card>
    <d-card v-d-image-preview v-ripple="{ duration: 300 }" class="demo-card" :src=img4>

      <template #content>
        2022暑假合影
      </template>
    </d-card>
    <d-card v-d-image-preview v-ripple="{ duration: 300 }" class="demo-card" :src=img5>

      <template #content>
        黄昏的灵动机场
      </template>
    </d-card>
    <d-card v-d-image-preview v-ripple="{ duration: 300 }" class="demo-card" :src=img6>

      <template #content>
        灵动机场跑道起点
      </template>
    </d-card>
    <d-card v-d-image-preview v-ripple="{ duration: 300 }" class="demo-card" :src=img7>

      <template #content>
        午后的白鹭公馆
      </template>
    </d-card>
    <d-card v-d-image-preview v-ripple="{ duration: 300 }" class="demo-card" :src=img8>

      <template #content>
        白鹭公馆内部，Neboer的房间
      </template>
    </d-card>
    <d-card v-d-image-preview v-ripple="{ duration: 300 }" class="demo-card" :src=img9>

      <template #content>
        Groundhog建造的烧烤亭
      </template>
    </d-card>
    <d-card v-d-image-preview v-ripple="{ duration: 300 }" class="demo-card" :src=img10>

      <template #content>
        七周年派对准备点，Groundhog建造的，有蛋糕和多种木头。
      </template>
    </d-card>
    <d-card v-d-image-preview v-ripple="{ duration: 300 }" class="demo-card" :src=img11>

      <template #content>
        银色派对活动中心，由xx建造，我们在这里度过了一段难忘的时光
      </template>
    </d-card>
    <d-card v-d-image-preview v-ripple="{ duration: 300 }" class="demo-card" :src=img12>

      <template #content>
        Groundhog的家，很优雅的小楼
      </template>
    </d-card>
    <d-card v-d-image-preview v-ripple="{ duration: 300 }" class="demo-card" :src=img13>

      <template #content>
        Groundhog的另一个家，用来吸烟的……是不是有点奇怪？
      </template>
    </d-card>
    <d-card v-d-image-preview v-ripple="{ duration: 300 }" class="demo-card" :src=img14>

      <template #content>
        白天的灵动主岛，位于灵动主城的背面。
      </template>
    </d-card>
    <d-card v-d-image-preview v-ripple="{ duration: 300 }" class="demo-card" :src=img15>

      <template #content>
        灵动MC的主城的俯瞰景色
      </template>
    </d-card>
    <d-card v-d-image-preview v-ripple="{ duration: 300 }" class="demo-card" :src=img16>

      <template #content>
        黄昏的灵动主岛，也是首页配图的出处
      </template>
    </d-card>
    <d-card v-d-image-preview v-ripple="{ duration: 300 }" class="demo-card" :src=img17>

      <template #content>
        灵动博物馆的入口，在白天的景色
      </template>
    </d-card>
    <d-card v-d-image-preview v-ripple="{ duration: 300 }" class="demo-card" :src=img18>

      <template #content>
        灵动MC上一周目的首页配图
      </template>
    </d-card>
    <d-card v-d-image-preview v-ripple="{ duration: 300 }" class="demo-card" :src=img19>

      <template #content>
        Krusl和Neboer在这里开启了灵动MC的最新一周目
      </template>
    </d-card>
  </div>
  <div style="height: 60px"></div>
</template>

<style lang="scss">
.demo-card {
  width: 80vw;
  cursor: pointer;
  transition:
      box-shadow .3s cubic-bezier(.645,.045,.355,1),
      transform .3s cubic-bezier(.645,.045,.355,1);

  &:hover {
    box-shadow: 0 4px 16px 0 rgba(0,0,0,.1);
    transform: translateY(-5px);
  }

  .card-block {
    margin-right: 16px;

    i {
      cursor: pointer;
      font-size: 16px;
      margin-right: 8px;
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
</style>