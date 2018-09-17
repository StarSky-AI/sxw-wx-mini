// pages/register/register.js
var interval = null;//倒计时函数
var inputContent = {};
var id='';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: '请选择日期',
    fun_id: 2,
    time: '获取验证码', //倒计时 
    currentTime: 61,
    surl: '../../pageImg/勾选@2x.png',
    ssurl: '../../pageImg/椭圆1拷贝2@2x.png',
    isLog: true
  },
  bindChange: function (e) {
    // inputContent[e.currentTarget.id] = e.detail.value
    id = e.detail.value
  },
  bindNumber: function (e) {
    inputContent[e.currentTarget.num] = e.detail.value
    
  },
  bindPass:function(e){
    inputContent[e.currentTarget.pass] = e.detail.value
  },
  change() {
    this.setData({
      Default: !this.data.Default
    })
  },
  getCode: function (e) {
    var currentTime = this.data.currentTime
    var that = this;
    interval = setInterval(function () {
      currentTime--;
      that.setData({
        time: "重新发送(" + currentTime +'s)'
      })
      if (currentTime <= 0) {
        clearInterval(interval)
        that.setData({
          time: '重新发送',
          currentTime: 61,
          disabled: false
        })
      }
    }, 1000);
    if (id!==''){
      wx.showToast({
        title: '短信发送成功',
        icon: 'success',
        duration: 500
      })
    }else{
      wx.showToast({
        title: '请正确输入手机号码',
        icon: 'success',
        duration: 500
      })
    }
  },
  getVerificationCode(e) {
    var phone = id;
    console.log('e')
    console.log(phone)
    console.log('e')
    console.log(id)
    console.log('111111')
    wx.request({
      url: 'http://192.168.1.124:8078/mobileapp/user/validateCode',
      data: {
        phoneNum: phone,
        type: '0'
      },
      header: {},
      method: 'POST',
      dataType: 'JSON',
      responseType: 'json',
      success: function (res) {
        console.log(res)
      },
      fail: function (res) { },
      complete: function (res) { },
    })
    this.getCode();
    var that = this
    that.setData({
      disabled: true
    })
  },
  goLogin: function (e) {
    if (id == "" || id == undefined) {
      wx.showToast({
        title: '请输入正确手机号',
        icon: 'loading',
        duration: 2000
      })
      return false;
    }
    if (inputContent[e.currentTarget.num] == "" || inputContent[e.currentTarget.num] == undefined) {
      wx.showToast({
        title: '请输入正确验证码',
        icon: 'loading',
        duration: 2000
      })
      return false;
    }
    if (inputContent[e.currentTarget.pass] == "" || inputContent[e.currentTarget.pass] == undefined) {
      wx.showToast({
        title: '请输入正确密码',
        icon: 'loading',
        duration: 2000
      }) 
      return false;
    }
    wx.reLaunch({
      url: '../login/login'
    })
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