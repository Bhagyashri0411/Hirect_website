<template>
  <div class="wrapper">
    <Header />
    <section class="about-section">
      <h1 class="about-heading">
        <strong
          >About <span style="color: rgb(44, 226, 162)">Hirect</span></strong
        >
      </h1>

      <div class="container">
        <div class="row parent-row">
          <div class="col">
            <img src="~/assets/imgs/img1.png" alt="" />
          </div>
          <div class="col">
            <div class="row" style="padding-bottom: 21px">
              <img src="~/assets/imgs/img2.png" alt="" />
            </div>
            <div class="row">
              <img src="~/assets/imgs/img3.png" alt="" />
            </div>
          </div>
          <div class="col">
            <img src="~/assets/imgs/img4.png" alt="" />
          </div>
        </div>

        <div class="mobile-hero">
          <img src="~/assets/imgs/img2.png" alt="" />
        </div>
      </div>

      <p>
        Hirect, the chat-based hiring platform, is designed for high-growth
        startups. It connects hiring managers and recruiters<br />
        directly with job seekers without consultants and with 100% data
        privacy. Hirect's intelligent AI-matching algorithms, inbuilt<br />
        chat, and verification features make it possible to schedule video
        interviews within the hiring app. It connects candidates<br />
        with decision-makers quickly. This mobile-first job app enables quick
        responses, reducing the timeline to get feedback.
      </p>
    </section>

    <section class="meet-team-section">
      <div class="container container-block">
        <div class="row">
          <div class="col-md-12">
            <h1 style="text-align: center; margin-bottom: 35px">
              <strong
                >Meet The
                <span style="color: rgb(44, 226, 162)">Team</span></strong
              >
            </h1>
            <div class="meet-team-list">
              <PhotoCard :members-list="peopleList" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="milestone-section">
      <h1><strong>Milestones</strong></h1>

      <div class="container">
        <div class="row top-row">
          <div class="col-md-4" style="text-align: -webkit-center">
            <div class="row search-img py-4">
              <img src="~/assets/imgs/search.png" alt="icon" />
            </div>
            <div class="row milestone-row py-4">
              <div class="col-md-6">
                <h2>
                  <strong
                    ><span style="color: rgb(44, 226, 162)">150K+</span></strong
                  >
                </h2>
              </div>
              <div class="col-md-6" style="font-size: 14px">
                Verified Recruiters
              </div>
            </div>
          </div>
          <div class="col-md-4" style="text-align: -webkit-center">
            <div class="row search-img py-4">
              <img src="~/assets/imgs/box.png" alt="icon" />
            </div>
            <div class="row milestone-row py-4">
              <div class="col-md-6">
                <h2>
                  <strong
                    ><span style="color: rgb(44, 226, 162)">3M+</span></strong
                  >
                </h2>
              </div>
              <div class="col-md-6" style="font-size: 14px">
                Verified Candidates
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="milestone-section1">
      <h1 style="text-align: center; margin-bottom: 20px">
        <strong>Media Coverage</strong>
      </h1>
      <MediaCard :mediaList="mediaList" />
    </section>

    <!-- <div class="media-button">
            <button class="button1">View More</button>
        </div> -->
    <!----scan-app start----------->
    <GetAppPage :eventName="'in_aboutus_bottom'" />
    <!----scan-app end----------->
    <Footer />
    <DownloadModal v-show="showModal" @close-modal="showModal = false" />
  </div>
</template>

<script>
/* eslint-disable no-dupe-keys */
import DownloadModal from '~/components/DownloadModal.vue';
import MediaCard from '../../components/MediaCard.vue';

