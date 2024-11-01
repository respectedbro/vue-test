<template>
  <div class="container">
    <form class="card" @submit.prevent="createPerson">
      <h2>Работа с базой данных</h2>

      <div class="form-control">
        <label for="name">Введите имя</label>
        <input type="text" id="name" v-model.trim="name">
      </div>

      <button class="btn primary" :disabled="name.length === 0">Создать</button>
    </form>

    <app-people-list
        :people="people"
        @load="loadPeople"
    ></app-people-list>
  </div>
</template>

<script>
import AppPeopleList from "./AppPeopleList.vue";
import axios from 'axios'

export default {
  components: {AppPeopleList},

  data() {
    return {
      name: '',
      people: [],
    }
  },
  methods: {
    async createPerson() {

      const response = await fetch('https://vue-min-http-default-rtdb.firebaseio.com/people.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName: this.name
        })
      })

      const firebaseData = await response.json()

      console.log(firebaseData)
      this.name = ''
    },
   async loadPeople() {
   const {data} = await axios.get('https://vue-min-http-default-rtdb.firebaseio.com/people.json')
     this.people = Object.keys(data).map(key => { // [safdsfhfsghfdh] [sadfsgfsdgdh] объект -> в массив
       return {
         id: key,
         firstName: data[key].firstName // ...data[key] если много ключей (получим то же самое)
       }
     })
    }
  }
}
</script>

<style>

</style>
