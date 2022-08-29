<template>
  <div class="unsubscribe-page">
    <div class="unsubscribe-container">
      <div class="unsubscribe-top">
        <img src="~/assets/img/hirect-logo-full.png" class="logo" alt="title-img" @click="hirectLogoClick">
      </div>
      <div class="unsubscribe-bottom" v-loading="isloading">
        <img v-if="!isloading" class="unsubscribe-logo" src="~/assets/img/unsubscribe_succeed.png" alt="">
        <p v-if="!isloading" class="unsubscribe-text">Unsubscribe successfully!</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'unsubscribe',
  components: {},
  data() {
    return {
      isloading: true,
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.unsubscribe()
  },
  methods: {
    async unsubscribe() {
      const res = this.$axios.$post('https://pushadmin.hirect.ai/reg/unsub', {
        uid: this.$route.query.uid,
        role: this.$route.query.role
      })
      this.isloading = false
      this.$sendToEsData((this.$route.query.role === 1 ? 'reRecallEmailUnsubscribeClick' : 'caRecallEmailUnsubscribeClick'), {
        'uid': this.$route.query.uid,
        'push_id': this.$route.query.push_id,
        'if_summary': this.$route.query.if_summary,
        'region_id': 0,
        'scenario_name': this.$route.query.scenario_name
      })
    },
    hirectLogoClick() {
      window.open('https://www.hirect.in', '_self')
    }
  }
}
</script>
<style lang="scss" scoped>
.unsubscribe-page {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.unsubscribe-container {
  display: flex;
  width: 864px;
  max-width: 80%;
  flex-direction: column;
  align-items: center;
}
.unsubscribe-top {
  width: 100%;
  height: 138px;
  display: flex;
  align-items: center;

  .logo {
    height: 54px;
    width: 200px;
  }
}
.unsubscribe-bottom {
  width: 100%;
  min-height: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .unsubscribe-logo {
    width: 56px;
    height: 56px;
    margin: 118px 0px 28px 0px;
  }
  .unsubscribe-text {
    font-size: 32px;
    font-weight: bold;
    color: #0E101A;
    line-height: 38px;
    text-align: center;
  }
}
</style>