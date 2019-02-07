<template>
  <div class="logo">
    <div class="img">
      🤑
    </div>
    <div class="text">
      <h1>Nice<strong>Hash</strong></h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {

    }
  }
}
</script>

<style lang="sass">
.logo
  .img, .text
    display: inline-block
    vertical-align: middle
  .text
    h1
      margin: 0
      font-weight: 100
      color: white
      strong
        font-weight: 600
  .img
    line-height: 60px
    font-size: 47px
    color: #f3b61f
</style>
