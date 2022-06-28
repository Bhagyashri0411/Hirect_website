<template>
  <div class="wrapper">
    <Header />
    <section class="hire-chat-section">
      <div class="hire-chat">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="hire-now-img">
                <img src="~/assets/imgs/js-banner-image.png" alt="" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="hire-now">
                <h1 class="hero-title">
                  Get the <span style="color: #19e29e">Hirect</span> App
                </h1>
                <p>
                  We will send you a link to your phone open <br />
                  it to download the app.
                </p>
                <div class="input-container">
                  <div class="Sgdef">+91 |</div>
                  <input
                    type="text"
                    class="form-search-mob"
                    placeholder="Enter Mobile Number..."
                  />
                  <button
                    class="btn default-btn button-sm"
                    style="margin-left: 20px"
                  >
                    Get App
                  </button>
                </div>
                <div class="app-scan-button">
                  <a
                    ><img
                      id="download-hirect-qrcode"
                      class="qr-code-img"
                      src="~/assets/imgs/qr-frame.png"
                      alt=""
                  /></a>
                  <a
                    href="https://apps.apple.com/US/app/id1518442417?mt=8"
                    target="_blank"
                    ><img src="~/assets/imgs/logo_apple-store.png" alt=""
                  /></a>
                  <span
                    class="line-seperator"
                    style="height: 40px; border-left: 1px solid"
                  ></span>
                  <a
                    href="https://hirectin.onelink.me/TwhD/b0fe8b20"
                    target="_blank"
                    ><img src="~/assets/imgs/logo-google-playstore.png" alt=""
                  /></a>
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
                  <span style="color: #2ce2a2"> Hirect </span> - Best Job Search
                  App in India
                </h2>
                <p>
                  Hirect is the job search app that enables a job seeker to find
                  relevant job listings in minutes. This chat-based,
                  mobile-first Hirect app connects the job seeker directly with
                  the hiring manager, who may be their next employer. Building
                  the candidate profile and landing the right job takes just 5
                  minutes. Candidates on a job search can connect instantly with
                  startup founders and get hired.
                </p>
                <!-- <a class="btn default-btn button-sm" href="https://recruiter.hirect.in/">
                                Instant Hiring
                            </a> -->
                <a class="btn default-btn button-sm" @click="showModal = true"
                  >Get Hired</a
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
              <h3 class="title-md">Seamless Hiring Process in 3 Steps</h3>
            </div>
            <MultiStepSegment :stepData="stepFeedData" />
          </div>
        </div>
      </div>
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
                <h2>Get Hired Easily</h2>
                <p>
                  Hirect is a leading job portal in India that enables job
                  seekers to get the latest job notifications during their job
                  search. The job seeker looking for a job can instantly
                  register on the site, upload their resume, get verified, and
                  find a job. Hirect has over 3M+ verified job seekers searching
                  for startup jobs across 70+ categories. Job seekers find it
                  easy to connect with startup founders or hiring managers
                  instantly and get hired. There are over 150K startups hiring
                  on the Hirect app.
                </p>
                <p>
                  The app is also helpful for freshers searching for jobs. All
                  the recruiters on the Hirect app are 100% verified, and since
                  there are no consultants on this job app, there are no spam or
                  scam calls. Hirect streamlines the hiring process by directly
                  connecting the job seeker who matches with the job openings to
                  the hiring manager so they can chat instantly for free, unlike
                  most traditional hiring processes, which are long-winded and
                  charge job seekers.
                </p>
                <!-- <a class="btn default-btn button-sm" href="https://recruiter.hirect.in/">
                                Instant Hiring
                            </a> -->
                <a
                  class="btn default-btn button-hire-now"
                  @click="showModal = true"
                  >Get Hired</a
                >
                <DownloadModal
                  v-show="showModal"
                  @close-modal="showModal = false"
                />
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
import { title } from "process";

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
      showModal: false,
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
          question:
            "What are the essential steps to post my resume on the Hirect app? ",
          answer:
            "After downloading the Hirect app, job seekers can register online, upload their resumes, and get verified in minutes. After getting verified, they can find a relevant job and instantly start chatting with the hiring manager.",
          isShown: false,
        },
        {
          id: 2,
          question: "Does it cost you to find a job on this app?",
          answer:
            "While most traditional job portals in India charge the job seeker to find a relevant job for their profile, after a duration, Hirect allows job seekers to post their resumes and chat with the recruiters completely free of cost. Also, there are no consultants or third-party recruiters on this job app, thus ensuring 100% data privacy.",
          isShown: false,
        },
        {
          id: 3,
          question:
            "How can job seekers secure themselves from any job frauds or scams on this app?",
          answer:
            "All the recruiters who post the jobs on this app are 100 % verified. And since there are no consultants involved, there is no interference in the form of spam or scam calls. Also, the AI ensures that the candidates are matched with only the relevant hiring posts or job profiles.",
          isShown: false,
        },
        {
          id: 4,
          question:
            "Would I need to follow up with the recruiter to get a response or feedback?",
          answer:
            "Yes. You can follow up with the recruiter directly to get feedback. Hirect app is such that it allows the job seekers to connect directly with the hiring managers who could end up being their prospective boss. Job seekers can chat with the recruiters, schedule video interviews, and get feedback within a day or two. The end-to-end process is completed within the app without any exchange of personal information.",
          isShown: false,
        },
      ],
      getUserInf: {
        userPosition: "",
      },
      stepFeedData: [
        {
          step: 1,
          imageSrc: "js-step1.png",
          title: "Register on the app",
        },
        {
          step: 2,
          imageSrc: "js-step2.png",
          title: "Build the resume",
        },
        {
          step: 3,
          imageSrc: "js-step3.png",
          title: "Get the job you desreve",
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
  padding-bottom: 120px;
  left: 130px;
  font-weight: 700;
  font-size: 40px;
  line-height: 40px;
}

.hero-title {
  margin-top: 40px;
  padding-bottom: 0px !important;
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

.startups-logo-list li {
  // width: 12%;
  // margin-bottom: 45px;
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

.recruiter-banner-details {
  width: 100%;
  max-width: 540px;
}

.recruiter-banner-details p {
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

.qr-code-img {
  width: 150px;
  height: 150px;
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

  .hire-chat-section {
    padding-bottom: 100px;

    .hire-chat {
      //   padding-bottom: 80px;
      background-color: #f4fafd;
    }

    .hire-chat .row {
      align-items: center;
    }

    .hire-now h2 {
      color: #0e101a;
      font-size: 40px;
      font-weight: bold;
      line-height: 66.8px;
      margin: 30px 0;
    }

    .hire-now p {
      color: #0e101a;
      font-size: 17px;
      font-weight: normal;
      line-height: 27px;
      margin-bottom: 30px;
    }

    .input-container {
      display: flex;
      align-items: stretch;

      .Sgdef {
        position: absolute;
        color: #b0b2b8;
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
        width: 65%;
        color: #808080;
        font-size: 13px;
        padding: 0px 10px 0px 60px;
        background: rgb(255, 255, 255);
        border: 2px solid rgb(223, 225, 230);
        box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
        border-radius: 32px;
      }

      .hire-now-img {
        text-align: end;
      }
    }

    .app-scan-button {
      display: grid;
      grid-auto-flow: column;
      margin-top: 50px;
      margin-bottom: 50px;
      align-items: end;
      grid-template-columns: 200px 50px 10px 50px;
    }
  }

  // end
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
