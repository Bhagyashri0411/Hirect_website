<template>
  <div>
    <div class="schedule-a-call contact-ue-form">
      <p class="schedule-title">Take Your First Step to Register</p>
      <p class="schedule-text">
        Your Next Hire is Right Here. Get Started Soon.
      </p>
      <div class="input-container">
        <el-input id="user-name" v-model="getUserInf.userName" @focus="inputFocus(1)" placeholder="Your Name"
          class="input-item" />
        <p v-show="isUserNameError" class="alertText">Your name is required</p>
      </div>
      <div class="input-container">
        <el-input id="phone-number" v-model="getUserInf.phoneNumber" @focus="inputFocus(2)" maxlength="10"
          placeholder="Enter 10 digit mobile number" class="input-item">
          <el-select v-model="getUserInf.phoneArea" slot="prepend" placeholder="+91" style="width: 68px">
            <el-option label="+91" value="+91"></el-option>
            <el-option label="+1" value="+1"></el-option>
            <el-option label="+65" value="+65"></el-option>
            <el-option label="+44" value="+44"></el-option>
          </el-select>
        </el-input>
        <p v-show="isPhoneNumberError" class="alertText">
          Your mobile is required
        </p>
      </div>
      <div class="input-container">
        <el-input id="user-email" v-model="getUserInf.userEmail" @focus="inputFocus(3)" placeholder="Your Work Email"
          class="input-item" />
        <p v-show="isUserEmailError" class="alertText">
          Your work email is required
        </p>
      </div>
      <div class="input-container-bottom">
        <el-input id="company-name" v-model="getUserInf.userCompanyName" @focus="inputFocus(4)"
          placeholder="Your Company Name" class="inner-input-item" />
        <el-select id="user-position" v-model="getUserInf.userPosition" @focus="inputFocus(5)" class="inner-input-item"
          placeholder="Your Position">
          <el-option v-for="item in positionOptions" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
        <p v-show="isCompanyNameError" class="alertText">
          Your company name is required
        </p>
        <p v-show="isUserPositionError" class="alertText" style="left: 276px">
          Your position is required
        </p>
      </div>
      <el-checkbox v-model="getUserInf.isReceive" class="schedule-checkbox" style="color: #78787a; margin-left: 22px">I
        would like to receive updates via whatsapp.</el-checkbox>
      <el-button type="primary" class="submitButton" :loading="isButtonLoading" @click="submitClick">Schedule a call
        now!</el-button>
      <!-- <div class="next-or"><span>-OR-</span></div> -->
      <!-- <el-button
        type="primary outline-dark"
        class="Scheduleacallnow"
        :loading="isButtonLoading"
        @click="submitClick"
        >Schedule a call now!</el-button
      > -->

      <!-- <h3 class="allredy-link">
            Already registered user?<a target="blink" href="https://recruiter.hirect.in/">Login
            </a>
        </h3> -->
    </div>
    <el-dialog :visible.sync="dialogVisible" width="920px" :append-to-body="true" class="submit-dialog">
      <center>
        <img src="~/assets/img/ic_congratulations.png" alt="ic_congratulations" class="ic_congratulations" />
        <p class="dialog_title">
          Congrats, your details are<br />submitted successfully.
        </p>
        <p class="dialog_text">
          We will get in touch with you in 30 minutes. Meanwhile,<br />scan the
          QR code to<span style="font-weight: bolder"> download the app!</span>
        </p>
        <img src="~/assets/img/qr_schedule.png" alt="qr_schedule" class="qr_schedule" />
        <div class="download-container">
          <img src="~/assets/img/btn_appstore.png" alt="btn_appstore" @click="appImgClickHandle" class="download_btn" />
          <img src="~/assets/img/btn_googleplay.png" alt="btn_googleplay" @click="googleImgClickHandle"
            class="download_btn" />
          <div class="downloadDialog-button-pkg-container" @mouseover="downloadPkgMouseIn"
            @mouseout="downloadPkgMouseOut">
            <img src="~/assets/img/pkg_android.png" class="downloadDialog-button-pkg" @click="googlePkgClickHandle" />
            <img v-if="popoverImgShow" @mouseover="downloadPkgMouseIn" @click="openDownloadGuide" class="popover-img"
              src="~/assets/img/ic_download_guide.png" alt="download_guide" />
          </div>
        </div>
      </center>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "schedule-a-call",
  components: {},
  data() {
    return {
      popoverImgShow: false,
      popoverTimeOut: null,
      dialogVisible: false,
      submitUrlSearch: "",
      submitUrl: "",
      isReceive: true,
      isButtonLoading: false,
      isUserNameError: false,
      isPhoneNumberError: false,
      isUserEmailError: false,
      isCompanyNameError: false,
      isUserPositionError: false,
      positionOptions: [
        {
          value: "HR",
          label: "HR",
        },
        {
          value: "Founder/CEO",
          label: "Founder/CEO",
        },
        {
          value: "CTO",
          label: "CTO",
        },
        {
          value: "CMO",
          label: "CMO",
        },
        {
          value: "COO",
          label: "COO",
        },
        {
          value: "Others",
          label: "Others",
        },
      ],
      getUserInf: {
        userName: "",
        phoneNumber: "",
        phoneArea: "+91",
        userEmail: "",
        userCompanyName: "",
        userPosition: "",
        isReceive: true,
      },
    };
  },
  computed: {},
  watch: {},
  created() { },
  beforeMount() {
    this.$localSaveSubmitUrl();
  },
  mounted() {
    this.submitUrlSearch = JSON.parse(
      window.localStorage.getItem("submitUrlSearch")
    );
  },
  methods: {
    openDownloadGuide() {
      window.open("https://hirect.in/download-guide", "_blank");
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
      window.open(this.androidPkgAddressIN, "_blank");
    },
    // clear form
    clearFormData() {
      this.getUserInf.userName = "";
      this.getUserInf.phoneNumber = "";
      this.getUserInf.userEmail = "";
      this.getUserInf.userCompanyName = "";
      this.getUserInf.userPosition = "";
    },
    // send data
    async submitSend() {
      this.isButtonLoading = true;
      // processing submitUrl parameter
      if (window.localStorage.getItem("hasSubmitUrl") === "1") {
        this.submitUrl = window.localStorage.getItem("submitUrl");
      } else {
        this.submitUrl = window.location.href;
      }

      // processing utm_source ---> leadsource parameter
      var leadSourcePara = "";
      if (this.submitUrlSearch && this.submitUrlSearch.utm_source) {
        if (this.submitUrlSearch.utm_source === "google") {
          leadSourcePara = "Google Ad";
        } else if (this.submitUrlSearch.utm_source === "Facebook") {
          leadSourcePara = "Facebook Ads (India)";
        } else if (this.submitUrlSearch.utm_source === "snapchat") {
          leadSourcePara = "Snapchat Ad (India)";
        } else if (this.submitUrlSearch.utm_source === "tiktok") {
          leadSourcePara = "Tiktok Ad (India)";
        } else if (this.submitUrlSearch.utm_source === "bing") {
          leadSourcePara = "bing (India)";
        } else {
          leadSourcePara = "";
        }
      } else {
        leadSourcePara = "";
      }
      this.$ga.event("Leads", "Submitted", "form");
      const formData = {
        __vtrftk: "sid:3d4d1077ddbde35a14455b3381cf01cce7dcbe02,1626673660",
        publicid: "db46e626a9177c57165bb18e99e676e3",
        urlencodeenable: "1",
        name: "Hirect.in  are you hiring form - new",
        __vtCurrency: "1",
        firstname: this.getUserInf.userName,
        lastname: this.getUserInf.userName,
        mobile: this.getUserInf.phoneArea + this.getUserInf.phoneNumber,
        email: this.getUserInf.userEmail,
        account_id: this.getUserInf.userCompanyName,
        cf_contacts_positionchoice: this.getUserInf.userPosition,
        title: "",
        emailoptin: "",
        cf_contacts_enterurl: this.submitUrl,
        cf_contacts_appointmenttime2: "",
        leadsource: leadSourcePara,
        cf_contacts_freetocontact: "",
      };
      await this.$reqPost("/hirect/company-service/postWix", formData);
      this.isButtonLoading = false;
      this.dialogVisible = true;
      this.$sendToEsData("webQrcodeViewed", {
        region_id: 0,
        position: "in_recruiters_leads_popup",
      });
      fbq("track", "LEAD");
      this.clearFormData();
    },
    // click, check
    submitClick() {
      if (this.getUserInf.userName === "") {
        document.getElementById("user-name").style.borderColor = "#EF444F";
        this.isUserNameError = true;
        return;
      } else if (this.getUserInf.phoneNumber.length < 10) {
        document.getElementById("phone-number").style.borderColor = "#EF444F";
        this.isPhoneNumberError = true;
        return;
      } else if (this.getUserInf.userEmail === "") {
        document.getElementById("user-email").style.borderColor = "#EF444F";
        this.isUserEmailError = true;
        return;
      } else if (this.getUserInf.userCompanyName === "") {
        document.getElementById("company-name").style.borderColor = "#EF444F";
        this.isCompanyNameError = true;
        return;
      } else if (this.getUserInf.userPosition === "") {
        document.getElementById("user-position").style.borderColor = "#EF444F";
        this.isUserPositionError = true;
        return;
      }
      this.submitSend();
    },
    inputFocus(val) {
      switch (val) {
        case 1:
          document.getElementById("user-name").style.borderColor = "#DCDFE6";
          this.isUserNameError = false;
          break;
        case 2:
          document.getElementById("phone-number").style.borderColor = "#DCDFE6";
          this.isPhoneNumberError = false;
          break;
        case 3:
          document.getElementById("user-email").style.borderColor = "#DCDFE6";
          this.isUserEmailError = false;
          break;
        case 4:
          document.getElementById("company-name").style.borderColor = "#DCDFE6";
          this.isCompanyNameError = false;
          break;
        case 5:
          document.getElementById("user-position").style.borderColor =
            "#DCDFE6";
          this.isUserPositionError = false;
          break;
      }
    },
    appImgClickHandle() {
      this.$ga.event("click", "ios", "app", 2);
      window.open(this.iosDownloadAddressIN, "_blank");
    },
    googleImgClickHandle() {
      this.$ga.event("click", "android", "app", 1);
      window.open(this.androidDownloadAddressIN, "_blank");
    },
  },
};
</script>

