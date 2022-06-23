<template>
<div class="wrapper">
    <Header />
    <section class="about-section">
        <div class="about-details">
            <div class="container">
                <div class="row">
                    <div class="col-md-7">
                        <div class="about-content">
                            <h3 class="title-md">About Us</h3>
                            <p>
                                Hirect, India's first job platform, connects startup founders,
                                business owners, recruiters, and HR heads directly to job
                                seekers and candidates. Hirect's intelligent AI-matching
                                algorithms, inbuilt chat, and verification features make it
                                possible to schedule interviews within the app. It connects
                                candidates with decision-makers quickly.
                            </p>
                            <p>
                                Hirect is a chat-based, direct hiring platform designed for
                                high-growth startups to meet their hiring needs without
                                consultants and with 100% data privacy.
                            </p>
                            <p>
                                Raj Das is the co-founder and CEO of Hirect and leads a team
                                of 500+ professionals committed to enabling SMEs to hire
                                talent in just one day. Hirect is a solution specifically
                                designed for startups, allowing decision-makers (CEO, HR, TL)
                                to communicate directly with potential candidates.
                            </p>
                            <div class="section-notes">
                                <h3 class="title-md">Hire the Right Talent (For Startups)</h3>
                                <p>
                                    In the current Indian startup ecosystem of instant hiring,
                                    <br />conventional hiring has almost become obsolete. Hirect
                                    is <br />now known for its fast hiring process - 10X faster.
                                </p>
                                <NuxtLink class="btn default-btn find-candidate-btn" to="/connect">
                                    Find Your Candidates
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-5">
                        <div class="about-image">
                            <img src="~/assets/img/about-img.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="get-hired-section">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="get-hired-img">
                            <img src="~/assets/img/get-hired-img.svg" alt="" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="get-hired-content">
                            <h3 class="title-md">
                                Get Hired For The Right <br />Job (For Job Seekers)
                            </h3>
                            <p>
                                Job seekers
                                <span class="text-black">apply to jobs online</span> expecting
                                a more seamless process. However, since the traditional hiring
                                process has not evolved, as per the dynamics of the Indian
                                startup ecosystem, it has not been able to connect the
                                candidates directly with the startup founders.
                            </p>
                            <p>
                                Hirect has been customized as per the need of an hour, helping
                                the job seekers to connect directly with the Founders,
                                Business Owners, and the HRs, anytime and anywhere.
                            </p>
                            <p>
                                Hirect also eliminates the scope of recruitment consultants
                                in-between, enabling a direct connection between the candidate
                                and the startup founders, ensuring 100% data privacy.
                            </p>
                            <button type="button" class="btn default-btn button-sm" @click="showModal = true">
                                Connect Directly
                            </button>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12">
                        <div class="section-notes">
                            <h3 class="title-md">
                                Hirect Simplifies Hiring
                            </h3>
                            <p>
                                Hirect instantly connects the Hiring managers with a massive
                                and diversified database of skilled job seekers. This best job
                                app disrupts the status quo of traditional hiring and
                                facilitates direct hiring anytime, anywhere.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="meet-team-section">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1>Meet The Team</h1>
                    <div class="meet-team-list">
                        <ul>
                            <li>
                                <div class="meet-team-card">
                                    <div class="team-details">
                                        <div class="team-img">
                                            <img src="~/assets/img/raj-das-Global-Co-Founder-CEO-of-Hirect-India.png" alt="" />
                                        </div>
                                        <div class="team-info">
                                            <h5>Raj Das</h5>
                                            <h6>Global Co-Founder and <br />CEO of Hirect India</h6>
                                        </div>
                                    </div>
                                    <p>
                                        Raj Das is the Global Co-Founder & CEO of Hirect India,
                                        which connects talents to startups without any middleman.
                                        At the company’s helm, Raj is responsible for overseeing
                                        end-to-end business operations, primarily the management
                                        of Product & Marketing in India. An IIT-Bombay alumnus,
                                        Raj brings a rich experience of 3-4 years in mobile
                                        internet space and has also mastered product management
                                        and user growth. Through Hirect, Raj strives to encourage
                                        youngsters to join startups and build wealth for the
                                        nation and themselves.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div class="meet-team-card">
                                    <div class="team-details">
                                        <div class="team-img">
                                            <img src="~/assets/img/abhishek.png" alt="" />
                                        </div>
                                        <div class="team-info">
                                            <h5>Abhishek Singh</h5>
                                            <h6>Senior Vice President - Marketing</h6>
                                        </div>
                                    </div>
                                    <p>
                                        Abhishek Singh is the Senior Vice President of Marketing
                                        at Hirect India. In addition to Digital, Creative, and
                                        Communication, he oversees the overall marketing strategy.
                                        He also handles brand positioning and advanced marketing
                                        innovation at Hirect. Mr. Singh has over 14 years of
                                        experience in the media and dot-com industries. As a
                                        marketing expert, he has built and scaled a few of India's
                                        best startups, including Via.com, CommonFloor.com, and
                                        Vakilsearch.com, among others. In addition to being a
                                        master of marketing automation, he is also a proficient
                                        growth hacker.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div class="meet-team-card">
                                    <div class="team-details">
                                        <div class="team-img">
                                            <img src="~/assets/img/ramani.png" alt="" />
                                        </div>
                                        <div class="team-info">
                                            <h5>Ramani Ganesh</h5>
                                            <h6>Senior Vice President - Human Resources</h6>
                                        </div>
                                    </div>
                                    <p>
                                        Ramani is responsible for directing the business strategy
                                        and human resources for Hirect. She has over fifteen years
                                        of HR experience in IT, import/export, and manufacturing.
                                        She holds a BBM from Bangalore University and MBA from IIM
                                        Calcutta and is certified by HRCI, USA, as a Global
                                        Professional HR (GPHR). Ramani is currently pursuing a
                                        Ph.D. in Human Resources and values continuous learning.
                                        She is also a voracious reader and traveler who believes
                                        that the environment and culture of an organization play
                                        an important role in employee motivation and productivity.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div class="meet-team-card">
                                    <div class="team-details">
                                        <div class="team-img">
                                            <img src="~/assets/img/shantanu-pandey.png" alt="" />
                                        </div>
                                        <div class="team-info">
                                            <h5>Shantanu Pandey</h5>
                                            <h6>
                                                Sr. Vice President - Business Development
                                            </h6>
                                        </div>
                                    </div>
                                    <p>
                                        Shantanu Pandey is the Senior Vice President, Business Development at Hirect. He is a B.
                                        Tech graduate from Delhi Technological University
                                        (formerly known as Delhi College of Engineering). He is
                                        one of the initial members of the team, and he is
                                        responsible for increasing B2B growth. Shantanu also heads
                                        the strategic alliances at Hirect. Shantanu has around 3
                                        years of work experience and has co-founded two other
                                        start-ups during his college days. He also loves to talk
                                        about the Indian start-up ecosystem. In addition, he is a
                                        devout feminist who believes in equal opportunity at work
                                        (and everywhere else).
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div class="meet-team-card">
                                    <div class="team-details">
                                        <div class="team-img">
                                            <img src="~/assets/img/abhishek-popli.png" alt="" />
                                        </div>
                                        <div class="team-info">
                                            <h5>Abhishek Popli</h5>
                                            <h6>
                                                Vice President - Business Development
                                            </h6>
                                        </div>
                                    </div>
                                    <p>
                                        The Vice President-Business Development at Hirect,
                                        Abhishek Popli, was one of the few early members in charge
                                        of Hirect's offline and online channels, as well as
                                        establishing Hirect's offline presence in PAN India. Mr.
                                        Popli has over 5 years of experience in leadership and
                                        business development positions and is an expert in
                                        increasing the user base by over 50 times in various
                                        HealthTech, EdTech organizations in and outside India
                                        during his stint. He likes to exploit the possibilities of
                                        exploring the untapped market for the growth and expansion
                                        of the organization.
                                    </p>
                                </div>
                            </li>

                            <li>
                                <div class="meet-team-card">
                                    <div class="team-details">
                                        <div class="team-img">
                                            <img src="~/assets/img/sanche-joao.png" alt="" />
                                        </div>
                                        <div class="team-info">
                                            <h5>Sanche Joao</h5>
                                            <h6>
                                                Vice President - Operations
                                            </h6>
                                        </div>
                                    </div>
                                    <p>
                                        Sanche Joao, the Vice President-Operations at Hirect
                                        India, is a tenacious leader with a track record of
                                        transforming cultures into disciplined,
                                        performance-oriented teams by instituting a strong sense
                                        of accountability and by driving measurable
                                        process-oriented changes. She has previously spent over 10
                                        years in Dubai working with corporates such as ITP Media
                                        Group where she led several key initiatives across
                                        Operations, Compliance, and Business Development. In her
                                        downtime, Sanche enjoys working on design initiatives. She
                                        is a foodie and is fascinated by micro-cuisines and
                                        exploring travel through food.
                                    </p>
                                </div>
                            </li>

                            <li>
                                <div class="meet-team-card">
                                    <div class="team-details">
                                        <div class="team-img">
                                            <img src="~/assets/img/rajeev-ranjan.png" alt="" />
                                        </div>
                                        <div class="team-info">
                                            <h5>Rajeev Ranjan</h5>
                                            <h6>
                                                Associate Vice President - Digital Marketing
                                            </h6>
                                        </div>
                                    </div>
                                    <p>
                                        Rajeev comes with a robust, 13 years of proven track
                                        record in Digital Marketing and Search Marketing with
                                        expertise in End-to-End performance marketing solutions to
                                        drive business growth. When it comes to Online marketing
                                        and analytics, Rajeev possesses strong skill sets in
                                        various verticals including, IT, Real Estate, Banking,
                                        FMCG, Healthcare, E-Commerce, and Education. Rajeev has
                                        also assisted global clientele - in EMEA, North America,
                                        and SEA regions, to build a robust digital presence.
                                    </p>
                                </div>
                            </li>

                            <li>
                                <div class="meet-team-card">
                                    <div class="team-details">
                                        <div class="team-img">
                                            <img src="~/assets/img/manoj-golani.png" alt="" />
                                        </div>
                                        <div class="team-info">
                                            <h5>Manoj Goplani</h5>
                                            <h6>
                                                Associate Vice President - Design
                                            </h6>
                                        </div>
                                    </div>
                                    <p>
                                        Manoj possesses more than 14 years of robust experience as
                                        a design professional with skillsets in Design -
                                        Advertising, UI/UX Design Solutions, and Product
                                        Development. Manoj has crafted and led corporate
                                        strategies for achieving the top-level goal. He comes with
                                        strong experience in working with business leaders and
                                        clientele from various geographies including EMEA, North
                                        America, and the Middle East across various verticals -
                                        FMCG, E-Commerce, Telecom, Interior Design Space,
                                        Healthcare, and Pharmaceuticals along with Life Sciences
                                        for the brand visibility and enhancing the brand presence
                                        along with product development and operations.
                                    </p>
                                </div>
                            </li>

                            <li>
                                <div class="meet-team-card">
                                    <div class="team-details">
                                        <div class="team-img">
                                            <img src="~/assets/img/vishal-gupta.png" alt="" />
                                        </div>
                                        <div class="team-info">
                                            <h5>Vishal Gupta</h5>
                                            <h6>AVP-Product Management & Business Intelligence</h6>
                                        </div>
                                    </div>
                                    <p>Vishal is currently working as the AVP- Product Management & Business Intelligence at Hirect. He is a Great Lakes Alumni and has 7 years of proven track record in Digital Marketing and Growth Hacking. Vishal has a strong background in data-driven marketing and decision making in diverse industries such as IT, Banking, E-Commerce, FoodTech, and Ed-Tech. With his interest and ability in solving real-world problems, he always likes to scout out for new challenges.</p>
                                </div>
                            </li>

                            <li>
                                <div class="meet-team-card">
                                    <div class="team-details">
                                        <div class="team-img">
                                            <img src="~/assets/img/akanksha-tyagi.png" alt="" />
                                        </div>
                                        <div class="team-info">
                                            <h5>Akanksha Tyagi</h5>
                                            <h6>Manager-Influencer Marketing</h6>
                                        </div>
                                    </div>
                                    <p>Akanksha Tyagi is currently leading the Influencer Marketing Campaigns at Hirect. She is one of the initial members of the team. She has extensive expertise in Content Creation and Marketing, thus facilitating Business Growth, Customer Acquisition and Retention. She has worked with 2000+ Influencers, bringing in 50M+ reach monthly. She has previously worked as a Digital Marketing Intern with Trell and as a Marketing Intern with Huawei Technologies India before joining Hirect.</p>
                                </div>
                            </li>

                            <li>
                                <div class="meet-team-card">
                                    <div class="team-details">
                                        <div class="team-img">
                                            <img src="~/assets/img/img_simran.png" alt="" />
                                        </div>
                                        <div class="team-info">
                                            <h5>Simran Saswani</h5>
                                            <h6>Manager- Business Development</h6>
                                        </div>
                                    </div>
                                    <p>Simran Saswani is currently the Manager-Business Development Department at Hirect. She is one of the initial members of the team. She has 4 years of work experience in the Leadership & Mentor profile. After joining Hirect as a Business Development Intern in 2020, she progressed to become a Business Development Executive and an Assistant Manager, and finally to her current position as the Manager. She is also skilled in communication, public speaking, teaching, Customer Relationship Management (CRM), Growth Strategies, Team Building and Management. A fashion designer by passion, Simran also loves to travel and explore new adventures.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!----scan-app start----------->
    <GetAppPage :eventName="'in_aboutus_bottom'" />
    <!----scan-app end----------->
    <Footer />
    <DownloadModal v-show="showModal" @close-modal="showModal = false" />
