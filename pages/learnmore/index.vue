<template>
  <div class="wrapper-india">
    <h3>Terms & Conditions</h3>
    <ul class="content-style">
        <li class="li-style"><span class="star">*</span> <span>All prices include GST. Invoice will be sent for the
            purpose of reimbusement if requested.</span></li>
        <li class="li-style"><span class="star">*</span> <span>A relationship manager will be assigned to
            premium members to help hire fast. reimbursement as requested.</span></li>
        <li class="li-style"><span class="star">*</span> <span>Need any help? <span @click="showEmail" style="color: #00CCB4;text-decoration: underline;cursor: pointer">Contact us</span> </span></li>
        <li class="li-style"><span class="star">*</span> <span>Refund and Cancellation Policy</span></li>
    </ul>
    <div style="padding-bottom: 16px">
      <p class="content-p1">About Hirect Chat Payment Terms</p>
      <p class="content-p1">Chat Payment Terms</p>
      <p class="content-p1">Products and pricing</p>
    </div>
    <p class="content-p2">We allow recruiters to initiate a limited number of unsolicited chats with candidates on Hirect for free. We will charge the recruiter when the number of unsolicited chats with candidates exceeds the daily free limit.</p>
    <ul class="content-style">
      <li class="li-style"><span class="star">*</span> <span>Recruiters can improve and increase the number of chats with the most relevant candidates per day by subscription.</span></li>
      <li class="li-style"><span class="star">*</span> <span>Hirect will provide different levels of chat upgrade benefits to meet the needs of other recruiters.</span></li>
      <li class="li-style"><span class="star">*</span> <span>The number of active chats, valid days, and prices for each level of upgrade rights would be based on the specific display information on the product payment page.</span></li>
      <li class="li-style"><span class="star">*</span> <span>Hirect has the right to make changes based on the service provided and the price of the charged goods. The modification will not affect the recruiters who have already purchased but will only affect the new users buying after the changed subscription model.</span></li>
    </ul>
    <p class="content-p1" style="margin-top:32px;margin-bottom:12px;">Refund and Cancellation Policy</p>
    <p class="content-style" >This subscription model is a digital offering, and Hirect will not provide a refund post completion of the payment. For <span style="color:#0E101A">&lt;Exclusive&gt;</span> jobs, there is no refund if the job is rejected or deleted. The user may not request a refund from Hirect unless the subscription service cannot be used generally due to a platform failure after due diligence. If the user's account is closed due to inappropriate behavior on Hirect's platform, no refund will be issued in such cases. If the user has any concerns/objections, they can contact Hirect's customer support team.</p>
    <div class="contact-us-box" @click="closeEmail" v-if="isShowEmail">
      <ul class="contact-us">
        <li>
          <span class="contact-name">WhatsApp:</span>
          <span>
            <p class="contact-number" style="text-align: right; color:#76787A;">+91-8446164920</p>
            <a class="contact-number" href="https://wa.me/918446164920" target="_blank">https://wa.me/918446164920</a>
          </span>
        </li>
        <li>
          <span class="contact-name">Call:</span>
          <a href="tel:+918446164920" class="contact-number" >+918446164920</a>
        </li>
        <li >
          <span class="contact-name">Email:</span>
          <a href="mailto:support@hirect.in" class="contact-number" >support@hirect.in</a>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>

export default {
  name: 'ToB',
  data() {
    return {
      isShowEmail: false,
    };
  },
  methods: {
    showEmail() {
      this.isShowEmail = true;
    },
    closeEmail() {
      this.isShowEmail = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper-india {
  padding: 16px 20px;
  h3 {
    height: 32px;
    font-size: 27px;
    font-weight: bold;
    color: #0E101A;
    line-height: 32px;
    margin-bottom: 8px;
  }
  ul {
    padding-left:0;
    li {
      list-style-type: none;
    }
    .li-style {
      display: flex;
      .star {
        font-size: 16px;
        padding-right: 8px
      }
    }
  }
  .content-style {
    font-size: 14px;
    font-weight: 300;
    color: #76787A;
    line-height: 20px;
  }

  .content-p1 {
    color: #0E101A;
    font-size: 14px;
    font-weight: 300;
  }
  .content-p2 {
    color: #76787A;
    font-size: 14px;
    margin-bottom: 16px;
    font-weight: 300
  }
  .contact-us-box {
    background: rgba(14, 16, 26, 0.25);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
  }
  .contact-us {
    position: fixed;
    z-index: 2;
    bottom: 0px;
    width: 100%;
    li {
      display: flex;
      height: 70px;
      margin: 10px 10px 0;
      width: calc(100% - 20px);
      background: rgb(252, 252, 252);
      border-radius: 15px;
      justify-content: space-between;
      padding: 0 18px;
      align-items: center;
    }
    .contact-name {
      font-size: 16px;
      font-weight: bold;
      color: #0E101A;
    }
    .contact-number {
      font-size: 13px;
      font-weight: 400;
      color: #00CCB4;
      text-decoration: none;
    }
  }
}
</style>
