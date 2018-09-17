// pages/classify/classify.js
var userName, phone, address, shopdetail;
var index=0;
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

    address: [
    //   {
    //   "name": "孙贝",
    //   "phone": "182****1168",
    //   "address": "浙江省杭州市滨江区滨兴路1451号",
    //   "default": false
    // },
    // {
    //   "name": "孙贝",
    //   "phone": "182****1168",
    //   "address": "浙江省杭州市滨江区滨兴路1451号",
    //   "default": true
    // }
    ]
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this,name = options.userName,phone = options.phone,addr = options.address,shopdetail = options.shopdetail,sele = options.sele;
    //更新数据
    var option={
          index: index++,
          name: name,
          phone: phone,
          address: addr,
          shopdetail: shopdetail,
          "default": sele
    }
  //  本地存储数据
    if (!wx.getStorageSync('add')){
      console.log(1)
      wx.setStorageSync('add',JSON.stringify(this.data.address))
    }
    var options=JSON.parse(wx.getStorageSync('add'));
    options=options.concat(option);
    console.log(options)
    wx.setStorageSync('add', JSON.stringify(options));
    this.setData({
      address:options
    })
    // wx.getStorage({
    //   key:'address',
    //   success:function(data){
    //     Arr=data;
    //     var option = {
    //       index: index++,
    //       name: name,
    //       phone: phone,
    //       address: addr,
    //       shopdetail: shopdetail,
    //       "default": sele
    //     }
    //     Arr = that.data.address.concat(option);
    //     wx.setStorage({
    //       address: Arr
    //     })
    //     that.setData({
    //       address: Arr
    //     })
    //   }
    // });
    // wx.chooseAddress({
    //   success: function (res) {
    //     console.log(res.userName)
    //     console.log(res.postalCode)
    //     console.log(res.provinceName)
    //     console.log(res.cityName)
    //     console.log(res.countyName)
    //     console.log(res.detailInfo)
    //     console.log(res.nationalCode)
    //     console.log(res.telNumber)
    //   }
    // })
  },
  toaddress: function (e) {
    console.log(e.currentTarget.dataset.name)
    wx.switchTab({
      url: '../address/address'
    })
  },
  toedit:function(e){

    console.log(1)
    console.log(e)
    console.log(1)
  //   wx.navigateTo({
  //     url: '../edit/edit/?name=' + e.currentTarget.dataset.name + '&phone=' + e.currentTarget.dataset.phone + '&address=' + e.currentTarget.dataset.address + '&shopdetail=' + e.currentTarget.dataset.shopdetail
     
  //   })
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