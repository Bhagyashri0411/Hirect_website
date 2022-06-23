<template>
  <div class="wrapper">
    <div id="back-top-target" />
    <Header @smoothToTop="smoothToTop" :current-page-name="currentPageName" />
    <div class="height-container" />
    <div class="container privacy-policy-page">
      <p class="head-title">Products and Pricing</p>
      <p class="policy-item-desc">
        We allow recruiters to initiate a limited number of unsolicited chats
        with candidates on Hirect for free. We will charge the recruiter when
        the number of unsolicited chats with candidates exceeds the daily free
        limit.
      </p>
      <ul style="text-align: justify">
        <li>
          Recruiters can improve and increase the number of chats with the most
          relevant candidates per day by subscription.
        </li>
        <li>
          Hirect will provide different levels of chat upgrade benefits to meet
          the needs of other recruiters.
        </li>
        <li>
          The number of active chats, valid days, and prices for each level of
          upgrade rights would be based on the specific display information on
          the product payment page.
        </li>
        <li>
          Hirect has the right to make changes based on the service provided and
          the price of the charged goods. The modification will not affect the
          recruiters who have already purchased but will only affect the new
          users buying after the changed subscription model.
        </li>
      </ul>
      <p class="head-title">Refund and Cancellation Policy</p>
      <p class="policy-item-desc">
        This subscription model is a digital offering, and Hirect will not
        provide a refund post completion of the payment. The user may not
        request a refund from Hirect unless the subscription service cannot be
        used generally due to a platform failure after due diligence. If the
        applicant's account is closed due to inappropriate behavior on Hirect's
        platform, no refund will be issued in such cases. If the user has any
        concerns/objections, they can contact Hirect's customer support team.
      </p>

      <p class="head-title">Payment Terms and Conditions:</p>
      <p class="policy-item-desc">
        'Hirect' may offer products and services for purchase on the App
        (“In-App Purchase”). By making an in-app purchase, the subscriber agrees
        to the payment terms that may apply, which are disclosed at the point of
        purchase, and as such, the payment terms are incorporated herein by
        reference.
      </p>
      <p class="policy-item-desc">
        In-App Purchases can be made by the following methods ("Payment
        Method"): (a) making a purchase through a third-party platform such as
        the Apple App Store or Google Play Store ("Third Party Store"). As soon
        as someone makes an In-App Purchase, they authorize Hirect to charge
        their chosen Payment Method. If Hirect cannot receive payment through
        the selected Payment Method, the customer agrees to pay all sums due
        upon demand by Hirect.
      </p>
      <p class="policy-item-desc">
        The subscription is not canceled when an account is deleted, or an
        application is deleted from a device. The subscriber will be notified of
        any changes to the pricing of the Premium Services to which they have
        subscribed and given the opportunity to cancel. If Hirect changes these
        prices and the customer does not cancel their subscription, they will be
        charged at Hirect's then-current subscription pricing.
      </p>

      <p class="head-title">Canceling Subscriptions</p>
      <p class="policy-item-desc">
        If someone has purchased a subscription through a Third Party Store,
        such as the Apple App Store or the Google Play Store, they will need to
        access their account with that Third Party Store and follow instructions
        to change or cancel their subscription. If a subscriber cancels their
        subscription, they may continue to use the paid services until the end
        of the period they last paid for, but (i) the subscriber will not
        (except as outlined in the subsection entitled “Refunds” below) be
        eligible for a prorated refund, (iii) they will then no longer be able
        to use the Premium Services or In-App Purchases enabled by their
        subscription.
      </p>

      <p class="policy-item-desc">
        <b
          >Generally, all charges for purchases are non-refundable, and there
          are no refunds or credits for partially used periods.</b
        >
      </p>

      <p class="policy-item-desc">
        The subscriber may cancel their subscription without penalty or
        obligation. Their estate shall be entitled to a refund of the amount for
        any payment subscribe had made allocated to the period post-death if
        they die before the end of their subscription period. Suppose one
        becomes disabled (so that they cannot use Hirect) before the end of
        their subscription period. In that case, they are entitled to a refund
        of that portion of their subscription payment transferable to the period
        after their disability by providing the company notice; in the same
        manner, they request a refund.
      </p>
      <p class="policy-item-desc">
        Suppose a subscriber exercises their right of cancellation (except for
        purchases made through Apple ID, which Apple controls). In that case,
        Hirect will refund (or ask Google to refund) all payments received from
        the subscriber without undue delay and, in any case, within 14 days of
        the date when Hirect received notification of the subscriber's decision
        to cancel the Agreement. Hirect shall make such a refund using the same
        means of payment as used by the subscriber in the initial transaction.
        In any case, no fees will be charged to the subscriber due to the
        refund.
      </p>
      <p class="policy-item-desc">
        The subscriber who purchased through a payment platform other than those
        listed above should request a refund directly from the third-party
        merchant through which they made the purchase.
      </p>
      <p class="policy-item-desc">
        A subscriber cannot cancel an order for digital content not delivered on
        a physical medium if they have given their explicit prior consent and
        have acknowledged that they will lose their cancellation rights.
      </p>

      <p class="head-title">To request a refund</p>
      <p class="policy-item-desc">
        If the subscriber wishes to receive a refund, they must cancel the
        subscription and request a refund. If they subscribed using their Apple
        ID, refunds are handled by Apple, not Hirect. Go to iTunes, click on
        your Apple ID, select “Purchase history,” find the transaction, and hit
        “Report Problem” to request a refund. The subscriber can also submit a
        request at
        <a
          href="https://getsupport.apple.com"
          target="_blank"
          style="color: #00e194"
          >https://getsupport.apple.com</a
        >.
      </p>
      <p class="policy-item-desc">
        For all other purchases, Hirect will refund (or ask Google to refund)
        all payments received from the subscriber within 21 days of the date
        Hirect received notice of the subscriber's decision to cancel the
        Agreement. Hirect will refund the subscriber's payment using the same
        method as the original transaction. The subscriber will not be charged
        any fees for the refund.
      </p>
      <p class="policy-item-desc">
        If the subscriber made a purchase using a payment platform not listed
        above, they should request a refund directly from the third-party
        merchant through which they made the purchase.
      </p>
      <p class="policy-item-desc">
        A subscriber may not cancel an order for delivery of digital content
        that is not delivered on a physical medium so long as order processing
        has begun with their prior consent and acknowledgement that they may
        lose their cancellation rights.
      </p>

      <p class="head-title">Taxes</p>
      <p class="policy-item-desc">
        All prices include taxes for payments collected via In-App payments for
        the product or service. If Hirect determines that it is legally obliged
        to collect a Sales Tax or GST from the subscriber, the Sales Tax or GST
        will be collected in addition to the required payments.
      </p>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  name: "refund",
  components: {},
  head() {
    return {
      title: "Refund & Cancellation Policy - Hirect",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Hirect, the hiring app, has been serving lakhs of active and satisfied users. Know from here the Refund and Cancellation Policy of Hirect App.",
        },
      ],
    };
  },
  data() {
    return {
      currentPageName: "",
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
      document.getElementById("back-top-target").scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
    },
  },

  jsonld() {
    return {
      "@context": "https://schema.org/",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Refund & Cancellation Policy",
          item: "https://www.hirect.in/refund-cancellation-policy/",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.privacy-policy-page {
  padding: 50px 100px;
  margin: 0 auto;

  .privacy-policy-common-header {
    position: fixed;
    top: 0px;
    z-index: 999;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
}

.height-container {
  height: 50px;
}

.head-title {
  font-size: 32px;
  font-weight: 800;
  color: #0e101a;
  margin-bottom: 12px;
  line-height: 40px;
}

.head-title-desc {
  font-size: 20px;
  font-weight: 400;
  color: #333333;
  text-align: justify;
  margin: 5px 0;
}

.policy-item-title {
  font-size: 22px;
  font-weight: bold;
  color: #0e101a;
  margin: 20px 0 5px;
}

.policy-item-desc-A {
  font-size: 20px;
  font-weight: bold;
  color: #0e101a;
}

.policy-item-desc {
  font-size: 20px;
  font-weight: 400;
  color: #333333;
  margin: 15px 0;
  text-align: justify;
}

p {
  line-height: 140%;
}

// Responsive css
@media only screen and (min-width: 300px) and (max-width: 767px) {
  .privacy-policy-page {
    padding: 50px 30px;
    margin: 0 auto;
  }

  .height-container {
    height: 10px;
  }

  .terms-table .table tr td h4 {
    font-size: 15px;
  }

  .terms-table .table tr td h3 {
    font-size: 15px;
  }

  .terms-table {
    border-left: 1px solid;
    border-right: 1px solid;
  }
}
</style>
