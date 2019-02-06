<template>
  <div class="marketplace">
    <div class="container">
      <div class="controls">
        <h2>Live marketplace</h2>
        <p>for</p>
        <div class="select">
          <select>
            <option>SHA256</option>
            <option>X11</option>
          </select>
        </div>
      </div>
      <Message />
      <div class="tables">
        <Table server="EU"/>
        <Table server="USA"/>
      </div>
      <div class="tips">
        <a>
          <span class="symbol">F</span>
          <p> - Fixed order</p>
        </a>
        <a>
          <span class="symbol">S</span>
          <p> - Standart order</p>
        </a>
        <a>
          <span class="symbol dead">D</span>
          <p> - Dead order</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Message from './Message'
import Table from './Table'

export default {
  name: 'Header',
  data () {
    return {

    }
  },
  components: {
    Message, Table
  }
}
</script>

<style lang="sass">
  .marketplace
    width: 100%
    padding: 25px 0
    .container
      position: relative
      max-width: 1024px
      margin: auto
      .controls
        white-space: nowrap
        padding: 10px 0
        h2, p, .select
          margin: 0
          display: inline-block
          vertical-align: middle
          color: white
        .select
          padding: 10px
          border: 1px solid rgba(255, 255, 255, 0.3)
          border-radius: 5px
          position: relative
          &:after
            content: 'V'
            position: absolute
            top: 50%
            right: 16px
            transform: translateY(-50%)
            z-index: -1
            font-size: 12px
            font-weight: 700
          select
            background: none
            border: none
            min-width: 100px
            font-weight: 500
            appearance: none
            color: white
            option
              font-weight: 500
              color: black
        p
          margin: 0 10px
          font-size: 18px
      .message
        margin: 40px 0
      .tables
        white-space: nowrap
        .table
          width: 50%
          display: inline-block
      .tips
        text-align: center
        a
          line-height: 18px
          color: rgba(255, 255, 255, 0.5)
        a, p, .symbol
          display: inline-block
          vertical-align: middle
        .symbol
            box-sizing: border-box
            display: inline-block
            padding: 1px 0
            width: 17px
            height: 17px
            line-height: 15px
            border-radius: 50%
            text-align: center
            background: rgba(255, 255, 255, 0.1)
            font-weight: 700
            font-size: 14px
            color: rgba(255, 255, 255, 0.3)
            cursor: pointer
            &.dead
              background: rgba(244, 91, 105, 0.3)
              text-align: center
              padding-left: 1.5px
</style>
