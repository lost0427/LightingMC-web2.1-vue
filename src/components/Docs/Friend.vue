<script setup lang="ts">

</script>

<template>
  <h1>好友系统</h1>
  <p>本服务器中有很多玩家，您可以选择和他们成为朋友，而且好友之间可以相互传送，使得玩家游戏和探索更加便利。</p>
  <h1>添加和删除好友</h1>
  <p>要想添加朋友，首先要确保对方在线，然后使用/friend指令 输入 /friend add 玩家ID 来发送好友请求，玩家id指的就是在Tab菜单中显示的玩家名字。 发送成功后聊天区将显示:Friend request sent.</p>
  <p>对方同意好友请求之后，聊天区会显示：You get a new friend：玩家ID 同时双方玩家身上将会冒出爱心粒子</p>
  <p>若有其他玩家想要成为您的好友并向您发送了一条好友请求，请按照屏幕上的提示输入指令来接受或拒绝该玩家的好友请求。 您可以输入：/friend request -a 对方ID 来接受好友请求 亦或是输入：/friend request -d 对方ID 来拒绝好友请求</p>
  <p>若您想要删除某个好友，请使用：/friend remove 玩家ID 来移除该玩家。</p>
  <h1>好友间传送</h1>
  <p>要想传送到另一个玩家的位置，您首先应该和对方成为好友。 使用/friend tp -t 玩家ID 可以向对方发送一条传送请求 对方同意后，会出现传送机（以鸡的形态出现），在倒计时5秒之后将您传送至对方位置。请注意，在倒计时结束之前，您随时可以按下键盘上的“Shift”键来取消传送。此外，当玩家在水中时，无法进行传送。</p>
  <P>若有您的好友想要传送到您所在的位置并发送了请求，请按照屏幕上的提示输入指令来接受或拒绝该好友的传送请求。 您可以输入/friend tp -a 对方ID 来接受好友传送请求 亦或是输入/friend tp -d 对方ID 来拒绝好友传送请求</P>
</template>

<style scoped lang="scss">
h1, p {
  display: flex;
  justify-content: left;
  text-align: left;
  margin-top: 16px;
  margin-bottom: 16px;
  line-height: 1.7;
  font-size: 16px;
}
h1 {
  font-size: 2.2rem;
  border-bottom: 1px solid #ebedef;
}
</style>