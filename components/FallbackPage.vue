<template>
    <div class="fallback">
        <div v-if="isLoading"><LoadingBar /></div>
        <div v-else>
            <h1 class="heading1">No Results Found</h1>
            <h3>Please try again with another skillset and location selection.</h3>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    isLoading: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style>
.heading1 {
    margin-left: 32%;
    margin-top: 17%;
}
</style>
