<script setup lang="ts">

</script>

<template>

</template>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  outline: none;
}

body {
  background: linear-gradient(45deg, #fbda61, #ff5acd);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.shell,
form {
  position: relative;
}

.shell {
  display: flex;
  justify-content: center;
}

form {
  width: 562px;
  height: 520px;
  background-color: #fff;
  box-shadow: 0px 15px 40px #b6354e;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}

#img-box {
  width: 330px;
  height: 520px;
}

#img-box img {
  height: 100%;
}

#form-body {
  width: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

#welcome-lines {
  width: 100%;
  text-align: center;
  line-height: 1;
}

#w-line-1 {
  color: #7f7f7f;
  font-size: 50px;
}

#w-line-2 {
  color: #9c9c9c;
  font-size: 30px;
  margin-top: 17px;
}

#input-area {
  width: 100%;
  margin-top: 40px;
}

.f-inp {
  padding: 13px 25px;
  border: 2px solid #6e6d6d;
  line-height: 1;
  border-radius: 20px;
  margin-bottom: 15px;
}

.f-inp input {
  width: 100%;
  font-size: 14px;
  padding: 0;
  margin: 0;
  border: 0;
}

.f-inp input::placeholder {
  color: #b9b9b9;
}

#submit-button-cvr {
  margin-top: 20px;
}

#submit-button {
  display: block;
  width: 100%;
  color: #fff;
  font-size: 14px;
  margin: 0;
  padding: 14px 40px;
  border: 0;
  background-color: #f5506e;
  border-radius: 25px;
  line-height: 1;
  cursor: pointer;
}

#forgot-pass {
  text-align: center;
  margin-top: 10px;
}

#forgot-pass a {
  color: #868686;
  font-size: 12px;
  text-decoration: none;
}

</style>