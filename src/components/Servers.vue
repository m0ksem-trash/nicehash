<template>
  <div class="servers status">
    <div class="col" v-for="col in servers" :key="col.id">
      <div v-for="server in col" :key="server.id" class="server">
        <div class="status" :class="{'on': server.status, 'off': !server.status}"></div>
        <span class="location">{{ server.location }}</span>
        <span>{{ server.city }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      servers: [
        [
          {
            location: 'Europe', city: 'Amsterdam', status: true
          },
          {
            location: 'China', city: 'Hong Kong', status: true
          },
          {
            location: 'India', city: 'Chennai', status: true
          }
        ],
        [
          {
            location: 'USA', city: 'San Jose', status: false
          },
          {
            location: 'Japan', city: 'Tokyo', status: true
          },
          {
            location: 'Brazil', city: 'Sao Paulo', status: false
          }
        ]
      ]
    }
  }
}
</script>

<style lang="sass">
  .servers
      .col
        display: inline-block
        width: 50%
        .server
          color: rgba(255, 255, 255, 0.5)
          height: 24px
          line-height: 24px
          margin: 10px 0
          .status
            display: inline-block
            height: 14px
            width: 14px
            vertical-align: middle
            border-radius: 50%
            margin-right: 10px
            &.on
              background: #2ecc71
            &.off
              background: #ee4266
          span
            display: inline-block
            vertical-align: middle
            font-size: 14px
            font-weight: 600
          .location:after
            content: '-'
            user-select: none
            margin-left: 5px
            margin-right: 2px

</style>
