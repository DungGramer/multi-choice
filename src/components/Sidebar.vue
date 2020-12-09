<template>
  <div id="sidebar">
    <ul class="">
      <li class="img-container">
        <router-link tag="a" to="/dashboard">
          <div class="ttc-logo"></div>
        </router-link>
      </li>
      <li
        v-on:click="nowIndex = 'dashboard'"
        :class="{ active: addActive('dashboard') }"
      >
        <router-link tag="a" to="/dashboard">
          <i class="icon fas fa-home-lg-alt"></i>
          <span class="title">Thống kê</span>
        </router-link>
      </li>
      <li
        v-on:click="nowIndex = 'users'"
        :class="{ active: addActive('users') }"
      >
        <router-link tag="a" to="/users">
          <i class="icon fas fa-user"></i>
          <span class="title">Quản lí người dùng</span>
        </router-link>
      </li>
      <li
        v-on:click="nowIndex = 'questions'"
        :class="{ active: addActive('questions') }"
      >
        <router-link tag="a" to="/questions">
          <i class="icon fas fa-server"></i>
          <span class="title">Ngân hàng câu hỏi</span>
        </router-link>
      </li>
      <li
        v-on:click="nowIndex = 'examples'"
        :class="{ active: addActive('examples') }"
      >
        <router-link tag="a" to="/examples">
          <i class="icon fas fa-file"></i>
          <span class="title">Quản lí bài thi</span>
        </router-link>
      </li>
      <li
        v-on:click="nowIndex = 'seasons'"
        :class="{ active: addActive('seasons') }"
      >
        <router-link tag="a" to="/seasons">
          <i class="icon fas fa-clipboard"></i>
          <span class="title">Quản lí kỳ thi</span>
        </router-link>
      </li>
      <li
        v-on:click="nowIndex = 'levels'"
        :class="{ active: addActive('levels') }"
      >
        <router-link tag="a" to="/levels">
          <i class="icon fas fa-signal-alt-3"></i>
          <span class="title">Quản lí cấp độ</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import TTCLogo from "../assets/images/Logo_TTC.png";
export default {
  data() {
    return {
      nowIndex: "dashboard",
      images: { TTCLogo }
    };
  },
  methods: {
    addActive(data) {
      return this.nowIndex == data ? true : false;
    }
  }
};
</script>
<style lang="scss" scoped>
.ttc-logo {
  background: url("../assets/images/Logo_TTC-mini.png") no-repeat center center;
  background-size: contain;
  background-clip: border-box;
  width: 60%;
  height: 60%;

  transition: all 0.25s ease;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
#sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 5vw;
  background-color: white;
  border: var(--border);
  transition: width 0.25s ease;

  .img-container {
    position: relative;
    display: block;
    height: 4rem;
    & a:hover {
      background-color: initial;
    }
    img {
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      width: 60%;
      transform: translate(-50%, -50%);
    }
  }
  li {
    white-space: nowrap;
    text-overflow: ellipsis;
    position: relative;
    .icon {
      padding-right: 1rem;
    }
    a {
      display: block;
      padding: 1rem 1.5rem;
      text-decoration: none;
      color: #9095b4;
    }
    a:hover {
      background-color: var(--hover);
    }
  }
  .active {
    color: var(--text-selected);
    a {
      color: var(--text-selected);
    }
    &:after {
      position: absolute;
      content: "";
      background: var(--text-selected);

      height: 50%;
      width: 3px;

      right: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  .title {
    white-space: nowrap;
    text-overflow: ellipsis;
    visibility: hidden;
  }
  &:hover {
    width: 18vw;
    .title {
      visibility: initial;
    }
    .active:after {
      height: 100%;
    }
    .ttc-logo {
      background-image: url("../assets/images/Logo_TTC.png");
    }
  }
}
@media screen and (max-width: 992px) {
  #sidebar {
    visibility: hidden;
  }
}
</style>
