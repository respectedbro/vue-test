<template>
  <form>
    <div class="form-control" :class="{invalid: fError}">
      <label for="fio">ФИО</label>
      <input type="text" id="fio">
      <small v-if="fError">{{fio}}</small>
    </div>

    <div class="form-control">
      <label for="phone">Телефон</label>
      <input type="text" id="phone">
    </div>

    <div class="form-control">
      <label for="amount">Сумма</label>
      <input type="number" id="amount">
    </div>

    <div class="form-control">
      <label for="amount">Статус</label>
      <select id="status">

      </select>
    </div>

  </form>
</template>

<script>
import {useRequestForm} from "@/use/request-form";
export default {
  setup() {
    return {
       ...useRequestForm()
    }
  }
}
</script>

<style lang="scss" scoped>

</style>