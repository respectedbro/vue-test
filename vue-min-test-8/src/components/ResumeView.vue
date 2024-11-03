<template>
  <div class="card card-w70">
    <template v-if="blocks.length">
      <component
          v-for="block in blocks"
          :key="block.id"
          :is="'resume-' + block.type"
          v-bind="{value: block.value}"
      ></component>
    </template>
    <h3 v-else>Добавьте первый блок, чтобы увидеть результат</h3>
  </div>
</template>

<script>
import ResumeTitle from "@/components/parts/ResumeTitle.vue";
export default {
  components: {ResumeTitle},
  props: ['blocks'],
}
</script>

<style lang="scss" scoped>

</style>