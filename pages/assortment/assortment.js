// pages/assortment/assortment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text: ['推荐专区', '活动专区', '居家生活', '运动户外', '美食特产', '儿童玩具', '电子数码', '酒水饮料', '家用电器'],
    imgurl: 'http://img.sxwvc.com/',
    goods:{
      avgScore:'',
      createTime:'',
      goodsDesc:'',
      goodsName:'',
      goodsNumber:'',
      goodsSn:'',
      id:'',
      saleNumber:'',
      salePriceJf:'',
      salePriceRmb:'',
      salePriceUb:'',
      goodsImg:''
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'http://120.26.234.0:8086/sxwInterface/mobile/search/newSearchGoodLists',
      data: {
        goodCatId: 187,
        typeName: '仙居'
      },
      header: {},
      method: 'GET',
      dataType: 'JSON',
      responseType: 'json',
      success: function (res) {
        console.log(JSON.parse(res.data).data.goods)
       
        that.setData({
          goods: JSON.parse(res.data).data.goods
        })
        
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  tuijian:function(){
    wx.request({
      url: 'http://120.26.234.0:8086/sxwInterface/mobile/brand/findMore',
      data: {
        type:'',
        id:189,
        page:1,
        rows:10
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