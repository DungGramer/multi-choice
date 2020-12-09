<template>
  <div class="page">
    <main>
      <slot name="main">
        <div class="container"><router-view /></div>
      </slot>
    </main>
  </div>
</template>

<script>
// import Header from './Header.vue';
export default {
  // components: { Header },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.page {
  margin-left: 5vw;
}
.page > * {
  margin: 0 auto;
}

@media screen and (max-width: 992px) {
  .page {
    margin-left: 0;
  }
}
</style>
