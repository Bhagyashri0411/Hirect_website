<template>
  <div class="col-md-12">
    <div class="form-search">
      <div style="display: flex;">
        <span class="input-group-text"><img src="~/assets/imgs/home_working_icon.png" /></span>

        <span>
          <v-select class="skill-select" id="inpt" clearable v-model="value" :options="options1"
            placeholder="Candidate's Skillset" @search="fetchOptions" @input="myChange">
            <template v-slot:spinner="{ loading }">
              <div v-show="loading"></div>
            </template>
          </v-select>
        </span>
      </div>

      <div style="display: flex;">
        <span class="input-group-text"><img src="~/assets/imgs/location1.png" /></span>

        <span>
          <v-select class="location-select" id="inpt1" v-model="value1" :options="options2"
            placeholder="Hiring Location" @search="locationFetchOptions" @input="myChange1">
            <template v-slot:spinner="{ loading }">
              <div v-show="loading"></div>
            </template>
          </v-select>
        </span>

      </div>

      <span class="autocomplete">
        <button class="btn start-hiring1" @click="handleSearch(value, value1)">
          {{ page === 'homepage' ? 'Start Hiring' : 'Search' }}</button>
      </span>
    </div>

  </div>
</template>

<script>

export default {
  async mounted() {
    this.options1 = await this.$webRequest('skills');
    if (Object.keys(this.$route.query).length) {
      this.value = this.$route.query.skills;
      this.value1 = this.$route.query.location;
    } else {
      this.value = null;
      this.value1 = null;
    }
  },
  props: {
    page: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleSearch(skills, location) {
      if (this.page === 'candidates') {
        window.history.pushState({ path: '/hire/candidates' }, '', `/hire/candidates/?skills=${skills}&location=${location}`);
        // eslint-disable-next-line no-undef
        this.$parent.handleSearch(skills, location);
      } else {
        this.value = skills;
        this.value1 = location;
        this.$router.push({
          path: '/hire/candidates',
          query: {
            skills,
            location,
          },
        });
      }
    },
    async fetchOptions(search, loading) {
      loading(true);
      if (search) {
        this.options1 = await this.$webRequest(`skills?q=${search}`);
      }
      loading(false);
    },
    async locationFetchOptions(search, loading) {
      loading(true);
      if (search) {
        this.options2 = await this.$webRequest(`locations?q=${search}`);
      }
      loading(false);
    },
    myChange(val) {
      this.value = val || '';
    },
    myChange1(val) {
      this.value1 = val || '';
    },
  },
  data() {
    return {
      options1: [],
      options2: ['Bangalore', 'Delhi', 'Gurgaon', 'Noida', 'Pune', 'Mumbai', 'Hyderabad', 'Chennai', 'Kolkata', 'Ahmedabad'],
      value: '',
      value1: '',
    };
  },
};
</script>

<style lang="scss" scoped>
.vs__actions {
  padding: 0;
}

.skill-select {
  width: 300px;
}

.location-select {
  width: 180px;
}

.input-group-text {
  margin-left: 10px;
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: center;
  background-color: white;
  border: none;
  border-radius: 26px;
  white-space: nowrap;
}

#inpt ::placeholder {
  font-size: 13px;
  color: #808080;
}

#inpt1 ::placeholder {
  font-size: 13px;
  color: #808080;
}

.form-search {
  box-shadow: 0px 1px 38px 1px #80808040;
  display: flex;
  position: relative;
  justify-content: flex-start;
  align-items: center;
  margin: auto;
  height: 55px;
  max-width: 700px;
  width: 100%;
  margin-top: 0px;
  padding: 5px;
  border-style: none;
  background: white;
  /* border: 2px solid #dfe1e6; */
  /* border-radius: 44px; */
  margin-bottom: 6%;
}

.form-search .autocomplete {
  flex-grow: 1;
  max-width: 33%;
}

.form-search .autocomplete .MuiAutocomplete-fullWidth {
  width: 100%;
}

.form-search .location {
  display: flex;
  align-items: center;
  border-right: 2px solid #808080;
}

.form-search .location span.label {
  min-width: -webkit-max-content;
  min-width: -moz-max-content;
  min-width: max-content;
  margin-left: 74px;
  font-size: 13px;
  cursor: pointer;
  color: #808080;
}

.form-search .autocomplete:nth-child(3) {
  position: absolute;
  right: 0;
}

.form-search .autocomplete .start-hiring1 {
  height: 55px;
  background-color: #2ce2a2;
  display: flex;
  color: #000;
  font-weight: bold;
  justify-content: center;
  font-size: 15px;
  border: none;
  padding: 15px 30px;
  border-top-right-radius: 32px;
  border-bottom-right-radius: 32px;
}

.collapscandate {
  position: absolute;
  padding: 12px 35px;
  background: #FFFFFF;
  // box-shadow: rgb(0 0 0 / 9%) 0px 3px 12px;
  margin-left: 280px;
  border-radius: 12px;
}

.collapscandate ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.collapscandate ul .sec-nav-link {
  color: #686A6B;
  font-family: Helvetica;
  font-size: 16px;
  line-height: 26px;
  text-decoration: none;
  cursor: pointer;
}

.collapscandate li:hover {
  background: rgba(25, 226, 158, 0.15);
  color: #19E29E;
}

.collapscanLocal {
  position: absolute;
  padding: 12px 45px;
  background: #FFFFFF;
  // box-shadow: rgb(0 0 0 / 9%) 0px 3px 12px;
  margin-left: 236px;
  border-radius: 12px;
}

.collapscanLocal ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.collapscanLocal ul .sec-nav-link {
  color: #686A6B;
  font-family: Helvetica;
  font-size: 16px;
  line-height: 26px;
  text-decoration: none;
  cursor: pointer;
}

.collapscanLocal li:hover {
  background: rgba(25, 226, 158, 0.15);
  color: #19E29E;
}

@media (max-width: 768px) {

  .start-hiring1 {
    border-radius: 40px !important;
    height: 10% !important;
    padding: 10px 30px !important;
    width: 126%;
  }

  .skill-select,
  .location-select {
    width: auto;
  }

  .vs__selected-options {
    width: 80% !important;
  }

  .form-search {
    gap: 15px;
    box-shadow: none;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 13%;
    height: auto;

    div {
      box-shadow: 0px 1px 38px 1px #80808040;
      border-radius: 40px;
    }
  }

  .form-search .autocomplete:nth-child(3) {
    position: relative;
  }

  .start-hiring1 {
    border-radius: 40px !important;
    height: 40px !important;
    padding: 10px 30px !important;
  }

  .vs__dropdown-toggle {
    border-top-right-radius: 40px !important;
    border-bottom-right-radius: 40px !important;
  }

}
</style>
