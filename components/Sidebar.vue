<template>
  <div class="container top-container">
    <ul class="ul-container">
      <li class="list-items exp">Experience</li>
      <li class="list-items">
        <ExperienceSlider />
      </li>
      <hr />
      <li class="list-items">
        <div class="accordion" id="accordionPanelsStayOpenExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingOne">
              <button class="accordion-button" type="button" data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne" style="font-weight:bold;">
                Salary
              </button>
            </h2>
            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingOne">
              <div class="accordion-body">
                <ul @click="handleSalary">
                  <li class="list-items">
                    <input type="radio" name="salary" value="[100000,300000]" id="r1">
                    <label for="r1">1 - 3LPA</label><br>
                  </li>
                  <li class="list-items">
                    <input type="radio" name="salary" value="[300000,600000]" id="r2">
                    <label for="r2">3 - 6LPA</label><br>
                  </li>
                  <li class="list-items">
                    <input type="radio" name="salary" value="[600000,1000000]" id="r3">
                    <label for="r3">6 - 10LPA</label><br>
                  </li>
                  <li class="list-items">
                    <input type="radio" name="salary" value="[1000000,1500000]" id="r4">
                    <label for="r4">10 - 15LPA</label><br>
                  </li>
                  <li class="list-items">
                    <input type="radio" name="salary" value="[1500000,2000000]" id="r5">
                    <label for="r5">15 - 20LPA</label><br>
                  </li>
                  <li class="list-items">
                    <input type="radio" name="salary" value="[2000000,3000000]" id="r6">
                    <label for="r6">20 - 30LPA</label><br>
                  </li>
                  <li class="list-items">
                    <input type="radio" name="salary" value="[3000000,-1]" id="r7">
                    <label for="r7">30+LPA</label><br>
                  </li>
                </ul>
                <span @click="clearFilters" style="color: var(--hirect-color);font-weight: bold">Clear Filters</span>
              </div>
            </div>
          </div>
        </div>
      </li>
      <hr />
      <li class="list-items">
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
            <button class="accordion-button" type="button" data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="true"
              aria-controls="panelsStayOpen-collapseTwo" style="font-weight:bold;">
              Trending Locations
            </button>
          </h2>
          <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingTwo">
            <div class="accordion-body">
              <ul @click="handlePreferenceChange" id="location">
                <li class="list-items">Bangalore</li>
                <li class="list-items">Delhi</li>
                <li class="list-items">Pune</li>
              </ul>
              <ul>
                <li class="list-items" style="color:var(--hirect-color); font-weight:bold;">& many more</li>
              </ul>
            </div>
          </div>
        </div>
      </li>
      <hr />
      <li class="list-items">
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingThree">
            <button class="accordion-button" type="button" data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="true"
              aria-controls="panelsStayOpen-collapseThree" style="font-weight:bold;">
              Most Searched Job Roles
            </button>
          </h2>
          <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingThree">
            <div class="accordion-body">
              <ul @click="handlePreferenceChange" id="skills">
                <li class="list-items">Sales Executive</li>
                <li class="list-items">Java Developer</li>
                <li class="list-items">Customer Support</li>
              </ul>
              <ul>
                <li class="list-items" style="color:var(--hirect-color); font-weight:bold;"> & many more</li>
              </ul>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>

</template>

<script>
/* eslint-disable no-restricted-syntax */

// import RangeSlider from 'vue-range-slider';
// import 'vue-range-slider/dist/vue-range-slider.css';
// import MultiRangeSlider from "multi-range-slider-vue";

export default {
  data() {
    return {
      value: '',
      sliderValue: 50,
    };
  },
  components: {
    // MultiRangeSlider,
    // RangeSlider,
  },

  methods: {

    // handleExperience(e) {
    //   document.getElementById('ageOutputId').value = document.getElementById('ageInputId').value;
    //   const exp = e.target.value;
    //   // eslint-disable-next-line no-undef
    //   $parent.handleExperience(exp);
    // },
    handlePreferenceChange(e) {
      const q = e.target.parentElement.attributes.id.value;
      if (this.$device.isDesktopOrTablet) {
        this.$parent.handlePreferenceChange(e, q);
      } else {
        this.$parent.$parent.handlePreferenceChange(e, q);
      }
    },
    handleSalary(e) {
      if (this.$device.isDesktopOrTablet) {
        this.$parent.handleSalary(e);
      } else {
        this.$parent.$parent.handleSalary(e);
      }
    },
    clearFilters(e) {
      for (const li of e.target.previousElementSibling.children) {
        li.children[0].checked = false;
      }
      if (this.$device.isDesktopOrTablet) {
        this.$parent.clearFilters();
      } else {
        this.$parent.$parent.clearFilters();
      }
    },
    // UpdateValues(e) {
    //     this.barMinValue = e.minValue;
    //     this.barMaxValue = e.maxValue;
    // }
  },
};
</script>

