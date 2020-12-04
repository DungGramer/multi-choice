<template>
  <div class="header d-flex">
    <div class="header--left ">
      <img class="ttc-logo" :src="images.TTCLogo" alt="TTC logo" />
    </div>
    <div class="header--right" @click="logout()">
      <span class="user-name">Hồ Sỹ Huy</span>
      <img class="auth-avt" :src="images.VueLogo" height="100%" alt="" />
    </div>
  </div>
</template>

<script>
import TTCLogo from "../assets/images/Logo_TTC.png";
import VueLogo from "../assets/images/logo.png";

export default {
  data() {
    return {
      images: { VueLogo, TTCLogo }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.header {
  width: 100%;
  border: 1px solid rgb(249, 249, 249);
  max-height: 4rem;

  img {
    height: 100%;
  }
  &--left {
    max-width: 15rem;
    margin-right: auto;
    margin-left: 2rem;
  }
  &--right {
    margin-left: auto;
    cursor: pointer;

    .user-name {
      margin-right: 1rem;
    }
    .auth-avt {
      border-radius: 50%;
      padding: 10px 0;
    }
  }
}
</style>
