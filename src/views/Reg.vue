<script setup lang="ts">
import { ref, reactive } from 'vue';
import VueClientRecaptcha from 'vue-client-recaptcha';

// 声明响应式变量
const inputValue = ref(null);
const data = reactive({
  isValid: false,
});
// 定义验证验证码的函数
const checkValidCaptcha = (value) => {
  // 预期返回一个布尔值，如果你的值和验证码相同则返回True，否则返回False
  console.log(value);
  data.isValid = value;
  if (value) {
    step2.value = false;
    step3.value = true;
  }
};
const step1 = ref(true);
const step2 = ref(false);
const step3 = ref(false);
const account = ref('');
const password = ref('');
const confirmPassword = ref('');
const invite = ref('');
const navigateToPage = (path) => {
  // 使用 JavaScript 进行页面导航
  window.location.href = path;
};
const regex = /^[a-zA-Z0-9]+$/;
const Step1 = () => {
  // 使用 JavaScript 进行页面导航
  const hasLetter = /[a-zA-Z]/.test(password.value);
  const hasNumber = /[0-9]/.test(password.value);
  const isLengthValid = password.value.length >= 8;
  const isPasswordMatch = password.value === confirmPassword.value;
  if (!regex.test(account.value)) {
    // 账号输入包含除英文字母和数字以外的字符
    alert("账号输入不合法，只能包含英文字母和数字。");
    return false;
  }

  if (!regex.test(password.value)) {
    // 密码输入包含除英文字母和数字以外的字符
    alert("密码输入不合法，只能包含英文字母和数字。");
    return false;
  }
  if (
      account.value.length >= 5 &&
      hasLetter &&
      hasNumber &&
      isLengthValid &&
      isPasswordMatch
  ) {
    step1.value = false;
    step2.value = true; // 只有满足条件时才切换 step1 2 的布尔值
  } else {
    // 可以根据实际需求提供用户反馈，例如使用弹窗或在页面上显示错误消息
    alert("请确保账号长度大于等于5，密码包含字母和数字且长度大于等于8，两次输入的密码一致。");
  }
}
</script>

<template>
  <div class="G">
    <div class="Login">
      <div class="box">
        <p v-if="step3" class="table">正在</p>
        <p class="table">注册</p>
        <br>
        <div v-if="step1" class="flex-center-sb">
          <input v-model="account" type="text" placeholder="账号(昵称另设)">
          <div style="width: 4%"></div>
          <input v-model="invite" type="text" placeholder="邀请码">
        </div>
        <div v-if="step1" class="flex-center-sb">
          <input v-model="password" style="width: 48%" type="password" placeholder="密码">
          <div style="width: 4%"></div>
          <input v-model="confirmPassword" style="width: 48%" type="password" placeholder="重复密码">
        </div>
        <div v-if="step2" style="background-color: #ECECEDFF; border-radius: 10px" class="sample-captcha flex-center-sb">
          <input type="text" v-model="inputValue" />

          <VueClientRecaptcha
              :value="inputValue"
              @isValid="checkValidCaptcha"
          />
          <p style="text-align: right; font-size: 0.5rem; color: transparent" @click="navigateToPage('/Blind')">盲人选项</p>
        </div>
        <button v-if="step1" @click="Step1" class="go">确认</button>
        <button v-if="step2" class="go">确认</button>
        <br>
        <div v-if="!step3" style="width: 100%" class="flex-center-sb">
          <p @click="navigateToPage('/Login')" class="">已有账号？登录</p>
          <p></p>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">
@import url("/node_modules/vue-client-recaptcha/dist/style.css");


*{
  padding: 0;
  margin: 0;
  text-decoration: none;
  user-select: none;
}
.G {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 40px);
  background-color: #a29bfe;
  background-image: url("../assets/HomePage/background.webp");
  background-position: center;
  background-size: cover;
}
.Login{
  width: 40%;
  min-width: 270px;
  height: 65%;
  min-height: 360px;
  display: flex;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: linear-gradient(
          to right bottom,
          rgba(255,255,255,.7),
          rgba(255,255,255,.5),
          rgba(255,255,255,.4)
  );
  /* 使背景模糊化 */
  backdrop-filter: blur(10px);
  box-shadow: 0 0 20px #a29bfe;
}
.table{
  font: 900 40px '';
  text-align: center;
  letter-spacing: 5px;
  color: #3d3d3d;
}
.box{
  overflow: hidden;
}

.box input{
  width: 100%;
  margin-bottom: 20px;
  outline: none;
  border: 0;
  padding: 10px;
  border-bottom: 3px solid rgb(150, 150, 240);
  background-color: transparent;
  font: 900 16px '';
}
input::placeholder{
  color: #3d3d3d;
}
p{
  padding-top: 10px;
  font: 900 1rem '';
  color: #3d3d3d;
}
.go{
  text-align: center;
  display: block;
  height: 10%;
  width: 100%;
  padding: 12px;
  font: 900 20px '';
  border-radius: 10px;
  margin-top: 20px;
  color: #fff;
  letter-spacing: 3px;
  background-image: linear-gradient(to left, #fd79a8, #a29bfe);
}
.flex-center-sb {
  display: flex;
  align-items: center;
  justify-content: space-between;
}



</style>