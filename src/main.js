import './assets/main.css'
import './assets/theme.css'
//import 'primevue/resources/themes/aura-light-blue/theme.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import PrimeVue from 'primevue/config';
import ConfirmationService from 'primevue/confirmationservice';

const app = createApp(App)

app.use(router)
app.use(PrimeVue);
app.use(ConfirmationService);

app.use(store)


app.mount('#app')
