<template>
  <div class="wrapper">
    <Header />
    <section class="about-section">
      <h1 class="about-heading">
        <strong>About <span style="color: rgb(44, 226, 162)">Hirect</span></strong>
      </h1>

      <div class="container">
        <div class="row parent-row">
          <div class="col">
            <img src="~/assets/imgs/img1.png" loading="lazy" alt="Image 1" />
          </div>
          <div class="col">
            <div class="row" style="padding-bottom: 21px">
              <img src="~/assets/imgs/img2.png" loading="lazy" alt="Image 2" />
            </div>
            <div class="row">
              <img src="~/assets/imgs/img3.png" loading="lazy" alt="Image 3" />
            </div>
          </div>
          <div class="col">
            <img src="~/assets/imgs/img4.png" loading="lazy" alt="Image 4" />
          </div>
        </div>

        <div class="mobile-hero">
          <img src="~/assets/imgs/img2.png" loading="lazy" alt="Image Mobile" />
        </div>
      </div>

      <p>Hirect was founded in 2018 as a direct hiring application.</p>

      <p>
        Our vision of virtually connecting the skill-oriented workforce with
        high-growth startups and SMEs has manifested into our service
        provisions. <br />
        Hirect's AI algorithm helps connect recruiters directly with relevant
        candidates equipped with desired skills and experience.
      </p>

      <p>
        Our philosophy has always been to simplify the hiring process. Hirect
        offers direct chat and video call features which <br />
        have enabled over 3M job seekers to connect directly with over 190K
        recruiters on our platform.
      </p>

      <p>
        Our commitment to offering a modern and effective solution to the
        outdated hiring process has allowed <br />recruiters and startups to
        efficiently improve their hiring process by connecting directly with
        candidates.
      </p>
    </section>

    <section class="meet-team-section">
      <div class="container container-block">
        <div class="row">
          <div class="col-md-12">
            <h2>
              <strong>Meet The
                <span style="color: rgb(44, 226, 162)">Team</span></strong>
            </h2>
            <div class="meet-team-list">
              <PhotoCard :members-list="peopleList" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="milestone-section">
      <h2 style="font-size: 60px;"><strong>Milestones</strong></h2>

      <div class="container">
        <div class="row top-row">
          <div class="col-md-4" style="text-align: -webkit-center">
            <div class="row search-img py-4">
              <img src="~/assets/imgs/search.png" loading="lazy" alt="icon" />
            </div>
            <div class="row milestone-row py-4">
              <div class="col-md-6">
                <h2>
                  <strong><span style="color: rgb(44, 226, 162)">190K+</span></strong>
                </h2>
              </div>
              <div class="col-md-6" style="font-size: 14px">
                Verified Recruiters
              </div>
            </div>
          </div>
          <div class="col-md-4" style="text-align: -webkit-center">
            <div class="row search-img py-4">
              <img src="~/assets/imgs/box.png" loading="lazy" alt="icon" />
            </div>
            <div class="row milestone-row py-4">
              <div class="col-md-6">
                <h2>
                  <strong><span style="color: rgb(44, 226, 162)">3.8M+</span></strong>
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

    <section class="Bengaluru-Office">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5981260167277!2d77.61025131514926!3d12.933531090880855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1599ebb05b63%3A0x751f37343a044d1b!2sHirect%20India%20-%20Startup%20Jobs%20%26%20Hiring!5e0!3m2!1sen!2sin!4v1657886405440!5m2!1sen!2sin"
                width="600" height="450" style="border: 0" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
          <div class="col-md-6">
            <div class="Bengaluru-list">
              <h1>Bengaluru Office</h1>
              <ul>
                <li>
                  <span>
                    <img src="~/assets/imgs/location.png" loading="lazy" alt="location" /></span>Salarpuria Tower-II,
                  2nd Floor, "B" Wing, Hosur Main Road,
                  Koramangala, Bengaluru - 560034.
                </li>
                <li>
                  <span><img src="~/assets/imgs/whatsapp.png" loading="lazy" alt="phone" /></span>+91 8446164920
                </li>
                <li>
                  <span><img src="~/assets/imgs/email.png" loading="lazy" alt="mail" /></span>support@hirect.in
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="milestone-section1">
      <h2 style="text-align: center; margin-top:40px; margin-bottom:20px; font-size: 60px;">
        <strong>Media Coverage</strong>
      </h2>
      <MediaCard :sentList="mediaList" />
    </section>

    <div class="media-button">
      <NuxtLink to="/media-coverage" class="btn btn-app button1">View More</NuxtLink>
    </div>

    <GetAppPage :eventName="'in_aboutus_bottom'" />

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
      link: [
        {
          rel: 'canonical',
          href: 'https://hirect.in/aboutus',
        },
      ],
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
          fullDesignation: 'Global Co-Founder and CEO of Hirect India',
          designation: 'Global Co-Founder and CEO of Hirect India',
          description:
            'Raj Das is the Global Co-Founder & CEO of Hirect India, which connects talents to startups without any middleman. At the company’s helm, Raj is responsible for overseeing end-to-end business operations, primarily the management of Product & Marketing in India. An IIT-Bombay alumnus, Raj brings a rich experience of 3-4 years in mobile internet space and has also mastered product management and user growth. Through Hirect, Raj strives to encourage youngsters to join startups and build wealth for the nation and themselves.',
        },

        {
          imgUrl: 'abhishek.png',
          name: 'Abhishek Singh',
          fullDesignation: 'Senior Vice Persident - Marketing',
          designation: 'SVP - Marketing',
          description:
            "Abhishek Singh is the Senior Vice President of Marketing at Hirect India. In addition to Digital, Creative, and Communication, he oversees the overall marketing strategy. He also handles brand positioning and advanced marketing innovation at Hirect. Mr. Singh has over 14 years of experience in the media and dot-com industries. As a marketing expert, he has built and scaled a few of India's best startups, including Via.com, CommonFloor.com, and Vakilsearch.com, among others. In addition to being a master of marketing automation, he is also a proficient growth hacker.",
        },
        {
          imgUrl: 'ramani.png',
          name: 'Dr. Ramani Ganesh',
          fullDesignation: 'Senior Vice Persident - Human Resources',
          designation: 'SVP - Human Resources',
          description:
            "Ramani is responsible for charting and managing business strategy and human resources at Hirect. She has over seventeen years of experience in Human resources in various MNC companies in IT, software, and engineering. She holds a BBM, MBA, and PG in HRM from IIM Calcutta along with a PhD. She is also certified by HRCI, USA, as a Global Professional HR (GPHR). She values DEI, and continuous learning and promotes leadership development across levels. Her professional efforts are guided by her belief that an organization's work environment and culture play a significant role in employee motivation and results.",
        },
        {
          imgUrl: 'Herry.png',
          name: 'Herry Sikri',
          description:
            "Herry Sikri is the Senior VP, of Finance at Hirect India. He is a chartered accountant (Merit Holder) by profession and brings more than 10+ years of experience in the field of taxation, accounting, foreign exchange regulation, and auditing. His previous assignment was with KPMG India (Dept: Corporate Tax & Regulatory). He is responsible for growth and maximizing ROI while producing measurable gains across various performance indicators. He also supervises the company's compliance with statutory and regulatory requirements.",
          fullDesignation: 'Senior Vice Persident - Finance',
          designation: 'SVP - Finance',
        },
        {
          imgUrl: 'shantanu-pandey.png',
          name: 'Shantanu Pandey',
          fullDesignation: 'Senior Vice Persident - Business Development',
          designation: 'SVP - Business Development',
          description:
            'Shantanu Pandey is the Senior Vice President, Business Development at Hirect. He is a B. Tech graduate from Delhi Technological University (formerly known as Delhi College of Engineering). He is one of the initial members of the team, and he is responsible for increasing B2B growth. Shantanu also heads the strategic alliances at Hirect. Shantanu has around 3 years of work experience and has co-founded two other start-ups during his college days. He also loves to talk about the Indian start-up ecosystem. In addition, he is a devout feminist who believes in equal opportunity at work (and everywhere else).',
        },
        {
          imgUrl: 'abhishek-popli.png',
          name: 'Abhishek Popli',
          fullDesignation: 'Vice Persident -Business Development',
          designation: 'VP - Business Development',
          description:
            "The Vice President-Business Development at Hirect, Abhishek Popli, was one of the few early members in charge of Hirect's offline and online channels, as well as establishing Hirect's offline presence in PAN India. Mr. Popli has over 5 years of experience in leadership and business development positions and is an expert in increasing the user base by over 50 times in various HealthTech, EdTech organizations in and outside India during his stint. He likes to exploit the possibilities of exploring the untapped market for the growth and expansion of the organization.",
        },
        {
          imgUrl: 'sanche-joao.png',
          name: 'Sanche Joao',
          fullDesignation: 'Vice Persident -Operations',
          designation: 'VP - Operations',
          description:
            'Sanche Joao, the Vice President-Operations at Hirect India, is a tenacious leader with a track record of transforming cultures into disciplined, performance-oriented teams by instituting a strong sense of accountability and by driving measurable process-oriented changes. She has previously spent over 10 years in Dubai working with corporates such as ITP Media Group where she led several key initiatives across Operations, Compliance, and Business Development. In her downtime, Sanche enjoys working on design initiatives. She is a foodie and is fascinated by micro-cuisines and exploring travel through food.',
        },
        {
          imgUrl: 'rajeev-ranjan.png',
          name: 'Rajeev Ranjan',
          fullDesignation: 'Associate Vice Persident - Digital Marketing',
          designation: 'AVP - Digital Marketing',
          description:
            'Rajeev comes with a robust, 13 years of proven track record in Digital Marketing and Search Marketing with expertise in End-to-End performance marketing solutions to drive business growth. When it comes to Online marketing and analytics, Rajeev possesses strong skill sets in various verticals including, IT, Real Estate, Banking, FMCG, Healthcare, E-Commerce, and Education. Rajeev has also assisted global clientele - in EMEA, North America, and SEA regions, to build a robust digital presence.',
        },
        {
          imgUrl: 'vishal-gupta.png',
          name: 'Vishal Gupta',
          fullDesignation:
            'Associate Vice Persident - Product Management & Business Intelligence',
          designation: 'AVP - Product Management & Business Intelligence',
          description:
            'Vishal is currently working as the AVP- Product Management & Business Intelligence at Hirect. He is a Great Lakes Alumni and has 7 years of proven track record in Digital Marketing and Growth Hacking. Vishal has a strong background in data-driven marketing and decision making in diverse industries such as IT, Banking, E-Commerce, FoodTech, and Ed-Tech. With his interest and ability in solving real-world problems, he always likes to scout out for new challenges.',
        },
        {
          imgUrl: 'manoj-golani.png',
          name: 'Manoj Goplani',
          fullDesignation: 'Associate Vice Persident - Design',
          designation: 'AVP - Design',
          description:
            'Manoj possesses more than 14 years of robust experience as a design professional with skillsets in Design - Advertising, UI/UX Design Solutions, and Product Development. Manoj has crafted and led corporate strategies for achieving the top-level goal. He comes with strong experience in working with business leaders and clientele from various geographies including EMEA, North America, and the Middle East across various verticals - FMCG, E-Commerce, Telecom, Interior Design Space, Healthcare, and Pharmaceuticals along with Life Sciences for the brand visibility and enhancing the brand presence along with product development and operations.',
        },
        {
          imgUrl: 'akanksha-tyagi.png',
          name: 'Akanksha Tyagi',
          fullDesignation: 'Manager - Influencer Marketing',
          designation: 'Manager - Influencer Marketing',
          description:
            'Akanksha Tyagi is currently leading the Influencer Marketing Department at Hirect. She is one of the initial members of the team. After working for 1 year in Business Development, she started the Influencer Marketing Department from scratch. She has extensive expertise in Content Creation and Marketing, thus facilitating Business Growth, Customer Acquisition and Retention. She has worked with 2500+ Influencers, bringing in 50M+ reach monthly. She has previously worked with Trell and Huawei Technologies India before joining Hirect.',
        },
        {
          imgUrl: 'simran-saswani.png',
          name: 'Simran Saswani',
          fullDesignation: 'Manager - Business Development',
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
.container-1 {
  overflow: hidden !important;
}

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
  background-color: white;
  margin-bottom: 41px;
  border-color: #000000;
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
  margin-top: 30px;
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
  font-size: 60px;
}

