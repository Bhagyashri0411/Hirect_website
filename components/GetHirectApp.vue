<template>
<div class="get-hirect-app">
    <center>
        <p class="download-title">Scan & Download Hirect App!</p>
        <p class="download-text">Open the camera on your phone and scan the QR code below to download Hirect App</p>
        <img src="~/assets/img/bg_qr_in.png" alt="download-qr" class="download-qr">
        <div class="download-container">
            <img src="~/assets/img/btn_appstore.png" alt="btn_appstore" @click="appImgClickHandle" class="download_btn">
            <img src="~/assets/img/btn_googleplay.png" alt="btn_googleplay" @click="googleImgClickHandle" class="download_btn">
            <div class="downloadDialog-button-pkg-container" @mouseover="downloadPkgMouseIn" @mouseout="downloadPkgMouseOut">
                <img src="~/assets/img/pkg_android.png" class="downloadDialog-button-pkg" @click="googlePkgClickHandle" />
                <img v-if="popoverImgShow" @mouseover="downloadPkgMouseIn" @click="openDownloadGuide" class="popover-img" src="~/assets/img/ic_download_guide.png" alt="download_guide">
            </div>
        </div>
    </center>
</div>
</template>

<script>
export default {
  name: 'gethirectapp',
  components: {},
  data() {
    return {
      popoverImgShow: false,
      popoverTimeOut: null,
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    openDownloadGuide() {
      window.open('https://hirect.in/download-guide', '_blank');
    },
    downloadPkgMouseIn() {
      clearTimeout(this.popoverTimeOut);
      this.popoverImgShow = true;
    },
    downloadPkgMouseOut() {
      this.popoverTimeOut = setTimeout(() => {
        this.popoverImgShow = false;
      }, 200);
    },
    appImgClickHandle() {
      this.$ga.event('click', 'ios', 'app', 2);
      window.open(this.iosDownloadAddressIN, '_blank');
    },
    googleImgClickHandle() {
      this.$ga.event('click', 'android', 'app', 1);
      window.open(this.androidDownloadAddressIN, '_blank');
    },
    googlePkgClickHandle() {
      window.open(this.androidPkgAddressIN, '_blank');
    },
  },
};
</script>

<style lang="scss" scoped>
.get-hirect-app {
    padding: 60px 0px;

    .download-title {
        font-size: 48px;
        font-weight: bold;
        color: #0E101A;
        line-height: 48px;
        margin-bottom: 24px;
    }

    .download-text {
        font-size: 20px;
        font-weight: 400;
        color: #0E101A;
        line-height: 30px;
        margin-bottom: 36px;
    }

    .download-qr {
        width: 160px;
        height: 160px;
        margin-bottom: 30px;
    }

    .download-container {
        display: flex;
        width: 550px;
        margin: 0 auto;
        align-items: center;
        justify-content: space-between;

        .download_btn {
            width: 160px;
            height: 48px;
            margin: 0px 6px;
            cursor: pointer;
        }

        .downloadDialog-button-pkg-container {
            position: relative;
            margin: 0px 0px;

            .downloadDialog-button-pkg {
                width: 160px;
                height: 48px;
                cursor: pointer;
            }

            .popover-img {
                width: 160px;
                height: 44px;
                display: block;
                position: absolute;
                top: -48px;
                cursor: pointer;
            }
        }
    }
}
</style>
