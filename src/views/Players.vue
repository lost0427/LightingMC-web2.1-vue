<script setup lang="ts">
import { ref } from "vue";
const items = ref([
  {
    text: '\n' +
        'Neboer 在灵动MC服务器中担任一项至关重要的角色，作为当前的运营人员（OP），他不仅是技术维护的骨干，也是插件管理的专家，确保了服务器运行的平稳和高效。他的职责范围广泛，从监督服务器的日常运行，到定期更新和维护各种插件，以提升玩家的游戏体验。Neboer 拥有深厚的技术背景和对Minecraft服务器运维的深刻理解，使他能够迅速响应并处理玩家的请求和问题。\n' +
        '\n' +
        '在Neboer的管理下，灵动MC服务器不仅提供了一个稳定和流畅的游戏环境，还通过不断引入和更新插件来增强游戏的互动性和趣味性。他紧密跟踪最新的技术趋势和玩家社区的反馈，以便不断优化服务器设置，提供更加丰富和多样化的游戏内容。',
    imageUrl: '../src/assets/Players/Neboer.jpg'
  },
  {
    text: 'lockoct是灵动吉祥物，作为运营团队的一员参与决议服务器的重大事项。',
    imageUrl: '../src/assets/Players/Lockoct.jpg'
  },
  {
    text: 'wsbz是灵动MC的创始人兼上任OP，同时也是服务器的插件开发者。',
    imageUrl: '../src/assets/Players/Wsbz.jpg'
  },
  {
    text: 'Groundhog是灵动MC的管理员，负责和玩家互动，与玩家接触并解决玩家遇到的问题。',
    imageUrl: '../src/assets/Players/Groundhog.jpg'
  },
  {
    text: 'page 5',
    imageUrl: '../src/assets/Players/Retrieve0.jpg'
  },
  {
    text: 'Krusl是灵动MC系统工程师，负责解决与操作系统、游戏优化、网络IO等相关的技术问题。',
    imageUrl: '../src/assets/Players/Krusl.jpg'
  },
  {
    text: 'Ducksoft是灵动MC工程师兼赞助人，他为服务器提供了高防高性能的实例，使举办大型派对成为可能。',
    imageUrl: '../src/assets/Players/Ducksoft.jpg'
  },
  {
    text: 'page 8',
    imageUrl: '../src/assets/Players/Taffy.jpg'
  },
  {
    text: 'page 9',
    imageUrl: '../src/assets/Players/Lukai.jpg'
  },
  {
    text: 'page 10',
    imageUrl: '../src/assets/Players/Amur Lynx.jpg'
  },
]);
</script>

<template>
<div class="G">
  <d-carousel height="200px" autoplay :autoplay-speed="3000000">
    <d-carousel-item class="d-carousel-item" v-for="item in items" :key="item.text">
      <!-- 显示图片 -->
      <img :src="item.imageUrl" alt="carousel image" class="carousel-image">
      <!-- 显示文本 -->
      <div class="carousel-text">{{ item.text }}</div>
    </d-carousel-item>
  </d-carousel>
</div>
</template>

<style scoped lang="scss">
.G {
  min-height: calc(100vh - 40px);
}
.carousel-image {
  height: 100px;
  border-radius: 500px;
  margin-left: 40px;
  margin-right: 20px;
}
.d-carousel-item {
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--devui-global-bg, #f3f6f8);
}
.carousel-text {
  margin-left: 20px;
  margin-right: 40px;
text-align: left;
}
</style>