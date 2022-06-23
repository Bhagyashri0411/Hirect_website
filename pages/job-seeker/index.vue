<template>
<div class="wrapper">
    <Header />
    <section class="job-seeker">
        <!-- <div class="job-seeker-banner">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="jobseeker-banner-content">
                            <h1>Looking For a Job</h1>
                        </div>
                        <div class="jobseeker-banner-img">
                            <div class="jobseeker-banner-scan">
                                <img src="~/assets/img/qr-code-scan2.png" alt="" />
                            </div>
                            <img src="~/assets/img/job-seeker-banner.svg" alt="" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="jobseeker-banner-right">
                            <div class="jobseeker-banner-content">
                                <h1>Get the Hirect App</h1>
                                <p>
                                    We will send you a link, open it on your <br />phone to
                                    download the app.
                                </p>
                            </div>
                            <div class="download-form">
                                <form>
                                    <div class="download-form-field">
                                        <div class="input-container">
                                            <el-input id="phone-number" v-model="getUserInf.phoneNumber" maxlength="10" placeholder="Type Here..." class="input-item custom-phone-input">
                                                <el-select v-model="getUserInf.phoneArea" slot="prepend" placeholder="+91">
                                                    <el-option label="+91" value="+91"></el-option>
                                                    <el-option label="+1" value="+1"></el-option>
                                                    <el-option label="+65" value="+65"></el-option>
                                                    <el-option label="+44" value="+44"></el-option>
                                                </el-select>
                                            </el-input>
                                        </div>

                                        <button type="submit" class="btn default-btn button-sm">
                                            Get App Link
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
        <div class="job-seeker-banner job-seeker-banner-old">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="jobseeker-banner-content">
                            <h1>Looking <br />For a Job</h1>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="jobseeker-banner-img">
                            <img src="~/assets/img/job-seeker-banner.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="building-profile">
            <div class="container">
                <div class="row">
                    <div class="col-md-7">
                        <div class="building-profile-content">
                            <h3 class="title-md mb-65">
                                Building The Profile and Landing the Right Job Takes Just 5
                                minutes.
                            </h3>
                            <button type="button" class="btn default-btn button-sm" @click="downloadDialogShow">
                                Search Jobs
                            </button>
                        </div>
                    </div>
                    <div class="col-md-5">
                        <div class="building-profile-img">
                            <img src="~/assets/img/build-your-resume.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="connect-instantly">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="connect-instantly-img">
                            <img src="~/assets/img/connect-instantly-new.png" alt="" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="connect-instantly-content">
                            <h3 class="title-md mb-65">
                                Connect Instantly with Startup Founders and Get Hired.
                            </h3>
                            <button type="button" class="btn default-btn button-sm" @click="downloadDialogShow">
                                Direct Chat
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="verified-recruiters">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="verified-recruiters-content">
                            <h3 class="title-md mb-65">
                                100% Verified Recruiters and 120K+ Startups trust Hirect.
                            </h3>
                            <button type="button" class="btn default-btn button-sm" @click="downloadDialogShow">
                                Get Started
                            </button>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="verified-recruiters-img">
                            <img src="~/assets/img/100verified-new.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- <section class="seeker-love-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2 class="title-big">
              Job Seekers Love Hirect, <br />Here’s Why ?
            </h2>
          </div>
        </div>
        <div class="seeker-love-slides">
          <div class="row">
            <div class="col-md-6">
              <div class="seeker-love-card">
                <div class="seeker-love-user">
                  <div class="seekerLove-user-img">
                    <img src="~/assets/img/job-seeker1.png" alt="" />
                  </div>
                  <div class="seekerLove-user-info">
                    <div class="seekerLove-raiting">
                      <ul>
                        <li><img src="~/assets/img/star-icon.svg" alt="" /></li>
                        <li><img src="~/assets/img/star-icon.svg" alt="" /></li>
                        <li><img src="~/assets/img/star-icon.svg" alt="" /></li>
                        <li><img src="~/assets/img/star-icon.svg" alt="" /></li>
                      </ul>
                    </div>
                    <h5>12/9/2020 <span>via google</span></h5>
                  </div>
                </div>
                <h4>Lorem ipsum</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                  dictum cursus at a phasellus tellus felis. Nibh sem egestas
                  suspendisse blandit non orci, gravida. Massa tempus sem tellus
                  magna convallis sollicitudin sit volutpat
                </p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="seeker-love-card">
                <div class="seeker-love-user">
                  <div class="seekerLove-user-img">
                    <img src="~/assets/img/job-seeker2.png" alt="" />
                  </div>
                  <div class="seekerLove-user-info">
                    <div class="seekerLove-raiting">
                      <ul>
                        <li><img src="~/assets/img/star-icon.svg" alt="" /></li>
                        <li><img src="~/assets/img/star-icon.svg" alt="" /></li>
                        <li><img src="~/assets/img/star-icon.svg" alt="" /></li>
                        <li><img src="~/assets/img/star-icon.svg" alt="" /></li>
                      </ul>
                    </div>
                    <h5>12/9/2020 <span>via google</span></h5>
                  </div>
                </div>
                <h4>Lorem ipsum</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                  dictum cursus at a phasellus tellus felis. Nibh sem egestas
                  suspendisse blandit non orci, gravida. Massa tempus sem tellus
                  magna convallis sollicitudin sit volutpat
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->

    <JobSeekerTestimonial />
    <!----scan-app start----------->
    <GetAppPage :eventName="'in_jobseekers_bottom'" />
    <!----scan-app end----------->
    <Footer />
    <DownloadModal v-show="showModal" @close-modal="showModal = false" />
