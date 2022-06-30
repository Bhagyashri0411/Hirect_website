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
                 <div class="enterprise-hiring text-center">
      <NuxtLink to="/enterprise-hiring">Looking for bulk hiring?</NuxtLink>
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
                  <span style="color: #2ce2a2"> Hirect </span> - India's First
                  Job App
                </h2>
                <p>
                  Hirect app is the best job portal for SMEs and Startups. This
                  mobile-first chat-based platform houses 150K+ verified
                  startups who are pleased to be a part of the startup ecosystem
                  hiring on this job portal website. Since zero consultants are
                  involved, it eliminates any spam or scam calls, and the entire
                  recruitment process is 100% secure.
                </p>
                <!-- <a class="btn default-btn button-sm" href="https://recruiter.hirect.in/">
                                Instant Hiring
                            </a> -->
                <a class="btn default-btn button-sm" @click="window.scrollTo(0,0)">Hire Now</a>
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
        <a class="btn default-btn button-hire-now-seamless" @click="window.scrollTo(0,0)">Hire Now</a>
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
                <h2>Simplify Hiring Process for Startups and SMEs</h2>
                <p>
                  Hirect is India's 1st direct hiring platform focused on
                  solving the unique problem of the longwinded traditional
                  hiring process. Hirect app is designed specifically for
                  recruiters who can instantly connect with candidates searching
                  for jobs in Indian Startups. This chat-based, direct hiring
                  platform is designed for high-growth startups to meet their
                  hiring needs without consultants.
                </p>
                <p>
                  Hirect is a direct hiring app for hiring managers. There are
                  about 2.8 Million job seekers on this app across 70+
                  categories. The AI algorithm of this job app will filter only
                  the best-fit candidate, thus helping the hiring managers to
                  reach out to only candidates with the best skills and
                  experience. Recruiters vouch for this new job app as it helps
                  nurture the talent pipeline and speed up the hiring process
                  without compromising the quality of the candidates. The app
                  allows the hiring managers to chat directly with candidates
                  and get instant feedback.
                </p>
                <a class="btn default-btn button-hire-now" @click="scrollToTop">Hire Now</a>
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
                    <img src="~/assets/imgs/Chat-Directly-and-Get-Instant-Response.svg" alt="" />
                  </li>
                  <li>
                    <img src="~/assets/imgs/AI-Algorithm-Matched-Candidates.svg" alt="" />
                  </li>
                  <li>
                    <img src="~/assets/imgs/100_-Secure-Video-Interviews.svg" alt="" />
                  </li>
                  <li>
                    <img src="~/assets/imgs/Direct-and-Instant-Notifications.svg" alt="" />
                  </li>
                </ul>
              </div>
              <div class="jobs-list">
                <ul class="startups-logo-list">
                  <li>
                    <div class="features-title">Chat Directly and Get <br/>Instant Response</div>
                  </li>
                  <li>
                    <div class="features-title">AI- Algorithm <br/>Matched Candidates</div>
                  </li>
                  <li>
                    <div class="features-title">100% Secure<br/> Video Interviews</div>
                  </li>
                  <li>
                    <div class="features-title">Direct and Instant <br/> Notifications</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        <a class="btn default-btn button-hire-now-seamless" @click="window.scrollTo(0,0)">Hire Now</a>
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
  mounted() {
    this.window = window;
  },
  data() {
    return {
      window: null,
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
            id:1,
            question:"How can I hire the best candidate for my job?",
            answer:"More than 2.8 Million job seekers on the Hirect app, spread across 70+ categories. The AI matching tool of Hirect filters only the best-fit candidates for the hiring post so that the recruiter can connect directly with candidates with experience and skills.",
            isShown:false
        },
        {
            id:2,
            question:"Hiring in bulk can be expensive; how can I save money?",
            answer:"In traditional hiring, the hiring manager or the founder who posts the startup jobs will have to connect with consultancies that can provide a larger pool of candidates. However, this also incurs enormous expenses. Hirect app is the solution for this problem. It allows the recruiters to post the job vacancy for free. The Hirect App runs on a FREEMIUM model for recruiters so that they can use all its features without limitations. However, Hirect will charge a nominal fee to the recruiters for initiating chats with more Job Seekers than provided in the FREEMIUM plan. And the charges are pretty nominal as compared to consultancies.",
            isShown:false
        },
        {
            id:3,
            question:"How soon can I start hiring for my job posting?",
            answer:"The job post will be made live quickly, and AI will filter the best-fit candidates and match them with your job posting. You can connect with them directly and start chatting instantly. You can begin hiring candidates within a day.",
            isShown:false
        },
        {
            id:4,
            question:"How is Hirect different from other traditional portals?",
            answer:"The traditional hiring process can be long-winded, leading to candidates leaving mid-way in frustration. However, Hirect simplifies and streamlines the entire hiring process. It is the best among job hiring apps, it lets the hiring manager or recruiter connect directly with the job seeker and chat with them instantly. Since no consultants are involved, the entire process of hiring for the posted company jobs will be 100% secure with no spam or scam calls. They can also schedule a video interview within the app without exchanging any of their personal information.",
            isShown:false
        },
        {
            id:5,
            question:"What are the job posting limitations for the Hirer?",
            answer:"Recruiters who have signed up and been onboarded with the app are entitled to a 3-day complimentary trial for 30 chat initiations per day. After the trial, they will be upgraded to the FREEMIUM plan of 5 free chats a day. If the hiring manager/ recruiter wants to chat with more candidates in a day, they would have to pay a nominal fee or subscription as per the plan they choose. For further details, check out the product and pricing of Hirect.",
        isShown:false
        },
        {
            id:6,
            question:"What if I have some customized requirements? Who should I reach out to?",
            answer:"If the recruiter has any custom requirements, they can write to: sales@hirect.in.",
            isShown:false
        }
      ],
      getUserInf: {
        userPosition: "",
      },
      stepFeedData: [
        {
          step: 1,
          imageSrc: "step-image.png",
          title: "Create Profile"
        },
        {
          step: 2,
          imageSrc: "ic_work.png",
          title: "Post Job in 5 Minutes", 
        },
        {
          step: 3,
          imageSrc: "recruiter-msg.png",
          title: "Chat with AI Matched Candidates"
        },
      ],
    };
  },

  methods: {
    scrollToTop(){
      this.window.scrollTo({ top: 0, behavior: 'smooth' })
    }
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

// .hire-chat .row {
//   align-items: center;
// }

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
  border-radius: 15px;
}

