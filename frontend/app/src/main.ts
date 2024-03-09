import { createApp } from 'vue'
import App from './App.vue'
import ToDoList from './views/ToDoList.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    { path: "/", component:  ToDoList}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

const app = createApp(App)
app.use(router)

app.mount('#app')
