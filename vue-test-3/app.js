Vue.createApp({
    data: () => ({
        myHtml: '<h1>Vue 3 app</h1>',
        title: 'Я есть Грут',
        person: {
            firstName: 'Nik',
            lastName: 'Dm',
            age: 35
        },
        items: [1, 2, 3, 4, 5, 6]
    })
}).mount('#app')
