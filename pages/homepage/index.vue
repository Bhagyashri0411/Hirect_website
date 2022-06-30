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
              Team Leaders and HRs
            </h1>
            <p>
              Shifting through various resumes and shortlisting candidates can be
              time-consuming Scheduling numerous interviews
              <br />
              only to hit a dead-end can also be frustrating Outsourcing the
              process ends up being expensive
            </p>
            <p>
              Hirect solves this problem Hiring Direct is the way to go. Hirect,
              the mobile-first chat based hiring app, enables the
              <br />
              Recruiters to chat directly with the candidates, who are 100%
              verified With Hirect hiring is instant and direct.
            </p>
          </div>
          <div class="autocomplete1">
            <NuxtLink to="/connect" class="btn btn-app start-hiring">Start Hiring</NuxtLink>
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
                  We will send you a link to your phone open <br />
                  it to download the app.
                </p>
                <div class="input-container">
                  <div class="Sgdef">+91 |</div>
                  <input type="text" class="form-search-mob" placeholder="Enter Mobile Number" />
                  <button class="btn btn-app" style="margin-left: 20px; border-radius:50px">
                    Get App
                  </button>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="hire-now-img">
                <img src="~/assets/imgs/chat-directly-new.png" alt="" />
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
            <h3 class="title-sm">Jobs available in 70+ categories</h3>
            <div class="jobs-list">
              <ul class="available-list">
                <li>
                  <span>IT Sector <br /><span class="candi-value">68 Candidate available</span></span>
                </li>
                <li>
                  <span>Design &<br />
                    Development <br /><span class="candi-value">124 Candidate available</span></span>
                </li>
                <li>
                  <span>Business & <br />Consulting <br /><span class="candi-value">26 Candidate available</span></span>
                </li>
                <li>
                  <span>Project<br />
                    Management <br />
                    <span class="candi-value">68 Candidate available</span></span>
                </li>
              </ul>
            </div>
            <div class="jobs-list">
              <ul class="available-list">
                <li>
                  <span>Marketing &<br />
                    Communication <br /><span class="candi-value">68 Candidate available</span></span>
                </li>
                <li>
                  <span>Human <br />
                    Resources <br /><span class="candi-value">124 Candidate available</span></span>
                </li>
                <li>
                  <span>Customer & <br />Support Care <br /><span class="candi-value">26 Candidate
                      available</span></span>
                </li>
                <li>
                  <span>Technical <br />Support <br /><span class="candi-value">26 Candidate
                      available</span></span>
                </li>
                <!-- <li><span>View All</span></li> -->
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!----jobs-available end----------->

    <section class="job-available-section">
      <div class="container">
        <div class="row">
          <div class="col-md-5">
            <div class="hire-now">
              <h2>
                Direct Chat with Hiring <br />
                Managers / HRs
              </h2>
              <p style="color:#4D5358">
                Now there is no need to wait for feedback. Candidates can
                connect with the Recruiters directly on this job search app. AI
                algorithm matches the candidates with the most relevant job
                posts on the job app.
              </p>
              <!-- <button class="btn btn-app" @click="job - seeker">Get Connected</button> -->
              <NuxtLink class="btn btn-app" to="/job-seeker">
                Get Hired
              </NuxtLink>
            </div>
          </div>
          <div class="col-md-7">
            <div class="hire-now-img" style="text-align: center; margin-left:25%">
              <img src="~/assets/imgs/hire-direct-hirect-new.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div class="hire-chat">
        <div class="container">
          <div class="row">
            <div class="col-md-7">
              <div class="hire-now-img" style="padding-left:152px;">
                <img src="~/assets/imgs/hirect-chart.png" alt="" />
              </div>
            </div>
            <div class="col-md-5">
              <div class="hire-now" style="margin-left: -36px;">
                <h2>Hire Direct with Hirect</h2>
                <p>
                  AI algorithm of Hirect, the hiring app, connects businesses
                  with more than 3M+ qualified candidates.
                </p>
                <!-- <button class="btn btn-app white-btn" @click="connect">Instant Hiring</button> -->
                <NuxtLink class="btn btn-app white-btn" to="/connect">
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
              <h3 class="title-sm">Check jobs in your city</h3>
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
                    <img src="~/assets/imgs/City-logos/Chennai.png" alt="" />
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
      <div style="color: black; font-size: 32px; text-align: center; margin-top: -38px;">and many more...</div>
    </section>
    <!----jobs-available end----------->
    <!----startup start----------->
    <section class="startup-section">
      <div class="startups-logo">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h3 class="title-sm">
                More than <span style="color: #2ce2a2">150K+</span> startups
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
                    <img src="~/assets/imgs/websites-logo/upgrad.png" alt="" />
                  </li>
                  <li>
                    <img src="~/assets/imgs/websites-logo/maxresdefault.png" alt="" />
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
    <Testimonial />
    <!----Testimonial End----------->

    <!----scan-app start----------->
    <GetAppPage :eventName="'in_home_bottom'" />
    <!----scan-app end----------->

    <Footer />
    <DownloadModal v-show="showModal" @close-modal="showModal = false" />
  </div>