export default {
  components: {
    DownloadModal,
    MediaCard,
  },
  head() {
    return {
      title: 'About Us - Hirect ',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            "Hirect is India's best job search app for start-up hiring. Hirect connects the jobseekers with start-up founders and enables easy and direct hiring. ",
        },
      ],
    };
  },
  data() {
    return {
      showModal: false,

      mediaList: [
        {
          logo: 'BW-people-logo.jpg',

          imageSrc: 'publish1.jpg',

          headline:
            'Hirect’s Latest Feature Allows Users To Search For Jobs ‘Nearby’',

          date: '4 April, 2022',

          link: 'http://bwpeople.businessworld.in/article/Hirect-s-Latest-Feature-Allows-Users-To-Search-For-Jobs-Nearby-/15-06-2022-432807/',
        },

        {
          logo: 'myMobile.png',

          imageSrc: 'publish2.jpg',

          headline:
            'Hirect App Review: A well-balanced platform for both companies and job seekers, with impressive interface',

          date: '21 Feb, 2022',

          link: 'https://www.mymobileindia.com/hirect-app-review/#gsc.tab=0',
        },

        {
          logo: 'TOI_Logo.png',

          imageSrc: 'cxoImage.png',

          headline:
            'Importance of practicing environmental ethics in workplace',

          date: '16 May, 2022',

          link: 'https://timesofindia.indiatimes.com/blogs/voices/importance-of-practicing-environmental-ethics-in-workplace/',
        },
      ],

      peopleList: [
        {
          imgUrl: 'raj-das-Global-Co-Founder-CEO-of-Hirect-India.png',
          name: 'Raj Das',
          designation: 'Global Co-Founder and CEO of Hirect India',
          description:
            'Raj Das is the Global Co-Founder & CEO of Hirect India, which connects talents to startups without any middleman. At the company’s helm, Raj is responsible for overseeing end-to-end business operations, primarily the management of Product & Marketing in India. An IIT-Bombay alumnus, Raj brings a rich experience of 3-4 years in mobile internet space and has also mastered product management and user growth. Through Hirect, Raj strives to encourage youngsters to join startups and build wealth for the nation and themselves.',
        },

        {
          imgUrl: 'abhishek.png',
          name: 'Abhishek Singh',
          designation: 'Sr Vice President - Marketing',
          description:
            "Abhishek Singh is the Senior Vice President of Marketing at Hirect India. In addition to Digital, Creative, and Communication, he oversees the overall marketing strategy. He also handles brand positioning and advanced marketing innovation at Hirect. Mr. Singh has over 14 years of experience in the media and dot-com industries. As a marketing expert, he has built and scaled a few of India's best startups, including Via.com, CommonFloor.com, and Vakilsearch.com, among others. In addition to being a master of marketing automation, he is also a proficient growth hacker.",
        },
        {
          imgUrl: 'ramani.png',
          name: 'Ramani Ganesh',
          designation: 'Sr Vice President - Human Resources',
          description:
            'Ramani is responsible for directing the business strategy and human resources for Hirect. She has over fifteen years of HR experience in IT, import/export, and manufacturing. She holds a BBM from Bangalore University and MBA from IIM Calcutta and is certified by HRCI, USA, as a Global Professional HR (GPHR). Ramani is currently pursuing a Ph.D. in Human Resources and values continuous learning. She is also a voracious reader and traveler who believes that the environment and culture of an organization play an important role in employee motivation and productivity.',
        },
        {
          imgUrl: 'shantanu-pandey.png',
          name: 'Shantanu Pandey',
          designation: 'Sr Vice President - Business Development',
          description:
            'Shantanu Pandey is the Senior Vice President, Business Development at Hirect. He is a B. Tech graduate from Delhi Technological University (formerly known as Delhi College of Engineering). He is one of the initial members of the team, and he is responsible for increasing B2B growth. Shantanu also heads the strategic alliances at Hirect. Shantanu has around 3 years of work experience and has co-founded two other start-ups during his college days. He also loves to talk about the Indian start-up ecosystem. In addition, he is a devout feminist who believes in equal opportunity at work (and everywhere else).',
        },
        {
          imgUrl: 'abhishek-popli.png',
          name: 'Abhishek Popli',
          designation: 'Vice President - Business Development',
          description:
            "The Vice President-Business Development at Hirect, Abhishek Popli, was one of the few early members in charge of Hirect's offline and online channels, as well as establishing Hirect's offline presence in PAN India. Mr. Popli has over 5 years of experience in leadership and business development positions and is an expert in increasing the user base by over 50 times in various HealthTech, EdTech organizations in and outside India during his stint. He likes to exploit the possibilities of exploring the untapped market for the growth and expansion of the organization.",
        },
        {
          imgUrl: 'sanche-joao.png',
          name: 'Sanche Joao',
          designation: 'Vice President - Operations',
          description:
            'Sanche Joao, the Vice President-Operations at Hirect India, is a tenacious leader with a track record of transforming cultures into disciplined, performance-oriented teams by instituting a strong sense of accountability and by driving measurable process-oriented changes. She has previously spent over 10 years in Dubai working with corporates such as ITP Media Group where she led several key initiatives across Operations, Compliance, and Business Development. In her downtime, Sanche enjoys working on design initiatives. She is a foodie and is fascinated by micro-cuisines and exploring travel through food.',
        },
        {
          imgUrl: 'rajeev-ranjan.png',
          name: 'Rajeev Ranjan',
          designation: 'Associate Vice President - Digital Marketing',
          description:
            'Rajeev comes with a robust, 13 years of proven track record in Digital Marketing and Search Marketing with expertise in End-to-End performance marketing solutions to drive business growth. When it comes to Online marketing and analytics, Rajeev possesses strong skill sets in various verticals including, IT, Real Estate, Banking, FMCG, Healthcare, E-Commerce, and Education. Rajeev has also assisted global clientele - in EMEA, North America, and SEA regions, to build a robust digital presence.',
        },
        {
          imgUrl: 'manoj-golani.png',
          name: 'Manoj Goplani',
          designation: 'Associate Vice President - Design',
          description:
            'Manoj possesses more than 14 years of robust experience as a design professional with skillsets in Design - Advertising, UI/UX Design Solutions, and Product Development. Manoj has crafted and led corporate strategies for achieving the top-level goal. He comes with strong experience in working with business leaders and clientele from various geographies including EMEA, North America, and the Middle East across various verticals - FMCG, E-Commerce, Telecom, Interior Design Space, Healthcare, and Pharmaceuticals along with Life Sciences for the brand visibility and enhancing the brand presence along with product development and operations.',
        },
        {
          imgUrl: 'vishal-gupta.png',
          name: 'Vishal Gupta',
          designation: 'AVP - Product Management & Business Intelligence',
          description:
            'Vishal is currently working as the AVP- Product Management & Business Intelligence at Hirect. He is a Great Lakes Alumni and has 7 years of proven track record in Digital Marketing and Growth Hacking. Vishal has a strong background in data-driven marketing and decision making in diverse industries such as IT, Banking, E-Commerce, FoodTech, and Ed-Tech. With his interest and ability in solving real-world problems, he always likes to scout out for new challenges.',
        },
        {
          imgUrl: 'akanksha-tyagi.png',
          name: 'Akanksha Tyagi',
          designation: 'Manager - Influencer Marketing',
          description:
            'Akanksha Tyagi is currently leading the Influencer Marketing Department at Hirect. She is one of the initial members of the team. After working for 1 year in Business Development, she started the Influencer Marketing Department from scratch. She has extensive expertise in Content Creation and Marketing, thus facilitating Business Growth, Customer Acquisition and Retention. She has worked with 2500+ Influencers, bringing in 50M+ reach monthly. She has previously worked with Trell and Huawei Technologies India before joining Hirect.',
        },
        {
          imgUrl: 'simran-saswani.png',
          name: 'Simran Saswani',
          designation: 'Manager - Business Development',
          description:
            'Simran Saswani is currently the Manager-Business Development Department at Hirect. She is one of the initial members of the team. She has 4 years of work experience in the Leadership & Mentor profile. After joining Hirect as a Business Development Intern in 2020, she progressed to become a Business Development Executive and an Assistant Manager, and finally to her current position as the Manager. She is also skilled in communication, public speaking, teaching, Customer Relationship Management (CRM), Growth Strategies, Team Building and Management. A fashion designer by passion, Simran also loves to travel and explore new adventures.',
        },
      ],
    };
  },

  jsonld() {
    return {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      url: 'https://www.hirect.in/aboutus',
      potentialAction: {
        '@type': 'SearchAction',
        target:
          'https://www.hirect.in/aboutus/srp/results?query={search_term_string}',
        'query-input': 'required name=search_term_string',
      },

      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: '1',
          name: 'About us',
          item: 'https://www.hirect.in/aboutus/',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
/******* About Page ************/

.mobile-hero {
  display: none;
}

.milestone-section1 {
  height: auto;
}

.media-button {
  text-align: center;
}

.button1 {
  border-radius: 33px;
  height: 41px;
  width: 104px;
  background-color: white;
  margin-bottom: 41px;
}

.milestone-section {
  margin-top: 46px;
  margin-bottom: 41px;
  text-align: center;
}

.milestone-row {
  flex-direction: column;
  align-content: center;
}

.top-row {
  display: flex;
  justify-content: center;
}

.search-img {
  background-color: #f2f4f8;
  border-radius: 100%;
  height: 50px;
  width: 50px;
  align-content: center;
}

.parent-row {
  padding: 40px;
}

.about-heading {
  text-align: center;
  margin-bottom: 9px;
}

.about-section {
  padding: 60px 0;
}

.about-section p {
  color: #4d5358;
  font-size: 18px;
  font-weight: normal;
  line-height: 24px;
  margin-bottom: 15px;
  text-align: center;
}

// Meet Team
section.meet-team-section {
  // padding: 20px 0;
}

.meet-team-list {
  padding-left: 102px;
}

.meet-team-list ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
}

.meet-team-list ul li {
  width: 45.5%;
  margin: 30px 0;
  margin-right: 9%;
}

.meet-team-list ul li:nth-child(2n) {
  margin-right: 0;
}

// end Meet Team

/******* end About Page ************/

@media only screen and (min-width: 768px) and (max-width: 1299px) {
  .meet-team-list ul li {
    width: 47.5%;
    margin: 20px 0;
    margin-right: 5%;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1199px) {
  .about-section p {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 15px;
  }

  .meet-team-list ul li {
    width: 48%;
    margin: 20px 0;
    margin-right: 4%;
  }

  .about-section {
    padding: 60px 0 50px;
  }
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
  .about-section p br {
    display: none;
  }

  .about-section p {
    font-size: 15px;
    line-height: 22px;
  }

  .meet-team-list ul li {
    width: 49%;
    margin: 20px 0;
    margin-right: 2%;
  }
}

@media only screen and (min-width: 300px) and (max-width: 767px) {
  .parent-row {
    display: none;
  }

  .mobile-hero {
    display: block;
    padding: 10px;
  }

  .container-block {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .milestone-section1 {
    height: auto;
  }

  .about-section {
    padding: 35px 0;
  }

  .about-section p {
    font-size: 16px;
    padding: 15px;
    text-align: left;
  }

  .about-section p br {
    display: none;
  }

  .meet-team-list ul li {
    width: 100%;
    margin-right: 0;
    margin: 20px 0;
  }

  section.meet-team-section {
    padding: 20px 0 40px;
  }

  section.meet-team-section {
    text-align: center;
  }

  .meet-team-list {
    padding-left: 0px;
  }
}
</style>
