<template>
  <div>
    <div class="schedule-a-call">
      <h2 class="schedule-title">Talk to Our Hirect Team</h2>
      <p class="schedule-text">Share your details. We will get in touch with you in 30 minutes.</p>
      <div class="input-container">
        <el-input id="user-name" v-model="getUserInf.userName" @focus="inputFocus(1)" placeholder="Your Name"
          class="input-item" />
        <p v-show="isUserNameError" class="alertText">Your name is required</p>
      </div>
      <div class="input-container">
        <el-input id="phone-number" v-model="getUserInf.phoneNumber" @focus="inputFocus(2)" maxlength="10"
          placeholder="Enter 10-digit mobile number" class="input-item">
          <el-select v-model="getUserInf.phoneArea" slot="prepend" placeholder="+91" style="width:100px;">
            <el-option label="+91" value="+91"></el-option>
            <el-option label="+1" value="+1"></el-option>
            <el-option label="+65" value="+65"></el-option>
            <el-option label="+44" value="+44"></el-option>
          </el-select>
        </el-input>
        <p v-show="isPhoneNumberError" class="alertText">Your mobile is required</p>
      </div>
      <div class="input-container">
        <el-input id="user-email" v-model="getUserInf.userEmail" @focus="inputFocus(3)" placeholder="Your Work Email"
          class="input-item" />
        <p v-show="isUserEmailError" class="alertText">Your work email is required</p>
      </div>
      <div class="input-container">
        <el-input id="company-name" v-model="getUserInf.userCompanyName" @focus="inputFocus(4)"
          placeholder="Your Company Name" class="input-item" />
        <p v-show="isCompanyNameError" class="alertText">Your company name is required</p>
      </div>
      <div class="input-container">
        <el-select id="user-position" v-model="getUserInf.userPosition" @focus="inputFocus(5)" class="input-item"
          placeholder="Your Position">
          <el-option v-for="item in positionOptions" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
        <p v-show="isUserPositionError" class="alertText">Your position is required</p>
      </div>
      <el-button type="primary" class="submitButton" :loading="isButtonLoading" @click="submitClick">Submit</el-button>
      <el-checkbox v-model="getUserInf.isReceive" class="schedule-checkbox" style="color:#78787A;">I'm neither a job
        seeker nor a hiring consultant.</el-checkbox>
    </div>
    <el-dialog :visible.sync="dialogVisible" width="920px" class="submit-dialog">
      <center>
        <img src="~/assets/img/ic_congratulations.png" alt="ic_congratulations" class="ic_congratulations">
        <p class="dialog_title">Congrats, your details are<br>submitted successfully.</p>
        <p class="dialog_text">We will get in touch with you in 30 minutes. Meanwhile,<br>scan the QR code to<span
            style="font-weight:bolder;"> download the app!</span></p>
        <img src="~/assets/img/qr_schedule.png" alt="qr_schedule" class="qr_schedule">
        <div class="download-container">
          <img src="~/assets/img/btn_appstore.png" alt="btn_appstore" @click="appImgClickHandle" class="download_btn">
          <img src="~/assets/img/btn_googleplay.png" alt="btn_googleplay" @click="googleImgClickHandle"
            class="download_btn">
          <div class="downloadDialog-button-pkg-container" @mouseover="downloadPkgMouseIn"
            @mouseout="downloadPkgMouseOut">
            <img src="~/assets/img/pkg_android.png" class="downloadDialog-button-pkg" @click="googlePkgClickHandle" />
            <img v-if="popoverImgShow" @mouseover="downloadPkgMouseIn" @click="openDownloadGuide" class="popover-img"
              src="~/assets/img/ic_download_guide.png" alt="download_guide">
          </div>
        </div>
      </center>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'schedule-a-call',
  components: {},
  data() {
    return {
      popoverImgShow: false,
      popoverTimeOut: null,
      dialogVisible: false,
      submitUrlSearch: '',
      submitUrl: '',
      isReceive: true,
      isButtonLoading: false,
      isUserNameError: false,
      isPhoneNumberError: false,
      isUserEmailError: false,
      isCompanyNameError: false,
      isUserPositionError: false,
      positionOptions: [{
        value: 'HR',
        label: 'HR',
      }, {
        value: 'Founder/CEO',
        label: 'Founder/CEO',
      }, {
        value: 'CTO',
        label: 'CTO',
      }, {
        value: 'CMO',
        label: 'CMO',
      }, {
        value: 'COO',
        label: 'COO',
      }, {
        value: 'Others',
        label: 'Others',
      }],
      getUserInf: {
        userName: '',
        phoneNumber: '',
        phoneArea: '+91',
        userEmail: '',
        userCompanyName: '',
        userPosition: '',
        isReceive: true,
      },
    };
  },
  computed: {},
  watch: {

  },
  created() { },
  beforeMount() {
    this.$localSaveSubmitUrl();
  },
  mounted() {
    this.submitUrlSearch = JSON.parse(window.localStorage.getItem('submitUrlSearch'));
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
    googlePkgClickHandle() {
      window.open(this.androidPkgAddressIN, '_blank');
    },
    // clear form
    clearFormData() {
      this.getUserInf.userName = '';
      this.getUserInf.phoneNumber = '';
      this.getUserInf.userEmail = '';
      this.getUserInf.userCompanyName = '';
      this.getUserInf.userPosition = '';
    },
    // send data
    async submitSend() {
      this.isButtonLoading = true;
      // processing submitUrl parameter
      if (window.localStorage.getItem('hasSubmitUrl') === '1') {
        this.submitUrl = window.localStorage.getItem('submitUrl');
      } else {
        this.submitUrl = window.location.href;
      }

      // processing utm_source ---> leadsource parameter
      let leadSourcePara = '';
      if (this.submitUrlSearch && this.submitUrlSearch.utm_source) {
        if (this.submitUrlSearch.utm_source === 'google') {
          leadSourcePara = 'Google Ad';
        } else if (this.submitUrlSearch.utm_source === 'Facebook') {
          leadSourcePara = 'Facebook Ads (India)';
        } else if (this.submitUrlSearch.utm_source === 'snapchat') {
          leadSourcePara = 'Snapchat Ad (India)';
        } else if (this.submitUrlSearch.utm_source === 'tiktok') {
          leadSourcePara = 'Tiktok Ad (India)';
        } else if (this.submitUrlSearch.utm_source === 'bing') {
          leadSourcePara = 'bing (India)';
        } else {
          leadSourcePara = '';
        }
      } else {
        leadSourcePara = '';
      }
      this.$ga.event('Leads', 'Submitted', 'form');
      const formData = {
        __vtrftk: 'sid:3d4d1077ddbde35a14455b3381cf01cce7dcbe02,1626673660',
        publicid: 'db46e626a9177c57165bb18e99e676e3',
        urlencodeenable: '1',
        name: 'Hirect.in  are you hiring form - new',
        __vtCurrency: '1',
        firstname: this.getUserInf.userName,
        lastname: this.getUserInf.userName,
        mobile: this.getUserInf.phoneArea + this.getUserInf.phoneNumber,
        email: this.getUserInf.userEmail,
        account_id: this.getUserInf.userCompanyName,
        cf_contacts_positionchoice: this.getUserInf.userPosition,
        title: '',
        emailoptin: '',
        cf_contacts_enterurl: this.submitUrl,
        cf_contacts_appointmenttime2: '',
        leadsource: leadSourcePara,
        cf_contacts_freetocontact: '',
      };
      await this.$reqPost('/hirect/company-service/postWix', formData);
      this.isButtonLoading = false;
      this.dialogVisible = true;
      this.$sendToEsData('webQrcodeViewed', {
        region_id: 0,
        position: 'in_startup_hiring_leads_popup',
      });
      // eslint-disable-next-line no-undef
      fbq('track', 'LEAD');
      this.clearFormData();
    },
    // click, check
    submitClick() {
      if (this.getUserInf.userName === '') {
        document.getElementById('user-name').style.borderColor = '#EF444F';
        this.isUserNameError = true;
        return;
      } if (this.getUserInf.phoneNumber.length < 10) {
        document.getElementById('phone-number').style.borderColor = '#EF444F';
        this.isPhoneNumberError = true;
        return;
      } if (this.getUserInf.userEmail === '') {
        document.getElementById('user-email').style.borderColor = '#EF444F';
        this.isUserEmailError = true;
        return;
      } if (this.getUserInf.userCompanyName === '') {
        document.getElementById('company-name').style.borderColor = '#EF444F';
        this.isCompanyNameError = true;
        return;
      } if (this.getUserInf.userPosition === '') {
        document.getElementById('user-position').style.borderColor = '#EF444F';
        this.isUserPositionError = true;
        return;
      }
      this.submitSend();
    },
    inputFocus(val) {
      switch (val) {
        case 1:
          document.getElementById('user-name').style.borderColor = '#DCDFE6';
          this.isUserNameError = false;
          break;
        case 2:
          document.getElementById('phone-number').style.borderColor = '#DCDFE6';
          this.isPhoneNumberError = false;
          break;
        case 3:
          document.getElementById('user-email').style.borderColor = '#DCDFE6';
          this.isUserEmailError = false;
          break;
        case 4:
          document.getElementById('company-name').style.borderColor = '#DCDFE6';
          this.isCompanyNameError = false;
          break;
        case 5:
          document.getElementById('user-position').style.borderColor = '#DCDFE6';
          this.isUserPositionError = false;
          break;
        default:
          break;
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
  },
};
</script>

<style lang="scss" scoped>
.schedule-a-call /deep/ .el-input__inner {
  height: 64px;
  font-size: 18px;
}

.schedule-a-call /deep/ .el-checkbox__input.is-checked+.el-checkbox__label {
  color: #0E101A;
}

.schedule-a-call /deep/ .el-checkbox__input.is-checked .el-checkbox__inner {
  background-color: #0E101A;
  border-color: #0E101A;
}

/deep/ .el-dialog {
  border-radius: 12px;
}

.alertText {
  position: absolute;
  font-size: 15px;
  color: #EF444F;
  top: 65px;
}

.input-item {
  width: 100%;
  margin-bottom: 20px;
}

.input-container {
  position: relative;
}

.schedule-a-call {
  //  width: 587px;
  height: 674px;
  padding: 40px;
  background-color: #FFFFFF;
  box-shadow: 0px 23px 47px 0px rgba(0, 0, 0, 0.12);
  border-radius: 16px;
  text-align: left;
  margin-top: 73px;

  .schedule-title {
    font-size: 48px;
    font-weight: bolder;
    color: #0E101A;
    line-height: 58px;
  }

  .schedule-text {
    font-size: 20px;
    font-weight: 400;
    color: #808080;
    line-height: 24px;
    margin: 6px 0px 34px 0px;
  }

  .submitButton {
    height: 64px;
    width: 100%;
    border-radius: 32px;
    font-size: 24px;
    font-weight: bold;
    color: #0E101A;
  }
}

// .input-container-bottom {
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   position: relative;

//   .inner-input-item {
//     width: 47%;
//   }
// }
.schedule-checkbox {
  font-size: 20px;
  font-weight: 400;
  color: #0E101A;
  line-height: 24px;
  margin-top: 20px;
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
    padding-bottom: 60px;

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

@media only screen and (max-width : 768px) {
  .schedule-a-call /deep/ .el-input__inner {
    height: 64px;
    font-size: 18px;
  }

  .schedule-a-call /deep/ .el-checkbox__input.is-checked+.el-checkbox__label {
    color: #0E101A;
  }

  .schedule-a-call /deep/ .el-checkbox__input.is-checked .el-checkbox__inner {
    background-color: #0E101A;
    border-color: #0E101A;
  }

  /deep/ .el-dialog {
    border-radius: 12px;
  }

  .alertText {
    position: absolute;
    font-size: 15px;
    color: #EF444F;
    top: 65px;
  }

  .input-item {
    width: 100%;
    margin-bottom: 20px;
  }

  .input-container {
    position: relative;
  }

  .schedule-a-call {
    // width: 587px;
    height: 674px;
    padding: 10px;
    background-color: #FFFFFF;
    box-shadow: 0px 23px 20px 0px rgba(0, 0, 0, 0.12);
    border-radius: 8px;
    text-align: left;
    margin-top: 73px;
    margin-left: 10px;
    margin-right: 10px;

    .schedule-title {
      font-size: 48px;
      font-weight: bolder;
      color: #0E101A;
      line-height: 58px;
    }

    .schedule-text {
      font-size: 20px;
      font-weight: 400;
      color: #808080;
      line-height: 24px;
      margin: 6px 0px 34px 0px;
    }

    .submitButton {
      height: 64px;
      width: 100%;
      border-radius: 32px;
      font-size: 24px;
      font-weight: bold;
      color: #0E101A;
    }
  }

  // .input-container-bottom {
  //   display: flex;
  //   align-items: center;
  //   justify-content: space-between;
  //   position: relative;

  //   .inner-input-item {
  //     width: 47%;
  //   }
  // }
  .schedule-checkbox {
    font-size: 20px;
    font-weight: 400;
    color: #0E101A;
    line-height: 24px;
    margin-top: 20px;
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
      padding-bottom: 60px;

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
}
</style>
