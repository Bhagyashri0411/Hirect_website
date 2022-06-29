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
                    Want to <span style="color: #2ce2a2"> Hire </span> <br />
                    Instantly?
                    <!-- <br />Chat Directly and Hire Now! -->
                  </h3>
                  <p>
                    Hirect enables Founders/CXOs/Hiring Managers/Business Owners
                    to chat directly with relevant, AI-filtered candidates,
                    without consultants, and with 100% data privacy!
                  </p>
                  <div class="recruiter-banner-img">
                    <img src="~/assets/imgs/recruiter-banner.png" alt="" />
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

    <section class="job-available-section">
      <div class="hire-chat">
        <div class="container">
          <div class="row">
            <div class="col-md-7">
              <div class="hire-now">
                <h2>
                  <span style="color: #2ce2a2"> Hirect </span>Hiring App for
                  Founders and Hiring Managers
                </h2>
                <p>
                  Hirect app is the targeted job portal for SMEs and Startups.
                  This mobile-first chat-based platform houses 150K+ verified
                  startups who are pleased to be a part of the startup ecosystem
                  hiring on this job portal website. Since zero consultants are
                  involved, it eliminates any spam or scam calls, and the entire
                  recruitment process is 100% secure.
                </p>
                <!-- <a class="btn default-btn button-sm" href="https://recruiter.hirect.in/">
                                Instant Hiring
                            </a> -->
                <NuxtLink class="btn default-btn button-sm" to="/connect"
                  >Hire Now</NuxtLink
                >
              </div>
            </div>
            <div class="col-md-5">
              <div class="hire-now-img">
                <img src="~/assets/imgs/india_s-first-job.png" alt="" />
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
              <h3 class="title-md">Start Hiring in 3 Steps</h3>
            </div>
            <MultiStepSegment :stepData="stepFeedData" />
          </div>
        </div>
        <NuxtLink class="btn default-btn button-hire-now-seamless" to="/connect"
          >Hire Now</NuxtLink
        >
      </div>
      <!-- <div class="startups-logo">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="jobs-list">
                <ul class="startups-logo-list">
                  <li><img src="~/assets/imgs/Create Profile.png" alt="" /></li>
                  <li><img src="~/assets/imgs/Arrow1.png" alt="" /></li>
                  <li><img src="~/assets/imgs/Post a Job in 5 Minutes.png" alt="" /></li>
                  <li><img src="~/assets/imgs/Arrow2.png" alt="" /></li>
                  <li><img src="~/assets/imgs/Chat with AI Matched Candidates.png" alt="" /></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div> -->
    </section>
    <!----startup end----------->

    <section class="job-available-section">
      <div class="hire-chat">
        <div class="container">
          <div class="row">
            <div class="col-md-7">
              <div class="hire-now-img">
                <img src="~/assets/imgs/simplify-hiring-rocess.png" alt="" />
              </div>
            </div>
            <div class="col-md-5">
              <div class="hire-now">
                <h2>Simplify Hiring Process for Startups and SMEs</h2>
                <p>
                  Hirect is a direct hiring platform focused on solving the
                  unique problem of the long-winded traditional hiring process.
                  Hirect app is explicitly designed for recruiters who can
                  instantly connect with candidates searching for jobs in Indian
                  Startups. This chat-based, direct hiring platform is designed
                  for high-growth startups to meet their hiring needs without
                  consultants.
                </p>
                <p>
                  Hirect is a direct hiring app for hiring managers. There are
                  about 3 Million job seekers on this app across 70+ categories.
                  The AI algorithm of this job app will filter only the best-fit
                  candidate, thus helping the hiring managers to reach out to
                  only candidates with the best skills and experience.
                  Recruiters vouch for this new job app as it helps nurture the
                  talent pipeline and speed up the hiring process without
                  compromising the quality of the candidates. The app allows the
                  hiring managers to chat directly with candidates and get
                  instant feedback.
                </p>
                <!-- <a class="btn default-btn button-sm" href="https://recruiter.hirect.in/">
                                Instant Hiring
                            </a> -->
                <NuxtLink class="btn default-btn button-hire-now" to="/connect"
                  >Hire Now</NuxtLink
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="recruiter-startup-section startup-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="startup-section-heading">
              <h3 class="title-md">Key Features of Hirect</h3>
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
                  <li>
                    <img
                      src="~/assets/imgs/Chat-Directly-and-Get-Instant-Response.svg"
                      alt=""
                    />
                  </li>
                  <li>
                    <img
                      src="~/assets/imgs/AI-Algorithm-Matched-Candidates.svg"
                      alt=""
                    />
                  </li>
                  <li>
                    <img
                      src="~/assets/imgs/100_-Secure-Video-Interviews.svg"
                      alt=""
                    />
                  </li>
                  <li>
                    <img
                      src="~/assets/imgs/Direct-and-Instant-Notifications.svg"
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

    <section class="recruiter-startup-section startup-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="startup-section-heading">
              <h3 class="title-md">FAQs</h3>
              <Faq :FaqData="faqList" />
            </div>
          </div>
        </div>
      </div>
    </section>
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
            "More than 3 Million job seekers on the Hirect app, spread across 70+ categories. The AI matching tool of Hirect filters only the best-fit candidates for the hiring post so that the recruiter can connect directly with candidates with experience and skills.",
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
            "The traditional hiring process can be long-winded, leading to candidates leaving mid-way in frustration. However, Hirect simplifies and streamlines the entire hiring process. It is the best among job hiring apps; it lets the hiring manager or recruiter connect directly with the job seeker and chat with them instantly. Since no consultants are involved, the hiring process for the posted company jobs will be 100% secure with no spam or scam calls. They can also schedule a video interview within the app without exchanging any of their personal information.",
          isShown: false,
        },
        {
          id: 5,
          question: "What are the job posting limitations for the Hirer?",
          answer:
            "Recruiters who have signed up and been onboarded with the app are entitled to a 3-day complimentary trial for 30 chat initiations per day. After the trial, they will be upgraded to the FREEMIUM plan of 5 free chats a day. If the hiring manager/ recruiter wants to chat with more candidates in a day, they would have to pay a nominal fee or subscription per their chosen plan. For further details, check out the product and pricing of Hirect.",
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
          imageSrc: "step-image.png",
          title: "Create Profile",
        },
        {
          step: 2,
          imageSrc: "ic_work.png",
          title: "Post Job in 5 Minutes",
        },
        {
          step: 3,
          imageSrc: "recruiter-msg.png",
          title: "Chat with AI Matched Candidates",
        },
      ],
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
.recruiter-banner-details h3.title-md {
  //  position: absolute;
  width: 522px;
  height: 120px;
  left: 131px;
  top: 154px;
  font-weight: 700;
  font-size: 64px;
  line-height: 60px;
}

