import Vue from 'vue';
import App from './App.vue';
import '../plugins/mask'

new Vue({ 
  render: h => h(App) 
}).$mount('#app');