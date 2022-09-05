<template>
<div class="webhirect-all">
    <div class="wenBC-header" @click="openOrDownload">
        <div class="wenBC-header-content">
            <img  src="~/assets/img/hirect_logo@2x.png" style="height: 44%" loading="lazy" alt="logo">
            <div class="wenBC-header-content-text">
                <div class="wenBC-header-content-text-1">Hirect</div>
                <div class="wenBC-header-content-text-2">Chat with recruiters directly</div>
            </div>
        </div>
    </div>
    <div>
        <component :is="webPage" @getRecruiterId="gRI" />
    </div>
    <center class="footer-button-content">
        <el-button v-if="distinct_id !== ''" class="footer-button" type="primary" :disabled="distinct_id === ''" @click="openOrDownload">START CHATING</el-button>
    </center>
</div>
</template>

<script>
import webB from '../../components/webB.vue';
import webC from '../../components/webC.vue';

export default {
  name: 'WebBC',
  components: {
    webB,
    webC,
  },
  head() {
    return {
      title: this.$route.query.name && this.$route.query.category ? `${this.$route.query.name} - ${this.$route.query.category}` : 'Hirect',
      // title: this.metaTitle,
      meta: [{
        hid: 'description',
        name: 'description',
        content: '190K+ Startups already hiring on Hirect',
      },
      {
        property: 'og:title',
        hid: 'og:title',
        name: 'og:title',
        content: this.$route.query.name && this.$route.query.category ? `${this.$route.query.name} - ${this.$route.query.category}` : 'Hirect',
      },
      // { property: 'og:title', hid: 'og:title', name: 'og:title', content: this.metaTitle },
      {
        property: 'og:url',
        hid: 'og:url',
        name: 'og:url',
        content: this.URL,
      },
      {
        property: 'og:description',
        hid: 'og:description',
        name: 'og:description',
        content: '190K+ Startups already hiring on Hirect.',
      },
      {
        property: 'og:locale',
        hid: 'og:locale',
        name: 'og:locale',
        content: 'en_US',
      },
      {
        property: 'og:type',
        hid: 'og:type',
        name: 'og:type',
        content: 'website',
      },
      {
        property: 'og:image',
        hid: 'og:image',
        name: 'og:image',
        content: 'https://prod-apk-package.s3.ap-south-1.amazonaws.com/web-picture/hirect_logo.png',
      },
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://hirect.in/webconnect',
        },
      ],
    };
  },
  data() {
    return {
      webPage: '', // webB webC
      preferenceId: '',
      URL: '',
      distinct_id: '',
    };
  },
  watch: {},
  created() {},
  mounted() {
    if (this.$route.query.type === '0') { // c
      this.pngage = 'webC';
    } else if (this.$route.query.type === '1') { // b
      this.pngage = 'webB';
    }
    this.URL = window.location.href;
    // this.metaTitle = this.$route.query.name + ' - ' + this.$route.query.category
    // if (this.$route.query.name && this.$route.query.category) {
    //   const title = this.$route.query.name + ' - ' + this.$route.query.category
    //   window.document.title = title
    // } else {
    //   window.document.title = 'Hirect'
    // }
  },
  methods: {
    gRI(getPreferenceId, getDistinctId) {
      this.preferenceId = getPreferenceId;
      this.distinct_id = getDistinctId;
    },
    openOrDownload() {
      this.userJump();
      window.location = 'https://hirect.in';
    },
    userJump() {
      if (this.$route.query.type === '0') { // c
        this.$sendToEsData('profileLinkJumpedWeb', {
          share_id: this.$route.query.t,
          distinct_id: this.distinct_id,
        });
      } else if (this.$route.query.type === '1') { // b
        this.$sendToEsData('jobLinkJumpedWeb', {
          share_id: this.$route.query.t,
          distinct_id: this.distinct_id,
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.webhirect-all {
    width: 600px;
    margin: 0 auto;
}

.wenBC-header {
    top: 0px;
    height: 90px;
    width: 100%;
    width: 600px;
    background-color: #fbfbfb;
    z-index: 999;

    .wenBC-header-content {
        margin: 0 auto;
        height: 90px;
        width: 90%;
        display: flex;
        align-items: center;

        .wenBC-header-content-text {
            margin-left: 5%;
            display: flex;
            justify-content: space-around;
            align-items: flex-start;
            flex-direction: column;

            .wenBC-header-content-text-1 {
                font-size: 16px;
                font-family: 'Arial';
                font-weight: 900;
                color: #0e101a;
                line-height: 19px;
            }

            .wenBC-header-content-text-2 {
                font-size: 12px;
                font-family: 'Arial';
                font-weight: 100;
                color: #0e101a;
                line-height: 14px;
            }
        }
    }
}

.footer-button-content {
    width: 100%;
    height: 60px;
    border: none;
    background-color: #FFFFFF;
    margin-top: 20px;

    .footer-button {
        background-color: #15c39c;
        border: none;
        height: 40px;
        width: 90%;
        border-radius: 30px;
        font-size: 16px;
        font-family: 'Arial';
        font-weight: bold;
        color: #ffffff;
        line-height: 19px;
    }
}
</style>
