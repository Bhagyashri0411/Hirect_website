<template>
  <div class="wrapper">
    <Header />
    <section class="milestone-section1">
      <h2>
        <strong>Media Coverage</strong>
      </h2>
    </section>
    <section class="milestone-section">
      <h2>
        <strong>1. Press Release</strong>
      </h2>
      <MediaCard :mediaList="mediaList" />
    </section>
    <section class="milestone-section">
      <h2>
        <strong>2. Opinion Pieces </strong>
      </h2>
      <MediaCard :mediaList="mediaList" />
    </section>
    <section class="milestone-section">
      <h2>
        <strong>3. Profiling & Podcast</strong>
      </h2>
      <MediaCard :mediaList="mediaList" />
    </section>

    <!----scan-app start----------->
    <GetAppPage :eventName="'in_aboutus_bottom'" />
    <!----scan-app end----------->
    <Footer />
    <DownloadModal v-show="showModal" @close-modal="showModal = false" />
  </div>
</template>

<script>
/* eslint-disable no-dupe-keys */
import DownloadModal from '~/components/DownloadModal.vue';
import MediaCard from '../../components/MediaCard.vue';

export default {
  components: {
    DownloadModal,
    MediaCard,
  },
  head() {
    return {
      title: 'About Us - Hirect ',
      link: [
        {
          rel: 'canonical',
          href: 'https://unhirect.in/aboutus',
        },
      ],
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            "Hirect is India's best job search app for start-up hiring. Hirect connects the jobseekers with start-up founders and enables easy and direct hiring. ",
        },
      ],
    };
  },
  data() {
    return {
      showModal: false,

      mediaList: [
        {
          logo: 'BW-people-logo.webp',

          imageSrc: 'publish1.webp',

          headline:
            'Hirect’s Latest Feature Allows Users To Search For Jobs ‘Nearby’',

          date: '4 April, 2022',

          link: 'http://bwpeople.businessworld.in/article/Hirect-s-Latest-Feature-Allows-Users-To-Search-For-Jobs-Nearby-/15-06-2022-432807/',
        },
        {
          logo: 'myMobile.webp',

          imageSrc: 'publish2.webp',

          headline:
            'Hirect App Review: A well-balanced platform for both companies and job seekers, with impressive interface',

          date: '21 Feb, 2022',

          link: 'https://www.mymobileindia.com/hirect-app-review/#gsc.tab=0',
        },
        {
          logo: 'TOI_Logo.webp',

          imageSrc: 'cxoImage.webp',

          headline:
            'Importance of practicing environmental ethics in workplace',

          date: '16 May, 2022',

          link: 'https://timesofindia.indiatimes.com/blogs/voices/importance-of-practicing-environmental-ethics-in-workplace/',
        },
        {
          logo: 'BW-people-logo.webp',

          imageSrc: 'publish1.webp',

          headline:
            'Hirect’s Latest Feature Allows Users To Search For Jobs ‘Nearby’',

          date: '4 April, 2022',

          link: 'http://bwpeople.businessworld.in/article/Hirect-s-Latest-Feature-Allows-Users-To-Search-For-Jobs-Nearby-/15-06-2022-432807/',
        },
        {
          logo: 'myMobile.webp',

          imageSrc: 'publish2.webp',

          headline:
            'Hirect App Review: A well-balanced platform for both companies and job seekers, with impressive interface',

          date: '21 Feb, 2022',

          link: 'https://www.mymobileindia.com/hirect-app-review/#gsc.tab=0',
        },
        {
          logo: 'TOI_Logo.webp',

          imageSrc: 'cxoImage.webp',

          headline:
            'Importance of practicing environmental ethics in workplace',

          date: '16 May, 2022',

          link: 'https://timesofindia.indiatimes.com/blogs/voices/importance-of-practicing-environmental-ethics-in-workplace/',
        },
      ],
    };
  },

  jsonld() {
    return {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      url: 'https://www.hirect.in/aboutus',
      potentialAction: {
        '@type': 'SearchAction',
        target:
          'https://www.hirect.in/aboutus/srp/results?query={search_term_string}',
        'query-input': 'required name=search_term_string',
      },

      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: '1',
          name: 'About us',
          item: 'https://www.hirect.in/aboutus/',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
/******* About Page ************/

.mobile-hero {
  display: none;
}

.milestone-section1 {
  height: auto;
  margin-bottom: 40px;
}
.milestone-section h2 {
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  text-align: left;
  margin-left: 212px;
}

.media-button {
  text-align: center;
}

.button1 {
  border-radius: 33px;
  height: 41px;
  width: 104px;
  background-color: white;
  margin-bottom: 41px;
}

.milestone-section {
  margin-top: 46px;
  text-align: center;
  margin-bottom: 64px;
}
.milestone-section1 h2 {
  text-align: center;
  margin-top: 96px;
  font-size: 60px;
}

.milestone-row {
  flex-direction: column;
  align-content: center;
}

.top-row {
  display: flex;
  justify-content: center;
}

.search-img {
  background-color: #f2f4f8;
  border-radius: 100%;
  height: 50px;
  width: 50px;
  align-content: center;
}

.parent-row {
  padding: 40px;
}

.about-heading {
  text-align: center;
  margin-bottom: 9px;
}

.about-section {
  padding: 60px 0;
}

.about-section p {
  color: #4d5358;
  font-size: 18px;
  font-weight: normal;
  line-height: 24px;
  margin-bottom: 15px;
  text-align: center;
}

// Meet Team

.meet-team-list {
  padding-left: 102px;
}

.meet-team-list ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
}

.meet-team-list ul li {
  width: 45.5%;
  margin: 30px 0;
  margin-right: 9%;
}

.meet-team-list ul li:nth-child(2n) {
  margin-right: 0;
}

// end Meet Team

/******* end About Page ************/

@media only screen and (min-width: 768px) and (max-width: 1299px) {
  .meet-team-list ul li {
    width: 47.5%;
    margin: 20px 0;
    margin-right: 5%;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1199px) {
  .about-section p {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 15px;
  }

  .meet-team-list ul li {
    width: 48%;
    margin: 20px 0;
    margin-right: 4%;
  }

  .about-section {
    padding: 60px 0 50px;
  }
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
  .about-section p br {
    display: none;
  }

  .about-section p {
    font-size: 15px;
    line-height: 22px;
  }

  .meet-team-list ul li {
    width: 49%;
    margin: 20px 0;
    margin-right: 2%;
  }
}

@media only screen and (min-width: 300px) and (max-width: 767px) {
  .parent-row {
    display: none;
  }

  .mobile-hero {
    display: block;
    padding: 10px;
  }

  .container-block {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .milestone-section1 {
    height: auto;
  }
  .milestone-section1 h2 {
    font-size: 40px;
    margin-top: 70px;
  }
  .milestone-section h2 {
    text-align: left;
    font-size: 20px;
    margin-left: 32px;
  }
  .about-section {
    padding: 35px 0;
  }

  .about-section p {
    font-size: 16px;
    padding: 15px;
    text-align: center;
  }

  .about-section p br {
    display: none;
  }

  .meet-team-list ul li {
    width: 100%;
    margin-right: 0;
    margin: 20px 0;
  }

  section.meet-team-section {
    padding: 20px 0 40px;
  }

  section.meet-team-section {
    text-align: center;
  }

  .meet-team-list {
    padding-left: 0px;
  }
}
</style>
