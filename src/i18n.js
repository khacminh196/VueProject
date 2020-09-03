import Vue from 'vue'
import VueI18n from 'vue-i18n'
import viLanguage from './languages/vi.json'
import enLanguage from './languages/en.json'

Vue.use(VueI18n)

const messages = {
    'vi' : viLanguage,
    'en' : enLanguage
}

let defaultLanguage = localStorage.getItem('language') ?? 'vi'

export const i18n = new VueI18n({
    locale: defaultLanguage,
    fallbackLocale: 'vi',
    messages
})