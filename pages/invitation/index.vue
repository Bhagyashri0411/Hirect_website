<template>
<div>
    <div id="back-top-target" />
    <Header @smoothToTop="smoothToTop" :current-page-name="currentPageName" />
    <div style="height:80px" />
    <div class="title-area">
        <div class="title-area-left">
            <p class="main-title">Specialized for fast<br>growing <span style="color:#29E19E;">startups</span><br>in India</p>
            <div class="title-area-left">
                <p class="small-title" style="margin: 42px 0px 15px; 0px">The quickest way to hire!</p>
                <p class="common-text"><span style="font-weight:900;">If your organization is hiring, </span>kindly fill up this form and <br> our team will get in touch with you.</p>
            </div>
        </div>
        <img src="~/assets/img/banner-image@2x-min.png" alt="title-img" class="title-area-img">
        <div style="visibility: hidden;" id="my-form" />
    </div>
    <div class="form-area">
        <GetALinkToDownload />
        <div class="form-area-right">
            <center>
                <p class="area-2-text">Join over 30,000 companies<br>Make hiring more efficient</p>
                <img src="~/assets/img/ic_brands.png" alt="logos" class="form-area-img">
            </center>
        </div>
    </div>
    <div class="download-step">
        <center>
            <p class="common-title">Hirect helps you to find<br>the right employees in <span style="color:#29E19E;">3 easy steps:</span></p>
            <div class="download-step-text-container">
                <p class="common-text">Register on Hirect<br>as a recruiter </p>
                <p class="common-text">Post your jobs &<br>requirements for FREE</p>
                <p class="common-text">Instantly chat with<br>the best candidates</p>
            </div>
            <img src="~/assets/img/download-step.png" alt="download-step" class="download-step-img">
        </center>
    </div>
    <div class="seeking-candidate">
        <img src="~/assets/img/hire-staff-image.png" alt="" class="seeking-candidate-img">
        <div class="seeking-candidate-right">
            <p class="common-title" style="margin:20px 0px;">I am looking to hire staff</p>
            <p class="common-text">Get a hire for your company within 24 hours</p>
            <el-button type="primary" class="seeking-candidate-btn" @click="getStartClick">Get Started ></el-button>
        </div>
    </div>
    <div class="green-area">
        <center>
            <p class="common-title" style="padding-top: 100px;">Pick candidates from 50+ categories</p>
            <div class="categories-container">
                <div v-for="(item, index) in categoriesList" :key="index" class="categories-item">{{item}}</div>
                <div class="categories-more">+More</div>
            </div>
            <p class="common-title">Hire top talents all across India</p>
            <div class="categories-container">
                <div v-for="(item, index) in hireList" :key="index" class="categories-item">{{item}}</div>
            </div>
        </center>
    </div>
    <Footer />
</div>
</template>

<script>
export default {
  name: 'download',
  components: {},
  head() {
    return {
      title: 'Hirect - The First Chat-Based Hiring App',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Download Hirect App: 80% of employers who post a job get a quality candidate on Hirect within the first day!',
      }],
    };
  },
  data() {
    return {
      currentPageName: 'invitation',
      categoriesList: [
        'Full Stack Engineer',
        'Software Developer',
        'C++ Programmer ',
        'iOS/Android Developer',
        'Java Engineer',
        'IT Engineer',
        'UI/UX Designer',
        'Web Developer',
        'PHP Developer',
        'Business Developer',
        'Digital Marketing',
        'Operations',
        'Data Analyst',
        'Human Resource',
        'Accountant',
        'Sales Executive',
        'Data Entry',
        'Customer Service',
        'Tele Sales',
      ],
      hireList: [
        'Bangalore',
        'Delhi',
        'Noida',
        'Gurgaon',
        'Hyderabad',
        'Mumbai',
        'Pune',
        'Chennai',
        'Ahmedabad',
        'Kolkata',
      ],
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.$localSaveSubmitUrl();
  },
  methods: {
    smoothToTop() {
      document.getElementById('back-top-target').scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      });
    },
    getStartClick() {
      document.getElementById('my-form').scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.common-title {
    font-size: 48px;
    font-weight: bolder;
    color: #0E101A;
    line-height: 58px;
    padding: 60px 0px;
}

.small-title {
    font-size: 42px;
    font-weight: normal;
    color: #0E101A;
    line-height: 50px;
}

.area-2-text {
    font-size: 36px;
    font-weight: bold;
    color: #0E101A;
    line-height: 43px;
    text-align: left;
    margin: 40px 0px 40px 0px;
}

.common-text {
    font-size: 20px;
    font-weight: 300;
    color: #0E101A;
    line-height: 26px;
}

.main-title {
    font-size: 60px;
    font-weight: bolder;
    color: #0E101A;
    line-height: 71px;
    margin-top: 50px;
}

.title-area {
    display: flex;
    width: 1200px;
    justify-content: space-between;
    margin: 0 auto;
    align-items: center;
    margin-bottom: 23px;

    .title-area-img {
        width: 620px;
        height: 300px;
    }
}

.categories-container {
    width: 1240px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    .categories-item {
        height: 60px;
        background: #FFFFFF;
        border-radius: 30px;
        line-height: 60px;
        padding: 0px 36px;
        margin: 0px 15px 24px 0px;
        font-size: 20px;
        font-weight: bold;
        color: #0E101A;
        white-space: nowrap;
    }

    .categories-more {
        height: 60px;
        border-radius: 39px;
        border: 2px solid #0E101A;
        font-size: 26px;
        font-weight: bold;
        color: #0E101A;
        line-height: 60px;
        padding: 0px 36px;
        margin: 0px 15px 24px 0px;
    }
}

.form-area {
    display: flex;
    width: 1200px;
    height: 700px;
    justify-content: space-between;
    margin: 0 auto;
    align-items: center;
    padding-top: 0px;

    .form-area-right {
        margin: 0px;

        .form-area-img {
            width: 502px;
            height: 483px;
        }
    }
}

.download-step {
    margin: 0 auto;
    width: 1220px;
    height: 700px;
    padding-top: 100px;
    position: relative;

    .download-step-img {
        width: 1220px;
    }

    .download-step-text-container {
        position: absolute;
        top: 430px;
        left: 70px;
        width: 1100px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}

.seeking-candidate {
    margin: 0 auto;
    display: flex;
    padding-top: 150px;
    width: 1220px;
    height: 550px;
    justify-content: space-between;

    .seeking-candidate-img {
        width: 494px;
        height: 398px;
    }

    .seeking-candidate-right {
        .seeking-candidate-btn {
            width: 349px;
            height: 84px;
            background: #0E101A;
            border-radius: 42px;
            border: none;
            font-size: 28px;
            font-weight: 800;
            color: #FFFFFF;
            line-height: 34px;
            margin-top: 74px;
        }
    }
}

.green-area {
    width: 100%;
    height: 1000px;
    background-color: rgba(0, 204, 180, .08);

    .green-area-categories {
        width: 1189px;
        margin-bottom: 50px;
    }

    .green-area-city {
        width: 1164px;
    }
}
</style>
