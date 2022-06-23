<template>
<div>
    <div id="back-top-target" />
    <div class="startup-hiring">
        <div class="startup-hiring-top">
            <img src="~/assets/img/logo_hirect_white.png" alt="hirect-logo" class="logo" @click="logoClickHandle" />
            <el-button type="primary" class="startup-hiring-top-button" @click="downloadClick">Download App</el-button>
        </div>
        <div class="startup-hiring-inner">
            <div class="startup-hiring-inner-left">
                <h1 class="startup-hiring-inner-left-title">
                    Hirect - Direct Hiring<br />for
                    <span style="color:#29E19E;">Startups</span>
                </h1>
                <p class="startup-hiring-inner-left-text">
                    Specially designed for Startup Leaders to hire talents directly.
                </p>
                <p class="startup-hiring-inner-left-text">
                    All Candidates at Hirect want to work in Startups only.
                </p>
                <p class="startup-hiring-inner-left-text">
                    Post a job and Chat Directly with the matching candidates.
                </p>
                <p class="startup-hiring-inner-left-text">
                    No Spam, No Waiting, No Cost, No Middle Man.
                </p>
                <img class="startup-hiring-inner-left-img" src="~/assets/img/start-hiring.png" alt="start-hiring" />
            </div>
            <ScheduleACallStartupHiring />
        </div>
        <center>
            <h2 class="startup-hiring-categories-title">
                Get candidates in 50+ categories
            </h2>
            <div class="startup-hiring-categories-container">
                <div class="startup-hiring-categories-item" v-for="(item, index) in categories">
                    {{ item }}
                </div>
            </div>
        </center>
    </div>
    <div class="startup-hiring-bottom">
        <div class="startup-hiring-bottom-inner">
            <p class="startup-hiring-bottom-text">
                ©Elephantjob Private Limited. All Rights Reserved.
            </p>
        </div>
    </div>
    <el-dialog :visible.sync="downloadDialogVisible" width="920px">
        <GetHirectApp />
    </el-dialog>
</div>
</template>

<script>
export default {
    name: "startup-hiring",
    components: {},
    head() {
        return {
            title: "Startup Hiring App | Post a job and Chat Directly with Candidates",
            meta: [{
                hid: "description",
                name: "description",
                content: "Hirect, the hiring app designed for start-ups hiring, enables Employers to post jobs for free online. Connect with the candidates and chat directly."
            }]
        };
    },
    data() {
        return {
            currentPageName: "startup-hiring",
            downloadDialogVisible: false,
            categories: [
                "Back-end Developers",
                "Mobile App Developers",
                "Web Developers",
                "DevOps Engineer",
                "Data Engineer",
                "Full Stack Engineer",
                "Marketing",
                "Business Development",
                "Human Resource",
                "Design",
                "Product Management",
                "Sales"
            ]
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
        },
        // logo click
        logoClickHandle() {
            this.$router.push({
                path: "/",
                query: JSON.parse(window.localStorage.getItem("submitUrlSearch"))
            });
            this.smoothToTopHandle();
        },
        // show download dialog
        downloadClick() {
            this.downloadDialogVisible = true;
            this.$sendToEsData('webQrcodeViewed', {
                'region_id': 0,
                'position': 'in_startup_hiring_downloadapp_popup'
            })
        }
    },
    jsonld() {
        return {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [{
                "@type": "ListItem",
                position: "1",
                name: "Startup Hiring",
                item: "https://www.hirect.in/startup-hiring"
            }]
        };
    }
};
</script>

<style lang="scss" scoped>


body {
    overflow-x: hidden;
}

/deep/ .el-dialog {
    border-radius: 30px;
}

.startup-hiring {
    margin: 0 auto;
    width: 1440px;
    background-image: url(~/assets/img/banner_bg.png);
    background-repeat: no-repeat;
}

