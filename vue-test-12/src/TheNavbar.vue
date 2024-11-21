<template>
  <header class="navbar">
    <strong>Счётчик {{ counter }}</strong>

    <button class="btn" @click="add">Добавить 5</button>
  </header>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'

export default {
  computed: {
    // counter() {
    //   return this.$store.getters.counter
    // },
    // ниже строчка повторяет весь функционал с помощью vuex mapеров:
    ...mapGetters('count',['counter'])
  },
  methods: {
    ...mapMutations({
      addFive: 'count/add'
    }),
    add() {
      this.addFive({
        value: 5
      })
      // this.add({value: 5})
      // this.$store.commit('add', {
      //   value: 5
      // })
// тоже самое, но другой стиль:
//       this.$store.commit({
//         type: 'add',
//         value: 5
//       })
    }
  }
}
</script>
