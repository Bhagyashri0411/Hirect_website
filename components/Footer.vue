<template>
<div class="footer">
    <div class="container">
        <div class="row">
            <div class="col-md-5">
                <div class="footer-box">
                    <div class="footer-logo">
                        <NuxtLink to="/homepage"><img src="~/assets/img/hirect-logo-footer.png" alt="" />
                        </NuxtLink>
                        <p>
                            Hire Instantly for Your Startup. <br />Trusted by 2.3M+ verified Jobseekers & <br>verified 120K+ Startups!
                        </p>
                    </div>
                    <div class="footer-whatsapp">
                        <img src="~/assets/img/whatsapp-icon.svg" alt="" /><a href="https://api.whatsapp.com/send?phone=+918446164920">+918446164920</a>
                    </div>
                    <ul class="footer-social-link">
                        <li>
                            <a href="https://twitter.com/HirectIndia" target="_blank">
                                <font-awesome-icon :icon="['fab', 'twitter']" /></a>
                        </li>
                        <li>
                            <a href="https://in.linkedin.com/company/hirectapp" target="_blank">
                                <font-awesome-icon :icon="['fab', 'linkedin']" /></a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/hirectindia/" target="_blank">
                                <font-awesome-icon :icon="['fab', 'facebook-f']" /></a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/channel/UC98TU-jrNVOJCWC-FhnaPWQ" target="_blank">
                                <font-awesome-icon :icon="['fab', 'youtube']" /></a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/hirect_india/" target="_blank">
                                <font-awesome-icon :icon="['fab', 'instagram']" /></a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-md-7">
                <div class="row">
                    <div class="col-md-4">
                        <div class="footer-link">
                            <h4>Hirect</h4>
                            <ul>
                                <li>
                                    <NuxtLink to="/">Home</NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/aboutus">About Us</NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/features-in">Features</NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/connect">Recruiters</NuxtLink>
                                </li>
                                <li><a href="https://www.hirect.in/blog/">Blog</a></li>
                                <li>
                                    <NuxtLink to="/job-seeker">Job Seekers</NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/startup-hiring">For Startup Hiring</NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/contact-us">Contact us</NuxtLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="footer-link">
                            <h4>Support</h4>
                            <ul>
                                <li>
                                    <a href="mailto:support@hirect.in">Support@hirect.in</a>
                                </li>
                                <li>
                                    <a @click="ScheduleACall">For Recruiters<br />
                                        Schedule a Call</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="footer-link">
                            <h4>Legal</h4>
                            <ul>
                                <li>
                                    <NuxtLink to="/privacypolicy">Privacy Policy</NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/termsconditions">Terms & Conditions</NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/product-pricing">Product & Pricing</NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/refund-cancellation-policy">Refund Policy</NuxtLink>
                                </li>
                                <!-- <li>
                                    <NuxtLink to="/purchase-flow">Purchase Flow</NuxtLink>
                                </li> -->
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="copy-right-footer">
            <div class="row">
                <div class="col-md-6 copy-right-text">
                    <h3>© Elephantjob Private Limited. All Rights Reserved.</h3>
                </div>
                <div class="col-md-6">
                    <!-- <div class="change-flage">
              <a href="https://hirect.us/">
                <img src="~/assets/img/country-flag.svg" alt="" />
                <h6>Change Region</h6>
              </a>
            </div> -->
                    <div class="change-flage">
                        <div class="dropdown">
                            <a class="dropbtn">
                                <img src="~/assets/img/country-flag.svg" alt="" />
                                <h6>Change Region</h6>
                            </a>
                            <div class="dropdown-content">
                                <a class="dropbtn" href="https://hirect.us?changeregion=1">
                                    <img src="~/assets/img/us-logo.png" alt="" />
                                    <h6>United States</h6>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <el-dialog :visible.sync="ScheduleCallVisible" class="schedule-dialog">
        <ScheduleACall />
    </el-dialog>
</div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            showModal: false,
            ScheduleCallVisible: false
        };
    },
    methods: {
        // Schedule A Call
        ScheduleACall() {
            this.ScheduleCallVisible = true;
        }
    }
};
</script>

<style lang="scss" scoped>
.footer {
    background-color: #333333;
    padding-top: 80px;
    padding-bottom: 40px;
}

.footer-logo p {
    color: #ffffff;
    font-family: Helvetica;
    font-size: 16px;
    font-weight: 400;
    font-style: normal;
    letter-spacing: normal;
    line-height: 24px;
    margin-top: 32px;
    margin-bottom: 70px;
}

.footer-whatsapp a {
    color: #ffffff;
    font-family: Helvetica;
    font-size: 18px;
    font-weight: 400;
    font-style: normal;
    letter-spacing: normal;
    line-height: 24px;
    padding-left: 30px;
    text-decoration: none;
}
.footer-social-link li a svg {
    display: var(--fa-display, inline-block);
    height: 1em;
    overflow: visible;
    vertical-align: -0.125em;
}
.footer-social-link {
    padding: 0;
    margin: 0;
    list-style: none;
    margin-top: 45px;
    display: flex;
}

.footer-social-link li a {
    font-size: 22px;
    padding: 2px 5px;
    margin-right: 25px;
    color: #fff;
    transition: all 0.3s;
}

.footer-social-link li a:hover {
    color: #0d6efd;
    transition: all 0.3s;
}

.footer-link h4 {
    color: #ffffff;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 40px;
}

.footer-link ul {
    padding: 0;
    margin: 0;
    list-style: none;
}

.footer-link ul li a {
    color: #ffffff !important;
    font-size: 16px;
    font-weight: normal;
    line-height: 24px;
    margin-bottom: 15px;
    display: inline-block;
    text-decoration: none;
    cursor: pointer;
}

