<template>
  <div>
    <div class="client-testimonial">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h3>The Influencers' Take on Hirect</h3>
            <div class="testimonial-carousel">
              <VueSlickCarousel v-bind="settings">
                <div class="testimonial-card">
                  <div class="testimonial-card-user">
                    <div class="client-img">
                      <img src="~/assets/imgs/Ankur.png" alt="" />
                    </div>

                    <div class="testimonial-info">
                      <h4>Ankur Warikoo</h4>
                      <h5>Entrepreneur, Public speaker, Angel investor</h5>
                      <p>
                        "Recently, I'd done a story on the perks that people get
                        as a part of the warikoo team that we have, and we got
                        a lot of amazing responses. But, on such a big scale,
                        hiring becomes a bit easy. What if you are actually
                        small? What if you are just starting out? What if you
                        are an HR Recruiter looking for some finite specific
                        skills? It becomes hard, and that's why Hirect. Hirect
                        allows you to chat directly with 23 Million candidates.
                        There is 100% privacy. It's like WhatsApp chatting with
                        people that your would want to recruit. And that's why
                        it's become such a meaningful way to get straight into
                        the talent without any consultants involved. Check them
                        out!"
                      </p>
                    </div>
                  </div>
                </div>

                <div class="testimonial-card">
                  <div class="testimonial-card-user">
                    <div class="client-img">
                      <img src="~/assets/imgs/Ankur.png" alt="" />
                    </div>

                    <div class="testimonial-info">
                      <h4>Karan Singh Grover</h4>
                      <h5>Indian Model and Actor</h5>
                      <p>
                        "So, it's the time for appraisals. And appraisals are not just about salary hikes. As an
                        experienced candidate, you need growth, opportunities, autonomy, and more. So, why wait another
                        year to have all this? Just download the Hirect app and chat directly with Startup CEOs and
                        Founders without any consultants. So log on to the Hirect app and career hike karke toh dekho."
                      </p>
                    </div>
                  </div>
                </div>

                <div class="testimonial-card">
                  <div class="testimonial-card-user">
                    <div class="client-img">
                      <img src="~/assets/imgs/Kenny.png" alt="" />
                    </div>

                    <div class="testimonial-info">
                      <h4>Kenny Sebastian</h4>
                      <h5>Comedian</h5>
                      <p>
                        "Hey, Are you in the market, looking for a job? If not,
                        you can ignore this. If you hate everyone in your
                        office, you can check out the Hirect app. Hirect lets
                        you cut through the consultants and directly talk to the
                        Founders and the recruiters or even the CEO in all majo
                        cities like Delhi, Hyderabad, Chennai, and Bangalore
                        they've covered everywhere. Every sector like IT,
                        EduTech, FinTech, and eCommerce they're there. Clients
                        like Lenskart.com UpGrad everyone, Hireet has your back.
                        So go find that job you want, man and stop dealing with
                        your colleagues"
                      </p>
                    </div>
                  </div>
                </div>

                <div class="testimonial-card">
                  <div class="testimonial-card-user">
                    <div class="client-img">
                      <img src="~/assets/imgs/Ankur.png" alt="" />
                    </div>

                    <div class="testimonial-info">
                      <h4>Ranveer Allhabadia</h4>
                      <h5>Social media entrepreneur, YouTuber, motivational speaker</h5>
                      <p>
                        "All right! We've spoken about this earlier. I will address it again, especially for you guys
                        looking for a switch in your careers and want the right path to latch on to next. You've got the
                        Hirect job app for you. Startup. Careers. Begin here. Verified. 150k+ Startups hiring. No spams,
                        no scams. You can also talk to Startup Founders. Make sure you check out Hirect right now. If
                        you want fast, rapid, intense growth in life, work at Startups." "
                      </p>
                    </div>
                  </div>
                </div>

                <div class="testimonial-card">
                  <div class="testimonial-card-user">
                    <div class="client-img">
                      <img src="~/assets/imgs/Mithila.png" alt="" />
                    </div>

                    <div class="testimonial-info">
                      <h4>Mithila Palkar</h4>
                      <h5>Indian TV Actress</h5>
                      <p>
                        "Everyone needs money. That's why you do a good job,
                        right? But, where will you get a good joo? College
                        placements are just for namesake. You download Hirect
                        and chat directly with the Startup Founders without any
                        interference from any consultant. Click on the link and
                        go go go."
                      </p>
                    </div>
                  </div>
                </div>

                <div class="testimonial-card">
                  <div class="testimonial-card-user">
                    <div class="client-img">
                      <img src="~/assets/imgs/Ankur.png" alt="" />
                    </div>

                    <div class="testimonial-info">
                      <h4>Dhruv Rathee</h4>
                      <h5>YouTuber</h5>
                      <p>
                        "Friends, it is important for everyone to be happy with their jobs. But, you might have seen it
                        often while applying for the jobs that you get to see a lot of scams and identity frauds. But,
                        on the Hirect app, all the job postings are 100% verified. Here, the Startup Founders and the
                        CEOs are a part of the hiring process. If you do not believe it, go check out. The app is free
                        to download. And if you are a job seeker, it will be very useful. Do check it out for sure."
                      </p>
                    </div>
                  </div>
                </div>

              </VueSlickCarousel>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="viewall" style="text-align: center">
      <button class="view-btn">View More</button>
    </div> -->
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
        // centerMode: true,
        // centerPadding: "30px",
        // focusOnSelect: true,
        // infinite: false,
        // dots: true,
        // slidesToShow: 1,
        // slidesToScroll: 1,

        autoplay: true,
        variableWidth: true,
        centerPadding: "20px",
        focusOnSelect: true,
        infinite: true,
        slidesToShow: 6,
        speed: 500,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.view-btn {
  border-radius: 20px;
  background-color: #fff;
  border: 1px solid #000;
  color: #0e101a;
  font-size: 16px;
  font-weight: 700;
  padding: 10px 30px;
  margin: 20px 0 60px;
}