</div>
</template>

<script>
import DownloadModal from "~/components/DownloadModal.vue";
export default {
    components: {
        DownloadModal
    },
    head() {
        return {
            title: "About Us - Hirect ",
            meta: [{
                hid: "description",
                name: "description",
                content: "Hirect is India's best job search app for start-up hiring. Hirect connects the jobseekers with start-up founders and enables easy and direct hiring. "
            }]
        };
    },
    data() {
        return {
            showModal: false
        };
    },

    jsonld() {
        return {
            "@context": "https://schema.org",
            "@type": "WebSite",
            url: "https://www.hirect.in/aboutus",
            potentialAction: {
                "@type": "SearchAction",
                target: "https://www.hirect.in/aboutus/srp/results?query={search_term_string}",
                "query-input": "required name=search_term_string"
            },

            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [{
                "@type": "ListItem",
                position: "1",
                name: "About us",
                item: "https://www.hirect.in/aboutus/"
            }]
        };
    }
};
</script>

<style lang="scss" scoped>
/******* About Page ************/

.about-section {
    padding: 70px 0;
}

.about-section p {
    color: #808080;
    font-size: 18px;
    font-weight: normal;
    line-height: 24px;
    margin-bottom: 15px;
}

.about-content p {
    color: #808080;
    width: 85%;
}

