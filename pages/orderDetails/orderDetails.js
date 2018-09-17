// pages/seller/seller.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      goods:[{
        img:"../../pageImg/payPic1.png",
        name:"仙居碧绿-石斛花茶",
        spec:"200ml",
        price:"148.00",
        number:"1"
      },
      {
        img:"../../pageImg/payPic2.png",
        name:"浴室硅藻土地垫",
        spec:"200ml",
        price:"148.00",
        number:"1"
      }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  console.log(options)
  console.log(11)
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