import {createRouter, createWebHistory} from 'vue-router'





const router = createRouter({
    history: createWebHistory(), // /
    routes: [
        {path: '/login', component: Login, alias: '/'}, //localhost:port/login
        {path: '/forget', component: Forget, meta: {cantEnter: true}},
        {path: '/dashboard',
            component: Dashboard,
            name: 'home', beforeEnter() {
                console.log('beforeEnter')
            }},
        {path: '/mail', component: Mail, name: 'email', children: [
                {path: ':mailId', component: AppEmailBody, props: true}
            ]
        },
        {path: '/:notFound(.*)', component: NotFound}
    ],
    linkActiveClass: 'active',
    linkExactActiveClass: 'active'
})



export default router