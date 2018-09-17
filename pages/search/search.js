var num = 0, timer = null, flag = true, goRutn = true, ci = 0, returnTimer = null, res = 0;
Page({
  changeSel(e) {
    this.setData({
      currentSection: e.currentTarget.dataset.index
    })
  },
  
  data: {
    text1:'热门搜索',
    text2: ['仙居杨梅', '金菊花', '清素', '豆皮', '虫草', '糖枣', '三宝', '杨梅酒', '鸡蛋', '大米', '香肠', '绿壳鸡蛋','腊肠'],
    text3:'历史搜索',
    text4:[
      '仙居杨梅', '金菊花','鸡蛋', '大米', '香肠', '绿壳鸡蛋', '腊肠'
    ]
  },
   
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