.recruiter-section {
  padding-bottom: 102px;
}

.recruiter-banner {
  padding: 50px 0;
}

.recruiter-banner-img {
  // position: absolute;
  width: 558px;
  height: 356px;
  left: 131px;
  top: 450px;
  background: #c4c4c4;
  border-radius: 15px;
}

// Hire Chat Section
.hire-chat-section {
  padding-bottom: 30px;
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
.startup-section {
  padding-bottom: 102px;
}

.jobs-available {
  background-color: #f1f1f1;
  padding: 35px 0;
}

.available-list li {
  border-radius: 25px;
  background-color: #ffffff;
  display: flex;
  padding: 0px 14px;
  width: 100%;
  color: #000000;
  font-size: 18px;
  //   font-weight: bold;
  line-height: 24px;
  text-align: center;
  align-items: center;
  justify-content: center;
  max-width: 244px;
  height: 160px;

  .candi-value {
    font-size: 14px;
    color: #808080;
  }
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

.startups-logo-list {
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
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

// .startups-logo-list li img {
//   filter: grayscale(100%);
// }

.form-check-input:checked {
  background-color: #000000;
  border-color: #000000;
}

.recruiter-banner-details {
  width: 100%;
  max-width: 540px;
}

.recruiter-banner-details p {
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
