<template>
  <div class="wrapper">
    <Header />
    <section class="form-search-section">
      <div class="col-md-12" style="margin-top: 5%">
          <Search :page="'functionalAreas'"/>
      </div>
    </section>
    <section class="top-talent-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h3 class="title-sm">Top Talent across India</h3>
            <div class="jobs-list">
              <ul class="available-list">
                <li>
                  <span
                    ><span>Bangalore</span> <br /><br /><span
                      class="candi-value"
                      >10K Candidate</span
                    ></span
                  >
                </li>
                <li>
                  <span
                    >Delhi-NCR<br /><br /><span class="candi-value"
                      >9K Candidate
                    </span></span
                  >
                </li>
                <li>
                  <span
                    >Pune<br /><br /><span class="candi-value"
                      >8K Candidate
                    </span></span
                  >
                </li>
                <li>
                  <span
                    >Mumbai <br /><br />
                    <span class="candi-value">7K Candidate </span></span
                  >
                </li>
                <li>
                  <span
                    >+More <br /><br /><span class="candi-value"
                      >+100K Candidate</span
                    ></span
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="trending-cat-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h3 class="title-sm">Trending Categories across India</h3>
            <div class="jobs-list">
              <ul class="available-list">
                <li>
                  <span
                    ><span>IT Jobs</span> <br /><br /><span class="candi-value"
                      >10K Candidate</span
                    ></span
                  >
                </li>
                <li>
                  <NuxtLink to='skills/SalesandBDProfessionals'>
                    <span>Sales<br /><br />
                      <span class="candi-value"
                        >10K Candidate
                      </span>
                    </span>
                  </NuxtLink>
                </li>
                <li>
                  <span
                    >Operation<br /><br /><span class="candi-value"
                      >10K Candidate
                    </span></span
                  >
                </li>
                <li>
                  <span
                    >Product Management <br /><br />
                    <span class="candi-value">10K Candidate </span></span
                  >
                </li>
                <li>
                  <span
                    >+More <br /><br /><span class="candi-value"
                      >+100K Candidate</span
                    ></span
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <FunctionalAreas />
    </section>

    <section class="faq-section faq">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="faq-heading">
              <h3 class="title-md">FAQs</h3>
              <faq :FaqData="faqList" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import FunctionalAreas from '../../components/FunctionalAreas.vue';

