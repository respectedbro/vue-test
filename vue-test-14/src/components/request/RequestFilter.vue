<template>
  <div class="filter">
    <div class="form-control">
      <input type="text" placeholder="Начтине писать имя" v-model="name">
    </div>
    <div class="form-control">
      <select v-model="status">
        <option disabled selected>Выберите статус</option>
        <option value="done">Завершен</option>
        <option value="cancelled">Отменён</option>
        <option value="active">Активен</option>
        <option value="pending">Выполняется</option>
      </select>
    </div>

  </div>
</template>

<script>
import {ref, watch} from "vue";

export default {
  emits: ['update:modelValue'],
  props: ['modelValue'],
  setup(_, {emit}) {
    const name = ref()
    const status = ref()

    watch([name, status], values => {
      emit('update:modelValue', {
        name: values[0],
        status: values[1]
      })
    })

    return {
      name,
      status
    }
  }
}
</script>

<style lang="scss" scoped>

</style>