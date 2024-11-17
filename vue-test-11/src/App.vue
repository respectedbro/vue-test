<template>
  <div class="container">
    <div class="card">
      <h1>Vue Composition Api</h1>
      <small>Data, methods, computed, watch</small>
      <div class="form-control">
        <input type="text" v-model="firstName">
      </div>

      <button class="btn" @click="change">Изменить</button>
    </div>


    <framework-info
        @change-version="changeVersion"
        class="test-from-app"
    >
      <template>
        <p>This is footer</p>
      </template>
    </framework-info>
  </div>
</template>

<script>
import {
  ref,
  reactive,
  toRefs,
  isRef,
  isReactive,
  computed,
  watch,
  provide,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted
} from 'vue'
import FrameworkInfo from "@/FrameworkInfo.vue";

export default {
  setup() {
    const name = ref('VueJS')
    const version = ref(3)
    const textInput = ref(null)
    const firstName = ref('')

    const framework = reactive({
      name: 'VueJS',
      version: 3
    })

    console.log('created')


    onBeforeMount(() => {
      console.log('onBeforeMount')
    })

    onMounted(() => {
      console.log('onMounted')
    })

    onBeforeUpdate(() => {
      console.log('onBeforeUpdate')
    })

    onUpdated(() => {
      console.log('onUpdated')
    })



    watch(firstName, (newValue, oldValue) => {

      console.log(newValue)
      console.log(oldValue)
    })

    function changeInfo() {
      name.value = 'Vue JS !'
      version.value = 42
    }

    function changeVersion(num) {
      version.value = num
    }

    provide('name', name)
    provide('version', version)

    return {
      change: changeInfo,
      firstName,
      changeVersion,
    }
  },

  components: {FrameworkInfo}
}
</script>