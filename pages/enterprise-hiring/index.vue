<template>
  <div class="wrapper">
    <Header />
    <!----enteriprise-hiring-section start----------->
    <section class="enteriprise-hiring-section">
      <div class="enteriprise-hiring-banner">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="px-0.5 py-0.5">
                <div class="enteriprise-hiring-banner-details">
                  <h3 class="title-md">
                    Enterprise <span style="color: #2ce2a2">Hiring </span>- To
                    meet<br />
                    large-scale hiring requirements
                  </h3>
                  <p>
                    Hirect's enterprise hiring services are ideal for recruiters
                    who need to fill multiple roles or for recruiters looking to
                    quickly expand their teams. The enterprise hiring services
                    account for the provision of a designated professional in
                    charge of meeting all the hiring requirements. The AI
                    algorithm, combined with personalized recommendations,
                    enables recruiters to efficiently build a skilled workforce.
                  </p>
                  <div class="enteriprise-hiring-banner-img">
                    <img
                      src="~/assets/imgs/strategic-partnership.png"
                      loading="lazy"
                      alt="section image"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="Schedule-call">
                <ConnectForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!----end enteriprise-hiring-section start----------->

    <!----enteriprise-AI-platform-section start----------->
    <section class="enteriprise-AI-platform-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="enteriprise-AI-platform-heading">
              <h3 class="title-md">
                What are the benefits of Enterprise Hiring Services?
              </h3>
            </div>
            <MultiStepSegment :stepData="stepFeedData" />
          </div>
        </div>
        <div class="row border-bottom-40"></div>
        <a
          class="btn default-btn button-lg button-hire-now-seamless"
          @click="scrollToTop"
          >Hire Now</a
        >
      </div>
    </section>
    <!----enteriprise-AI-platform-section end----------->

    <!----enteriprise-Offerings-section start----------->
    <section class="enteriprise-Offerings-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h3 class="title-sm">Enterprise Hiring Service Offerings</h3>
            <div class="following-companies-jobs-list">
              <ul class="available-list">
                <li>
                  <span>Dedicated Account Managers</span>
                </li>
                <li>
                  <span>Customized Candidate Recommendations</span>
                </li>
                <li>
                  <span>Extensive Filtration Process</span>
                </li>
                <li>
                  <span>Tailor-Made Pricing Model</span>
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
                Recruiters that have employed Enterprise
                <span style="color: #2ce2a2">Hiring </span>Services
              </h3>
              <div class="following-companies-jobs-list">
                <ul class="following-companies-startups-logo-list">
                  <li>
                    <img
                      src="~/assets/imgs/websites-logo/Byju_s.png"
                      loading="lazy"
                      alt="Byjus"
                    />
                  </li>
                  <li>
                    <img
                      src="~/assets/imgs/websites-logo/hp_logo.png"
                      loading="lazy"
                      alt="HP"
                    />
                  </li>
                  <li>
                    <img
                      src="~/assets/imgs/websites-logo/emudra_logo.png"
                      loading="lazy"
                      alt="EMudra"
                    />
                  </li>
                  <li>
                    <img
                      src="~/assets/imgs/websites-logo/bajajfinserve.png"
                      loading="lazy"
                      alt="Bajaj Finserve"
                    />
                  </li>
                  <li>
                    <img
                      src="~/assets/imgs/websites-logo/technook.png"
                      loading="lazy"
                      alt="Technook"
                    />
                  </li>
                  <!-- <li>
                    <img  src="~/assets/imgs/websites-logo/Udaan.png" loading="lazy" alt="" />
                  </li> -->
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
/* eslint-disable no-dupe-keys */
export default {
  components: {},
  head() {
    return {
      title: 'Bulk Hiring | Mass Recruitment | Enterprise Hiring',
      link: [
        {
          rel: 'canonical',
          href: 'https://hirect.in/enterprise-hiring',
        },
      ],
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Bulk Hiring, Mass Recruitment solution, Enterprise Hiring. Make your next Enterprise hiring on Hirect. Post a job for free. Post a Job With Ease ',
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
          question: 'How can I hire the best candidate for my job?',
          answer:
            'More than 2.8 Million job seekers on the Hirect app, spread across 70+ categories. The AI matching tool of Hirect filters only the best-fit candidates for the hiring post so that the recruiter can connect directly with candidates with experience and skills.',
          isShown: false,
        },
        {
          id: 2,
          question: 'Hiring in bulk can be expensive; how can I save money?',
          answer:
            'In traditional hiring, the hiring manager or the founder who posts the startup jobs will have to connect with consultancies that can provide a larger pool of candidates. However, this also incurs enormous expenses. Hirect app is the solution for this problem. It allows the recruiters to post the job vacancy for free. The Hirect App runs on a FREEMIUM model for recruiters so that they can use all its features without limitations. However, Hirect will charge a nominal fee to the recruiters for initiating chats with more Job Seekers than provided in the FREEMIUM plan. And the charges are pretty nominal as compared to consultancies.',
          isShown: false,
        },
        {
          id: 3,
          question: 'How soon can I start hiring for my job posting?',
          answer:
            'The job post will be made live quickly, and AI will filter the best-fit candidates and match them with your job posting. You can connect with them directly and start chatting instantly. You can begin hiring candidates within a day.',
          isShown: false,
        },
        {
          id: 4,
          question: 'How is Hirect different from other traditional portals?',
          answer:
            'The traditional hiring process can be long-winded, leading to candidates leaving mid-way in frustration. However, Hirect simplifies and streamlines the entire hiring process. It is the best among job hiring apps, it lets the hiring manager or recruiter connect directly with the job seeker and chat with them instantly. Since no consultants are involved, the entire process of hiring for the posted company jobs will be 100% secure with no spam or scam calls. They can also schedule a video interview within the app without exchanging any of their personal information.',
          isShown: false,
        },
        {
          id: 5,
          question: 'What are the job posting limitations for the Hirer?',
          answer:
            'Recruiters who have signed up and been onboarded with the app are entitled to a 3-day complimentary trial for 30 chat initiations per day. After the trial, they will be upgraded to the FREEMIUM plan of 5 free chats a day. If the hiring manager/ recruiter wants to chat with more candidates in a day, they would have to pay a nominal fee or subscription as per the plan they choose. For further details, check out the product and pricing of Hirect.',
          isShown: false,
        },
        {
          id: 6,
          question:
            'What if I have some customized requirements? Who should I reach out to?',
          answer:
            'If the recruiter has any custom requirements, they can write to: sales@hirect.in.',
          isShown: false,
        },
      ],
      getUserInf: {
        userPosition: '',
      },
      stepFeedData: [
        {
          step: 1,
          imageSrc: 'Cost-effective.png',
          title: 'Cost-Effective',
        },
        {
          step: 2,
          imageSrc: 'Time-efficient.png',
          title: 'Time-Efficient',
        },
        {
          step: 3,
          imageSrc: 'Increase productivity.png',
          title: 'Personalized Recommendations',
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
      '@context': 'https://schema.org',
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
.border-bottom-40 {
  min-height: 40px;
}
.enteriprise-following-companies-section h3.title-sm {
  color: #0e101a;
  font-size: 30px;
  font-weight: bold;
  line-height: normal;
  text-align: center;
  margin-bottom: 65px;
  margin-top: 100px;
}
.enteriprise-hiring-banner-details h3.title-md {
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;
  min-width: 100%;
}

.enteriprise-hiring-section {
  padding-bottom: 170px;
}

.enteriprise-AI-platform-section {
  text-align: center;
  padding-bottom: 130px;
}

.enteriprise-hiring-banner {
  padding: 50px 0;
}

// Hire Chat Section
.enteriprise-Offerings-section {
  background-color: #f2f4f8;
  padding-bottom: 5%;
  padding-top: 5%;
}

// end Hire Chat Section
// jobs-available
.job-available-section,
.enteriprise-following-companies-section {
  height: 100%;
  padding-bottom: 4%;
}

.available-list li {
  border-radius: 24px;
  background-color: #ffffff;
  display: flex;
  justify-content: space-evenly;
  padding: 0px 14px;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  align-items: center;
  justify-content: center;
  max-width: 213px;
  height: 191px;
  // box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);
}

.available-list li:hover {
  transform: scale(1.1);
  box-shadow: 3px 2px 25px 1px rgba(0, 0, 0, 0.25);
}

.available-list {
  padding: 0;
  margin: 0 -47px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.available-list li {
  margin-bottom: 85px;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175);
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
  // cursor: pointer;
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

.button-hire-now-seamless {
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

.enteriprise-hiring-banner-details {
  width: 100%;
}

.enteriprise-hiring-banner-details p {
  margin-bottom: 32px;
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
  height: 100%;
  left: 25%;
  // margin-top: 5%;
}

// end following-companies-startups-logo

@media only screen and (max-width: 768px) {
  .row {
    flex-direction: column;
  }

  .enteriprise-hiring-banner {
    padding: 80px 0;
  }

  .enteriprise-AI-platform-heading {
    padding-top: 20px;
  }

  .Schedule-call {
    left: auto;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1199px) {
  .enteriprise-hiring-banner-details p {
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
  h3.title-md {
    font-size: 23px !important;
    margin-bottom: 25px;
  }
  .available-list {
    flex-direction: column;
    align-items: center;
    margin: 0 0px;
  }
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
  .enteriprise-hiring-section {
    padding-bottom: 20px;
  }

  .enteriprise-hiring-banner h1 {
    margin-bottom: 0;
    text-align: center;
    margin-top: 30px;
  }

  .enteriprise-hiring-banner h1 br {
    display: none;
  }

  .enteriprise-hiring-banner {
    padding: 60px 0;
  }

  .enteriprise-AI-platform-heading {
    padding-top: 0;
    padding-bottom: 10px;
  }

  .enteriprise-hiring-banner-details {
    padding-bottom: 50px;
    text-align: center;
    margin: auto;
  }

  .Schedule-call {
    padding: 20px 15px 30px;
    margin-top: 20px;
  }

  .enteriprise-hiring-banner-details p {
    font-size: 16px;
    line-height: 24px;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1299px) {
  .row {
    flex-direction: row;
  }

  .enteriprise-hiring-banner {
    padding: 80px 0;
  }

  .enteriprise-AI-platform-heading {
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
    padding: 40px 20px 30px;
  }
}
</style>
