<template>
  <div id="app">
    <header-row />
    <router-view />
    <footer-row />
  </div>
</template>

<script>
import HeaderRow from './components/HeaderRow';
import FooterRow from './components/FooterRow';

export default {
  name: 'App',
  components: {
    HeaderRow,
    FooterRow,
  },
};
</script>

<style></style>
