<template>
  <div id="sidebar">
    <ul class="">
      <li>
        <router-link tag="a" to="/dashboard">Thống kê</router-link>
      </li>
      <li>
        <router-link tag="a" to="/users">Quản lí người dùng</router-link>
      </li>
      <li>
        <router-link tag="a" to="/questions">Ngân hàng câu hỏi</router-link>
      </li>
      <li>
        <router-link tag="a" to="/examples">Quản lí bài thi</router-link>
      </li>
      <li>
        <router-link tag="a" to="/seasons">Quản lí kì thi</router-link>
      </li>
      <li>
        <router-link tag="a" to="/levels">Quản lí cấp độ</router-link>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
#sidebar {
  padding: 1rem 0;
  min-width: 20%;
  min-height: 40rem;
  background-color: rgb(237,237,237);
  text-align: left;
  li {
    padding: 1rem 1.5rem;
    a {
      text-decoration: none;
      color: #9b9b9b;
    }
  }
}
</style>
