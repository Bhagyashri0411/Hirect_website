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
              Sifting through various resumes and shortlisting candidates can be
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
                <!-- <a class="btn default-btn button-sm" href="https://recruiter.hirect.in/">
                                Get Connected
                            </a> -->

                <!-- <div class="input-container">
                  <el-input
                    @focus="inputFocus(2)"
                    maxlength="10"
                    placeholder="Enter 10 digit mobile number"
                    class="input-item"
                    style="width: 440px;"
                  >
                    <el-select
                      slot="prepend"
                      placeholder="+91"
                      style="width: 70px; border-radius: 50px;"
                    >
                      <el-option label="+91" value="+91"></el-option>
                    </el-select>
                  </el-input>
                  <NuxtLink class="btn default-btn button-sm" to="/connect"
                    >Get App</NuxtLink
                  >
                </div> -->
                <div class="input-container">
                  <div class="Sgdef">+65</div>
                  <el-input
                    @focus="inputFocus(2)"
                    maxlength="8"
                    placeholder="XXXX-YYYY"
                    class="input-item"
                  >
                  </el-input>
                  <NuxtLink class="btn default-btn button-sm" to="/connect"
                    >Get App</NuxtLink
                  >
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
    <section class="job-available-section">
      <div class="jobs-available">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h3 class="title-sm">Jobs available in 70+ categories</h3>
              <div class="jobs-list">
                <ul class="available-list">
                  <li>
                    <span
                      >IT Sector <br /><span class="candi-value"
                        >68 Candidate available</span
                      ></span
                    >
                  </li>
                  <li>
                    <span
                      >Design & Development <br /><span class="candi-value"
                        >124 Candidate available</span
                      ></span
                    >
                  </li>
                  <li>
                    <span
                      >Business & Consulting <br /><span class="candi-value"
                        >26 Candidate available</span
                      ></span
                    >
                  </li>
                  <li>
                    <span
                      >Project Management <br />
                      <span class="candi-value"
                        >68 Candidate available</span
                      ></span
                    >
                  </li>
                </ul>
              </div>
              <div class="jobs-list">
                <ul class="available-list">
                  <li>
                    <span
                      >Marketing & Communication <br /><span class="candi-value"
                        >68 Candidate available</span
                      ></span
                    >
                  </li>
                  <li>
                    <span
                      >Human Resources <br /><span class="candi-value"
                        >124 Candidate available</span
                      ></span
                    >
                  </li>
                  <li>
                    <span
                      >Customer & Support Care <br /><span class="candi-value"
                        >26 Candidate available</span
                      ></span
                    >
                  </li>
                  <li><span>View All</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!----jobs-available end----------->
    <section class="job-available-section">
      <div class="hire-chat">
        <div class="container">
          <div class="row">
            <div class="col-md-5">
              <div class="hire-now">
                <h2>
                  Direct Chat with Hiring <br />
                  Managers / HRs
                </h2>
                <p>
                  Now there is no need to wait for feedback. Candidates can
                  connect with the Recruiters directly on this job search app.
                  AI algorithm matches the candidates with the most relevant job
                  posts on the job app.
                </p>
                <!-- <a class="btn default-btn button-sm" href="https://recruiter.hirect.in/">
                                Instant Hiring
                            </a> -->
                <NuxtLink class="btn default-btn button-sm" to="/connect"
                  >Instant Hiring</NuxtLink
                >
              </div>
            </div>
            <div class="col-md-7">
              <div class="hire-now-img">
                <img src="~/assets/imgs/hire-direct-hirect-new.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="hire-chat">
        <div class="container">
          <div class="row">
            <div class="col-md-7">
              <div class="hire-now-img">
                <img src="~/assets/imgs/hire-direct-hirect-new.png" alt="" />
              </div>
            </div>
            <div class="col-md-5">
              <div class="hire-now">
                <h2>Hire Direct with Hirect</h2>
                <p>
                  AI algorithm of Hirect, the hiring app, connects businesses
                  with more than 2.3M+ qualified candidates.
                </p>
                <!-- <a class="btn default-btn button-sm" href="https://recruiter.hirect.in/">
                                Instant Hiring
                            </a> -->
                <NuxtLink class="btn default-btn button-sm" to="/connect"
                  >Instant Hiring</NuxtLink
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!----jobs-available start----------->
    <section class="job-available-section">
      <div class="jobs-available">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h3 class="title-sm">Jobs availabe in your city</h3>
              <div class="jobs-list">
                <ul class="available-list">
                  <li><span>Delhi</span></li>
                  <li><span>Bangalore</span></li>
                  <li><span>Mumbai</span></li>
                  <li><span>Chennai</span></li>
                  <li><span>Kochi</span></li>
                  <li><span>Kolkata</span></li>
                  <li><span>Indore</span></li>
                  <li><span>Goa</span></li>
                  <li><span>Chandigarh</span></li>
                  <li><span>Nagpur</span></li>
                  <li><span>Hyderabad</span></li>
                  <li><span>Surat</span></li>
                  <li><span>Lucknow</span></li>
                  <li><span>Gurugram</span></li>
                  <li><span>Bhopal</span></li>
                  <li><span>Pune</span></li>
                  <li><span>Noida</span></li>
                  <li><span>+More</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!----jobs-available end----------->
    <!----startup start----------->
    <section class="startup-section">
      <div class="startups-logo">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h3 class="title-sm">
                More than <span style="color: #2ce2a2">120K+</span> startups
                trust <span style="color: #2ce2a2">Hirect</span>
              </h3>
              <div class="jobs-list">
                <ul class="startups-logo-list">
                  <li><img src="~/assets/img/lenskart-logo.png" alt="" /></li>
                  <li><img src="~/assets/img/byju-logo.png" alt="" /></li>
                  <li><img src="~/assets/img/ajio-logo.png" alt="" /></li>
                  <li>
                    <img src="~/assets/img/square-yard-logo.png" alt="" />
                  </li>
                  <li><img src="~/assets/img/flipkart-logo.png" alt="" /></li>
                  <li><img src="~/assets/img/udaan-logo.png" alt="" /></li>
                  <li><img src="~/assets/img/amazon-logo.png" alt="" /></li>
                  <li><img src="~/assets/img/upgrad-logo.png" alt="" /></li>
                  <li><img src="~/assets/img/freecharge-logo.png" alt="" /></li>
                  <li><img src="~/assets/img/walmart-logo.png" alt="" /></li>
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
/******** Home Page **********/
.input-container {
  display: flex;
  justify-content: space-between;
}
.Sgdef {
  width: 70px;
  background-color: #e0e0e0;
  position: absolute;
  color: #b0b2b8;
  display: flex;
  align-items: center;
  border-radius: 5px 0px 0px 5px;
  border: 0px;
  height: 8%;
  z-index: 1;
  padding: 0 20px;
  cursor: pointer;
}
.candi-value {
  font-size: 14px;
}

