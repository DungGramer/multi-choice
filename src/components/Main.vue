<template>
  <div>
    <div class="container-fluid">
      <h2>{{ title }}</h2>
      <div class="main">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title"]
};
</script>

<style lang="scss" scoped>
h2 {
  margin-top: 60px;
  margin-bottom: 40px;
}
.main {
  background-color: white;
}
</style>
