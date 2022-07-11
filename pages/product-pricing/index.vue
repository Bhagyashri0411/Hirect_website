<template>
  <div class="wrapper">
    <div id="back-top-target" />
    <Header @smoothToTop="smoothToTop" :current-page-name="currentPageName" />
    <div class="height-container" />
    <div class="container privacy-policy-page">
      <p class="head-title">Products and Pricing</p>
      <p class="policy-item-desc">
        Hirect is trusted by 2.3M+ verified job seekers and 150K+ verified
        startups. Hirect is free of cost for job seekers. The Hirect App runs on
        a FREEMIUM model for recruiters so that they can use all its features
        without limitations. However, Hirect will charge a nominal fee to the
        recruiters for initiating chats with more Job Seekers than provided in
        the FREEMIUM plan.
      </p>
      <p class="policy-item-desc">
        Recruiters who have signed up and been onboarded with Hirect are
        entitled to a 3-day complimentary trial for 30 chat initiations per day,
        after which they will be upgraded to the FREEMIUM plan of 5 free chats a
        day.
      </p>
      <p class="policy-item-desc">
        To chat and connect with more candidates on the platform, recruiters can
        choose one of the below plans. Hirect will operate on a subscription
        basis so that the payments will have to be made as per the selected plan
        every month.
      </p>
      <div class="terms-table">
        <table class="table table-bordered">
          <thead class="thead-dark">
            <tr>
              <th scope="col"></th>
              <th scope="col">
                <h3>Freemium</h3>
              </th>
              <th scope="col">
                <h3>Basic</h3>
              </th>
              <th scope="col">
                <h3>Standard</h3>
              </th>
              <th scope="col">
                <h3>Premium</h3>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <h3>No. Chats per day</h3>
              </th>
              <td>
                <h4>5</h4>
              </td>
              <td>
                <h4>15</h4>
              </td>
              <td>
                <h4>30</h4>
              </td>
              <td>
                <h4>100</h4>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <h3>Cost per month</h3>
              </th>
              <td>
                <h3>₹0.00</h3>
              </td>
              <td>
                <h3>₹1399.00</h3>
              </td>
              <td>
                <h3>₹2199.00</h3>
              </td>
              <td>
                <h3>₹4499.00</h3>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <h3>Cost per chat</h3>
              </th>
              <td>
                <h3>₹0.00</h3>
              </td>
              <td>
                <h3>₹3.10</h3>
              </td>
              <td>
                <h3>₹2.44</h3>
              </td>
              <td>
                <h3>₹1.50</h3>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="table-notes">
        *All the prices mentioned above are inclusive of taxes
      </p>
      <p class="policy-item-desc">
        If the recruiter has any custom requirement or if they would like to
        initiate more than 100 Chats/day please write to:
        <a href="mailto:sales@hirect.in" style="color: #00e194">sales@hirect.in</a>
      </p>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'product',
  components: {},
  head() {
    return {
      title: 'Product & Pricing for Recruiters - Hirect',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Learn from here the product and pricing plans about the hirect app and website for its users, i.e. the recruiters and jobseekers. ',
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
      '@context': 'https://schema.org/',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Products and Pricing',
          item: 'https://www.hirect.in/product-pricing/',
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
  // line-height: 30px;
  margin: 12px 0;
  text-align: justify;
}

p {
  line-height: 140%;
}

.terms-table {
  margin: 30px auto 0;
  overflow-x: auto;
}

.terms-table .table thead tr th {
  background: #e3e3e3;
  color: #808080;
}

.terms-table .table tr th {
  color: #808080;
}

.terms-table .table tr th h3 {
  font-size: 20px;
  text-align: center;
  font-weight: bold;
}

.terms-table .table tr td h4 {
  color: grey;
  font-size: 20px;
  text-align: center;
}

.terms-table .table tr td h3 {
  color: grey;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
}

.terms-table table.table.table-bordered {
  border-color: #000;
  margin-bottom: 8px;
}

p.table-notes {
  line-height: normal;
  font-size: 18px;
  color: #808080;
  text-align: right;
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
