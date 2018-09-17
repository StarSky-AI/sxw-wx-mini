//获取应用实例  
var app = getApp()
Page({
  data: {
    text1:'综合',
    text2:'酒店',
    text3:'休闲',
    text4:'餐饮',
    imgurl: 'http://img.sxwvc.com/',
   // 页面配置 
    winWidth: 0,
    winHeight: 0,
    // tab切换  
    currentTab: 0,
    shangjiaDetail: {
      imgUrl: '',
      linkUrl: ''
    },
    shangjiaGoods: {
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
  },
  onLoad: function () {
    var that = this;
    /** 
     * 获取系统信息 
     */
    wx.request({
      url: 'http://120.26.234.0:8086/sxwInterface/mobile/shop/unionShop',
      data: '',
      header: {},
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        that.setData({
          shangjiaDetail: res.data.data.adbanner,
          shangjiaGoods: res.data.data.bestGoods
        })
        console.log(res.data.data)
      },
      fail: function (res) { },
      complete: function (res) { },
    });
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
    })
  },
  /** 
     * 滑动切换tab 
     */
  bindChange: function (e) {

    var that = this;
    that.setData({ currentTab: e.detail.current });

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
  }
})