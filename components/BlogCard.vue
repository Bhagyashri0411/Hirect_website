<template>
    <div class="container">
        <h5 class="main-head" style="font-weight:700;">Recently Published Articles</h5>
        <div class="blog-card" v-for="blog in posts" :key="blog.id">
            <div class="blog-card-inner">
                <div class="col-md-12">
                    <a :href="blog.yoast_head_json.og_url" style="text-decoration:none; color:black;">
                        <div>
                            <img class=" blog-img" :src="blog.yoast_head_json.og_image[0].url" loading="lazy"
                                :alt="blog.name" />
                        </div>
                        <div>
                            <h4 class="blog-heading" v-html="blog.title.rendered"></h4>
                            <div class="blogDescription" v-html="blog.excerpt.rendered"></div>
                            <div class="row1">
                                <div style="color: var(--hirect-color); font-weight: bold;">By Hirect Editorial Team
                                </div>
                                <div>{{ new Date(blog.date).toDateString() }}</div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <nav aria-label="Page navigation example">
            <ul class="pagination" id="pagination1" @click="loadData1">
                <li class="page-item" id="it1"><a class="page-link" data_page="Prev">Prev</a>
                </li>
                <li class="page-item"><a class="page-link" :data_page="firstPage">{{ firstPage }}</a></li>
                <li class="page-item"><a class="page-link" :data_page="firstPage + 1">{{ firstPage + 1 }}</a>
                </li>
                <li class="page-item"><a class="page-link" :data_page="firstPage + 2">{{ firstPage + 2 }}</a>
                </li>
                <li class="page-item"><a class="page-link" data_page="Next">Next</a></li>
            </ul>
        </nav>
        <!-- <div class="modal-parent" v-if="currentMember" v-show="showModal">
            <div class="modal">
                <div class="row model-image">
                    <div class="column image-section">
                        <img :src="imgUrl(currentMember.imgUrl)" loading="lazy" :alt="currentMember.name" srcset="" />
                    </div>
                    <div class="column description" style="text-align: justify">
                        <h3>
                            <strong>{{ currentMember.name }}</strong>
                        </h3>
                        <span>{{ currentMember.description }}</span>
                    </div>
                </div>
                <span class="X" @click="toggleModal()">&times;</span>
            </div>
        </div> -->
    </div>
</template>
<script>

export default {

  async fetch() {
    const response = await fetch('https://www.hirect.in/blog/wp-json/wp/v2/posts?page=1');
    this.posts = await response.json();
    // console.log(this.currentPage);
  },
  props: {
  },
  data() {
    return {
      showModal: false,
      currentMember: null,
      posts: [],
      currentPage: 1,
      i: 1,
      firstPage: 1,
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

        async loadData1(e) {
            const pageClicked = e.target.getAttribute("data_page");
            //console.log(e.target.attributes.data_page);

            if (pageClicked == "Next") {
                const pageClicked = e.target.getAttribute("data_page");
                // console.log(e.target.attributes.data_page);

                if (this.currentPage == this.firstPage + 2) {
                    // console.log(e.target.attributes.data_page);
                    const p = (this.firstPage + 3) - "0";
                    const response = await fetch(`https://www.hirect.in/blog/wp-json/wp/v2/posts?page=${p}`);
                    this.firstPage++;
                    this.posts = await response.json();
                    this.currentPage++;
                }
                else {
                    const p = (this.currentPage + 1) - "0";
                    const response = await fetch(`https://www.hirect.in/blog/wp-json/wp/v2/posts?page=${p}`);
                    this.posts = await response.json();
                    this.currentPage++;
                }
            }

            else if (pageClicked == "Prev") {
                const pageClicked = e.target.getAttribute("data_page");
                // console.log(e.target.attributes.data_page);

                if (this.currentPage == this.firstPage) {
                    if (this.currentPage >= 2) {
                        // console.log(e.target.attributes.data_page);
                        const p = (this.firstPage - 1) - "0";
                        const response = await fetch(`https://www.hirect.in/blog/wp-json/wp/v2/posts?page=${p}`);
                        this.firstPage--;
                        this.posts = await response.json();
                        this.currentPage--;
                    }
                    else {
                        const response = await fetch(`https://www.hirect.in/blog/wp-json/wp/v2/posts?page=${this.currentPage}`);
                        this.posts = await response.json();
                    }
                }
                else {
                    const p = (this.currentPage - 1) - "0";
                    const response = await fetch(`https://www.hirect.in/blog/wp-json/wp/v2/posts?page=${p}`);
                    this.posts = await response.json();
                    this.currentPage--;
                }
            }

            else {
                const pageClicked = e.target.getAttribute("data_page");
                // console.log(e.target.attributes.data_page);
                const response = await fetch(`https://www.hirect.in/blog/wp-json/wp/v2/posts?page=${pageClicked}`);
                this.posts = await response.json();
                this.currentPage = pageClicked;
            }
        },
    },
};
</script>
<style scoped>
.pagination {
    display: flex;
    padding-top: 20px;
    padding-left: 16%;
    /* padding-left: 0; */
    list-style: none;
}

.main-head {
    margin-bottom: 10%;
}

.blogDescription {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-bottom: 13px;
}

.column_2 {
    padding: 15px;
}

.row1 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    /* font-weight: bold; */
    font-size: 14px;
}

.blog-heading {
    margin-bottom: 20px;
    margin-top: 10%;
    font-weight: bold;
    font-size: 18px;
}

/* .blog-img img {
    height: 223px;
    width: 349px;
    object-fit: contain;
} */

.blog-img {
    border-radius: 10px;
}

.blog-card:not(:first-child) {
    display: block;
    /* margin-left: 10px; */
}

.blog-card-inner {
    height: auto;
    flex-direction: row;
    /* max-height: 250px; */
    /* min-height: 300px; */
    text-align: left;
    /* float: left; */
    border-radius: 10px;
    padding: 9px;
    padding-bottom: 10%;
    margin: 6px;
    background-color: #F9F9FA;
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
    animation: drop .05s linear;
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
        opacity: 0
    }

    100% {
        opacity: 1
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
    .modal-parent {
        display: none;
    }
}
</style>