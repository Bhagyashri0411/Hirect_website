<template>
    <div class="wrapper">
        <Header />
        <div class="search">
            <Search :page="'l2'" />
        </div>
        <section class="hire-chat-section">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h3 class="title-sm"><span v-html="l1"></span> Categories across India</h3>
                        <div class="jobs-list">
                            <ul class="available-list">
                                <li v-for="(item, index) in functionalArea[l1]" :key="index"
                                    v-if="index != 'description'">
                                    <NuxtLink :to="`/hire/${l1}/${index}`" class="nuxtLink">
                                        <div><span>{{ index }}</span> <br /><br /><span class="candi-value">{{
                                                item['numberOfCandidates']
                                        }}+ Candidates</span>
                                        </div>
                                    </NuxtLink>
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
                        <h3 class="title-sm">Top Cities for {{ l1 }} in India</h3>
                        <div class="jobs-list">
                            <ul class="available-list">
                                <li>
                                    <NuxtLink :to="`/hire/candidates?skills&location=Bangalore`" class="nuxtLink">
                                        <span><span>Bangalore</span> <br /><br /><span class="candi-value">600K+
                                                Candidates</span></span>
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink :to="`/hire/candidates?skills&location=Delhi`" class="nuxtLink">
                                        <span>Delhi-NCR<br /><br /><span class="candi-value">500K+ Candidates
                                            </span></span>
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink :to="`/hire/candidates?skills&location=Pune`" class="nuxtLink">
                                        <span>Pune<br /><br /><span class="candi-value">247K+ Candidates
                                            </span></span>
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink :to="`/hire/candidates?skills&location=Ahmedabad`" class="nuxtLink">
                                        <span>Ahmedabad <br /><br />
                                            <span class="candi-value">62K+ Candidates </span></span>
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink :to="`/hire/candidates?skills&location=Hyderabad`" class="nuxtLink">
                                        <span>Hyderabad <br /><br />
                                            <span class="candi-value">270K+ Candidates </span></span>
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink :to="`/hire/candidates?skills&location=Noida`" class="nuxtLink">
                                        <span>Noida <br /><br />
                                            <span class="candi-value">130K+ Candidates </span></span>
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink :to="`/hire/candidates?skills&location=Mumbai`" class="nuxtLink">
                                        <span>Mumbai <br /><br />
                                            <span class="candi-value">343K+ Candidates </span></span>
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink :to="`/hire/candidates?skills&location=Gurgaon`" class="nuxtLink">
                                        <span>Gurgaon <br /><br />
                                            <span class="candi-value">150K+ Candidates </span></span>
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink :to="`/hire/candidates?skills&location=Chennai`" class="nuxtLink">
                                        <span>Chennai <br /><br />
                                            <span class="candi-value">156K+ Candidates </span></span>
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink :to="`/hire/candidates?skills&location=Kolkata`" class="nuxtLink">
                                        <span>Kolkata<br /><br />
                                            <span class="candi-value">130K+ Candidates </span></span>
                                    </NuxtLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div class="container">
                <div class="photo-card">
                    <h1 class="head-title">{{ l1 }} Jobs</h1>
                    <div>
                        <div class="head-description" v-html="functionalArea[l1]['description']['discription']"></div>
                        <div v-for="list in functionalArea[l1]['description']['titleList']" :key="list">
                            <div class="head-subtitle">{{ list.title1 }}</div>
                            <div class="head-description" v-html="list.titlepoint"></div>
                        </div>
                        <div class="head-description" v-html="functionalArea[l1]['description']['discription1']"></div>
                        <br />
                    </div>
                </div>
            </div>
        </section>

        <!-- <section class="faq-section faq">
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
        </section> -->
        <Footer />
    </div>
</template>
  
  <script>
import functionalArea from '../functional-area.json';

export default {
    created() {
        console.log(this.$route.params);
    },
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
            functionalArea,
            isUserPositionError: false,
            showModal: false,
            l1: this.$route.params.l2,
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
  .head-title {
      font-style: normal;
      font-weight: 700;
      font-size: 32px;
      line-height: 100%;
      color: #000000;
      margin-bottom: 60px;
      text-align: center;
  }
  
  .head-subtitle {
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 24px;
      color: #000000;
  }
  
  .head-description {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #686a6b;
      margin-bottom: 24px;
      text-align: justify;
  }
  
  .photo-card {
      color: rgb(77, 83, 88);
      font-size: 16px;
  }
  
  .nuxtLink {
      color: #0e101a;
      text-decoration: none;
      text-align: left;
  }
  
  .head-title {
      text-align: center;
  }
  
  .search {
      margin-top: 5%;
      margin-bottom: -3% !important;
  }
  
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
      margin-bottom: 5%;
  
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
      padding: 5%;
      box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
      inline-size: 90%;
      overflow-wrap: anywhere;
  
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
      //   justify-content: space-between;
      grid-column-gap: 28px;
      text-align: center;
      //   font-weight: 600;
      flex-wrap: wrap;
  
      &:after {
          flex: auto;
          content: "";
      }
  
      margin-left: 8%;
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
  
  @media only screen and (min-width: 300px) and (max-width: 767px) {
      .available-list li {
          width: 45%;
          height: 128px;
          margin-bottom: 30px;
      }
  
      .photo-card {
          padding: 5%;
      }
  }
  
  @media only screen and (min-width: 768px) and (max-width:1024px) {
      .search {
          margin-top: 13%;
          margin-bottom: -3% !important;
      }
  
      .photo-card {
          padding: 5%;
      }
  }
  </style>
  