<template>
  <div class="footer">
    <div class="container">
      <div class="top links">
        <div class="col 4">
          <div class="header">
            <h4>Sellers</h4>
          </div>
          <ul>
            <li><a>Sell hashing power</a></li>
            <li><a>Mining with CPU/GPU</a></li>
            <li><a>ASIC mining</a></li>
            <li><a>Mining farms</a></li>
            <li><a>NiceHash Miner</a></li>
            <li><a>Algorithms</a></li>
            <li><a>Find miner</a></li>
            <li><a>Latest payments</a></li>
            <li><a>Profitability calculator</a></li>
          </ul>
        </div>
        <div class="col 4">
          <div class="header">
            <h4>Buyers</h4>
          </div>
          <ul>
            <li><a>Buy hashing power</a></li>
            <li><a>Live marketplace</a></li>
            <li><a>Pricing</a></li>
            <li><a>Compatible Pools</a></li>
          </ul>
          <div class="header">
            <h4>Development</h4>
          </div>
          <ul>
            <li><a>Pool operators</a></li>
            <li><a>Software developers</a></li>
            <li><a>APIs</a></li>
          </ul>
        </div>
        <div class="col 4">
          <div class="header">
            <h4>NiceHash</h4>
          </div>
          <ul>
            <li><a>About</a></li>
            <li><a>Business development</a></li>
            <li><a>Fees</a></li>
            <li><a>Media</a></li>
            <li><a>News</a></li>
            <li><a>Jobs</a></li>
            <li><a>Referrals</a></li>
            <li><a>Help</a></li>
            <li><a>Status</a></li>
          </ul>
        </div>
        <div class="col 4">
          <div class="header">
            <h4>Find us on</h4>
          </div>
          <ul>
            <li><a>Facebook</a></li>
            <li><a>Twitter</a></li>
            <li><a>VK</a></li>
            <li><a>Reddit</a></li>
            <li><a>YouTube</a></li>
            <li><a>GitHub</a></li>
            <li><a>BitcoinTalk</a></li>
            <li><a>Discord</a></li>
          </ul>
        </div>
      </div>
      <div class="separator"></div>
      <div class="bottom">
        <div class="left">
          <Logo/>
          <div class="underlogo">
            <a>Copyright © 2014 - 2019</a>
            <a>Privacy Policy</a>
            <a>Terms and Conditions</a>
            <a>Contact</a>
          </div>
          <div class="language">
            <span>Language:</span>
            <a>English</a>
            <a>Русский</a>
            <a>中文</a>
          </div>
        </div>
        <div class="right">
          <div class="header">
            <h4>Sellers</h4>
          </div>
          <Servers/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from './Logo'
import Servers from './Servers'

export default {
  name: 'Footer',
  components: {
    Logo, Servers
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="sass">
  .footer
    width: 100%
    background: rgba(0, 0, 0, 0.2)
    .container
      max-width: 1024px
      margin: auto
      padding: 15px 0 25px 0
      h4
        margin: 0
        padding: 10px 0
        color: white
        user-select: all
      .links
        white-space: nowrap
        .col
          display: inline-block
          width: 25%
          white-space: normal
        .col
        vertical-align: top
        ul
          list-style: none
          padding: 0
          margin: 0
          li
            color: rgba(255, 255, 255, 0.5)
            padding: 3px 0
            cursor: pointer
            font-size: 14px
            font-weight: 500
            font-weight: 600
            &:hover
              color: rgba(255, 255, 255, 0.7)
      .separator
        border-top: 1px solid rgba(255, 255, 255, 0.5)
        width: 100%
        margin: 25px 0
      .bottom
        white-space: nowrap
        .left, .right
          display: inline-block
          vertical-align: top
          white-space: normal
          width: 50%
        .left
          .logo
            margin: 0px 0 15px -6px
          .language, .underlogo
            color: rgba(255, 255, 255, 0.5)
          .underlogo
            a
              margin-left: -5px
              font-size: 14px
              font-weight: 500
              cursor: pointer
              &:after
                content: '-'
                user-select: none
                margin: 8px
              &:first-child
                margin-left: 0
              &:last-child
                &:after
                  display: none
          .language
            font-size: 14px
            a
              cursor: pointer
              &:after
                content: '-'
                margin: 8px
                user-select: none
              &:last-child
                &:after
                  display: none
</style>