.find-candidate-btn {
    width: 224px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.about-image {
    padding-top: 70px;
}

.about-content .btn {
    margin-top: 20px;
}

.about-details {
    margin-bottom: 25px;
}

.get-hired-section .row {
    align-items: center;
}

.get-hired-content .btn {
    // margin-top: 35px;
    margin-bottom: 15px;
}

.section-notes {
    padding-top: 85px;
    padding-right: 25px;
}

.section-notes p {
    color: #808080;
}

// Meet Team
section.meet-team-section {
    padding: 20px 0;
}

.meet-team-list ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: space-between;
}

.meet-team-list ul li {
    width: 45.5%;
    margin: 30px 0;
    margin-right: 9%;
}

.meet-team-list ul li:nth-child(2n) {
    margin-right: 0;
}

.meet-team-card {
    height: 460px;
    border-radius: 10px;
    background-color: rgba(44, 226, 162, 0.05);
    padding: 25px 30px;
}

.team-details {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}

.team-img img {
    width: 137px;
    height: 137px;
    border-radius: 50%;
}

.team-info h5 {
    color: #333333;
    font-size: 30px;
    font-weight: bold;
    line-height: normal;
    text-align: left;
    margin-bottom: 10px;
}

.team-info h6 {
    color: #0e101a;
    font-size: 16px;
    font-weight: normal;
    line-height: 24px;
    text-align: left;
    margin: 0;
}

