<template>
    <div class="wrapper">
        <Header />
        <div class="search">
            <Search :page="'hire'" />
        </div>
        <section class="hire-chat-section">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h3 class="title-sm" style="margin-top:10%;">Trending Job Categories</h3>
                        <div class="jobs-list">
                            <ul class="available-list">
                                <li>
                                    <NuxtLink to="/hire/IT">
                                        <span><span>IT Engineering</span> <br /><br /><span class="candi-value">685K+
                                                Candidates</span></span>
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/hire/Operations">
                                        <span>Operations <br /><br /><span class="candi-value">490K+ Candidates
                                            </span></span>
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/hire/BPO & KPO">
                                        <span>BPO & KPO <br /><br /><span class="candi-value">360K+ Candidates
                                            </span></span>
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/hire/Sales & BD">
                                        <span>Sales & BD<br /><br />
                                            <span class="candi-value">350K+ Candidates </span></span>
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/hire/Finance">
                                        <span>Finance <br /><br /><span class="candi-value">320K+
                                                Candidates</span></span>
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/hire/Marketing">
                                        <span>Marketing<br /><br /><span class="candi-value">255K+
                                                Candidates</span></span>
                                    </NuxtLink>
                                </li>
                                <!-- <li>
                                    <NuxtLink to="/hire/Consulting">
                                        <span>Consulting <br /><br /><span class="candi-value">118K+ Candidates
                                            </span></span>
                                    </NuxtLink>
                                </li> -->
                                <li>
                                    <NuxtLink to="/hire/Education">
                                        <span>Education <br /><br /><span class="candi-value">307K+ Candidates
                                            </span></span>
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/hire/Personnel">
                                        <span>Personnel <br /><br /><span class="candi-value">375K+ Candidates
                                            </span></span>
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/hire/Blue Collar">
                                        <span>Blue Collar <br /><br /><span class="candi-value">93K+ Candidates
                                            </span></span>
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/hire/Design">
                                        <span>Design <br /><br /><span class="candi-value">222K+ Candidates
                                            </span></span>
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/hire/Manufacturing">
                                        <span>Manufacturing <br /><br /><span class="candi-value">337K+ Candidates
                                            </span></span>
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/hire/Real Estate">
                                        <span>Real Estate <br /><br /><span class="candi-value">149K+ Candidates
                                            </span></span>
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/hire/Media">
                                        <span>Media<br /><br /><span class="candi-value">166K+ Candidates
                                            </span></span>
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/hire/Service Industry">
                                        <span>Service Industry <br /><br /><span class="candi-value">124K+ Candidates
                                            </span></span>
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/hire/Agriculture">
                                        <span>Agriculture<br /><br /><span class="candi-value">2K+ Candidates
                                            </span></span>
                                    </NuxtLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="other-top-section">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h3 class="title-sm">Top Cities in India</h3>
                        <div class="jobs-list">
                            <ul class="available-list">
                                <li>
                                    <NuxtLink :to="`/hire/candidates?skills&location=Bangalore`" class="nuxtLink">
                                        <span><span>Bangalore</span> <br /><br /><span class="candi-value">600K+
                                                Candidates</span></span>
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink :to="`/hire/candidates?skills&location=Delhi`" class="nuxtLink">
                                        <span>Delhi-NCR<br /><br /><span class="candi-value">500K+ Candidates
                                            </span></span>
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink :to="`/hire/candidates?skills&location=Pune`" class="nuxtLink">
                                        <span>Pune<br /><br /><span class="candi-value">247K+ Candidates
                                            </span></span>
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink :to="`/hire/candidates?skills&location=Ahmedabad`" class="nuxtLink">
                                        <span>Ahmedabad <br /><br />
                                            <span class="candi-value">62K+ Candidates </span></span>
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink :to="`/hire/candidates?skills&location=Hyderabad`" class="nuxtLink">
                                        <span>Hyderabad <br /><br />
                                            <span class="candi-value">270K+ Candidates </span></span>
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink :to="`/hire/candidates?skills&location=Noida`" class="nuxtLink">
                                        <span>Noida <br /><br />
                                            <span class="candi-value">130K+ Candidates </span></span>
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink :to="`/hire/candidates?skills&location=Mumbai`" class="nuxtLink">
                                        <span>Mumbai <br /><br />
                                            <span class="candi-value">343K+ Candidates </span></span>
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink :to="`/hire/candidates?skills&location=Gurgaon`" class="nuxtLink">
                                        <span>Gurgaon <br /><br />
                                            <span class="candi-value">150K+ Candidates </span></span>
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink :to="`/hire/candidates?skills&location=Chennai`" class="nuxtLink">
                                        <span>Chennai <br /><br />
                                            <span class="candi-value">156K+ Candidates </span></span>
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink :to="`/hire/candidates?skills&location=Kolkata`" class="nuxtLink">
                                        <span>Kolkata<br /><br />
                                            <span class="candi-value">130K+ Candidates </span></span>
                                    </NuxtLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Footer />
    </div>
