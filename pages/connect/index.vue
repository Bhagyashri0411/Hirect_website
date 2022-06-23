<template>
  <div class="wrapper">
    <Header />
    <section class="recruiter-section">
      <div class="recruiter-banner">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="px-0.5 py-0.5">
                <div class="recruiter-banner-details">
                  <h3 class="title-md">
                    Want to Hire Instantly?
                    <!-- <br />Chat Directly and Hire Now! -->
                  </h3>
                  <p>
                    Hirect enables Founders/CXOs/Hiring Managers/Business Owners
                    to chat directly with relevant, AI-filtered candidates,
                    without consultants, and with 100% data privacy!
                  </p>
                  <div class="recruiter-banner-img">
                    <img src="~/assets/img/recruiter-banner.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="px-0.5 py-0.5">
                <div class="Schedule-call">
                  <ConnectForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!----startup start----------->
    <section class="recruiter-startup-section startup-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="startup-section-heading">
              <h3 class="title-md">
                Direct and Instant Hiring. Join the list of leading companies.
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div class="startups-logo">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="jobs-list">
                <ul class="startups-logo-list">
                  <li><img src="~/assets/img/lenskart-logo.png" alt="" /></li>
                  <li><img src="~/assets/img/byju-logo.png" alt="" /></li>
                  <li><img src="~/assets/img/ajio-logo.png" alt="" /></li>
                  <li>
                    <img src="~/assets/img/square-yard-logo.png" alt="" />
                  </li>
                  <li><img src="~/assets/img/flipkart-logo.png" alt="" /></li>
                  <li><img src="~/assets/img/udaan-logo.png" alt="" /></li>
                  <li><img src="~/assets/img/amazon-logo.png" alt="" /></li>
                  <li><img src="~/assets/img/upgrad-logo.png" alt="" /></li>
                  <li><img src="~/assets/img/freecharge-logo.png" alt="" /></li>
                  <li><img src="~/assets/img/walmart-logo.png" alt="" /></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!----startup end----------->

    <!--======= Login Recruiter Popup =======-->
    <!-- <el-dialog
      :visible.sync="RecruiterLoginDialogVisible"
      class="recruiter-dialog"
    >
      <section class="recruiter-login-popup">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h3 class="title-md">
                Are you a recruiter? Log in <br />to Hire people.
              </h3>
              <div class="recruiter-form">
                <form>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Email / Number"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Password"
                    />
                    <button type="button" class="btn eye-button">
                      <font-awesome-icon :icon="['fas', 'eye']" />
                    </button>
                  </div>
                  <div class="form-pageLink">
                    <NuxtLink class="forget-password" to=""
                      >Forgot password</NuxtLink
                    >
                  </div>
                  <button
                    type="submit"
                    class="btn default-btn button-sm login-btn"
                  >
                    Log in
                  </button>
                </form>
                <div class="recruiter-social-login">
                  <p>Or</p>
                  <h5>Sign in with Google</h5>
                  <ul>
                    <li>
                      <NuxtLink class="forget-password" to=""
                        ><img src="~/assets/img/google-icon.svg" alt=""
                      /></NuxtLink>
                    </li>
                    <li>
                      <NuxtLink class="forget-password" to=""
                        ><img src="~/assets/img/linkedin-icon.svg" alt=""
                      /></NuxtLink>
                    </li>
                    <li>
                      <NuxtLink class="forget-password" to=""
                        ><img src="~/assets/img/facebook-icon.svg" alt=""
                      /></NuxtLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="recruiter-form-img">
                <img src="~/assets/img/recruiter-login.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </el-dialog> -->

    <!--=======  end Login Recruiter Popup =======-->
    <GetAppPage :eventName="'in_recruiters_bottom'" />
    <Footer />
  </div>
</template>

