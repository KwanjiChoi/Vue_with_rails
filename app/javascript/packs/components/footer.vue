<template>
  <div class="footer">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'GlobalFooter',
  props: {
    msg: String
  }
};
</script>

<style scoped>
#header{
  background: aliceblue;
}
</style>