<script setup lang="ts">
import Welcome from "@/components/Docs/Welcome.vue";
import Covenant from "@/components/Docs/Covenant.vue";
import Join from "@/components/Docs/Join.vue"
import Friend from "@/components/Docs/Friend.vue"
import Tp from "@/components/Docs/Tp.vue"
import Genesis from "@/components/Docs/Genesis.vue"
import Exodus from "@/components/Docs/Exodus.vue"
import Leviticus from "@/components/Docs/Leviticus.vue"
import Numbers from "@/components/Docs/Numbers.vue"
import Taffy from "@/components/Docs/Taffy.vue"
import { ref } from 'vue';

const currentValue = ref('Welcome'); // 当前值的响应式变量
const lastValue = ref('Welcome'); // 当前值的响应式变量

const setValue = (value) => {
  lastValue.value = currentValue.value;
  currentValue.value = value; // 设置当前值
};

const back = () => {
  currentValue.value = lastValue.value;
};
</script>

<template>

  <div class="d-layout">
    <div class="daside-2">
      <div class="sidebar">
        <div style="height: 20px"></div>
        <div class="left title">导言</div>
        <div class="sub">
          <div class="left item" :class="{ 'left-border': currentValue === 'Welcome' }" @click="setValue('Welcome')">欢迎加入灵动MC大家庭！
          </div>
          <div class="left item" :class="{ 'left-border': currentValue === 'Covenant' }" @click="setValue('Covenant')">灵动 mc 用户协议
          </div>
        </div>
        <div class="left title">帮助</div>
        <div class="sub">
          <div class="left item" :class="{ 'left-border': currentValue === 'Join' }" @click="setValue('Join')">如何加入灵动MC
          </div>
          <div class="left item" :class="{ 'left-border': currentValue === 'Friend' }" @click="setValue('Friend')">好友系统
          </div>
          <div class="left item" :class="{ 'left-border': currentValue === 'Tp' }" @click="setValue('Tp')">位置及传送系统
          </div>
        </div>
        <div class="left title">日志</div>
        <div class="sub">
          <div class="left item" :class="{ 'left-border': currentValue === 'Genesis' }" @click="setValue('Genesis')">灵动MC的诞生
          </div>
          <div class="left item" :class="{ 'left-border': currentValue === 'Exodus' }" @click="setValue('Exodus')">灵动MC的二周目
          </div>
          <div class="left item" :class="{ 'left-border': currentValue === 'Leviticus' }" @click="setValue('Leviticus')">灵动MC的三周目
          </div>
          <div class="left item" :class="{ 'left-border': currentValue === 'Numbers' }" @click="setValue('Numbers')">灵动MC的四周目
          </div>
        </div>
        <div class="left title">文件留档</div>
        <div class="sub">
          <div style="white-space: normal" class="left item" :class="{ 'left-border': currentValue === 'Taffy' }" @click="setValue('Taffy')">关于给予玩家Ace_Taffy1严重警告的决定
          </div>
        </div>
        <div style="height: 50px"></div>
      </div>

    </div>
    <d-content class="dcontent-2">
      <div class="content">
        <p class="left" style="margin-top: 10px">
          您正在阅读： {{ currentValue }}
        </p>




      </div>
      <welcome v-if="currentValue === 'Welcome'"></welcome>
      <Covenant v-if="currentValue === 'Covenant'"></Covenant>
      <Join v-if="currentValue === 'Join'"></Join>
      <Friend v-if="currentValue === 'Friend'"></Friend>
      <Tp v-if="currentValue === 'Tp'"></Tp>
      <Genesis v-if="currentValue === 'Genesis'"></Genesis>
      <Exodus v-if="currentValue === 'Exodus'"></Exodus>
      <Leviticus v-if="currentValue === 'Leviticus'"></Leviticus>
      <Numbers v-if="currentValue === 'Numbers'"></Numbers>
      <Taffy v-if="currentValue === 'Taffy'"></Taffy>
      <div class="line" style="height: 50px"></div>
      <div class="flex-center-sb">
        <div style="height: 50px; width: 50px"></div>
        <h5 @click="back">返回上一篇</h5>
      </div>
    </d-content>
  </div>
</template>


<style lang="scss" scoped>
.flex-center-sb {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.sidebar, .dcontent-2, .d-layout, .daside-2 {
  height: calc( 100vh - 40px );
}
.daside-2 {
  border-left: 1px solid transparent;
  flex: 2;
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
/*.sub {
  background-color: var(--devui-area);
}*/
</style>