<script>
export default {
  components: {},
  head() {
    return {
      title: "Free Job Posting for Employers | Best Recruitment App - Hirect",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Free Job Portal connects highly matching jobseekers. Chat directly in-app and get the best candidates. Download Hirect to post a job for free online. ",
        },
      ],
    };
  },
  data() {
    return {
      //RecruiterLoginDialogVisible: false,
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
        userPosition: "",
      },
    };
  },

  // methods: {
  //   videoPlayClick() {
  //     this.RecruiterLoginDialogVisible = true;
  //   }
  // }
  jsonld() {
    return {
      "@context": "https://schema.org/",
      "@type": "JobPosting",
      title: "Job Posting for Employers",
      description:
        "Free Job Portal connects highly matching jobseekers. Chat directly in-app and get the best candidates. Download Hirect to post a job for free online.",
      hiringOrganization: {
        "@type": "Organization",
        name: "Hirect",
        sameAs: "https://www.hirect.in/",
        logo: "https://www.hirect.in/_nuxt/img/hirect-logo.130906c.png",
      },
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: "1",
          name: "Features",
          item: "https://www.hirect.in/connect",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.recruiter-banner {
  padding: 100px 0;
}

.recruiter-banner-img {
  text-align: center;
  padding-top: 45px;
}

// startups-logo
.startups-logo {
  background-color: rgba(109, 141, 173, 0.1);
  padding-top: 30px;
}

.startups-logo-list {
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
}

.startups-logo-list li {
  width: 12%;
  margin-bottom: 45px;
}

.startup-section-heading {
  width: 100%;
  max-width: 645px;
  margin: auto;
  text-align: center;
  padding-bottom: 20px;
  padding-top: 35px;
}

.recruiter-startup-section .startups-logo {
  padding-top: 60px;
}

.recruiter-form-section {
  padding: 135px 0 170px;
}

.recruiter-form {
  width: 100%;
  max-width: 410px;
}

.recruiter-form .form-control {
  height: 48px;
  border-radius: 24px;
  background-color: #f7f7f7;
  position: relative;
  color: #0e101a;
  font-size: 16px;
  font-weight: normal;
  line-height: 10px;
  text-align: left;
  padding: 5px 30px;
}

.recruiter-form .form-group {
  margin-bottom: 20px;
  position: relative;
}

.recruiter-form .form-control::-webkit-input-placeholder,
.recruiter-form-call .form-group input::-webkit-input-placeholder,
.recruiter-form-call .input-group input::-webkit-input-placeholder {
  /* Edge */
  color: #b4b4b4;
}

.recruiter-form .form-control:-ms-input-placeholder,
.recruiter-form-call .form-group input:-ms-input-placeholder,
.recruiter-form-call .input-group input:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #b4b4b4;
}

.recruiter-form .form-control::placeholder,
.recruiter-form-call .form-group input::placeholder,
.recruiter-form-call .input-group input::placeholder {
  color: #b4b4b4;
}

button.btn.eye-button {
  position: absolute;
  top: 0;
  height: 100%;
  padding: 5px 10px;
  right: 20px;
  color: #b4b4b4;
}

.form-pageLink .forget-password {
  color: #b4b4b4;
  font-family: Helvetica;
  font-size: 14px;
  font-weight: 400;
  line-height: 10px;
  text-decoration: underline;
}

.form-pageLink {
  text-align: right;
  padding: 0 20px;
}

.recruiter-form-section .btn.default-btn {
  color: #000;
}

.recruiter-social-login p {
  padding: 24px 0;
  color: #76787a;
  font-size: 14px;
  font-weight: normal;
  line-height: 10px;
}

.recruiter-social-login {
  text-align: center;
}

.recruiter-social-login h5 {
  color: #000000;
  font-size: 16px;
  font-weight: normal;
  line-height: normal;
  text-align: center;
  margin-bottom: 20px;
}

.recruiter-social-login ul {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
}

.recruiter-social-login ul li {
  margin-right: 35px;
}

.recruiter-social-login ul li:last-child {
  margin-right: 0;
}

.recruiter-form-now {
  padding-top: 30px;
  padding-bottom: 100px;
}

.recruiter-form-call p {
  color: #333333;
  font-family: Helvetica;
  font-size: 18px;
  font-weight: 400;
  font-style: normal;
  letter-spacing: normal;
  line-height: 24px;
  margin-bottom: 30px;
}

.recruiter-form-call h3.title-md {
  margin-bottom: 15px;
}

.recruiter-form-call .form-group input {
  height: 48px;
  border-radius: 24px;
  background-color: #f7f7f7;
  color: #0e101a;
  font-family: Helvetica;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  letter-spacing: normal;
  line-height: 24px;
  margin-bottom: 22px;
  border-color: #f7f7f7;
  padding-left: 25px;
}

.recruiter-form-call .input-group {
  margin-bottom: 22px;
}

.recruiter-form-call .input-group input {
  height: 48px;
  border-radius: 24px;
  background-color: #f7f7f7;
  color: #0e101a;
  font-family: Helvetica;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  letter-spacing: normal;
  line-height: 24px;
  border-color: #f7f7f7;
}

.recruiter-form-call .input-group .input-group-text {
  height: 48px;
  background-color: #e0e0e0;
  border-radius: 24px 0px 0px 24px;
  width: 70px;
  justify-content: center;
  color: #76787a;
  font-family: Helvetica;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  letter-spacing: normal;
  line-height: 24px;
  border-color: #e0e0e0;
}

.check-dropdown {
  width: 100%;
}

.check-dropdown button {
  text-align: left;
  height: 48px;
  border-radius: 24px;
  background-color: #f7f7f7 !important;
  color: #b4b4b4 !important;
  font-family: Helvetica;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  letter-spacing: normal;
  line-height: 24px;
  border-color: #f7f7f7 !important;
  padding-left: 25px;
  outline: none !important;
  box-shadow: unset !important;
}

.check-dropdown .dropdown-toggle::after {
  position: absolute;
  right: 43px;
  top: 20px;
}

.dropdown-menu.dropdown-menu-end.show {
  background-color: #f7f7f7;
  border-color: #f7f7f7;
  padding-left: 15px;
}

.dropdown-menu.dropdown-menu-end.show button {
  color: #76787a !important;
  font-family: Helvetica;
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  letter-spacing: normal;
  text-align: left;
  background-color: transparent !important;
  border: 0;
  padding: 0;
  height: auto;
  line-height: 26px;
}

.form-check.check-box {
  margin-top: 30px;
  margin-bottom: 30px;
}

.form-check.check-box label.form-check-label {
  color: #76787a;
  font-family: Helvetica;
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  letter-spacing: normal;
  line-height: 24px;
}

.form-check-input {
  border: 1px solid #2ce2a2;
}

.Submit-button button.btn.default-btn.button-sm {
  width: 100%;
}

.recruiter-form-call h4 {
  color: #000000;
  font-family: Helvetica;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  letter-spacing: normal;
  line-height: normal;
  margin-top: 15px;
  text-align: center;
}

.recruiter-form-call h4 a {
  color: #2ce2a2;
  padding-left: 15px;
  text-decoration: none;
}

.recruiter-form-now .row {
  align-items: center;
}

.recruiter-form-img {
  text-align: center;
}

.startups-logo-list li img {
  filter: grayscale(100%);
}

.form-check-input:checked {
  background-color: #000000;
  border-color: #000000;
}

.recruiter-banner-details {
  width: 100%;
  max-width: 540px;
  padding-top: 35px;
}

.recruiter-banner-details p {
  font-size: 20px;
  line-height: 32px;
  font-weight: 400;
  color: #808080;
}

.recruiter-form-call {
  width: 100%;
  max-width: 386px;
}

.el-select-dropdown.el-popper {
  width: 158px !important;
  min-width: auto !important;
  background: #f7f7f7 !important;
  margin-left: 300px !important;
  padding-bottom: 15px !important;
}

.Schedule-call {
  background: #ffffff;
  box-shadow: 6px 6px 30px #6d8dad26;
  border-radius: 12px;
  padding: 25px 50px 40px;
  max-width: 526px;
  margin-left: auto;
}

// end startups-logo

@media only screen and (max-width: 768px) {
  .row {
    flex-direction: column-reverse;
  }
  .recruiter-banner {
    padding: 80px 0;
  }

  .recruiter-form-section {
    padding: 90px 0 110px;
  }

  .startup-section-heading {
    padding-top: 20px;
  }

  .recruiter-form-call p {
    margin-bottom: 25px;
  }

  .recruiter-form-now {
    padding-bottom: 70px;
  }

  .el-select-dropdown.el-popper {
    margin-left: 260px !important;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1199px) {
  .el-select-dropdown.el-popper {
    margin-left: 235px !important;
    padding-bottom: 7px !important;
  }
  .recruiter-banner-details p {
    font-size: 17px;
    line-height: 29px;
  }

  .Schedule-call {
    padding: 20px 40px 30px;
  }
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
  .recruiter-form-section {
    padding: 80px 0 90px;
  }

  .recruiter-form .form-control {
    font-size: 16px;
    padding: 5px 20px;
  }

  button.btn.eye-button {
    right: 6px;
  }

  .recruiter-form-call p {
    margin-bottom: 30px;
    line-height: normal;
  }

  .recruiter-form-call p {
    font-size: 16px;
  }

  .recruiter-form-now {
    padding-bottom: 60px;
  }

  .recruiter-form-call .input-group .input-group-text {
    width: 60px;
  }

  .form-check.check-box label.form-check-label {
    font-size: 13px;
  }

  .form-check.check-box {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .recruiter-form-call .form-group input {
    margin-bottom: 15px;
  }

  .recruiter-form-call .input-group {
    margin-bottom: 15px;
  }

  .el-select-dropdown.el-popper {
    margin-left: 200px !important;
    padding-bottom: 5px !important;
  }
  .Schedule-call {
    padding: 20px 20px 30px;
  }
}

@media only screen and (min-width: 300px) and (max-width: 767px) {
  .startups-logo-list li {
    width: 48%;
    margin-right: 2%;
    text-align: center;
    margin-bottom: 20px;
  }

  .startups-logo-list li:nth-child(2n) {
    margin-right: 0;
  }

  .startups-logo-list {
    margin-bottom: 30px;
  }

  .recruiter-startup-section .startups-logo {
    padding-top: 50px;
  }

  .recruiter-banner h1 {
    margin-bottom: 0;
    text-align: center;
    margin-top: 30px;
  }

  .recruiter-banner h1 br {
    display: none;
  }

  .recruiter-banner {
    padding: 60px 0;
  }

  .startup-section-heading {
    padding-top: 0;
    padding-bottom: 10px;
  }

  .recruiter-form-section {
    padding: 60px 0 80px;
  }

  .recruiter-form-img {
    margin-top: 30px;
  }

  .check-dropdown .dropdown-toggle::after {
    right: 20px;
  }

  .recruiter-form-call p {
    margin-bottom: 30px;
    font-size: 16px;
  }

  .form-check.check-box label.form-check-label {
    font-size: 13px;
  }

  .form-check.check-box {
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: left;
  }

  .recruiter-form-now {
    padding-bottom: 50px;
  }

  .recruiter-banner-details {
    padding: 0;
    padding-bottom: 50px;
    text-align: center;
    margin: auto;
    padding-top: 40px;
  }

  .recruiter-form-call {
    margin: auto;
    text-align: center;
  }

  .el-select-dropdown.el-popper {
    margin-left: unset !important;
  }
  .Schedule-call {
    padding: 20px 15px 30px;
    margin-top: 20px;
  }
  .recruiter-banner-details p {
    font-size: 16px;
    line-height: 24px;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1299px) {
  .row {
    flex-direction: row;
  }

  .recruiter-banner {
    padding: 80px 0;
  }

  .recruiter-form-section {
    padding: 90px 0 110px;
  }

  .startup-section-heading {
    padding-top: 20px;
  }

  .recruiter-form-call p {
    margin-bottom: 25px;
  }

  .recruiter-form-now {
    padding-bottom: 70px;
  }

  .el-select-dropdown.el-popper {
    margin-left: 260px !important;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1199px) {
  .row {
    flex-direction: row;
  }

  .recruiter-form-call p {
    margin-bottom: 30px;
    line-height: normal;
  }

  .recruiter-form-call p {
    font-size: 16px;
  }

  .recruiter-form-now {
    padding-bottom: 60px;
  }

  .recruiter-form-call .input-group .input-group-text {
    width: 100%;
  }

  .form-check.check-box label.form-check-label {
    font-size: 13px;
  }

  .form-check.check-box {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .recruiter-form-call .form-group input {
    margin-bottom: 15px;
  }

  .recruiter-form-call .input-group {
    margin-bottom: 15px;
  }

  .el-select-dropdown.el-popper {
    margin-left: 200px !important;
    padding-bottom: 5px !important;
  }

  .Schedule-call {
    padding: 20px 20px 30px;
  }
}

@media only screen and (min-width: 1200px) {
  .row {
    flex-direction: row;
  }

  .recruiter-form-call p {
    margin-bottom: 30px;
    line-height: normal;
  }

  .recruiter-form-call p {
    font-size: 16px;
  }

  .recruiter-form-now {
    padding-bottom: 60px;
  }

  .recruiter-form-call .input-group .input-group-text {
    width: 100%;
  }

  .form-check.check-box label.form-check-label {
    font-size: 13px;
  }

  .form-check.check-box {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .recruiter-form-call .form-group input {
    margin-bottom: 15px;
  }

  .recruiter-form-call .input-group {
    margin-bottom: 15px;
  }

  .el-select-dropdown.el-popper {
    margin-left: 200px !important;
    padding-bottom: 5px !important;
  }

  .Schedule-call {
    padding: 20px 20px 30px;
  }
}

// @media only screen and (max-width: 480px) {
//     .startups-logo-list li {
//         width: 48%;
//         margin-right: 2%;
//         text-align: center;
//         margin-bottom: 20px;
//     }

//     .startups-logo-list li:nth-child(2n) {
//         margin-right: 0;
//     }

//     .startups-logo-list {
//         margin-bottom: 30px;
//     }

//     .recruiter-startup-section .startups-logo {
//         padding-top: 50px;
//     }

//     .recruiter-banner h1 {
//         margin-bottom: 0;
//         text-align: center;
//         margin-top: 30px;
//     }

//     .recruiter-banner h1 br {
//         display: none;
//     }

//     .recruiter-banner {
//         padding: 60px 0;
//     }

//     .startup-section-heading {
//         padding-top: 0;
//         padding-bottom: 10px;
//     }

//     .recruiter-form-section {
//         padding: 60px 0 80px;
//     }

//     .recruiter-form-img {
//         margin-top: 30px;
//     }

//     .check-dropdown .dropdown-toggle::after {
//         right: 20px;
//     }

//     .recruiter-form-call p {
//         margin-bottom: 30px;
//         font-size: 16px;
//     }

//     .form-check.check-box label.form-check-label {
//         font-size: 13px;
//     }

//     .form-check.check-box {
//         margin-top: 20px;
//         margin-bottom: 20px;
//         text-align: left;
//     }

//     .recruiter-form-now {
//         padding-bottom: 50px;
//     }

//     .recruiter-banner-details {
//         padding: 0;
//         padding-bottom: 50px;
//         text-align: center;
//         margin: auto;
//     }

//     .recruiter-form-call {
//         margin: auto;
//         text-align: center;
//     }

//     .el-select-dropdown.el-popper {
//         margin-left: unset !important;
//     }
//     .Schedule-call {
//         padding: 20px 15px 30px;
//         margin-top: 20px;
//     }
//     .recruiter-banner-details p {
//         font-size: 16px;
//         line-height: 24px;
//     }
// }
</style>