<style lang="scss" scoped>
.schedule-a-call.contact-ue-form p.schedule-title {
  color: #333333;
  font-family: Helvetica;
  font-size: 24px;
  font-weight: 700;
  font-style: normal;
  letter-spacing: normal;
  line-height: 30px;
  text-align: center;
}

.schedule-a-call.contact-ue-form .submitButton {
  border-radius: 50px;
  background-color: #2ce2a2;
  color: #000000;
  font-size: 16px;
  height: 42px;
  // width: 388px;
  left: 44px;
  top: 492px;
}

.schedule-a-call.contact-ue-form .next-or {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #b4b4b4;
  margin-top: 20px;
  text-align: center;
}

.schedule-a-call.contact-ue-form .Scheduleacallnow {
  box-sizing: border-box;
  width: 388px;
  height: 42px;
  // left: 44px;
  border: 1px solid #000000;
  border-radius: 50px;
  background: #ffffff;
  color: #000000;
  font-weight: 700;
}

.schedule-a-call.contact-ue-form p.schedule-text {
  color: #4d5358;
  font-family: Helvetica;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  letter-spacing: normal;
  line-height: 24px;
  margin-bottom: 25px;
  text-align: center;
}

h3.allredy-link {
  color: #000000;
  font-family: Helvetica;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  letter-spacing: normal;
  line-height: normal;
  padding-top: 12px;
  text-align: center;
}

