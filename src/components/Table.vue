<template>
  <div>
    <b-row>
      <b-col>
        <b-form-input
          v-model="filter"
          type="search"
          placeholder="Tìm kiếm"
        ></b-form-input>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-table
          striped
          hover
          :items="items"
          :filter="filter"
          :per-page="perPage"
          :current-page="currentPage"
          :fields="fields"
        >
          <template v-slot:cell(actions)="data">
            <b-button variant="danger" @click="deleteItem(data.item.id)"
              >Delete</b-button
            >
          </template>
        </b-table>
        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
        ></b-pagination>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  props: ["items", "fields"],
  data: () => ({
    perPage: 2,
    currentPage: 1,
    filter: ""
  }),
  methods: {
    deleteItem(id) {
      const index = this.items.indexOf(x => x.id === id);
      this.items.splice(index, 1);
    }
  },
  computed: {
    rows() {
      return this.items.length;
    }
  }
};
</script>

<style lang="scss" scoped>
table thead.v-data-table-header {
  background: red !important;
}
</style>
