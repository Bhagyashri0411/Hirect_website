<template>
  <div>
    <div class="container">
      <Header />
      <div class="search-bar">
        <Search :page="'candidates'" />
      </div>
      <div class="row">
        <div class="col-md-4" v-if="$device.isDesktopOrTablet">
          <Sidebar />
        </div>
        <div v-else>
          <button class="btn btn-default pull-right" @click="drawer = true">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-funnel"
              viewBox="0 0 18 18">
              <path
                d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z" />
            </svg>
            Filters
          </button>
          <el-drawer title="Filters" :visible.sync="drawer" :direction="'btt'" size="50%">
            <Sidebar />
          </el-drawer>
        </div>

        <div class="col-md-8" v-if="!loading">
          <CandidateCard :candidatesList="candidatesList" v-if="candidatesList.length" />
          <FallbackPage v-else v-show="loading" />
          <button @click="ScheduleACallPopup" v-if="candidatesList.length" class="view-btn">View More</button>
        </div>
        <div v-else>
          <LoadingBar v-if="loading" />
        </div>
      </div>
      <el-dialog :visible.sync="ScheduleCallVisible" class="schedule-dialog">
        <RecruitersForm title="Connect with 3.8M+ verified jobseekers"
          subtitle="Register to find your Next Hire. Get Started Soon." />
        <div class="enterprise-hiring text-center">
          <NuxtLink to="/enterprise-hiring">Have Multiple Positions to Fill?</NuxtLink>
        </div>
      </el-dialog>
    </div>
    <Footer style="margin-top:6%;" />
  </div>
</template>

<script>
import { webRequest } from '../../../plugins/webRequest';

