<template>
  <div id="app">
    <div v-if="true" class="admin">
      <AppHeader />
      <div class="sidebar d-flex">
        <AppSidebar />
        <div class="main">
          <router-view />
        </div>
      </div>
    </div>
    <div v-else class="client">
      <router-view />
    </div>
  </div>
</template>

<script>
import AppHeader from "./components/Header";
import AppSidebar from "./components/Sidebar";
export default {
  components: {
    AppHeader,
    AppSidebar
  },
  created() {}
};
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .admin {
    .main {
      padding: 5rem 0;
      background-color: rgb(240,240,247);
      margin-right: auto;
      width: 100%;
    }
    .sidebar {
      margin-right: auto;
    }
  }
}
</style>