// banner
.direct-banner {
  padding: 110px 0;
}

.direct-banner h1 {
  color: #0e101a;
  font-size: 50px;
  font-weight: bold;
  font-style: normal;
  letter-spacing: normal;
  line-height: normal;
  text-align: center;
  margin-bottom: 30px;
}

.direct-banner p {
  color: #808080;
  text-align: center;
  font-size: 14px;
  margin-bottom: 15px;
}
.direct-Candidates.two {
  padding-left: 56px;
}

.direct-Candidates {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}

.direct-text h2 {
  color: #0e101a;
  font-size: 36px;
  font-weight: 700;
  font-style: normal;
  letter-spacing: normal;
  line-height: normal;
  margin-bottom: 23px;
}

.hire-now-img {
  text-align: end;
}

.direct-text button {
  margin-top: 54px;
}

.direct-text p {
  color: #808080;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  letter-spacing: normal;
  line-height: 24px;
}

.direct-Candidates.first {
  padding-right: 70px;
}

.direct-banner .row {
  align-items: flex-end;
}

.direct-text .startup-btn {
  // width: 270px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  // box-shadow: 0px 5px 10px #00000036;
}

.direct-text {
  padding-bottom: 10px;
  margin-right: 8px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.direct-img img {
  max-width: 100%;
}

// end banner
// Hire Chat Section
.hire-chat-section {
  padding-bottom: 30px;
}

.hire-chat {
  //   padding-bottom: 80px;
  background-color: #f1f4f7;
}

.hire-chat .row {
  align-items: center;
}

.hire-now h2 {
  color: #0e101a;
  font-size: 56px;
  font-weight: bold;
  line-height: 66.8px;
  margin-bottom: 35px;
}

.hire-now p {
  color: #0e101a;
  font-size: 20px;
  font-weight: normal;
  line-height: 30px;
  margin-bottom: 45px;
}

// end Hire Chat Section
// jobs-available
.job-available-section,
.startup-section {
  padding-bottom: 110px;
}

.jobs-available {
  background-color: #f1f1f1;
  padding: 35px 0;
}

.available-list li {
  border-radius: 25px;
  background-color: #ffffff;
  display: flex;
  padding: 0px 14px;
  width: 100%;
  color: #000000;
  font-size: 18px;
//   font-weight: bold;
  line-height: 24px;
  text-align: center;
  align-items: center;
  justify-content: center;
  max-width: 244px;
  height: 160px;

  .candi-value{
    font-size: 14px;
    color: #808080;
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
  width: 224%;
  margin-bottom: 30px;
}

.available-list li:nth-child(6n) {
  margin-right: 0;
}

// end jobs-available
// startups-logo
.startups-logo {
  background-color: rgba(109, 141, 173, 0.1);
  padding-top: 30px;
}

.startups-logo-list {
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
}

.startups-logo-list li {
  width: 12%;
  margin-bottom: 45px;
}

.startups-logo-list li img {
  filter: grayscale(100%);
}

// end startups-logo

/******* end Home Page ************/

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
</style>
