<template>
  <div id="app">
    <div class="start" @click="start">
      Start
    </div>
    <div class="fan">
      <div class="inner"></div>
    </div>
    <div class="wheel">
        <div class="innerWheel">
          <div class="sector" v-for="(value, index) in prize1" :style="drawFan(index, prize1)" :key="index">
            <div class="content" :style="drawContent(index, prize1)">
                <div v-if="index == '0'" class="prize-text">{{value.prize}}</div>
                <div v-if="index == '1'" class="prize-text2">{{value.prize}}</div>
                <div v-if="index == '2'" class="prize-text3">{{value.prize}}</div>
                <div v-if="index == '3'" class="prize-text4">{{value.prize}}</div>
              </div>
          </div>
        </div>
    </div>
    <div class="hours-hand" :style="{'transition':transitionTime}">
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      transitionTime: '2.5s', // 指針旋轉動畫秒數
      clickable: true,
      prize1: [], // 抽獎資訊
      Deg: 0, // 旋轉角度
      prizeContent: '', // 中獎項目
      total1: 10 // 獎品總數
    }
  },
  methods: {
    drawFan (index, prize) {
      // 依抽獎項目數量推算一面扇形的面積
      const deg = 360 / prize.length
      const tilt = -deg
      // 傳回旋轉與變形角度
      return `transform:rotate(${tilt + index * deg}deg)`
    },
    // 渲染文字  rotate(90deg) translate(100px, 35px)
    drawContent (index, prize) {
      // 依抽獎項目數量推算一面扇形上獎品項目數量的面積
      const deg = 360 / prize.length
      // 處理傾斜與變形
      const translate = prize.length > 10 ? 'translate(10px, 180px)' : 'translate(100px, 35px)'
      return `transform:rotate(${deg}deg)${translate}`
    },
    // 剩餘獎項陣列，獎品抽完(數量number=0)不列入計算
    generateIndex (prize) {
      const indexArray = []
      for (let i = 0; i < prize.length; i++) {
        if (prize[i].number !== 0) indexArray.push(i)
      }
      return indexArray
    },
    // 依中獎機率產生亂數
    getRandom (prize, total) {
      const index = this.generateIndex(prize)
      // 依中獎機率產生亂數
      const num = Math.floor((Math.random() * total) / (total / index.length))
      // 回傳剩餘獎項陣列[隨機數字]，以得到正確的獎項。
      return index[num]
    },
    start () {
      if (this.clickable === false) return
      this.clickable = false
      this.transitionTime = '2.5s'
      // 隨機亂數
      // let random = 0
      // 轉2圈
      const circle = 3
      // 中獎內容
      let prizeContent = ''
      // 機率取抽獎亂數
      const random = this.getRandom(this.prize1, this.total1)
      // 每個獎項的扇形角度
      const deg = 360 / this.prize1.length
      // 旋轉角度 轉x圈+亂數*單一獎項扇形角度
      const rotate = circle * 360 + random * deg
      // 總共旋轉角度(之前停下的角度也要列入計算)
      this.Deg += rotate - (this.Deg % 360) - 45
      // 中獎商品名稱
      prizeContent = this.prize1[random].prize // eslint-disable-line no-unused-vars
      document.querySelector('.hours-hand').style.transform = `rotate(${this.Deg}deg)`
      // 畫面顯示中獎
      const sectors = document.querySelectorAll('.sector')
      // 清除之前中獎樣式
      sectors.forEach((value) => {
        value.classList.remove('active')
      })
      // 旋轉動畫並停在獎品上
      document.querySelector('.hours-hand').style.transform = `rotate(${this.Deg}deg)`
      // 停在獎品上後顯示中獎項目
      const vm = this
      setTimeout(function () {
        vm.prizeContent = prizeContent
        sectors[random].classList.add('active')
        // 抽獎資料扣除已中獎商品
        if (vm.prize1[random].number > 0) {
          vm.prize1[random].number -= 1
          vm.total1 -= 1
        }
        vm.clickable = true
      }, 2500)
      setTimeout(function () {
        alert('恭喜您抽中: ' + prizeContent)
        if (vm.total1 === 0) {
          vm.reset()
        }
      }, 2800)
    },
    // 重新開始
    reset () {
      // console.log('111111111')
      const vm = this // eslint-disable-line no-unused-vars
      confirm('是否重置獎品數量?')
      // 清空陣列(已變動數量)
      this.prize1 = []
      // 重新取得資料
      this.getJSON()
      // 重新開始指針歸零 不需要動畫
      this.transitionTime = '0s'
      this.Deg = -45
      this.total1 = 10
      document.querySelector('.hours-hand').style.transform = `rotate(${this.Deg}deg)`
    },
    getJSON () {
      // 取得獎品資料
      const vm = this
      // 取得抽獎資料
      fetch('db.json').then(response => {
        // console.log(response)
        return response.json()
      }).then(response => {
        vm.prize1 = response
      })
    }
  },
  mounted: function () {
    // 載入後取得資料
    this.getJSON()
  }
}
</script>

<style lang="scss">
$color-btn: #3d3e3f;
$color-dark: #facdcd;
$color-light: #fc5f60;

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  box-sizing: border-box;
}

.start {
  width: 100px;
  height: 70px;
  background-color: #fff;
  text-align: center;
  line-height: 70px;
  $color-btn: black;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  z-index: 2;
  border: 0;
  font-size: 18px;
}

.wheel {
  width: 400px;
  height: 400px;
  background-color: $color-dark;
  overflow: hidden;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  .innerWheel{
    .sector{
      border: 1px solid #fff;
      width: 50%;
      height: 50%;
      position: absolute;
      overflow: hidden;
      top: 0;
      right: 0;
      transform-origin: left bottom;
        background-color: $color-dark;
      &.active {
        background-color: $color-light;
      }
    }
    .content {
      .prize-text{
        color: #fff;
        font-size: 18px;
      }
      .prize-text2{
        color: #fff;
        transform: rotate(270deg) translate(10px, 24px);
        font-size: 18px;
      }
      .prize-text3{
        color: #fff;
        transform: rotate(180deg) translate(-25px, 4px);
        font-size: 18px;
      }
      .prize-text4{
        color: #fff;
        transform: rotate(90deg) translate(-35px, -20px);
        font-size: 18px;
      }
    }
  }
}
  .hours-hand {
  width: 0.2em;
  height: 14em;
  border-radius: 0 0 0.9em 0.9em;
  position: absolute;
  bottom: 50%;
  left: 50%;
  margin: 0 0 -2em -0.1em;
  transform-origin: 0.1em 12em;
  transform: rotate(-45deg);
  }
  .hours-hand:before {
    content: '';
    width: 0;
    height: 0;
    border: 0.9em solid #c3c4c5;
    border-width: 6.4em 0.9em 0em 0.9em;
    border-left-color: transparent;
    border-right-color: transparent;
    position: absolute;
    top: -3.1em;
    left: -0.8em;
  }
</style>
