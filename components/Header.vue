<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div class="container-fluid">
        <NuxtLink class="navbar-brand" to="/"><img src="~/assets/img/hirect-logo.png" alt="" /></NuxtLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
          aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarScroll">
          <ul class="
              navbar-nav
              ms-auto
              my-2 my-lg-0
              navbar-nav-scroll
              nav-dropdown-link
            ">
            <li class="nav-item">
              <NuxtLink exact class="nav-link" to="/">Home</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/connect">Recruiters</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/features-in">
                Enteriprise Hiring</NuxtLink>
            </li>
            <!-- <li class="nav-item">
              <NuxtLink class="nav-link" to="/connect">Recruiters</NuxtLink>
            </li> -->
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/job-seeker">
                Job Seekers</NuxtLink>
            </li>
            <li class="nav-item">
              <button type="button" class="btn default-btn button-sm download-btn" @click="downloadDialogShow">
                Download App
              </button>
            </li>
            <button type="button" data-bs-toggle="collapse" data-bs-target="#secondnavbar" aria-controls="navbarScroll"
              aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse nav-coll" id="secondnavbar">
              <ul>
                <li class="nav-item">
                  <NuxtLink class="sec-nav-link" to="/aboutus"> About us</NuxtLink>
                </li>
                <li class="nav-item">
                  <a href="https://www.hirect.in/blog/" class="sec-nav-link"> Blog</a>
                </li>
              </ul>
            </div>

          </ul>
        </div>
      </div>
    </nav>
    <el-dialog :visible.sync="videoDialogVisible" class="watch-demo-popup">
      <video width="100%" controls preload="none" autoplay="autoplay" id="videoPlay">
        <source src="~/assets/video/hirect-demo-video.mp4" type="video/mp4" />
      </video>
    </el-dialog>

    <DownloadModal v-show="showModal" @close-modal="showModal = false" />
  </div>
</template>

<script>
import DownloadModal from "~/components/DownloadModal.vue";
export default {
  components: {
    DownloadModal,
  },
  data() {
    return {
      showModal: false,
      videoDialogVisible: false,
      downloadDialogVisible: false,
    };
  },
  watch: {
    videoDialogVisible(val) {
      if (!val) {
        let video = document.getElementById("videoPlay");
        video.pause();
      }
    },
  },
  methods: {
    // play video
    videoPlayClick() {
      this.videoDialogVisible = true;
    },
    downloadDialogShow() {
      this.showModal = true;
      this.$ga.event("click", "download", "app", 5);
      this.$sendToEsData("webQrcodeViewed", {
        region_id: 0,
        position: "in_downloadapp_popup",
      });
    },
  },
};
</script>

<style scoped>
/* new css */

.nav-coll {
  position: absolute;
  top: 78px;
  right: 0;
  z-index: 999;
  background-color: #ffffff !important;
  padding: 20px 60px;
  box-shadow: 0 10px 20px 0 #e3e3e340;
}
  .navbar-light .navbar-nav .nav-item .sec-nav-link {
    color: #333333;
    font-family: Helvetica;
    font-size: 15px;
    text-decoration: none;
    line-height: 70px;
    position: relative;
    cursor: pointer;
  }
.nav-coll ul {
  list-style: none;
  padding: 0;
}

#menu__toggle {
  opacity: 0;
}

#menu__toggle:checked~.menu__box {
  right: 0 !important;
}



.menu__btn>span,
.menu__btn>span::before,
.menu__btn>span::after {
  display: block;
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #616161;
  transition-duration: .25s;
}

.menu__btn>span::before {
  content: '';
  top: -8px;
}

.menu__btn>span::after {
  content: '';
  top: 8px;
}

.menu__box {
  display: block;
  position: fixed;
  top: 0;
  right: -100%;
  width: 100px;
  margin: 0;
  padding: 80px 0;
  list-style: none;
  background-color: #ECEFF1;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, .4);
  transition-duration: .25s;
}

.menu__item {
  display: block;
  padding: 12px 24px;
  color: #333;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  transition-duration: .25s;
}

.menu__item:hover {
  background-color: #CFD8DC;
}

/* end  */
.navbar-light .navbar-nav .nav-link {
  color: #333333;
  font-family: Helvetica;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  letter-spacing: normal;
  line-height: 18px;
  padding: 20px 22px;
  position: relative;
  cursor: pointer;
}

.navbar.bg-light {
  background-color: #ffffff !important;
  padding: 10px 50px;
  box-shadow: 0 10px 20px 0 #e3e3e340;
}

.navbar-nav {
  align-items: center;
}

.navbar-nav {
  align-items: center;
}

.bordered-btn svg,
.default-btn svg {
  margin-left: 10px;
}

ul.dropdown-menu {
  border-radius: 5px;
  background-color: rgba(0, 204, 180, 0.05);
}

ul.dropdown-menu li:hover {
  background-color: rgba(44, 226, 162, 0.3);
}

ul.dropdown-menu li:hover .dropdown-item:focus,
.dropdown-item:hover {
  background-color: rgba(44, 226, 162, 0.3);
  color: #333333;
}

.navbar-light .navbar-nav .nav-link:hover:before,
.navbar-light .navbar-nav .nav-link.nuxt-link-active:before {
  content: "";
  background-color: #2ce2a2;
  position: absolute;
  bottom: 5px;
  width: 100%;
  height: 3px;
  left: 0px;
  right: 0;
  margin: 0 auto;
}

