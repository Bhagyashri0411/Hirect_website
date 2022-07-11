<template>
  <!-- <Header /> -->
  <div class="head_body">
    <section class="recruiter-section">
      <div class="containernewpage">
        <img class="logostyle" src="~/assets/img/hirect-logo.png" alt="" />
      </div>
      <div class="recruiter-banner">
        <div class="containernewpage">
          <div class="row">
            <div class="info-div">
              <div class="px-0.5 py-0.5">
                <div class="detail-box">
                  <div class="title-md-head">
                    <b>Hire</b> Top Tech Talent from India
                  </div>
                  <div class="title-md-new">Fast, Direct, Affordable.</div>
                </div>
              </div>
            </div>

            <div class="schedule-div">
              <div class="px-0.5 py-0.5">
                <newPage />
              </div>
            </div>
            <div class="recruiter-banner-details">
              <div class="recruiter-banner-imgborder">
                <div>
                  <img src="~/assets/img/check.jpg" class="image-new" alt="" />
                  <span class="imgtitle">Ready to Connect Candidate Pool</span>
                </div>
                <div>
                  <img src="~/assets/img/check.jpg" class="image-new" alt="" />
                  <span class="imgtitle"> Dedicated Hiring Expert Support</span>
                </div>
                <div>
                  <img src="~/assets/img/check.jpg" class="image-new" alt="" />
                  <span class="imgtitle"> Bulk Recruitment Solutions</span>
                </div>
                <div>
                  <img src="~/assets/img/check.jpg" class="image-new" alt="" />
                  <span class="imgtitle"> Affordable Skilled Talent</span>
                </div>
                <div>
                  <img
                    src="~/assets/img/newpageimage.png"
                    class="card_content"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- <footer class="footercss">
      <div class="containernewpage">
        ⓒ Elephantjob Private Limited. All Rights Reserved.
      </div>
    </footer> -->
  </div>
</template>

