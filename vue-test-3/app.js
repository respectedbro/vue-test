Vue.createApp({
   data: () => ({
      myHtml: '<h1>Vue 3 app</h1>',
      title: 'Я есть Грут',
      person: {
         firstName: 'Nik',
         lastName: 'Dm',
         age: 35
      },
      items: [1, 2]
   }),
   methods: {
      addItem() {
         this.items.unshift(this.$refs.myInput.value)
         this.$refs.myInput.value
         console.log(event.key)
      },
      remove(i) {
         this.items.splice(i, 1)
      },
      log(item) {
         console.log('log item', item)
      }
   },
   computed: {
      evenItems() {
         return this.items.filter(i => i % 2 === 0)
      }
   }
}).mount('#app')
