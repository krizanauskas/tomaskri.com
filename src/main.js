import './assets/sass/main.scss'

import { createApp } from 'vue'

import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { CoLinkedinIn, CoGithub } from 'oh-vue-icons/icons'

addIcons(CoLinkedinIn, CoGithub)

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.component('v-icon', OhVueIcon)

app.mount('#app')
