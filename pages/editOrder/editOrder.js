// pages/editOrder/editOrder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      array: ['支付宝', '微信', '银联支付', '信用卡'],
      index: 0,
      date: '2016-09-01',
      time: '12:01'
    },
    bindPickerChange: function (e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        index: e.detail.value
      })
    },
    bindDateChange: function (e) {
      this.setData({
        date: e.detail.value
      })
    },
    bindTimeChange: function (e) {
      this.setData({
        time: e.detail.value
      })
    },
    goods:[
      { freight:0,
        goodsArray:[{
          img:"../../pageImg/editOrder1.jpg",
          name:"仙居碧绿-石斛花茶",
          Spec:"200ml",
          price:"148.00",
          number:1
        },
        {
          img:"../../pageImg/editOrder2.jpg",
          name:"仙居碧绿-石斛花茶",
          Spec:"200ml",
          price:"148.00",
          number:3
        }]
      }, 
      { freight:1,
        goodsArray:[{
          img:"../../pageImg/editOrder1.jpg",
          name:"仙居碧绿-石斛花茶",
          Spec:"200ml",
          price:"148.00",
          number:1
        },
        {
          img:"../../pageImg/editOrder2.jpg",
          name:"仙居碧绿-石斛花茶",
          Spec:"200ml",
          price:"148.00",
          number:3
        }]
      }],
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
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