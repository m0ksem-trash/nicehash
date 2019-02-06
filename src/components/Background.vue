<template>
  <div class="background">
    <canvas ref="bg"></canvas>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {

    }
  },
  mounted () {
    this.context = this.$refs.bg.getContext('2d')
    this.$refs.bg.height = window.innerHeight
    this.$refs.bg.width = window.innerWidth
    this.height = window.innerHeight
    this.width = window.innerWidth
    this.xOffset = 0
    this.yOffset = 0
    iconSize = 48
    iconSpacing = 128
    this.createIcons()
    this.draw()
  },
  methods: {
    createIcons: function () {
      let letters = ['X', 'A', 'B', 'C', 'J', 'M', 'N']
      this.icons = []
      for (let x = 0; x < this.width + iconSize + iconSpacing; x += iconSize + iconSpacing) {
        for (let y = 0; y < this.height + iconSize + iconSpacing; y += iconSize + iconSpacing) {
          this.icons.push(new Icon(x, y, letters[Math.floor(Math.random() * letters.length)]))
        }
      }
    },
    draw: function () {
      requestAnimationFrame(this.draw)
      this.context.clearRect(0, 0, this.width, this.height)
      this.context.font = "48px Arial"
      this.context.fillStyle = "#42f2f7"
      for (let i = 0; i < this.icons.length; i++) {
        const element = this.icons[i]
        element.x += 0.1
        element.y += 0.1
        element.update()
        // this.context.fillStyle = "white"
        // this.context.fillRect(element.x, element.y, iconSize, iconSize)
        this.context.fillText(element.icon, element.x + iconSize / 2 - 16, element.y + iconSize / 2 + 16)
      }
    }
  }
}

let iconSize = 48
let iconSpacing = 92

class Icon {
  constructor (x, y, icon) {
    this.x = x
    this.y = y
    this.icon = icon
  }
  update () {
    if (this.x > (iconSize + iconSpacing) * ( 1 + Math.floor(window.innerWidth / (iconSize + iconSpacing)))) {
      this.x = -iconSize - iconSpacing
    } else if (this.x < -iconSize - iconSpacing) {
      this.x = window.innerWidth + iconSize
    }

    if (this.y > (iconSize + iconSpacing) * ( 1 + Math.floor(window.innerHeight / (iconSize + iconSpacing)))) {
      this.y = -iconSize - iconSpacing
    } else if (this.y < -iconSize - iconSpacing) {
      this.y = window.innerHeight + iconSize
    }
  }
}
</script>

<style scoped lang="sass">
  canvas
    opacity: 0.3
</style>
