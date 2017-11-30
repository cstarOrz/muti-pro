<template>
  <div>
    <p>二次贝塞尔曲线</p>
    <p>
      <label >x:<input type="text" v-model="qauBezier.x"></label>
      <label >y:<input type="text" v-model="qauBezier.y"></label>
      <label >x1:<input type="text" v-model="qauBezier.x1"></label>
      <label >y1:<input type="text" v-model="qauBezier.y1"></label>
      <label >x2:<input type="text" v-model="qauBezier.x2"></label>
      <label >y2:<input type="text" v-model="qauBezier.y2"></label>
    </p>
    <p>
      <button  @click="svgRun('qauBezier')">启动</button>
      <button  @click="svgPause('qauBezier')">暂停</button>
    </p>
    <svg :width="svgWidth" :height="svgHeight" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" ref="qauBezier">
        <path :d="quaPath" stroke="#000000" fill="none" style="stroke-width: 2px;"></path>
        <circle :cx="qauBezier.x" :cy="qauBezier.y" r="4" stroke-width="0" fill="#f00"/>
        <circle :cx="qauBezier.x1" :cy="qauBezier.y1" r="4" stroke-width="0" fill="#f00"/>
        <circle :cx="qauBezier.x2" :cy="qauBezier.y2" r="4" stroke-width="0" fill="#f00"/>
        <line fill="none" stroke="#b6a2de" stroke-width="2" :x1="qauBezier.x" :y1="qauBezier.y" :x2="qauBezier.x1" :y2="qauBezier.y1" />
        <line fill="none" stroke="#b6a2de" stroke-width="2" :x1="qauBezier.x1" :y1="qauBezier.y1" :x2="qauBezier.x2" :y2="qauBezier.y2" />
        <circle :cx="qauBezier.x" :cy="qauBezier.y" r="6" stroke-width="0" fill="blue">
          <animateMotion :path="quaPathAnimate" dur="3s" repeatCount="indefinite" />
        </circle>
    </svg>
    <p>二次贝塞尔曲线---带T</p>
    <p>
      <label >Tx:<input type="text" v-model="quaT.x"></label>
      <label >Ty:<input type="text" v-model="quaT.y"></label>
    </p>
    <svg :width="svgWidth" :height="svgHeight" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
        <path :d="quaTPath" stroke="#000000" fill="none" style="stroke-width: 2px;"></path>
        <circle :cx="qauBezier.x" :cy="qauBezier.y" r="4" stroke-width="0" fill="#f00"/>
        <circle :cx="qauBezier.x1" :cy="qauBezier.y1" r="4" stroke-width="0" fill="#f00"/>
        <circle :cx="qauBezier.x2" :cy="qauBezier.y2" r="4" stroke-width="0" fill="#f00"/>
        <circle :cx="quaT.x" :cy="quaT.y" r="4" stroke-width="0" fill="#f00"/>
        <circle :cx="qauBezier.x2 + (qauBezier.x2-qauBezier.x1)" :cy="qauBezier.y2 + (qauBezier.y2-qauBezier.y1)" r="4" stroke-width="0" fill="#f00"/>
        <line fill="none" stroke="#b6a2de" stroke-width="2" :x1="qauBezier.x" :y1="qauBezier.y" :x2="qauBezier.x1" :y2="qauBezier.y1" />
        <line fill="none" stroke="#b6a2de" stroke-width="2" :x1="qauBezier.x1" :y1="qauBezier.y1" :x2="qauBezier.x2" :y2="qauBezier.y2" />
        <line fill="none" stroke="#b6a2de" stroke-width="2" :x1="qauBezier.x2" :y1="qauBezier.y2" :x2="qauBezier.x2 + (qauBezier.x2-qauBezier.x1)" :y2="qauBezier.y2 + (qauBezier.y2-qauBezier.y1)" />
        <line fill="none" stroke="#b6a2de" stroke-width="2" :x1="qauBezier.x2 + (qauBezier.x2-qauBezier.x1)" :y1="qauBezier.y2 + (qauBezier.y2 - qauBezier.y1)" :x2="quaT.x" :y2="quaT.y" />
        <circle :cx="qauBezier.x" :cy="qauBezier.y" r="6" stroke-width="0" fill="blue">
          <animateMotion :path="quaTPathAnimate" dur="3s" repeatCount="indefinite" />
        </circle>
    </svg>
    <p>三次贝塞尔曲线</p>
    <p>
      <label >x:<input type="text" v-model="threeBezier.x"></label>
      <label >y:<input type="text" v-model="threeBezier.y"></label>
      <label >x1:<input type="text" v-model="threeBezier.x1"></label>
      <label >y1:<input type="text" v-model="threeBezier.y1"></label>
      <label >x2:<input type="text" v-model="threeBezier.x2"></label>
      <label >y2:<input type="text" v-model="threeBezier.y2"></label>
      <label >x3:<input type="text" v-model="threeBezier.x3"></label>
      <label >y3:<input type="text" v-model="threeBezier.y3"></label>
    </p>
    <svg :width="svgWidth" :height="svgHeight" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
        <path :d="thrPath" stroke="#ff0000" fill="none" style="stroke-width: 2px;"></path>
        <circle :cx="threeBezier.x" :cy="threeBezier.y" r="4" stroke-width="0" fill="#f00"/>
        <circle :cx="threeBezier.x1" :cy="threeBezier.y1" r="4" stroke-width="0" fill="#f00"/>
        <circle :cx="threeBezier.x2" :cy="threeBezier.y2" r="4" stroke-width="0" fill="#f00"/>
        <circle :cx="threeBezier.x3" :cy="threeBezier.y3" r="4" stroke-width="0" fill="#f00"/>
        <line fill="none" stroke="#b6a2de" stroke-width="2" :x1="threeBezier.x" :y1="threeBezier.y" :x2="threeBezier.x1" :y2="threeBezier.y1" />
        <line fill="none" stroke="#b6a2de" stroke-width="2" :x1="threeBezier.x1" :y1="threeBezier.y1" :x2="threeBezier.x2" :y2="threeBezier.y2" />
        <line fill="none" stroke="#b6a2de" stroke-width="2" :x1="threeBezier.x2" :y1="threeBezier.y2" :x2="threeBezier.x3" :y2="threeBezier.y3" />
        <circle :cx="threeBezier.x" :cy="threeBezier.y" r="6" stroke-width="0" fill="blue">
          <animateMotion :path="thrPathAnimate" dur="3s" repeatCount="indefinite" />
        </circle>
    </svg>
    <p>三次贝塞尔曲线---带S</p>
    <p>
      <label >x1:<input type="text" v-model="thrT.x1"></label>
      <label >y1:<input type="text" v-model="thrT.y1"></label>
      <label >x2:<input type="text" v-model="thrT.x2"></label>
      <label >y2:<input type="text" v-model="thrT.y2"></label>
    </p>
    <svg :width="svgWidth" :height="svgHeight" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
        <path :d="thrTPath" stroke="#ff0000" fill="none" style="stroke-width: 2px;"></path>
        <circle :cx="threeBezier.x" :cy="threeBezier.y" r="4" stroke-width="0" fill="#f00"/>
        <circle :cx="threeBezier.x1" :cy="threeBezier.y1" r="4" stroke-width="0" fill="#f00"/>
        <circle :cx="threeBezier.x2" :cy="threeBezier.y2" r="4" stroke-width="0" fill="#f00"/>
        <circle :cx="threeBezier.x3" :cy="threeBezier.y3" r="4" stroke-width="0" fill="#f00"/>
        <circle :cx="thrT.x1" :cy="thrT.y1" r="4" stroke-width="0" fill="#f00"/>
        <circle :cx="thrT.x2" :cy="thrT.y2" r="4" stroke-width="0" fill="#f00"/>
        <line fill="none" stroke="#b6a2de" stroke-width="2" :x1="threeBezier.x" :y1="threeBezier.y" :x2="threeBezier.x1" :y2="threeBezier.y1" />
        <line fill="none" stroke="#b6a2de" stroke-width="2" :x1="threeBezier.x1" :y1="threeBezier.y1" :x2="threeBezier.x2" :y2="threeBezier.y2" />
        <line fill="none" stroke="#b6a2de" stroke-width="2" :x1="threeBezier.x2" :y1="threeBezier.y2" :x2="threeBezier.x3" :y2="threeBezier.y3" />
        <line fill="none" stroke="#b6a2de" stroke-width="2" :x1="threeBezier.x3" :y1="threeBezier.y3" :x2="thrT.x1" :y2="thrT.y1" />
        <line fill="none" stroke="#b6a2de" stroke-width="2" :x1="thrT.x1" :y1="thrT.y1" :x2="thrT.x2" :y2="thrT.y2" />
        <circle :cx="threeBezier.x" :cy="threeBezier.y" r="6" stroke-width="0" fill="blue">
          <animateMotion :path="thrTPathAnimate" dur="3s" repeatCount="indefinite" />
        </circle>
    </svg>
  </div>
