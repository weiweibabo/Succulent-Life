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

<style>
* {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-weight: inherit;
  font-style: inherit;
  font-size: 100%;
  font-family: inherit;
  vertical-align: baseline;
  text-decoration: none;
  font-family: 'Josefin Sans', sans-serif;
}
</style>
