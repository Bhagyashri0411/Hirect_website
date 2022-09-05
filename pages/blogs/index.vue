<template>
    <div class="wrapper">
        <Header />
        <Categories />
        <BlogCard />
        <BlogForm />
        <TrendingPosts />
        <Footer />
    </div>
</template>

<script>
export default {
    data() {
        return {
            BlogList: [
                {
                    imgUrl: 'blog-image1.jpg',
                    heading: 'Booming your Career in 2022',
                    description:
                        "Those days are long gone when there were just a",
                    date: '19-07-2022'
                },

                {
                    imgUrl: 'blog-image1.jpg',
                    heading: 'Booming your Career in 2022',
                    description:
                        "Those days are long gone when there were just a",
                    date: '19-07-2022'
                },
            ]
        }
    }
}
</script>

<style>
.main-head {
    margin-left: 10%;
    margin-top: 15%;
    font-weight: bold;
}
</style>