<template>
  <section class="scan-app-section">
    <div class="scan-app-img">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="acan-code">
              <h2>Get the Hirect App</h2>
              <p>
                <br/>Click the button below to download the Hirect app.
              </p>
              <GetAppInput />
              <!-- <div v-if="$device.isMobileOrTablet" class="app-scan-button-mobile">
                <button class="btn btn-app">
                  Get App
                </button>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import GetAppInput from './GetAppInput.vue';

export default {
  props: {
    eventName: {
      type: String,
      default: '',
    },
  },
  mounted() {
    window.onscroll = () => {
      if (document.body.clientWidth
        > document
          .getElementById('download-hirect-qrcode')
          .getBoundingClientRect().bottom) {
        this.$sendToEsData('webQrcodeViewed', {
          region_id: 0,
          position: this.eventName,
        });
        window.onscroll = null;
      }
    };
  },
  components: { GetAppInput },
};
</script>

<style lang="scss" scoped>
.app-scan-button-mobile{
  display: none;
}
.acan-code {
  padding: 10%;
}
.btn-app {
  border-radius: 50px;
  background-color: #2ce2a2;
  border-color: #2ce2a2;
  color: #0e101a;
  font-size: 16px;
  font-weight: 700;
  padding: 10px 30px;
  margin-left: 10px;
  line-height: normal;
  margin-bottom: 40px;
}
.scan-app-section {
  background-color: #dde1e6;
}

.scan-app-img {
  background: url("~/assets/imgs/banner_image.png") no-repeat center;
  background-size: cover;
  position: relative;
  // padding-top: 36px;
  // min-height: 600px;
  padding: 2%;
}

.acan-code {
  float: right;
}

.acan-code h2 {
  color: #fff;
  font-size: 36px;
  font-weight: bold;
  line-height: normal;
  margin-bottom: 45px;
}

.acan-code p {
  color: #fff;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 15px;
}

.app-scan-button {
  display: grid;
  grid-auto-flow: column;
  margin-top: 50px;
  margin-bottom: 50px;
  align-items: end;
  grid-template-columns: 200px 50px 10px 50px;
}

.app-scan-img {
  text-align: center;
}

.qr-code-img {
  width: 150px;
  height: 150px;
}

.app-scan-button li {
  margin-right: 48px;
}

.scan-app .row {
  align-items: center;
}

@media only screen and (min-width: 768px) and (max-width: 1299px) {
  .acan-code h2 {
    font-size: 32px;
    margin-bottom: 30px;
  }

  .app-scan-button {
    margin-top: 40px;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1000px) {
  .scan-app-img {
    padding: 0;
  .container{
    background: #00000060;
    max-width: 100%;
  }
  }
  .acan-code h2 {
    font-size: 26px;
    margin-bottom: 25px;
  }

  .acan-code p {
    font-size: 16px;
  }

  .app-scan-button li {
    margin-right: 25px;
  }
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
  .acan-code h2 {
    font-size: 24px;
    margin-bottom: 20px;
  }

  .acan-code p br {
    display: none;
  }

  .app-scan-button li {
    margin-right: 16px;
  }

  .app-scan-button li:last-child {
    margin-right: 0;
  }

  .app-scan-button {
    margin-top: 35px;
  }
}

@media only screen and (min-width: 300px) and (max-width: 767px) {
  .app-scan-button-mobile{
    display: block;
  }
  .app-scan-button{
    display: block;
  }

  .scan-app-img {
    padding: 0px;
  }

  .scan-app-img .container{
    background: #00000090
  }

  .acan-code p br {
    display: none;
  }

  .app-scan-button li {
    margin-right: 10px;
  }

  .app-scan-button li:last-child {
    margin-right: 0;
  }

  .acan-code h2 {
    font-size: 23px;
    margin-bottom: 20px;
  }

  .acan-code {
    text-align: center;
  }

  .acan-code p {
    font-size: 16px;
    line-height: 22px;
  }

  .app-scan-button {
    margin-bottom: 40px;
    margin-top: 35px;
  }
}
</style>
