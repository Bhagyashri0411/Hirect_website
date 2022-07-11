<template>
  <div class="wrapper">
    <Header />
    <!----banner start---------->
    <div class="direct-banner">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h1>
              Direct <span style="color: #2ce2a2"> Hiring</span> App for
              Founders, <br />
              Team Leaders and Hiring Managers
            </h1>
            <p>
              The traditional hiring process has lost its viability due to the rapid rise in demand for a skilled
              workforce. Shortlisting candidates is a time-consuming process. Conducting interviews with irrelevant
              candidates yields unfruitful results. Outsourcing the process is often unreliable and expensive.
            </p>

            <p>Hirect simplifies the hiring process. Directly chatting with verified candidates matched by the AI
              algorithm ensures a simple, quick and effective hiring experience.
            </p>
          </div>
          <div class="start-hiring-button">
            <NuxtLink to="/recruiters" class="btn btn-app start-hiring">Start Hiring</NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <!----banner End----------->

    <!----hire-chat start----------->
    <section class="hire-chat-section">
      <div class="hire-chat">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="hire-now">
                <h2>Get the <span style="color: #19e29e">Hirect</span> App</h2>
                <p>
                  We will send you a link via SMS. To download the app, simply open it.
                </p>
                <GetAppInput />
              </div>
            </div>
            <div class="col-md-6">
              <div class="get-app-img">
                <img src="~/assets/imgs/chat-directly-new.png" alt="" class="hire-now-image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!----hire-chat end----------->

    <!----jobs-available start----------->
    <section class="hire-chat-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h3 class="title-sm">Trending Job Categories</h3>
            <div class="jobs-list">
              <ul class="available-list">
                <li>
                  <span><span>IT Sector</span> <br /><br /><span class="candi-value">750K+ Candidates</span></span>
                </li>
                <li>
                  <span>Design &<br />
                    Development <br /><br /><span class="candi-value">110K+ Candidates </span></span>
                </li>
                <li>
                  <span>Business & <br />Consulting <br /><br /><span class="candi-value">700K+ Candidates
                    </span></span>
                </li>
                <li>
                  <span>Finance <br /><br />
                    <span class="candi-value">500K+ Candidates </span></span>
                </li>
                <li>
                  <span>Marketing &<br />
                    Communication <br /><br /><span class="candi-value">400K+ Candidates</span></span>
                </li>
                <li>
                  <span>Sales <br /><br /><span class="candi-value">350K+ Candidates</span></span>
                </li>
                <li>
                  <span>Operations <br /><br /><span class="candi-value">100K+ Candidates
                    </span></span>
                </li>
                <li>
                  <span>Technical <br />Support <br /><br /><span class="candi-value">100K+ Candidates</span></span>
                </li>
              </ul>
            </div>
            <!-- <div class="jobs-list">
              <ul class="available-list">

              <li><span>View All</span></li>
              </ul>
            </div> -->
          </div>
        </div>
      </div>
    </section>
    <!----jobs-available end----------->

    <section class="job-available-section">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="hire-now">
              <h2>
                Chat directly with<br />
                Decision - Makers
              </h2>
              <p style="color:#4D5358">
                Hirect encourages direct and quick responses between job-seekers and recruiters. Through the
                bi-directional direct chat feature, candidates can chat directly with relevant and verified recruiters
                on this job search app.
              </p>
              <!-- <button class="btn btn-app" @click="job - seeker">Get Connected</button> -->
              <NuxtLink class="btn btn-app start-hiring" to="/job-seeker">
                Get Hired
              </NuxtLink>
            </div>
          </div>
          <div class="col-md-6">
            <div class="hire-now-img img1" style="text-align: center;">
              <img src="~/assets/imgs/hire-direct-hirect-new.png" alt="" class="hire-img" />
            </div>
          </div>
        </div>
      </div>

      <div class="hire-chat">
        <div class="container">
          <div class="row instant-hiring-row">
            <div class="col-md-6">
              <div class="hire-now-img img2">
                <img src="~/assets/imgs/hirect-chart.png" alt="" class="next-img" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="hire-now">
                <h2>Hire Directly with Hirect</h2>
                <p>
                  3M+ candidates chat directly with 150K+ recruiters on Hirect.
                </p>
                <NuxtLink class="btn white-btn" to="/recruiters">
                  Instant Hiring
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!----jobs-available start----------->
    <section class="job-available-section Jobs-in-city">
      <div class="jobs-available">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h3 class="title-sm">Find Candidates in your City</h3>
              <div class="jobs-list">
                <ul class="city-logo">
                  <li>
                    <img src="~/assets/imgs/City-logos/Delhi.png" alt="" />
                  </li>
                  <li>
                    <img src="~/assets/imgs/City-logos/Bengaluru.png" alt="" />
                  </li>
                  <li>
                    <img src="~/assets/imgs/City-logos/Mumbai.png" alt="" />
                  </li>
                  <li>
                    <img src="~/assets/imgs/City-logos/pune.png" alt="" />
                  </li>
                  <li>
                    <img src="~/assets/imgs/City-logos/Hyderabad.png" alt="" />
                  </li>
                </ul>
              </div>
              <!-- <div class="viewall" style="text-align: center">
                <button class="btn btn-app view-btn" style="border-radius: 50px;">View More</button>
              </div> -->
            </div>
          </div>
        </div>
      </div>
      <div style="color: black; font-size: 24px; text-align: center; margin-top: -38px; font-weight:bold;">and many
        more...</div>
    </section>
    <!----jobs-available end----------->
    <!----startup start----------->
    <section class="startup-section">
      <div class="startups-logo">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h3 class="title-sm">
                More than <span style="color: #2ce2a2">150K+</span> Recruiters
                trust <span style="color: #2ce2a2">Hirect</span>
              </h3>
              <div class="jobs-list">
                <ul class="startups-logo-list">
                  <li>
                    <img src="~/assets/imgs/websites-logo/lenskart.png" alt="" />
                  </li>
                  <li>
                    <img src="~/assets/imgs/websites-logo/Byju_s.png" alt="" />
                  </li>
                  <li>
                    <img src="~/assets/imgs/websites-logo/Ajio.png" alt="" />
                  </li>
                  <li>
                    <img src="~/assets/imgs/websites-logo/squareyards.png" alt="" />
                  </li>
                  <li>
                    <img src="~/assets/imgs/websites-logo/Flipkart.png" alt="" />
                  </li>
                  <li>
                    <img src="~/assets/imgs/websites-logo/Udaan.png" alt="" />
                  </li>
                </ul>
                <ul class="startups-logo-list">
                  <li>
                    <img src="~/assets/imgs/websites-logo/Amazom.png" alt="" />
                  </li>
                  <li>
                    <img src="~/assets/imgs/websites-logo/upgrad.png" alt="" />
                  </li>
                  <li>
                    <img src="~/assets/imgs/websites-logo/FreeCharge.png" alt="" />
                  </li>
                  <li>
                    <img src="~/assets/imgs/websites-logo/aditya_birla.svg" alt="" />
                  </li>
                  <li>
                    <img src="~/assets/imgs/websites-logo/walmart.svg" alt="" />
                  </li>
                  <li>
                    <img src="~/assets/imgs/websites-logo/NOBroker.png" alt="" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!----startup end----------->

    <!----Testimonial start----------->
    <div class="testimonials">
      <Testimonial />
      <div class="row" style="justify-content:center;">
        <img class="slick-icon" src="~/assets/imgs/swipe.png" alt="swipe_icon" />
      </div>
    </div>

    <!----Testimonial End----------->

    <!----scan-app start----------->
    <GetAppPage :eventName="'in_home_bottom'" />
    <!----scan-app end----------->

    <Footer />
    <DownloadModal v-show="showModal" @close-modal="showModal = false" />
  </div>
