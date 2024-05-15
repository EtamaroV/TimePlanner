import './assets/main.css'
import './assets/theme.css'
//import 'primevue/resources/themes/aura-light-blue/theme.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import PrimeVue from 'primevue/config';
import ConfirmationService from 'primevue/confirmationservice';
import Ripple from 'primevue/ripple';

const app = createApp(App)

app.use(router)
app.use(PrimeVue, { ripple: true });
app.use(ConfirmationService);
app.directive('ripple', Ripple);

app.use(store)


app.mount('#app')
