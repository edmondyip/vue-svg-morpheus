<template>
  <svg width="100%" x="0px" y="0px" id="background-svg" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 720 480"
    preserveAspectRatio="none">
    <g v-for="svg in svgList" :id="svg.name" style="display: none" :key="svg.id">
      <path v-for="svgPath in svg.path" :d="svgPath" :key="svgPath.id" />
    </g>
  </svg>
</template>

<script>
  import SVGMorpheus from "@/assets/svg-morpheus"
  export default {
    data: function () {
      return {
        target: this.$route.name,
        svgBg: null,
        svgList: [{
          name: 'home',
          path: ['M260,341V141H460V341Z']
        }, {
          name: 'test',
          path: ['M357.75,136C409,136,461.5,190,461.5,241.75,461.5,306,417,343.5,357.75,343.5,298,343.5,258,295,258,241.75,258,185,304.75,136,357.75,136Z'
          ]
        }, {
          name: 'square',
          path: ['M-100,100V-100H100V100Z','M620,574V374H820V574Z']
        }, {
          name: 'circle',
          path: ['M717.75-103.5C769-103.5,821.5-49.5,821.5,2.25,821.5,66.5,777,104,717.75,104,658,104,618,55.5,618,2.25,618-54.5,664.75-103.5,717.75-103.5Z','M-2.25,376.5c51.25,0,103.75,54,103.75,105.75C101.5,546.5,57,584-2.25,584-62,584-102,535.5-102,482.25-102,425.5-55.25,376.5-2.25,376.5Z']
        }]
      }
    },
    methods: {
      change: function () {
        this.svgBg.to(this.target)
      }
    },
    mounted: function () {
      this.svgBg = new SVGMorpheus('#background-svg', {duration: 600, easing: 'circ-in', rotation: 'counterclock' })
      this.target = this.$route.name
      this.change()
    },
    watch: {
      '$route' (to, from) {
        this.target = this.$route.name
        this.change()
      }
    }
  }

</script>

<style lang="scss">
  svg#background-svg {
    display: block;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -100;
    height: 100%;
    path {
      width: 100%;
      height: 100%;
      fill: #85F1C1;
    }
  }

</style>
