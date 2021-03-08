import App from '../app.vue';
import Vue from 'vue';

document.addEventListener('turbolinks:load', () => {
  new Vue({
    el: '#app',
    render: (h) => h(App)
  });
});