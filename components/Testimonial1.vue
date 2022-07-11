<template>
    <div class="client-testimonial">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h3>Satisfied Clientele</h3>
                    <div class="testimonial-carousel">
                        <VueSlickCarousel v-bind="settings" class="carousel">
                            <div class="testimonial-card">
                                <div class="testimonial-card-user">
                                    <div class="client-img">
                                        <img src="~/assets/img/hemant-shah.png" alt="" />
                                    </div>
                                    <div class="testimonial-info">
                                        <h4>Hemant Shah</h4>
                                        <h5>Founder <br />Gfxbandits & ITEdvantage</h5>
                                    </div>
                                </div>
                                <p>
                                    Recently we came across Hirect, the best job app to use.
                                    User-friendly and free of cost. Job seekers found on Hirect
                                    are very professional. I recommend this app because Hirect
                                    takes only the valid and correct information from the
                                    employers and then approves. The app has a great pool of
                                    candidates. I Highly recommend this application.
                                </p>
                            </div>

                            <div class="testimonial-card">
                                <div class="testimonial-card-user">
                                    <div class="client-img">
                                        <img src="~/assets/img/rhea-nair.png" alt="" />
                                    </div>
                                    <div class="testimonial-info">
                                        <h4>Rhea Nair</h4>
                                        <h5>Recruitment Executive Expertrons</h5>
                                    </div>
                                </div>
                                <p>
                                    Hirect App is very convenient and easy-going. We were able to
                                    set up the profile easily with the guide. The registration
                                    process was quick. Thanks to this job application, we were
                                    able to get candidates with a click, and we could also screen
                                    them very easily. Highly recommended to all the Recruiters and
                                    Jobseekers.
                                </p>
                            </div>

                            <div class="testimonial-card">
                                <div class="testimonial-card-user">
                                    <div class="client-img">
                                        <img src="~/assets/img/pravin.png" alt="" />
                                    </div>
                                    <div class="testimonial-info">
                                        <h4>Pravin Vidhyadharan</h4>
                                        <h5>Founder & CEO <br />Namas industries</h5>
                                    </div>
                                </div>
                                <p>
                                    Hirect App is very user-friendly. I managed to set up my
                                    profile within a few minutes and see the candidates that
                                    matched my job requirement instantly. I would highly recommend
                                    all recruiters to the user the Hirect App!
                                </p>
                            </div>

                            <div class="testimonial-card">
                                <div class="testimonial-card-user">
                                    <div class="client-img">
                                        <img src="~/assets/img/younus.png" alt="" />
                                    </div>
                                    <div class="testimonial-info">
                                        <h4>Younus Shaik</h4>
                                        <h5>
                                            Senior HR-Specialist <br />NStarX India Private Limited
                                        </h5>
                                    </div>
                                </div>
                                <p>
                                    Hirect is the best job app to use as it enables direct chat
                                    between recruiters and job seekers. Those seeking work or even
                                    those looking to hire should check out this app. It's a free
                                    application.
                                </p>
                            </div>

                            <div class="testimonial-card">
                                <div class="testimonial-card-user">
                                    <div class="client-img">
                                        <img src="~/assets/img/ved-anand.png" alt="" />
                                    </div>
                                    <div class="testimonial-info">
                                        <h4>Ved Anand</h4>
                                        <h5>
                                            TripCart
                                        </h5>
                                    </div>
                                </div>
                                <p>
                                    Hirect India - Startup Jobs & Hiring App is very user friendly. It is very easy to
                                    use. I set up my profile within a few minutes and instantly saw candidates that
                                    matched my job requirement. This application has a great pool of candidates, and I
                                    was able to hire 2 candidates for my company. I would highly recommend all
                                    recruiters to use the Hirect App.
                                </p>
                            </div>

                            <div class="testimonial-card">
                                <div class="testimonial-card-user">
                                    <div class="client-img">
                                        <img src="~/assets/img/akshay-chavan.png" alt="" />
                                    </div>
                                    <div class="testimonial-info">
                                        <h4>Akshay Chavan</h4>
                                        <h5>
                                            Bosch India
                                        </h5>
                                    </div>
                                </div>
                                <p>
                                    Hirect app is a platform where the recruiter can hire the candidate and jobseeker
                                    can get the job. Direct connectivity between recruiter and jobseeker is possible
                                    with no consultancy involved. All the recruiters are verified with proper documents,
                                    and job seekers' profiles are verified. The app enables direct chat between the
                                    recruiter and jobseeker. I recommend the Hirect app to everyone looking to hire or
                                    even for jobs.
                                </p>
                            </div>
                        </VueSlickCarousel>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';

