<template>
  <div class="circles">
    <Circle1 class="circle circle_1" />
    <Circle2 class="circle circle_2" />
    <Circle3 class="circle circle_3" />
  </div>
</template>

<script>
export default {
  name: 'Circles',
}
</script>

<style scoped>
.circles {
  position: relative;
}
.circle_1 {
  transform-origin: center;
  animation: spin 24s linear infinite;
  position: absolute;
  bottom: -195px;

  right: -40px;
  z-index: 3;
}
.circle_2 {
  transform-origin: center;
  animation: spin 20s linear infinite;
  position: absolute;
  bottom: -300px;

  right: -205px;
  z-index: 3;
}
.circle_3 {
  transform-origin: center;
  animation: spin 16s linear infinite reverse;
  position: absolute;
  bottom: -200px;

  right: -150px;
  z-index: 3;
}
@keyframes spin {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(-360deg);
  }
}
</style>