.startup-hiring-top {
    margin: 0 auto;
    width: 1200px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo {
        width: 150px;
        height: 40px;
        cursor: pointer;
    }

    .startup-hiring-top-button {
        font-size: 16px;
        font-weight: 800;
        color: #0e101a;
        width: 163px;
        background: #29e19e;
        border-radius: 20px;
    }
}

.startup-hiring-inner {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    .startup-hiring-inner-left {
        .startup-hiring-inner-left-title {
            font-size: 48px;
            font-weight: 800;
            color: #ffffff;
            line-height: 58px;
            padding-top: 73px;
            padding-bottom: 17px;
        }

        .startup-hiring-inner-left-text {
            font-size: 16px;
            font-weight: lighter;
            color: #ffffff;
            line-height: 19px;
            margin: 10px 0px;
        }

        .startup-hiring-inner-left-img {
            width: 500px;
            height: 459px;
            margin-top: 30px;
        }
    }
}

.startup-hiring-bottom {
    width: 100%;
    height: 60px;
    background-color: #000000;

    .startup-hiring-bottom-inner {
        margin: 0 auto;
        height: 60px;
        width: 1300px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .startup-hiring-bottom-text {
            font-size: 18px;
            font-weight: 400;
            color: #ffffff;
        }
    }
}

.startup-hiring-categories-title {
    font-size: 48px;
    font-weight: bold;
    color: #0e101a;
    line-height: 58px;
    margin: 98px 0px 48px 0px;
}

.startup-hiring-categories-container {
    width: 1200px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 144px;

    .startup-hiring-categories-item {
        padding: 8px 16px;
        background: #ffffff;
        border-radius: 30px;
        border: 1px solid #b4b4b4;
        font-size: 20px;
        font-weight: bold;
        color: #808080;
        margin: 12px 11px;
        white-space: nowrap;
    }
}


@media only screen and (max-width : 768px){
    /deep/ .el-dialog {
    border-radius: 30px;
}

.startup-hiring {
    margin: 0 auto;
    width: 100%;
    background-image: url(~/assets/img/banner_bg.png);
    background-repeat: no-repeat;
}


.startup-hiring-top {
    margin: 0 auto;
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo {
        width: 150px;
        height: 40px;
        cursor: pointer;
    }

    .startup-hiring-top-button {
        font-size: 16px;
        font-weight: 800;
        color: #0e101a;
        width: 163px;
        background: #29e19e;
        border-radius: 20px;
    }
}

.startup-hiring-inner {
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    .startup-hiring-inner-left {
        display : none;
        box-sizing: content-box;
        .startup-hiring-inner-left-title {
            font-size: 48px;
            font-weight: 800;
            color: #ffffff;
            line-height: 58px;
            padding-top: 73px;
            padding-bottom: 17px;
        }

        .startup-hiring-inner-left-text {
            font-size: 16px;
            font-weight: lighter;
            color: #ffffff;
            line-height: 19px;
            margin: 10px 0px;
        }

        .startup-hiring-inner-left-img {
            width: 500px;
            height: 459px;
            margin-top: 30px;
        }
    }
}

.startup-hiring-bottom {
    width: 100%;
    height: 60px;
    background-color: #000000;

    .startup-hiring-bottom-inner {
        margin: 0 auto;
        height: 60px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .startup-hiring-bottom-text {
            font-size: 18px;
            font-weight: 400;
            color: #ffffff;
        }
    }
}

.startup-hiring-categories-title {
    font-size: 48px;
    font-weight: bold;
    color: #0e101a;
    line-height: 58px;
    margin: 98px 0px 48px 0px;
}

.startup-hiring-categories-container {
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 40px;

    .startup-hiring-categories-item {
        padding: 8px 16px;
        background: #ffffff;
        border-radius: 30px;
        border: 1px solid #b4b4b4;
        font-size: 20px;
        font-weight: bold;
        color: #808080;
        margin: 12px 11px;
        white-space: nowrap;
    }
}
}

</style>
