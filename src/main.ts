import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import _ from 'lodash';
console.log(_.chunk(['a', 'b', 'c', 'd'], 2));


createApp(App).mount('#app')
