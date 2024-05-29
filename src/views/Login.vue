<script setup lang="ts">
import { ref, reactive } from 'vue';
import VueClientRecaptcha from 'vue-client-recaptcha';
import axios from 'axios';


const username = ref('');
const password = ref('');

const login = async () => {
  try {
    const response = await axios.post('http://localhost:5000/login', {
      username: username.value,
      password: password.value
    });
    const accessToken = response.data.access_token;
    console.log(accessToken);
    localStorage.setItem('accessToken', accessToken);
    // 登录成功后的处理，例如跳转到另一个页面
  } catch (error) {
    console.error('Login failed:', error.response.data.error);
  }
};

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
const navigateToPage = (path) => {
  // 使用 JavaScript 进行页面导航
  window.location.href = path;
};

</script>

<template>
  <div class="G">
    <div class="Login">
      <form @submit.prevent="login">
      <label>Username:</label>
      <input type="text" v-model="username">
      <label>Password:</label>
      <input type="password" v-model="password">
      <button type="submit">Login</button>
    </form>
<!--      <div @submit.prevent="login" class="box">-->
<!--        <p v-if="step3" class="table">正在</p>-->
<!--        <p class="table">登录</p>-->
<!--        <br>-->
<!--        <input v-if="step1" type="text" placeholder="账号">-->
<!--        <input v-if="step1" type="password" placeholder="密码">-->
<!--        <br>-->
<!--        <div v-if="step2" style="background-color: #ECECEDFF; border-radius: 10px" class="sample-captcha flex-center-sb">-->
<!--          <input type="text" v-model="inputValue" />-->

<!--          <VueClientRecaptcha-->
<!--              :value="inputValue"-->
<!--              @isValid="checkValidCaptcha"-->
<!--          />-->
<!--          <p style="text-align: right; font-size: 0.5rem; color: transparent" @click="navigateToPage('/Blind')">盲人选项</p>-->
<!--        </div>-->
<!--        <button v-if="step1" @click="step1 = false;step2 = true;" class="go">确认</button>-->
<!--        <button type="submit" v-if="step2" class="go">确认</button>-->

<!--        <div v-if="!step3" style="width: 100%" class="flex-center-sb">-->
<!--          <p @click="navigateToPage('/Reg')" class="">还没有账号？注册</p>-->
<!--          <p @click="navigateToPage('/PleaseQQ')">忘记密码？</p>-->
<!--        </div>-->
<!--      </div>-->
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
  font: 900 30px '';
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