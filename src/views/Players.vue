<script setup lang="ts">
import { ref } from "vue";

const currentValue = ref('Welcome'); // 当前值的响应式变量
const lastValue = ref('Welcome'); // 当前值的响应式变量
const setValue = (value) => {
  lastValue.value = currentValue.value;
  currentValue.value = value; // 设置当前值
};
const Texts = ref([
    '伟大Neboer指引我们前进的方向！',
    '伟大Neboer指引我们走向服务器新时代！',
    '伟大Neboer是我们心中的红太阳！',
    '紧紧围绕以Neboer同志为中心的管理团队！',

])
const RandomText = ref('0');

const getRandomText = () => {
  const randomIndex = Math.floor(Math.random() * Texts.value.length);
  RandomText.value = Texts.value[randomIndex];
};
getRandomText()
const items = ref([
  {
    text: 'Neboer在灵动MC服务器中担任一项至关重要的角色，作为当前的运营人员，他不仅是技术维护的骨干，也是插件管理的专家，确保了服务器运行的平稳和高效。Neboer拥有深厚的技术背景和对Minecraft服务器运维的深刻理解，使他能够迅速响应并处理玩家的请求和问题。在Neboer的管理下，灵动MC服务器不仅提供了一个稳定和流畅的游戏环境，还通过引入和更新插件来增强游戏的互动性和趣味性。他紧密跟踪最新的技术趋势和玩家社区的反馈，以便不断优化服务器设置。他的伟大领导为服务器提供了更加丰富和多样化的游戏内容，是服务器玩家们心中的红太阳。',
    imageUrl: '../src/assets/Players/Neboer.jpg',
    text1: 'Neboer是灵动MC的现任OP，负责服务器的技术维护、插件维护、处理玩家请求等技术相关的事宜。\n'
  },
  {
    text: 'lockoct是灵动的吉祥物，不仅是运营团队的一员，更是在决策服务器重大事务时发挥着重要作用。Lockoct不仅参与决策服务器的重要事务，还担负着插件开发的重要角色。他参与并贡献了许多宝贵的想法和技术，为服务器的功能和体验不断增添新的亮点。其在决策过程中的参与不仅为团队提供了独特的视角，还在插件开发方面发挥着重要的技术支持和创意灵感。其活跃的角色不仅令团队精神更加振奋，也为团队的合作和发展注入了新的活力和创造力。',
    imageUrl: '../src/assets/Players/Lockoct.jpg',
    text1: 'lockoct是灵动吉祥物，作为运营团队的一员参与决议服务器的重大事项，同时也是服务器的插件开发者。',
  },
  {
    text: 'wsbz是灵动MC的创始人兼首席运营官，担任服务器的插件开发者一职。他不仅是该服务器的发起者，更是其中一个最早的管理员之一，从最初的构想到实际的运行，都离不开他的精心策划和领导。作为服务器的创始人之一，他在运营和管理方面拥有丰富的经验和深厚的技术功底，同时也对插件开发有着独到的见解和技能,同时不断地追求创新和提升，为服务器增添了无尽的可能性，为玩家们带来了更多的乐趣和挑战。他的领导力和技术能力为服务器的稳定运行和持续发展提供了坚实的支持和保障。',
    imageUrl: '../src/assets/Players/Wsbz.jpg',
    text1: 'wsbz是灵动MC的创始人兼上任OP，同时也是服务器的插件开发者。',
  },
  {
    text: 'Groundhog是灵动MC的资深管理员，担负着与玩家互动的重要职责。他以亲切和耐心的态度与玩家进行接触，倾听他们的需求和反馈，解决他们在游戏过程中遇到的各种问题。作为管理员，他不仅熟悉服务器的规则和运作机制，还具备良好的沟通能力和解决问题的技能，能够及时有效地处理玩家的疑问并在必要时阻止小部分别有用心的玩家的错误发言。他的存在不仅为玩家提供了可靠支持，为服务器营造了一个友好和融洽的游戏环境，也时刻推进服务器向新时代的方向不断前进，是服务器玩家们心中的掌舵手。',
    imageUrl: '../src/assets/Players/Groundhog.jpg',
    text1: 'Groundhog是灵动MC的管理员，负责和玩家互动，与玩家接触并解决玩家遇到的问题。',
  },
  {
    text: 'Retrieve0是本网站的开发者，同时参与插件开发和游戏内基建和红石机器的建造。作为网站的核心开发者之一，他承担着开发、优化和维护网站的重要责任,为网站提供稳定高效的运行环境。他参与游戏内基建和红石机器的建造，通过巧妙的设计和精湛的技术实现了各种复杂的自动化系统和精巧的结构。他的技术能力、创造力以及对游戏的热爱和热情，为服务器的建设做出了一点微薄的贡献。',
    imageUrl: '../src/assets/Players/Retrieve0.jpg',
    text1: 'Retrieve0是本网站的开发者，同时参与插件开发和游戏内基建和红石机器的建造。',
  },
  {
    text: 'Krusl是灵动MC的资深系统工程师，专注于解决与操作系统、游戏优化、网络IO等相关的技术难题。作为系统工程师，他拥有丰富的经验和深厚的技术功底，能够熟练地应对各种复杂的系统和网络环境。他的技术能力和专业知识为灵动MC的运行提供了坚实的技术支持和保障，为玩家带来了流畅稳定的游戏体验。Krusl在技术领域的专业造诣和扎实工作态度备受认可。他不断追求技术创新和提升，为服务器的发展和壮大贡献了自己的力量和智慧。他的存在不仅为团队提供了强大的技术支持，也为服务器的长远发展奠定了坚实的基础。',
    imageUrl: '../src/assets/Players/Krusl.jpg',
    text1: 'Krusl是灵动MC系统工程师，负责解决与操作系统、游戏优化、网络IO等相关的技术问题。',
  },
  {
    text: 'Ducksoft是灵动MC的工程师兼赞助人，他为服务器提供了高防高性能的实例，使得举办大型派对成为可能。作为工程师，他具备丰富的技术经验和深厚的专业知识，在服务器架构和性能优化方面拥有独到的见解和能力。他为服务器选择和配置高性能的硬件设备，确保服务器的稳定运行和高效性能。Ducksoft还是灵动MC的慷慨赞助人之一。他为服务器提供了重要的资金支持，使得服务器得以持续发展和壮大。他的技术支持和慷慨赞助为服务器的发展和壮大注入了强大的动力和活力，使得灵动MC能够持续提供优质的游戏体验和服务，吸引更多的玩家加入其中。',
    imageUrl: '../src/assets/Players/Ducksoft.jpg',
    text1: 'Ducksoft是灵动MC工程师兼赞助人，他为服务器提供了高防高性能的实例，使举办大型派对成为可能。',
  },
  {
    text: 'Taffymc是灵动MC的红石机器主要建设者，他拥有丰富的经验和独特的创造力，在设计和搭建各种复杂的红石系统时游刃有余。他精通红石技术的原理和应用，能够利用各种机制和元件构建出精巧而高效的自动化装置和红石机器，为服务器的玩家带来了无尽的创意和乐趣。Taffymc还积极参与了材质包的绘制与开发工作。他拥有出色的艺术天赋和设计能力，能够创作出富有个性和特色的材质，为游戏增添了独特的视觉魅力和感染力。他的材质包设计不仅为服务器的环境和建筑注入了新的活力和美感，还为玩家提供了更加丰富多彩的游戏体验。',
    imageUrl: '../src/assets/Players/Taffymc.jpg',
    text1: 'Taffymc是服务器红石机器的主要建设者，同时参与材质包的绘制与开发。',
  },
  {
    text: '凯露酱是灵动MC服务器与QQ群之间的传话筒，扮演着连接玩家和服务器的重要角色。作为传话筒，她在玩家沟通中起着至关重要的作用。凯露酱在服务器与QQ群之间的沟通桥梁作用不可忽视。她的存在使得玩家能够方便地与服务器管理团队进行沟通和交流，提出问题和建议，分享游戏中的乐趣和体验。她的工作为服务器的运营和发展提供了重要的反馈和指引，帮助管理团队更好地了解玩家的需求和期待，改进和完善游戏内容和服务。凯露酱作为服务器与玩家之间的桥梁，承担着沟通和联系的重要使命。',
    imageUrl: '../src/assets/Players/KaiLuJiang.jpg',
    text1: '凯露酱是服务器与QQ群之间的传话筒，在玩家沟通中起到重大作用。',
  },
  {
    text: 'Amur Lynx是灵动MC材质包设计与绘画的杰出开发者之一。作为开发者，他拥有精湛的绘画技巧和丰富的设计经验，擅长创作各种独特而精美的材质。他的作品不仅注重细节和质感，还具有独特的风格和个性，为游戏注入了新鲜的活力和美感。他不断探索创新，设计出符合游戏风格和主题的各种材质，为玩家带来了更加丰富多彩的游戏体验。他的作品展现出了高度的专业水准和艺术品质，深受玩家的喜爱和赞誉。他的创意和才华为游戏注入了新的活力和魅力，使得灵动MC成为了一个令人向往的梦幻乐园。',
    imageUrl: '../src/assets/Players/Amur Lynx.jpg',
    text1: 'Amur Lynx是灵动MC材质包设计与绘画的开发者之一。',
  },
]);

