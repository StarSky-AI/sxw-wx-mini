// pages/goodsDetail02/goodsDetail02.js
var num = 0,id=0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: '../../pageImg/banner.png',
    detailPrice: '2,500.00',
    detailText: '藏仙虫草-黄金茶20g',
    detailOrigin: '产地：云南',
    guigeList: ['20g', '50g', '80g','100g'],
    num:0,
    isLoading: false,
    id:1
  },
  goheight: function (data) {
    var that = this;
    var num = that.data.num + 1;
    if (num < 999) {
      that.setData({
        num: num
      })
    }
  },
  goReduce: function (data) {
    var that = this;
    var num = that.data.num - 1;
    if(num>-1){
      that.setData({
        num: num
      })
    }
  },
  gocar: function () {
    console.log(1)
    wx.switchTab({
      url: '../shopcar/shopcar'
    })
  },
  //  点击按钮选中
 choseTxtColor:function(e){  
    var id = e.currentTarget.dataset.id;  //获取自定义的ID值  
    console.log(id)
    this.setData({  
      id:id    
    })  
  },
  serviceSelection:function(){  
    this.setData({  
      isLoading:true  
    })  
} ,
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
wx.request({
  url: 'http://120.26.234.0:8086/sxwInterface/mobile/logo',
  data: '',
  header: {},
  method: 'GET',
  dataType: 'JSON',
  responseType: 'json',
  success: function(res) {
    console.log(res)
  },
  fail: function(res) {
    // consoole.log()
  },
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