<script>
import HeaderComponent from './components/HeaderComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
  },
}
</script>

<template>
  <div id="app">
    <!-- Header with Search, Menu, Navigation -->
    <HeaderComponent />

    <!-- Router View - displays the current route component -->
    <RouterView />
  </div>
</template>

<style>
/* Global styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Quicksand', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  background-color: #f8f9fa;
}

#app {
  width: 100%;
  min-height: 100vh;
}

/* Optional: Navigation styles (if you add nav later) */
/*
nav {
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  gap: 20px;
  justify-content: center;
}

nav a {
  text-decoration: none;
  color: #253d4e;
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 5px;
  transition: all 0.3s ease;
}

nav a:hover {
  background-color: #def9ec;
  color: #3bb77e;
}

nav a.router-link-active {
  background-color: #3bb77e;
  color: #fff;
}
*/
</style>
