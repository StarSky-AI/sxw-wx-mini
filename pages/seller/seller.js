// pages/seller/seller.js
Page({

  /**
   * 页面的初始数据
   */
  change(e){
    let no=e.currentTarget.dataset.no;
    if(no=="one"&&this.data.one){
       this.setData({
          one:!this.data.one,
          two:!this.data.two
        })
     }
     if(no=="two"&&this.data.two){
       this.setData({
          one:!this.data.one,
          two:!this.data.two
        })
     }
   
  },
  data: {
      totalRMB:"2000.00",
      integral:'1,888.00',
      coin:'888.00',
      balance:'888.00',
      give:'88.00',
      one:false,
      two:true,
      data:[{
        type:0,
        name:"推荐奖励",
        desc:"推荐了 静静女神 获得的奖励",
        time:"2016-04-25 14:44",
        fen:"+200.00积分"
      },
      {
        type:0,
        name:"推荐奖励",
        desc:"推荐了 静静女神 获得的奖励",
        time:"2016-04-25 14:44",
        fen:"+200.00积分"
      }]
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