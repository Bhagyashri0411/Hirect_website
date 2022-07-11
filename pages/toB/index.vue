<template>
  <div class="wrapper-india">
    <img src="~/assets/img/india-b-h5-1.png" alt="img_1">
    <img src="~/assets/img/india-b-h5-2.png" alt="img_2">
    <img src="~/assets/img/india-b-h5-3.png" alt="img_3">
    <img src="~/assets/img/india-b-h5-4.png" alt="img_4">
  </div>
</template>

<script>
/* eslint-disable camelcase */

export default {
  name: 'ToB',
  mounted() {
    const linkFrom = { 1: 'Hirect assistant', 2: 'sms' };
    let uid = '';
    let recruiter_id = '';
    let link_from = 'sms';
    if (this.$route.query.c) {
      recruiter_id = window.atob(this.$route.query.c);
    } else {
      uid = this.$route.query.uid || '';
      recruiter_id = this.$route.query.rid;
      link_from = linkFrom[this.$route.query.link] || 'sms';
    }
    this.$sendToEsData('recruiterProductInstructionPageViewed', {
      uid,
      recruiter_id,
      link_from,
      region_id: 0,
    }, uid);
  },
};
</script>

<style lang="scss" scoped>
.wrapper-india {
  display: flex;
  flex-direction: column;

  img {
    display: block;
    width: 100%;
    image-rendering: -moz-crisp-edges;
    /* Firefox */
    image-rendering: -o-crisp-edges;
    /* Opera */
    image-rendering: -webkit-optimize-contrast;
    /* Webkit (non-standard naming) */
    image-rendering: crisp-edges;
    -ms-interpolation-mode: nearest-neighbor;
    /* IE (non-standard property) */
  }
}
</style>
