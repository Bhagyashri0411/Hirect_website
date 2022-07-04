<template>
  <!-- <div class="container"> -->
    <div class="columns">
      <div class="column" v-for="step in stepData" :key="step.step">
        <!-- :style="{width:(100/stepData.length)+'%'}" -->
        <div class="step-title">Step {{ step.step }}</div>
        <div class="circle-bg">
          <img class="step-image" :src="imgUrl(step)" alt="" srcset="" />
          <img class="check" src="~/assets/imgs/check-circle.png" alt="" srcset="" />
        </div>
        <div class="step-title">{{ step.title }}</div>
        <div v-if="condition(step)" class="arrow"></div>
      </div>
    </div>
  <!-- </div> -->
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
  width: 200px;
  height: 200px;
  border-radius: 100%;
  background-color: #efefef;
}

.circle-bg .step-image {
  text-align: center;
  margin-top: 60px;
  width: 80px;
  height: 80px;
  object-fit: contain;
}

.check {
  width: 33px;
  height: 33px;
  position: absolute;
  margin: 5px 0 0 10px;
}

.arrow {
  border-top: 1px dashed black;
  width: 150%;
  height: 0px;
  position: relative;
  bottom: 50%;
  right: 25%;
  z-index: -1;
}

.column:not(:last-child) {
  .circle-bg::after {
    content: "➤";
    position: relative;
    top: 32px;
    left: 150px;
  }
}

.step-title {
  font-size: 18px;
  font-weight: bold;
  padding: 10px 0 10px 0;
}
@media only screen and (min-width: 769px) and (max-width: 991px) {
  .circle-bg .step-image {
  margin-top: 55px;
  width: 60px;
  height: 60px;
}
.circle-bg {
  width: 170px;
  height: 170px;
}
.column:not(:last-child) {
  .circle-bg::after {
    top: 29px;
    left: 117px;
  }
}
.step-title[data-v-273e13ae] {
    font-size: 16px;
}
}
@media only screen and (min-width: 769px) and (max-width: 940px) {
  .column:not(:last-child) {
  .circle-bg::after {
    top: 26px;
    left: 100px;
  }
}
   .circle-bg .step-image {
  margin-top: 50px;
  width: 50px;
  height: 50px;
}
.circle-bg {
  width: 150px;
  height: 150px;
}
}
@media only screen and (min-width: 769px) and (max-width: 875px) {
  .column:not(:last-child) {
  .circle-bg::after {
    top: 15px;
  }
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
  computed: {},
  methods: {
    condition(step) {
      return this.stepData.length !== step.step && step.step !== 1;
    },
    imgUrl(src) {
      try {
        return require(`@/assets/imgs/${src.imageSrc}`);
      } catch (error) {
        return require(`@/assets/imgs/step-image.png`);
      }
    },
  },
};
</script>
