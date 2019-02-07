<template>
  <div class="table">
    <div class="table_header">
      <div class="hints">
        <div class="hint">
          SERVER
        </div>
        <div class="hint">
          TOTAL SPEED
        </div>
      </div>
      <div class="values">
        <div class="value">{{ server }}</div>
        <div class="value">{{ speed }} TH/s</div>
      </div>
    </div>
    <table>
      <thead>
        <tr>
          <td>
            ORDER
          </td>
          <td>
            PRICE <span class="mesure">BTC</span>
          </td>
          <td>
            Limit <span class="mesure">TH/s</span>
          </td>
          <td>
            Miners
          </td>
          <td>
            Speed <span class="mesure">TH/s</span>
          </td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="d in data" :key="d.id" :class="{'fixed': d.status == 0}">
          <td>
            <span class="status" v-if="d.status == 0" title="Fixed">F</span>
            <span class="status" v-if="d.status == 1" title="Standart">S</span>
            <span class="status dead" v-if="d.status == 2" title="Dead">D</span>
            {{ d.order }}
          </td>
          <td>{{ d.price }} </td>
          <td>{{ d.limit }} </td>
          <td>{{ d.miners }}</td>
          <td>{{ d.speed }} </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Table',
  props: [
    'server'
  ],
  data () {
    return {
      speed: 'N/A',
      data: [
      ]
    }
  },
  mounted () {
    for (let i = 0; i < 50; i++) {
      const element = {}
      element.order = '#' + Math.floor(Math.random() * 100000)
      element.price = Math.floor(Math.random() * 1000) / 1000
      element.limit = Math.floor(Math.random() * 100) / 1000
      element.miners = Math.floor(Math.random() * 100)
      element.speed = Math.floor(Math.random() * 100 + 100) / 1000
      element.status = Math.floor(Math.random() * 3)
      this.$data.data.push(element)
    }
    this.$data.data.sort(function (a, b) {
      return a.status - b.status
    })
  }
}
</script>

<style lang="sass">
  .table
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14),0 3px 1px -2px rgba(0,0,0,0.12),0 1px 5px 0 rgba(0,0,0,0.2)
    &_header
      background: #4263eb
      padding: 16px 16px 10px 16px
      box-sizing: border-box
      border-top-left-radius: 5px
      border-top-right-radius: 5px
      .hints, .values
        text-align: justify
        white-space: nowrap
        font-size: 0
      .hint, .value
        display: inline-block
        width: 50%
        vertical-align: middle
      .hint
        font-size: 14px
        color: rgba(255, 255, 255, 0.7)
      .value
        font-size: 16px
        color: rgba(255, 255, 255, 1)
        font-weight: 700
      .hint:last-child, .value:last-child
        text-align: right
    table
      width: 100%
      padding: 0
      margin: 0
      border-spacing: 0 0
      background: #272838
      padding-bottom: 10px
      border-bottom-left-radius: 5px
      border-bottom-right-radius: 5px
      td
        text-align: right
        &:first-child
          text-align: left
        &:first-child, &:last-child
          padding: 0 15px
      thead
        background: rgba(66, 99, 235, 0.5)
        border: none
        height: 30px
        line-height: 28px
        td
          text-transform: uppercase
          font-size: 12px
          color: rgba(255, 255, 255, 0.7)
          line-height: 20px
          height: 20px
          .mesure
            color: rgba(255, 255, 255, 0.5)
            font-size: 10px
            padding: 2px
            background: rgba(255, 255, 255, 0.1)
      tbody
        tr:first-child
          td
            height: 32px
            vertical-align: bottom
            padding-bottom: 2px
        tr.fixed
          background: rgba(0, 0, 0, 0.1)
        .fixed:last-child
          background: red
        td
          font-size: 16px
          color: rgba(255, 255, 255, 0.5)
          height: 22px
          .status
            box-sizing: border-box
            display: inline-block
            width: 18px
            height: 18px
            line-height: 18px
            border-radius: 50%
            text-align: center
            background: rgba(0, 0, 0, 0.1)
            font-weight: 700
            font-size: 14px
            color: rgba(255, 255, 255, 0.3)
            cursor: pointer
            user-select: none
            padding: 0 2px 0 0
            &.dead
              background: rgba(244, 91, 105, 0.3)
              text-align: center
              padding: 0
</style>