</template>

<script>
// eslint-disable-next-line import/no-extraneous-dependencies
import DownloadModal from '~/components/DownloadModal.vue';
import GetAppInput from '../../components/GetAppInput.vue';

export default {
  components: {
    DownloadModal,
    GetAppInput,
  },
  head() {
    return {
      title: 'Best Job App for Recruiters and Job Seekers - Hirect',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Hirect, the best app for start-up hiring, connects the matching candidates with the recruiters. Chat directly and hire anywhere, anytime. ',
        },
      ],
    };
  },
  data() {
    return {
      showModal: false,
    };
  },

  jsonld() {
    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': 'https://www.hirect.in/#/schema/organization/hirect',
          name: 'Hirect',
          url: 'https://www.hirect.in',
          sameAs: [
            'https://www.facebook.com/hirectindia',
            'https://www.linkedin.com/company/hirectapp',
            'https://twitter.com/hirect_india',
            'https://www.instagram.com/hirect_india',
            'https://www.youtube.com/channel/UC98TU-jrNVOJCWC-FhnaPWQ',
          ],
          logo: {
            '@type': 'ImageObject',
            '@id': 'https://www.hirect.in/#/schema/image/hirect',
            url: 'https://www.hirect.in/_nuxt/img/hirect-logo.130906c.png',
            width: 172,
            height: 48,
            caption: 'hirect',
          },
          image: {
            '@id': 'https://www.hirect.in/#/schema/image/hirect',
            inLanguage: 'en-US',
            url: 'https://www.hirect.in/_nuxt/img/hirect-logo.130906c.png',
            width: 172,
            height: 48,
            caption: 'hirect',
          },
        },
        {
          '@type': 'WebSite',
          '@id': 'https://www.hirect.in/#/schema/website/hirect',
          url: 'https://www.hirect.in',
          name: 'Hirect',
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://www.hirect.in/?s={search_term_string}',
            'query-input': 'required name=search_term_string',
          },
          publisher: {
            '@id': 'https://www.hirect.in/#/schema/organization/hirect',
          },
        },
        {
          '@type': 'WebPage',
          '@id': 'https://www.hirect.in',
          url: 'https://www.hirect.in',
          inLanguage: 'en-US',
          name: 'Hirect',
          dateModified: '2022-02-22T15:06:08+00:00',
          description:
            'Hirect, the best app for start-up hiring, connects the matching candidates with the recruiters. Chat directly and hire anywhere, anytime. ',
          isPartOf: {
            '@id': 'https://www.hirect.in/#/schema/website/hirect',
          },
          about: {
            '@id': 'https://www.hirect.in/#/schema/organization/hirect',
          },
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.slick-icon{
    display: none;
    width: 20%;
    padding-bottom: 32px;
  }
// direct - banner
.btn-app {
  margin-bottom: 12px;
  height: 43px;
  padding: 11px 30px;
  font-size: 16px;
  font-weight: 700;
  background-color: #2ce2a2;
  border-radius: 25px;
}

.hire-now-image {
  margin-top: 18%;
}

.hire-now {
  // margin-left: -36px;
}

.get-app-img {
  margin-left: 30%;
}

.direct-banner {
  padding: 110px 0;

  h1 {
    color: #0E101A;
    font-size: 64px;
    font-weight: bold;
    font-style: normal;
    letter-spacing: normal;
    line-height: normal;
    text-align: center;
    margin-bottom: 30px;
  }

  p {
    text-align: center;
    font-size: 18px;
    margin-bottom: 15px;
    color: rgba(14, 16, 26, 0.7);
  }

  .row {
    align-items: flex-end;
  }

  .start-hiring {
    background-color: rgb(44, 226, 162);
    height: 45px;
    border-radius: 50px;
    width: 150px;
  }

  .start-hiring-button {
    text-align: center;
    margin-top: 30px;
  }
}

// End direct - banner

// hirect mobile get app
.hire-chat-section {
  padding-bottom: 100px;

  .hire-chat {
    //   padding-bottom: 80px;
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

// end

// Hirect Job
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

.title-sm {
  color: #0e101a;
  font-size: 40px;
  font-weight: bold;
  line-height: normal;
  text-align: center;
  margin-bottom: 45px;
}

//end

//Instant Hiring tap
.job-available-section {
  .hire-now h2 {
    color: #0e101a;
    font-size: 40px;
    font-weight: bold;
    margin: 30px 0;
  }

  .hire-now p {
    color: #0e101a;
    font-size: 16px;
    font-weight: normal;
    margin-bottom: 30px;
  }

  .hire-chat {
    background-color: #2ce2a2;
    padding-top: 25px;

    .hire-now {
      margin-top: 50px;
    }
  }
}

//end

.view-btn {
  background-color: hsl(0, 0%, 100%) !important;
  border-color: #000 !important;
}

// city page
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
      cursor: pointer;
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

  .city-logo li {
    cursor: pointer;
  }
}

/******** Home Page **********/
.candi-value {
  font-size: 14px;
}

// 1 st div

.white-btn {
  border-radius: 50px;
  border-color: #2ce2a2;
  color: #0e101a;
  font-size: 16px;
  font-weight: 700;
  padding: 16px 30px;
  margin-left: 10px;
  line-height: normal;
  background-color: #fff;
}

// end Hire Chat Section
// jobs-available
.job-available-section,
.startup-section {
  padding-bottom: 80px;
}

.jobs-available {
  padding: 35px 0;
}

.available-list li:hover {
  background-color: #2ce2a2;

  .candi-value {
    color: #000000;
  }
}

.available-list li {
  border-radius: 33px;
  cursor: pointer;
  background-color: #ffffff;
  display: flex;
  // padding: 0px 14px;
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
    color: #76787A;
    // line-height: 40px;
  }
}

.available-list {
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.available-list li {
  width: 244px;
  height: 160px;
  margin-bottom: 30px;
}

.available-list li:nth-child(6n) {
  margin-right: 0;
}

// end jobs-available
// startups-logo
.startups-logo {
  padding: 50px 0;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
}

.startups-logo-list {
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
  cursor: pointer;
  background-color: #ffffff;
  display: flex;
  padding: 0px 14px;
  color: #000000;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 50px;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
}

.img2 {
  // padding-left: 152px;
  margin-left: -20%;
}

.next-img {
  margin-left: -4%;
}

.city-logo li {
  padding: 10px 0px;
}

// end startups-logo
// @media only screen and (min-width: 768px) and (max-width: 1299px) {
//   .direct-banner {
//     padding: 80px 0;
//   }

//   .hire-chat {
//     padding-bottom: 60px;
//   }

//   .job-available-section,
//   .startup-section {
//     padding-bottom: 80px;
//   }

//   .hire-now h2,
//   .direct-banner h1,
//   .direct-text h2 {
//     font-size: 32px;
//   }

//   .direct-text .startup-btn {
//     width: 240px;
//     height: 40px;
//   }

//   .available-list li span {
//     font-size: 15px;
//   }
// }

// @media only screen and (min-width: 768px) and (max-width: 1199px) {

//   .hire-now h2,
//   .direct-banner h1,
//   .direct-text h2 {
//     font-size: 26px;
//   }

//   .direct-banner {
//     padding: 70px 0;
//   }

//   .direct-text .startup-btn {
//     width: 195px;
//     height: 40px;
//   }

//   .hire-now p {
//     font-size: 16px;
//     line-height: 22px;
//     margin-bottom: 35px;
//   }

//   .available-list li {
//     width: 18.4%;
//     margin-bottom: 20px;
//     margin-right: 2%;
//   }

//   .available-list li:nth-child(6n) {
//     margin-right: 2%;
//   }

//   .available-list li:nth-child(5n) {
//     margin-right: 0%;
//   }

//   .job-available-section,
//   .startup-section {
//     padding-bottom: 65px;
//   }

//   .startups-logo-list li {
//     margin-bottom: 35px;
//   }

//   .direct-Candidates.first {
//     padding-right: 84px;
//   }

//   .direct-Candidates.two {
//     padding-left: 0;
//   }
// }

// @media only screen and (min-width: 768px) and (max-width: 991px) {
//   .direct-Candidates.two {
//     padding-left: 0px;
//   }

//   .direct-Candidates.first {
//     padding-right: 15px;
//   }

//   .direct-text .startup-btn {
//     width: 150px;
//     height: 45px;
//     font-size: 13px;
//     line-height: 16px;
//   }

//   .direct-text button.btn.default-btn.button-sm {
//     height: 45px;
//     font-size: 13px;
//     line-height: 16px;
//     width: 150px;
//   }

//   .direct-text h2 {
//     margin-bottom: 15px;
//   }

//   .direct-text button {
//     margin-top: 30px;
//   }

//   .direct-text {
//     height: 160px;
//   }

//   .available-list li {
//     width: 23.5%;
//   }

//   .available-list li:nth-child(5n) {
//     margin-right: 2%;
//   }

//   .available-list li:nth-child(4n) {
//     margin-right: 0;
//   }

//   .startups-logo-list li {
//     width: 16.66%;
//     text-align: center;
//     padding: 0 10px;
//   }
// }

@media only screen and (min-width:850px) and (max-width:1199px) {
  .hire-chat-section {
    .hire-chat {
      height: 477px;
    }
  }

  .img1 {
    text-align: center;
    // width: 80% !important;
    // margin-top: 9% !important;
    // margin-left: 25%;
  }

  .get-app-img {
    margin-left: 7%;
    width: 75%;
  }

  .img2 {
    width: 100%;

  }

  .hire-now-img {
    height: 100%;
    width: 100%;
    height: 100%;
  }

  .hire-img {
    height: 100%;
    // object-fit: contain;
    // margin-top: 11%;
  }

  .btn-app {
    margin-bottom: 12px;
    height: 43px;
    padding: 12px 30px;
    font-size: 16px;
    font-weight: 700;
  }

  .white-btn {
    margin-bottom: 20px;
  }

  .img2 {
    // padding-left: 70px;
  }

  .next-img {
    // margin-left: -111px;
    height: 100%;
    // object-fit: contain;
    // margin-top: 16.35%;
  }

  .hire-now {
    margin-left: 0px;
  }
}

@media only screen and (min-width: 336px) and (max-width: 767px) {

  .hire-chat-section .hire-chat {
    height: 353px;
  }

  .slick-icon{
    display: block;
  }

  .city-logo {
    padding: 0;
    margin: 50px 0;
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: column;
  }

  .btn-app {
    height: 44px;
    width: 149px;
    border-radius: 50px;
    background-color: #2ce2a2;
    border-color: #2ce2a2;
    color: #0e101a;
    font-size: 16px;
    font-weight: 700;
    padding: 12px 30px;
    margin-left: 10px;
    line-height: normal;
  }

  .hire-img {
    // margin-left: 20%;
  }

  .next-img {
    margin-left: -17%;
  }

  .hire-now {
    margin-left: 0px;
  }

  .instant-hiring-row {
    flex-direction: column-reverse;
  }

  .available-list li {
    width: 49%;
    margin-right: 2%;
  }

  .direct-Candidates.two {
    padding-left: 0;
  }

  .available-list li:nth-child(even) {
    margin-right: 0;
  }

  .available-list li span {
    font-size: 15px;
    // line-height: 20px;
    // padding: 5px 6px;
  }

  .direct-banner {
    padding: 50px 0 70px;
  }

  .direct-banner h1 {
    font-size: 45px;
  }

  .direct-text h2 {
    font-size: 23px;
    margin-bottom: 20px;
  }

  .direct-banner h1 br {
    display: none;
  }

  .direct-Candidates.first {
    padding-right: 0;
    // flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }

  .direct-text {
    margin-top: 30px;
    display: block;
    height: auto;
    text-align: center;
  }

  .direct-text button {
    margin-top: 25px;
  }

  .direct-Candidates.two {
    // flex-direction: column-reverse;
    margin-top: 40px;
    align-items: center;
    justify-content: center;
  }

  .hire-now h2 {
    font-size: 23px;
    margin-bottom: 25px;
  }

  .hire-chat {
    // padding-bottom: 60px;

  }

  .hire-now {
    margin-top: 30px;
    text-align: center;
  }

  .hire-now h2 br {
    display: none;
  }

  .hire-now button.btn {
    margin: auto;
  }

  .hire-chat-section {
    padding-bottom: 40px;
  }

  .job-available-section,
  .startup-section {
    padding-bottom: 70px;
  }

  .hire-now p {
    font-size: 18px;
    line-height: 22px;
    margin-bottom: 30px;
  }

  .hire-chat-section .hire-chat:first-child .row {
    // flex-direction: column-reverse;
  }

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
    // margin-bottom: 30px;
    margin: 0px;
  }

  .direct-text p {
    margin-bottom: 20px;
  }

  // .hire-now-img {
  //   display: none;
  // }

  .hire-chat-section .hire-chat {
    height: 385px;
  }

  .hire-now {
    padding-bottom: 15px;
  }

  // .testimonials {
  //   display: none;
  // }

  .btn-app {
    margin-left: 0px;
  }

  .hire-now p {
    margin-left: 10px;
  }

  .hire-now h2 {
    font-size: 45px !important;
  }

  .get-app-img {
    display: none;
  }

  .img2 {
    padding-left: 25px;
    text-align: center;
  }

  // .hire-now-img {

  //   // margin-right: -28%;
  //   height: 380px;
  // }

  // hire-now-img img {
  //   height: 100%;
  //   width: auto;
  //   object-fit: cover;
  // }
}

@media only screen and (min-width: 300px) and (max-width: 335px) {

  .hire-now {
    margin-left: 0px;
  }

  .instant-hiring-row {
    flex-direction: column-reverse;
  }

  .available-list li {
    width: 49%;
    margin-right: 2%;
  }

  .direct-Candidates.two {
    padding-left: 0;
  }

  .available-list li:nth-child(even) {
    margin-right: 0;
  }

  .available-list li span {
    font-size: 15px;
    // line-height: 20px;
    // padding: 5px 6px;
  }

  .direct-banner {
    padding: 50px 0 70px;
  }

  .direct-banner h1 {
    font-size: 23px;
  }

  .direct-text h2 {
    font-size: 23px;
    margin-bottom: 20px;
  }

  .direct-banner h1 br {
    display: none;
  }

  .direct-Candidates.first {
    padding-right: 0;
    // flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }

  .direct-text {
    margin-top: 30px;
    display: block;
    height: auto;
    text-align: center;
  }

  .direct-text button {
    margin-top: 25px;
  }

  .direct-Candidates.two {
    // flex-direction: column-reverse;
    margin-top: 40px;
    align-items: center;
    justify-content: center;
  }

  .hire-now h2 {
    font-size: 23px;
    margin-bottom: 25px;
  }

  .hire-chat {
    // padding-bottom: 60px;
  }

  .hire-now {
    margin-top: 30px;
    text-align: center;
  }

  .hire-now h2 br {
    display: none;
  }

  .hire-now button.btn {
    margin: auto;
  }

  .hire-chat-section {
    padding-bottom: 40px;
  }

  .job-available-section,
  .startup-section {
    padding-bottom: 70px;
  }

  .hire-now p {
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 30px;
  }

  .hire-chat-section .hire-chat:first-child .row {
    // flex-direction: column-reverse;
  }

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

  .direct-text p {
    margin-bottom: 20px;
  }

  // .hire-now-img {
  //   display: none;
  // }

  .hire-chat-section .hire-chat {
    height: 353px;
  }

  .hire-now {
    padding-bottom: 15px;
    margin-left: -11px;
  }

  // .testimonials {
  //   display: none;
  // }

  .btn-app {
    margin-left: 0px;
    padding: 10px 20px;
  }

  .hire-chat-section .hire-chat {
    height: 400px;
  }

  .get-app-img {
    display: none;
  }

  .img2 {
    padding-left: 25px;
    text-align: center;
  }

  // .hire-now-img {

  //   // margin-right: -28%;
  //   height: 380px;
  // }

  // hire-now-img img {
  //   height: 100%;
  //   width: auto;
  //   object-fit: cover;
  // }
}

/******* end Home Page ************/
</style>