export default {
  async mounted() {
    this.loading = true;
    if (Object.keys(this.$route.query).length) {
      // this.handleSearch(this.$route.query.skills, this.$route.query.location);
      this.candidatesList = await this.$webRequest(`filterCandidates?skills=${this.$route.query.skills || ''}&location=${this.$route.query.location || ''}`);
    } else {
      this.candidatesList = await this.$webRequest('allCandidates');
    }
    this.loading = false;
  },
  head() {
    const routeLength = Object.keys(this.$route.query).length;
    let title = 'Hire ';
    if (routeLength > 0) {
      if (routeLength > 1) {
        title += `${this.$route.query.skills || 'Candidates'} in ${this.$route.query.location || 'Your Location'} - Hirect`;
      } else {
        const keys = Object.keys(this.$route.query);
        if (keys.includes('skills')) {
          title += `${this.$route.query.skills || ''} Candidates in Your Location - Hirect`;
        } else if (keys.includes('location')) {
          title += ` Candidates in ${this.$route.query.location || 'Your Location'} - Hirect`;
        } else {
          title += ' Candidates in Your Location - Hirect';
        }
      }
    } else {
      title += ' Candidates in Your Location - Hirect';
    }
    return {
      title,
    };
  },
  methods: {
    ScheduleACallPopup() {
      this.ScheduleCallVisible = true;
    },
    async clearFilters() {
      this.checked = null;
      if (Object.keys(this.$route.query).length) {
        this.candidatesList = await this.$webRequest(`filterCandidates?skills=${this.$route.query.skills || ''}&location=${this.$route.query.location || ''}`);
      } else {
        this.candidatesList = await this.$webRequest('allCandidates');
      }
    },
    closeDraw() {
      this.drawer = false;
    },
    async handleLocationChange(e) {
      const loc = e.target.innerHTML;
      this.loading = true;
      // this.candidatesList = await this.$webRequest(`filterCandidates?location=${loc}`);
      window.location.reload({ path: '/hire/candidates/' }, '', `/hire/candidates/?location=${loc}`);
      this.loading = false;
    },

    async handlePreferenceChange(e, query) {
      const pref = e.target.innerHTML;
      this.loading = true;
      this.candidatesList = await this.$webRequest(`filterCandidates?${query}=${pref}`);
      window.history.pushState({ path: '/hire/candidates/' }, '', `/hire/candidates/?${query}=${pref}`);
      this.loading = false;
    },

    async handleSearch(skill, loc) {
      this.loading = true;
      this.skill = skill;
      this.location = loc;

      if (this.checked.length) {
        const minSalary = (JSON.parse(this.checked)[0]);
        const maxSalary = (JSON.parse(this.checked)[1]);
        this.candidatesList = await this.$webRequest(`filterCandidates?skills=${skill || ''}&location=${loc || ''}&min_sal=${minSalary}&max_sal=${maxSalary}&min_exp=${this.minExp}&max_exp=${this.maxExp}`);
      } else {
        this.candidatesList = await this.$webRequest(`filterCandidates?skills=${skill || ''}&location=${loc || ''}&min_exp=${this.minExp}&max_exp=${this.maxExp}`);
      }

      this.loading = false;
    },

    async handleSalary(e) {
      if (e.target.nodeName.toLowerCase() === 'li') { return; }
      this.closeDraw();
      const isChecked = e.target.checked;

      for (let i = 0; i < e.currentTarget.children.length; i += 1) {
        e.currentTarget.children[i].checked = false;
        // if(e.currentTarget.children[i].checked == true){
        //   checkedArr.push(e.currentTarget.children[i]);
        // }
      }
      e.target.checked = isChecked;
      if (e.target.value !== undefined) {
        this.checked = e.target.value;
        const minSalary = (JSON.parse(e.target.value)[0]);
        const maxSalary = (JSON.parse(e.target.value)[1]);
        if (e.target.checked) {
          this.loading = true;
          if (this.skill && this.location) {
            this.candidatesList = await this.$webRequest(`filterCandidates?min_sal=${minSalary}&max_sal=${maxSalary}&skills=${this.skill}&location=${this.location}&min_exp=${this.minExp}&max_exp=${this.maxExp}`);
          } else {
            this.candidatesList = await this.$webRequest(`filterCandidates?min_sal=${minSalary}&max_sal=${maxSalary}&min_exp=${this.minExp}&max_exp=${this.maxExp}`);
          }

          this.loading = false;
        } else {
          this.loading = true;
          this.candidatesList = await this.$webRequest('allCandidates/');
          this.loading = false;
        }
      }
    },

    async handleExperience(minExp, maxExp) {
      this.minExp = minExp;
      this.maxExp = maxExp;
      this.loading = true;

      if (this.checked.length) {
        const minSalary = (JSON.parse(this.checked)[0]);
        const maxSalary = (JSON.parse(this.checked)[1]);
        this.candidatesList = await this.$webRequest(`filterCandidates?skills=${this.skill || ''}&location=${this.location || ''}&min_sal=${minSalary}&max_sal=${maxSalary}&min_exp=${minExp}&max_exp=${maxExp}`);
      } else {
        this.candidatesList = await this.$webRequest(`filterCandidates?skills=${this.skill || ''}&location=${this.location || ''}&min_exp=${minExp}&max_exp=${maxExp}`);
      }

      this.loading = false;
      this.flag = false;

      // const minSalary = (JSON.parse(this.checked)[0]);
      // const maxSalary = (JSON.parse(this.checked)[1]);
      // console.log("start experience");
      // console.log(minExp + " " + maxExp);
      // this.loading = true;
      // this.candidatesList = await this.$webRequest(`filterCandidates?min_exp=${minExp}&max_exp=${maxExp}min_sal=${minSalary}&max_sal=${maxSalary}`);
      // this.flag = false;
      // this.loading = false;
      // console.log("end experience");
    },
  },
  data() {
    return {
      candidatesList: [],
      loading: false,
      checked: '',
      skill: '',
      location: '',
      drawer: false,
      ScheduleCallVisible: false,
      minExp: '',
      maxExp: ''
    };
  },
};
</script>

<style scoped>
.el-dialog__header {
  margin-bottom: 0px !important;
}

.el-dialog {
  border-radius: 30px;
}

.view-btn {
  border-radius: 32px;
  width: 150px;
  height: 40px;
  background: var(--hirect-color);
  border-style: none;
  font-weight: bold;
  position: absolute;
  left: 50%;
}

.search-bar {
  margin-top: 13%;
}

.candidate-list-item {
  list-style: none;
}

.btn:focus {
  box-shadow: none;
}

@media (max-width: 768px) {
  .search-bar {
    margin-top: 35%;
  }

  .view-btn {
    position: relative;
    left: 30%;
  }
}
</style>
