<template>
  <div>
    <Main title="Quản lý câu hỏi">
      <Table :items="items" :fields="fields" />
      <Modal title="HJKHJKHKJHKJH" />
    </Main>
  </div>
</template>

<script>
import Main from "../../../components/Main";
import Table from "../../../components/Table";
import Modal from "../../../components/Modal";
export default {
  components: {
    Main,
    Table,
    Modal
  },
  data: () => ({
    fields: [
      { key: "name", label: "Họ và tên" },
      { key: "email", label: "Email" },
      { key: "role", label: "Quyền hạn" },
      { key: "action", label: "Thao tác" },
      { key: "name", label: "Họ và tên" }
    ],
    items: [
      { name: "Hồ Sỹ Huy", email: "huysh@gmail.com", role: "Học viên" },
      { name: "Nguyễn Văn A", email: "zxczxc@gmail.com", role: "Học viên" },
      { name: "Nguyễn Văn B", email: "zxczxc@gmail.com", role: "Học viên" },
      { name: "Nguyễn Văn C", email: "huyzxczxcsh@gmail.com", role: "Học viên" }
    ]
  })
};
</script>

<style lang="scss" scoped></style>
