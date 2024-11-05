<template>
  <div class="container">
    <div class="card">
      <h2>{{ $i18n('app.title') }}</h2>

      <button class="btn" @click="changeLang">{{ $i18n('app.changeBtn') }}</button>
      <button class="btn primary" @click="modal = true">Open modal</button>

      <teleport to="body">
        <app-modal
            v-if="modal"
            @close="modal = false"
        ></app-modal>
      </teleport>
    </div>
  </div>
</template>

<script>
import AppModal from "./components/AppModal.vue";

export default {
  components: {AppModal},
  inject: ['changeI18n'],
  data() {
    return {
      modal: false
    }
  },
  methods: {
    changeLang() {
      this.changeI18n('en')
      this.$forceUpdate()
    }
  }
}
</script>

