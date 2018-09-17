var flag = true, goRutn = true, res = 0;
Page({

  changeSel(e) {
    this.setData({
      currentSection: e.currentTarget.dataset.index
    })
  },
  data: {
    currentSection: 0,
    divineUrl:"../../pageImg/34味轮播图3.jpg",
    text1:'质真而淳朴 闲静而不燥',
    text2:' 自古以来，仙居是历史文化悠久、人杰地灵的千年古城。仙居历代人才辈出，是晚唐著名诗人项斯、宋代世界上第一部食用菌专著《菌谱》作者陈仁玉、元代诗书画三绝的大书画家柯九思、明代勇斗严嵩的左都御史吴时来等人的故乡。',
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