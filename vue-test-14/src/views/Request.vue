<template>
  <app-loader v-if="loading"></app-loader>
  <app-page back title="Заявка" v-else-if="request">
<p><strong>Имя владельца</strong>: {{request.fio}}</p>
<p><strong>Телефон</strong>: {{request.phone}}</p>
<p><strong>Сумма</strong>: {{currency(request.amount)}}</p>
<p><strong>Статус</strong>: <app-status :type="request.status"/></p>
  </app-page>
  <h3 v-else class="text-center text-white">
    Заявки с ID = {{$route.params.id}} нет
  </h3>
</template>

<script>
import {ref, onMounted} from 'vue'
import {useRoute} from "vue-router";
import AppPage from "../components/ui/AppPage.vue";
import {useStore} from "vuex";
import AppLoader from "../components/ui/AppLoader.vue";
import AppStatus from "../components/ui/AppStatus.vue";
import {currency} from "../utils/currency";


export default {
  components: {AppPage, AppLoader, AppStatus},
  setup() {
    const loading = ref(true)
    const route = useRoute()
    const store = useStore()
    const request = ref({})

    onMounted(async () => {
      loading.value = true
      request.value = await store.dispatch('request/loadOne', route.params.id)
      loading.value = false
    })


    return {loading, request, currency}
  },

}
</script>

<style lang="scss" scoped>

</style>