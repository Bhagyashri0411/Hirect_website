<template>
  <div class="container">
    <div class="columns">
      <div class="arrow"></div>
      <div class="column" v-for="step in stepData" :key="step.id">
        <!-- :style="{width:(100/stepData.length)+'%'}" -->
        <div class="circle-bg">
          <img class="step-image" :src="step.imageSrc" alt="" srcset="" />
          <img
            class="check"
            src="~/assets/imgs/check-circle.png"
            alt=""
            srcset=""
          />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.columns {
  display: flex;
  text-align: -webkit-center;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
}

.column {
  flex: 33.33%;
  z-index: 9;
}

.circle-bg {
  width: 188px;
  height: 188px;
  border-radius: 100%;
  background-color: #efefef;
}

.circle-bg .step-image {
  text-align: center;
  width: 72.84px;
  height: 92.94px;
  margin-top: 50px;
  margin-left: 16px;
}

.check {
 width: 33px;
    height: 33px;
    position: absolute;
    margin: 5px 0 0 10px;
}

.arrow {
  width: 50%;
  height: 0px;
  border-bottom: 1px dashed;
  margin-left: 200px;
  position: absolute;
  margin-top: 90px;
  z-index: -9;
}

.column:not(:last-child) {
  .circle-bg::after {
    content: "➤";
    position: relative;
    top: 20px;
    left: 150px;
  }
}
</style>
<script>
export default {
  props: {
    stepData: {
      type: Array,
      required: true,
    },
  },
};
</script>