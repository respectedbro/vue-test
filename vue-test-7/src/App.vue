<template>
  <div class="container">
    <form class="card" @submit.prevent="submitHandler">
      <h1>Анкета на Vue разработчика!</h1>
<!--      <div class="form-control" :class="{invalid: errors.name}">-->
<!--        <label for="name">Как тебя зовут?</label>-->
<!--        <input-->
<!--            type="text"-->
<!--            id="name"-->
<!--            placeholder="Введи имя"-->
<!--            v-model.trim="name"-->
<!--        >-->
<!--        <small v-if="errors.name">{{ errors.name }}</small>-->
<!--      </div>-->

      <div class="form-control">

        <app-input
          placeholder="Введи имя"
          :error="errors.name"
          label=""
          v-model:value="name"
        ></app-input>

        <label for="age">Выбери возраст</label>
        <input
            type="number"
            id="age"
            v-model.number="age"
            max="70"
        >
      </div>

      <div class="form-control">
        <label for="city">Твой город</label>
        <select id="city" v-model="city">
          <option value="spb">Санкт-Петербург</option>
          <option value="msk">Москва</option>
          <option value="kzn">Казань</option>
          <option value="nsk">Новосибирск</option>
        </select>
      </div>

      <div class="form-checkbox">
        <span class="label">Готов к переезду в Токио?</span>
        <div class="checkbox">
          <label><input v-model="relocate" type="radio" name="trip" value="yes"/> Да</label>
        </div>

        <div class="checkbox">
          <label><input v-model="relocate" type="radio" name="trip" value="no"/> Нет</label>
        </div>
      </div>

      <div class="form-checkbox">
        <span class="label">Что знаешь во Vue?</span>
        <div class="checkbox">
          <label><input type="checkbox" v-model="skills" name="skills" value="vuex"/> Vuex</label>
        </div>
        <div class="checkbox">
          <label><input type="checkbox" v-model="skills" name="skills" value="cli"/> Vue CLI</label>
        </div>
        <div class="checkbox">
          <label><input type="checkbox" v-model="skills" name="skills" value="router"/> Vue Router</label>
        </div>
        <small v-if="errors.skills">{{ errors.skills }}</small>
      </div>



      <div class="form-checkbox">
        <span class="label">Правила компании</span>
        <span class="label"></span>
        <div class="checkbox">
          <label><input type="checkbox" v-model="agree"/> С правилами согласен</label>
        </div>
        <small v-if="errors.agree">{{ errors.agree }}</small>

      </div>

      <button type="submit" class="btn primary">Отправить</button>
    </form>
  </div>
</template>

<script>
import AppInput from "./AppInput.vue";
export default {
  components: {AppInput},
  data() {
    return {
      name: '',
      age: 23,
      city: 'spb',
      relocate: 'yes',
      skills: [],
      agree: false,
      errors: {
        name: null,
        agree: null,
        skills: null

      }
    }
  },
  methods: {
    formIsValid() {
      let isValid = true

      if (this.name.length === 0) {
        this.errors.name = 'Имя не может быть пустым'
        isValid = false
      } else {
        this.errors.name = null
      }

      if (this.agree === false) {
        this.errors.agree = 'Примите пользовательское соглашение'
        isValid = false
      } else {
        this.errors.agree = null
      }

      if (this.skills.length === 0) {
        this.errors.skills = 'Выберете один или несколько варантов'
        isValid = false
      }else {
        this.errors.skills = null
      }

      return isValid
    },
    submitHandler() {
      if (this.formIsValid()) {
        console.group('Form Data')
        console.log('Name:', this.name)
        console.log('Age:', this.age)
        console.log('City:', this.city)
        console.log('To Tokyo:', this.relocate)
        console.log('skills:', this.skills)
        console.log('agree:', this.agree)
        console.groupEnd()
      }

    }
  }

}
</script>

<style scoped>
.form-control small {
  color: #902f2f;
}

.form-control.invalid input {
  border-color: #902f2f;
}

.form-checkbox small {
  color: #902f2f;
}
</style>
