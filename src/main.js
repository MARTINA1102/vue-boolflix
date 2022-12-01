import Vue from 'vue';
import 'bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core'; // libreria icone del progetto
import { faStar } from '@fortawesome/free-solid-svg-icons'; // importiamo le icone che ci servono
import { faStar as faRegularStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'; // importazione del componente FontAwesomeIcon
import LangFlag from 'vue-lang-code-flags';
import App from './App.vue';

library.add(faStar); // aggiungiamo le icone nella libreria del progetto
library.add(faRegularStar);
Vue.component('FontAwesomeIcon', FontAwesomeIcon); // registrazione globale del componente FontAwesomeIcon per renderlo usabile in qualsiasi parte del codice senza ulteriore importazione
Vue.component('lang-flag', LangFlag);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
