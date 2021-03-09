import Vue from 'vue';
import Component from '../component.vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    render: h => h(Component)
  });
});
