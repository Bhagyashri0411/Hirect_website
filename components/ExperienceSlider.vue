<template>
    <div id="app">
        <div class='range-slider'>
            <input type="range" min="0" max="30" step="1" v-model="sliderMin"
                @change="$parent.$parent.handleExperience(minAngle, maxAngle);">
            <input type="range" min="0" max="30" step="1" v-model="sliderMax"
                @change="$parent.$parent.handleExperience(minAngle, maxAngle);">
            <div class="number-container">
                <input type="number" min="0" max="30" step="1" v-model="sliderMin">
                <input type="number" min="0" max="30" step="1" v-model="sliderMax">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            minAngle: 0,
            maxAngle: 30,
        }
    },

    computed: {
        sliderMin: {
            get: function () {
                var val = parseInt(this.minAngle);
                return val;
            },
            set: function (val) {
                val = parseInt(val);
                if (val > this.maxAngle) {
                    this.maxAngle = val;
                }
                this.minAngle = val;
                // this.$parent.$parent.handleExperience(this.minAngle, this.maxAngle);
            }
        },
        sliderMax: {
            get: function () {
                var val = parseInt(this.maxAngle);
                return val;
            },
            set: function (val) {
                val = parseInt(val);
                if (val < this.minAngle) {
                    this.minAngle = val;
                }
                this.maxAngle = val;
                // this.$parent.$parent.handleExperience(this.minAngle, this.maxAngle);
            }
        }
    }
}
</script>

<style>
.number-container {
    display: flex;
    justify-content: space-between;
}

.range-slider {
    width: 300px;
    margin: auto;
    text-align: center;
    position: relative;
    height: 6em;
}

.range-slider input[type=range] {
    position: absolute;
    left: 0;
    top: 20%;
}

input[type=number] {
    text-align: center;
    font-size: 14px;
    position: relative;
    margin-top: 13%;
    color: #686A6B;
    border-style: none;
}

input[type=number]::-webkit-outer-spin-button,
input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
}

input[type=number]:invalid,
input[type=number]:out-of-range {
    border: 2px solid var(--hirect-color);
    ;
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