</template>


<style lang="scss" scoped>
.search {
    margin-top: 6%;
}

.infographs {
    text-align: -webkit-center;
    margin-bottom: 20px;
}

.headline {
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 5px !important;
}

.image-placeholder {
    width: 60px !important;
    height: 60px;
    border-radius: 50%;
    padding-top: 5%;
    background-color: #F2F4F8;
}

.media-card-section {
    background-color: #f2f4f8;

    .mediahead {
        text-align: center;
        margin: 10px 0;
        margin-bottom: 20px;
        font-weight: bold;
    }
}

.slick-icon {
    display: none;
    width: 20%;
    padding-bottom: 32px;
}

// direct - banner
.btn-app {
    margin-bottom: 12px;
    height: 43px;
    padding: 11px 30px;
    font-size: 16px;
    font-weight: 700;
    background-color: #2ce2a2;
    border-radius: 25px;
}

.hire-now-image {
    margin-top: 18%;
}

.get-app-img {
    margin-left: 30%;
}

.direct-banner {
    padding: 110px 0 20px 0;

    h1 {
        color: #0e101a;
        font-size: 60px;
        font-weight: bold;
        font-style: normal;
        letter-spacing: normal;
        line-height: normal;
        text-align: center;
        margin-bottom: 30px;
    }

    p {
        text-align: center;
        font-size: 18px;
        margin-bottom: 15px;
        color: rgba(14, 16, 26, 0.7);
    }

    .row {
        align-items: flex-end;
    }

    .start-hiring {
        background-color: rgb(44, 226, 162);
        height: 45px;
        border-radius: 50px;
        width: 150px;
    }

    .start-hiring-button {
        text-align: center;
        margin-top: 7%;
    }
}

// End direct - banner

// hirect mobile get app
.hire-chat-section {
    // padding-bottom: 100px;
    margin-top: -8%;

    .hire-chat {
        //   padding-bottom: 80px;
        height: 547px;
        background-color: #f4fafd;
    }

    .hire-chat .row {
        align-items: center;
    }

    .hire-now h2 {
        color: #0e101a;
        font-size: 64px;
        font-weight: bold;
        line-height: 66.8px;
        margin: 30px 0;
    }

    .hire-now {
        margin-top: 56px;
    }

    .hire-now p {
        color: #000000;
        font-size: 16px;
        font-weight: normal;
        line-height: 27px;
        margin-bottom: 30px;
    }

    .next-img {
        margin-left: -168px;
    }
}

// end

// Hirect Job
.hire-chat-section {
    h3.title-sm {
        color: #0e101a;
        font-size: 40px;
        font-weight: bold;
        line-height: normal;
        text-align: center;
        margin-bottom: 45px;
    }
}

.title-sm {
    color: #0e101a;
    font-size: 40px;
    font-weight: bold;
    line-height: normal;
    text-align: center;
    margin-bottom: 6%;
    margin-top: 5%;
}

//end

//Instant Hiring tap
.job-available-section {
    .hire-now h2 {
        color: #0e101a;
        font-size: 40px;
        font-weight: bold;
        margin: 30px 0;
    }

    .hire-now p {
        color: #0e101a;
        font-size: 16px;
        font-weight: normal;
        margin-bottom: 30px;
    }

    .hire-chat {
        background-color: #2ce2a2;
        padding-top: 25px;

        .hire-now {
            margin-top: 50px;
        }
    }
}

//end
.add-more {
    color: black;
    font-size: 24px;
    text-align: center;
    margin-top: -38px;
    font-weight: bold;
}

.view-btn {
    background-color: hsl(0, 0%, 100%) !important;
    border-color: #000 !important;
}

// city page
.Jobs-in-city {
    .jobs-list {
        startups-logo-list {
            padding: 0;
            margin: 50px 0;
            list-style: none;
            display: flex;
            justify-content: space-evenly;
            flex-wrap: wrap;
            align-items: center;
        }

        .startups-logo-list li {
            border-radius: 5px;
            // cursor: pointer;
            background-color: #ffffff;
            display: flex;
            padding: 0px 14px;
            color: #000000;
            align-items: center;
            justify-content: center;
            widows: 100px;
            height: 50px;
            box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
        }
    }
}

