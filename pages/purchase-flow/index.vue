<template>
<div class="wrapper">
    <div id="back-top-target" />
    <Header @smoothToTop="smoothToTop" :current-page-name="currentPageName" />
    <div style="height:80px;" />
    <div class="privacy-policy-page">
        <p class="head-title">Purchase Flow</p>
        <p class="policy-item-desc">
            Job seekers are absolutely free of any charges. However, recruiters need
            to Pay Rs 199 for posting a job in the following functional areas in
            Bangalore. It's absolutely free of charges for other cities (except
            Bangalore) and functional areas.
        </p>
        <p class="policy-item-desc">1] Backend Development</p>
        <p class="policy-item-desc">2] Front-End Development</p>
        <p class="policy-item-desc">3] Mobile Development</p>
        <p class="policy-item-desc">4] Marketing</p>
        <p class="policy-item-desc">5] Sales Manager</p>
        <p class="policy-item-desc">
            Benefits: Your posted job will reach all candidates of the given
            functional areas, Job will be visible to candidates until you close it
            by yourself, Unlimited chats with candidates, and many more
        </p>
        <p class="policy-item-desc">Purchase Flow:</p>
        <p class="policy-item-desc">
            Case 1: Posting a job for above mentioned functional area in Bangalore
        </p>
        <p class="policy-item-desc">①Fill in Job Description</p>
        <p class="policy-item-desc">②Click to Post Job</p>
        <p class="policy-item-desc">③Continue to Pay</p>
        <p class="policy-item-desc">
            ④Pay through UPI, Wallet, Credit Card, Debit Card, Internet Banking
        </p>
        <p class="policy-item-desc">⑤Payment Successful</p>
        <p class="policy-item-desc">⑥Job Visible to Job Seekers</p>
        <p class="policy-item-desc">
            Note: If payment fails or doesn't complete for any reasons, users will
            be navigated back to the previous screen to enable completing the
            payment.
        </p>
        <p class="policy-item-desc">
            Case 2: Posting a job in a different city or functional area
        </p>
        <p class="policy-item-desc">
            In this case, you are free of any charges. Click to post the job and it
            will be visible to job seekers instantly.
        </p>
    </div>
    <div style="height:80px;" />
    <Footer />
</div>
</template>

<script>
export default {
    name: "purchase",
    components: {},
    head() {
        return {
            title: "Purchase Flow on Hirect App and Website",
            meta: [{
                hid: "description",
                name: "description",
                content: "Learn the Purchase Flow on Hirect app and website. We have explained here all the steps in detail about making a purchase on Hirect app. "
            }]
        };
    },
    data() {
        return {
            currentPageName: ""
        };
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {
        this.$localSaveSubmitUrl();
    },
    methods: {
        smoothToTop() {
            document
                .getElementById("back-top-target")
                .scrollIntoView({
                    block: "start",
                    behavior: "smooth"
                });
        }
    },

    jsonld() {
        return {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [{
                "@type": "ListItem",
                position: "1",
                name: "Purchase Flow",
                item: "https://www.hirect.in/purchase-flow"
            }]
        };
    }
};
</script>

<style lang="scss" scoped>
.privacy-policy-page {
    padding: 0 50px;
    width: 60%;
    min-width: 1000px;
    max-width: 1100px;
    margin: 0 auto;

    .privacy-policy-common-header {
        position: fixed;
        top: 0px;
        z-index: 999;
        left: 0;
        right: 0;
        margin: 0 auto;
    }

    .head-title {
        font-size: 31px;
        font-weight: 800;
        color: #0e101a;
        margin: 20px 0px;
        line-height: 40px;
    }

    .head-title-desc {
        font-size: 20px;
        font-weight: 400;
        color: #0e101a;
    }

    .policy-item-title {
        font-size: 30px;
        font-weight: bold;
        color: #0e101a;
        margin-top: 20px;
    }

    .policy-item-desc-A {
        font-size: 20px;
        font-weight: bold;
        color: #0e101a;
    }

    .policy-item-desc {
        font-size: 20px;
        font-weight: 400;
        color: #808080;
        margin-top: 20px;
    }
}

p {
    line-height: 140%;
}
</style>