<style lang="scss" scoped>
ul {
  padding: 0;
}

.range-slider {
  width: 255px;
}

.ul-container {
  margin-top: 10%;
}

.exp {
  padding-left: 5%;
  font-weight: bold;
  padding-bottom: 10px;
  font-size: 16px !important;
  color: black !important;
}

.accordion-item {
  border: none !important;
}

.top-container {
  /* border: 1px solid white; */
  height: 96.6%;
  padding-top: 10px;
  border-radius: 10px;
  box-shadow: 0px 1px 26px 1px #80808040;
}

.list-items {
  list-style: none;
  font-size: 14px;
  padding-bottom: 10px;
  color: #686A6B;
  cursor: pointer;
}

.accordion-button:not(.collapsed) {
  color: black;
  background-color: white;
  box-shadow: none !important;
}

.accordion-body {
  padding: 1rem 1rem !important;
}

.accordion-button {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0rem 1rem !important;
  font-size: 1rem;
  color: #212529;
  text-align: left;
  background-color: #fff;
  border: 0;
  border-radius: 0;
  overflow-anchor: none;
  transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out, border-radius .15s ease;
}

@supports(-webkit-appearance: none) or (-moz-appearance: none) {

  input[type='radio'],
  input[type='radio'] {
    --active: #275EFE;
    --active-inner: #fff;
    --focus: 2px rgba(39, 94, 254, .3);
    --border: #BBC1E1;
    --border-hover: #275EFE;
    --background: #fff;
    --disabled: #F6F8FF;
    --disabled-inner: #E1E6F9;
    -webkit-appearance: none;
    -moz-appearance: none;
    height: 21px;
    outline: none;
    display: inline-block;
    vertical-align: top;
    position: relative;
    margin: 0;
    cursor: pointer;
    border: 1px solid var(--bc, var(--border));
    background: var(--b, var(--background));
    transition: background .3s, border-color .3s, box-shadow .2s;

    &:after {
      content: '';
      display: block;
      left: 0;
      top: 0;
      position: absolute;
      transition: transform var(--d-t, .3s) var(--d-t-e, ease), opacity var(--d-o, .2s);
    }

    &:checked {
      --b: var(--hirect-color);
      --bc: var(--hirect-color);
      --d-o: .3s;
      --d-t: .6s;
      --d-t-e: cubic-bezier(.2, .85, .32, 1.2);
    }

    &:disabled {
      --b: var(--disabled);
      cursor: not-allowed;
      opacity: .9;

      &:checked {
        --b: var(--disabled-inner);
        --bc: var(--border);
      }

      &+label {
        cursor: not-allowed;
      }
    }

    &:hover {
      &:not(:checked) {
        &:not(:disabled) {
          --bc: var(--border-hover);
        }
      }
    }

    &:focus {
      box-shadow: 0 0 0 var(--focus);
    }

    &:not(.switch) {
      width: 15px;
      height: 15px;

      &:after {
        opacity: var(--o, 0);
      }

      &:checked {
        --o: 1;
      }
    }

    &+label {
      font-size: 14px;
      line-height: 21px;
      display: inline-block;
      vertical-align: top;
      cursor: pointer;
      margin-left: 4px;
    }
  }

  input[type='radio'] {
    &:not(.switch) {
      border-radius: 0px;

      &:after {
        content: '✓';
        display: block;
        left: 2px;
        color: white;
        font-weight: bolder;
        top: -3px;
        position: absolute;
        transition: transform var(--d-t, 0.3s) var(--d-t-e, ease), opacity var(--d-o, 0.2s);
        font-size: 13px;
      }

      &:checked {
        --r: 43deg;
      }
    }

    &.switch {
      width: 38px;
      border-radius: 11px;

      &:after {
        left: 2px;
        top: 2px;
        border-radius: 50%;
        width: 15px;
        height: 15px;
        background: var(--ab, var(--border));
        transform: translateX(var(--x, 0));
      }

      &:checked {
        --ab: var(--active-inner);
        --x: 17px;
      }

      &:disabled {
        &:not(:checked) {
          &:after {
            opacity: .6;
          }
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .top-container {
    box-shadow: none;
  }
}
</style>
