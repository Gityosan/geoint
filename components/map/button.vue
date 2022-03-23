<template>
  <transition name="button">
    <v-icon class="arrow" :disabled="disabled" @click="reload()">
      mdi-reload
    </v-icon>
  </transition>
</template>
<script>
export default {
  data: () => ({
    disabled: false
  }),
  methods: {
    reload() {
      this.disabled = true
      this.$emit('reload').then(() => {
        this.disabled = false
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.button-enter-active,
.button-leave-active {
  transition: opacity 0.2s;
}
.button-enter,
.button-leave-to {
  opacity: 0;
}
.arrow {
  color: #262626;
  background-color: white;
  display: block;
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  height: 80px;
  width: 80px;
  padding-left: 4px;
  position: fixed;
  left: 20px;
  bottom: 20px;
  z-index: 100;
  border-radius: 50%;
  box-shadow: 0 5px 14px 0 rgb(0 0 0 / 0.2);
  cursor: pointer;
  &:hover {
    color: white;
    background-color: #262626;
  }
}
</style>
