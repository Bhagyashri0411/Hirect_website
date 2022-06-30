<template>
<div class="download-modal modal-overlay" @click="$emit('close-modal')">
    <div class="modal" @click.stop>
        <div class="download-form">
        <form>
          <div class="download-form-field">
            <div class="input-container">
              <el-input
                id="phone-number"
                v-model="getUserInf.phoneNumber"
                maxlength="10"
                placeholder="XX XX XX XX XX"
                class="input-item custom-phone-input"
              >
                <el-select
                  v-model="getUserInf.phoneArea"
                  slot="prepend"
                  placeholder="+91"
                >
                  <el-option label="+91" value="+91"></el-option>
                  <el-option label="+1" value="+1"></el-option>
                  <el-option label="+65" value="+65"></el-option>
                  <el-option label="+44" value="+44"></el-option>
                </el-select>
              </el-input>
            </div>

            <button type="submit" class="btn default-btn button-sm">
              Text Me The Link
            </button>
          </div> 
        </form>
      </div>
        <p>
            Scan the QR code below to download the <span style="color: #2ce2a2">Hirect App</span>
        </p>
        <div class="app-scan-button">
                  <a><img id="download-hirect-qrcode" class="qr-code-img" src="~/assets/imgs/qr-frame.png" alt="" /></a>
                  <span class="spacer"></span>
                  <a class="store-button" href="https://apps.apple.com/US/app/id1518442417?mt=8" target="_blank" ><img src="~/assets/imgs/logo_apple-store.png" alt="" /></a>
                  <span
                    class="line-seperator"
                    style="height: 40px;margin-bottom: 20px; border-left: 1px solid"
                  ></span>
                  <a class="store-button" href="https://hirectin.onelink.me/TwhD/b0fe8b20" target="_blank"><img src="~/assets/imgs/logo-google-playstore.png" alt=""/></a>
        </div>
        <div class="close" @click="$emit('close-modal')">
            <font-awesome-icon :icon="['fas', 'times']" />
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            isPhoneNumberError: false,
            getUserInf: {
                phoneNumber: "",
                phoneArea: "+91"
            }
        };
    }
};
</script>

<style lang="scss" scoped>
.download-modal.modal-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    background: #00000080;
    z-index: 999;
}

.app-scan-button {
   display: grid;
   grid-auto-flow: column;
   margin-bottom: 50px;
   align-items: end;
   grid-template-columns: 150px 30px 50px 20px 50px;
   justify-items: center;
   justify-content: center;
}

.qr-code-img{
    padding: 10px;
    box-shadow:  0px 23px 47px 0px rgba(0, 0, 0, 0.12);
}

.store-button{
    margin-bottom: 20px;
}

.download-modal .modal {
    width: 95%;
    height: auto;
    border-radius: 15px;
    background-color: #ffffff;
    margin: auto;
    padding: 70px 50px;
    position: relative;
    max-width: 700px;
}

.close {
    position: absolute;
    z-index: 9;
    top: 10px;
    right: 10px;
    padding: 6px 15px;
    color: #000;
    font-size: 18px;
    font-weight: bold;
    line-height: normal;
    background: #f4f6f9;
    border-radius: 7px;
    cursor: pointer;
}

.down-lo {
    font-size: 15px;
    font-weight: 700;
}

.download-form-field {
    display: flex;
    align-items: center;
    justify-content: center;
}

.download-form-field button.btn {
    margin-left: 15px;
    width: 182px;
    border-radius: 26px;
}

.download-modal p {
    padding: 45px 0;
    font-weight: 700;
    line-height: 24px;
    text-align: center;
}

.download-modal ul.app-scan-button {
    padding: 40px 0;
    margin: 0;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
}

.download-modal ul.app-scan-button li {
    margin-right: 75px;
}

.download-modal ul.app-scan-button li:last-child {
    margin-right: 0;
}

@media only screen and (min-width: 768px) and (max-width: 1400px) {
    .download-modal .modal {
        padding: 60px 50px 40px;
        max-width: 750px;
    }

    .download-modal p {
        padding: 35px 0;
    }

    .download-modal ul.app-scan-button {
        padding: 35px 0;
    }
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
    .download-modal p {
        padding: 30px 0;
    }

    .download-modal ul.app-scan-button {
        padding: 30px 0;
    }

    .download-modal .modal {
        padding: 55px 35px 35px;
        max-width: 600px;
    }
}

@media only screen and (min-width: 300px) and (max-width: 767px) {
    .download-modal .modal {
        padding: 60px 15px 40px;
    }

    .download-modal p {
        padding: 25px 0;
        font-size: 17px;
        line-height: 23px;
    }

    .download-modal ul.app-scan-button li {
        margin-right: 15px;
    }

    .download-modal ul.app-scan-button {
        padding: 25px 0 10px;
    }

    .download-form-field {
        flex-direction: column;
    }

    .download-form-field .input-container {
        margin-bottom: 10px;
    }

    .close {
        top: 5px;
        right: 5px;
    }

    .download-form-field button.btn {
        width: 180px;
    }
}
</style>
