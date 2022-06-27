<template>
  <section class="scan-app-section">
    <div class="scan-app-img">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="acan-code">
              <h2>Scan & Download Hirect App!</h2>
              <p>
                Open the camera on your phone and scan the QR code<br />below to
                download Hirect App.
              </p>
              <ul class="app-scan-button">
                <li>
                  <a
                    ><img
                      id="download-hirect-qrcode"
                      class="qr-code-img"
                      src="~/assets/imgs/Qr_code_Updated 1.svg"
                      alt=""
                  /></a>
                </li>
                <li>
                  <a
                    href="https://apps.apple.com/US/app/id1518442417?mt=8"
                    target="_blank"
                    ><img src="~/assets/imgs/bi_apple.svg" alt=""
                  /></a>
                </li>
                <li>
                  <a
                    href="https://hirectin.onelink.me/TwhD/b0fe8b20"
                    target="_blank"
                    ><img src="~/assets/imgs/ion_logo-google-playstore.svg" alt=""
                  /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    eventName: {
      type: String,
      default: "",
    },
  },
  mounted() {
    window.onscroll = () => {
      if (
        document.body.clientWidth >
        document
          .getElementById("download-hirect-qrcode")
          .getBoundingClientRect().bottom
      ) {
        this.$sendToEsData("webQrcodeViewed", {
          region_id: 0,
          position: this.eventName,
        });
        window.onscroll = null;
      }
    };
  },
};
</script>

<style lang="scss" scoped>
.scan-app-img {
  background: url("~/assets/imgs/download-hirect-img.png") center no-repeat;
  background-size: cover;
  position: relative;
  padding: 100px 0px;
}

.acan-code h2 {
  color: #0e101a;
  font-size: 36px;
  font-weight: bold;
  line-height: normal;
  margin-bottom: 45px;
}

.acan-code p {
  color: #0e101a;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 15px;
}

.app-scan-button {
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  align-items: end;
  margin-top: 50px;
}

.app-scan-img {
  text-align: center;
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

  .app-scan-button li {
    margin-right: 35px;
  }

  .app-scan-button {
    margin-top: 40px;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1199px) {
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
