<template>
  <div class="header d-flex align-items-center">
    <div class="container d-flex">
      <div class="header--left menu-icon" @click="openSidebar()">
        <i class="far fa-bars"></i>
      </div>
      <div class="header--right">
        <b-dropdown
          size="lg"
          variant="link"
          toggle-class="text-decoration-none"
          no-caret
        >
          <template #button-content>
            <img class="auth-avt" :src="images.VueLogo" height="100%" alt="" />
            <span class="user-name">Hồ Sỹ Huy</span>
          </template>
          <b-dropdown-item class="logout" href="#">Đăng xuất</b-dropdown-item>
        </b-dropdown>
      </div>
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
  },
  method: {
    //? Click menu bar để mở
    openSidebar() {
      return;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.header {
  width: 100%;
  border: var(--border);
  align-items: center;
  height: calc(4rem + 1px);
  background-color: white;
  // position: absolute;
  img {
    height: 100%;
  }
  &--left {
    /*     max-width: 15rem;
    margin-right: auto;
		margin-left: 2rem; */
    align-items: center;
    display: flex;
    i {
      font-size: 1.3rem;
      cursor: pointer;
    }
  }
  &--right {
    margin-left: auto;
    cursor: pointer;
  }
}
.menu {
  align-items: center;
  display: flex;
  i {
    font-size: 1.3rem;
    cursor: pointer;
  }
}
.auth-avt {
  margin-right: 1rem;
  border-radius: 50%;
  width: 30px;
}
@media screen and (min-width: 992px) {
  .menu-icon {
    visibility: hidden;
  }
}
</style>
