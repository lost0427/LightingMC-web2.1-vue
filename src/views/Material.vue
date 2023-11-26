<script lang="ts">

</script>


<template>
  <div class="G" style="align-items: center">
    <h1>建筑材料申请</h1>
    <div class="box">
      <div class="inventry">
        <div class="inv-pic flex-center-sb">
          <div class="left flex-center-sb" style="justify-content: left">
            <div style="position: relative " v-for="n in 5">
              <img class="tabs" src="../assets/Material/gui/creative_inventory/tab-classify-set.png">
              <div class="overlay-s"></div>
            </div>
          </div>
          <div style="position: relative " class="right flex-center-sb">
            <img class="tabs" src="../assets/Material/gui/creative_inventory/tab-classify-set.png">
            <div class="overlay-s"></div>
          </div>
        </div>
        <div class="bni">
          <img class="inv-pic" src="../assets/Material/gui/creative_inventory/tab_items.png">
          <div class="overlay">
        </div>

        </div>
        <div class="inv-pic flex-center-sb">
          <div class="left flex-center-sb" style="justify-content: left">
            <div style="position: relative " v-for="n in 5">
              <img class="tabs reverse" src="../assets/Material/gui/creative_inventory/tab-classify-set.png">
              <div class="overlay-s"></div>
            </div>
          </div>
          <div style="position: relative " class="right flex-center-sb">
            <img class="tabs reverse" style="margin-top: -5px" src="../assets/Material/gui/creative_inventory/tab-classify-set.png">
            <div class="overlay-s"></div>
          </div>
        </div>
      </div>
      <div class="part">

      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  margin: 0 0 0 0;
  padding-top: 20px;
  padding-bottom: 20px;
  color: var(--devui-text);
}

.G {
  background-color: var(--devui-global-bg);
  min-height: calc(100vh - 40px);
  display: flex;
  flex-direction: column;
}

.box {
  width: 80%;
  display: flex;
}
.part {
  width: 50%;
  height: 100%;
}
.part, .inventry{
  flex: 1;

}
.inventry {
  height: 28rem;
}
.inv-pic {
  width: 100%;
}
.flex-cc {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.bni {
  position: relative;
  width: 100%;
  margin-top: -6px;
  margin-bottom: -6px;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  &:before {
    content: '';
    display: block;
    padding-top: (135 / 194) * 100%;
  }
}
.overlay-s {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  &:before {
    content: '';
    display: block;
    padding-top: 100%;
    user-select: none;

  }
}
.tabs {
  flex: 1;
  height: 3rem;
  width: 3rem;
}
.flex-center-sb {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.reverse {
  transform: scaleY(-1);
}
.inventry {
  user-select: none;

}
</style>