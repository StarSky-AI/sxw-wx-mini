var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // localhost: 8082 / user / login ? phoneNum = "" & passWord=""
  },
  goRegister: function () {
    wx.navigateTo({
      url: '../register/register'
    })
  },
  goPassword: function () {
    wx.navigateTo({
      url: '../register/register'
    })
  },
  goIndex: function () {
    wx.navigateTo({
      url: '../index/index'
    })
  },
 
  onLoad: function () {
    this.setData({
      hasLogin: app.globalData.hasLogin
    })
  },
  data: {},
  login: function () {
    var that = this
    wx.login({
      success: function (res) {
        app.globalData.hasLogin = true
        that.setData({
          hasLogin: true
        })
        that.update()
      }
    })
  }
})