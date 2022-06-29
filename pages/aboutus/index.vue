<template>
  <div class="wrapper">
    <Header />
    <!----enterprise-hiring-section start----------->
    <section class="enterprise-hiring-section">
      <div class="enterprise-hiring-banner">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="px-0.5 py-0.5">
                <div class="enterprise-hiring-banner-details">
                  <h3 class="title-md">
                    Strategic Partnership with
                    <span style="color: #2ce2a2"> Hirect </span> to Build the
                    Team
                  </h3>
                  <p>
                    Enterprises struggling to hire Prominent candidates for
                    their team can reach out to Hirect for their quality mass
                    hiring needs. Our problem-solving approach is helping
                    corporates to grow their team much more robust.
                  </p>
                  <div class="enterprise-hiring-banner-img">
                    <img src="~/assets/imgs/strategic-partnership.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="px-0.5 py-0.5">
                <div class="Schedule-call">
                  <ConnectForm1 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!----end enterprise-hiring-section start----------->

    <!----enteriprise-AI-platform-section start----------->
    <section class="enteriprise-AI-platform-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="enteriprise-AI-platform-heading">
              <h3 class="title-md">Our AI Platform leads us to be!</h3>
            </div>
            <MultiStepSegment :stepData="stepFeedData" />
          </div>
        </div>
        <div class="row"></div>
        <NuxtLink class="btn default-btn button-hire-now-seamless" to="/connect"
          >Hire Now</NuxtLink
        >
      </div>
    </section>
    <!----enteriprise-AI-platform-section end----------->

    <!----enteriprise-Offerings-section start----------->
    <section class="enteriprise-Offerings-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h3 class="title-sm">Offerings</h3>
            <div class="following-companies-jobs-list">
              <ul class="available-list">
                <li>
                  <span>Tailored services based on the requirement.</span>
                </li>
                <li>
                  <span>Active Data Pool with Dynamic Pricing.</span>
                </li>
                <li>
                  <span
                    >Intensive 2 step filtration process to provide best-fitting
                    candidates.</span
                  >
                </li>
                <li>
                  <span>End to end enterprise hiring solutions.</span>
                </li>
                <li>
                  <span>Dedicated Account Manager.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!----enteriprise-Offerings-section end----------->

    <!----enteriprise-following-companies-section start----------->
    <section class="enteriprise-following-companies-section">
      <div class="following-companies-startups-logo">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h3 class="title-sm">
                Following companies <span style="color: #2ce2a2"> hired</span>
                bulk candidates
              </h3>
              <div class="following-companies-jobs-list">
                <ul class="following-companies-startups-logo-list">
                  <li>
                    <img
                      src="~/assets/imgs/websites-logo/lenskart.png"
                      alt=""
                    />
                  </li>
                  <li>
                    <img src="~/assets/imgs/websites-logo/Byju_s.png" alt="" />
                  </li>
                  <li>
                    <img src="~/assets/imgs/websites-logo/Ajio.png" alt="" />
                  </li>
                  <li>
                    <img
                      src="~/assets/imgs/websites-logo/squareyards.png"
                      alt=""
                    />
                  </li>
                  <li>
                    <img
                      src="~/assets/imgs/websites-logo/Flipkart.png"
                      alt=""
                    />
                  </li>
                  <li>
                    <img src="~/assets/imgs/websites-logo/Udaan.png" alt="" />
                  </li>
                </ul>
                <ul class="following-companies-startups-logo-list">
                  <li>
                    <img src="~/assets/imgs/websites-logo/Amazom.png" alt="" />
                  </li>
                  <li>
                    <img src="~/assets/imgs/websites-logo/upgrad.png" alt="" />
                  </li>
                  <li>
                    <img
                      src="~/assets/imgs/websites-logo/FreeCharge.png"
                      alt=""
                    />
                  </li>
                  <li>
                    <img src="~/assets/imgs/websites-logo/upgrad.png" alt="" />
                  </li>
                  <li>
                    <img
                      src="~/assets/imgs/websites-logo/maxresdefault.png"
                      alt=""
                    />
                  </li>
                  <li>
                    <img
                      src="~/assets/imgs/websites-logo/NOBroker.png"
                      alt=""
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!----enteriprise-following-companies-section end----------->

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
      faqList: [
        {
          id: 1,
          question: "How can I hire the best candidate for my job?",
          answer:
            "More than 2.8 Million job seekers on the Hirect app, spread across 70+ categories. The AI matching tool of Hirect filters only the best-fit candidates for the hiring post so that the recruiter can connect directly with candidates with experience and skills.",
          isShown: false,
        },
        {
          id: 2,
          question: "Hiring in bulk can be expensive; how can I save money?",
          answer:
            "In traditional hiring, the hiring manager or the founder who posts the startup jobs will have to connect with consultancies that can provide a larger pool of candidates. However, this also incurs enormous expenses. Hirect app is the solution for this problem. It allows the recruiters to post the job vacancy for free. The Hirect App runs on a FREEMIUM model for recruiters so that they can use all its features without limitations. However, Hirect will charge a nominal fee to the recruiters for initiating chats with more Job Seekers than provided in the FREEMIUM plan. And the charges are pretty nominal as compared to consultancies.",
          isShown: false,
        },
        {
          id: 3,
          question: "How soon can I start hiring for my job posting?",
          answer:
            "The job post will be made live quickly, and AI will filter the best-fit candidates and match them with your job posting. You can connect with them directly and start chatting instantly. You can begin hiring candidates within a day.",
          isShown: false,
        },
        {
          id: 4,
          question: "How is Hirect different from other traditional portals?",
          answer:
            "The traditional hiring process can be long-winded, leading to candidates leaving mid-way in frustration. However, Hirect simplifies and streamlines the entire hiring process. It is the best among job hiring apps, it lets the hiring manager or recruiter connect directly with the job seeker and chat with them instantly. Since no consultants are involved, the entire process of hiring for the posted company jobs will be 100% secure with no spam or scam calls. They can also schedule a video interview within the app without exchanging any of their personal information.",
          isShown: false,
        },
        {
          id: 5,
          question: "What are the job posting limitations for the Hirer?",
          answer:
            "Recruiters who have signed up and been onboarded with the app are entitled to a 3-day complimentary trial for 30 chat initiations per day. After the trial, they will be upgraded to the FREEMIUM plan of 5 free chats a day. If the hiring manager/ recruiter wants to chat with more candidates in a day, they would have to pay a nominal fee or subscription as per the plan they choose. For further details, check out the product and pricing of Hirect.",
          isShown: false,
        },
        {
          id: 6,
          question:
            "What if I have some customized requirements? Who should I reach out to?",
          answer:
            "If the recruiter has any custom requirements, they can write to: sales@hirect.in.",
          isShown: false,
        },
      ],
      getUserInf: {
        userPosition: "",
      },
      stepFeedData: [
        {
          step: 1,
          imageSrc: "Cost-effective.png",
          title: "Cost-effective",
        },
        {
          step: 2,
          imageSrc: "Time-efficient.png",
          title: "Time-efficient",
        },
        {
          step: 3,
          imageSrc: "Increase productivity.png",
          title: "Increase productivity",
        },
      ],
    };
  },
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
.enterprise-hiring-banner-details h3.title-md {
  //  position: absolute;
  width: 522px;
  height: 120px;
  left: 131px;
  top: 154px;
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;
}

