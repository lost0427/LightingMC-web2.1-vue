<script setup lang="ts">
</script>

<template>
  <div>
    <div class="background">
      <div class="banner">
        <div class="banner-text">1111111</div>
        <div class="description-text">
          一个<strong style="color: lightcoral">有爱</strong>的公益MC服务器社区
        </div>
      </div>
      <div class="seller">
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
    </div>
  </div>
</template>

<style lang="scss" scoped>
.background {
  background-image: url("@/assets/images/background/background.webp");
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.banner {
  width: fit-content;
  margin: auto;
}

.banner-text {
  color: white;
  font-size: 5em;
  font-weight: bold;
  text-shadow: 2px 2px black;
}

.description-text {
  color: white;
  font-size: x-large;
  text-align: center;
  margin-top: 60px;
}

.seller {
  margin: auto;
  width: fit-content;
  display: flex;
}
</style>

<style scoped>
@media (max-width: 1368px) {
  .banner-text {
    font-size: 3em;
  }
  .seller {
    margin: auto;
    width: fit-content;
    display: flex;
  }
}

@media (max-width: 960px) {
  .seller {
    flex-direction: column;
  }
}
</style>