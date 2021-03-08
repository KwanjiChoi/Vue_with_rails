<template>
  <div class="small">
    <line-chart :chart-data="datacollection" />
    <button @click="fillData()" class='btn btn-primary mt-4 ml-4'>
      Randomize
    </button>
  </div>
</template>

<script>
import LineChart from './LineChart.js';

export default {
  components: {
    LineChart
  },
  data () {
    return {
      datacollection: { labels:[], datasets: [] }
    };
  },
  mounted () {
    this.fillData();
  },
  methods: {
    fillData () {
      this.datacollection = {
        labels: [this.getRandomInt(), this.getRandomInt()],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [this.getRandomInt(), this.getRandomInt()]
          }, {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [this.getRandomInt(), this.getRandomInt()]
          }
        ]
      };
    },
    getRandomInt () {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    }
  }
};
</script>

<style>
.small {
  max-width: 600px;
  margin:  150px auto;
}
</style>