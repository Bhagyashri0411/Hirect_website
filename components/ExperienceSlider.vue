<!-- <template>
  <div id="app">
    <input type="checkbox" value="foo" v-model="checked"> foo
    <input type="checkbox" value="bar" v-model="checked"> bar
    <input type="checkbox" value="baz" v-model="checked"> baz
    <p>{{ checked }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: []
    }
  }
}
</script> -->


<template>
    <div id="app">
        <div class="range-slider">
            <!-- <svg width="100%" height="24">
        <line x1="4" y1="0" x2="300" y2="0" stroke="#444" stroke-width="12" stroke-dasharray="1 28"></line>
      </svg> -->
            <input @change="slider" v-model.number="minPrice" min="0" max="30" step="1" type="range" />
            <input @change="slider" v-model.number="maxPrice" min="0" max="30" step="1" type="range" />
            <div class="exp-slider">
                <input @change="slider" v-model.number="minPrice" min="0" max="30" step="1" type="number"
                    class="input1" />
                <input @change="slider" v-model.number="maxPrice" min="0" max="30" step="1" type="number"
                    class="input2" />
            </div>
        </div>
    </div>

</template>


<script>

export default {
    data() {
        return {
            minPrice: "0",
            maxPrice: "30",
            minValue: "30"
        }
    },
    methods: {
        slider: function () {
            if (this.minPrice > this.maxPrice) {
                var tmp = this.maxPrice;
                this.maxPrice = this.minPrice;
                this.minPrice = tmp;
            }
        }
    }
}
</script>


<style>
.exp-slider {
    display: flex;
    flex-direction: row;
    width: 100%;
    position: relative;
}

.input1 {
    margin-top: 30px;
    margin-left: 0px;
    color: #76787A;
    border-style: none !important;
    font-size: 14px !important;
}

.input2 {
    margin-top: 30px;
    margin-left: 176%;
    color: #76787A;
    border-style: none !important;
    font-size: 14px !important;
}

.range-slider {
    width: 300px;
    margin: auto;
    text-align: center;
    position: relative;
    height: 6em;
}

.range-slider svg,
.range-slider input[type=range] {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 249px;
}

input[type=number] {
    border: 1px solid #ddd;
    text-align: center;
    font-size: 1.6em;
    -moz-appearance: textfield;
}

input[type=number]::-webkit-outer-spin-button,
input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
}

input[type=number]:invalid,
input[type=number]:out-of-range {
    border: 2px solid #ff6347;
}

input[type=range] {
    -webkit-appearance: none;
    width: 100%;
}

input[type=range]:focus {
    outline: none;
}

input[type=range]:focus::-webkit-slider-runnable-track {
    background: var(--hirect-color);
}

input[type=range]:focus::-ms-fill-lower {
    background: var(--hirect-color);
}

input[type=range]:focus::-ms-fill-upper {
    background: var(--hirect-color);
}

input[type=range]::-webkit-slider-runnable-track {
    width: 100%;
    height: 5px;
    cursor: pointer;
    animate: 0.2s;
    background: var(--hirect-color);
    border-radius: 1px;
    box-shadow: none;
    border: 0;
}

input[type=range]::-webkit-slider-thumb {
    z-index: 2;
    position: relative;
    box-shadow: 0px 0px 0px #000;
    border: 1px solid var(--hirect-color);
    height: 18px;
    width: 18px;
    border-radius: 25px;
    background: var(--hirect-color);
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -7px;
}
</style> 

