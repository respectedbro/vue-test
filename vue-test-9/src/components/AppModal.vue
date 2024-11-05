<template>
  <div class="modal-backdrop" @click="$emit('close')"></div>
  <div class="modal">
    <h3>Title modal</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt laborum officiis optio quae rem?</p>
  </div>
</template>

<script>
export default {
emits: ['close']
}
</script>

<style  scoped>

</style>