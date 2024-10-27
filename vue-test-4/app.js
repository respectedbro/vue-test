const h = Vue.h


const app = Vue.createApp({
   data() {
      return {
         title: 'Это из Template'
      }
   },
   methods: {
      changeTitle() {
         console.log(this)
         this.title = 'Изменено'
      }
   },
// template: `
// <div class="card center">
// <h1>{{title}}</h1>
// <button class="btn" @click="title='Изменено'">Изменить</button>
// </div>
// `
   render() {
      return h('div', {
         class: 'card center'
      }, [
         h('h1', {}, this.title),
 h('button', {
    class: 'btn',
    onclick: this.changeTitle
 }, 'Изменено')
      ])
   },
   beforeCreate() {
      console.log('beforeCreate')
   },
  created() {
      console.log('Created')
   },
  beforeMount() {
      console.log('beforeMount')
   },
  mounted() {
      console.log('mounted')
   },
  beforeUnmount() {
      console.log('beforeUnmount')
   },
  unmounted() {
      console.log('unmounted')
   },
  beforeUpdate() {
      console.log('beforeUpdate')
   },
  updated() {
      console.log('updated')
   },
})

app.mount('#app')

Vue.createApp({
   data() {
      return {
         title: 'New title 2'
      }
   }
}).mount('#app2')

// setTimeout(() => {
//    app.unmount()
// }, 2000)

// ======

let title = 'Vue 3'
let message = 'Заголовок это: ' + title

// console.log(message)
//
// title = 'Angular 10'
//
// console.log(message)

const data = {
   title: 'Vue 3',
   message: 'Заголовок это: Vue 3'
}

const proxy = new Proxy(data, {
   // get(target, p, receiver) {
   //    console.log(target)
   //    console.log(p)
   // },

   set(target, key, value) {
     if (key === 'title') {
        target.message = 'Заголовок это: ' + value
     }
     target[key] = value
   }
})

proxy.title = 'Angular 10'

// console.log(proxy)
