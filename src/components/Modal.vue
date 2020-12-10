<template>
  <div>
    <div class="modal-wrapper" v-if="visible">
      <h2>{{ title }}</h2>
      <p>{{ text }}</p>
      <div class="modal-buttons">
        <button class="modal-button" @click="hide">Close</button>
        <button class="modal-button" @click="confirm">Confirm</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      title: "",
      text: ""
    };
  },
  methods: {
    hide() {
      this.visible = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  // overflow: auto;
  background: rgba(0, 0, 0, 0.4);
}
.modal-wrapper {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 200px;
  z-index: 110;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}
.modal-leave .modal-content {
  transform: scale(1.1);
}
</style>
