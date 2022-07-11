<template>
  <div class="wrapper">
    <Header />
    <section class="job-seeker-section">
      <div class="job-seeker">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="chat-now-img-hero">
                <img src="~/assets/imgs/js-banner-image.png" alt="" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="get-app">
                <h1 class="hero-title">
                  Get the <span style="color: #19e29e">Hirect</span> App
                </h1>
                <p class="mw-70">
                  We will send you a link via SMS. To download the app, simply open it.
                </p>
                <GetAppInput/>
                <!-- <div class="app-scan-button">
                  <a>
                  <img id="download-hirect-qrcode"
                  class="qr-code-img" src="~/assets/imgs/qr-frame.png" alt="" /></a>
                  <a href="https://apps.apple.com/US/app/id1518442417?mt=8" target="_blank"><img
                      src="~/assets/imgs/logo_apple-store.png" alt="" /></a>
                  <span class="line-seperator" style="height: 40px; border-left: 1px solid"></span>
                  <a href="https://hirectin.onelink.me/TwhD/b0fe8b20" target="_blank"><img
                      src="~/assets/imgs/logo-google-playstore.png" alt="" /></a>
                </div> -->
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
            <div class="col-md-6">
              <div class="get-app">
                <h2>
                  <span style="color: #2ce2a2"> Hirect </span> - The Direct  Job Search Application
                </h2>
                <p class="mw-90">
                  With 150K+ verified recruiters and 3M+ verified candidates, Hirect offers candidates the opportunity to directly connect with the decision-makers. Moreover, the AI algorithm ensures that candidates are only recommended for jobs that are a good fit for their skill set, experience, and professional goals. In addition to direct chat, Hirect has an in-built video call feature that allows the entire hiring process to take place without hassle on the app itself.
                </p>
                <!-- <a class="btn default-btn button-sm" href="https://recruiter.hirect.in/">
                                Instant Hiring
                            </a> -->
                <a class="btn default-btn button-get-app-now" @click="showModal = true">Get Hired</a>
              </div>
            </div>
            <div class="col-md-6">
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
              <h3 class="title-md">Get Hired 3 Simple Steps</h3>
            </div>
            <MultiStepSegment :stepData="stepFeedData" />
          </div>
        </div>
        <div class="row border-bottom-40"></div>
        <a class="btn default-btn button-get-app-now" @click="showModal = true">Get Hired</a>
      </div>
    </section>
    <!----startup end----------->

    <section class="job-available-section">
      <div class="job-seeker">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="chat-now-img">
                <img src="~/assets/imgs/simplify-hiring-rocess.png" alt="" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="get-app pull-lef">
                <h2>Simply Get <span style="color: #2ce2a2">Hired </span></h2>
                <p>
                  Hirect enables job seekers to find the latest job openings during their job search. Job seekers looking for a job can instantly register on the application, upload their resume, get verified, and find a job. Hirect has 3M+ verified job seekers searching for startup jobs across 1200+ categories. All the recruiters on the Hirect app are 100% verified, and since there are no consultants on this job app, there are no spam or scam calls.
                </p>
                <p>
                  Hirect is a leading job portal in India that streamlines the hiring process by directly connecting the job seeker to the hiring manager so they can chat instantly for free, unlike most traditional hiring processes, which are unreliable, long-winded and expensive.
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

    <section class="hiring-process-section hiring-process hide-mobile">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="hiring-process-heading">
              <h3 class="title-md">Key Features</h3>
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
                    <div class="features-title">
                      Direct Chat with Startup Founders/Hiring Managers
                    </div>
                  </li>
                  <li>
                    <div class="features-title">AI Matched Job Recommendations</div>
                  </li>
                  <li>
                    <div class="features-title">No Consultants</div>
                  </li>
                  <li>
                    <div class="features-title">In-built Video Call</div>
                  </li>
                </ul>
            </div>
          </div>
          <div class="row border-bottom-40"></div>
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
              <faq :FaqData="faqList" />
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
      title: 'Free Job Posting for Employers | Best Recruitment App - Hirect',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Free Job Portal connects highly matching jobseekers. Chat directly in-app and get the best candidates. Download Hirect to post a job for free online. ',
        },
      ],
    };
  },
  data() {
    return {
      // RecruiterLoginDialogVisible: false,
      isUserPositionError: false,
      showModal: false,
      faqList: [
        {
          id: 1,
          question: 'What are the essential steps to post my resume on the Hirect app? ',
          answer:
            'After downloading the Hirect app, job seekers can register online, upload their resumes, and get verified in minutes. After getting verified, they can find a relevant job and instantly start chatting with the hiring manager.',
          isShown: false,
        },
        {
          id: 2,
          question: 'Does it cost you to find a job on this app?',
          answer:
            'While most traditional job portals in India charge the job seeker to find a relevant job for their profile, after a duration, Hirect allows job seekers to post their resumes and chat with the recruiters completely free of cost. Also, there are no consultants or third-party recruiters on this job app, thus ensuring 100% data privacy.',
          isShown: false,
        },
        {
          id: 3,
          question:
            'How can job seekers secure themselves from any job frauds or scams on this app?',
          answer:
            'All the recruiters who post the jobs on this app are 100 % verified. And since there are no consultants involved, there is no interference in the form of spam or scam calls. Also, the AI ensures that the candidates are matched with only the relevant hiring posts or job profiles.',
          isShown: false,
        },
        {
          id: 4,
          question:
            'Would I need to follow up with the recruiter to get a response or feedback?',
          answer:
            'Yes. You can follow up with the recruiter directly to get feedback. Hirect app is such that it allows the job seekers to connect directly with the hiring managers who could end up being their prospective boss. Job seekers can chat with the recruiters, schedule video interviews, and get feedback within a day or two. The end-to-end process is completed within the app without any exchange of personal information.',
          isShown: false,
        },
      ],
      stepFeedData: [
        {
          step: 1,
          imageSrc: 'js-step1.svg',
          title: 'Build your profile',
        },
        {
          step: 2,
          imageSrc: 'js-step3.svg',
          title: 'Chat directly with decision-makers',
        },
        {
          step: 3,
          imageSrc: 'js-step2.svg',
          title: 'Get Hired',
        },
      ],
    };
  },
  jsonld() {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: '1',
          name: 'Job Seeker',
          item: 'https://www.hirect.in/job-seeker',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.border-bottom-40{
  min-height: 40px;
}
// Hire Chat Section
.job-seeker-section {
  padding-bottom: 30px;
}

.job-seeker .row {
  align-items: center;
}

.get-app h2 {
  // position: absolute;
  // width: 512px;
  // height: 40px;
  margin-bottom: 24px;
  left: 130px;
  font-weight: 700;
  font-size: 40px;
  line-height: 50px;
}

.hero-title {
  margin-top: 40px;
  padding-bottom: 0px !important;
}

.get-app p {
  // position: absolute;
  // width: 550px;
  // height: 120px;
  margin-bottom: 32px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #76787a;
}
.chat-now-img-hero{
  margin-top: 10%;
  padding-right: 15%;
  margin-bottom: 10%;
}
// end Hire Chat Section
// jobs-available
.job-available-section,
.hiring-process {
  padding-bottom: 90px;
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

.hiring-process-section, .key-features {
  text-align: center;
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
  // margin: 50px 45%;
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
  .chat-now-img img{
    padding: 20px;
  }
  .container{
    text-align: center !important;
  }
  .row {
    flex-direction: column;
  }

  .hiring-process-heading {
    padding-top: 20px;
  }
}

@media only screen and (min-width: 768px) and (max-width: 991px) {

  button.btn.eye-button {
    right: 6px;
  }
  .hide-mobile{
    display: none;
  }
}

@media only screen and (min-width: 300px) and (max-width: 767px) {
  .hide-mobile{
    display: none;
  }
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
    .app-scan-button {
      display: grid;
      grid-auto-flow: column;
      justify-content: center;
      margin-top: 50px;
      margin-bottom: 50px;
      align-items: end;
      grid-template-columns: 200px 50px 10px 50px;
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