</div>
</template>

<script>
import DownloadModal from "~/components/DownloadModal.vue";
export default {
    components: {
        DownloadModal
    },
    head() {
        return {
            title: "Latest Job Openings in Startups | Best Job Search App - Hirect",
            meta: [{
                hid: "description",
                name: "description",
                content: "Free Job app enables candidates to chat directly in-app and get the relevant jobs. Download Hirect and apply to jobs online."
            }]
        };
    },
    data() {
        return {
            showModal: false,
            isPhoneNumberError: false,
            getUserInf: {
                phoneNumber: "",
                phoneArea: "+91"
            }
        };
    },

    methods: {
        downloadDialogShow() {
            this.showModal = true
            this.$sendToEsData('webQrcodeViewed', {
                'region_id': 0,
                'position': 'in_jobseekers_button_popop'
            })
        }
    },

    jsonld() {
        return {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [{
                "@type": "ListItem",
                position: "1",
                name: "Job Seeker",
                item: "https://www.hirect.in/job-seeker"
            }]
        };
    }
};
</script>

<style lang="scss" scoped>
/******* Job Seeker Page ************/
.download-form-field {
    display: flex;
    align-items: center;
}

.jobseeker-banner-right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}

.download-form-field button.btn {
    margin-left: 13px;
    width: 155px;
    border-radius: 20px;
}

.download-modal p {
    padding: 45px 0;
    color: #808080;
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    text-align: center;
}

section.job-seeker {
    padding-bottom: 50px;
}

// job seeker banner
.job-seeker-banner {
    padding: 70px 0;
}

// job seeker old banner
.job-seeker-banner-old .container {
    max-width: 630px !important;
}

.job-seeker-banner-old .jobseeker-banner-content {
    padding-top: 50px;
}

.job-seeker-banner-old .jobseeker-banner-img {
    max-width: 100%;
    padding: 0;
    display: inherit;
}

.job-seeker-banner-old .jobseeker-banner-img img {
    width: auto;
}

// end job seeker old banner
.jobseeker-banner-content h1 {
    margin-bottom: 20px;
}

.jobseeker-banner-content p {
    font-size: 18px;
    line-height: 22px;
    margin-bottom: 30px;
}

.jobseeker-banner-img {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 75%;
    padding: 0 20px;
}

.jobseeker-banner-img .jobseeker-banner-scan img {
    width: 112px;
}

.jobseeker-banner-img img {
    width: 150px;
}

// end job seeker banner
// building profile
.building-profile {
    padding: 70px 0;
}

.building-profile-content {
    padding-top: 70px;
}

h3.title-md.mb-65 {
    margin-bottom: 65px;
}

// end building profile
// Connect Instantly and verified recruiters
.connect-instantly,
.verified-recruiters {
    margin-bottom: 70px;
}

.connect-instantly,
.verified-recruiters {
    margin-bottom: 70px;
}

.connect-instantly-img,
.verified-recruiters-img {
    text-align: center;
}

.connect-instantly .row,
.verified-recruiters .row {
    align-items: center;
}

// end Connect Instantly and verified recruiters
// job seeker love
section.seeker-love-section {
    padding: 50px 0;
    background-color: #f9fbff;
}

.seeker-love-card {
    padding: 70px 70px;
}

.seeker-love-user {
    display: flex;
    align-items: center;
    margin-bottom: 35px;
}

.seekerLove-user-img img {
    width: 113px;
    height: 113px;
    border-radius: 50%;
}

.seekerLove-user-info {
    width: calc(100% - 113px);
    padding-left: 30px;
}

.seekerLove-raiting ul {
    list-style: none;
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
}

.seekerLove-raiting ul li {
    margin-right: 10px;
}

.seekerLove-raiting {
    margin-bottom: 15px;
}

.seekerLove-user-info h5 {
    color: #707070;
    font-size: 18px;
    font-weight: normal;
    line-height: 24px;
}

.seeker-love-card h4 {
    color: #000000;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
}

.seeker-love-card p {
    color: #76787a;
    font-size: 16px;
    font-weight: normal;
    line-height: 24px;
    margin-bottom: 15px;
}

// end job seeker love

/******* end Job Seeker Page ************/

