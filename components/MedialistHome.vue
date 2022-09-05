<template>
    <div class="client-testimonial">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h3>Media Coverage</h3>
                    <div class="testimonial-carousel">
                        <VueSlickCarousel v-bind="settings" class="carousel">
                            <div class="testimonial-card" v-for="article in mediaListhome" :key="article.id">
                                <a :href="article.link" target="_blank">
                    <div class="photo-card-inner">
                      <img
                        class="magzine-logo"
                        :src="imgSrc(article.logo)"
                        loading="lazy"
                        alt="logo"
                      />
                      <hr />
                      <p class="headline">{{ article.headline }}</p>
                    </div>
                  </a>
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
  methods: {
    imgSrc(src) {
      /* eslint-disable */
      try {
        return require(`@/assets/imgs/Media_Logos/${src}`);
      } catch (error) {
        return require(`@/assets/imgs/step-image.png`);
      }
  },
  },
  data() {
    return {
      mediaListhome: [
        {
          id: 1,
          logo: 'brand-equity-logo.png',

          imageSrc: 'publish1.jpg',

          headline:
            'Hirect salutes HRs and their beyond hiring role at workplace in new campaign',

          date: '08 March, 2022',

          link: 'https://brandequity.economictimes.indiatimes.com/news/advertising/hirect-salutes-hrs-and-their-beyond-hiring-role-at-workplace-in-new-campaign/90085352',
        },

        {
          id: 2,
          logo: 'financialexpress.svg',

          imageSrc: 'publish2.jpg',

          headline:
            'Hirect: Startups’ talent hunts get easier with this app',

          date: '21 Feb, 2022',

          link: 'https://www.financialexpress.com/industry/technology/hirect-startups-talent-hunts-get-easier-with-this-app/2438929/',
        },

        {
          id: 3,
          logo: 'bllogo.jpg',

          imageSrc: 'cxoImage.png',

          headline:
            'Five habits that keep Raj fit and healthy',

          date: '16 May, 2022',

          link: 'https://www.thehindubusinessline.com/specials/pulse/my-five/article65612768.ece',
        },

        {
          id: 4,
          logo: 'ZeeBiz-Logo.jpg',

          imageSrc: 'cxoImage.png',

          headline:
            'World Youth Skill Day 2022: 44% employees eager to learn new skills, finds survey',

          date: '15 July, 2022',

          link: 'https://www.zeebiz.com/world/news-world-youth-skill-day-2022-44-employees-eager-to-learn-new-skills-finds-survey-189741',
        },

        {
          id: 5,
          logo: 'TOI_Logo.png',

          imageSrc: 'cxoImage.png',

          headline:
            'How artificial intelligence is transforming the hiring process?',

          date: '25 October, 2021',

          link: 'https://timesofindia.indiatimes.com/blogs/voices/how-artificial-intelligence-is-transforming-the-hiring-process/',
        },
        {
          id: 6,
          logo: 'logo_yourstory.svg',

          imageSrc: 'cxoImage.png',

          headline:
            'This startup-centric hiring platform directly connects jobseekers with founders and CXOs',

          date: '10 September, 2021',

          link: 'https://yourstory.com/2021/09/hirect-startup-hiring-jobseeker-founders-cxos-recruitment-app',
        },
        {
          id: 7,
          logo: 'BW-people-logo.jpg',

          imageSrc: 'cxoImage.png',

          headline:
            'Large Enterprises & MNCs Now Join Hirect India Amid On-Going Recession',

          date: '19 July, 2022',

          link: 'http://bwpeople.businessworld.in/article/Large-Enterprises-MNCs-Now-Join-Hirect-India-Amid-On-Going-Recession/19-07-2022-437702/',
        },
      ],
      settings: {
        arrows: true,
        dots: true,
        infinite: true,
        centerPadding: '10px',
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
hr {
  height: 2px;
    color: #00000055;
}
.headline{
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    height: 50%;
    font-weight: bolder;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.photo-card-inner {
  height: 250px;
  width: 260px;
  display: grid;
  grid-template-rows: 32% 20%;
  background-color: #fff;
  text-align: center;
  float: left;
  border-radius: 32px;
  padding: 10px;
  margin: 32px;
  box-shadow: #6363631a 0px 5px 5px 5px;
}
.photo-card-inner p {
  font-size: 14px;
  padding: 10px;
  font-weight: bold;
  /* height: 20%; */
  color: black;
}
.magzine-logo {
  padding: 9px;
  height: 73px;
  width: auto;
  place-self: center;
}
.client-testimonial {
    padding: 40px 0 70px;
    background: #f1f4f7;
}

.client-testimonial h3 {
    color: #0e101a;
    font-size: 48px;
    font-weight: bold;
    line-height: normal;
    text-align: center;
    margin-bottom: 40px;
}

.testimonial-carousel {
    padding-bottom: 50px;
}



.slick-list {
    padding: 0px !important;
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


.testimonial-card p {
    color: #43494E;
    font-size: 16px;
    font-weight: bold;
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

}

@media only screen and (min-width: 768px) and (max-width: 1199px) {
    .testimonial-card {
        padding: 25px 25px;
        height: 440px;
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
        padding: 30px 0px;
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
    .testimonial-card h5 br {
        display: none;
    }

    .testimonial-card h5 {
        font-size: 16px;
        line-height: normal;
    }

    .testimonial-card {
        width: 100% !important;
    }
}
</style>
