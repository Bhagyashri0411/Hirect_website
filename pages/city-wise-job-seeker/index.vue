<!-- <template>
  <div class="wrapper">
    <Header />
    <section class="form-search-section">
      <div class="col-md-12">
        <div class="form-search">
          <div class="autocomplete">
            <div class="MuiAutocomplete-fullWidth" role="combobox" aria-expanded="false">
              <div class="location">
                <svg width="16" height="14" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.75" y="3.5" width="16.5" height="11.5" rx="1.375" stroke="#0E101A" />
                  <path
                    d="M4.625 3V1.75C4.625 1.05964 5.18464 0.5 5.875 0.5H12.125C12.8154 0.5 13.375 1.05964 13.375 1.75V3"
                    stroke="#0E101A" />
                </svg>
                <span class="label"> Front-end </span>
              </div>
            </div>
          </div>
          <div class="autocomplete">
            <div class="MuiAutocomplete-fullWidth" role="combobox" aria-expanded="false">
              <div class="location" style="border-right: 0">
                <svg width="16" height="16" style="margin-left: 10px" viewBox="0 0 20 22" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10.4812 20.9483L10.1959 21.3589L10.4777 21.5547L10.7618 21.3622L10.4812 20.9483ZM10.4812 0.50293C5.62858 0.50293 1.69434 4.43717 1.69434 9.28981H2.69434C2.69434 4.98945 6.18086 1.50293 10.4812 1.50293V0.50293ZM19.2681 9.28981C19.2681 4.43717 15.3339 0.50293 10.4812 0.50293V1.50293C14.7816 1.50293 18.2681 4.98945 18.2681 9.28981H19.2681ZM10.4812 20.9483C10.7618 21.3622 10.7619 21.3621 10.7621 21.362C10.7622 21.3619 10.7624 21.3618 10.7626 21.3616C10.7629 21.3614 10.7635 21.361 10.7641 21.3606C10.7654 21.3597 10.7671 21.3585 10.7694 21.357C10.7739 21.3539 10.7804 21.3494 10.7889 21.3436C10.8057 21.332 10.8301 21.3151 10.8616 21.2929C10.9247 21.2486 11.0162 21.1836 11.1321 21.099C11.3639 20.9298 11.6934 20.6823 12.0882 20.3667C12.8771 19.7361 13.9304 18.8303 14.9855 17.7306C17.0705 15.5572 19.2681 12.5182 19.2681 9.28981H18.2681C18.2681 12.1024 16.3222 14.8927 14.2639 17.0383C13.2472 18.098 12.2288 18.9741 11.4638 19.5856C11.0818 19.891 10.7639 20.1296 10.5425 20.2913C10.4318 20.3721 10.3453 20.4336 10.287 20.4745C10.2578 20.495 10.2357 20.5103 10.2211 20.5204C10.2139 20.5254 10.2085 20.5291 10.205 20.5314C10.2033 20.5326 10.2021 20.5334 10.2014 20.5339C10.201 20.5342 10.2008 20.5344 10.2006 20.5344C10.2006 20.5345 10.2006 20.5345 10.2006 20.5345C10.2006 20.5345 10.2007 20.5344 10.4812 20.9483ZM1.69434 9.28981C1.69434 12.4482 3.89374 15.4879 5.97556 17.6758C7.02992 18.7839 8.08253 19.7026 8.87083 20.344C9.26537 20.665 9.59468 20.9174 9.82621 21.0901C9.94199 21.1764 10.0334 21.2429 10.0963 21.2882C10.1278 21.3108 10.1522 21.3281 10.1689 21.3399C10.1773 21.3459 10.1838 21.3504 10.1883 21.3536C10.1906 21.3552 10.1923 21.3564 10.1936 21.3573C10.1942 21.3577 10.1947 21.3581 10.1951 21.3583C10.1953 21.3585 10.1955 21.3586 10.1956 21.3587C10.1957 21.3588 10.1959 21.3589 10.4812 20.9483C10.7666 20.5377 10.7666 20.5378 10.7667 20.5378C10.7666 20.5378 10.7666 20.5378 10.7666 20.5377C10.7665 20.5376 10.7662 20.5375 10.7658 20.5372C10.7651 20.5367 10.7639 20.5358 10.7621 20.5346C10.7587 20.5322 10.7533 20.5284 10.746 20.5232C10.7314 20.5129 10.7092 20.4972 10.68 20.4762C10.6215 20.4342 10.5349 20.3711 10.4241 20.2885C10.2024 20.1232 9.88432 19.8795 9.50196 19.5683C8.73647 18.9455 7.71735 18.0557 6.7 16.9865C4.63837 14.8198 2.69434 12.0303 2.69434 9.28981H1.69434ZM10.4808 12.5827C8.66134 12.5827 7.18848 11.1099 7.18848 9.2904H6.18848C6.18848 11.6622 8.10906 13.5827 10.4808 13.5827V12.5827ZM13.7732 9.2904C13.7732 11.1099 12.3003 12.5827 10.4808 12.5827V13.5827C12.8526 13.5827 14.7732 11.6622 14.7732 9.2904H13.7732ZM10.4808 5.99805C12.3003 5.99805 13.7732 7.47091 13.7732 9.2904H14.7732C14.7732 6.91863 12.8526 4.99805 10.4808 4.99805V5.99805ZM7.18848 9.2904C7.18848 7.47091 8.66134 5.99805 10.4808 5.99805V4.99805C8.10906 4.99805 6.18848 6.91863 6.18848 9.2904H7.18848Z"
                    fill="black" />
                </svg>

                <span class="label"> Bangalore </span>
              </div>
            </div>
          </div>
          <div class="autocomplete">
            <button type="button" class="start-hiring1">Start Hiring</button>
          </div>
        </div>
      </div>
    </section>
    <section class="top-talent-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h3 class="title-sm">Trending {{  $route.params.l1Value  }} Categories in Bangalore</h3>
            <div class="jobs-list">
              <ul class="available-list">
                <li v-for="(item, index) in l1[$route.params.l1Value]" :key="l1.id">
                  <NuxtLink :to="{ name: 'l3', params: { 'l1Value': $route.params.l1Value, 'l2Value': index } }">
                    <span><span>{{  index  }}</span> <br /><br /><span class="candi-value">10K Candidate</span></span>
                  </NuxtLink>
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
            <h3 class="title-sm">Trending Categories across Bangalore</h3>
            <div class="jobs-list">
              <ul class="available-list">
                <li>
                  <span><span>Design</span> <br /><br /><span class="candi-value">10K Candidate</span></span>
                </li>
                <li>
                  <span>Sales<br /><br /><span class="candi-value">10K Candidate
                    </span></span>
                </li>
                <li>
                  <span>Operation<br /><br /><span class="candi-value">10K Candidate
                    </span></span>
                </li>
                <li>
                  <span>Product Management <br /><br />
                    <span class="candi-value">10K Candidate </span></span>
                </li>
                <li>
                  <span>+More <br /><br /><span class="candi-value">+100K Candidate</span></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="other-top-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h3 class="title-sm">Other top Cities for {{  $route.params.l1Value  }} in India</h3>
            <div class="jobs-list">
              <ul class="available-list">
                <li>
                  <span><span>Hyderabad</span> <br /><br /><span class="candi-value">10K Candidate</span></span>
                </li>
                <li>
                  <span>Delhi-NCR<br /><br /><span class="candi-value">10K Candidate
                    </span></span>
                </li>
                <li>
                  <span>Pune<br /><br /><span class="candi-value">10K Candidate
                    </span></span>
                </li>
                <li>
                  <span>Mumbai <br /><br />
                    <span class="candi-value">10K Candidate </span></span>
                </li>
                <li>
                  <span>+More <br /><br /><span class="candi-value">+100K Candidate</span></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
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
import l1 from './functional-area.json';

