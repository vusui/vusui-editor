import { createApp } from 'vue';
import App from './App.vue';
import VusuiEditor from './components/VusuiEditor.vue';

const app = createApp(App);
app.component(VusuiEditor.name, VusuiEditor);
app.mount('#app');
