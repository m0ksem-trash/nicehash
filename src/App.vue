<template>
  <div id="app">
    <header>
      <Header/>
    </header>
    <router-view/>
    <footer>
      <Footer/>
    </footer>
    <Background/>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import Background from './components/Background'

export default {
  name: 'App',
  components: {
    Header, Footer, Background
  }
}
</script>

<style lang="sass">
button, select, option, li, h1, h2, h3, h4
  font-family: 'Avenir', Helvetica, Arial, sans-serif
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  z-index: 10
body
  margin: 0
  padding: 0
  background: #121c2d
.background
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 100%
  z-index: -1
</style>
