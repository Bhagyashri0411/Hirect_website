<template>
<div>
    <div v-if="jobseekerData !== null" class="webC">
        <div class="jobseeker-main">
            <div class="jobseeker-name">
                <p class="jobseeker-name-name">{{ jobseekerData.name }}</p>
                <p class="jobseeker-name-inf">{{ jobseekerData.designation }}<span v-if="jobseekerData.company"> | {{ jobseekerData.company }}</span></p>
            </div>
            <div class="jobseeker-avatar-content">
                <img  class="jobseeker-avatar" v-if="jobseekerData.avatar !== ''" :src="jobseekerData.avatar" loading="lazy" alt="ava">
                <img  class="jobseeker-avatar" v-else src="~/assets/img/male_us_default.png" loading="lazy" alt="ava">
                <img  class="jobseeker-avatar-gender" v-if="jobseekerData.gender === 'Male'" src="~/assets/img/ic_male@2x.png" loading="lazy" alt="male">
                <img  class="jobseeker-avatar-gender" v-if="jobseekerData.gender === 'Female'" src="~/assets/img/ic_female@2x.png" loading="lazy" alt="female">
            </div>
        </div>
        <el-divider style="margin: 0px;" />
        <div v-if="seekerStatus === 0">
            <div class="simple-inf-area">
                <div class="base-inf">
                    <div class="base-inf-item">
                        <img  style="width: 16px; height:16px; margin: 0px 6px -3px 0px;" src="~/assets/img/ic_resume_job@2x.png" loading="lazy" alt="job">
                        <p class="base-inf-text">{{ jobseekerData.identityShow }}</p>
                    </div>
                    <div class="base-inf-item">
                        <img  style="width: 16px; height:16px; margin: 0px 6px -3px 0px;" src="~/assets/img/ic_resume_education@2x.png" loading="lazy" alt="edu">
                        <p class="base-inf-text">{{ jobseekerData.degree }}</p>
                    </div>
                    <div class="base-inf-item">
                        <img  style="width: 16px; height:16px; margin: 0px 6px -3px 0px;" src="~/assets/img/ic_resume_birthday@2x.png" loading="lazy" alt="birth">
                        <p class="base-inf-text">{{ jobseekerData.birthDate }}</p>
                    </div>
                </div>
                <div class="simple-inf-advantage">{{ jobseekerData.advantage }}</div>
                <div class="skill-tags">
                    <div class="skill-tags-item" v-for="(item, index) in jobseekerData.skillTags" :key="index">{{ item }}</div>
                </div>
            </div>
            <el-divider style="margin: 0px;" />
            <div class="job-preference">
                <div class="item-title">
                    <div class="item-title-circle" />Job Preference</div>
                <div class="job-preference-line">
                    <div class="job-preference-line-1" style="font-family: 'Arial';">{{ jobseekerData.preferences[0].channel }}</div>
                    <div class="job-preference-line-1" style="font-family: 'Arial';">{{ jobseekerData.preferences[0].salary }}</div>
                </div>
                <div class="job-preference-line">
                    <div class="job-preference-tags">
                        <div class="job-preference-item" v-for="(item, index) in jobseekerData.preferences[0].industryTags" :key="index">{{ item.industry }}</div>
                    </div>
                    <div class="job-preference-line-2">{{ jobseekerData.preferences[0].city }}</div>
                </div>
            </div>
            <el-divider style="margin: 0px;" />
            <div v-if="jobseekerData.experiences.length" class="work-experience">
                <div class="item-title">
                    <div class="item-title-circle" />Experience</div>
                <div class="work-experience-item" v-for="(item, index) in jobseekerData.experiences" :key="index">
                    <div class="experience-line1">
                        <div class="experience-line1-job-name">{{ item.designation }} - {{ item.companyName }}</div>
                        <div class="experience-line1-job-time">{{ $dateChange(item.startTime) }} - {{ $dateChange(item.endTime) }}</div>
                    </div>
                    <div class="experience-channel">{{ item.channel }}</div>
                    <div class="experience-jobcontent">{{ item.jobContent }}</div>
                    <div v-if="item.achievement" class="experience-achievement-title">Achievement:</div>
                    <div v-if="item.achievement" class="experience-achievement">{{ item.achievement }}</div>
                </div>
            </div>
            <el-divider style="margin: 0px;" />
            <div class="work-experience">
                <div class="item-title">
                    <div class="item-title-circle" />Education</div>
                <div class="work-experience-item" v-for="(item, index) in jobseekerData.educations" :key="index">
                    <div class="experience-line1">
                        <div class="experience-line1-job-name">{{ item.schoolName }}</div>
                        <div class="experience-line1-job-time">{{ $dateChange(item.startTime) }} - {{ $dateChange(item.endTime) }}</div>
                    </div>
                    <div class="experience-channel">{{ item.major }}</div>
                    <div v-if="item.grade" class="experience-channel">Grade: {{ item.grade }}</div>
                    <div v-if="item.experience" class="experience-jobcontent">Experience at school:<br>{{ item.experience }}</div>
                </div>
            </div>
            <el-divider style="margin: 0px;" />
        </div>
        <div v-else>
            <div class="work-closed">
                The profile has been removed by the user
            </div>
        </div>
    </div>
    <div v-else>
        <div v-loading="loading" :style="contentStyle" />
    </div>