.copy-right-footer {
    margin-top: 90px;
}

.copy-right-footer .row {
    align-items: center;
}

.copy-right-text {
    padding-top: 15px;
}

.copy-right-footer h3 {
    color: #ffffff;
    font-size: 18px;
    font-weight: normal;
    line-height: 24px;
    margin: 0;
}

.change-flage a {
    display: inline-flex;
    align-items: center;
    justify-content: flex-end;
    text-decoration: none;
    position: relative;
    padding-top: 15px;
    cursor: pointer;
}

.change-flage h6 {
    color: #ffffff;
    font-size: 16px;
    font-weight: normal;
    line-height: 24px;
    margin: 0;
    padding-left: 12px;
}

.footer-logo img {
    width: 172px;
}

.change-flage {
    text-align: right;
}

.change-flage .dropdown {
    display: inline-flex;
    align-items: center;
    justify-content: flex-end;
}

.change-flage .dropdown-content {
    display: none;
    position: absolute;
    z-index: 1;
    top: -38px;
    right: -10px;
}

.change-flage .dropdown:hover .dropdown-content {
    display: block;
}

.change-flage .dropdown-content a {
    padding: 6px 10px;
    min-width: 155px;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    box-shadow: 0px 4px 14px #d5d5d512;
}

.change-flage .dropdown-content a h6 {
    font-size: 14px;
    padding-left: 8px;
    line-height: normal;
}

.change-flage .dropdown-content a img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
}

@media only screen and (min-width: 768px) and (max-width: 1299px) {
    .footer {
        padding-top: 60px;
        padding-bottom: 30px;
    }

    .copy-right-footer {
        margin-top: 70px;
    }
}

@media only screen and (min-width: 768px) and (max-width: 1199px) {
    .footer-link h4 {
        font-size: 20px;
        margin-bottom: 25px;
    }

    .footer-logo p {
        font-size: 15px;
        margin-top: 20px;
        margin-bottom: 40px;
    }

    .footer-social-link {
        margin-top: 35px;
    }

    .footer-link ul li a {
        font-size: 15px;
        margin-bottom: 12px;
        line-height: 22px;
    }

    .footer-whatsapp a {
        font-size: 16px;
        line-height: 22px;
        padding-left: 15px;
    }

    .footer-social-link li a {
        font-size: 20px;
        padding: 2px 5px;
        margin-right: 15px;
        line-height: normal;
    }

    .copy-right-footer {
        margin-top: 50px;
    }

    .copy-right-footer h3 {
        font-size: 16px;
        line-height: 22px;
    }

    .change-flage h6 {
        font-size: 15px;
        line-height: 22px;
        padding-left: 10px;
    }
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
    .footer-link ul li a {
        font-size: 13px;
        margin-bottom: 13px;
        line-height: 18px;
    }

    .footer-logo p {
        font-size: 14px;
        margin-top: 17px;
        margin-bottom: 30px;
        line-height: 22px;
    }

    .footer-whatsapp a {
        font-size: 14px;
        line-height: 20px;
        padding-left: 11px;
    }

    .footer-social-link {
        margin-top: 28px;
    }

    .footer-social-link li a {
        font-size: 19px;
        padding: 1px 5px;
        margin-right: 10px;
    }

    .copy-right-footer {
        margin-top: 45px;
    }

    .copy-right-footer h3 {
        font-size: 15px;
        line-height: 20px;
    }

    .change-flage h6 {
        font-size: 14px;
        line-height: 20px;
        padding-left: 9px;
    }

    .footer {
        padding-top: 50px;
        padding-bottom: 25px;
    }
}

@media only screen and (min-width: 300px) and (max-width: 767px) {
    .footer {
        padding-top: 50px;
        padding-bottom: 25px;
    }

    .footer-logo {
        text-align: center;
    }

    .footer-logo p {
        font-size: 15px;
        line-height: 23px;
        margin-top: 20px;
        margin-bottom: 30px;
    }

    .footer-whatsapp {
        text-align: center;
    }

    .footer-whatsapp img {
        width: 26px;
    }

    .footer-whatsapp a {
        font-size: 16px;
        line-height: 22px;
        padding-left: 12px;
    }

    .footer-social-link {
        margin-top: 25px;
        align-items: center;
        justify-content: center;
    }

    .footer-social-link li a {
        font-size: 21px;
        padding: 1px 5px;
        margin-right: 13px;
        line-height: normal;
    }

    .footer-social-link li:last-child a {
        margin-right: 0;
    }

    .footer-box {
        margin-bottom: 30px;
        text-align: center;
    }

    .footer-link {
        margin-bottom: 20px;
        text-align: center;
    }

    .footer-link h4 {
        font-size: 22px;
        margin-bottom: 15px;
    }

    .footer-link ul li a {
        font-size: 16px;
        line-height: 18px;
        margin-bottom: 0;
        padding: 4px 0;
    }

    .footer-link ul li {
        margin-bottom: 4px;
    }

    .copy-right-footer {
        margin-top: 15px;
    }

    .copy-right-footer h3 {
        text-align: center;
        font-size: 15px;
        font-weight: normal;
        line-height: 21px;
        margin: 0;
        margin-bottom: 16px;
    }

    .change-flage {
        justify-content: center;
    }

    .change-flage h6 {
        font-size: 15px;
        line-height: 21px;
        padding-left: 8px;
    }

    .change-flage {
        text-align: center;
        margin-top: 10px;
    }

    .change-flage a {
        padding-top: 13px;
    }

    .change-flage .dropdown-content a {
        justify-content: center;
    }

    .change-flage .dropdown-content {
        top: -21px;
        right: 0;
    }

    .change-flage .dropdown-content a img {
        width: 20px;
        height: 20px;
    }
}
</style>
