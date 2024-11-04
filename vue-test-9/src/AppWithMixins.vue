<template>
  <div class="container">
    <app-alert
        v-if="alert"
        text="It's really important message"
        title="Warning!"
        type="danger"
        closable
        @close="alert = false"
    ></app-alert>

    <div class="card">
      <button class="btn primary" @click="toggleAlert">{{alert ? 'Скрыть' : 'Показать'}} сообщение</button>
    </div>


    <app-block></app-block>
  </div>
</template>

<script>
import AppAlert from "./components/AppAlert.vue";
import AppBlock from "./components/AppBlock.vue";
import alertMixin from "./alertMixin";

export default {
  components: {AppAlert, AppBlock},
  mixins: [alertMixin],
}
</script>