</template>

<script>
import DownloadModal from "~/components/DownloadModal.vue";
export default {
  components: {
    DownloadModal,
  },
  head() {
    return {
      title: "Best Job App for Recruiters and Job Seekers - Hirect",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Hirect, the best app for start-up hiring, connects the matching candidates with the recruiters. Chat directly and hire anywhere, anytime. ",
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
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": "https://www.hirect.in/#/schema/organization/hirect",
          name: "Hirect",
          url: "https://www.hirect.in",
          sameAs: [
            "https://www.facebook.com/hirectindia",
            "https://www.linkedin.com/company/hirectapp",
            "https://twitter.com/hirect_india",
            "https://www.instagram.com/hirect_india",
            "https://www.youtube.com/channel/UC98TU-jrNVOJCWC-FhnaPWQ",
          ],
          logo: {
            "@type": "ImageObject",
            "@id": "https://www.hirect.in/#/schema/image/hirect",
            url: "https://www.hirect.in/_nuxt/img/hirect-logo.130906c.png",
            width: 172,
            height: 48,
            caption: "hirect",
          },
          image: {
            "@id": "https://www.hirect.in/#/schema/image/hirect",
            inLanguage: "en-US",
            url: "https://www.hirect.in/_nuxt/img/hirect-logo.130906c.png",
            width: 172,
            height: 48,
            caption: "hirect",
          },
        },
        {
          "@type": "WebSite",
          "@id": "https://www.hirect.in/#/schema/website/hirect",
          url: "https://www.hirect.in",
          name: "Hirect",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://www.hirect.in/?s={search_term_string}",
            "query-input": "required name=search_term_string",
          },
          publisher: {
            "@id": "https://www.hirect.in/#/schema/organization/hirect",
          },
        },
        {
          "@type": "WebPage",
          "@id": "https://www.hirect.in",
          url: "https://www.hirect.in",
          inLanguage: "en-US",
          name: "Hirect",
          dateModified: "2022-02-22T15:06:08+00:00",
          description:
            "Hirect, the best app for start-up hiring, connects the matching candidates with the recruiters. Chat directly and hire anywhere, anytime. ",
          isPartOf: {
            "@id": "https://www.hirect.in/#/schema/website/hirect",
          },
          about: {
            "@id": "https://www.hirect.in/#/schema/organization/hirect",
          },
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
// direct - banner
.direct-banner {
  padding: 110px 0;

  h1 {
    color: #0e101a;
    font-size: 50px;
    font-weight: bold;
    font-style: normal;
    letter-spacing: normal;
    line-height: normal;
    text-align: center;
    margin-bottom: 30px;
  }

  p {
    text-align: center;
    font-size: 16px;
    margin-bottom: 15px;
    color: #76787A;
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

  .autocomplete1 {
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
    font-size: 40px;
    font-weight: bold;
    line-height: 66.8px;
    margin: 30px 0;
  }

  .hire-now {
    margin-top: 56px;
  }

  .hire-now p {
    color: #000000;
    font-size: 17px;
    font-weight: normal;
    line-height: 27px;
    margin-bottom: 30px;
  }

  .input-container {
    display: flex;
    align-items: stretch;

    .Sgdef {
      position: absolute;
      color: #B4B4B4;
      z-index: 1;
      font-size: 13px;
      padding: 13px 20px;
      cursor: pointer;
      display: flex;
      align-items: center;
    }

    .form-search-mob {
      display: flex;
      position: relative;
      -webkit-box-pack: start;
      justify-content: flex-start;
      -webkit-box-align: center;
      align-items: center;
      height: 45px;
      width: 60%;
      color: #808080;
      font-size: 13px;
      padding: 0px 10px 0px 60px;
      background: rgb(255, 255, 255);
      border: 2px solid rgb(223, 225, 230);
      box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
      border-radius: 50px;

      ::placeholder {
        color: #B4B4B4;
        font-size: 16px;
      }
    }

    .hire-now-img {
      text-align: end;
      margin-top: -67px;
    }
  }
}

// end

// Hirect Job
.hire-chat-section {
  h3.title-sm {
    color: #0e101a;
    font-size: 30px;
    font-weight: bold;
    line-height: normal;
    text-align: center;
    margin-bottom: 45px;
  }
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
    font-size: 14px;
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

.btn-app {
  border-radius: 50px;
  background-color: #2ce2a2;
  border-color: #2ce2a2;
  color: #0e101a;
  font-size: 16px;
  font-weight: 700;
  padding: 10px 30px;
  line-height: normal;
}

.candi-value {
  font-size: 14px;
}

// 1 st div

.white-btn {
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
  border-radius: 24px;
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
    line-height: 40px;
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
  width: 224px;
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

// end startups-logo
@media only screen and (min-width: 768px) and (max-width: 1299px) {
  .direct-banner {
    padding: 80px 0;
  }

  .hire-chat {
    padding-bottom: 60px;
  }

  .job-available-section,
  .startup-section {
    padding-bottom: 80px;
  }

  .hire-now h2,
  .direct-banner h1,
  .direct-text h2 {
    font-size: 32px;
  }

  .direct-text .startup-btn {
    width: 240px;
    height: 40px;
  }

  .available-list li span {
    font-size: 15px;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1199px) {

  .hire-now h2,
  .direct-banner h1,
  .direct-text h2 {
    font-size: 26px;
  }

  .direct-banner {
    padding: 70px 0;
  }

  .direct-text .startup-btn {
    width: 195px;
    height: 40px;
  }

  .hire-now p {
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 35px;
  }

  .available-list li {
    width: 18.4%;
    margin-bottom: 20px;
    margin-right: 2%;
  }

  .available-list li:nth-child(6n) {
    margin-right: 2%;
  }

  .available-list li:nth-child(5n) {
    margin-right: 0%;
  }

  .job-available-section,
  .startup-section {
    padding-bottom: 65px;
  }

  .startups-logo-list li {
    margin-bottom: 35px;
  }

  .direct-Candidates.first {
    padding-right: 84px;
  }

  .direct-Candidates.two {
    padding-left: 0;
  }
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
  .direct-Candidates.two {
    padding-left: 0px;
  }

  .direct-Candidates.first {
    padding-right: 15px;
  }

  .direct-text .startup-btn {
    width: 150px;
    height: 45px;
    font-size: 13px;
    line-height: 16px;
  }

  .direct-text button.btn.default-btn.button-sm {
    height: 45px;
    font-size: 13px;
    line-height: 16px;
    width: 150px;
  }

  .direct-text h2 {
    margin-bottom: 15px;
  }

  .direct-text button {
    margin-top: 30px;
  }

  .direct-text {
    height: 160px;
  }

  .available-list li {
    width: 23.5%;
  }

  .available-list li:nth-child(5n) {
    margin-right: 2%;
  }

  .available-list li:nth-child(4n) {
    margin-right: 0;
  }

  .startups-logo-list li {
    width: 16.66%;
    text-align: center;
    padding: 0 10px;
  }
}

@media only screen and (min-width: 300px) and (max-width: 767px) {
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
    line-height: 20px;
    padding: 5px 6px;
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
    flex-direction: column-reverse;
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
    flex-direction: column-reverse;
    margin-top: 40px;
    align-items: center;
    justify-content: center;
  }

  .hire-now h2 {
    font-size: 23px;
    margin-bottom: 25px;
  }

  .hire-chat {
    padding-bottom: 60px;
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
    padding-bottom: 20px;
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
    flex-direction: column-reverse;
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
}

/******* end Home Page ************/
</style>
