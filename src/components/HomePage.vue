<script setup lang="ts">

// defineProps({
//   title111: String,
//   artical111: String,
//   img111: String
// })
import { defineProps } from "vue";
const props = defineProps(["title", "artical", "img"]);
</script>

<template>
  <div class="introduce">
      <div class="container">
        <div class="text">
          <h2 class="h2">
            {{ props.title }}
          </h2>
          <p class="p">
            {{ props.artical }}
          </p>
        </div>
        <div class="pic">
          <div class="square">
            <img :src="$props.img" class="img">
          </div>
        </div>
      </div>
    </div>
</template>

<style lang="scss" scoped>
.introduce {
  /* box-sizing: border-box; */
  display: grid;
  place-items: center;
  min-height: min-content;
  min-width: min-content;
  max-width: 1000px;
}

.container {
  width: 90%;
  height: fit-content;

}

.text {
  height: fit-content;
}

.pic {
  height: 100%;
  
}

.p {
  text-align: left;
}

.h2 {
  text-align: left;
}
.square {
  width: 100%; /* 正方形图片容器宽度为100% */
  position: relative;
  overflow: hidden;
}

.img {
  width: 90%; /* 图片宽度100%以撑满容器 */
  height: 90%; /* 图片高度100%以撑满容器 */
  object-fit: cover; /* 图片以尽可能大的尺寸覆盖容器，可能会裁剪部分图片 */
}
@media (max-width: 768px) {
  /* 在移动设备上采用上下布局 */



  .introduce {
    /* box-sizing: border-box; */
    max-width: 100vw;

  }

  .pic {
    display: none;
  }


}

        /* 桌面PC的媒体查询 */
@media (min-width: 769px) {
  /* 在PC上采用左右布局 */
  .container {
    display: flex;
    flex: 1;
  }
  .introduce {
  /* box-sizing: border-box; */

  }
  .text {
    width: 50%;
  }

  .pic {
    width: 50%;
  }
  
  .h2 {
    font-size: 3rem;
  }

  .p {
    font-size: 1.2rem;
  }
}

</style>
