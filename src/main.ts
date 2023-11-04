import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router'

import DevUI from 'vue-devui';
import 'devui-theme/styles-var/devui-var.scss'
import 'vue-devui/style.css';
import '@devui-design/icons/icomoon/devui-icon.css';
import { ThemeServiceInit, infinityTheme } from 'devui-theme';

ThemeServiceInit({ infinityTheme }, 'infinityTheme');

createApp(App).use(router).use(DevUI).mount('#app');