export default {
  components: {},
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
      l1,
      faqList: [
        {
          id: 1,
          question: 'What makes Bangalore a paradise for jobseekers?',
          answer:
            'The registration process on Hirect allows job seekers to upload their resumes. Nonetheless, uploading a resume is not mandatory since the profile covers all the necessary information a job seeker chooses to highlight. A job seeker’s profile can get verified in the absence of a resume as well.',
          isShown: false,
        },
        {
          id: 2,
          question:
            'In Bangalore, which places provide the highest number of jobs for the job seekers? ',
          answer:
            'While most traditional job portals in India charge job seekers to find a relevant job, Hirect allows job seekers to build their profiles and chat with verified recruiters for free.',
          isShown: false,
        },
        {
          id: 3,
          question: 'How can I get a good job as a fresher in Bangalore?',
          answer:
            'All the recruiters who post the jobs on this app are 100 % verified. Furthermore, the AI algorithm ensures that the candidates are matched with active recruiters offering jobs that best suit the job seeker’s skill set and experience. Since there are no consultants involved, job seekers on Hirect are completely immune to spam or scam calls.',
          isShown: false,
        },
        {
          id: 4,
          question: 'What is the scope of startup jobs in Bangalore?',
          answer:
            'The Hirect app allows job seekers to connect directly with hiring managers who could end up being their prospective boss. Job seekers can always follow up with the recruiter using our direct-chat feature. Job seekers can also schedule video interviews, and get feedback instantly.',
          isShown: false,
        },
        {
          id: 5,
          question: 'Which are the top hiring companies in Bangalore?',
          answer:
            'The Hirect app allows job seekers to connect directly with hiring managers who could end up being their prospective boss. Job seekers can always follow up with the recruiter using our direct-chat feature. Job seekers can also schedule video interviews, and get feedback instantly.',
          isShown: false,
        },
        {
          id: 6,
          question: 'What are all the best jobs in Bangalore?',
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

.other-top-section {
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

  // .city-logo li {
  //   cursor: pointer;
  // }
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
    // line-height: 40px;
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
  flex-wrap: wrap;
}

.available-list li {
  width: 228px;
  height: 128px;
  margin-bottom: 30px;
}

.available-list li:nth-child(6n) {
  margin-right: 0;
}

.candi-value {
  font-size: 14px;
  color: #76787a;
  // line-height: 40px;
}
</style> -->
