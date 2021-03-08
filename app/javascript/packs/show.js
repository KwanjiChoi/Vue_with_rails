import Vue from 'vue';
import '../show.vue';

document.addEventListener('turbolinks:load', () => {

  new Vue({
    el: '#show',
    data: {
      message: 'Hello show'
    }
  });
});