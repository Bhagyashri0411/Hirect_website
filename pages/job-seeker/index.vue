<template>
  <div class="wrapper">
    <Header />
    <section class="job-seeker-section">
      <div class="job-seeker">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="chat-now-img">
                <img src="~/assets/imgs/js-banner-image.png" alt="" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="get-app">
                <h1 class="hero-title">
                  Get the <span style="color: #19e29e">Hirect</span> App
                </h1>
                <p>
                  We will send you a link to your phone open <br />
                  it to download the app.
                </p>
                <div class="input-container">
                  <div class="Sgdef">+91 |</div>
                  <input type="text" class="form-search-mob" placeholder="Enter Mobile Number..." />
                  <button class="btn default-btn button-sm" style="margin-left: 20px">
                    Get App
                  </button>
                </div>
                <div class="app-scan-button">
                  <a><img id="download-hirect-qrcode" class="qr-code-img" src="~/assets/imgs/qr-frame.png" alt="" /></a>
                  <a href="https://apps.apple.com/US/app/id1518442417?mt=8" target="_blank"><img
                      src="~/assets/imgs/logo_apple-store.png" alt="" /></a>
                  <span class="line-seperator" style="height: 40px; border-left: 1px solid"></span>
                  <a href="https://hirectin.onelink.me/TwhD/b0fe8b20" target="_blank"><img
                      src="~/assets/imgs/logo-google-playstore.png" alt="" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="job-available-section">
      <div class="job-seeker">
        <div class="container">
          <div class="row">
            <div class="col-md-7">
              <div class="get-app">
                <h2>
                  <span style="color: #2ce2a2"> Hirect </span> - Best Job Search App in
                  India
                </h2>
                <p>
                  Hirect is the job search app that enables a job seeker to find relevant
                  job listings in minutes. This chat-based, mobile-first Hirect app
                  connects the job seeker directly with the hiring manager, who may be
                  their next employer. Building the candidate profile and landing the
                  right job takes just 5 minutes. Candidates on a job search can connect
                  instantly with startup founders and get hired.
                </p>
                <!-- <a class="btn default-btn button-sm" href="https://recruiter.hirect.in/">
                                Instant Hiring
                            </a> -->
                <a class="btn default-btn button-sm" @click="showModal = true">Get Hired</a>
              </div>
            </div>
            <div class="col-md-5">
              <div class="chat-now-img">
                <img src="~/assets/imgs/india_s-first-job.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!----startup start----------->
    <section class="hiring-process-section hiring-process">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="hiring-process-heading">
              <h3 class="title-md">Seamless Hiring Process in 3 Steps</h3>
            </div>
            <MultiStepSegment :stepData="stepFeedData" />
          </div>
        </div>
        <a class="btn default-btn button-get-app-now" @click="showModal = true">Get Hired</a>
      </div>
    </section>
    <!----startup end----------->

    <section class="job-available-section">
      <div class="job-seeker">
        <div class="container">
          <div class="row">
            <div class="col-md-7">
              <div class="chat-now-img">
                <img src="~/assets/imgs/simplify-hiring-rocess.png" alt="" />
              </div>
            </div>
            <div class="col-md-5">
              <div class="get-app">
                <h2>Get Hired Easily</h2>
                <p>
                  Hirect is a leading job portal in India that enables job seekers to get
                  the latest job notifications during their job search. The job seeker
                  looking for a job can instantly register on the site, upload their
                  resume, get verified, and find a job. Hirect has over 3M+ verified job
                  seekers searching for startup jobs across 70+ categories. Job seekers
                  find it easy to connect with startup founders or hiring managers
                  instantly and get hired. There are over 150K startups hiring on the
                  Hirect app.
                </p>
                <p>
                  The app is also helpful for freshers searching for jobs. All the
                  recruiters on the Hirect app are 100% verified, and since there are no
                  consultants on this job app, there are no spam or scam calls. Hirect
                  streamlines the hiring process by directly connecting the job seeker who
                  matches with the job openings to the hiring manager so they can chat
                  instantly for free, unlike most traditional hiring processes, which are
                  long-winded and charge job seekers.
                </p>
                <!-- <a class="btn default-btn button-sm" href="https://recruiter.hirect.in/">
                                Instant Hiring
                            </a> -->
                <a class="btn default-btn button-get-app" @click="showModal = true">Get Hired</a>
                <DownloadModal v-show="showModal" @close-modal="showModal = false" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="hiring-process-section hiring-process">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="hiring-process-heading">
              <h3 class="title-md">Key Features of Hirect</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="key-features">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
                <ul class="key-features-list">
                  <li>
                    <img src="~/assets/imgs/Chat-Directly-and-Get-Instant-Response.svg" alt="" />
                  </li>
                  <li>
                    <img src="~/assets/imgs/Get-Instant-Responses-and-Feedback.svg" alt="" />
                  </li>
                  <li>
                    <img src="~/assets/imgs/AI-Matched-Job-Postings.svg" alt="" />
                  </li>
                  <li>
                    <img src="~/assets/imgs/100_-Secure-Video-Interviews.svg" alt="" />
                  </li>
                </ul>
                <ul class="key-features-list">
                  <li>
                    <div class="features-title">Chat Instantly with <br/>Startup Founders/Hiring<br/> Managers</div>
                  </li>
                  <li>
                    <div class="features-title">Get Instant Response and Feedback</div>
                  </li>
                  <li>
                    <div class="features-title">AI Matched Job <br/>Postings</div>
                  </li>
                  <li>
                    <div class="features-title">100% Secure Video <br/>interviews</div>
                  </li>
                </ul>
            </div>
          </div>
        <a class="btn default-btn button-get-app-now" @click="showModal = true">Get Hired</a>
        </div>
      </div>
    </section>

    <section class="hiring-process-section hiring-process">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="hiring-process-heading">
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
      showModal: false,
      faqList: [
        {
          id: 1,
          question: "What are the essential steps to post my resume on the Hirect app? ",
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
  jsonld() {
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: "1",
          name: "Job Seeker",
          item: "https://www.hirect.in/job-seeker"
        }
      ]
    };
  },
};
</script>

