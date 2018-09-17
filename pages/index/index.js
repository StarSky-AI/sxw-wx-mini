//获取应用实例  
var app = getApp()
Page({
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
        map: '23km'
      },
      {
        img: '../../pageImg/热门推荐_02.png',
        name: "杭州香格里拉大酒店",
        text: '奢华享受，让你体验总统的待遇。奢华享受，让你体验总统的待遇。',
        price: "899.90",
        map: '900m'

      },
      {
        img: '../../pageImg/热门推荐_03.png',
        name: "杭州香格里拉大酒店",
        text: '奢华享受，让你体验总统的待遇。奢华享受，让你体验总统的待遇。',
        price: "756.00",
        map: '3km'
      },
      {
        img: '../../pageImg/热门推荐_01.png',
        name: "杭州香格里拉大酒店",
        text: '奢华享受，让你体验总统的待遇。奢华享受，让你体验总统的待遇。',
        price: "688.00",
        map: '3km'
      }
    ],
    text1: '首页',
    text2: '特产',
    text3: '户外',
    text4: '居家',
    text5: '玩具',
    text6: '家纺',
    text7: '美食',
    text8: '酒店',
    text9: '休闲',
    text10: '生活',
    text11: '美妆',
    imgurl: 'http://img.sxwvc.com/',
    goodsClassWidth: "1000rpx",
    scrollW: "0rpx",
    scrollLeft: 0,
    currentTab: 0, //预设当前项的值
    currentSection: 0,
    cur: 1,
    device: 0,
    length: 0,
    adbanner: {
      imgUrl: '',
      linkUrl: ''
    },
    flavor: {
      regionImg: '',
      id: '',
      resume: ''
    },
    like: {
      id: '',
      goodsImg: '',
      goodsName: '',
      goodsNumber: '',
      salePriceRmb: '',
      avgScore: '',
      createTime: '',
      goodsSn: '',
      saleNumber: '',
      salePriceJf: '',
      salePriceRmb: '',
      salePriceUb: ''
    },
    newProduct: {
      goodsDesc: '',
      goodsImg: '',
      goodsNumber: '',
      id: ''
    },
    recommend: {
      goodsName: '',
      salePriceRmb: '',
      id: ''
    },
    // 商家详情
    adbannerDetail: {
      imgUrl: '',
      linkUrl: ''
    },
    bestGoods: {
      avgScore: '',
      giveFrequency: '',
      goodsDesc: '',
      goodsImg: '',
      goodsName: '',
      goodsNumber: '',
      goodsSn: '',
      goodsSummary: '',
      id: '',
      latitude: '',
      longitude: '',
      marketPrice: '',
      maxGiveRatio: '',
      merchantName: '',
      onceGiveJifen: '',
      onceGiveUb: '',
      returnBfb: '',
      saleNumber: '',
      salePriceJf: '',
      salePriceRmb: '',
      salePriceUb: '',
      suggestPrice: ''
    },
    //  页面配置 
    winWidth: 0,
    winHeight: 0,
    // tab切换  
    currentTab: 0,
    flag: false,
    isLogn: false,
    log: true
  },

  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'http://120.26.234.0:8086/sxwInterface/mobile/brand/findNewPage',
      data: {
        userId: 12
      },
      header: {},
      method: 'GET',
      dataType: 'JSON',
      responseType: 'json',
      success: function (res) {
        // console.log(JSON.parse(res.data).data.like)
        that.setData({
          adbanner: JSON.parse(res.data).data.adbanner,
          flavor: JSON.parse(res.data).data.flavor,
          like: JSON.parse(res.data).data.like,
          newProduct: JSON.parse(res.data).data.newProduct,
          recommend: JSON.parse(res.data).data.recommend
        })
      }
    }),
      /** 
    * 获取系统信息 
    */
      wx.getSystemInfo({
        success: function (res) {
          that.setData({
            winWidth: res.windowWidth,
            winHeight: res.windowHeight
          });
        }
      });
    wx.request({
      url: 'http://120.26.234.0:8086/sxwInterface/mobile/shop/unionShop',
      data: '',
      header: {},
      method: 'POST',
      dataType: 'JSON',
      responseType: 'json',
      success: function (res) {
        that.setData({
          adbannerDetail: JSON.parse(res.data).data.adbanner,
          bestGoods: JSON.parse(res.data).data.bestGoods
        })
        // console.log(JSON.parse(res.data).data)
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  /** 
     * 滑动切换tab 
     */
  bindChange: function (e) {
    var that = this;
    that.setData({ currentTab: e.detail.current });

  },
  //    获取详情 logo 
  qiehuan: function () {
    wx.request({
      url: 'http://120.26.234.0:8086/sxwInterface/mobile/logo',
      data: {
        // goodCatId:188,
        // typeName:13
      },
      header: {},
      method: 'GET',
      dataType: 'JSON',
      responseType: 'json',
      success: function (res) {
        console.log(res)
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  /** 
   * 点击tab切换 
   */
  swichNav: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  selected: function () {
    this.setData({
      flag: !this.data.flag
    })
  },
  selectchange: function () {
    this.setData({
      log: !this.data.log
    })
  },
  change: function () {
    this.setData({
      isLogn: !this.data.isLogn
    })
  },

})