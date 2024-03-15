<script setup lang="ts">
const props = defineProps(["title", "content", "icon", "color"]);
</script>

<template>
  <div class="card">
    <div class="title-bar mid-outer">
      <div class="mid-inner" style="color: white">
        <font-awesome-icon :icon="props.icon" class="icon" />
        {{ props.title }}
      </div>
    </div>
    <div class="content-bar mid-outer">
      <div class="mid-inner" style="color: black">
        {{ props.content }}
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.card {
  /*background-color: white;*/
  border: v-bind(color) solid;
  border-radius: 100px;
  background-color: white;
  margin: 10px;
  font-size: x-large;
  display: flex;

}

.mid-outer {
  display: flex;
}

.mid-inner {
  margin: auto;
  width: 100%;
}

.title-bar {
  border: v-bind(color) solid;
  border-radius: 100px;
  padding: 2px 10px;
  color: white;
  background-color: v-bind(color);
  width: 7em;
  text-align: center;
  line-height: 100%;
}

.content-bar {
  padding: 8px 8px;
  text-align: center;
  line-height: 100%;
}

.icon {
  margin-right: 2px;
  text-align: center;
}
</style>

<style scoped>
@media (max-width: 1368px) {
  .card {
    font-size: large;
    margin: 10px;
  }
}
</style>