h3.allredy-link a {
  color: #2ce2a2;
  text-decoration: none;
  padding-left: 5px;
}

.schedule-a-call /deep/ .el-input__inner {
  // width: 388px;
  height: 42px;
  border-radius: 50px;
  background-color: #f2f4f8;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 24px;
  border-color: #f7f7f7 !important;
}


.alertText {
  position: absolute;
  font-size: 15px;
  color: #ef444f;
  top: 65px;
}

.input-item {
  margin-bottom: 25px;
}

.input-container {
  position: relative;
}

.schedule-a-call {
  background-color: #ffffff;
  // box-shadow: 0px 23px 47px 0px rgba(0, 0, 0, 0.12);
  border-radius: 16px;
  text-align: left;
  padding: 0 20px;

  .schedule-title {
    font-size: 48px;
    font-weight: bolder;
    color: #0e101a;
    line-height: 58px;
  }

  .schedule-text {
    font-size: 20px;
    font-weight: 400;
    color: #0e101a;
    line-height: 24px;
    margin: 6px 0px 60px 0px;
  }

  .submitButton {
    margin-top: 30px;
    // display: block;
    height: 64px;
    width: 100%;
    border-radius: 2px;
    font-size: 24px;
    font-weight: bold;
    color: #0e101a;
  }
}

