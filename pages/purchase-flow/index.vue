<template>
  <div class="wrapper">
    <div id="back-top-target" />
    <Header @smoothToTop="smoothToTop" :current-page-name="currentPageName" />
    <div style="height: 80px" />
    <div class="purchase-flow-page">
      <h1 class="head-title">Purchase Flow</h1>
      <p class="purchase-flow-desc">
        Job seekers are absolutely free of any charges. However, recruiters need
        to Pay Rs. 199 for posting a job in the following functional areas in
        Bangalore. It's absolutely free of charges for other cities (except
        Bangalore) and functional areas.
      </p>
      <p class="purchase-flow-desc">1. Backend Development</p>
      <p class="purchase-flow-desc">2. Front-End Development</p>
      <p class="purchase-flow-desc">3. Mobile Development</p>
      <p class="purchase-flow-desc">4. Marketing</p>
      <p class="purchase-flow-desc">5. Sales Manager</p>
      <br />
      <p class="purchase-flow-desc">
        <b>Benefits:</b> Your posted job will reach all candidates of the given
        functional areas, Job will be visible to candidates until you close it
        by yourself, Unlimited chats with candidates, and many more.
      </p>
      <p class="purchase-flow-desc"><b>Purchase Flow:</b></p>
      <p class="purchase-flow-desc">
        Case 1: Posting a job for above mentioned functional area in Bangalore.
      </p>
      <p class="purchase-flow-desc">1) Fill in Job Description</p>
      <p class="purchase-flow-desc">2) Click to Post Job</p>
      <p class="purchase-flow-desc">3) Continue to Pay</p>
      <p class="purchase-flow-desc">
        4) Pay through UPI, Wallet, Credit Card, Debit Card, Internet Banking
      </p>
      <p class="purchase-flow-desc">5) Payment Successful</p>
      <p class="purchase-flow-desc">6) Job Visible to Job Seekers</p>
      <br />
      <p class="purchase-flow-desc">
        <b>Note:</b> If payment fails or doesn't complete for any reasons, users
        will be navigated back to the previous screen to enable completing the
        payment.
      </p>
      <br />
      <p class="purchase-flow-desc">
        Case 2: Posting a job in a different city or functional area.
      </p>
      <p class="purchase-flow-desc">
        In this case, you are free of any charges. Click to post the job and it
        will be visible to job seekers instantly.
      </p>
    </div>
    <div style="height: 80px" />
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'purchase',
  components: {},
  head() {
    return {
      title: 'Purchase Flow on Hirect App and Website',
      link: [
        {
          rel: 'canonical',
          href: 'https://hirect.in/purchase-flow',
        },
      ],
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Learn the Purchase Flow on Hirect app and website. We have explained here all the steps in detail about making a purchase on Hirect app. ',
        },
      ],
    };
  },
  data() {
    return {
      currentPageName: '',
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.$localSaveSubmitUrl();
  },
  methods: {
    smoothToTop() {
      document.getElementById('back-top-target').scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      });
    },
  },

  jsonld() {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: '1',
          name: 'Purchase Flow',
          item: 'https://www.hirect.in/purchase-flow',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.purchase-flow-page {
  padding: 0 50px;
  width: 70%;
  margin: 0 auto;

  .purchase-flow-common-header {
    position: fixed;
    top: 0px;
    z-index: 999;
    left: 0;
    right: 0;
    margin: 0 auto;
  }

  .head-title {
    font-size: 40px;
    font-weight: 800;
    color: #0e101a;
    line-height: 48px;
    text-align: center;
  }

  .head-title-desc {
    font-size: 20px;
    font-weight: 400;
    color: #0e101a;
  }

  .purchase-flow-title {
    font-size: 30px;
    font-weight: bold;
    color: #0e101a;
    margin-top: 20px;
  }

  .purchase-flow-desc-A {
    font-size: 20px;
    font-weight: bold;
    color: #0e101a;
  }

  .purchase-flow-desc {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    color: #43494e;
    margin-top: 20px;
  }
}

p {
  line-height: 140%;
}

@media only screen and (min-width: 320px) and (max-width: 768px) {
  .purchase-flow-page {
    padding: 0 25px;
    margin: 0 auto;
    text-align: justify;
    width: 100%;

    .purchase-flow-common-header {
      position: fixed;
      top: 0px;
      z-index: 999;
      left: 0;
      right: 0;
      margin: 0 auto;
    }

    .head-title {
      font-size: 36px;
      font-weight: 800;
      color: #0e101a;
      line-height: 48px;
      text-align: left;
    }

    .head-title-desc {
      font-size: 20px;
      font-weight: 400;
      color: #0e101a;
    }

    .purchase-flow-title {
      font-size: 30px;
      font-weight: bold;
      color: #0e101a;
      margin-top: 20px;
    }

    .purchase-flow-desc-A {
      font-size: 20px;
      font-weight: bold;
      color: #0e101a;
    }

    .purchase-flow-desc {
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 28px;
      color: #43494e;
      margin-top: 20px;
    }
  }
}
</style>
