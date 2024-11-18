<template>

  <app-alert
      v-if="alert"
      title="Работаем с Composition"
      type="primary"
      @close="close"
  ></app-alert>

  <div class="card">
    <h1>Переиспользование</h1>

<!--    <pre>{{ alert }}</pre>-->

    <button class="btn primary" @click="toggle">{{ alert ? 'Закрыть' : 'Показать' }} сообщение</button>

    <button class="btn" @click="navigate">Перейти на главную</button>
  </div>
</template>

<script>
import {useRouter, useRoute} from 'vue-router'
import AppAlert from "@/AppAlert.vue";
import {useAlert} from "@/use/alert";
import {reactive} from "vue";

export default {
  setup() {
    // const alert = reactive({
    //   type: 'warning',
    //   title: 'Reactive Alert'
    // })
    // const {alert, close, toggle} = useAlert()

    // const [simpleAlert, toggle, closeAlert] = useAlert()


    const router = useRouter()
    const route = useRoute()

    const navigate = () => router.push('/')


    return {
      navigate,
      ...useAlert(true)

      // alert,
      // toggle,
      // close
    }
  },
  components: {AppAlert}
}
</script>

<style lang="scss" scoped>

</style>