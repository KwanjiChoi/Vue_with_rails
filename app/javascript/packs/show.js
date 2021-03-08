import Vue from 'vue';
import '../show.vue';

document.addEventListener('DOMContentLoaded', () => {

  new Vue({
    el: '#show',
    data: {
      message: 'Hello show'
    }
  });
});