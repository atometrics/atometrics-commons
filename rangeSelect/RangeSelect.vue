<template>
    <div class="range-select-large">
      <div class="slider-header">
        <label>{{label}}</label><div>de {{minRangeDisplay}} à {{maxRangeDisplay}}</div>
      </div>
      <vue-slider
        :disabled="disabled"
        :value="range"
        v-bind="options"
        :interval="interval"
        :min="min"
        :max="max"
        @change="$emit('change', $event)"
        :class="[bounded ? 'bounded-slider' : '']"
      >
        <template v-slot:dot="{ pos }">
          <div
            :class="[
              'vue-slider-dot-handle',
              pos === 0 || pos === 100 ? '' : 'slider--set'
            ]"
          ></div>
        </template>
      </vue-slider>
      <div class="slider-footer">
        <div>{{minDisplay}}</div><div>{{maxDisplay}}</div>
      </div>
    </div>
</template>

<script>
import VueSlider from 'vue-slider-component'

export default {
  name: 'range-select-large',
  props: [
    'label',
    'min',
    'max',
    'unit', // Overriden by unitMin and unitMax
    'unitMin', // Overriden by specialMinUnit
    'unitMax', // Overriden by specialMaxUnit
    'specialMinUnit', // Used for the most min value
    'specialMaxUnit', // Used for the most max value
    'transform', // Overrides transformMin and transformMax
    'transformMin',
    'transformMax',
    'range',
    'interval',
    'bounded',
    'disabled',
    'color'
  ],
  model: {
    prop: 'range',
    event: 'change'
  },
  data() {
    return {
      options: {
        eventType: 'auto',
        width: 'auto',
        height: 6,
        dotSize: 16,
        contained: true,
        show: true,
        speed: 0.5,
        tooltip: 'none',
        tooltipDir: 'top',
        tooltipStyle: null,
        reverse: false,
        clickable: true,
        realTime: false,
        lazy: false,
        bgStyle: null,
        sliderStyle: null,
        sliderStyles: null,
        processStyle: {
          backgroundColor: this.color || 'var(--clr-action, rgba(54,215,183,1))'
        },
        piecewiseActiveStyle: null,
        piecewiseStyle: null,
        labelStyle: null,
        labelActiveStyle: null
      }
    }
  },
  computed: {
    minRangeDisplay() {
      return (this.transform || this.transformMin || (e => e))(this.range[0]) + ((this.range[0] === this.min && this.specialMinUnit) || this.unitMin || this.unit || '');
    },
    maxRangeDisplay() {
      return (this.transform || this.transformMax || (e => e))(this.range[1]) + ((this.range[1] === this.max && this.specialMaxUnit) || this.unitMax || this.unit || '');
    },
    minDisplay() {
      return (this.transform || this.transformMin || (e => e))(this.min) + (this.specialMinUnit || this.unitMin || this.unit || '');
    },
    maxDisplay() {
      return (this.transform || this.transformMax || (e => e))(this.max) + (this.specialMaxUnit || this.unitMax || this.unit || '');
    }
  },
  components: {
    VueSlider
  }
}
</script>

<style lang="scss" scoped>
.range-select-large {
  display: flex;
  flex-direction: column;
  .slider-header {
    label {
      font-weight: bold;
    }
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-weight: bold;
  }
  .slider-footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 0.875rem;
  }
}
</style>