<template>
    <div class="signup">
        <h3 class="heading">Choose from over 3.8M+ verified candidates</h3>
        <h6 class="subheading">Hire directly on Hirect</h6>
        <button class="download-btn" @click="downloadDialogShow">Download Now</button>
        <DownloadModal v-show="showModal" @close-modal="showModal = false" />
    </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    downloadDialogShow() {
      this.showModal = true;
      // this.$ga.event('click', 'download', 'app', 5);
      this.$sendToEsData('webQrcodeViewed', {
        region_id: 0,
        position: 'in_downloadapp_popup',
      });
    },
  },
};
</script>

<style>
.signup {
    background: rgba(25, 226, 158, 0.8);
    padding: 6%;
    border-radius: 10px;
    text-align: center;
}

.heading {
    font-weight: bold;
}

.subheading {
    margin-top: 2%;
}

.download-btn {
    border-radius: 25px;
    height: 37px;
    margin-top: 4%;
    border-style: none;
    padding: 1% 4%;
    font-size: 14px;
    font-weight: bold;
}
</style>