</template>

<script>
export default {
  name: "bezier",
  data() {
    return {
      svgWidth: 600,
      svgHeight: 200,
      qauBezier: {
        x: 20,
        y: 60,
        x1: 140,
        y1: 160,
        x2: 280,
        y2: 90
      },
      quaT: {
        x: 580,
        y: 120
      },
      threeBezier: {
        x: 20,
        y: 20,
        x1: 90,
        y1: 190,
        x2: 190,
        y2: 60,
        x3: 340,
        y3: 40
      },
      thrT: {
        x1: 400,
        y1: 190,
        x2: 580,
        y2: 20
      }
    };
  },
  computed: {
    quaPath() {
      let path = `M${this.qauBezier.x},${this.qauBezier.y} Q${this.qauBezier.x1},${this.qauBezier.y1} ${this.qauBezier.x2},${this.qauBezier.y2}`;
      return path;
    },
    quaTPath() {
      let path = `M${this.qauBezier.x},${this.qauBezier.y} Q${this.qauBezier.x1},${this.qauBezier.y1} ${this.qauBezier.x2},${this.qauBezier.y2} T${this.quaT.x},${this.quaT.y}`;
      return path;
    },
    thrPath() {
      let path = `M${this.threeBezier.x},${this.threeBezier.y} C${this.threeBezier.x1},${this.threeBezier.y1} ${this.threeBezier.x2},${this.threeBezier.y2} ${this.threeBezier.x3},${this.threeBezier.y3}`;
      return path;
    },
    thrTPath() {
      let path = `M${this.threeBezier.x},${this.threeBezier.y} C${this.threeBezier.x1},${this.threeBezier.y1} ${this.threeBezier.x2},${this.threeBezier.y2} ${this.threeBezier.x3},${this.threeBezier.y3} S${this.thrT.x1},${this.thrT.y1} ${this.thrT.x2},${this.thrT.y2}`;
      return path;
    },
    quaPathAnimate() {
      let path = `M${this.qauBezier.x - this.qauBezier.x},${this.qauBezier.y - this.qauBezier.y} Q${this.qauBezier.x1 - this.qauBezier.x},${this.qauBezier.y1 - this.qauBezier.y} ${this.qauBezier.x2 - this.qauBezier.x},${this.qauBezier.y2 - this.qauBezier.y}`;
      return path;
    },
    quaTPathAnimate() {
      let path = `M${this.qauBezier.x - this.qauBezier.x},${this.qauBezier.y - this.qauBezier.y} Q${this.qauBezier.x1 - this.qauBezier.x},${this.qauBezier.y1 - this.qauBezier.y} ${this.qauBezier.x2 - this.qauBezier.x},${this.qauBezier.y2 - this.qauBezier.y} T${this.quaT.x - this.qauBezier.x},${this.quaT.y - this.qauBezier.y}`;
      return path;
    },
    thrPathAnimate() {
      let path = `M${this.threeBezier.x - this.threeBezier.x},${this.threeBezier.y - this.threeBezier.y} C${this.threeBezier.x1 - this.threeBezier.x},${this.threeBezier.y1 - this.threeBezier.y} ${this.threeBezier.x2 - this.threeBezier.x},${this.threeBezier.y2 - this.threeBezier.y} ${this.threeBezier.x3 - this.threeBezier.x},${this.threeBezier.y3 - this.threeBezier.y}`;
      return path;
    },
    thrTPathAnimate() {
      let path = `M${this.threeBezier.x - this.threeBezier.x},${this.threeBezier.y - this.threeBezier.y} C${this.threeBezier.x1 - this.threeBezier.x},${this.threeBezier.y1 - this.threeBezier.y} ${this.threeBezier.x2 - this.threeBezier.x},${this.threeBezier.y2 - this.threeBezier.y} ${this.threeBezier.x3 - this.threeBezier.x},${this.threeBezier.y3 - this.threeBezier.y} S${this.thrT.x1 - this.threeBezier.x},${this.thrT.y1 - this.threeBezier.y} ${this.thrT.x2 - this.threeBezier.x},${this.thrT.y2 - this.threeBezier.y}`;
      return path;
    }
  },
  methods: {
    svgPause(ref) {
      this.$refs[ref].pauseAnimations();
      // svg.pauseAnimations();
    },
    svgRun(ref) {
      this.$refs[ref].unpauseAnimations();
    }
  }
};
</script>

<style scoped>
svg {
  margin: 0 auto;
  display: block;
  border: 1px solid #000;
}
p {
  text-align: center;
}
</style>