.navbar-expand-lg .navbar-nav .dropdown-menu {
  top: 58px;
}

.navbar-nav li:last-child button {
  margin-right: 0;
}

.navbar-light .navbar-brand img {
  max-width: 172px;
}

li.nav-item.dropdown .dropdown-toggle::after {
  display: none;
}

.navbar-expand-lg .navbar-nav .dropdown-menu {
  min-width: 106px;
  border-radius: 5px;
  border: 0;
}

.navbar-nav .dropdown-menu a.dropdown-item {
  color: #333333;
  font-family: Helvetica;
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  letter-spacing: normal;
  line-height: 21px;
  text-align: left;
  padding: 5px 10px;
}

button.btn.watch-demobtn {
  width: 40px;
  -webkit-transition: width 0.5s;
  transition: width 0.5s;
  overflow: hidden;
  padding: 0;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

button.btn.watch-demobtn:hover {
  width: 145px;
  -webkit-transition: width 0.2s;
  transition: width 0.2s;
}

button.btn.watch-demobtn span.text {
  white-space: nowrap;
  width: 0;
  overflow: hidden;
  color: #2ce2a2;
}

button.btn.watch-demobtn .icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  padding-right: 7px;
  background: #ffffff;
}

button.btn.watch-demobtn:hover span.text {
  width: auto;
}

button.btn.watch-demobtn:hover span.icon {
  padding: 0;
  width: auto;
}

.navbar .button-sm {
  width: 145px;
  font-size: 15px;
  margin: 0 10px;
}

@media all and (min-width: 768px) {
  .navbar .nav-item .dropdown-menu {
    display: none;
  }

  .navbar .nav-item:hover .dropdown-menu {
    display: block;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1299px) {
  .navbar-light .navbar-nav .nav-link {
    padding: 20px 10px;
    font-size: 15px;
  }

  .navbar .button-sm {
    margin: 0 6px;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1199px) {
  .navbar-light .navbar-nav .nav-link {
    font-size: 15px;
    padding: 20px 7px;
  }

  .navbar-nav li button {
    margin: 0 7px;
  }

  .navbar.bg-light {
    padding: 15px 0px;
  }

  .navbar .button-sm {
    width: 130px;
    font-size: 14px;
    margin: 0 4px;
  }

  .navbar-light .navbar-nav .nav-link {
    text-align: center;
  }

  button.btn.watch-demobtn:hover {
    width: 130px;
  }

  .navbar-light .navbar-brand img {
    max-width: 132px;
  }

  .navbar-light .navbar-brand {
    margin-right: 10px;
  }

  .navbar-light .navbar-nav .nav-link {
    font-size: 14px;
    padding: 20px 7px;
  }
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
  .navbar-collapse {
    position: absolute;
    top: 87px;
    left: 0;
    z-index: 999;
    width: 100%;
    background: #f1f4f7;
  }

  .nav-dropdown-link {
    padding-top: 10px;
    padding-bottom: 20px;
  }

  .navbar-light .navbar-nav li.nav-item {
    padding: 5px 0;
  }

  .navbar-light .navbar-nav .nav-link {
    padding: 5px 7px;
    font-size: 16px;
    text-align: center;
  }

  .navbar-nav li button {
    margin: 5px auto;
  }

  .navbar-nav li:last-child button {
    margin-bottom: 0;
  }

  .navbar-nav .dropdown-menu a.dropdown-item {
    text-align: center;
    padding: 5px 5px;
  }

  .navbar-light .navbar-toggler {
    color: rgb(75 239 196);
    border-color: rgb(76 239 198);
    border-width: 2px;
  }

  .navbar-toggler:focus {
    box-shadow: none !important;
  }

  .navbar-light .navbar-nav .nav-link:hover:before {
    bottom: 0;
  }

  .navbar-light .navbar-nav .nav-link:hover:before,
  .navbar-light .navbar-nav .nav-link.nuxt-link-active:before {
    bottom: -3px;
  }

  .navbar .button-sm {
    width: 160px;
  }
}

@media only screen and (min-width: 300px) and (max-width: 767px) {
  .navbar.bg-light {
    padding: 10px 0;
  }

  .navbar-collapse {
    position: absolute;
    top: 75px;
    left: 0;
    z-index: 9;
    width: 100%;
    background: #f1f4f7;
  }

  .nav-dropdown-link {
    padding-top: 0px;
    padding-bottom: 15px;
  }

  .navbar-light .navbar-nav li.nav-item {
    padding: 5px 0;
  }

  .navbar-light .navbar-nav .nav-link {
    padding: 5px 7px;
    text-align: center;
  }

  .navbar-nav li button {
    margin: 5px auto;
  }

  .navbar-nav li:last-child button {
    margin-bottom: 0;
  }

  .navbar-nav .dropdown-menu a.dropdown-item {
    text-align: center;
    padding: 5px 5px;
  }

  .navbar-light .navbar-toggler {
    color: rgb(75 239 196);
    border-color: rgb(76 239 198);
    border-width: 2px;
    padding: 3px 8px;
  }

  .navbar-toggler:focus {
    box-shadow: none !important;
  }

  .navbar-light .navbar-nav .nav-link:hover:before {
    bottom: 0;
  }

  .navbar-light .navbar-nav .nav-link:hover:before,
  .navbar-light .navbar-nav .nav-link.nuxt-link-active:before {
    bottom: -3px;
  }
}
</style>
