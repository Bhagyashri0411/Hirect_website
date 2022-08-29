<template>
    <div class="container">
        <div class="row">
            <div class="candidate-card" v-for="candidate in candidatesList" :key="candidate.c_id">
            <div class="card1">
                <div class="candidate-card-inner">
                    <div class="top-banner">
                        <div class="column-1">
                            <img class=" avatar" :src="candidate.avatar" />
                        </div>

                        <div>
                            <p class="name">Hirect Candidate</p>
                            <div class="designation">
                                <div>{{ candidate.e_degree }} |
                                    {{ candidate.experience }} | ₹
                                    {{ candidate.x_salary_max < 0 ? '30+' : candidate.x_salary_min+' - '+candidate.x_salary_max}} LPA</div>
                            </div>
                        </div>
                    </div>

                    <div class="column-2">
                        <ul class="candidate-role">
                            <li class=" col-md-6 prev-company"
                                style="font-size: 14px; display: grid; grid-auto-flow: column; justify-content: start;">
                                <div><img src="~/assets/imgs/home_working_icon.png" class="icon" /></div>
                                <div v-if="candidate.experience == 'Fresher'">Looking for First Job</div>
                                <div v-else>{{ candidate.x_company_name }} | {{ candidate.x_designation }}</div>
                            </li>
                            <div class="candidate-role-mobile">
                                <div class="col-md-6 company-exp" style="font-size: 14px;"
                                v-if="isExperienced(candidate.experience)">{{
                                        formatChanger(candidate.x_start_time)
                                }} -
                                {{ formatChanger(candidate.x_end_time) }}</div>
                            <div class="col-md-6 company-exp" style="font-size: 14px;" v-else>Not Yet Started</div>
                                </div>
                            <li class="col-md-6 role"
                                style="font-size: 14px; display: grid; grid-auto-flow: column; justify-content: start;">
                                <div><img src="~/assets/imgs/icon_home_education.png" class="icon" /></div>
                                <div>{{ candidate.e_school_name }}</div>
                            </li>
                            <div class="candidate-role-mobile">
                                <div class="col-md-6 college-duration" style="font-size: 14px;">{{
                                    formatChanger(candidate.e_start_time)
                            }}
                                -
                                {{ formatChanger(candidate.e_end_time) }}</div>
                            </div>
                        </ul>

                        <ul class="candidate-role-1">
                            <li class="col-md-6 company-exp" style="font-size: 14px;"
                                v-if="isExperienced(candidate.experience)">{{
                                        formatChanger(candidate.x_start_time)
                                }} -
                                {{ formatChanger(candidate.x_end_time) }}</li>
                            <li class="col-md-6 company-exp" style="font-size: 14px;" v-else>Not Yet Started</li>
                            <li class="col-md-6 college-duration" style="font-size: 14px;">{{
                                    formatChanger(candidate.e_start_time)
                            }}
                                -
                                {{ formatChanger(candidate.e_end_time) }}</li>
                        </ul>

                        <div class="location"><span><img src="~/assets/imgs/location1.png"
                                    class="icon" /></span><span>{{ candidate.x_city }}</span></div>

                    </div>
                </div>

                <div class="profile-btn">
                    <!-- <button @click="handleClick(candidate.row_id)" class="profile-btn">View
                        Profile</button> -->
                    <NuxtLink :to="`/hire/candidates/${candidate.row_id}`">View Profile</NuxtLink>

                </div>

            </div>
        </div>
        </div>
    </div>
</template>
<script>

export default {
  props: {
    candidatesList: {
      type: Array,
      required: true,
    },
  },
  methods: {
    formatChanger(date) {
      const x = date.split('T')[0].split('-');
      let ans = '';
      const month = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
      ans = `${month[x[1] - 1]} ${x[0]}`;
      return ans;
    },

    getMaxSalary(sal) {
      if (sal < 0) {
        return '30+';
      }
      return sal;
    },

    isExperienced(exp) {
      if (exp === 'Fresher') {
        return false;
      }
      return true;
    },
    async handleClick(id) {
      const routeData = this.$router.resolve({
        path: `/hire/candidates/${id}`,
        params: id,
      });
      window.open(routeData.href, '_blank');
    },
  },
};
</script>
<style scoped lang="scss">
.avatar {
    border: 4px double var(--hirect-color);
    border-radius: 40px;
    box-shadow: #909399c7 1px 1px 5px -1px;
}
.candidate-role-mobile{
    display: none;
}
.icon {
    padding-right: 5px;
}