</div>
</template>

<script>
export default {
  name: 'WebC',
  components: {},
  data() {
    return {
      contentStyle: {
        height: '0px',
      },
      loading: true,
      jobseekerData: null,
      seekerStatus: 2,
    };
  },
  watch: {},
  created() {},
  mounted() {
    this.contentStyle.height = `${window.innerHeight - 170}px`;
    this.getJobseekerData();
  },
  methods: {
    async getJobseekerData() {
      const response = await this.$reqGet(`/hirect/candidate-service/web/candidates/${window.atob(this.$route.query.p)}/profile?preferenceId=${window.atob(this.$route.query.r)}`);
      // console.log(response)
      if (response.data.code === 2000) {
        this.distinct_id = this.$route.query.t + (new Date()).valueOf() + Math.floor(Math.random() * 100);
        this.jobseekerData = response.data.data;
        this.seekerStatus = this.jobseekerData.preferenceStatus;
        this.$emit('getRecruiterId', '', this.distinct_id);
        this.userInComing();
      } else {
        this.$message.error(response.message);
      }
    },
    userInComing() {
      this.$sendToEsData('profileDetailsCheckedWeb', {
        share_id: this.$route.query.t,
        distinct_id: this.distinct_id,
        preferenceId: window.atob(this.$route.query.r),
        candidateId: window.atob(this.$route.query.p),
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.webC /deep/ .el-divider--horizontal {
    margin: 0 auto;
    background-color: #F2F3F4;
    width: 90%;
    z-index: 1;
}

.work-closed {
    width: 288px;
    margin: 0 auto;
    margin-top: 16px;
    margin-bottom: 16px;
    background: #F7F7F7;
    border-radius: 7px;
    text-align: center;
    font-size: 10px;
    font-family: 'Arial';
    font-weight: 400;
    color: #76787A;
    line-height: 12px;
    padding: 16px 0px 16px 0px;
}

.item-title-circle {
    display: inline-block;
    margin: 0px 6px 3px 0px;
    width: 6px;
    height: 6px;
    border-radius: 3px;
    background-color: #15C39C;
}

.item-title {
    display: inline-block;
    font-size: 18px;
    font-family: 'Arial';
    font-weight: normal;
    color: #0E101A;
    line-height: 21px;
    margin: 22px 0px 22px 0px;
}

.header-content {
    height: 90px;
}

.jobseeker-main {
    margin: 0 auto;
    min-height: 100px;
    width: 90%;
    display: flex;
    justify-content: space-between;

    .jobseeker-name {
        max-width: 260px;
        margin-top: 25px;
        display: flex;
        justify-content: space-around;
        align-items: flex-start;
        flex-direction: column;

        .jobseeker-name-name {
            margin: 0px;
            font-size: 20px;
            font-family: 'Arial';
            font-weight: bold;
            color: #0E101A;
            line-height: 24px;
        }

        .jobseeker-name-inf {
            margin: 0px 0px 10px 0px;
            font-size: 14px;
            font-family: 'Arial';
            font-weight: normal;
            color: #76787A;
            line-height: 16px;
        }
    }

    .jobseeker-avatar-content {
        position: relative;
        margin-top: 25px;
        width: 50px;
        height: 50px;

        .jobseeker-avatar-gender {
            position: absolute;
            width: 16px;
            height: 16px;
            right: 0px;
            top: 0px;
        }

        .jobseeker-avatar {
            height: 50px;
        }
    }
}

.simple-inf-area {
    width: 90%;
    margin: 0 auto;

    .base-inf {
        display: flex;
        flex-wrap: wrap;
        margin-top: 20px;

        .base-inf-item {
            display: flex;
            height: 20px;
            margin: 0px 16px 0px 0px;
            align-items: center;

            .base-inf-text {
                margin: 3px 0px 0px 0px;
                height: 14px;
                font-size: 12px;
                font-family: 'Arial';
                font-weight: normal;
                color: #0E101A;
            }
        }
    }

    .simple-inf-advantage {
        margin: 10px 0px 10px 0px;
        font-size: 12px;
        font-family: 'Arial';
        font-weight: normal;
        color: #76787A;
        line-height: 18px;
    }

    .skill-tags {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 27px;

        .skill-tags-item {
            height: 24px;
            background-color: #F7F7F7;
            padding: 0px 6px 0px 6px;
            margin: 3px 12px 3px 0px;
            font-size: 12px;
            font-family: 'Arial';
            font-weight: normal;
            color: #76787A;
            line-height: 24px;
        }
    }
}

.job-preference {
    width: 90%;
    margin: 0 auto;
    padding-bottom: 23px;

    .job-preference-line {
        display: flex;
        justify-content: space-between;

        .job-preference-line-1 {
            font-size: 14px;
            color: #0E101A;
            line-height: 16px;
            margin-bottom: 8px;
        }

        .job-preference-line-2 {
            font-size: 12px;
            font-weight: normal;
            color: #76787A;
            line-height: 14px;
        }

        .job-preference-tags {
            display: flex;
            flex-wrap: wrap;

            .job-preference-item {
                margin: 0px 12px 0px 0px;
                font-size: 12px;
                font-family: 'Arial';
                font-weight: normal;
                color: #76787A;
                line-height: 14px;
            }
        }
    }
}

.work-experience {
    width: 90%;
    margin: 0 auto;

    .work-experience-item {
        margin-bottom: 22px;

        .experience-line1 {
            display: flex;
            justify-content: space-between;
            margin-bottom: 8px;

            .experience-line1-job-name {
                font-size: 14px;
                max-width: 350px;
                font-family: 'Arial';
                color: #0E101A;
                line-height: 16px;
            }

            .experience-line1-job-time {
                font-size: 12px;
                font-family: 'Arial';
                font-weight: lighter;
                color: #76787A;
                line-height: 16px;
            }
        }

        .experience-channel {
            font-size: 12px;
            margin-bottom: 10px;
            font-family: 'Arial';
            font-weight: lighter;
            color: #0E101A;
            line-height: 14px;
        }

        .experience-jobcontent {
            font-size: 12px;
            margin-bottom: 10px;
            font-family: 'Arial';
            font-weight: normal;
            color: #76787A;
            line-height: 18px;
            white-space: pre-wrap;
        }

        .experience-achievement-title {
            font-size: 12px;
            margin-bottom: 8px;
            font-family: 'Arial';
            font-weight: normal;
            color: #76787A;
            line-height: 14px;
        }

        .experience-achievement {
            font-size: 12px;
            font-family: 'Arial';
            font-weight: 400;
            color: #76787A;
            line-height: 14px;
        }
    }
}
</style>
