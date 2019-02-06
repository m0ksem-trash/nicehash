<template>
  <div class="message">
    <div class="content">
      <h4>To place a new order you need to be logged in</h4>
      <button>Register</button>
      <button>Login</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Message',
  data () {
    return {

    }
  }
}
</script>

<style scoped lang="sass">
  .message
    text-align: center
    width: 100%
    background: #e01a4f
    border-radius: 5px
    padding: 5px
    box-sizing: border-box
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14),0 3px 1px -2px rgba(0,0,0,0.12),0 1px 5px 0 rgba(0,0,0,0.2)
    .content
      display: inline-block
      h4, button
        display: inline-block
        color: white
      button
        background: none
        border: 1px solid white
        border-radius: 5px
        padding: 8px 16px
        margin: 0 5px
        font-size: 15px
        font-weight: 600
        transition: all 0.2s ease-in-out
        cursor: pointer
        &:hover
          background: rgba(255, 255, 255, 0.2)
          border: 1px solid rgba(255, 255, 255, 0.7)

</style>
