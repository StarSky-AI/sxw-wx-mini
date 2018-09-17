var flag = true, goRutn = true, res = 0;
var app = getApp();

Page({
  
  changeSel(e) {
    this.setData({
      currentSection: e.currentTarget.dataset.index
    })
  },
  data: {
    currentSection: 0,
    specialtyUrls: [
      {
        img: '../../pageImg/热门推荐_01.png',
        name: "仙居碧绿-茶韵幽香",
        price: "309.00",
      },
      {
        img: '../../pageImg/热门推荐_02.png',
        name: "仙居碧绿-石斛花茶",
        price: "899.90",
      },
      {
        img: '../../pageImg/热门推荐_03.png',
        name: "藏仙虫草-茶韵幽香",
        price: "756.00",
      },
      {
        img: '../../pageImg/热门推荐_01.png',
        name: "仙居碧绿-茶韵幽香",
        price: "309.00",
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
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