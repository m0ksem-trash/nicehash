<template>
  <div class="header">
    <div class="container">
      <div class="left">
        <Logo />
      </div>
      <div class="right">
        <li><a>Home</a></li>
        <a><li><a>Abouts</a></li></a>
        <li><a>For sellers</a></li>
        <li><a>For buyers</a></li>
        <li><a>Help</a></li>
        <li><a>Register</a> / <a>Login</a></li>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from './Logo'
export default {
  name: 'Header',
  components: {
    Logo
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped lang="sass">
  .header
    height: 90px
    border-bottom: 1px solid rgba(0, 0, 0, 0.3)
    background: rgba(18, 28, 45, 0.9)
    .container
      position: relative
      height: 90px
      line-height: 90px
      max-width: 1024px
      margin: auto
    .left
      float: left
    .right
      float: right
    .right
      li
        list-style: none
        display: inline-block
        padding: 0 15px
        color: rgba(255, 255, 255, 0.5)
        cursor: pointer
        translate: all 0.3s ease-in-out
        font-weight: 500
      a
        &:hover
          color: rgba(255, 255, 255, 0.7)
</style>
