import Vue from 'vue';
import App from './App.vue';
import '@/tools/electron-tools';
import '@/assets/scss/_reset.scss';

new Vue({
  render: h => h(App),
}).$mount('#app');