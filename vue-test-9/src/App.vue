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
  </div>
</template>

<script>
import AppAlert from "./components/AppAlert.vue";

export default {
  components: {AppAlert},

  data() {
    return {
      alert: false,
    }
  },
  methods: {
    toggleAlert() {
      this.alert = !this.alert
    }
  }
}
</script>

