<template>
  <div class="spinner-overlay">
    <div class="spinner">
      <div class="bar bar1" :style="style"></div>
      <div class="bar bar2" :style="style"></div>
      <div class="bar bar3" :style="style"></div>
      <div class="bar bar4" :style="style"></div>
      <span class="spinner--info" v-if="info">{{ info }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Spinner',
  props: ['info', 'color'],
  computed: {
    style() {
      if (this.color) return {backgroundColor: this.color}
    }
  }
}
</script>
<style lang="scss" scoped="true">
.spinner-overlay {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  background: rgba(255, 255, 255, 0.5);
  z-index: 100;
}
.spinner--info {
  color: black;
  padding: 0 1em;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 5px;
  font-size: 16px;
  width: auto;
  text-align: center;
  font-weight: bold;
  display: inline-block;
  white-space: nowrap;
  z-index: 100;
  transform: translate(calc(-50% + 25px), 8px);
}
.spinner {
  position: absolute;
  padding: 1em;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 70px;
  height: 60px;
  text-align: center;
  font-size: 10px;
  background-color: white;
  border-radius: 5px;
  z-index: 999;
}

.spinner .bar {
  background-color: var(--clr-primary);
  height: 100%;
  width: 8px;
  display: inline-block;

  -webkit-animation: growing-bars 1.2s infinite ease-in-out;
  animation: growing-bars 1.2s infinite ease-in-out;
  transform-origin: bottom left;
}

.spinner .bar2 {
  margin-left: 0.2em;
  -webkit-animation-delay: -1.1s;
  animation-delay: -1.1s;
}

.spinner .bar3 {
  margin-left: 0.2em;
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}

.spinner .bar4 {
  margin-left: 0.2em;
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}

@-webkit-keyframes growing-bars {
  0%,
  80%,
  100% {
    -webkit-transform: scaleY(0.4);
  }
  20% {
    -webkit-transform: scaleY(1);
  }
}

@keyframes growing-bars {
  0%,
  80%,
  100% {
    transform: scaleY(0.3);
    -webkit-transform: scaleY(0.3);
  }
  20% {
    transform: scaleY(1);
    -webkit-transform: scaleY(1);
  }
}
</style>
