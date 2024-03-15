

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';

const loggedIn = ref(true); // 假设用户未登录

// 根据用户登录状态来设置 loggedIn 的值
onMounted(() => {
  // 检查用户是否已登录，设置 loggedIn 为 true 或 false
  // 例如：如果用户已登录，执行 loggedIn.value = true;
  // 如果用户未登录，执行 loggedIn.value = false;
});

const navigateToPage = (path) => {
  // 使用 JavaScript 进行页面导航
  window.location.href = path;
};

const text = "user名";

const wordCount = computed(() => text.split("").length); // 使用正则表达式来分割单词
const fontSize = computed(() => 25 - wordCount.value); // 调整字体大小，

</script>

<template>
  <div class="menu flex-center-sb">
    <div class="nav flex-center-sb" style="justify-content: left" id="nav">
      <div class="real-nav flex-center-sb" style="justify-content:left;height: 100%">
        <li @click="navigateToPage('/')">
          <i class="icon icon-homepage"></i>
          首页
        </li>
        <li @click="navigateToPage('/Gallery')">摄影画廊</li>
        <li @click="navigateToPage('/Documents')">帮助文档</li>
        <li @click="navigateToPage('/Material_')">材料审批</li>
        <li @click="navigateToPage('/Players')">玩家系统</li>
        <li @click="navigateToPage('/Vote')">表决大厅</li>
        <li @click="navigateToPage('/Integrate')">灵动整合</li>
        <li @click="navigateToPage('/Chat')">聊天记录</li>
        <li @click="navigateToPage('/Permission')">权限公开</li>
      </div>
    </div>
    <div class="user flex-center-sb" id="user">
      <div v-if="loggedIn" class="user-info flex-center-sb">
        <p class="name" id="name"  v-bind:style="{ fontSize: fontSize + 'px' }">
          {{ text }}
        </p>
        <div class="avatar">
          <d-avatar name=""></d-avatar>
        </div>
      </div>
      <div v-else class="unlogged">
        <div style="width: 50px"></div>
        <p @click="navigateToPage('/login')" class="login">
          登录
        </p>
        <p style="color: white;user-select: none">|</p>
        <p @click="navigateToPage('/reg')" class="reg">
          注册
        </p>
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>

.flex-center-sb {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.menu {
  height:  40px;
  background-color: #252b3a;
}

.user {
  user-select: none;
}

.login {
  color: white;
  padding-left: 5px;
  padding-right: 5px;
  user-select: none;
}

.reg {
  color: white;
  padding-left: 5px;
  padding-right: 5px;
}

.user-info {
  background-color: #3a404d;
  border-radius: 20px;
  padding-left: 10px;
  margin-right: 10px;
  width: 150px;
}

.name {
  color: white;
  padding-right: 10px;
  width: 100px;
  text-align: center;
  font-size: 15px;
  overflow: hidden}

.nav {
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  height: 40px;
  width: calc(100% - 160px);
}

.unlogged {
  height: 40px;
  width: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
}

li {
  height: 25px;
  min-width: 70px;
  color: white;
  text-align: center;
  margin-left: 5px;
  margin-right: 5px;
  border-radius: 10px;
  list-style: none;
}

li:hover {
  background-color: #3a404d;
  text-decoration: underline;
  text-underline-position: under;
  text-decoration-color: cornflowerblue;
  text-decoration-thickness: 0.1em;
}
.reg:hover {
  background-color: #3a404d;
}
.login:hover {
  background-color: #3a404d;
}
.real-nav {
  overflow: scroll;
  padding-top: 5px;
}
</style>


