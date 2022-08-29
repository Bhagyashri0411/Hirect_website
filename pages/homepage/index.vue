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
            <!-- <p>
              The traditional hiring process has lost its viability due to the
              rapid rise in demand for a skilled workforce. Shortlisting
              candidates is a time-consuming process. Conducting interviews with
              irrelevant candidates yields unfruitful results. Outsourcing the
              process is often unreliable and expensive.
            </p> -->

            <p>
              Hirect simplifies the hiring process. Directly chatting with
              verified candidates matched by the AI algorithm ensures a simple,
              quick and effective hiring experience.
            </p>
          </div>
          <div class="start-hiring-button">
            <!-- <NuxtLink to="/candidates" class="btn btn-app start-hiring">Start Hiring</NuxtLink> -->
            <Search :page="'homepage'" />
            <div class="row infographs">
              <div class="col-md-3">
                <div class="image-placeholder">
                  <img src="~/assets/imgs/verified-recruiters.svg" alt="" srcset=""/>
                  </div>
                  <p class="headline">190K+</p>
                  <span>Verified Recruiters</span>
              </div>
              <div class="col-md-3">
                <div class="image-placeholder">
                  <img src="~/assets/imgs/jobs-posted.svg" alt="" srcset=""/>
                  </div>
                  <p class="headline">500K+</p>
                  <span>Posted Jobs</span>
              </div>
              <div class="col-md-3">
                <div class="image-placeholder">
                  <img src="~/assets/imgs/chat-conversations.svg" alt="" srcset=""/>
                  </div>
                  <p class="headline">25M+</p>
                  <span>Chat Conversations</span>
              </div>
              <div class="col-md-3">
                <div class="image-placeholder">
                  <img src="~/assets/imgs/job-seekers.svg" alt="" srcset=""/>
                  </div>
                  <p class="headline">3.8M+</p>
                  <span>Verified Candidates</span>
              </div>
            </div>
          </div>
          <!-- <div class="start-hiring-button">
            <NuxtLink to="/connect" class="btn btn-app start-hiring">Start Hiring</NuxtLink>
          </div> -->
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
                  We will send you a link via SMS. To download the app, simply
                  open it.
                </p>
                <GetAppInput />
                <!-- <button v-if="$device.isMobileOrTablet" class="btn btn-app" style="margin-left: 20px; border-radius:50px" @click="sendSms">
        Get App
      </button> -->
              </div>
            </div>
            <div class="col-md-6">
              <div class="get-app-img">
                <img src="~/assets/imgs/chat-directly-new.png" loading="lazy" alt="section image"
                  class="hire-now-image" />
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
                  <NuxtLink  :to="{ name: 'search-job-seekers', params: { id: 'IT' }}">
                    <span><span>IT Engineering</span> <br /><br /><span class="candi-value">685K+
                        Candidates</span></span>
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink  :to="{ name: 'search-job-seekers', params: { id: 'Operations' }}">
                    <span>Operations <br /><br /><span class="candi-value">490K+ Candidates
                      </span></span>
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink  :to="{ name: 'search-job-seekers', params: { id: 'BPO & KPO' }}">
                    <span>BPO & KPO <br /><br /><span class="candi-value">360K+ Candidates
                      </span></span>
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink  :to="{ name: 'search-job-seekers', params: { id: 'Sales & BD' }}">
                    <span>Sales & BD<br /><br />
                      <span class="candi-value">350K+ Candidates </span></span>
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink  :to="{ name: 'search-job-seekers', params: { id: 'Finance' }}">
                    <span>Finance <br /><br /><span class="candi-value">320K+ Candidates</span></span>
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink  :to="{ name: 'search-job-seekers', params: { id: 'Marketing' }}">
                    <span>Marketing<br /><br /><span class="candi-value">255K+ Candidates</span></span>
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink  :to="{ name: 'search-job-seekers', params: { id: 'Personnel' }}">
                    <span>Personnel <br /><br /><span class="candi-value">215K+ Candidates
                      </span></span>
                  </NuxtLink>
                </li>
                <li>
                  <span style="text-align: center">
                    <NuxtLink class="nav-link" to="/hire/candidates">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-chevron-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                      </svg>
                      <br /><br />
                      <p style="font-size: 16px;">View More</p>
                    </NuxtLink>
                    <!-- <div>View More</div> -->
                  </span>
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
                Decision-Makers
              </h2>
              <p style="color: #4d5358">
                Hirect encourages direct and quick responses between job-seekers
                and recruiters. Through the bi-directional direct chat feature,
                candidates can chat directly with relevant and verified
                recruiters on this job search app.
              </p>
              <!-- <button class="btn btn-app" @click="job - seeker">Get Connected</button> -->
              <NuxtLink class="btn btn-app start-hiring" to="/job-seeker">
                Get Hired
              </NuxtLink>
            </div>
          </div>
          <div class="col-md-6">
            <div class="hire-now-img img1" style="text-align: center">
              <img src="~/assets/imgs/hire-direct-hirect-new.png" loading="lazy" alt="section image" class="hire-img" />
            </div>
          </div>
        </div>
      </div>

      <div class="hire-chat">
        <div class="container">
          <div class="row instant-hiring-row">
            <div class="col-md-6">
              <div class="hire-now-img img2">
                <img src="~/assets/imgs/hirect-chart.png" loading="lazy" alt="section image" class="next-img" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="hire-now">
                <h2>Hire Directly with Hirect</h2>
                <p>
                  3.8M+ candidates chat directly with 190K+ recruiters on Hirect.
                </p>
                <NuxtLink class="btn white-btn" to="/connect">
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
                    <NuxtLink to="/hire/candidates?skills=&location=Bengaluru">
                      <img src="~/assets/imgs/City-logos/Bengaluru.png" loading="lazy" alt="Bengaluru" />
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/hire/candidates?skills=&location=Delhi">
                      <img src="~/assets/imgs/City-logos/Delhi.png" loading="lazy" alt="Delhi" />
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/hire/candidates?skills=&location=Mumbai">
                      <img src="~/assets/imgs/City-logos/Mumbai.png" loading="lazy" alt="Mumbai" />
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/hire/candidates?skills=&location=Pune">
                      <img src="~/assets/imgs/City-logos/pune.png" loading="lazy" alt="Pune" />
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/hire/candidates?skills=&location=Hyderabad">
                      <img src="~/assets/imgs/City-logos/Hyderabad.png" loading="lazy" alt="Hyderabad" />
                    </NuxtLink>
                  </li>
                </ul>
              </div>
              <div class="viewall" style="text-align: center">
                <NuxtLink class="btn btn-app view-btn" to="/hire/candidates" style="border-radius: 50px">View More
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="add-more">and many more...</div> -->
    </section>
    <!----jobs-available end----------->

    <!----startup start----------->
    <section class="startup-section">
      <div class="startups-logo">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h3 class="title-sm">
                More than <span style="color: #2ce2a2">190K</span> Recruiters
                trust <span style="color: #2ce2a2">Hirect</span>
              </h3>
              <div class="jobs-list">
                <ul class="startups-logo-list">
                  <li>
                    <img src="~/assets/imgs/websites-logo/lenskart.png" loading="lazy" alt="Lenskart" />
                  </li>
                  <li>
                    <img src="~/assets/imgs/websites-logo/Byju_s.png" loading="lazy" alt="Byjus" />
                  </li>
                  <li>
                    <img src="~/assets/imgs/websites-logo/Ajio.png" loading="lazy" alt="Byjus" />
                  </li>
                  <li>
                    <img loading="lazy" alt="Square Yard" src="~/assets/imgs/websites-logo/squareyards.png" />
                  </li>
                  <li>
                    <img src="~/assets/imgs/websites-logo/Flipkart.png" loading="lazy" alt="Flipkart" />
                  </li>
                  <li>
                    <img src="~/assets/imgs/websites-logo/Udaan.png" loading="lazy" alt="Udaan" />
                  </li>
                </ul>
                <ul class="startups-logo-list">
                  <li>
                    <img src="~/assets/imgs/websites-logo/Amazom.png" loading="lazy" alt="Amazon" />
                  </li>
                  <li>
                    <img src="~/assets/imgs/websites-logo/upgrad.png" loading="lazy" alt="Upgrad" />
                  </li>
                  <li>
                    <img src="~/assets/imgs/websites-logo/FreeCharge.png" loading="lazy" alt="Freecharge" />
                  </li>
                  <li>
                    <img src="~/assets/imgs/websites-logo/aditya_birla.png" loading="lazy" alt="Aditya Birla" />
                  </li>
                  <li>
                    <img src="~/assets/imgs/websites-logo/walmart.png" loading="lazy" alt="Walmart" />
                  </li>
                  <li>
                    <img src="~/assets/imgs/websites-logo/NOBroker.png" loading="lazy" alt="No Broker" />
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
      <div class="row" style="justify-content: center; width:100%;">
        <img class="slick-icon" src="~/assets/imgs/swipe.png" loading="lazy" alt="swipe_icon" />
      </div>
    </div>
    <!----Testimonial End----------->

    <!----media card start----------->
    <section class="media-card-section">
      <div class="startups-logo">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <!-- <div class="jobs-list"> -->
              <div class="testimonials">
                <MedialistHome />
                <div class="row" style="justify-content: center; width: 100%;">
                  <img class="slick-icon" src="~/assets/imgs/swipe.png" loading="lazy" alt="swipe_icon" />
                </div>
              </div>
              <!-- </div> -->
            </div>
          </div>
        </div>
      </div>
    </section>
    <!----media card end----------->

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
import MedialistHome from '../../components/MedialistHome.vue';