const isVisible = ref(window.innerWidth >= 768);
const isMobile = ref(window.innerWidth >= 768);
const toggleElement = () => {
  isVisible.value = !isVisible.value;
}
</script>

<template>
<div class="G">
  <d-carousel class="d-carousel" height="200px" autoplay :autoplay-speed="5000">
    <d-carousel-item class="d-carousel-item" v-for="item in items" :key="item.text">
      <!-- 显示图片 -->
      <img :src="item.imageUrl" alt="carousel image" class="carousel-image">
      <!-- 显示文本 -->
      <div class="carousel-text0">{{ item.text }}</div>
      <div class="carousel-text1">{{ item.text1 }}</div>
    </d-carousel-item>
  </d-carousel>
  <d-carousel class="d-carousel1" height="150px" autoplay :autoplay-speed="5000">
    <d-carousel-item class="d-carousel-item" v-for="item in items" :key="item.text">
      <!-- 显示图片 -->
      <img :src="item.imageUrl" alt="carousel image" class="carousel-image">
      <!-- 显示文本 -->
      <div class="carousel-text0">{{ item.text }}</div>
      <div class="carousel-text1">{{ item.text1 }}</div>
    </d-carousel-item>
  </d-carousel>
  <div class="d-layout">
    <div v-if="isVisible" class="daside-2">
      <div class="sidebar">
        <div style="height: 20px"></div>
        <div class="left title">个人信息</div>
        <div class="sub">
          <div class="left item" :class="{ 'left-border': currentValue === 'ChangePassword' }" @click="setValue('ChangePassword')">修改密码
          </div>
          <div class="left item" :class="{ 'left-border': currentValue === 'ChangeSkin' }" @click="setValue('ChangeSkin')">更换皮肤
          </div>
          <div class="left item" :class="{ 'left-border': currentValue === 'Bio' }" @click="setValue('Bio')">自我介绍
          </div>
          <div class="left item" :class="{ 'left-border': currentValue === 'BindQQ' }" @click="setValue('BindQQ')">绑定QQ号
          </div>
        </div>
        <div class="left title">查看信息</div>
        <div class="sub">
          <div class="left item" :class="{ 'left-border': currentValue === 'LoginInfo' }" @click="setValue('LoginInfo')">登录信息
          </div>
          <div class="left item" :class="{ 'left-border': currentValue === 'Statistics' }" @click="setValue('Statistics')">统计信息
          </div>
          <div class="left item" :class="{ 'left-border': currentValue === 'Achievement' }" @click="setValue('Achievement')">达成成就
          </div>
          <div class="left item" :class="{ 'left-border': currentValue === 'TpLocation' }" @click="setValue('TpLocation')">传送位置
          </div>
          <div class="left item" :class="{ 'left-border': currentValue === 'IdleTime' }" @click="setValue('IdleTime')">空闲时间
          </div>
          <div class="left item" :class="{ 'left-border': currentValue === 'HonorNGreet' }" @click="setValue('HonorNGreet')">荣誉与贺卡
          </div>
        </div>
        <div style="height: 50px"></div>
      </div>

    </div>
    <d-content class="dcontent-2">
      <div class="content">
        <div class="gradient-background">
          <div class="gradient-left"></div>
          <div class="gradient-right"></div>
          <div style="position: absolute;">{{ RandomText }}</div>
        </div>
        <div v-if="!isMobile" class="flex-center-sb">
          <button @click="toggleElement" style="background-color: #a29bfe;height: 1.5rem;width: 1.5rem"></button>
          <br>
        </div>
        <p>22222222</p>
      </div>
      <p style="height: 200px;background-color: #3eaf7c">333333</p>
      <p style="height: 200px;background-color: #a29bfe">333333</p>
      <p style="height: 200px;background-color: #ea9426">333333</p>
    </d-content>
  </div>
