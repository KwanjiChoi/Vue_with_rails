import Chart from '../chart.vue';
import Vue from 'vue';

document.addEventListener('turbolinks:load', () => {

  new Vue({
    el: '#chart',
    render: (h) => h(Chart)
  });
});