export default {
  props: {},
  area: { type: String, required: true },
  components: {
    FunctionalAreas,
  },
  head() {
    return {
      title: 'Latest Job Openings in Startups | Best Job Search App - Hirect',
      link: [
        {
          rel: 'canonical',
          href: 'https://unhirect.in/search-job-seeker',
        },
      ],
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Free Job app enables candidates to chat directly in-app and get the relevant jobs. Download Hirect and apply to jobs online.',
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
          question: 'What are the five components of the job search cycle?',
          answer:
            'The registration process on Hirect allows job seekers to upload their resumes. Nonetheless, uploading a resume is not mandatory since the profile covers all the necessary information a job seeker chooses to highlight. A job seeker’s profile can get verified in the absence of a resume as well.',
          isShown: false,
        },
        {
          id: 2,
          question: 'What are the typical steps in the job search process?',
          answer:
            'While most traditional job portals in India charge job seekers to find a relevant job, Hirect allows job seekers to build their profiles and chat with verified recruiters for free.',
          isShown: false,
        },
        {
          id: 3,
          question: 'Which industry is hiring the most in India?',
          answer:
            'All the recruiters who post the jobs on this app are 100 % verified.<p> Furthermore,</p> the AI algorithm ensures that the candidates are matched with active recruiters offering jobs that best suit the job seeker’s skill set and experience. Since there are no consultants involved, job seekers on Hirect are completely immune to spam or scam calls.',
          isShown: false,
        },
        {
          id: 4,
          question:
            'Would job seekers need to follow up with the recruiter to get a response or feedback?',
          answer:
            'The Hirect app allows job seekers to connect directly with hiring managers who could end up being their prospective boss. Job seekers can always follow up with the recruiter using our direct-chat feature. Job seekers can also schedule video interviews, and get feedback instantly.',
          isShown: false,
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
h3.title-sm {
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 32px;
  text-align: center;
  color: #000000;
  margin-top: 86px;
}
.faq-heading {
  width: 100%;
  max-width: 75%;
  margin: auto;
  text-align: center;
  padding-bottom: 20px;
  padding-top: 35px;
}
.faq-section {
  margin-bottom: 104px;
}
.trending-cat-section {
  margin-bottom: 134px;

  .hire-chat {
    height: 547px;
    background-color: #f4fafd;
  }

  .hire-chat .row {
    align-items: center;
  }

  .hire-now h2 {
    color: #0e101a;
    font-size: 64px;
    font-weight: bold;
    line-height: 66.8px;
    margin: 30px 0;
  }

  .hire-now {
    margin-top: 56px;
  }

  .hire-now p {
    color: #000000;
    font-size: 16px;
    font-weight: normal;
    line-height: 27px;
    margin-bottom: 30px;
  }

  .next-img {
    margin-left: -168px;
  }
}
.hire-chat-section {
  h3.title-sm {
    color: #0e101a;
    font-size: 40px;
    font-weight: bold;
    line-height: normal;
    text-align: center;
    margin-bottom: 45px;
  }
}
.Jobs-in-city {
  .jobs-list {
    startups-logo-list {
      padding: 0;
      margin: 50px 0;
      list-style: none;
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
      align-items: center;
    }

    .startups-logo-list li {
      border-radius: 5px;
      // cursor: pointer;
      background-color: #ffffff;
      display: flex;
      padding: 0px 14px;
      color: #000000;
      align-items: center;
      justify-content: center;
      widows: 100px;
      height: 50px;
      box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
    }
  }
}

.jobs-list {
  .city-logo {
    padding: 0;
    margin: 50px 0;
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    align-items: center;
  }

  .available-list li {
    &:hover {
      transform: scale(1.1);
    }
    border-radius: 33px;
    cursor: default;
    background-color: #ffffff;
    display: flex;
    color: #000000;
    font-size: 18px;
    line-height: 20px;
    align-items: center;
    justify-content: center;
    max-width: 244px;
    padding: 30px;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;

    .candi-value {
      font-size: 14px;
      color: #76787a;
    }
  }

  .available-list {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    justify-content: space-between;
    grid-column-gap: 28px;
    text-align: center;
    font-weight: 600;
  }
  .available-list li {
    width: 228px;
    height: 128px;
    margin-bottom: 30px;
    cursor: pointer;
  }

  .available-list li:nth-child(6n) {
    margin-right: 0;
  }
  .candi-value {
    font-size: 14px;
    color: #76787a;
  }
}

// Mobile Responsiveness //

@media only screen and (min-width: 768px) and (max-width: 1024px) {
  .jobs-list .available-list {
    padding: 0px;
    margin: 0px;
    display: flex;
    grid-column-gap: 12px;
    text-align: center;
    font-weight: 600;
}
.jobs-list .available-list li {
    height: 128px;
    cursor: pointer;
    font-size: 14px;
}

.faq-heading {
    margin: auto;
    text-align: center;
    padding-top: 35px;
    max-width: unset;
}
}
@media only screen and (min-width: 300px) and (max-width: 767px) {
  h3.title-sm {
    font-size: 28px;
    margin-top: 40px;
}
.jobs-list .available-list {
    padding: 0;
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    font-weight: 600;
    flex-wrap: wrap;
}
.trending-cat-section {
    margin-bottom: 0px;
}
.faq-heading {
    margin: auto;
    text-align: center;
    padding-top: 35px;
    max-width: unset;
}
}
</style>
