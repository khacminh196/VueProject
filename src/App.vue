<template>
  <div id="app">
    <HeaderComponent v-on:changeLang="changeLanguage" :languages="languages" />
    <LeftSidebar />
    <ContentComponent />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">\
   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  </div>
</template>

<script>

import HeaderComponent from './components/HeaderComponent'
import LeftSidebar from './components/LeftSidebarComponent'
import ContentComponent from './components/DashboardWrapperComponent'
import { i18n } from './i18n'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    LeftSidebar,
    ContentComponent
  },
  data() {
    return {
      languages : [
        {
          "key" : "vi",
          "name" : "Tiếng Việt",
        },
        {
          "key" : "en",
          "name" : "English"
        }
      ],
    }
  },
  methods: {
    changeLanguage(language) {
      localStorage.setItem('language', language);
      i18n.locale = language
    }
  },
}
</script>

<style>
  @import 'assets/styles/vendor.css';
</style>
