<template>
  <div class="wrapper">
    <Header />
    <div class="container">
      <section class="milestone-section1">
        <h2>
          <strong>Media Coverage</strong>
        </h2>
      </section>
      <section class="milestone-section">
        <h2>
          <strong>1. Press Release</strong>
        </h2>
        <MediaCard :sentList="pressList" />
      </section>
      <section class="milestone-section">
        <h2>
          <strong>2. Opinion Pieces </strong>
        </h2>
        <MediaCard :sentList="opinionsList" />
      </section>
      <section class="milestone-section">
        <h2>
          <strong>Podcast</strong>
        </h2>
        <div class="container podcast podcasts">
          <iframe class="podcast-inner" style="border-radius:12px"
            src="https://open.spotify.com/embed/episode/2iNmSKuh9icfBnANVAYKYb?utm_source=generator" width="50%"
            height="352" frameBorder="0" allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

          <iframe class="podcast-inner" style="border-radius:12px"
            src="https://open.spotify.com/embed/episode/6yJaQtWchim7DpUkQmMxet?utm_source=generator" width="50%"
            height="352" frameBorder="0" allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

          <iframe class="podcast-inner" style="border-radius:12px"
            src="https://open.spotify.com/embed/episode/6rOmt60cHxx7vjAlsUtsjP?utm_source=generator" width="50%"
            height="352" frameBorder="0" allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

          <iframe class="podcast-inner" style="border-radius:12px"
            src="https://open.spotify.com/embed/episode/4oH27RFr4s0soqZa0W4I0F?utm_source=generator" width="50%"
            height="352" frameBorder="0" allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

          <iframe class="podcast-inner" style="border-radius:12px"
            src="https://open.spotify.com/embed/episode/5DoUyrgQuBP5AvQJt52SUb?utm_source=generator" width="50%"
            height="352" frameBorder="0" allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

          <iframe class="podcast-inner" style="border-radius:12px"
            src="https://open.spotify.com/embed/episode/7IOGjfXNR2m49EWQAwTufo?utm_source=generator" width="50%"
            height="352" frameBorder="0" allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
      </section>

      <section class="milestone-section">
        <h2>
          <strong>4. Profiling </strong>
        </h2>
        <MediaCard :sentList="profilingList" />
      </section>
    </div>
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
import articles from './articles.json';

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
      pressList: articles.pressList,
      opinionsList: articles.opinionsList,
      profilingList: articles.profilingList
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
.podcast::-webkit-scrollbar {
  height: 5px;
}

*::-webkit-scrollbar {
  width: 6px;
  background-color: #F5F5F5;
}

.podcast::-webkit-scrollbar-track {
  // -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.9);
  background-color: white;
}

.podcast::-webkit-scrollbar-thumb {
  position: relative;
  background-color: var(--hirect-color);
  height: 10px !important;
  border-radius: 10px;
}

.podcast-inner {
  margin-right: 5%;
  width: 100%;
}

.podcasts {
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  padding: 20px;
}

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
  margin-left: 5%;
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
  margin-top: 4%;
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