.slick-active .testimonial-card .client-img {
  width: 253px;
  height: 325px;
  position: relative;
  width: 253px;
  height: 325px;
  background-size: cover;
  background: center no-repeat;
  overflow: hidden;
  filter: grayscale(0);
}

.testimonial-card .client-img {
  width: 253px;
  height: 325px;
  position: relative;
  width: 253px;
  height: 325px;
  background-size: cover;
  background: center no-repeat;
  overflow: hidden;
  filter: grayscale(1);
}

.client-testimonial {
  padding: 40px 0 70px;
  padding-top: 0;
}

.client-testimonial h3 {
  color: #0e101a;
  font-size: 35px;
  font-weight: bold;
  line-height: normal;
  text-align: center;
  margin-bottom: 40px;
}

.testimonial-carousel {
  width: 75%;
  margin: auto;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
}

.testimonial-card {
  // height: 460px;
  // border-radius: 10px;
  background-color: #fff;
  // padding: 25px 0px;
  padding-left: 25px;
  padding-top: 25px;
  padding-bottom: 25px;


}

.slick-list {
  padding: 0px !important;
}

.testimonial-card .client-img img {
  width: 100%;
  height: 100%;
}

.testimonial-card-user {
  display: flex;
  align-items: flex-start;
}

.testimonial-card h4 {
  color: #0e101a;
  font-size: 20px;
  font-weight: bold;
  line-height: 25px;
  text-align: left;
}

.testimonial-card h5 {
  font-size: 15px;
  line-height: 15px;
  color: #808080;
  margin-bottom: 15px;
}

.testimonial-info {
  padding: 0 35px;
  width: calc(100% - 200px);
}

.testimonial-card p {
  color: #808080;
  font-size: 13px;
  font-weight: normal;
  line-height: 20px;
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
    font-size: 13px;
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
    font-size: 13px;
    text-align: center;
    line-height: 20px;
  }

  .client-testimonial h3 {
    font-size: 30px;
    margin-bottom: 30px;
  }

  .testimonial-carousel {
    padding-bottom: 25px;
    width: 80%;
    margin: auto;
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
