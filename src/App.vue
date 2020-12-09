<template>
  <div id="app">
    <div v-if="true" class="admin">
      <AppSidebar />
      <AppHeader />
      <Page />
    </div>
    <div v-else class="client">
      <router-view />
    </div>
  </div>
</template>

<script>
import AppHeader from "./components/Header";
import AppSidebar from "./components/Sidebar";
import Page from "./components/Page";
export default {
  components: {
    AppHeader,
    AppSidebar,
    Page
  },
  created() {}
};
</script>
