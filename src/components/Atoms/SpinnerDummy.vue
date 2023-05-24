<template>
  <div class="spinner-dummy">
    <div class="spinner-dummy_border spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.spinner-dummy {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &_border {
    position: relative;
    opacity: 0.6;
    height: 20px;
    width: 20px;
    padding: 0;
  }
}
</style>
