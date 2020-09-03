<template>
  <div id="app">
    <HeaderComponent />
    <LeftSidebar />
    <ContentComponent />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent'
import LeftSidebar from './components/LeftSidebarComponent'
import ContentComponent from './components/DashboardWrapperComponent'
export default {
  name: 'App',
  components: {
    HeaderComponent,
    LeftSidebar,
    ContentComponent
  }
}
</script>

<style>
@import 'assets/styles/vendor.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
