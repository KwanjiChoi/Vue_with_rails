import Vue from 'vue';
import '../show.vue';

var component = {
  data: function(){
    return {
      count: 0
    };
  },
  template: '<p>{{count}}<button @click="increment" class="btn btn-primary">+1</button></p>',
  methods: {
    increment: function(){
      this.count += 1;
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {

  new Vue({
    el: '#show',
    data: {
      message: 'Hello show',
      hege: 'hgeohogeohoge'
    },
    computed: {
      datetime: function(){
        return new Date();
      }
    },
    methods: {
      reverse: function(){
        this.hege = this.hege.split('').reverse().join('');
      }
    }
  });

  new Vue({
    el: '#vind',
    data: {
      url: 'https://qiita.com'
    }
  });

  new Vue({
    el: '#input',
    data: {
      message: ''
    }
  });

  new Vue({
    el: '#if',
    data: {
      count: 0
    },
    computed: {
      isMultiple0f4: function(){
        return this.count % 4 == 0;
      },
      isMultiple0f2: function(){
        return this.count % 2 == 0;
      }
    },
    methods: {
      countUp: function(){
        this.count += 1;
      }
    }
  });

  new Vue({
    el: '#component',
    components: {
      'sample-component': component
    }
  });
});