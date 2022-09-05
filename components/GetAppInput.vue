<template>
  <div>
    <div class="input-container">
      <div class="Sgdef">+91 |</div>
      <input type="tel" maxlength="10" v-model="smsMobileNumber" class="form-search-mob"
        placeholder="Enter Mobile Number" />
      <el-button type="primary" class="btn btn-app" :loading="isButtonLoading" @click="sendSms">Get App</el-button>
      <!-- <button class="btn btn-app" @click="sendSms">
        Get App
      </button> -->
    </div>
    <div class="input-container-mobile">
      <a class="btn btn-app" style="margin-left: 20px; border-radius:50px"
        href="https://hirectapp.onelink.me/DNX5/8ed93b94" target="_blank">
        Get App
      </a>
    </div>
    <span v-if="isMobileError" class="alertText" :class="errorClass">{{ errorMsg }}</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isMobileError: false,
      smsMobileNumber: '',
      errorMsg: '',
      errorClass: '',
      elementVisible: true,
      isButtonLoading: false,
    };
  },

  methods: {
    async sendSms() {
      this.isButtonLoading = true;
      // eslint-disable-next-line no-undef
      this.errorMsg = await this.$sendAppLink(this.smsMobileNumber, 'home_page_section');
      // this.errorMsg = 'SMS request failed, Please try later';
      this.isMobileError = this.errorMsg !== '';
      this.errorClass = this.errorMsg.indexOf('Success') > -1 ? 'success' : 'error';
      this.smsMobileNumber = '';
      this.isButtonLoading = false;

      setTimeout(() => {
        this.isMobileError = false;
      }, 3000);
    },
  },
};
</script>
<style lang="scss" scoped>
.input-container-mobile {
  display: none;
}

.input-container {
  display: flex;
  align-items: stretch;

  .Sgdef {
    position: absolute;
    color: #B4B4B4;
    z-index: 1;
    font-size: 13px;
    padding: 13px 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  .form-search-mob {
    display: flex;
    position: relative;
    -webkit-box-pack: start;
    justify-content: flex-start;
    -webkit-box-align: center;
    align-items: center;
    height: 45px;
    width: 60%;
    color: #808080;
    font-size: 13px;
    padding: 0px 10px 0px 60px;
    background: rgb(255, 255, 255);
    border: 2px solid rgb(223, 225, 230);
    box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
    border-radius: 50px;

    ::placeholder {
      color: #B4B4B4;
      font-size: 16px;
    }
  }

  .hire-now-img {
    text-align: end;
    margin-top: -67px;
  }
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
}

.btn-app:hover{
  color: #0e101a;
}

.alertText {
  position: absolute;
  font-size: 15px;
  margin-left: 10px;
}

.error {
    color: #ef444f;
  }

  .success{
    color:#22bc84;
  }

@media only screen and (min-width: 300px) and (max-width: 767px) {
  .btn-app {
    background-color: #2ce2a2;
    border-color: #2ce2a2;
    color: #0e101a;
    font-size: 14px;
    font-weight: 700;
    padding: 10px 30px;
    margin-left: 10px;
    height: 44px;
    width: 127px;
    line-height: normal;
  }

  .input-container {
    flex-direction: column;
  }

  .input-container {
    display: none;
  }

  .input-container-mobile {
    display: block;
  }

  button {
    margin-top: 10px;
    align-self: center;
  }

}
</style>
