<template>
<div class="wrapper">
    <Header />
    <section class="get-in-touch">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <p class="support-in">
                        If you have any questions regarding Hirect, please email us at
                        <a href="mailto:support@hirect.in">support@hirect.in</a>.
                    </p>
                </div>
            </div>
            <!-- <div class="row">
          <div class="col-md-6">
            <div class="get-in-touch-form">
              <h3 class="title-md">Get in Touch!</h3>
              <h4>Do you have any queries? We’d love to hear from you.</h4>

              <div class="get-in-form">
                <form>
                  <div class="form-group">
                    <label for="firstname" class="form-label"
                      >First Name<sup>*</sup></label
                    >
                    <input type="text" class="form-control" id="firstname" />
                  </div>
                  <div class="form-group">
                    <label for="lastname" class="form-label"
                      >Last Name<sup>*</sup></label
                    >
                    <input type="text" class="form-control"  id="lastname" />
                  </div>
                  <div class="form-group">
                    <label for="useremail" class="form-label"
                      >Email<sup>*</sup></label
                    >
                    <input type="text" class="form-control" id="useremail" />
                  </div>
                  <div class="form-group">
                    <label for="phonenumber" class="form-label"
                      >Phone Number<sup>*</sup></label
                    >
                    <input type="text" class="form-control" id="phonenumber" />
                  </div>
                  <div class="form-group">
                    <label for="queryform" class="form-label"
                      >Query/Feedback<sup>*</sup></label
                    >
                    <textarea
                      class="form-control"
                      rows="3"
                       id="queryform"
                    ></textarea>
                  </div>

                  <button type="submit" class="btn default-btn button-sm" >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="recruiter-form-img">
              <img src="~/assets/img/get-hired-img.svg" alt="" />
            </div>
          </div>
        </div>  -->
        </div>
    </section>
    <section class="Bengaluru-Office">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="Bengaluru-img">
                        <img src="~/assets/img/office.svg" alt="" />
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="Bengaluru-list">
                        <h2>Bengaluru Office</h2>
                        <ul>
                            <li>
                                <span> <img src="~/assets/img/locktion.png" alt="" /></span>Salarpuria Tower-II, 2nd Floor, "B" Wing, Hosur Main Road, Koramangala, Bengaluru - 560034.
                            </li>
                            <li>
                                <span><img src="~/assets/img/tel-icon.png" alt="" /></span>+91
                                8446164920
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="map-bg">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5986944578135!2d77.61029541534303!3d12.933494619211324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14520e0ff87b%3A0x8da9efd2436331ed!2sSalarpuria%20Tower%202!5e0!3m2!1sen!2sin!4v1643634578937!5m2!1sen!2sin" width="100" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <GetAppPage />
    <Footer />
