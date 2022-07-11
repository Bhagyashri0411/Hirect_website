<template>
<remote-js :src="jsUrl" @load-js-finish="jsLoadCallBack" />
</template>

<script>
export default {
  components: {
    'remote-js': {
      render(createElement) {
        const self = this;
        return createElement('script', {
          attrs: {
            type: 'text/javascript',
            src: this.src,
          },
          on: {
            load() {
              // console.log('remote.vue ===> load js')
              self.$emit('load-js-finish');
            },
          },
        });
      },
      props: {
        src: {
          type: String,
          required: true,
        },
      },
    },
  },
  props: {
    jsUrl: {
      type: String,
      required: true,
    },
    jsLoadCallBack: Function,
  },
};
</script>
