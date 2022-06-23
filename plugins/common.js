import Vue from 'vue'

// import VueAnalytics from 'vue-analytics'

let commonVariable = {
  install(Vue) {
    Vue.prototype.iosDownloadAddressIN = 'https://hirectin.onelink.me/7kA1/8788c66f'
    Vue.prototype.androidDownloadAddressIN = 'https://hirectin.onelink.me/TwhD/b0fe8b20'
    Vue.prototype.androidPkgAddressIN = 'https://prod-apk-package.s3.ap-south-1.amazonaws.com/app-official-release.apk'
    Vue.prototype.ipinfoToken = '5c1413496c28af'
    Vue.prototype.followUsTwitterIN = 'https://twitter.com/hirect_india'
    Vue.prototype.followUsLinkedinIN = 'https://in.linkedin.com/company/glitzstar'
    Vue.prototype.followUsFacebookIN = 'https://www.facebook.com/hirectindia/'
    Vue.prototype.followUsYoutubeIN = 'https://www.youtube.com/channel/UC98TU-jrNVOJCWC-FhnaPWQ'
    Vue.prototype.followUsInstagramIN = 'https://www.instagram.com/hirect_india/'
  }
}
// Vue.use(VueAnalytics, {
//   id: 'UA-145309456-3',
//   debug: {
//     enabled: true
//   }
// })
Vue.use(commonVariable)