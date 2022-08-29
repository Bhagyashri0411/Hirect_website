<template>
<div class="wrapper">
    <Header />
    <section class="feature-section">
        <div class="container">
            <div class="feature-list one-1">
                <div class="row">
                    <div class="col-md-6">
                        <div class="feature-content feature-left-content">
                            <h3 class="title-md">
                                Instant Chat with the <br />Founders/ CEO’s and Get <br />
                                Hired Directly
                            </h3>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="feature-content-img">
                            <img src="~/assets/img/instant-chat-ceo1.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="feature-list">
                <div class="row">
                    <div class="col-md-6">
                        <div class="feature-content-img">
                            <img src="~/assets/img/feature-chat-directly1.png" alt="" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="feature-content feature-right-content">
                            <h3 class="title-md">
                                Chat Directly to Get <br />Quick Response
                            </h3>
                            <p>
                                Hirect enables recruiters and candidates to connect directly -
                                no emails and no waiting. As soon as a user (be it the hiring
                                manager or a job seeker) sends a message, they can see if it
                                was read by the other side and can receive a response
                                /feedback within a few hours.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="feature-list">
                <div class="row">
                    <div class="col-md-6">
                        <div class="feature-content">
                            <h3 class="title-md">
                                AI-Algorithm Matching <br />Candidate Recommendations
                            </h3>
                            <div class="feature-left-content">
                                <p>
                                    Hirect's Intelligent AI-powered algorithm matches the job
                                    profiles with the right candidates. When a job is posted,
                                    the hiring manager/CEO/Founders of Startups and SMEs will
                                    receive a list of only relevant candidates. This eliminates
                                    the exhaustive process of resume screening. Hiring the right
                                    team is now possible with just a click.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="feature-content-img">
                            <img src="~/assets/img/algo-matching1.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="feature-list">
                <div class="row">
                    <div class="col-md-6">
                        <div class="feature-content-img">
                            <img src="~/assets/img/Updatedvideocall.png" alt="" style="padding: 0px 14px; height: 691px; width: 360px;">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="feature-content feature-right-content">
                            <h3 class="title-md">100% Secure Video <br />Interviews</h3>
                            <p>
                                Hirect integrates voice and video calling into the app itself.
                                There is no need to switch platforms. Furthermore, this
                                ensures the security of the users, thus allowing 100%
                                integrity and data privacy during the hiring process.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="feature-list">
                <div class="row">
                    <div class="col-md-6">
                        <div class="feature-content feature-left-content">
                            <h3 class="title-md">Direct and Quick <br />Notifications</h3>
                            <p>
                                If the AI algorithm finds a matching candidate for a job
                                posted by a hiring manager/CEO/ Founder of a Startup or SME,
                                Hirect instantly notifies them. By doing so, Hirect ensures
                                that the startups do not miss out on any opportunities to grow
                                their employees.
                            </p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="feature-content-img">
                            <img src="~/assets/img/quick-notification2.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <GetAppPage :eventName="'in_features_bottom'" />
    <Footer />
</div>
</template>

<script>
export default {
    head() {
        return {
            title: "Hirect App Features | India's Best Online Recruitment Portal",
            meta: [{
                hid: "description",
                name: "description",
                content: "Hirect is the mobile-first best job search app available for both iOS and android platforms. Find here  the extensive features list of the Hirect app. "
            }]
        };
    },

    jsonld() {
        return {
            "@context ": " https: //schema.org ",
            "@type": "WebSite ",
            url: "https://www.hirect.in/features-in",
            potentialAction: {
                "@type": "SearchAction ",
                target: "https://www.hirect.in/features-in/srp/results?query={search_term_string}",
                "query-input": "required name = search_term_string "
            },

            "@context": "https: //schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [{
                "@type": "ListItem",
                position: "1",
                name: "Features",
                item: "https://www.hirect.in/features-in"
            }]
        };
    }
};
</script>

<style lang="scss" scoped>
/******* Features Page ************/

section.feature-section {
    padding: 90px 0;
}

.feature-list.one-1 .row {
    align-items: center;
}

.feature-list .row {
    align-items: center;
}

.feature-list.one-1 .feature-content.feature-left-content {
    padding: 0;
}

.feature-list {
    padding-bottom: 15px;
}

.feature-content-img {
    text-align: center;
}

// .feature-content {
//   padding-top: 60px;
// }

.feature-left-content {
    width: 100%;
    max-width: 440px;
}

.feature-right-content {
    width: 100%;
    max-width: 485px;
    margin-left: auto;
}

.feature-content .btn {
    margin-top: 40px;
}

.feature-content p {
    margin-bottom: 15px;
    color: #808080;
    font-size: 16px;
    font-weight: normal;
    line-height: 24px;
    text-align: left;
}

/******* end Features Page ************/

@media only screen and (min-width: 768px) and (max-width: 1299px) {
    section.feature-section {
        padding: 70px 0;
    }
}

@media only screen and (min-width: 768px) and (max-width: 1199px) {
    section.feature-section {
        padding: 70px 0;
    }

    .feature-list {
        padding-bottom: 15px;
    }

    section.feature-section {
        padding: 60px 0 40px;
    }
}

@media only screen and (min-width: 300px) and (max-width: 767px) {
    section.feature-section .feature-list:nth-child(odd) .row {
        flex-direction: column-reverse;
    }

    section.feature-section {
        padding: 60px 0 30px;
    }

    .feature-left-content {
        max-width: 100%;
    }

    .feature-content {
        padding-top: 40px !important;
        text-align: center;
    }

    .feature-list {
        padding-bottom: 15px;
    }

    .feature-content h3 br {
        display: none;
    }

    .feature-content .btn {
        margin: auto;
        margin-top: 30px;
        margin-bottom: 20px;
    }

    .feature-content p {
        text-align: center;
    }
}
</style>
