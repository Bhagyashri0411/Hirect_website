<template>
    <div>
        <Header />
        <div>
            <h1 v-if="error.statusCode === 404" style="color:black;">Error 404. Page not found</h1>
            <h1 v-else>An error occurred</h1>
            <NuxtLink to="/">Go back to Home page</NuxtLink>
        </div>
    </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'error', // you can set a custom layout for the error page
};
</script>
