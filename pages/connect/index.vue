<template>
  <div class="wrapper">
    <Header />

    <!----startup start----------->
    <section class="recruiter-section">
      <div class="recruiter-banner">
        <div class="container con-rec">
          <div class="row direct-row">
            <div class="col-md-6">
              <div class="px-0.5 py-0.5">
                <div class="recruiter-banner-details">
                  <h3 class="title-md">
                    Want to <span style="color: #2ce2a2"> Hire </span> <br />
                    Instantly?
                    <!-- <br />Chat Directly and Hire Now! -->
                  </h3>
                  <p>
                    Hirect is a job app that enables Founders/CXOs/Hiring
                    Managers/Business Owners to chat directly with relevant,
                    AI-filtered candidates, without consultants, and with 100%
                    data privacy.
                  </p>
                  <div class="recruiter-banner-img">
                    <img
                      src="~/assets/imgs/recruiter-hero.png"
                      loading="lazy"
                      alt="recruiter banner"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="px-0.5 py-0.5">
                <div class="Schedule-call">
                  <RecruitersForm />
                </div>
                <div class="enterprise-hiring text-center">
                  <NuxtLink to="/enterprise-hiring"
                    >Have Multiple Positions to Fill?</NuxtLink
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!----startup end----------->

    <!----startup start----------->
    <section class="job-available-section">
      <div class="hire-chat">
        <div class="container con-rec">
          <div class="row">
            <div class="col-md-7">
              <div class="hire-now">
                <h2>
                  <span style="color: #2ce2a2"> Hiring </span> App for
                  Founders<br />
                  and Hiring Managers
                </h2>
                <p>
                  A targeted job portal for SMEs and Startups - Hirect is a
                  mobile-first chat-based platform that fulfills the hiring
                  requirements of 190K+ verified recruiters. Hirect as a direct
                  hiring app connects recruiters to 3.8M+ verified candidates who
                  are searching for jobs in Indian startups. Moreover, Hirect
                  allows for direct and private communication without the
                  interference of consultants.
                </p>
                <!-- <a class="btn default-btn button-sm" href="https://recruiter.hirect.in/">
                                Instant Hiring
                            </a> -->
                <a class="btn default-btn button-hire-now" @click="scrollToTop"
                  >Hire Now</a
                >
              </div>
            </div>
            <div class="col-md-5">
              <div class="hire-now-img">
                <img
                  src="~/assets/imgs/recruiter-banner.png"
                  loading="lazy"
                  alt="section-2-banner"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!----startup end----------->

    <!----startup start----------->
    <section class="recruiter-startup-section startup-section" id="stephiring">
      <div class="container con-rec">
        <div class="row">
          <!-- <div class="col-md-12"> -->
          <div class="startup-section-heading">
            <h3 class="title-md">Start Hiring in 3 Easy Steps</h3>
          </div>
          <MultiStepSegment :stepData="stepFeedData" />
          <!-- </div> -->
          <div class="autocomplete1">
            <a
              class="btn default-btn button-hire-now-seamless"
              @click="window.scrollTo(0, 0)"
              >Hire Now</a
            >
          </div>
        </div>
      </div>
    </section>
    <!----startup end----------->

    <!----startup start----------->
    <section class="job-available-section">
      <div class="hire-chat">
        <div class="container con-rec">
          <div class="row">
            <div class="col-md-6">
              <div class="hire-now-img">
                <img
                  src="~/assets/imgs/hiring-process.png"
                  loading="lazy"
                  alt="step-3-banner"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="hire-now">
                <h2>
                  <span style="color: #2ce2a2"> Hirect </span> - Simplifying the
                  Hiring Process
                </h2>
                <p>
                  Hirect, a direct hiring platform for founders and hiring
                  managers, is committed to meeting its users' definitions of
                  success. This chat-based platform is created to help
                  high-growth startups meet their hiring needs in absence of
                  middlemen.
                </p>
                <p>
                  Hirect caters to the hiring needs of 190K+ verified
                  recruiters. The AI algorithm's ability to correctly match
                  recruiters to relevant candidates based on skills, experience,
                  profile activity, location preferences, etc. makes hiring
                  simple and effective.
                </p>
                <a class="btn default-btn button-hire-now" @click="scrollToTop"
                  >Hire Now</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!----startup end----------->

    <!----startup start----------->
    <section class="recruiter-startup-section startup-section" id="keyhiring">
      <div class="container con-rec">
        <div class="row">
          <div class="col-md-12">
            <div class="startup-section-heading">
              <h3 class="title-md">Key Features</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="startups-logo">
        <div class="container con-rec">
          <div class="row">
            <div class="col-md-12">
              <div class="jobs-list">
                <ul class="startups-logo-list">
                  <li>
                    <img
                      src="~/assets/imgs/Relevant-Candidates-(AI-Algorithm).svg"
                      loading="lazy"
                      alt="Relevant-Candidates-(AI-Algorithm)"
                    />
                  </li>
                  <li>
                    <img
                      src="~/assets/imgs/Direct-Chat-and-Instant-Response.svg"
                      loading="lazy"
                      alt="Direct-Chat-and-Instant-Response"
                    />
                  </li>
                  <li>
                    <img
                      src="~/assets/imgs/AI-Matched-Job-Postings.svg"
                      loading="lazy"
                      alt="/AI-Matched-Job-Postings"
                    />
                  </li>
                  <li>
                    <img
                      src="~/assets/imgs/100_-Data-Privacy.svg"
                      loading="lazy"
                      alt="100%-Data-Privacy"
                    />
                  </li>
                </ul>
              </div>
              <div class="jobs-list">
                <ul class="startups-logo-list">
                  <li>
                    <div class="features-title">
                      Relevant Candidates<br />(AI Algorithm)
                    </div>
                  </li>
                  <li>
                    <div class="features-title">
                      Direct Chat and Instant <br />
                      Response
                    </div>
                  </li>
                  <li>
                    <div class="features-title">
                      Conduct Video <br />
                      Interviews
                    </div>
                  </li>
                  <li>
                    <div class="features-title">100% Data Privacy</div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="autocomplete1">
              <a
                class="btn default-btn button-hire-now-seamless"
                @click="window.scrollTo(0, 0)"
                >Hire Now</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>
    <!----startup end----------->

    <!----startup start----------->
    <section class="recruiter-startup-section startup-section">
      <div class="container con-rec">
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
    <!----startup end----------->

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
      link: [
        {
          rel: 'canonical',
          href: 'https://hirect.in/connect',
        },
      ],
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
  mounted() {
    this.window = window;
  },
  data() {
    return {
      window: null,
      // RecruiterLoginDialogVisible: false,
      isUserPositionError: false,
      positionOptions: [
        {
          value: 'HR',
          label: 'HR',
        },
        {
          value: 'Founder/CEO',
          label: 'Founder/CEO',
        },
        {
          value: 'CTO',
          label: 'CTO',
        },
        {
          value: 'CMO',
          label: 'CMO',
        },
        {
          value: 'COO',
          label: 'COO',
        },
        {
          value: 'Others',
          label: 'Others',
        },
      ],
      faqList: [
        {
          id: 1,
          question: 'How do I hire the best candidate for a job?',
          answer:
            "The Hirect app has over 3 million job seekers spread across 1200+ job categories. Hirect's AI algorithm selects the best-fit candidates for a position, helping recruiters connect directly with candidates who have relevant experience and the desired skills.",
          isShown: false,
        },
        {
          id: 2,
          question:
            'Hiring for multiple roles can be expensive; how can I save money?',
          answer:
            'Traditional hiring requires the hiring manager or startup founder to connect with consultancies that provide a larger pool of candidates. This, however, comes at a high cost. The Hirect app provides solutions to these issues. Hirect initially operates on a FREEMIUM model for recruiters, allowing them to use all features without restrictions. After the plan has been exhausted, Hirect charges recruiters a small fee for initiating chats with additional job seekers. Nonetheless, hiring on Hirect is effective yet economical.',
          isShown: false,
        },
        {
          id: 3,
          question: 'How soon can I start hiring for my job posting?',
          answer:
            'Hirect helps recruiters initiate any hiring process within a day. Once a recruiter is verified, the job postings go live instantaneously. Consequently, the AI algorithm filters the best-fit candidates based on the requirements and allows recruiters to connect directly with relevant and active job seekers.',
          isShown: false,
        },
        {
          id: 4,
          question: 'How is Hirect different from other traditional portals?',
          answer:
            'The traditional hiring process can be long-winded, expensive and inefficient. Hirect simplifies the entire hiring process. It is the best among job hiring apps; it lets the hiring manager or recruiter chat directly with AI-matched job seekers that have relevant skills and experience. Since no consultants are involved, the hiring process is seamless and extinguishes the possibility of spam or scam calls. Moreover, recruiters can schedule a video interview within the app without exchanging any of their personal information.',
          isShown: false,
        },
        {
          id: 5,
          question: 'Are there any job posting limitations for recruiters?',
          answer:
            'Recruiters who have signed up and are verified are entitled to a 3-day complimentary trial for 30 chat initiations per day. After the trial period, they are subscribed to the FREEMIUM plan allowing 5 free chats a day. If the hiring manager/recruiter wants to chat with more candidates in a day, they can avail of a subscription to their chosen plan. For further details, check out the <a href="/product-pricing">product and pricing</a> of Hirect.',
          isShown: false,
        },
        {
          id: 6,
          question:
            'What if a recruiter has special requirements? Who should they reach out to?',
          answer:
            'If a recruiter has any special requirements, they can write to: <a href="mailto:sales@hirect.in">sales@hirect.in</a>.',
          isShown: false,
        },
      ],
      getUserInf: {
        userPosition: '',
      },
      stepFeedData: [
        {
          step: 1,
          imageSrc: 'step-image.png',
          title: 'Build a Profile',
        },
        {
          step: 2,
          imageSrc: 'ic_work.png',
          title: 'Post a Job in 5 Minutes',
        },
        {
          step: 3,
          imageSrc: 'recruiter-msg.png',
          title: 'Chat Directly with Relevant Candidates',
        },
      ],
    };
  },

  methods: {
    scrollToTop() {
      this.window.scrollTo({ top: 0, behavior: 'smooth' });
    },
  },
  jsonld() {
    return {
      '@context': 'https://schema.org/Organization',
      '@type': 'JobPosting',
      title: 'Job Posting for Employers',
      description:
        'Free Job Portal connects highly matching jobseekers. Chat directly in-app and get the best candidates. Download Hirect to post a job for free online.',
      hiringOrganization: {
        '@type': 'Organization',
        name: 'Hirect',
        sameAs: 'https://www.hirect.in/',
        logo: 'https://www.hirect.in/_nuxt/img/hirect-logo.130906c.png',
      },
      // eslint-disable-next-line no-dupe-keys
      '@context': 'https://schema.org',
      // eslint-disable-next-line no-dupe-keys
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: '1',
          name: 'Features',
          item: 'https://www.hirect.in/connect',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.autocomplete1 {
  text-align: center;
  margin-top: 64px;
}

.recruiter-banner-details h3.title-md {
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
  width: 432px;
  border-radius: 15px;
}

.hire-now h2 {
  height: 40px;
  left: 130px;
  padding-bottom: 120px;
  font-weight: 700;
  font-size: 34px;
}

.hire-now p {
  width: 550px;
  margin-bottom: 32px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #76787a;
  text-align: justify;
}

.hire-now-img {
  border-radius: 15px;
}

.job-available-section,
.startup-section {
  padding-bottom: 102px;
}

.startups-logo-list {
  padding: 0;
  margin: 0;
  list-style: none;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 20% 20% 20% 20%;
  grid-column-gap: 5%;
  justify-content: space-between;
  justify-items: center;
}

.startup-section-heading {
  width: 100%;
  max-width: 75%;
  margin: auto;
  text-align: center;
}

.recruiter-startup-section .startups-logo {
  padding-top: 60px;
}

.button-hire-now,
.button-hire-now-seamless {
  border-radius: 100px;
  background: #2ce2a2;
  padding: 10px 40px;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
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
  margin-bottom: 25px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #76787a;
  text-align: justify;
}

.Schedule-call {
  background: #ffffff;
  box-shadow: 6px 6px 30px rgba(109, 141, 173, 0.25);
  border-radius: 24px;
  max-width: 476px;
  position: relative;
  height: 572px;
  // left: 25%;
  margin-left: auto;
  padding: 20px 15px 30px;
}

.enterprise-hiring {
  position: relative;
  left: 15%;
  max-width: 476px;
  margin-top: 34px;
}
.enterprise-hiring a {
  font-weight: 600;
  color: #015a5b;
}
.enterprise-hiring a:hover {
  color: #015a5b;
}

.features-title {
  font-weight: 700;
  text-align: center;
  margin-top: 25px;
}

// Media Query for Mobile Responsiveness
@media only screen and (min-width: 300px) and (max-width: 1200px) {
  .recruiter-banner-details h3.title-md {
    font-size: 62px;
    width: auto;
  }

  .recruiter-banner-details p {
    width: auto;
    height: auto;
    margin-bottom: 20px;
    font-size: 14px;
  }

  .recruiter-banner-img {
    width: auto;
    background: none;
  }

  .enterprise-hiring {
    left: 0%;
    max-width: initial;
    margin-bottom: 50px;
  }

  .Schedule-call {
    height: 586px;
  }

  .hire-now h2 {
    height: auto;
    left: 0;
    padding-bottom: 28px;
    font-size: 32px;
  }

  .hire-now p {
    width: auto;
    font-size: 14px;
    line-height: 22px;
  }

  .job-available-section,
  .startup-section {
    padding-bottom: 80px;
  }

  .startup-section-heading {
    max-width: initial;
  }

  .recruiter-banner {
    padding: 100px 0;
    padding-bottom: 30px;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) {
  .recruiter-banner-details h3.title-md {
    font-size: 60px;
  }

  .Schedule-call {
    max-width: 415px;
  }
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
  .recruiter-banner-details h3.title-md {
    font-size: 58px;
    line-height: 58px;
  }

  .recruiter-banner-details p {
    font-size: 13px;
    line-height: 21px;
  }

  .Schedule-call {
    max-width: 380px;
  }

  .startups-logo-list {
    li img {
      height: 230px;
    }
  }

  .features-title {
    font-size: 15px;
  }

  .question-block {
    padding: 15px;
    font-size: 15px;
  }
}

@media only screen and (min-width: 940px) and (max-width: 991px) {
  .con-rec {
    max-width: 880px;
  }
}

@media only screen and (min-width: 875px) and (max-width: 940px) {
  .con-rec {
    max-width: 780px;
  }

  .Schedule-call {
    max-width: 350px;
  }

  .startups-logo-list li img {
    height: 200px;
  }
}

// Mobile view
@media only screen and (min-width: 300px) and (max-width: 767px) {
  .recruiter-banner {
    padding: 40px 0;
    padding-bottom: 30px;
  }

  .direct-row {
    flex-direction: column-reverse;
  }

  #keyhiring {
    display: none;
  }

  .Schedule-call {
    margin: auto;
    margin-top: 30px;
    max-width: 470px;
  }

  .button-sm {
    margin: 32px 75px;
    width: auto;
  }

  .hire-now h2 {
    font-size: 30px;
  }

  .recruiter-section {
    padding-bottom: 40px;
  }

  .recruiter-banner-details,
  .hire-now,
  .hire-now-img,
  .startup-section-heading:last-child {
    width: 100%;
    max-width: 470px;
    margin: auto;
  }

  .hire-now-img:last-child {
    margin-bottom: 30px;
  }
}

@media only screen and (min-width: 481px) and (max-width: 600px) {
  .recruiter-banner-details,
  .hire-now,
  .hire-now-img,
  .startup-section-heading:last-child,
  .Schedule-call {
    max-width: 440px;
  }

  .recruiter-banner-details h3.title-md {
    font-size: 56px;
    line-height: 58px;
  }

  .hire-now h2 {
    font-size: 28px;
  }
}

@media only screen and (min-width: 300px) and (max-width: 481px) {
  .recruiter-banner {
    padding: 40px 0;
    padding-bottom: 30px;
  }

  .hire-now h2 {
    font-size: 28px;
  }

  .hire-now p {
    width: auto;
    font-size: 15px;
    line-height: 20px;
  }

  .recruiter-banner-details,
  .hire-now,
  .hire-now-img,
  .startup-section-heading:last-child,
  .Schedule-call {
    max-width: 380px;
  }

  .recruiter-banner-details h3.title-md {
    font-size: 50px;
    line-height: 50px;
    height: auto;
  }

  .recruiter-banner-details p {
    line-height: 20px;
    font-size: 13px;
    text-align: start;
  }

  .recruiter-banner-img {
    height: auto;
  }
}

@media only screen and (min-width: 300px) and (max-width: 440px) {
  .recruiter-banner-details p {
    text-align: start;
  }

  .recruiter-banner-details,
  .hire-now,
  .hire-now-img,
  .startup-section-heading:last-child,
  .Schedule-call {
    max-width: 350px;
    text-align: center;
  }

  .recruiter-banner {
    // padding: 80px 0;
    padding-bottom: 30px;
  }

  .recruiter-banner-details h3.title-md {
    font-size: 47px;
    line-height: 47px;
  }
}
</style>
