import Vue from 'vue'
import App from './App.vue'
import { i18n } from './i18n'
import VeeValidate from 'vee-validate'
import { Validator } from 'vee-validate'
import vi from "vee-validate/dist/locale/vi";
import en from "vee-validate/dist/locale/en";

let language = i18n.locale

Validator.localize({ vi: vi, en: en });

Vue.use(VeeValidate, {
  locale : language
});

Vue.config.productionTip = false

new Vue({
  i18n,
  render: h => h(App),
}).$mount('#app')