.skills {
    border-radius: 50px;
    margin: 7px 10px;
    border-style: none;
    background-color: #F2F4F8;
    cursor: default;
    padding: 7px 12px;
}

.profile-btn {
    font-weight: bold;
    height: 28%;
    border-radius: 50px;
    border: 1px solid;
    top: 43%;
    position: relative;
    width: 96%;
    background-color: white;
    font-size: 14px;
    box-shadow: #909399c7 1px 1px 5px -1px;
    padding: 10%;
    text-align: center;
    a{
        color: #000;
        text-decoration: none;
    }
}

.location {
    font-size: 14px;
    font-weight: bold;
    padding-top: 15px;
}

.top-banner {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 20% 80%;
    justify-items: stretch;
    align-items: center;
}

.card1 {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 75% 20%;
    gap: 5%;
}

.candidate-card {
    margin-bottom: 6%;
    padding-top: 10px;
    border-radius: 8px;
    box-shadow: 0px 1px 26px 1px #80808040;
    padding: 4%;
}

.candidate-list-item {
    margin-left: -34px;
    margin-top: 10px;
}

.candidate-role {
    list-style: none;
    display: flex;
    justify-content: space-between;
    margin-left: -31px;
    flex-direction: row;
    margin-bottom: 0px;
    padding-top: 15px;
    font-weight: bold;
    font-size: 13px;
    gap: 25px;
}

.candidate-role-1 {
    list-style: none;
    display: flex;
    justify-content: space-between;
    margin-left: -9px;
    flex-direction: row;
    margin-bottom: 0px;
    color: #76787A;
    padding-top: 2px;
    gap: 34px;
}

.candidate-profile {
    display: grid;
    grid-auto-flow: column;
    // grid-template-columns: 20% 64%;
}

.column-1 {
    width: 100%;
}

.column-2 {
    cursor: default;
}

.candidate {
    border-radius: 10px;
    height: 180px;
    width: 200px;
    padding: 5px;
    filter: grayscale(100);
}

.candidate:hover {
    filter: grayscale(0);
}

.name {
    font-weight: bold;
    font-size: 24px;
    cursor: default;
    filter: blur(7px);
}

.designation {
    display: block;
    color: #76787a;
    font-size: 16px;
    cursor: default;
}

.designation-modal {
    display: block;
    font-size: 12px;
    margin-top: 10px;
    max-width: 74%;
    text-align: start;
}

.modal-parent {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background: #00000052;
    backdrop-filter: blur(4px);
    z-index: 9999;
}

.modal {
    position: relative;
    background: white;
    width: 50%;
    height: fit-content;
    padding: 30px;
    border-radius: 6px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 22px;
    animation: drop .05s linear;
}

.model-image {
    align-items: center;
}

@keyframes drop {

    /* 0% {
    top: -100px;
  }

  100% {
    top: 50%;
  } */
    0% {
        opacity: 0
    }

    100% {
        opacity: 1
    }
}

.X {
    position: absolute;
    right: 20px;
    top: 5px;
    font-size: 40px;
    cursor: pointer;
}

section {
    transition: 2s;
}

.candidate-card-inner {
    // display: grid;
    // grid-auto-flow: column;
    // grid-template-columns: 14% 90%;
}

.column {
    padding: 10px;
}

.image-section img {
    border-radius: 15px;
}

.description {
    padding: 20px;
    font-size: 14px;
}

.description h3 {
    margin-bottom: 20px;
}

@media only screen and (min-width: 300px) and (max-width: 991px) {
    .card1 {
        display: grid;
        grid-auto-flow: row;
        grid-template-columns: none;
    }
    .top-banner {
        grid-template-columns: 25% 75%;
    }
    .candidate-role {
        flex-direction: column;
        gap: 15px;
    }
    .candidate-role-1 {
        display: none;
    }
    .candidate-role-mobile{
        margin-left: 21px;
        display: block;
        font-weight: normal;
        color: #76787A;
    }
    .profile-btn{
        padding: 0%;
        height: 40px;
        top: 0;
        margin-top: 15px;
        margin-bottom: 25px;
        text-align: center;
        padding-top: 10px;
        a{
            color: #000;
            text-decoration: none;
        }
    }
}
</style>