.meet-team-card p {
    color: #808080;
    font-size: 16px;
    font-weight: normal;
    line-height: 23px;
    text-align: left;
}

.team-info {
    width: calc(100% - 137px);
    padding-left: 30px;
}

// end Meet Team

/******* end About Page ************/

@media only screen and (min-width: 768px) and (max-width: 1299px) {
    .meet-team-list ul li {
        width: 47.5%;
        margin: 20px 0;
        margin-right: 5%;
    }

    .meet-team-list {
        padding: 20px 0;
    }

    .meet-team-card {
        padding: 25px 30px;
    }

    .team-info h5 {
        font-size: 26px;
    }

    .team-details {
        margin-bottom: 20px;
    }
}

@media only screen and (min-width: 768px) and (max-width: 1199px) {
    .about-content p {
        width: 90%;
    }

    .about-section p {
        font-size: 16px;
        line-height: 24px;
        margin-bottom: 15px;
    }

    .section-notes {
        padding-top: 50px;
        padding-right: 0px;
    }

    .meet-team-list ul li {
        width: 48%;
        margin: 20px 0;
        margin-right: 4%;
    }

    .team-info h5 {
        font-size: 23px;
    }

    .team-info {
        width: calc(100% - 115px);
        padding-left: 25px;
    }

    .team-img img {
        width: 115px;
        height: 115px;
    }

    .meet-team-card {
        height: 485px;
    }

    .about-section {
        padding: 60px 0 50px;
    }
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
    .about-section p br {
        display: none;
    }

    .about-content p {
        width: 95%;
    }

    .about-section p {
        font-size: 15px;
        line-height: 22px;
    }

    .section-notes {
        padding-top: 40px;
        padding-right: 0px;
    }

    .about-content .btn {
        margin-top: 15px;
    }

    .meet-team-card {
        padding: 25px 15px;
        height: 490px;
    }

    .team-img img {
        width: 100px;
        height: 100px;
    }

    .team-info {
        width: calc(100% - 100px);
        padding-left: 15px;
    }

    .team-info h6 {
        font-size: 15px;
        line-height: 20px;
    }

    .team-info h5 {
        font-size: 20px;
    }

    .meet-team-list ul li {
        width: 49%;
        margin: 20px 0;
        margin-right: 2%;
    }

    .meet-team-card p {
        font-size: 15px;
        line-height: 22px;
    }

    .team-details {
        margin-bottom: 15px;
    }
}