.schedule-checkbox {
  font-size: 20px;
  font-weight: 400;
  color: #0e101a;
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
    color: #0e101a;
    line-height: 34px;
    margin: 24px 0px;
  }

  .dialog_text {
    font-size: 18px;
    font-weight: normal;
    color: #0e101a;
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

@media only screen and (min-width: 769px) and (max-width: 1024px) {

  .schedule-a-call {
    padding: 0 10px;
  }

  .schedule-a-call.contact-ue-form p.schedule-title {
    font-size: 24px !important;
  }

  .schedule-a-call .schedule-text {
    margin: 3px 0px 50px 0px;
  }

}

@media only screen and (min-width: 769px) and (max-width: 991px) {
  .schedule-a-call.contact-ue-form p.schedule-title {
    font-size: 21px !important;
  }

  .schedule-a-call.contact-ue-form p.schedule-text {
    font-size: 14px !important;
  }

  .input-item {
    margin-bottom: 20px;
  }

  .schedule-a-call .el-input__inner {
    font-size: 14px;
  }
}

@media only screen and (min-width: 769px) and (max-width: 940px) {
  .schedule-a-call.contact-ue-form p.schedule-title {
    font-size: 19px !important;
  }

  .schedule-a-call.contact-ue-form p.schedule-text {
    font-size: 12px !important;
    margin: 0;
  }

  .schedule-a-call /deep/ .el-input__inner {
    border-radius: 20px;
    font-size: 12px;
  }

  .schedule-a-call.contact-ue-form .submitButton {
    border-radius: 20px;
    font-size: 12px;
  }
}

// MOBILE VIEW
@media only screen and (min-width: 300px) and (max-width: 481px) {
  .schedule-a-call {
    padding: 0 10px;

    .schedule-title {
      font-size: 21px !important;
    }

    .schedule-text {
      font-size: 14px !important;
    }
  }

  .schedule-a-call /deep/ .el-input__inner {
    height: 45px;
    border-radius: 30px;
    font-size: 12px;
  }

}

@media only screen and (min-width: 300px) and (max-width: 440px) {
  .schedule-a-call.contact-ue-form .el-checkbox__input.is-checked+.el-checkbox__label {
        font-size: 11px !important;
    }
 .schedule-a-call {
  padding: 0 ;
    .schedule-title {
      font-size: 15px !important;
    }

    .schedule-text {
      font-size: 10px !important;
          line-height: 5px !important;

    }
  }
  .input-item {
    margin-bottom: 20px;
}
 .schedule-a-call /deep/ .el-input__inner {
    height: 42px;
    border-radius: 20px;
  }
}
</style>
