<template>
  <div class="client-testimonial">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h3>The Influencers' Take on Hirect</h3>
          <div class="testimonial-carousel">
            <VueSlickCarousel v-bind="settings" class="carousel">
              <div class="testimonial-card">
                <div class="client-img">
                  <img src="~/assets/img/testi-client1.png" alt="" />
                </div>
                <h4>Kugelblitz Technologies</h4>
                <p>
                  "Building a team from scratch was difficult for a young
                  professional like me. The Hirect App served as a quick hack to
                  my hiring needs...
                </p>
              </div>
              <div class="testimonial-card">
                <div class="client-img">
                  <img src="~/assets/img/testi-client2.png" alt="" />
                </div>
                <h4>Blockhash Technologies</h4>
                <p>
                  "The in-app Chat feature is a phenomenal idea to bring to
                  Recruiters. Add to it a few relevant questions and you're able
                  to identify the right fit in 2-3 minutes. the fact that the...
                </p>
              </div>
              <div class="testimonial-card">
                <div class="client-img">
                  <img src="~/assets/img/testi-client3.png" alt="" />
                </div>
                <h4>Blockhash Technologies</h4>
                <p>
                  "The in-app Chat feature is a phenomenal idea to bring to
                  Recruiters. Add to it a few relevant questions and you're able
                  to identify the right fit in 2-3 minutes. the fact that the...
                </p>
              </div>
              <div class="testimonial-card">
                <div class="client-img">
                  <img src="~/assets/img/testi-client1.png" alt="" />
                </div>
                <h4>Kugelblitz Technologies</h4>
                <p>
                  "Building a team from scratch was difficult for a young
                  professional like me. The Hirect App served as a quick hack to
                  my hiring needs...
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
    VueSlickCarousel,
  },

  data() {
    return {
      settings: {
        arrows: true,
        dots: true,
        centerMode: true,
        centerPadding: "95px",
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        initialSlide: 1,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              centerMode: false,
              centerPadding: "0px",
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              centerMode: false,
              centerPadding: "0px",
            },
          },
          {
            breakpoint: 599,
            settings: {
              slidesToShow: 1,
              centerMode: false,
              centerPadding: "0px",
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
  padding: 65px 0;
}

.client-testimonial h3 {
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
  min-height: 344px;
  border-radius: 10px;
  background-color: #f1f4f7;
  padding: 30px 25px;
  margin-right: 20px;
  width: auto !important;
}

.testimonial-card .client-img {
  margin-bottom: 20px;
}

.testimonial-card .client-img img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
}

.testimonial-card h4 {
  color: #0e101a;
  font-family: Helvetica;
  font-size: 18px;
  font-weight: 700;
  line-height: inherit;
  text-align: left;
  margin-bottom: 20px;
}

.testimonial-card p {
  color: #76787a;
  font-family: Helvetica;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
}

@media only screen and (min-width: 768px) and (max-width: 1299px) {
  .client-testimonial h3 {
    font-size: 40px;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1199px) {
  .testimonial-card {
    padding: 25px 25px;
    min-height: 320px;
  }

  .testimonial-card .client-img img {
    width: 100px;
    height: 100px;
  }

  .testimonial-card .client-img {
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

  .client-testimonial h3 {
    font-size: 36px;
    margin-bottom: 20px;
  }

  .testimonial-carousel {
    padding: 30px 0;
  }
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
  .testimonial-card {
    margin: 0 10px;
  }
}

@media only screen and (min-width: 300px) and (max-width: 767px) {
  .testimonial-card {
    margin: 0;
    min-height: auto;
    padding: 25px 20px;
  }

  .testimonial-card .client-img img {
    width: 90px;
    height: 90px;
    margin: auto;
  }

  .testimonial-card .client-img {
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

  .client-testimonial h3 {
    font-size: 30px;
    margin-bottom: 20px;
  }

  .testimonial-carousel {
    padding: 25px 0;
  }

  .client-testimonial {
    padding: 50px 0;
  }
}
</style>
