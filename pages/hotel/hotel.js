var num = 0, timer = null, flag = true, goRutn = true, ci = 0, returnTimer = null, res = 0;
Page({
  changeSel(e) {
    this.setData({
      currentSection: e.currentTarget.dataset.index
    })
  },
  Myanimate: function () {
    let length = this.data.length;
    let scrollLeft = parseInt(this.data.scrollLeft) / this.data.device;
    if (flag) {
      flag = !flag;
      num = scrollLeft;
      this.setData({
        cur: this.data.cur + 1
      })
    }
    scrollLeft -= 4;
    if (scrollLeft >= num - 480) {
      this.setData({
        scrollLeft: scrollLeft * this.data.device + "px"
      })
    } else {
      scrollLeft = parseInt(num - 480);
      num = 0;
      this.setData({
        scrollLeft: parseInt(scrollLeft * this.data.device - .5) + "px"
      })
      clearInterval(timer);
      ci++;
      if (ci > this.data.scrollView.length - 3) {
        let scrollView = this.data.scrollView;
        for (var i = 0; i < length; i++) {
          scrollView.push(scrollView[i]);
        }
        this.setData({
          scrollView,
          scrollW: (480 * (this.data.scrollView.length)) * res + "px"
        })
        setTimeout(() => {
          flag = !flag;
          timer = setInterval(this.Myanimate, 16.7);
        }, 1000)
      } else {
        setTimeout(() => {
          flag = !flag;
          timer = setInterval(this.Myanimate, 16.7);
        }, 1000)
      }
    }
  },
  data: {
    tabTitle: ['首页', '特产', '户外', '居家', '玩具', '家纺', '美食', '酒店', '休闲', '生活', '美妆'],
    goodsClassWidth: "1000rpx",
    scrollW: "0rpx",
    scrollLeft: 0,
    currentSection: 0,
    cur: 1,
    device: 0,
    length: 0,
    imgUrls: [
      '../../pageImg/banner.png',
      '../../pageImg/homeBanner2.jpg',
      '../../pageImg/homeBanner3.jpg',
      '../../pageImg/banner.png'
    ],
    hotelUrls: [
      {
        img: '../../pageImg/热门推荐_01.png',
        name: "杭州香格里拉大酒店",
        text: '奢华享受，让你体验总统的待遇。奢华享受，让你体验总统的待遇奢华享受，让你体验总统的待遇。',
        price: "309.00",
        map:'23km'
      },
      {
        img: '../../pageImg/热门推荐_02.png',
        name: "杭州香格里拉大酒店",
        text: '奢华享受，让你体验总统的待遇。奢华享受，让你体验总统的待遇。',
        price: "899.90",
        map:'900m'
        
      },
      {
        img: '../../pageImg/热门推荐_03.png',
        name: "杭州香格里拉大酒店",
        text: '奢华享受，让你体验总统的待遇。奢华享受，让你体验总统的待遇。',
        price: "756.00",
        map:'3km'
      },
      {
        img: '../../pageImg/热门推荐_01.png',
        name: "杭州香格里拉大酒店",
        text: '奢华享受，让你体验总统的待遇。奢华享受，让你体验总统的待遇。',
        price: "688.00",
        map: '3km'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onLoad')
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('onReady')
  },
  onShow: function () {
    console.log('onShow')
  },
  onHide: function () {
    console.log('onHide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('onUnload')
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('onPullDownRefresh')
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('onReachBottom')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log('onShareAppMessage')
  }
})