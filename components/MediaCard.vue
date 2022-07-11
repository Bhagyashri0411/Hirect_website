<template>
  <div class="container container-1">
    <div class="photo-card" v-for="article in mediaList" :key="article.id">
      <a :href="article.link" target="_blank">
        <div class="photo-card-inner">
          <img class="magzine-logo" :src="imgSrc(article.logo)" alt="logo" />
          <img class="photo" :src="imgSrc(article.imageSrc)" />
          <p class="headline">{{ article.headline }}</p>
          <hr />
          <div class="row">
            <div class="col photo-date">{{ article.date }}</div>
            <div class="col photo-read">Read more</div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    mediaList: {
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
    toggleModal(article) {
      this.showModal = !this.showModal;
      this.currentarticle = article;
    },
    imgSrc(src) {
      /* eslint-disable */
      try {
        return require(`@/assets/imgs/${src}`);
      } catch (error) {
        return require(`@/assets/imgs/step-image.png`);
      }
      /* eslint-disable */
    },
  },
};
</script>
<style scoped>
.magzine-logo {
  padding: 9px;
  height: 73px;
  width: auto;
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
  font-size: 12px;
  padding: 10px;
  text-align: left;
  font-weight: bold;
  height: 20%;
  color: black;
}

.photo-date,
.photo-read {
  font-size: 13px;
  color: #4d5358;
}

.photo-card:not(:first-child) {
  display: block;
  margin-left: 10px;
}

.photo-card-inner {
  height: 349px;
  width: 228px;
  text-align: center;
  float: left;
  border-radius: 22px;
  padding: 5px;
  margin: 35px;
  /* background-color: #2ce2a2; */
  box-shadow: rgb(99 99 99 / 10%) 0px 5px 5px 5px;
}

.photo {
  border-radius: 15px;
  height: 37%;
  width: 206px;
  padding: 5px;
}

.name {
  margin-top: 15px;
  font-weight: 400;
  font-size: 20px;
}

.designation {
  padding: 0 10px;
  margin-left: 20px;
  max-width: 150px;
  display: block;
  font-size: x-small;
}

.modal-parent {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background: #00000052;
  backdrop-filter: blur(4px);
  z-index: 9999;
}

.modal {
  position: relative;
  background: white;
  width: 50%;
  height: 60%;
  padding: 30px;
  border-radius: 6px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 22px;
  animation: 0.5s drop;
}

@keyframes drop {
  0% {
    top: -100px;
  }

  100% {
    top: 50%;
  }
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
  padding-left: 134px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-left: 0px;
}

@media only screen and (min-width: 300px) and (max-width: 767px) {
  .container-1 {
    padding-left: 0px;
  }
}
</style>
