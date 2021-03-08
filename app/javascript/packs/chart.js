import Chart from '../chart.vue';
import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {

  new Vue({
    el: '#chart',
    render: (h) => h(Chart)
  });
});