.jobs-list {
    .city-logo {
        padding: 0;
        margin: 50px 0;
        list-style: none;
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        align-items: center;
    }

    // .city-logo li {
    //   cursor: pointer;
    // }
}

/******** Home Page **********/
.candi-value {
    font-size: 14px;
}

// 1 st div

.white-btn {
    border-radius: 50px;
    border-color: #2ce2a2;
    color: #0e101a;
    font-size: 16px;
    font-weight: 700;
    padding: 16px 30px;
    // margin-left: 10px;
    line-height: normal;
    background-color: #fff;
}

// end Hire Chat Section
// jobs-available
.job-available-section,
.startup-section {
    padding-bottom: 80px;
}

.jobs-available {
    padding: 35px 0;
}

.available-list li {
    a {
        text-decoration: none;
        color: #0e101a;
        text-align: left;
    }

    &:hover {
        transform: scale(1.1);
    }

    border-radius: 33px;
    cursor: default;
    background-color: #ffffff;
    display: flex;
    color: #000000;
    font-size: 18px;
    line-height: 20px;
    align-items: center;
    justify-content: center;
    max-width: 244px;
    padding: 5%;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;

    .candi-value {
        font-size: 14px;
        color: #76787a;
        // line-height: 40px;
    }
}

.available-list {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    grid-column-gap: 28px;

    // justify-content: space-between;
    &:after {
        flex: auto;
        content: "";
    }

    margin-left: 8%;
}

.available-list li {
    width: 244px;
    height: 160px;
    margin-bottom: 30px;
}

.available-list li:nth-child(6n) {
    margin-right: 0;
}

// end jobs-available
// startups-logo
.startups-logo {
    padding: 50px 0;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
}

.startups-logo-list {
    padding: 0;
    margin: 50px 0;
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    align-items: center;
}

.startups-logo-list li {
    border-radius: 5px;
    // cursor: pointer;
    background-color: #ffffff;
    display: flex;
    padding: 0px 14px;
    color: #000000;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 50px;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
}

.img2 {
    // padding-left: 152px;
    margin-left: -5%;
}

.next-img {
    margin-left: -4%;
}

.city-logo li {
    padding: 10px 0px;
}

@media only screen and (min-width: 850px) and (max-width: 1199px) {
    .hire-chat-section {
        .hire-chat {
            height: 477px;
        }
    }

    .img1 {
        text-align: center;
    }

    .get-app-img {
        margin-left: 7%;
        width: 75%;
    }

    .img2 {
        width: 100%;
    }

    .hire-now-img {
        height: 100%;
        width: 100%;
        height: 100%;
    }

    .hire-img {
        height: 100%;
    }

    .btn-app {
        margin-bottom: 12px;
        height: 43px;
        padding: 12px 30px;
        font-size: 16px;
        font-weight: 700;
    }

    .white-btn {
        margin-bottom: 20px;
    }

    .next-img {
        height: 100%;
    }

    .hire-now {
        margin-left: 0px;
    }

    .input-container {
        display: none;
    }

    .input-container-mobile {
        display: block;
    }
}