export default {
  name: 'Testimonial1',
  components: {
    VueSlickCarousel,
  },

  data() {
    return {
      settings: {
        arrows: false,
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        initialSlide: 0,
        responsive: [{
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            centerMode: false,
            centerPadding: '0px',
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            centerMode: false,
            centerPadding: '0px',
          },
        },
        {
          breakpoint: 599,
          settings: {
            slidesToShow: 1,
            centerMode: false,
            centerPadding: '0px',
          },
        },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.client-testimonial {
    padding: 40px 0 70px;
    background: #f1f4f7;
}

.client-testimonial h3 {
    color: #0e101a;
    font-size: 48px;
    font-weight: bold;
    line-height: normal;
    text-align: left;
    margin-bottom: 40px;
}

.testimonial-carousel {
    padding-bottom: 50px;
}

.testimonial-card {
    height: 460px;
    border-radius: 10px;
    background-color: #fff;
    padding: 25px 30px;
    width: 95% !important;
}

.slick-list {
    padding: 0px !important;
}

.testimonial-card .client-img {
    margin-bottom: 0px;
}

.testimonial-card .client-img img {
    width: 113px;
    height: 113px;
    border-radius: 50%;
}

.testimonial-card-user {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
}

.testimonial-card h4 {
    color: #0e101a;
    font-size: 22px;
    font-weight: bold;
    line-height: 28px;
    text-align: left;
    margin-bottom: 10px;
}

.testimonial-card h5 {
    font-size: 18px;
    line-height: 24px;
    color: #000000;
}

.testimonial-info {
    padding-left: 20px;
    width: calc(100% - 113px);
}

.testimonial-card p {
    color: #808080;
    font-size: 16px;
    font-weight: normal;
    line-height: 24px;
    text-align: left;
}

@media only screen and (min-width: 768px) and (max-width: 1299px) {
    .client-testimonial h3 {
        font-size: 40px;
    }

    .testimonial-card {
        padding: 25px 25px;
        height: 450px;
        margin-right: 40px;
    }

    .testimonial-card-user {
        margin-bottom: 25px;
    }
}

@media only screen and (min-width: 768px) and (max-width: 1199px) {
    .testimonial-card {
        padding: 25px 25px;
        height: 440px;
    }

    .testimonial-card .client-img img {
        width: 100px;
        height: 100px;
    }

    .testimonial-info {
        padding-left: 15px;
        width: calc(100% - 100px);
    }

    .testimonial-card h4 {
        font-size: 18px;
        margin-bottom: 10px;
    }

    .testimonial-card p {
        font-size: 15px;
        line-height: 21px;
    }

    .client-testimonial h3 {
        font-size: 36px;
        margin-bottom: 30px;
    }

    .testimonial-carousel {
        padding-bottom: 30px;
    }

    .testimonial-card h5 {
        font-size: 16px;
        line-height: 21px;
    }

    .testimonial-card-user {
        margin-bottom: 20px;
    }
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
    .testimonial-card {
        margin: 0 10px;
    }

    .testimonial-card {
        padding: 25px 18px;
        height: 385px;
    }

    .testimonial-card h5 {
        font-size: 14px;
        line-height: 20px;
    }

    .testimonial-info {
        padding-left: 12px;
        width: calc(100% - 100px);
    }

    .testimonial-card h4 {
        font-size: 18px;
        margin-bottom: 10px;
        line-height: normal;
    }
}

@media only screen and (min-width: 300px) and (max-width: 767px) {
    .testimonial-card {
        margin: 0;
        height: auto;
        padding: 30px 20px;
    }

    .testimonial-card .client-img {
        margin-bottom: 15px;
        text-align: center;
    }

    .testimonial-card h4 {
        font-size: 21px;
        margin-bottom: 10px;
        line-height: normal;
        text-align: center;
    }

    .testimonial-card p {
        font-size: 14px;
        text-align: center;
        line-height: 20px;
    }

    .client-testimonial h3 {
        font-size: 30px;
        margin-bottom: 30px;
    }

    .testimonial-carousel {
        padding-bottom: 25px;
    }

    .client-testimonial {
        padding: 50px 0;
    }

    .testimonial-card-user {
        flex-direction: column;
    }

    .testimonial-info {
        width: 100%;
        padding: 0;
        text-align: center;
    }

    .testimonial-card h5 br {
        display: none;
    }

    .testimonial-card h5 {
        font-size: 16px;
        line-height: normal;
    }

    .testimonial-card-user {
        margin-bottom: 15px;
    }

    .testimonial-card {
        width: 100% !important;
    }
}
</style>
