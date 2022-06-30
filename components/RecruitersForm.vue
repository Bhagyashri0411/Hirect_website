<template>
  <div>
    <div class="schedule-a-call contact-ue-form">
      <p class="schedule-title">Take Your First Step to Register</p>
      <p class="schedule-text">
        Your Next Hire is Right Here. Get Started Soon.
      </p>
      <div class="input-container">
        <el-input
          id="user-name"
          v-model="getUserInf.userName"
          @focus="inputFocus(1)"
          placeholder="Your Name"
          class="input-item"
        />
        <p v-show="isUserNameError" class="alertText">Your name is required</p>
      </div>
      <div class="input-container">
        <el-input
          id="phone-number"
          v-model="getUserInf.phoneNumber"
          @focus="inputFocus(2)"
          maxlength="10"
          placeholder="Enter 10 digit mobile number"
          class="input-item"
        >
          <el-select
            v-model="getUserInf.phoneArea"
            slot="prepend"
            placeholder="+91"
            style="width: 68px"
          >
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
        <el-input
          id="user-email"
          v-model="getUserInf.userEmail"
          @focus="inputFocus(3)"
          placeholder="Your Work Email"
          class="input-item"
        />
        <p v-show="isUserEmailError" class="alertText">
          Your work email is required
        </p>
      </div>
      <div class="input-container-bottom">
        <el-input
          id="company-name"
          v-model="getUserInf.userCompanyName"
          @focus="inputFocus(4)"
          placeholder="Your Company Name"
          class="inner-input-item"
        />
        <el-select
          id="user-position"
          v-model="getUserInf.userPosition"
          @focus="inputFocus(5)"
          class="inner-input-item"
          placeholder="Your Position"
        >
          <el-option
            v-for="item in positionOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <p v-show="isCompanyNameError" class="alertText">
          Your company name is required
        </p>
        <p v-show="isUserPositionError" class="alertText" style="left: 276px">
          Your position is required
        </p>
      </div>
      <el-checkbox
        v-model="getUserInf.isReceive"
        class="schedule-checkbox"
        style="color: #78787a; margin-left: 22px"
        >I would like to receive updates via whatsapp.</el-checkbox
      >
      <el-button
        type="primary"
        class="submitButton"
        :loading="isButtonLoading"
        @click="submitClick"
        >Schedule a call now!</el-button
      >
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
    <el-dialog
      :visible.sync="dialogVisible"
      width="920px"
      :append-to-body="true"
      class="submit-dialog"
    >
      <center>
        <img
          src="~/assets/img/ic_congratulations.png"
          alt="ic_congratulations"
          class="ic_congratulations"
        />
        <p class="dialog_title">
          Congrats, your details are<br />submitted successfully.
        </p>
        <p class="dialog_text">
          We will get in touch with you in 30 minutes. Meanwhile,<br />scan the
          QR code to<span style="font-weight: bolder"> download the app!</span>
        </p>
        <img
          src="~/assets/img/qr_schedule.png"
          alt="qr_schedule"
          class="qr_schedule"
        />
        <div class="download-container">
          <img
            src="~/assets/img/btn_appstore.png"
            alt="btn_appstore"
            @click="appImgClickHandle"
            class="download_btn"
          />
          <img
            src="~/assets/img/btn_googleplay.png"
            alt="btn_googleplay"
            @click="googleImgClickHandle"
            class="download_btn"
          />
          <div
            class="downloadDialog-button-pkg-container"
            @mouseover="downloadPkgMouseIn"
            @mouseout="downloadPkgMouseOut"
          >
            <img
              src="~/assets/img/pkg_android.png"
              class="downloadDialog-button-pkg"
              @click="googlePkgClickHandle"
            />
            <img
              v-if="popoverImgShow"
              @mouseover="downloadPkgMouseIn"
              @click="openDownloadGuide"
              class="popover-img"
              src="~/assets/img/ic_download_guide.png"
              alt="download_guide"
            />
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
  created() {},
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
  width: 388px;
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
  width: 388px;
  height: 42px;
  border-radius: 50px;
  background-color: #f2f4f8;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 24px;
  border-color: #f7f7f7 !important;
}

