import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import mica from '../packages'
const app = createApp(App);

app.use(mica);
app.mount('#app')
