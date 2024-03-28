<script setup lang="ts">
</script>

<template>
  <h1>位置及传送系统</h1>
  <p>您可以使用指令来保存当前地点，并在之后利用指令快速传送到该地点。</p>
  <h1>保存当前位置</h1>
  <p>请使用指令：/tpm save 名称来保存您当前所站立的地点。</P>
  <p>保存成功后将会提示：New address saved：您的命名</p>
  <h1>传送到已保存的位置</h1>
  <p>要前往已保存的地点，请使用指令：/tpm to 您要前往的地点名称</p>
  <p>此时，传送鸡将会出现在您的脚下，并在倒计时5秒之后将您传送至该地点</p>
  <p>请注意，在倒计时结束前，您可以通过按下键盘上的“Shift”键来取消传送。</p>
  <p>此外，若您在水中时，传送服务将不可用！</p>
</template>

<style scoped lang="scss">
h1, p {
  display: flex;
  justify-content: left;
  text-align: left;
  margin-top: 16px;
  margin-bottom: 0px;
  line-height: 1.7;
  font-size: 16px;
}
h1 {
  font-size: 2.2rem;
  border-bottom: 1px solid #ebedef;
}
</style>