@media only screen and (min-width: 336px) and (max-width: 767px) {
    .infographs div {
        width: 50%;
    }

    .image-placeholder {
        margin-top: 10%;
    }

    .direct-banner .start-hiring-button {
        margin-top: 0px;
    }

    .hire-chat-section .hire-chat {
        height: 353px;
    }

    .slick-icon {
        display: block;
    }

    .city-logo {
        padding: 0;
        margin: 50px 0;
        list-style: none;
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        align-items: center;
        flex-direction: column;
    }

    .btn-app {
        height: 44px;
        width: 149px;
        border-radius: 50px;
        background-color: #2ce2a2;
        border-color: #2ce2a2;
        color: #0e101a;
        font-size: 16px;
        font-weight: 700;
        padding: 12px 30px;
        margin-left: 10px;
        line-height: normal;
    }

    .next-img {
        margin-left: -17%;
    }

    .hire-now {
        margin-left: 0px;
    }

    .instant-hiring-row {
        flex-direction: column-reverse;
    }

    .available-list li {
        width: 49%;
        margin-right: 2%;
    }

    .direct-Candidates.two {
        padding-left: 0;
    }

    .available-list li:nth-child(even) {
        margin-right: 0;
    }

    .available-list li span {
        font-size: 15px;
    }

    .direct-banner {
        padding: 50px 0 70px;
    }

    .direct-banner h1 {
        font-size: 45px;
    }

    .direct-text h2 {
        font-size: 23px;
        margin-bottom: 20px;
    }

    .direct-banner h1 br {
        display: none;
    }

    .direct-Candidates.first {
        padding-right: 0;
        // flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
    }

    .direct-text {
        margin-top: 30px;
        display: block;
        height: auto;
        text-align: center;
    }

    .direct-text button {
        margin-top: 25px;
    }

    .direct-Candidates.two {
        // flex-direction: column-reverse;
        margin-top: 40px;
        align-items: center;
        justify-content: center;
    }

    .hire-now h2 {
        font-size: 23px;
        margin-bottom: 25px;
    }

    .hire-now {
        margin-top: 30px;
        text-align: center;
    }

    .hire-now h2 br {
        display: none;
    }

    .hire-now button.btn {
        margin: auto;
    }

    .hire-chat-section {
        padding-bottom: 40px;
    }

    .job-available-section,
    .startup-section {
        padding-bottom: 70px;
    }

    .hire-now p {
        font-size: 18px;
        line-height: 22px;
        margin-bottom: 30px;
    }

    .startups-logo-list li {
        width: 48%;
        margin-right: 2%;
        text-align: center;
        margin-bottom: 20px;
    }

    .startups-logo-list li:nth-child(2n) {
        margin-right: 0;
    }

    .startups-logo-list {
        // margin-bottom: 30px;
        margin: 0px;
    }

    .direct-text p {
        margin-bottom: 20px;
    }

    .hire-chat-section .hire-chat {
        height: 385px;
    }

    .hire-now {
        padding-bottom: 15px;
    }

    .btn-app {
        margin-left: 0px;
    }

    .hire-now p {
        margin-left: 10px;
    }

    .hire-now h2 {
        font-size: 45px !important;
    }

    .get-app-img {
        display: none;
    }

    .img2 {
        padding-left: 25px;
        text-align: center;
    }
}

@media only screen and (min-width: 300px) and (max-width: 335px) {
    .hire-now {
        margin-left: 0px;
    }

    .instant-hiring-row {
        flex-direction: column-reverse;
    }

    .available-list li {
        width: 49%;
        margin-right: 2%;
    }

    .direct-Candidates.two {
        padding-left: 0;
    }

    .available-list li:nth-child(even) {
        margin-right: 0;
    }

    .available-list li span {
        font-size: 15px;
    }

    .direct-banner {
        padding: 50px 0 70px;
    }

    .direct-banner h1 {
        font-size: 23px;
    }

    .direct-text h2 {
        font-size: 23px;
        margin-bottom: 20px;
    }

    .direct-banner h1 br {
        display: none;
    }

    .direct-Candidates.first {
        padding-right: 0;
        // flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
    }

    .direct-text {
        margin-top: 30px;
        display: block;
        height: auto;
        text-align: center;
    }

    .direct-text button {
        margin-top: 25px;
    }

    .direct-Candidates.two {
        // flex-direction: column-reverse;
        margin-top: 40px;
        align-items: center;
        justify-content: center;
    }

    .hire-now h2 {
        font-size: 23px;
        margin-bottom: 25px;
    }

    .hire-now {
        margin-top: 30px;
        text-align: center;
    }

    .hire-now h2 br {
        display: none;
    }

    .hire-now button.btn {
        margin: auto;
    }

    .hire-chat-section {
        padding-bottom: 40px;
    }

    .job-available-section,
    .startup-section {
        padding-bottom: 70px;
    }

    .hire-now p {
        font-size: 16px;
        line-height: 22px;
        margin-bottom: 30px;
    }

    .startups-logo-list li {
        width: 48%;
        margin-right: 2%;
        text-align: center;
        margin-bottom: 20px;
    }

    .startups-logo-list li:nth-child(2n) {
        margin-right: 0;
    }

    .startups-logo-list {
        margin-bottom: 30px;
    }

    .direct-text p {
        margin-bottom: 20px;
    }

    .hire-chat-section .hire-chat {
        height: 353px;
    }

    .hire-now {
        padding-bottom: 15px;
        margin-left: -11px;
    }

    .btn-app {
        margin-left: 0px;
        padding: 10px 20px;
    }

    .hire-chat-section .hire-chat {
        height: 400px;
    }

    .get-app-img {
        display: none;
    }

    .img2 {
        padding-left: 25px;
        text-align: center;
    }
}
</style>