.enterprise-hiring-section {
  padding-bottom: 102px;
}

.enterprise-hiring-banner {
  padding: 50px 0;
}

.enterprise-hiring-banner-img {
  // position: absolute;
  width: 558px;
  height: 356px;
  left: 131px;
  top: 450px;
  //   background: #c4c4c4;
  border-radius: 15px;
}

// Hire Chat Section
.enteriprise-Offerings-section {
  padding-bottom: 85px;
}

.hire-chat .row {
  align-items: center;
}

.hire-now h2 {
  // position: absolute;
  width: 512px;
  height: 40px;
  left: 130px;
  padding-bottom: 120px;
  font-weight: 700;
  font-size: 40px;
  line-height: 40px;
}

.hire-now p {
  // position: absolute;
  width: 550px;
  // height: 120px;
  margin-bottom: 32px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #76787a;
}

.hire-now-img {
  // position: absolute;
  width: 508px;
  height: 325px;
  left: 874px;
  top: 981px;
  // background: #c4c4c4;
  border-radius: 15px;
}

// end Hire Chat Section
// jobs-available
.job-available-section,
.enteriprise-following-companies-section {
  padding-bottom: 102px;
}

.jobs-available {
  background-color: #f1f1f1;
  padding: 35px 0;
}

.available-list li {
  border-radius: 24px;
  background-color: #ffffff;
  display: flex;
  padding: 0px 14px;
  width: 100%;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  align-items: center;
  justify-content: center;
  max-width: 213px;
  height: 191px;
  box-shadow: 6px 6px 30px rgba(109, 141, 173, 0.25);

  .candi-value {
    font-size: 14px;
    color: #808080;
  }
}