@media only screen and (min-width: 300px) and (max-width: 767px) {
    .about-section {
        padding: 35px 0;
    }

    .about-details .row {
        flex-direction: column-reverse;
    }

    .about-image {
        padding: 0;
        padding-bottom: 40px;
    }

    .about-content {
        text-align: center;
    }

    .about-content p {
        width: 100%;
    }

    .about-section p {
        font-size: 16px;
    }

    .section-notes {
        padding-top: 40px;
        padding-right: 0;
        text-align: center;
    }

    .about-section p br {
        display: none;
    }

    .about-content .btn {
        margin-top: 10px;
    }

    .about-details {
        margin-bottom: 35px;
    }

    .get-hired-img {
        margin-bottom: 30px;
    }

    .get-hired-content {
        text-align: center;
    }

    .get-hired-content .btn {
        margin: auto;
    }

    .meet-team-list ul li {
        width: 100%;
        margin-right: 0;
        margin: 20px 0;
    }

    .meet-team-card {
        height: auto;
        padding: 25px 15px;
    }

    .team-img img {
        width: 100px;
        height: 100px;
        margin: auto;
    }

    .team-img {
        text-align: center;
    }

    .team-details {
        flex-direction: column;
        margin-bottom: 20px;
    }

    .team-info {
        width: 100%;
        padding: 0;
        text-align: center;
        margin-top: 20px;
    }

    .team-info h5 {
        font-size: 22px;
        text-align: center;
    }

    .team-info h6 {
        text-align: center;
        font-size: 15px;
        line-height: 20px;
    }

    .meet-team-card p {
        font-size: 15px;
        line-height: 20px;
        text-align: center;
    }

    section.meet-team-section {
        padding: 20px 0 40px;
    }

    section.meet-team-section {
        text-align: center;
    }

    .find-candidate-btn {
        margin: auto;
    }
}
</style>
