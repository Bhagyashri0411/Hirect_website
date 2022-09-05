<template>
    <!-- <div class="container1 category-outer" id="category">
        <select class="dropdown-top form-select-md" v-if="Conditional(category)" v-for="category in parentCategoryList"
            :key="category.id" @change="handleClick" >
            <option value="none" class="option1" hidden>{{ category.name }}
            </option>
            <option :value="category.link">{{ category.name }}
            </option>
            <option :value="category.link" v-for="category1 in categoryList" v-if="Conditional(category, category1)">{{
                    category1.name
            }}</option>
        </select>
    </div> -->
    <!-- 
    <div class="container1 category-outer" id="category">
        <div class="dropdown-top" v-for="category in parentCategoryList" :key="category.id"
            v-if="Conditional(category)">
            <button @click="handleDropdown(category)" style="width: 173px;
    height: 42px; ">{{ category.name }} </button>

            <div class="modal-fade" tabindex="-1" v-show="category.isShown" role="dialogue">
                <div class="modal-dialogue">
                    <ul>
                        <li @click="handleClick(category.link)">{{ category.name
                        }}
                        </li>
                        <li v-for="category1 in categoryList" v-if="Conditional(category, category1)"
                            @click="handleClick(category.link)">{{
                                    category1.name
                            }}</li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
 -->
    <div class="container1">
        <div id="category" class="navbar navbar-expand-lg navbar-light bg-light container1 category-outer">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item" @click="handleButtonClick(category)" v-for="category in parentCategoryList"
                    :key="category.id" v-if="Conditional(category)" v-html="category.name"></li>
            </ul>
        </div>

        <!-- <div class="modal-parent" v-show="flag"> -->
        <div class="modal" v-show="flag">
            <div class="modal-fade">
                <div class="modal-dialogue">
                    <div class="modal-content">
                        <ul>
                            <li @click="handleClick(currentCat.link)" class="modal-list-item" v-html="currentCat.name">
                            </li>
                            <li v-for="category1 in categoryList" v-if="Conditional(currentCat, category1)"
                                @click="handleClick(currentCat.link)" class="modal-list-item" v-html="category1.name">
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- </div> -->

    </div>
</template>
<script>
export default {

    async fetch() {
        const res1 = await fetch('https://www.hirect.in/blog/wp-json/wp/v2/categories?per_page=100');
        this.categoryList = await res1.json();

        const response = await fetch('https://www.hirect.in/blog/wp-json/wp/v2/categories?per_page=100&parent=0');
        this.parentCategoryList = await response.json();
        this.parentCategoryList.map((catg) => {
            catg.isShown = false;
        });
    },

    props: {
    },
    data() {
        return {
            currentCat: [],
            showModal: false,
            currentMember: null,
            posts: [],
            currentPage: 1,
            i: 1,
            parentCategoryList: [],
            categories: [],
            categoryList: [],
            subCategoriesIdList: [],
            m: [],
            parentIdList: [],
            uniqueParentIdArray: [],
            flag: false,
        };
    },
    methods: {

        handlePageClick() {

        },
        handleButtonClick(category) {
            this.flag = !this.flag;
            this.currentCat = category;
            this.parentCategoryList.forEach(element => {
                if (element.id === category.id) {
                    element.isShown = true;
                }

                else {
                    element.isShown = false;
                }
                console.log("Inside false condition");
                console.log("ISSHOWN: " + element.isShown);
            });
        },

        handleDropdown(category) {
            console.log("Inside button!");
            this.parentCategoryList.forEach(element => {
                if (element.isShown == true) {
                    element.isShown = false;
                    console.log("Inside true condition");
                }
                else {

                    if (element.id === category.id) {
                        element.isShown = true;
                    }

                    else {
                        element.isShown = false;
                    }
                    console.log("Inside false condition");
                    console.log("ISSHOWN: " + element.isShown);
                }
            });
        },

        handleClick(value) {
            location = value;
            this.flag = false;
        },
        Conditional(parent, child = null) {
            if (!child)
                return parent.name != "Test" && parent.name != "Uncategorized";

            return child.parent == parent.id;
        },
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
            const response = await fetch(`https://www.hirect.in/blog/wp-json/wp/v2/posts?page=${pageNumber}`);
            this.posts = await response.json();
            // currentPage = pageNumber;
        },

        async loadData1(pageNumber) {
            const response = await fetch(`https://www.hirect.in/blog/wp-json/wp/v2/posts?page=${pageNumber}`);
            this.posts = await response.json();
            this.currentPage = pageNumber;
            this.i++;
        },

        async loadData2(pageNumber) {
            if (pageNumber >= 1) {
                const response = await fetch(`https://www.hirect.in/blog/wp-json/wp/v2/posts?page=${pageNumber}`);
                this.posts = await response.json();
                this.currentPage = pageNumber;
                this.i--;
            }
            else {
                document.getElementById("it1").disabled = true;
            }

        }
    },
};
</script>
<style scoped>
.modal-list-item {
    list-style: none;
}

.nav-item {
    padding: 0px 19px;
    width: 56vw;
}

.navbar-nav {
    flex-direction: row !important;
}

body.modal-open {
    width: 100% !important;
    padding-right: 0 !important;
    overflow-y: scroll !important;
}

.modal {
    position: fixed;
    background: white;
    width: 80%;
    /* margin-top: 0%; */
    height: fit-content;
    padding: 22px;
    padding-left: 10px;
    /* padding-top: 56px; */
    border-radius: 6px;
    top: 28%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 18px;
    animation: drop-data-v-12b4bbb7 0.2s linear;
    border: 0.3px solid grey;
    box-shadow: 0px 1px 6px 0px #888888;
}

.modal-content {
    border: none !important;
    text-align: left;
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

.dropdown-top:link {
    border-style: none !important;
}

.dropdown-top:visited {
    border-style: none !important;
}

.dropdown-top:hover {
    border-style: none !important;
}


.dropdown-top:active {
    border-style: none !important;
}

#category::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.3);
    background-color: #F5F5F5;
}

#category::-webkit-scrollbar {
    height: 2px;
    background-color: #F5F5F5;
}

#category::-webkit-scrollbar-thumb {
    background-color: #2CE2A2;
}

.category-outer {
    padding-top: 11%;
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
}

.dropdown-top {
    border-style: hidden;
    padding: 15px 15px;
    position: relative;
    text-align: center;
    display: flex;
    transition: 0.4s;
    border: 0;
    display: flex;
    align-content: flex-end;
    flex-wrap: wrap;
}

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
    margin-top: 10%;
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
    position: fixed;
    background: white;
    width: 80%;
    /* margin-top: 0%; */
    height: fit-content;
    padding: 22px;
    padding-left: 10px;
    /* padding-top: 56px; */
    border-radius: 6px;
    top: 28%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 18px;
    animation: drop-data-v-12b4bbb7 0.2s linear;
    border: 0.3px solid grey;
    box-shadow: 0px 1px 6px 0px #888888;
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
