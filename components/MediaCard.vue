<template>
  <div class="container container-1">
    <div class="photo-card" v-for="article in sentList" :key="article.id">
      <a :href="article.link" target="_blank">
        <div class="photo-card-inner">
          <img class="magzine-logo" :src="imgSrc(article.logo)" loading="lazy" alt="logo" />
          <!-- <img
            class="photo"
            :src="imgSrc(article.imageSrc)"
            loading="lazy"
            alt="article-photo"
          /> -->
          <p class="headline">{{ article.headline }}</p>
          <hr />
          <div class="row">
            <div class="col photo-date">{{ article.date }}</div>
            <div class="col photo-read">Read More</div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sentList: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      showModal: false,
      currentarticle: null,
    };
  },
  methods: {
    imgSrc(src) {
      /* eslint-disable */
      try {
        return require(`@/assets/imgs/Media_Logos/${src}`);
      } catch (error) {
        return require(`@/assets/imgs/step-image.png`);
      }
      /* eslint-disable */
    },
  },
};
</script>
<style scoped>
.container-1::-webkit-scrollbar {
  height: 5px;
}

*::-webkit-scrollbar {
  width: 6px;
  background-color: #F5F5F5;
}

.container-1::-webkit-scrollbar-track {
  background-color: white;
}

.container-1::-webkit-scrollbar-thumb {
  position: relative;
  background-color: var(--hirect-color);
  height: 10px !important;
  border-radius: 10px;
}

/* .container-1::-webkit-scrollbar-track-piece:end {
  margin-right: 50px;
}

.container-1::-webkit-scrollbar-track-piece:start {
  margin-left: 50px;
} */

.magzine-logo {
  padding: 19px;
  height: 73px;
  width: auto;
  place-self: center;
  margin-top: 10%;
}

.photo {
  padding: 8px;
}

.media-button {
  text-align: center;
}

.button1 {
  border-radius: 10px;
  background-color: white;
}

.photo-card-inner p {
  font-size: 14px;
  padding: 10px;
  font-weight: bold;
  /* height: 20%; */
  margin-top: 10%;
  color: black;
}

.photo-date,
.photo-read {
  font-size: 16px;
  color: #4d5358;
}

.photo-card:not(:first-child) {
  display: block;
  margin-left: 10px;
}

.photo-card-inner {
  height: 323px;
  width: 260px;
  display: grid;
  grid-template-rows: 23% 45% 16%;
  text-align: center;
  float: left;
  border-radius: 32px;
  padding: 10px;
  margin: 32px;
  box-shadow: rgb(99 99 99 / 10%) 0px 5px 5px 5px;
}

.X {
  position: absolute;
  right: 20px;
  top: 5px;
  font-size: 40px;
  cursor: pointer;
}

section {
  transition: 2s;
}

.row {
  display: grid;
  grid-auto-flow: column;
}

.column {
  padding: 10px;
}

.image-section img {
  border-radius: 15px;
}

.description {
  padding: 20px;
  font-size: 15px;
}

.description h3 {
  margin-bottom: 20px;
}

.container-1 {
  display: flex;
  overflow-x: scroll;
  justify-content: space-between;
}

@media only screen and (min-width: 300px) and (max-width: 767px) {
  .container-1 {
    padding-left: 30px;
  }
}
</style>
