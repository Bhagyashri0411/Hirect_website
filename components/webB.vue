<template>
<div>
    <div v-if="jobseekerData !== null" class="webB">
        <div class="job-main">
            <div class="job-name">
                <div class="job-title" style="color:#0E101A;max-width:260px;">{{jobseekerData.title}}</div>
                <div class="job-title" style="color:#15C39C;font-size:18px;">{{jobseekerData.salary}}</div>
            </div>
            <div class="base-inf">
                <div class="base-inf-item">
                    <img style="width: 12px; height:12px; margin: 0px 6px -3px 0px;" src="~/assets/img/ic_positioning@2x.png" alt="posi">
                    <p class="base-inf-text">{{jobseekerData.location.city}}</p>
                </div>
                <div class="base-inf-item">
                    <img style="width: 12px; height:12px; margin: 0px 6px -3px 0px;" src="~/assets/img/ic_job@2x.png" alt="job">
                    <p class="base-inf-text">{{jobseekerData.experience}}</p>
                </div>
                <div class="base-inf-item">
                    <img style="width: 12px; height:12px; margin: 0px 6px -3px 0px;" src="~/assets/img/ic_education@2x.png" alt="edu">
                    <p class="base-inf-text">{{jobseekerData.degree}}</p>
                </div>
                <div v-if="jobseekerData.workFromHome" class="base-inf-item">
                    <img style="width: 12px; height:12px; margin: 0px 6px -3px 0px;" src="~/assets/img/ic_home@2x.png" alt="home">
                    <p class="base-inf-text" style="color: #15C39C;">Can Work From Home</p>
                </div>
            </div>
        </div>
        <el-divider style="margin: 0px;" />
        <div class="recruiter-inf">
            <div class="recruiter-avatar-container">
                <img class="recruiter-avatar" v-if="jobseekerData.recruiter.avatar !== ''" :src="jobseekerData.recruiter.avatar" alt="ava">
                <img class="recruiter-avatar" v-else="" src="~/assets/img/male_us_default.png" alt="ava">
                <img class="recruiter-avatar-passed" src="~/assets/img/ic_verified@2x.png" alt="veri">
            </div>
            <div>
                <div class="recruiter-text1">{{jobseekerData.recruiter.name}}</div>
                <div class="recruiter-text2">{{jobseekerData.recruiter.designation}} · {{jobseekerData.recruiter.companyName}}</div>
            </div>
        </div>
        <el-divider style="margin: 0px;" />
        <div v-if="jobStatus === 1">
            <div class="job-description">
                <div class="item-title">Job Description</div>
                <div class="skill-tags">
                    <div class="skill-tags-item" v-for="(item, index) in jobseekerData.skillTags" :key="index">{{item}}</div>
                </div>
                <div class="job-description-text">{{jobseekerData.detail}}</div>
            </div>
            <el-divider style="margin: 0px;" />
            <div class="company-inf">
                <div class="company-avatar-container">
                    <img class="company-avatar" src="~/assets/img/male_us_default.png" alt="ava">
                    <img class="company-avatar-passed" src="~/assets/img/ic_verified@2x.png" alt="veri">
                </div>
                <div class="company-inf-right">
                    <div class="company-name">{{jobseekerData.company.fullName}}</div>
                    <div class="company-other-inf">
                        <span v-if="jobseekerData.company.financing">{{jobseekerData.company.financing}}</span>
                        <span v-if="jobseekerData.company.financing && jobseekerData.company.strength"> · </span>
                        <span v-if="jobseekerData.company.strength">{{jobseekerData.company.strength}}</span>
                        <span v-if="jobseekerData.company.strength && jobseekerData.company.industry"> · </span>
                        <span v-if="jobseekerData.company.industry">{{jobseekerData.company.industry}}</span>
                    </div>
                </div>
            </div>
            <el-divider style="margin: 0px;" />
            <div class="company-address">
                <GmapsLittle class="company-gmaps" :map-data="mapData" />
            </div>
            <el-divider style="margin: 0px;" />
        </div>
        <div v-else>
            <div class="job-description">
                <div class="item-title">Job Description</div>
                <div class="work-closed">
                    The position has been closed
                </div>
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
    name: 'WebB',
    components: {},
    data() {
        return {
            contentStyle: {
                height: '0px'
            },
            loading: true,
            jobseekerData: null,
            mapData: {
                longitude: 0,
                latitude: 0,
                address: ''
            },
            jobStatus: 4,
            distinct_id: '',
            recruiterId: ''
        }
    },
    watch: {},
    created() {},
    mounted() {
        this.contentStyle.height = window.innerHeight - 170 + 'px'
        this.getCompanyData()
    },
    methods: {
        async getCompanyData() {
            const response = await this.$reqGet('/hirect/job-service/web/jobs/' + window.atob(this.$route.query.p))
            // console.log(response)
            if (response.data.code === 2000) {
                this.distinct_id = this.$route.query.t + (new Date()).valueOf() + Math.floor(Math.random() * 100)
                this.jobseekerData = response.data.data
                this.mapData.longitude = this.jobseekerData.location.longitude
                this.mapData.latitude = this.jobseekerData.location.latitude
                this.mapData.address = this.jobseekerData.location.address
                this.jobStatus = this.jobseekerData.status
                // console.log('jobseekerData.status ===> ', this.jobseekerData.status)
                this.recruiterId = this.jobseekerData.recruiter.id
                this.$emit('getRecruiterId', this.jobseekerData.recruiter.id, this.distinct_id)
                this.userInComing()
            } else {
                this.$message.error(response.message)
            }
        },
        userInComing() {
            this.$sendToEsData('jobDetailsCheckedWeb', {
                'share_id': this.$route.query.t,
                'distinct_id': this.distinct_id,
                'jobId': window.atob(this.$route.query.p),
                'recruiterId': this.recruiterId
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.webB /deep/ .el-divider--horizontal {
    margin: 0 auto;
    background-color: #F2F3F4;
    width: 100%;
}

.header-content {
    height: 90px;
}

.item-title {
    font-size: 18px;
    font-family: 'Helvetica';
    font-weight: normal;
    color: #0E101A;
    line-height: 21px;
    margin: 22px 0px 22px 0px;
}

.job-main {
    margin: 0 auto;
    padding: 25px 0px 25px 0px;
    width: 90%;

    .job-name {
        display: flex;
        justify-content: space-between;

        .job-title {
            font-family: 'Arial';
            font-size: 20px;
            line-height: 24px;
            font-weight: bold;
        }
    }

    .base-inf {
        display: flex;
        flex-wrap: wrap;
        margin-top: 20px;

        .base-inf-item {
            display: flex;
            height: 20px;
            margin: 0px 16px 0px 0px;
        }

        .base-inf-text {
            margin: 0px;
            display: inline-block;
            font-size: 12px;
            font-family: 'Arial';
            font-weight: normal;
            color: #0E101A;
            line-height: 14px;
        }
    }
}

.recruiter-inf {
    display: flex;
    align-items: center;
    margin: 0 auto;
    min-height: 78px;
    width: 90%;

    .recruiter-avatar-container {
        position: relative;
        width: 34px;
        height: 34px;
        margin-right: 14px;

        .recruiter-avatar {
            width: 34px;
            height: 34px;
        }

        .recruiter-avatar-passed {
            position: absolute;
            width: 13px;
            height: 15px;
            bottom: 0px;
            right: 0px;
        }
    }

    .recruiter-text1 {
        font-size: 14px;
        font-family: 'Arial';
        font-weight: bold;
        color: #0E101A;
        line-height: 16px;
        margin-bottom: 2px;
    }

    .recruiter-text2 {
        font-size: 12px;
        font-family: 'Arial';
        color: #76787A;
        line-height: 16px;
        margin-top: 2px;
    }
}

.job-description {
    margin: 0 auto;
    padding-bottom: 22px;
    width: 90%;

    .job-description-text {
        white-space: pre-line;
        font-size: 12px;
        font-family: 'Arial';
        color: #76787A;
        line-height: 18px;
    }

    .skill-tags {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 4px;
    }

    .skill-tags-item {
        padding: 5px 6px 5px 6px;
        margin: 3px 3px 3px 3px;
        background: #F7F7F7;
        border-radius: 2px;
        font-size: 12px;
        font-family: 'Arial';
        font-weight: 400;
        color: #76787A;
        line-height: 14px;
    }

    .work-closed {
        width: 288px;
        margin: 0 auto;
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
}

.company-inf {
    margin: 0 auto;
    padding: 22px 0px 22px 0px;
    width: 90%;
    display: flex;

    .company-avatar-container {
        position: relative;
        margin-right: 14px;
        width: 34px;
        height: 34px;

        .company-avatar {
            width: 34px;
            height: 34px;
        }

        .company-avatar-passed {
            position: absolute;
            bottom: 0px;
            right: 0px;
            width: 13px;
            height: 15px;
        }
    }

    .company-inf-right {

        .company-name {
            font-size: 14px;
            font-family: 'Arial';
            color: #0E101A;
            line-height: 16px;
            margin-bottom: 4px;
        }

        .company-other-inf {
            font-size: 12px;
            font-family: 'Arial';
            color: #76787A;
            line-height: 14px;
        }
    }
}

.company-address {
    margin: 0 auto;
    padding: 22px 0px 22px 0px;
    width: 100%;

    .company-gmaps {
        margin: 0 auto;
        width: 90%;
        height: 185px;
    }
}
</style>