.meet-team-section h2 {
  text-align: center;
  margin-bottom: 14px;
  margin-top: 20px;
  font-size: 60px;
}

.milestone-section h2 {
  text-align: center;
  margin-bottom: 14px;
  margin-top: 20px;
  font-size: 60px;
}

.milestone-section1 h2 {
  text-align: center;
  margin-bottom: 14px;
  margin-top: 20px;
  font-size: 60px;
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

.get-in-touch {
  padding-top: 85px;
  padding-bottom: 70px;
}

.get-in-form {
  border-radius: 20px;
  background-color: #f1f4f7;
  padding: 30px 40px;
}

.Bengaluru-list ul li img {
  max-width: unset;
}

.get-in-form label {
  color: #b4b4b4;
  font-family: Helvetica;
  font-size: 18px;
  font-weight: 400;
  font-style: normal;
  letter-spacing: normal;
  line-height: 10.68px;
  margin-bottom: 13px;
}

.get-in-form input {
  height: 48px;
  border-radius: 10px;
  background-color: #ffffff;
  border-color: #ffffff;
  color: #0e101a;
}

.get-in-form label sup {
  color: #eb5757;
}

.get-in-form .form-group {
  margin-bottom: 25px;
}

.get-in-touch-form textarea {
  height: 104px;
  border-radius: 10px;
  background-color: #ffffff;
  border-color: #ffffff;
}

.get-in-touch .row {
  align-items: center;
}

.get-in-touch-form h4 {
  color: #808080;
  font-family: Helvetica;
  font-size: 18px;
  font-weight: 400;
  font-style: normal;
  letter-spacing: normal;
  line-height: normal;
  margin-bottom: 50px;
}

p.support-in {
  color: #808080;
  font-family: Helvetica;
  font-size: 24px;
  font-weight: 400;
  font-style: normal;
  letter-spacing: normal;
  line-height: normal;
  margin-bottom: 50px;
}

.support-in a {
  color: #0e101a;
  font-weight: 700;
  text-decoration: none;
}

.recruiter-form-img {
  text-align: center;
}

.Bengaluru-Office {
  background-color: #f1f4f7;
  padding: 120px 0px;
}

.Bengaluru-list h1 {
  color: #0e101a;
  font-family: Helvetica;
  font-size: 36px;
  font-weight: 700;
  font-style: normal;
  letter-spacing: normal;
  line-height: normal;
  margin-bottom: 30px;
}

.Bengaluru-list ul li {
  color: #808080;
  font-family: Helvetica;
  font-size: 18px;
  font-weight: 400;
  font-style: normal;
  letter-spacing: normal;
  line-height: 24px;
  display: flex;
  margin-bottom: 30px;
}

.Bengaluru-list ul li span {
  color: #000000;
  padding-right: 15px;
}

.Bengaluru-list ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

.Bengaluru-Office .row {
  align-items: center;
}

.Bengaluru-list {
  margin-left: 100px;
}

.Bengaluru-list {
  margin-left: 100px;
}

div.map-bg {
  padding: 80px;
}

.map iframe {
  width: 100%;
  height: 408px;
}

p.support-in {
  margin-bottom: 0 !important;
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
    text-align: center;
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

@media only screen and (min-width: 768px) and (max-width: 1299px) {
  .Bengaluru-Office {
    padding: 80px 0px;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1199px) {
  .Bengaluru-Office {
    padding: 80px 0px;
  }

  .get-in-touch {
    padding-top: 60px;
    padding-bottom: 60px;
  }

  p.support-in {
    font-size: 20px;
    margin-bottom: 30px;
  }

  section.map-bg {
    padding: 60px 50px;
  }

  .Bengaluru-list h1 {
    font-size: 32px;
  }

  .Bengaluru-list {
    margin-left: 60px;
  }
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
  section.map-bg {
    padding: 60px 50px;
  }

  .get-in-touch-form h4 {
    margin-bottom: 35px;
  }

  .get-in-form {
    padding: 30px 20px;
  }

  .Bengaluru-list {
    margin-left: 35px;
  }

  .Bengaluru-list h1 {
    font-size: 30px;
  }

  .Bengaluru-Office {
    padding: 60px 0;
  }
}

@media only screen and (min-width: 320px) and (max-width: 767px) {
  .about-heading {
    text-align: center;
    margin-bottom: 14px;
    margin-top: 20px;
    font-size: 40px;
  }

  .meet-team-section h2 {
    font-size: 40px;
  }

  .milestone-section h2 {
    font-size: 40px;
  }

  .milestone-section1 h2 {
    font-size: 40px;
  }

  .Bengaluru-Office {
    padding: 50px 0px;
  }

  .Bengaluru-list {
    margin: 0;
    margin-top: 30px;
  }

  .Bengaluru-list h1 {
    font-size: 25px;
  }

  section.map-bg {
    padding: 50px 0px;
  }

  .get-in-touch {
    padding: 50px 0px;
  }

  .get-in-form {
    padding: 30px 20px;
    margin-bottom: 30px;
  }

  p.support-in {
    font-size: 18px;
    margin-bottom: 30px;
  }

  .Bengaluru-list {
    margin: 0;
    margin-top: 30px;
  }

  .get-in-touch-form h4 {
    margin-bottom: 30px;
    font-size: 16px;
  }

  .get-in-form label {
    font-size: 16px;
  }

  .get-in-touch-form textarea {
    height: 80px;
  }

  .map iframe {
    height: 200px;
  }

  .Bengaluru-list ul li {
    font-size: 16px;
  }

  .get-in-form input {
    height: 42px;
  }

  .get-in-form .form-group {
    margin-bottom: 15px;
  }
}
</style>