.schedule-a-call /deep/ .el-checkbox__input.is-checked + .el-checkbox__label {
  color: #0e101a;
}

.schedule-a-call /deep/ .el-checkbox__input.is-checked .el-checkbox__inner {
  background-color: #0e101a;
  border-color: #0e101a;
}

/deep/ .el-dialog {
  border-radius: 12px;
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

@media only screen and (min-width: 768px) and (max-width: 1400px) {
  .schedule-a-call .schedule-text {
    margin: 6px 0px 35px 0px;
    font-size: 18px;
  }

  .schedule-a-call .schedule-title {
    font-size: 41px;
    line-height: normal;
  }

  .input-item {
    margin-bottom: 15px;
  }

  .schedule-a-call .submitButton {
    height: 51px;
    font-size: 21px;
    margin-top: 20px;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1200px) {
  .schedule-a-call .schedule-title {
    font-size: 35px;
  }

  .schedule-a-call .schedule-text {
    margin: 6px 0px 30px 0px;
  }

  .input-container-bottom .inner-input-item {
    width: 49%;
  }
}

@media only screen and (min-width: 300px) and (max-width: 767px) {
  .el-dialog__wrapper.schedule-dialog .el-dialog .schedule-a-call {
    padding: 0;
  }

  .schedule-a-call .schedule-title {
    font-size: 26px;
    line-height: normal;
    word-break: break-word;
  }

  .el-dialog__wrapper.schedule-dialog .el-dialog__headerbtn {
    top: 7px;
    right: 10px;
  }

  .schedule-a-call .schedule-text {
    font-size: 16px;
    word-break: break-word;
    margin: 6px 0px 25px 0px;
  }

  .input-item {
    margin-bottom: 15px;
  }

  .input-container-bottom .inner-input-item {
    width: 100%;
    margin-bottom: 15px;
  }

  .input-container-bottom {
    flex-direction: column;
  }

  .schedule-checkbox {
    margin-top: 0px;
    line-height: normal;
  }

  .schedule-a-call .submitButton {
    height: 42px;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
  }
}

// ** pop-up window ***

@media only screen and (min-width: 768px) and (max-width: 1400px) {
  .schedule-a-call .schedule-text {
    margin: 6px 0px 35px 0px;
    font-size: 18px;
  }

  .schedule-a-call .schedule-title {
    font-size: 41px;
    line-height: normal;
  }

  .input-item {
    margin-bottom: 15px;
  }

  .schedule-a-call .submitButton {
    height: 40px;
    font-size: 18px;
    margin-top: 20px;
  }

  // Pop window
  /deep/ .el-dialog {
    width: 900px;
  }

  .submit-dialog .ic_congratulations {
    width: 83px;
    height: 66px;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1200px) {
  .schedule-a-call .schedule-title {
    font-size: 35px;
  }

  .schedule-a-call .schedule-text {
    margin: 6px 0px 30px 0px;
  }

  .input-container-bottom .inner-input-item {
    width: 49%;
  }

  // Pop window
  /deep/ .el-dialog {
    width: 800px;
  }

  .submit-dialog .ic_congratulations {
    width: 75px;
    height: 60px;
  }

  .submit-dialog .dialog_title {
    font-size: 25px;
    margin: 24px 0px;
  }

  .submit-dialog .dialog_text {
    font-size: 17px;
    line-height: 19px;
  }

  .submit-dialog .qr_schedule[data-v-9354007a] {
    width: 190px;
    height: 186px;
    margin: 15px 0px;
  }
}

@media only screen and (min-width: 768px) and (max-width: 992px) {
  // Pop window
  /deep/ .el-dialog {
    width: 750px;
  }

  .submit-dialog .ic_congratulations {
    width: 70px;
    height: 55px;
  }

  .submit-dialog .dialog_title {
    font-size: 22px;
    margin: 24px 0px;
    line-height: 30px;
  }

  .submit-dialog .dialog_text {
    font-size: 15px;
    line-height: 20px;
  }

  .submit-dialog .qr_schedule {
    width: 185px;
    height: 180px;
    margin: 15px 0px;
  }

  .submit-dialog .download-container {
    display: flex;
    padding-bottom: 40px;
  }
}

@media only screen and (min-width: 730px) and (max-width: 880px) {
  .el-dialog__wrapper.schedule-dialog .el-dialog .schedule-a-call {
    padding: 0;
  }

  .schedule-a-call .schedule-title {
    font-size: 26px;
    line-height: normal;
    word-break: break-word;
  }

  .el-dialog_wrapper.schedule-dialog .el-dialog_headerbtn {
    top: 7px;
    right: 10px;
  }

  .schedule-a-call .schedule-text {
    font-size: 16px;
    word-break: break-word;
    margin: 6px 0px 25px 0px;
  }

  .input-item {
    margin-bottom: 15px;
  }

  .el-input-group__prepend .el-select {
    width: 60px !important;
  }

  .input-container-bottom .inner-input-item {
    width: 100%;
    margin-bottom: 15px;
  }

  .input-container-bottom {
    flex-direction: column;
  }

  .schedule-checkbox {
    margin-top: 0px;
    line-height: normal;
  }

  .schedule-a-call .submitButton {
    height: 42px;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
  }

  // Pop window
  /deep/ .el-dialog {
    width: 500px;
    max-width: 800px;
  }

  .submit-dialog .ic_congratulations {
    width: 65px;
    height: 50px;
  }

  .submit-dialog .dialog_title {
    font-size: 20px;
    margin: 20px 0px;
    line-height: 26px;
  }

  .submit-dialog .dialog_text {
    font-size: 14px;
    line-height: 20px;
  }

  .submit-dialog .qr_schedule {
    width: 185px;
    height: 175px;
    margin: 15px 0px;
  }

  .submit-dialog .download-container {
    padding-bottom: 0px;
    width: 350px;
  }

  .submit-dialog .download-container .download_btn[data-v-9354007a],
  .submit-dialog
    .download-container
    .downloadDialog-button-pkg-container
    .downloadDialog-button-pkg[data-v-9354007a] {
    display: block;
    width: 110px;
    height: 35px;
    margin: 5px 0;
  }
}

@media only screen and (min-width: 390px) and (max-width: 730px) {
  // Pop window
  /deep/ .el-dialog {
    width: 700px;
    max-width: 370px;
  }

  .submit-dialog .ic_congratulations {
    width: 65px;
    height: 50px;
  }

  .submit-dialog .dialog_title {
    font-size: 20px;
    margin: 20px 0px;
    line-height: 26px;
  }

  .submit-dialog .dialog_text {
    font-size: 12px;
    line-height: 20px;
  }

  .submit-dialog .qr_schedule {
    width: 185px;
    height: 175px;
    margin: 15px 0px;
  }

  .submit-dialog .download-container {
    padding-bottom: 30px;
    display: block;
    width: 160px;
  }

  .submit-dialog .download-container .download_btn,
  .submit-dialog
    .download-container
    .downloadDialog-button-pkg-container
    .downloadDialog-button-pkg {
    width: 140px;
    height: 40px;
    margin: 5px 0;
  }
}

@media only screen and (min-width: 200px) and (max-width: 390px) {
  // Pop window
  /deep/ .el-dialog {
    width: 700px;
    max-width: 312px;
  }

  .submit-dialog .ic_congratulations {
    width: 65px;
    height: 50px;
  }

  .submit-dialog .dialog_title {
    font-size: 17px;
    margin: 18px 0px;
    line-height: 20px;
  }

  .submit-dialog .dialog_text {
    font-size: 11px;
    line-height: 15px;
  }

  .submit-dialog .qr_schedule {
    width: 175px;
    height: 165px;
  }

  .submit-dialog .download-container {
    padding-bottom: 0;
    display: block;
    width: 150px;
  }

  .submit-dialog .download-container .download_btn,
  .submit-dialog
    .download-container
    .downloadDialog-button-pkg-container
    .downloadDialog-button-pkg {
    width: 140px;
    height: 40px;
    margin: 5px 0;
  }
}
</style>