.available-list li:hover {
  background-color: #2ce2a2;
}

.available-list {
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.available-list li {
  width: 224%;
  margin-bottom: 30px;
}

.available-list li:nth-child(6n) {
  margin-right: 0;
}

// end jobs-available

.enteriprise-following-companies-section
  .following-companies-startups-logo-list {
  padding: 0;
  margin: 50px 0;
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
}

.enteriprise-following-companies-section
  .following-companies-startups-logo-list
  li {
  cursor: pointer;
  background-color: #ffffff;
  display: flex;
  padding: 0px 14px;
  color: #000000;
  align-items: center;
  justify-content: center;
  width: 103px;
  height: 70px;
  box-shadow: 0px 6px 15px 2px #dcdcdc;
  border-radius: 10px;
}

.enteriprise-AI-platform-heading {
  width: 100%;
  max-width: 645px;
  margin: auto;
  text-align: center;
  padding-bottom: 20px;
  padding-top: 35px;
}

.enteriprise-AI-platform-section .following-companies-startups-logo {
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

.button-hire-now {
  height: 42px;
  width: 156px;
  border-radius: 100px;
  background: #2ce2a2;
  padding: 10px 0;
}

.button-hire-now-seamless {
  height: 42px;
  width: 156px;
  border-radius: 100px;
  background: #2ce2a2;
  padding: 10px 0;
  margin: 50px 500px;
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

.form-check-input:checked {
  background-color: #000000;
  border-color: #000000;
}

.enterprise-hiring-banner-details {
  width: 100%;
  max-width: 540px;
}

.enterprise-hiring-banner-details p {
  // position: absolute;
  width: 559px;
  height: 74px;
  left: 131px;
  margin-bottom: 60px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #76787a;
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
  box-shadow: 6px 6px 30px rgba(109, 141, 173, 0.25);
  border-radius: 24px;
  max-width: 476px;
  position: absolute;
  height: 648px;
  right: 130px;
}

// end following-companies-startups-logo

@media only screen and (max-width: 768px) {
  .row {
    flex-direction: column-reverse;
  }

  .enterprise-hiring-banner {
    padding: 80px 0;
  }

  .recruiter-form-section {
    padding: 90px 0 110px;
  }

  .enteriprise-AI-platform-heading {
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

  .enterprise-hiring-banner-details p {
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
  .following-companies-startups-logo-list li {
    width: 48%;
    margin-right: 2%;
    text-align: center;
    margin-bottom: 20px;
  }

  .following-companies-startups-logo-list li:nth-child(2n) {
    margin-right: 0;
  }

  .following-companies-startups-logo-list {
    margin-bottom: 30px;
  }

  .enteriprise-AI-platform-section .following-companies-startups-logo {
    padding-top: 50px;
  }

  .enterprise-hiring-banner h1 {
    margin-bottom: 0;
    text-align: center;
    margin-top: 30px;
  }

  .enterprise-hiring-banner h1 br {
    display: none;
  }

  .enterprise-hiring-banner {
    padding: 60px 0;
  }

  .enteriprise-AI-platform-heading {
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

  .enterprise-hiring-banner-details {
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

  .enterprise-hiring-banner-details p {
    font-size: 16px;
    line-height: 24px;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1299px) {
  .row {
    flex-direction: row;
  }

  .enterprise-hiring-banner {
    padding: 80px 0;
  }

  .recruiter-form-section {
    padding: 90px 0 110px;
  }

  .enteriprise-AI-platform-heading {
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
//     .following-companies-startups-logo-list li {
//         width: 48%;
//         margin-right: 2%;
//         text-align: center;
//         margin-bottom: 20px;
//     }

//     .following-companies-startups-logo-list li:nth-child(2n) {
//         margin-right: 0;
//     }

//     .following-companies-startups-logo-list {
//         margin-bottom: 30px;
//     }

//     .enteriprise-AI-platform-section .following-companies-startups-logo {
//         padding-top: 50px;
//     }

//     .enterprise-hiring-banner h1 {
//         margin-bottom: 0;
//         text-align: center;
//         margin-top: 30px;
//     }

//     .enterprise-hiring-banner h1 br {
//         display: none;
//     }

//     .enterprise-hiring-banner {
//         padding: 60px 0;
//     }

//     .enteriprise-AI-platform-heading {
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

//     .enterprise-hiring-banner-details {
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
//     .enterprise-hiring-banner-details p {
//         font-size: 16px;
//         line-height: 24px;
//     }
// }
</style>
