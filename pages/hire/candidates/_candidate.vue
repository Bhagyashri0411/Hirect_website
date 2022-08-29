<template>
    <div>
        <Header />
        <div class="container" v-if="!$fetchState.pending">
            <div class="row" style="box-shadow: 0px 1px 26px 1px #80808040;">
                <div class="col-md-8"
                    style="background: linear-gradient(359deg, #DDE1E6 22.96%, rgba(221, 225, 230, 0) 78.53%); padding-left: 0px; padding-right: 0px;">
                    <div style="padding: 5%;">
                        <div class="row avatar-card">
                            <div class="col-md-2 avatar">
                                <img :src="candidateData.avatar" />
                            </div>
                            <div class=" col-md-10 details">
                                <div class="row">
                                    <div class="name1">
                                        {{ candidateData.c_name }}
                                    </div>
                                    <div class="row">
                                        <div class="col-md-3 subhead">
                                            <div class="location-img"><img src="~/assets/imgs/loc-img.png" />
                                            </div>
                                            <div class="subhead-details">{{ candidateData.x_city }}</div>
                                        </div>

                                        <div class="col-md-3 subhead">
                                            <div class="exp-img"><img src="~/assets/imgs/work-img.png" />
                                            </div>
                                            <div class="subhead-details">{{ candidateData.experience }}</div>
                                        </div>

                                        <div class="col-md-3 subhead">
                                            <div class="degree-img"><img src="~/assets/imgs/degree-img.png" />
                                            </div>
                                            <div class="subhead-details">{{ candidateData.e_degree }}</div>
                                        </div>

                                        <div class="col-md-3 subhead">
                                            <div class="age-img"><img src="~/assets/imgs/group.png" />
                                            </div>
                                            <div class="subhead-details">{{ candidateData.c_age }} Years</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="about" style="margin-top:6%;">
                            <div class="about-head">About Me</div>
                            <div class="para">
                                {{ candidateData.c_advantage }}
                            </div>

                            <ul class="skills-div" v-if="candidateData.skills[0] !== ''">
                                <!-- eslint-disable vue/require-v-for-key -->
                                <li class="candidate-list-item"><button class="skills" v-for="candidate_skill in candidateData.skills" style="border-radius:15px; margin-right: 10px; border-style: none; border-style: none;background-color: #c0c4cc75;">{{ candidate_skill }}</button></li>
                            </ul>
                        </div>

                        <ul>
                            <li class="job-details">
                                <div class="details-head">Job Preference</div>
                                <div class="row" style="margin-top: 2%;">
                                    <div class="col-md-6 inside-details">{{ candidateData.x_preference }}</div>
                                    <div class="col-md-6 inside-details" v-if="candidateData.x_salary_max > 0">₹{{ candidateData.x_salary_min }} -
                                        ₹{{ candidateData.x_salary_max }}LPA</div>
                                    <div class="col-md-6 inside-details" v-else>₹30+ LPA</div>
                                </div>

                                <div class="row">
                                    <div class="col-md-6 industry-details">{{ getIndustry(candidateData.x_industry) }}
                                    </div>
                                    <div class="col-md-6 industry-details">{{ candidateData.x_city }}</div>
                                </div>

                            </li>

                            <li class="details-head" style="margin-top: 4%; opacity: 50%;">Experience</li>
                            <ul style="margin-top:3%; opacity: 20%;">
                                <li class="job-details">
                                    <div class="company_name">{{ candidateData.x_company_name }}</div>
                                    <div class="row">
                                        <div class="col-md-6 comp_details">{{ candidateData.x_preference }}</div>
                                        <div class="col-md-6 comp_details">{{ candidateData.workStart
                                        }} - {{ candidateData.workEnd }}</div>
                                    </div>

                                </li>

                            </ul>
                        </ul>
                    </div>

                    <div>
                        <SignupCard />
                    </div>
                </div>

                <div class="col-md-4 section-2">
                    <RF />
                    <div class="bulk-hiring"><a style="color: #015a5b !important;" href="/enterprise-hiring">Have Multiple Positions to
                            fill?</a></div>
                </div>

            </div>
        </div>
        <div v-else>
            <LoadingBar />
        </div>
        <Footer />
    </div>

</template>

<script>
export default {
  async fetch() {
    const id = this.$route.params.candidate;
    this.candidateData = await this.$webRequest(`candidate/${id}`);
  },
  methods: {
    formatChanger(date) {
      const x = date.split('T')[0].split('-');
      let ans = '';
      const month = ['Jan', 'Feb', 'March', 'April', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
      ans = `${month[x[1] - 1]} ${x[0]}`;
      return ans;
    },
    getIndustry(industry) {
      if (industry === '#N/A') {
        return 'Any Industry';
      }
      return industry;
    },
  },
  data() {
    return {
      loading: false,
      candidateData: {},
    };
  },
};
</script>

<style lang="scss" scoped>
.container{
    margin-top: 10%;
    margin-bottom: 5%;
}
.bulk-hiring {
    font-weight: 600;
    font-size: 14px;
    margin-top: 12%;
    text-align: center;
}

.comp_details {
    color: #686A6B;
    font-size: 14px;
}

.company_name {
    font-weight: bold;
}

.industry-details {
    color: #686A6B;
    font-size: 14px;
}

.inside-details {
    font-weight: bold;
    font-size: 16px;
}

.details-head {
    font-weight: bold;
    font-size: 20px;
}

.skills-div {
    padding-top: 2%;
    padding-bottom: 2%;
    list-style: none;
}

.skills {
    border-radius: 50px;
    margin: 6px 10px;
    border-style: none;
    background-color: #F2F4F8;
    cursor: default;
    padding: 7px 12px;
}

.para {
    font-size: 14px;
    color: #686A6B;
}

.name1 {
    font-size: 24px;
    font-weight: bold;
    filter: blur(7px);
}

.subhead-details {
    font-size: 14px;
    color: #686A6B;
}

.subhead {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    gap: 7px;

}

.section-2 {
    padding: 4%;
    background-color: rgba(242, 244, 248, 0.7);
}

.job-details {
    margin-top: 5%;
}

.about-head {
    font-weight: bold;
}

.subheading {
    column-gap: 10px;
}

.candidate-list-item {
    margin-left: -34px;
    margin-top: 2%;
}

.heading-banner {
    list-style: none;
    display: inline-flex;
    justify-content: space-between;
}
@media (max-width: 768px) {
    .container {
        margin-top: 20%;
        margin-bottom: 5%;
    }
    .avatar-card {
        display: grid;
        grid-auto-flow: column;
    }
}
</style>
