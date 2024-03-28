<script setup lang="ts">

</script>

<template>
  <div class="G">
    <div class="Login">
      <div class="box">
        <p class="table">您似乎遇到了一些问题？</p>
        <p style="text-align: left; font-size: 1rem">非常抱歉，本站并没有专门的无障碍绿色通道，如果您遇到了任何问题</p>
        <p style="text-align: left; font-size: 1rem">请加QQ群 <strong style="color: red; font-size: 1.5rem">2399434096</strong> 联系群中的服主Neboer或群管理员，详细描述您遇到的问题。</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
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
.box {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;}
</style>