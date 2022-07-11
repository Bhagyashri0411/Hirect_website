<template>
<div>
    <div class="download-guide-head">
        <img class="download-guide-head-logo" src="~/assets/img/hirect-logo-full.png" alt="hirect-logo">
    </div>
    <center>
        <div class="download-guide-title">
            <p>How to install Hirect<br>without Google Play Store</p>
        </div>
    </center>
    <div class="download-guide-button-container">
        <img class="download-guide-button" src="~/assets/img/download-guide-button.png" alt="download-guide-button">
        <p class="download-guide-button-text">Check out the following guide</p>
    </div>
    <img class="download-guide-arrow" src="~/assets/img/download-guide-arrow.png" alt="download-guide-arrow">
    <div class="download-guide-img-item" data-aos="fade-up" v-for="(item, index) of guideImgs" :style="item.imgStyle" :key="index">
        <img class="download-guide-img" :src="item.imgSrc" :style="item.imgStyle" alt="download-guide-img">
    </div>
</div>
</template>

<script>
/* eslint-disable global-require */
/* eslint-disable-next-line import/extensions */
import aosMixin from '~/mixins/aos';

export default {
  name: 'download-guide',
  mixins: [aosMixin],
  components: {},
  head() {
    return {

    };
  },
  data() {
    return {
      guideImgs: [{
        imgSrc: require('~/assets/img/download-guide-1.png'),
        imgStyle: {
          height: '717px',
        },
      }, {
        imgSrc: require('~/assets/img/download-guide-2.png'),
        imgStyle: {
          height: '716.5px',
        },
      }, {
        imgSrc: require('~/assets/img/download-guide-3.png'),
        imgStyle: {
          height: '500px',
        },
      }, {
        imgSrc: require('~/assets/img/download-guide-4.png'),
        imgStyle: {
          height: '716.5px',
        },
      }, {
        imgSrc: require('~/assets/img/download-guide-5.png'),
        imgStyle: {
          height: '716.5px',
        },
      }, {
        imgSrc: require('~/assets/img/download-guide-6.png'),
        imgStyle: {
          height: '716.5px',
        },
      }, {
        imgSrc: require('~/assets/img/download-guide-7.png'),
        imgStyle: {
          height: '716.5px',
        },
      }, {
        imgSrc: require('~/assets/img/download-guide-8.png'),
        imgStyle: {
          height: '717px',
        },
      }],
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.$localSaveSubmitUrl();
  },
  methods: {

  },
};
</script>

<style lang="scss" scoped>
.download-guide-head {
    width: 100%;
    height: 80px;
    background: #FFFFFF;
    box-shadow: 0px 10px 20px 0px rgba(227, 227, 227, 0.25);
    display: flex;
    align-items: center;
    justify-content: center;

    .download-guide-head-logo {
        width: 150px;
        height: 40px;
    }
}

.download-guide-title {
    font-size: 48px;
    font-weight: bold;
    color: #0E101A;
    line-height: 58px;
    margin: 60px 0px;
}

.download-guide-button-container {
    position: relative;
    margin: 0 auto;
    width: 386px;

    .download-guide-button {
        width: 386px;
        height: 64px;
    }

    .download-guide-button-text {
        position: absolute;
        font-size: 20px;
        font-weight: bold;
        color: #FFFFFF;
        line-height: 64px;
        top: 0px;
        left: 72px;
    }
}

.download-guide-arrow {
    display: block;
    margin: 0 auto;
    width: 30px;
    height: 56px;
    padding: 59px 0px;
}

.download-guide-img-item {
    width: 450px;
    height: 1434px;
    margin: 0 auto;
    padding-bottom: 73px;

    .download-guide-img {
        width: 450px;
        height: 1434px;
    }
}
</style>
