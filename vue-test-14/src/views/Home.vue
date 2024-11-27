<template>
  <app-page title="Список заявок">
    <template #header>
      <button class="btn primary">Создать</button>
    </template>


    <request-table :requests="[]"></request-table>
  </app-page>

</template>

<script>
import AppPage from "../components/ui/AppPage.vue";
import RequestTable from "../components/request/RequestTable.vue";

export default {
  components: {AppPage, RequestTable}
}
</script>
