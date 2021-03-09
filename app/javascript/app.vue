<template>
  <div id="app">
    <Header msg="This is common header rendered by vue's single file components" />
    <div id="nav">
    </div>
    <router-link to="/">Page1</router-link> |
    <router-link to="/page2">Page2</router-link>
    <Footer msg="This is common footer rendered by vue's single file components" />
  </div>
</template>


<script>
import Header from './packs/components/header.vue';
import Footer from './packs/components/footer.vue';

export default {
  name: 'Myapp',
  components: {
    Header, Footer
  },
  props: {
    msg: String
  }
};
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