<script>
/* eslint-disable no-dupe-keys */
export default {
  components: {},
  head() {
    return {
      title: 'Hire Top Tech Talent from India',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Free Job Portal connects highly matching jobseekers. Chat directly in-app and get the best candidates. Download Hirect to post a job for free online. ',
        },
      ],
    };
  },
  data() {
    return {
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
      getUserInf: {
        userPosition: '',
      },
    };
  },

  // methods: {
  //   videoPlayClick() {
  //     this.RecruiterLoginDialogVisible = true;
  //   }
  // }
  jsonld() {
    return {
      '@context': 'https://schema.org/',
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
          item: 'https://www.hirect.in/recruiter-sg',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.containernewpage {
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
}

.logostyle {
  top: 25px;
  position: absolute;
  height: 55px;
}

.recruiter-banner {
  padding-top: 100px;
}

.recruiter-section {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  // height: calc(100vh - 38px);
}

.recruiter-section:before {
  content: " ";
  position: absolute;
  width: 30%;
  height: 100vh;
  z-index: -1;
  right: 0px;
  background: #29e09e;
}

.info-div {
  width: 50%;
  float: right;
}

.schedule-div {
  max-width: 460px;
  margin: 0 15px 0 80px;
}

.detail-box {
  margin-top: 60px;

  .title-md-new {
    padding: 3px 15px;
    font-size: 2.35rem;
    max-width: 460px;
    background-color: #28e19d;
    font-weight: bold;
  }

  .title-md-head {
    font-size: 2.3rem;
    font-weight: 400;
  }
}

.recruiter-banner-details {
  width: 100%;
  max-width: 540px;
  position: absolute;
  padding-top: 220px;

  .recruiter-banner-imgborder {
    border: 4px solid #29e09d;
    border-radius: 20px;
    padding: 5px;
    margin-top: 35px;
    max-width: 460px;
    position: relative;

    .image-new {
      position: relative;
      width: 55px;
      height: 50px;
      background-size: cover;
    }
    .imgtitle {
      font-size: 16px;
      font-weight: 600;
      line-height: 55px;
    }
    .card_content {
      position: absolute;
      left: 310px;
      top: 12px;
      height: 270px;
    }
  }
}

.footercss {
  border-top: 1px solid;
  padding: 5px;
  bottom: 0;
  position: absolute;
  font-size: 15px;
  font-weight: 600;
  width: 100%;
}

// Responsive Code

@media only screen and (min-width: 1340px) and (max-width: 1499px) {
  // .containernewpage {
  //   max-width: 910px;
  // }
  .schedule-div {
    max-width: 390px;
    margin: auto;
  }
  .recruiter-banner-details {
    max-width: 400px;
    padding-top: 200px;

    .recruiter-banner-imgborder {
      .image-new {
        width: 36px;
        height: 35px;
      }
      .imgtitle {
        font-size: 14px;
        line-height: 45px;
      }
      .card_content {
        top: 25px;
        left: 260px;
        padding: 0;
        height: 195px;
      }
    }
  }

  .detail-box {
    .title-md-new {
      font-size: 2.05rem;
      max-width: 404px;
      text-align: center;
    }

    .title-md-head {
      font-size: 2rem;
    }
  }
}

@media only screen and (min-width: 1200px) and (max-width: 1341px) {
  .containernewpage {
    max-width: 900px;
  }
  .recruiter-section:before {
    width: 31.5%;
  }
  .schedule-div {
    max-width: 390px;
    margin: auto;
  }
  .recruiter-banner-details {
    max-width: 400px;
    padding-top: 160px;

    .recruiter-banner-imgborder {
      .image-new {
        width: 36px;
        height: 35px;
      }
      .imgtitle {
        font-size: 14px;
        line-height: 52px;
      }
      .card_content {
        top: 40px;
        left: 240px;
        padding: 0;
        height: 230px;
      }
    }
  }
  .detail-box {
    .title-md-new {
      font-size: 1.85rem;
      max-width: 368px;
      text-align: center;
    }

    .title-md-head {
      font-size: 1.8rem;
    }
  }
}

@media only screen and (min-width: 769px) and (max-width: 1201px) {
  .containernewpage {
    max-width: 900px;
  }
  .recruiter-section:before {
    width: 31.5%;
  }
  .schedule-div {
    max-width: 390px;
    margin: auto;
  }
  .recruiter-banner-details {
    max-width: 400px;
    padding-top: 160px;

    .recruiter-banner-imgborder {
      .image-new {
        width: 36px;
        height: 35px;
      }
      .imgtitle {
        font-size: 14px;
        line-height: 52px;
      }
      .card_content {
        top: 40px;
        left: 240px;
        padding: 0;
        height: 230px;
      }
    }
  }
  .detail-box {
    .title-md-new {
      font-size: 1.85rem;
      max-width: 368px;
      text-align: center;
    }

    .title-md-head {
      font-size: 1.8rem;
    }
  }
}

@media only screen and (min-width: 769px) and (max-width: 1130px) {
  .containernewpage {
    max-width: 800px;
  }

  .recruiter-section:before {
    width: 31%;
  }

  .schedule-div {
    max-width: 345px;
    margin: auto;
  }

  .recruiter-banner-details {
    max-width: 365px;
    padding-top: 160px;

    .recruiter-banner-imgborder {
      .image-new {
        width: 36px;
        height: 35px;
      }
      .imgtitle {
        font-size: 13px;
        line-height: 45px;
        margin-left: -5px;
      }
      .card_content {
        top: 34px;
        left: 225px;
        padding: 0;
        height: 200px;
      }
    }
  }

  .detail-box {
    .title-md-new {
      font-size: 1.45rem;
      max-width: 294px;
      text-align: center;
    }

    .title-md-head {
      font-size: 1.4rem;
    }
  }
}

@media only screen and (min-width: 769px) and (max-width: 940px) {
   .recruiter-section:before {
    width: 28%;
  }

  .containernewpage {
    max-width: 700px;
  }

  .schedule-div {
    max-width: 317px;
    margin: 0 5px 0 40px;
  }
}

@media only screen and (min-width: 769px) and (max-width: 830px) {
   .recruiter-section:before {
    width: 28%;
  }

  .containernewpage {
    max-width: 680px;
  }

  .schedule-div {
    max-width: 317px;
    margin: 0 5px 0 20px;
  }
  .recruiter-banner-details {
    max-width: 340px;
    .recruiter-banner-imgborder {
      .image-new {
        width: 34px;
        height: 30px;
      }
      .imgtitle {
        font-size: 12px;
        line-height: 42px;
        margin-left: -5px;
      }
      .card_content {
top: 34px;
    left: 208px;
    padding: 0;
    height: 180px;
      }
    }
  }
}
@media only screen and (min-width: 300px) and (max-width: 769px) {
  .recruiter-banner {
    padding: 80px 0;
  }
  .recruiter-section:before {
    content: " ";
    position: absolute;
    width: 100%;
    height: 32%;
    right: 0;
    left: 0px;
    bottom: 65px;
    top: 0;
    margin: auto;
  }

  .recruiter-section {
    height: auto;
  }

  .logostyle {
    top: 30px;
    position: absolute;
    height: 53px;
    margin: auto;
    right: 0;
    left: 0;
  }

  .containernewpage {
    max-width: 450px;
  }

  .info-div {
    width: 100%;
    justify-content: center;
  }

  .schedule-div {
    width: 100%;
    max-width: 450px;
    margin: auto;
    margin-top: 50px;
  }
  .recruiter-banner-details {
    width: 100%;
    max-width: 450px;
    position: relative;
    padding-top: 10px;
    margin: auto;

    .recruiter-banner-imgborder {
      border: 4px solid #2ce2a2;
      .image-new {
        width: 45px;
        height: 40px;
      }

      .card_content {
        left: 275px;
        top: 5px;
        height: 245px;
        padding: 9px;
      }
      .imgtitle {
        font-size: 14px;
        line-height: 47px;
      }
    }
  }

  .detail-box {
    margin-top: 20px;

    .title-md-new {
      font-size: 1.3rem;
      max-width: 265px;
      margin: auto;
    }

    .title-md-head {
      font-size: 1.6rem;
      text-align: center;
    }
  }
  .footercss {
    font-size: 18px;
    bottom: auto;
  }
}

@media only screen and (min-width: 300px) and (max-width: 546px) {
  .containernewpage {
    max-width: 380px;
  }
  .logostyle {
    height: 50px;
  }
  .schedule-div {
    max-width: 380px;
  }
  .recruiter-banner-details {
    max-width: 380px;

    .recruiter-banner-imgborder {
      .imgtitle {
        font-size: 12.5px;
      }
      .image-new {
        width: 40px;
        height: 36px;
      }

      .card_content {
        left: 240px;
        top: 23px;
        height: 210px;
        padding: 0 0;
      }
    }
  }

  .detail-box {
    margin-top: 25px;

    .title-md-new {
      font-size: 1.1rem;
      max-width: 232px;
      text-align: center;
      margin: auto;
    }

    .title-md-head {
      font-size: 1.4rem;
      text-align: center;
    }
  }

  .footercss {
    font-size: 15px;
  }
}

@media only screen and (min-width: 300px) and (max-width: 520px) {
  .logostyle {
    height: 47px;
  }
  .containernewpage {
    max-width: 360px;
  }
  .schedule-div {
    max-width: 360px;
  }
  .recruiter-banner-details {
    max-width: 346px;

    .recruiter-banner-imgborder {
      .image-new {
        width: 35px;
        height: 33px;
      }

      .card_content {
        left: 213px;
        top: 20px;
        height: 180px;
        padding: 0px 0;
      }
      .imgtitle {
        font-size: 11px;
        line-height: 40px;
      }
    }
  }
  .detail-box {
    margin-top: 25px;

    .title-md-new {
      font-size: 1rem;
      max-width: 212px;
      text-align: center;
      margin: auto;
    }

    .title-md-head {
      font-size: 1.4rem;
      text-align: center;
    }
  }
  .footercss {
    font-size: 14px;
  }
}

@media only screen and (min-width: 300px) and (max-width: 400px) {
  .containernewpage {
    max-width: 340px;
  }
  .schedule-div {
    max-width: 300px;
  }
  .recruiter-banner-details {
    max-width: 300px;

    .recruiter-banner-imgborder {
      .image-new {
        width: 26px;
        height: 25px;
      }

      .card_content {
        left: 200px;
        top: 13px;
        height: 185px;
        padding: 24px 0;
      }
      .imgtitle {
        line-height: 35px;
      }
    }
  }
  .detail-box {
    margin-top: 30px;

    .title-md-head {
      font-size: 1.2rem;
      text-align: center;
    }
  }

  .footercss {
    font-size: 11px;
    text-align: center;
  }
}

@media only screen and (min-width: 300px) and (max-width: 366px) {
  .containernewpage {
    max-width: 290px !important;
  }
  .recruiter-banner-details {
    max-width: 280px !important;
    .recruiter-banner-imgborder {
      .image-new {
        width: 24px !important;
        height: 22px !important;
      }
      .card_content {
        left: 180px !important;
        padding: 20px 0 !important;
      }
      .imgtitle {
        font-size: 10px !important;
      }
    }
  }
}

@media only screen and (min-width: 300px) and (max-width: 335px) {
  .recruiter-banner-details .recruiter-banner-imgborder .imgtitle {
    font-size: 9px !important;
    line-height: 25px !important;
  }
  .recruiter-banner-details .recruiter-banner-imgborder .card_content {
    left: 160px !important;
    padding: 30px 0 !important;
    top: -10px !important;
  }
  .recruiter-banner-details {
    max-width: 260px !important;
  }
}

@media screen and (min-width: 769px) and (min-height: 750px) {
  .recruiter-banner {
    padding: 100px 0px;
  }
}

@media screen and (min-width: 769px) and (min-height: 900px) {
  .recruiter-banner {
    padding: 150px 0px;
  }
}
</style>
