import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import AnimateOnScroll from 'primevue/animateonscroll';
import ToastPlugin from 'vue-toast-notification';
// Import the CSS or use your own!
import 'vue-toast-notification/dist/theme-bootstrap.css';

const app = createApp(App)
app.use(PrimeVue);
app.use(ToastPlugin);
app.directive('animateonscroll', AnimateOnScroll);
app.mount('#app')