export default {
  components: {
    DownloadModal,
    GetAppInput,
    MedialistHome,
  },
  head() {
    return {
      title: 'Best Job App for Recruiters and Job Seekers - Hirect',
      link: [
        {
          rel: 'canonical',
          href: 'https://unhirect.in',
        },
      ],
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
.infographs{
  text-align: -webkit-center;
  margin-bottom: 20px;
}
.headline{
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 5px !important;
}
.image-placeholder{
  width: 60px !important;
    height: 60px;
    border-radius: 50%;
    padding-top: 5%;
    background-color: #F2F4F8;
}
.media-card-section {
  background-color: #f2f4f8;

  .mediahead {
    text-align: center;
    margin: 10px 0;
    margin-bottom: 20px;
    font-weight: bold;
  }
}

.slick-icon {
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

.get-app-img {
  margin-left: 30%;
}

.direct-banner {
  padding: 110px 0 20px 0;

  h1 {
    color: #0e101a;
    font-size: 60px;
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
    margin-top: 7%;
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
.add-more {
  color: black;
  font-size: 24px;
  text-align: center;
  margin-top: -38px;
  font-weight: bold;
}

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
  // margin-left: 10px;
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

.available-list li {
  a {
    text-decoration: none;
    color: #0e101a;
  }

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
  // cursor: pointer;
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
  margin-left: -5%;
}

.next-img {
  margin-left: -4%;
}

.city-logo li {
  padding: 10px 0px;
}

@media only screen and (min-width: 850px) and (max-width: 1199px) {
  .hire-chat-section {
    .hire-chat {
      height: 477px;
    }
  }

  .img1 {
    text-align: center;
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

  .next-img {
    height: 100%;
  }

  .hire-now {
    margin-left: 0px;
  }

  .input-container {
    display: none;
  }

  .input-container-mobile {
    display: block;
  }
}

@media only screen and (min-width: 336px) and (max-width: 767px) {
  .infographs div{
    width: 50%;
  }
  .image-placeholder{
    margin-top: 10%;
  }

  .direct-banner .start-hiring-button {
    margin-top: 0px;
  }

  .hire-chat-section .hire-chat {
    height: 353px;
  }

  .slick-icon {
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

  .hire-chat-section .hire-chat {
    height: 385px;
  }

  .hire-now {
    padding-bottom: 15px;
  }

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

  .hire-chat-section .hire-chat {
    height: 353px;
  }

  .hire-now {
    padding-bottom: 15px;
    margin-left: -11px;
  }

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
}

/******* end Home Page ************/
</style>
