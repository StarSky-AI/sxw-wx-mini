// pages/goodsDetail/goodsDetail.js
var app= getApp();
Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options;
    console.log("goodsDetail");
    console.log(id);

    console.log('goodsDetail');
    wx.request({
      url: 'http://120.26.234.0:8086/sxwInterface/mobile/search/newSearchGoodLists',
      data:{
        goodCatId:id
      },
      header: {},
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        console.log(res)
      },
      fail: function (res) { },
      complete: function (res) { },     //页码
    })
  },
  //  我的收藏接口
  goCollection:function(){
   wx.request({
     url: 'http://120.26.234.0:8086/sxwInterface/mobile/user/getMyCollects',
     data: {
       userId:12,
       page:1,
       type:2
     },
     header: {},
     method: 'GET',
     dataType: 'json',
     responseType: 'text',
     success: function(res) {
       console.log(res)
     },
     fail: function(res) {},
     complete: function(res) {},
   })
  },
  //  我的购物车页面
  goCart: function () {
    wx.request({
      url: 'http://120.26.234.0:8086/sxwInterface/mobile/shop/item/addCart',
      data: {
        userId: 12,
        goodId:1688,
        type: 2,
        goodNum:1,
        goodSkuId:'',
        isExistSku:0
      },
      header: {},
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        console.log(res)
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})