// end Hire Chat Section
// jobs-available
.job-available-section,
.startup-section {
  padding-bottom: 102px;
}


// end jobs-available

.startups-logo-list {
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

.startup-section-heading {
  width: 100%;
  max-width: 75%;
  margin: auto;
  text-align: center;
  padding-bottom: 20px;
  padding-top: 35px;
}

.recruiter-startup-section .startups-logo {
  padding-top: 60px;
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
  margin: 50px 45%;
}

button.btn.eye-button {
  position: absolute;
  top: 0;
  height: 100%;
  padding: 5px 10px;
  right: 20px;
  color: #b4b4b4;
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

.Schedule-call {
  background: #ffffff;
  box-shadow: 6px 6px 30px rgba(109, 141, 173, 0.25);
  border-radius: 24px;
  max-width: 476px;
  position: relative;
  height: 648px;
  left: 25%;
}

.enterprise-hiring{
  position: relative;
  left: 25%;
  max-width: 476px;
  margin-top: 25px;
}

.features-title{
  font-weight: 700;
  text-align: center;
  margin-top:25px
}

// end startups-logo

@media only screen and (max-width: 768px) {
  .row {
    flex-direction: column-reverse;
  }

  .recruiter-banner {
    padding: 80px 0;
  }

  .startup-section-heading {
    padding-top: 20px;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1199px) {
  .recruiter-banner-details p {
    font-size: 17px;
    line-height: 29px;
  }

  .Schedule-call {
    padding: 20px 40px 30px;
  }
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
  button.btn.eye-button {
    right: 6px;
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

  .recruiter-banner-details {
    padding: 0;
    padding-bottom: 50px;
    text-align: center;
    margin: auto;
    padding-top: 40px;
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

  .startup-section-heading {
    padding-top: 20px;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1199px) {
  .row {
    flex-direction: row;
  }
  .Schedule-call {
    padding: 20px 20px 30px;
  }
}

@media only screen and (min-width: 1200px) {
  .row {
    flex-direction: row;
  }

  .Schedule-call {
    padding: 20px 20px 30px;
  }
}
</style>
