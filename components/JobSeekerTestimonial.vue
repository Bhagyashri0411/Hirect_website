<template>
<div class="seeker-testimonial">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h3>Job Seekers Love Hirect, <br />Here’s Why?</h3>
                <div class="testimonial-carousel">
                    <VueSlickCarousel v-bind="settings" class="carousel">
                        <div class="testimonial-card">
                            <div class="seeker-img">
                                <img src="~/assets/img/palak-sharma.png" alt="" />
                            </div>
                            <h4>Palak Sharma</h4>
                            <p>
                                There are many job opportunities available on Hirect. I was
                                surfing through this app and found that it is helpful for
                                freshers, especially those searching for jobs.
                            </p>
                        </div>
                        <div class="testimonial-card">
                            <div class="seeker-img">
                                <img src="~/assets/img/pratyush.png" alt="" />
                            </div>
                            <h4>Pratyush R.</h4>
                            <p>
                                Now, it takes just a fraction of a second to find a respectful
                                and relevant job. Thanks to the Hirect App, things are much
                                more convenient and simplified for millions of job seekers. I
                                always recommend this App to my friends because I believe it's
                                better than other job seeking apps, I've come across till now.
                            </p>
                        </div>
                        <div class="testimonial-card">
                            <div class="seeker-img">
                                <img src="~/assets/img/rudra.png" alt="" />
                            </div>
                            <h4>Rudraksh Parihar</h4>
                            <p>
                                Are you looking for a job? Or are you looking to hire a team?
                                Hirect makes it easier for you. You can directly chat with
                                recruiters or with job seekers. How wonderful is that, isn't
                                it? All the recruiters are verified, and it is free. Hire or
                                get hired within a week. It is available on the Google play
                                store and the app store.
                            </p>
                        </div>
                        <div class="testimonial-card">
                            <div class="seeker-img">
                                <img src="~/assets/img/ayush.png" alt="" />
                            </div>
                            <h4>Ayush Parmar</h4>
                            <p>
                                Hirect is an excellent app for searching for jobs, and I also
                                love the options provided on the platform for the Jobs. There
                                are many opportunities available for Technical Jobs. My
                                favorite aspect of this website is that there are no charges
                                for posting jobs and you can contact the Human Resources and
                                Hiring Managers directly.
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
import VueSlickCarousel from "vue-slick-carousel";
export default {
    name: "Testimonial",
    components: {
        VueSlickCarousel
    },

    data() {
        return {
            settings: {
                arrows: false,
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 3,
                initialSlide: 0,
                responsive: [{
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2,
                            centerMode: false,
                            centerPadding: "0px"
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 1,
                            centerMode: false,
                            centerPadding: "0px"
                        }
                    },
                    {
                        breakpoint: 599,
                        settings: {
                            slidesToShow: 1,
                            centerMode: false,
                            centerPadding: "0px"
                        }
                    }
                ]
            }
        };
    }
};
</script>

<style lang="scss" scoped>
.seeker-testimonial {
    padding: 60px 0 80px;
    background: #f9fbff;
}

.seeker-testimonial h3 {
    color: #0e101a;
    font-size: 48px;
    font-weight: bold;
    line-height: normal;
    text-align: left;
    margin-bottom: 30px;
}

.testimonial-carousel {
    padding: 40px 0;
}

.testimonial-card {
    padding: 25px 25px;
    height: 430px;
    border-radius: 10px;
    background-color: #ffffff;
    width: 95% !important;
}

.testimonial-card .seeker-img {
    margin-bottom: 20px;
}

.testimonial-card .seeker-img img {
    width: 113px;
    height: 113px;
    border-radius: 50%;
}

.testimonial-card h4 {
    color: #000;
    font-size: 24px;
    font-weight: bold;
    line-height: normal;
    text-align: left;
    margin-bottom: 12px;
}

.testimonial-card p {
    color: #808080;
    font-family: Helvetica;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
}

@media only screen and (min-width: 768px) and (max-width: 1299px) {
    .seeker-testimonial h3 {
        font-size: 40px;
    }

    .testimonial-card {
        height: 430px;
    }
}

@media only screen and (min-width: 768px) and (max-width: 1199px) {
    .testimonial-card {
        padding: 25px 25px;
        height: 430px;
    }

    .testimonial-card .seeker-img {
        margin-bottom: 15px;
    }

    .testimonial-card h4 {
        font-size: 16px;
        margin-bottom: 10px;
    }

    .testimonial-card p {
        font-size: 16px;
        line-height: 22px;
    }

    .seeker-testimonial h3 {
        font-size: 36px;
        margin-bottom: 20px;
    }

    .testimonial-carousel {
        padding: 30px 0;
    }
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
    .testimonial-card {
        height: 410px;
    }
}

@media only screen and (min-width: 300px) and (max-width: 767px) {
    .testimonial-card {
        margin: 0;
        height: auto;
        padding: 25px 15px;
    }

    .testimonial-card .seeker-img img {
        width: 90px;
        height: 90px;
        margin: auto;
    }

    .testimonial-card .seeker-img {
        margin-bottom: 15px;
        text-align: center;
    }

    .testimonial-card h4 {
        font-size: 16px;
        margin-bottom: 13px;
        line-height: 20px;
        text-align: center;
    }

    .testimonial-card p {
        font-size: 16px;
        text-align: center;
        line-height: 21px;
    }

    .seeker-testimonial h3 {
        font-size: 30px;
        margin-bottom: 20px;
    }

    .testimonial-carousel {
        padding: 25px 0;
    }

    .seeker-testimonial {
        padding: 50px 0 60px;
    }

    .seeker-testimonial h3 br {
        display: none;
    }

    .testimonial-card {
        width: 100% !important;
    }
}
</style>