</div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Contact Us - Hirect',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Users can contact us at Hirect through email, phone, and mail. Hirect, the best job app, will revert to its users within 24 hours. Contact Hirect. ',
      }],
    };
  },

  jsonld() {
    return {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Contact Us - Hirect',
      url: 'https://www.hirect.in/contact-us/',
      logo: 'https://www.hirect.in/_nuxt/img/hirect-logo.130906c.png',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91 8446164920',
        contactType: 'customer service',
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.get-in-touch {
    padding-top: 85px;
    padding-bottom: 70px;
}

.get-in-form {
    border-radius: 20px;
    background-color: #f1f4f7;
    padding: 30px 40px;
}

.Bengaluru-list ul li img {
    max-width: unset;
}

.get-in-form label {
    color: #b4b4b4;
    font-family: Helvetica;
    font-size: 18px;
    font-weight: 400;
    font-style: normal;
    letter-spacing: normal;
    line-height: 10.68px;
    margin-bottom: 13px;
}

.get-in-form input {
    height: 48px;
    border-radius: 10px;
    background-color: #ffffff;
    border-color: #ffffff;
    color: #0e101a;
}

.get-in-form label sup {
    color: #eb5757;
}

.get-in-form .form-group {
    margin-bottom: 25px;
}

.get-in-touch-form textarea {
    height: 104px;
    border-radius: 10px;
    background-color: #ffffff;
    border-color: #ffffff;
}

.get-in-touch .row {
    align-items: center;
}

.get-in-touch-form h4 {
    color: #808080;
    font-family: Helvetica;
    font-size: 18px;
    font-weight: 400;
    font-style: normal;
    letter-spacing: normal;
    line-height: normal;
    margin-bottom: 50px;
}

p.support-in {
    color: #808080;
    font-family: Helvetica;
    font-size: 24px;
    font-weight: 400;
    font-style: normal;
    letter-spacing: normal;
    line-height: normal;
    margin-bottom: 50px;
}

.support-in a {
    color: #0e101a;
    font-weight: 700;
    text-decoration: none;
}

.recruiter-form-img {
    text-align: center;
}

.Bengaluru-Office {
    background-color: #f1f4f7;
    padding: 120px 0px;
}

.Bengaluru-list h2 {
    color: #0e101a;
    font-family: Helvetica;
    font-size: 36px;
    font-weight: 700;
    font-style: normal;
    letter-spacing: normal;
    line-height: normal;
    margin-bottom: 30px;
}

.Bengaluru-list ul li {
    color: #808080;
    font-family: Helvetica;
    font-size: 18px;
    font-weight: 400;
    font-style: normal;
    letter-spacing: normal;
    line-height: 24px;
    display: flex;
    margin-bottom: 30px;
}

.Bengaluru-list ul li span {
    color: #000000;
    padding-right: 15px;
}

.Bengaluru-list ul {
    padding: 0;
    margin: 0;
    list-style: none;
}

.Bengaluru-Office .row {
    align-items: center;
}

.Bengaluru-list {
    margin-left: 100px;
}

.Bengaluru-list {
    margin-left: 100px;
}

section.map-bg {
    padding: 80px;
}

.map iframe {
    width: 100%;
    height: 408px;
}

p.support-in {
    margin-bottom: 0 !important;
}

@media only screen and (min-width: 768px) and (max-width: 1299px) {
    .Bengaluru-Office {
        padding: 80px 0px;
    }
}

@media only screen and (min-width: 768px) and (max-width: 1199px) {
    .Bengaluru-Office {
        padding: 80px 0px;
    }

    .get-in-touch {
        padding-top: 60px;
        padding-bottom: 60px;
    }

    p.support-in {
        font-size: 20px;
        margin-bottom: 30px;
    }

    section.map-bg {
        padding: 60px 50px;
    }

    .Bengaluru-list h2 {
        font-size: 32px;
    }

    .Bengaluru-list {
        margin-left: 60px;
    }
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
    section.map-bg {
        padding: 60px 50px;
    }

    .get-in-touch-form h4 {
        margin-bottom: 35px;
    }

    .get-in-form {
        padding: 30px 20px;
    }

    .Bengaluru-list {
        margin-left: 35px;
    }

    .Bengaluru-list h2 {
        font-size: 30px;
    }

    .Bengaluru-Office {
        padding: 60px 0;
    }
}

@media only screen and (min-width: 320px) and (max-width: 767px) {
    .Bengaluru-Office {
        padding: 50px 0px;
    }

    .Bengaluru-list {
        margin: 0;
        margin-top: 30px;
    }

    .Bengaluru-list h2 {
        font-size: 25px;
    }

    section.map-bg {
        padding: 50px 0px;
    }

    .get-in-touch {
        padding: 50px 0px;
    }

    .get-in-form {
        padding: 30px 20px;
        margin-bottom: 30px;
    }

    p.support-in {
        font-size: 18px;
        margin-bottom: 30px;
    }

    .Bengaluru-list {
        margin: 0;
        margin-top: 30px;
    }

    .get-in-touch-form h4 {
        margin-bottom: 30px;
        font-size: 16px;
    }

    .get-in-form label {
        font-size: 16px;
    }

    .get-in-touch-form textarea {
        height: 80px;
    }

    .map iframe {
        height: 200px;
    }

    .Bengaluru-list ul li {
        font-size: 16px;
    }

    .get-in-form input {
        height: 42px;
    }

    .get-in-form .form-group {
        margin-bottom: 15px;
    }
}
</style>