</div>
</template>

<style scoped lang="scss">
.G {
  min-height: calc(100vh - 40px);
}
.gradient-background {
  color: #ea9426;
  height: 30px;
  font-size: 1.2rem;
  position: relative;
}
.gradient-left, .gradient-right {
  height: 100%;
  width: 50%;
}
.gradient-left {
  background: linear-gradient(to right, white 0%, #8b0505 30%, #8b0505 70%);
}
.gradient-right {
  background: linear-gradient(to left, white 0%, #8b0505 30%, #8b0505 70%);
}
.carousel-image {
  height: 100px;
  border-radius: 500px;
  margin-left: 40px;
  margin-right: 20px;
}
.gradient-background, .d-carousel-item {
  display: flex;
  justify-content: center;
  align-items: center;
}
.d-carousel-item {
  background: var(--devui-global-bg, #f3f6f8);
  padding-left: calc(100% * 0.005 );
  padding-right: calc(100% * 0.005 );
}
.carousel-text0, .carousel-text1 {
  margin-left: 20px;
  margin-right: 40px;
  text-align: left;
}
.carousel-text1 {
  display: none;
}
.flex-center-sb {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.daside-2 {
  border-left: 1px solid transparent;
  flex: 2;
}
.sidebar, .dcontent-2, .d-layout, .daside-2 {
  height: calc( 100vh - 40px - 200px );
}
.sidebar {
  overflow-y: scroll;
}
.dcontent-2 {
  flex: 8;
  background-color: #f3f6f8;
}
.d-layout {
  display: flex;
}
.dcontent-2 {
  padding-top: 10px;
  padding-left: 6rem;
  padding-right: 6rem;
  overflow: scroll;
}
.left {
  text-align: left;
}
.menu {
  padding: 0 40px;
  line-height: 40px;
}
.title {
  font-size: 1.1em;
  font-weight: 700;
  padding: 0.35rem 1.5rem 0.35rem 1.25rem;
}
.item {
  font-size: 1em;
  font-weight: 400;
  color: #2c3e50;
  padding: 0.35rem 1rem 0.35rem 2.25rem;
  line-height: 1.4;
  height: 40px;
}
.item:hover {
  color: #3eaf7c;
}
.left-border {
  border-left: 0.25rem solid #3eaf7c;
}
.title , .item {
  width: 100%;
  box-sizing: border-box;
  margin: 0;
  white-space: nowrap;
}
.line{
  border-bottom: 1px solid #ebedef;
}
.d-carousel {
  display: none;
}
@media (max-width: 768px) {
  .d-carousel-item {
  padding-left: 0;
  padding-right: 0;
  }
  .carousel-text0{
    display: none;
  }
  .carousel-text1 {
  display: flex;
  }
  .dcontent-2 {
  padding-top: 1px;
  padding-left: 1rem;
  padding-right: 1rem;
  }
  .gradient-background {
  height: 20px;
  font-size: 0.7rem;
  position: relative;
  }
  .d-carousel {
  display: none;
  }
  .d-carousel1 {
  display: flex;
  }
}
</style>