<style lang="scss" scoped>

// Hire Chat Section
.job-seeker-section {
  padding-bottom: 30px;
}

.job-seeker .row {
  align-items: center;
}

.get-app h2 {
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

.get-app p {
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

.chat-now-img {
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
.hiring-process {
  padding-bottom: 102px;
}

.key-features-list {
  padding: 0;
  margin: 0;
  list-style: none;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 25% 20% 20% 20%;
  grid-column-gap: 5%;
  justify-content: space-between;
  justify-items: center;
}

.hiring-process-heading {
  width: 100%;
  max-width: 75%;
  margin: auto;
  text-align: center;
  padding-bottom: 20px;
  padding-top: 35px;
}

.hiring-process-section .key-features {
  padding-top: 60px;
}

.button-get-app {
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

.button-get-app-now{
  height: 42px;
  width: 156px;
  border-radius: 100px;
  background: #2ce2a2;
  padding: 10px 0;
  margin: 50px 45%;
}
.qr-code-img {
  width: 150px;
  height: 150px;
}

.features-title{
  font-weight: 700;
  text-align: center;
  margin-top:25px
}
// end key-features

@media only screen and (max-width: 768px) {
  .row {
    flex-direction: column-reverse;
  }

  .hiring-process-heading {
    padding-top: 20px;
  }
}



@media only screen and (min-width: 768px) and (max-width: 991px) {

  button.btn.eye-button {
    right: 6px;
  }

}

@media only screen and (min-width: 300px) and (max-width: 767px) {
  .key-features-list li {
    width: 48%;
    margin-right: 2%;
    text-align: center;
    margin-bottom: 20px;
  }

  .key-features-list li:nth-child(2n) {
    margin-right: 0;
  }

  .key-features-list {
    margin-bottom: 30px;
  }

  .hiring-process-section .key-features {
    padding-top: 50px;
  }


  .hiring-process-heading {
    padding-top: 0;
    padding-bottom: 10px;
  }

}

@media only screen and (min-width: 768px) and (max-width: 1299px) {
  .row {
    flex-direction: row;
  }

  .hiring-process-heading {
    padding-top: 20px;
  }
}

@media only screen and (min-width: 1200px) {
  .row {
    flex-direction: row;
  }

  .job-seeker-section {
    padding-bottom: 100px;

    .job-seeker {
      //   padding-bottom: 80px;
      background-color: #f4fafd;
    }

    .job-seeker .row {
      align-items: center;
    }

    .get-app h2 {
      color: #0e101a;
      font-size: 40px;
      font-weight: bold;
      line-height: 66.8px;
      margin: 30px 0;
    }

    .get-app p {
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

      .chat-now-img {
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
</style>