@media only screen and (min-width: 768px) and (max-width: 1299px) {
    .building-profile {
        padding: 60px 0;
    }

    .job-seeker-banner {
        padding: 60px 0;
    }

    .seeker-love-card {
        padding: 45px 50px;
    }

    .seeker-love-card h4 {
        font-size: 22px;
    }

    .connect-instantly,
    .verified-recruiters {
        margin-bottom: 60px;
    }

    .download-form-field button.btn {
        width: 130px;
        font-size: 15px;
    }

    .jobseeker-banner-img {
        max-width: 80%;
    }
}

@media only screen and (min-width: 768px) and (max-width: 1199px) {
    h3.title-md.mb-65 {
        margin-bottom: 50px;
    }

    .building-profile {
        padding: 60px 0;
    }

    .connect-instantly,
    .verified-recruiters {
        margin-bottom: 60px;
    }

    .seekerLove-user-img img {
        width: 100px;
        height: 100px;
    }

    .seekerLove-user-info {
        width: calc(100% - 100px);
        padding-left: 20px;
    }

    .seeker-love-card {
        padding: 45px 35px;
    }

    .download-form-field button.btn {
        width: 126px;
        font-size: 14px !important;
    }

    .download-form #phone-number.el-input__inner,
    .download-form .el-input--suffix .el-input__inner,
    .download-form-field button.btn {
        height: 45px;
    }

    .jobseeker-banner-content p {
        font-size: 16px;
        line-height: 22px;
        margin-bottom: 30px;
    }

    .job-seeker-banner-old .jobseeker-banner-content {
        padding-top: 40px;
    }
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
    .building-profile {
        padding: 30px 0 60px;
    }

    .seekerLove-user-img img {
        width: 90px;
        height: 90px;
    }

    .seekerLove-user-info {
        width: calc(100% - 90px);
        padding-left: 20px;
    }

    .seeker-love-user {
        margin-bottom: 30px;
    }

    .seeker-love-card {
        padding: 35px 20px;
    }

    .seekerLove-user-info h5 {
        font-size: 16px;
        line-height: 22px;
    }

    .seekerLove-raiting ul li {
        margin-right: 7px;
    }

    .seekerLove-raiting {
        margin-bottom: 11px;
    }

    .seeker-love-card h4 {
        font-size: 20px;
        margin-bottom: 15px;
    }

    .jobseeker-banner-img {
        max-width: 100%;
    }

    .job-seeker-banner-old .container {
        max-width: 530px !important;
    }
}

@media only screen and (min-width: 300px) and (max-width: 767px) {
    .jobseeker-banner-content h1 {
        text-align: center;
        margin-bottom: 20px;
    }

    .jobseeker-banner-content h1 br {
        display: none;
    }

    .job-seeker-banner {
        padding: 50px 0;
    }

    .building-profile {
        padding: 40px 0 60px;
    }

    h3.title-md.mb-65 {
        margin-bottom: 30px;
    }

    .building-profile-content {
        text-align: center;
        padding-top: 35px;
    }

    .building-profile .row {
        flex-direction: column-reverse;
    }

    .building-profile-content button.btn {
        margin: auto;
    }

    .connect-instantly,
    .verified-recruiters {
        margin-bottom: 60px;
    }

    .connect-instantly-content {
        margin-top: 35px;
        text-align: center;
    }

    .connect-instantly-content button.btn {
        margin: auto;
    }

    .verified-recruiters .row {
        flex-direction: column-reverse;
    }

    .verified-recruiters-content {
        text-align: center;
        margin-top: 35px;
    }

    .verified-recruiters-content .btn {
        margin: auto;
    }

    section.job-seeker {
        padding-bottom: 20px;
    }

    section.seeker-love-section h2.title-big br {
        display: none;
    }

    .seeker-love-card {
        padding: 30px 10px;
    }

    .seekerLove-user-img img {
        width: 85px;
        height: 85px;
    }

    .seekerLove-user-info {
        width: calc(100% - 85px);
        padding-left: 15px;
    }

    .seekerLove-user-info h5 {
        font-size: 16px;
        line-height: 21px;
    }

    .seekerLove-raiting {
        margin-bottom: 10px;
    }

    .seekerLove-raiting ul li {
        margin-right: 8px;
    }

    .seeker-love-user {
        margin-bottom: 25px;
    }

    .seeker-love-card h4 {
        font-size: 21px;
        margin-bottom: 15px;
    }

    .jobseeker-banner-img img {
        width: 130px;
    }

    .jobseeker-banner-img {
        max-width: 360px;
        width: 100%;
        margin: auto;
        margin-bottom: 20px;
    }

    .jobseeker-banner-img .jobseeker-banner-scan img {
        width: 90px;
    }

    .jobseeker-banner-content p {
        font-size: 16px;
        margin-bottom: 20px;
    }

    .jobseeker-banner-right {
        align-items: center;
        text-align: center;
    }

    .download-form-field button.btn {
        width: 113px;
        font-size: 13px;
        margin-left: 6px;
    }

    .job-seeker-banner-old .jobseeker-banner-content {
        padding-top: 0px;
    }

    .job-seeker-banner-old .jobseeker-banner-content h1 {
        margin-bottom: 30px;
    }
}
</style>
