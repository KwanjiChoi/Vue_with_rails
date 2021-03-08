import App from '../app.vue';
import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    render: (h) => h(App)
  });
});