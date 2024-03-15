<script setup lang="ts">
import HomePage from "../components/HomePage.vue";
import ServerImage from "../assets/HomePage/Server.png";
import TeamImage from "../assets/HomePage/Team.png";
import ProtectImage from "../assets/HomePage/Protect.png";
import CommunityImage from "../assets/HomePage/Community.png";
import ActivityImage from "../assets/HomePage/Activities.png";
import SwordImage from "../assets/HomePage/Sword.png";
import "../assets/fonts/fonts.css"
import SellerCard from "../components/SellerCard.vue";
import {ref} from "vue";


/*
const status = null;

function mounted() {
  axios.get('https://your-api-url.com/status')
      .then(response => {
        this.status = response.data; // 假设后台返回的数据是 0 或 1
      })
      .catch(error => {
        console.error(error);
      });
}
document.addEventListener("DOMContentLoaded", function() {
  mounted()
});
*/
const showBox1 = ref(true);
const showBox2 = ref(false);

const toggleBoxes = () => {
  showBox1.value = !showBox1.value;
  showBox2.value = !showBox2.value;
};
</script>

<template>
  <div class="G">
    <div class="background">
      <div class="banner">
        <div class="banner-text no-select">灵动Minecraft</div>
        <div class="description-text no-select">
          一个<strong style="color: lightcoral">有爱</strong>的公益MC服务器社区
        </div>

      </div>
      <div class="seller">
        <div class="description-text" v-if="showBox2">
          <seller-card
              title="服务器地址"
              :icon="['fas', 'fa-server']"
              content="mc.ldgame.xyz"
              color="black"
          ></seller-card>
          <seller-card
              title="游戏版本"
              :icon="['fas', 'fa-gamepad']"
              content="1.19.1 Java/基岩"
              color="green"
          ></seller-card>
          <seller-card
              title="QQ交流群"
              :icon="['fab', 'fa-qq']"
              content="239434096"
              color="deepskyblue"
          ></seller-card>
        </div>
        <d-button v-if="showBox1" @click="toggleBoxes" variant="solid" size="lg" class="scrollButton">
          <strong>立刻加入</strong>
        </d-button>
        <div v-if="showBox1" class="more no-select">
          了解更多
        </div>
        <div v-if="showBox1" class="arrow">
        </div>
      </div>
    </div>
    <div class="introduce">
      <HomePage
          title="高性能的服务器"
          artical="我们有来自赞助团队捐助的华为云高性能服务器，您将享受卓越的游戏性能、低延迟的游戏体验以及稳定性。华为云服务器为我们提供了出色的基础，让您尽情畅玩Minecraft的世界。加入我们，一同探索这个精彩的服务器世界，创造和冒险，尽情享受游戏乐趣"
          :img="ServerImage"
      ></HomePage>
      <HomePage
          title="热心、高技术力且有经验的团队"
          artical="我们的技术团队积累了长达六年的公益MC服务器运维经验，深知服务器稳定性的重要性，致力于确保服务器的顺畅运行。我们提供专业水平的维护和支持，以便您能够专注于畅快的游戏体验，不管您在游戏中遇到什么挑战，我们的技术团队都将竭诚为您提供支持和解决方案。"
          :img="TeamImage"
      ></HomePage>
      <HomePage
          title="保护您在Minecraft世界中的一切"
          artical="开放的MC服务器难免会遇到捣蛋鬼，因此灵动MC使用了很多插件来保护来自各个玩家的宝贵劳动成果，这些插件有很多都是自主开发的。 此外，灵动MC确保游戏用户都同意我们的用户协议，而在用户协议中我们明确声明灵动MC保护您在MC中的一切建造和设计，您对您的建筑和设计有完全的所有权和处置权"
          :img="ProtectImage"
      ></HomePage>
      <HomePage
          title="活跃的玩家社区"
          artical="我们的服务器欢迎来自全世界各地的玩家加入。在我们的服务器中，您将能够与来自不同地方的玩家互动，分享游戏乐趣并结交新朋友。群里的活跃玩家有近20人，这意味着无论何时，您都可以轻松找到志同道合的小伙伴，一起探险、建设和冒险。"
          :img="CommunityImage"
      ></HomePage>
      <HomePage
          title="丰富多彩的活动"
          artical="我们的团队鼓励玩家自己策划各种活动，维护团队也会参与到一些活动的策划之中。服务器会不时举行各种庆典和派对，这些精彩活动包括各种主题活动、比赛、庆祝活动等等，确保服务器充满了欢乐和刺激。不管您是竞技玩家还是生存玩家，我们的活动将提供各种方式来享受与其他玩家互动。"
          :img="ActivityImage"
      ></HomePage>
      <HomePage
          title="纯粹的多人原版生存体验"
          artical="如果你觉得不加插件的MC很“没意思”，那我们指出原版生存服的玩法和乐趣并没有被彻底发掘。不管你是建筑党，还是生电大佬，还是MC生存专家，抑或是只想找一个陌生的地方探险、建立新的城市，服务器里总有一个适合你的角色，在等着你的到来！"
          :img="SwordImage"
      ></HomePage>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.background {
  background-image: url("../assets/HomePage/background.webp");
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 40px);
  max-width: 100vw;

}

/* .G {
  display: flex;
  flex-direction: column
} */

.banner {
  width: fit-content;
  height: 60vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.seller {
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.banner-text {
  color: white;
  font-size: 5rem;
  font-weight: bold;
  text-shadow: 2px 2px black;
}

.description-text {
  color: white;
  font-size: x-large;
  text-align: center;
}

.more {
  color: white;
  font-size: 1rem;
  text-align: center;
  margin-top: 20px;

}


.arrow {
  background-image: url("../assets/HomePage/arrow.png");
  background-position: center;
  background-size: cover;
  height: 6rem;
  width: 8rem;
  opacity: 50%;
  margin-top: 20px;

}
.introduce{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.h1 {
  font-size: 13rem;
  color: white;
  margin: 0 0 0 0;
}

.mg {
  margin-top: 52px;
  height: calc(100vh + 52px);

}

.no-select {
  user-select: none;
}
@media (max-width: 768px) {
  .h1 {
    font-size: 5rem;
  }

  .banner-text {
    color: white;
    font-size: 3rem;
    font-weight: bold;
    text-shadow: 2px 2px black;
  }

}
@media (min-width: 769px) {
}
</style>

