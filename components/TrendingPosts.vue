<template>
  <div class="container">
    <h5 class="main-head" style="font-weight: 700">Top Tranding Articles</h5>
    <div class="blog-card" v-for="blog in posts" :key="blog.id">
      <div class="blog-card-inner">
        <div class="col-md-12">
          <div>
            <img class="blog-img" :src="blog.yoast_head_json.og_image[0].url" loading="lazy" :alt="blog.name" />
          </div>
          <div>
            <h4 class="blog-heading">{{ blog.title.rendered }}</h4>
            <!-- <div class="description" v-html="blog.excerpt.rendered"></div> -->
            <div class="row1">
              <!-- <div>By Hirect Editorial Team</div> -->
              <!-- <div>{{ blog.date }}</div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  async fetch() {
    const response = await fetch(
      'https://www.hirect.in/blog//wp-json/wp/v2/posts?meta_key=views&order_by=meta_value_num&per_page=5',
    );
    this.posts = await response.json();
    // eslint-disable-next-line no-console
    console.log(this.currentPage);
  },
  props: {},
  data() {
    return {
      showModal: false,
      currentMember: null,
      posts: [],
      currentPage: 1,
      i: 1,
    };
  },
  methods: {
    toggleModal(member) {
      if (this.$device.isMobile) {
        return;
      }
      this.showModal = !this.showModal;
      this.currentMember = member;
    },
    imgUrl(src) {
      /* eslint-disable */
      try {
        return require(`@/assets/imgs/${src}`);
      } catch (error) {
        return require(`@/assets/imgs/step-image.webp`);
      }
      /* eslint-disable */
    },
    async loadData(pageNumber) {
      const response = await fetch(
        `https://www.hirect.in/blog/wp-json/wp/v2/posts?page=${pageNumber}`
      );
      this.posts = await response.json();
      console.log(this.posts[0].yoast_head_json.og_image[0].url);
      console.log(this.pageNumber);
      // currentPage = pageNumber;
    },

    async loadData1(pageNumber) {
      const response = await fetch(
        `https://www.hirect.in/blog/wp-json/wp/v2/posts?page=${pageNumber}`
      );
      this.posts = await response.json();
      console.log(this.posts[0].yoast_head_json.og_image[0].url);
      console.log(this.pageNumber);
      this.currentPage = pageNumber;
      this.i++;
    },

    async loadData2(pageNumber) {
      if (pageNumber >= 1) {
        const response = await fetch(
          `https://www.hirect.in/blog/wp-json/wp/v2/posts?page=${pageNumber}`
        );
        this.posts = await response.json();
        console.log(this.posts[0].yoast_head_json.og_image[0].url);
        console.log(this.pageNumber);
        this.currentPage = pageNumber;
        this.i--;
      } else {
        document.getElementById("it1").disabled = true;
      }
    },
  },
};
</script>
<style scoped>
.column_2 {
  padding: 15px;
}

.row1 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}

.blog-heading {
  margin-bottom: 20px;
  margin-top: 2%;
  font-weight: 600;
  margin-left: 10px;
  font-size: 16px;
}

.blog-img {
  border-radius: 10px;
}

.blog-card:not(:first-child) {
  display: block;
}

.blog-card-inner {
  height: auto;
  flex-direction: row;
  text-align: left;
  /* float: left; */
  border-radius: 10px;
  padding: 10px;
}

.blog {
  border-radius: 10px;
  height: 180px;
  width: 200px;
  padding: 5px;
  filter: grayscale(100);
}

.blog:hover {
  filter: grayscale(0);
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
  color: #76787a;
  font-size: 13px;
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
  height: fit-content;
  padding: 30px;
  border-radius: 6px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 22px;
  animation: drop 0.05s linear;
}

.model-image {
  align-items: center;
}

@keyframes drop {

  /* 0% {
    top: -100px;
  }

  100% {
    top: 50%;
  } */
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
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

.column {
  padding: 10px;
}

.image-section img {
  border-radius: 15px;
}

.description {
  font-size: 14px;
  margin-bottom: 12px;
}

.description h3 {
  margin-bottom: 20px;
}

@media only screen and (min-width: 300px) and (max-width: 991px) {
  .description {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-bottom: 13px;
  }

  .row1 {
    display: block;
  }

  .modal-parent {
    display: none;
  }
}
</style>
