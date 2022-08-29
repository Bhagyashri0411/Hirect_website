<template>
  <div>
    <div class="get-a-link-to-download">
      <p class="get-a-link-title">Get a link to download</p>
      <p class="get-a-link-title-min">The future of hiring is here.</p>
      <el-input class="get-a-link-input" placeholder="Enter 10-digit mobile number" @focus="getALinkInputFocus"
        maxlength="10" v-model="mobile">
        <template slot="prepend">+91</template>
      </el-input>
      <p v-show="isPhoneNumberError" class="alertText">Your mobile is required</p>
      <p class="get-a-link-text">You’ll receive a link to the Apple App Store or Goolge Play Store. No spam.</p>
      <el-button class="get-a-link-button" type="primary" @click="sendAppClick">Send app link</el-button>
    </div>
    <el-dialog :visible.sync="dialogVisible" width="920px" :append-to-body="true" class="submit-dialog">
      <center>
        <img  src="~/assets/img/ic_congratulations.webp" loading="lazy" alt="ic_congratulations" class="ic_congratulations">
        <p class="dialog_title">Congrats, your details are<br>submitted successfully.</p>
        <p class="dialog_text">We will get in touch with you in 30 minutes. Meanwhile,<br>scan the QR code to<span
            style="font-weight:bolder;"> download the app!</span></p>
        <img  src="~/assets/img/qr_schedule.webp" loading="lazy" alt="qr_schedule" class="qr_schedule">
        <div class="download-container">
          <img  src="~/assets/img/btn_appstore.webp" loading="lazy" alt="btn_appstore" @click="appImgClickHandle" class="download_btn">
          <img  src="~/assets/img/btn_googleplay.webp" loading="lazy" alt="btn_googleplay" @click="googleImgClickHandle"
            class="download_btn">
          <div class="downloadDialog-button-pkg-container" @mouseover="downloadPkgMouseIn"
            @mouseout="downloadPkgMouseOut">
            <img  src="~/assets/img/pkg_android.webp" class="downloadDialog-button-pkg" @click="googlePkgClickHandle" loading="lazy" alt="google-play-badge"/>
            <img  v-if="popoverImgShow" @mouseover="downloadPkgMouseIn" @click="openDownloadGuide" class="popover-img"
              src="~/assets/img/ic_download_guide.webp" loading="lazy" alt="download_guide">
          </div>
        </div>
      </center>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'GetALinkToDownload',
  components: {},
  data() {
    return {
      popoverImgShow: false,
      popoverTimeOut: null,
      mobile: '',
      isPhoneNumberError: false,
      dialogVisible: false,
    };
  },
  computed: {},
  watch: {

  },
  created() { },
  beforeMount() {

  },
  mounted() {

  },
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
    getALinkInputFocus() {
      this.isPhoneNumberError = false;
    },
    async sendAppClick() {
      if (this.mobile.length < 10) {
        this.isPhoneNumberError = true;
        return;
      }
      const vtigerData = {
        __vtrftk: 'sid:ac4f7e4be21d8aec81241af239e2f6c8421f7f86,1627645682',
        publicid: '1dc58027d3a9efeae22f669ed8369263',
        urlencodeenable: '1',
        __vtCurrency: '1',
        firstname: 'Linkedin BD',
        lastname: 'Linkedin BD',
        mobile: `+91${this.mobile}`,
        email: '',
        account_id: null,
        cf_contacts_positionchoice: '',
        title: '',
        emailoptin: '',
        cf_contacts_enterurl: window.location.href,
        cf_contacts_appointmenttime2: '',
        leadsource: 'LinkedIn Request (India)',
        cf_contacts_freetocontact: '',
      };
      const formData = {
        bdId: '',
        mobile: `+91${this.mobile}`,
      };
      const data = await this.$reqPost('/hirect/chat-search-service/leads/addBDLead', formData);
      if (data.data.code !== 2000) {
        this.$message({
          message: 'Please try again',
          type: 'warning',
        });
        return;
      }
      const req = await this.$reqPost('/hirect/company-service/postWix', vtigerData);
      if (req.data.code === 2000) {
        this.dialogVisible = true;
        this.mobile = '';
      } else {
        this.$message({
          message: 'Please try again',
          type: 'warning',
        });
      }
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
/deep/ .el-input__inner {
  height: 64px;
}

/deep/ .el-button--primary:hover,
.el-button--primary:focus {
  color: #0E101A;
}

.get-a-link-to-download {
  position: relative;
  width: 518px;
  height: 335px;
  padding: 60px 36px;
  background: #FFFFFF;
  box-shadow: 0px 23px 47px 0px rgba(0, 0, 0, 0.12);
  border-radius: 16px;
}

.get-a-link-title {
  font-size: 48px;
  font-weight: bold;
  color: #0E101A;
  line-height: 40px;
  white-space: nowrap;
}

.get-a-link-title-min {
  font-size: 20px;
  font-weight: 400;
  color: #0E101A;
  line-height: 24px;
  margin: 24px 0px 40px 0px;
}

.get-a-link-text {
  font-size: 14px;
  font-weight: 400;
  color: #0E101A;
  line-height: 16px;
  margin: 14px 0px 54px 0px;
}

.get-a-link-button {
  width: 100%;
  height: 60px;
  font-size: 18px;
  font-weight: bold;
  color: #0E101A;
}

.alertText {
  position: absolute;
  font-size: 15px;
  color: #EF444F;
  top: 252px;
}

.submit-dialog {

  .ic_congratulations {
    display: block;
    width: 90px;
    height: 70px;
  }

  .dialog_title {
    font-size: 28px;
    font-weight: bold;
    color: #0E101A;
    line-height: 34px;
    margin: 24px 0px;
  }

  .dialog_text {
    font-size: 18px;
    font-weight: normal;
    color: #0E101A;
    line-height: 20px;
  }

  .qr_schedule {
    width: 196px;
    height: 196px;
    margin: 32px 0px 10px 0px;
  }

  .download-container {
    display: flex;
    width: 550px;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 60px;

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
