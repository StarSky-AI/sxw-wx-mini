// pages/authentication/authentication.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    text1:"云南省农业科学院",
    text2:"云南省农业科学院是省属综合性农业科研机构，下设15个专业所，即农作物品种资源站、粮食作物研究所、生物技术研究所、油料作物研究所、园艺作物研究所、植物保护研究所、土壤肥料研究所、甘蔗研究所、茶叶研究所、蚕桑研究所、蜜蜂研究所、热带亚热带经济作物研究所、高山经济植物研究所和科技情报研究所，分布在七个地州市；有2个工作站，即建于云南瑞丽县的云南省农科院试验站（原稻作站）、甘蔗站和建于海南省的云南省农作物冬繁基地。",
    newProduct: [{
      img: '../../pageImg/zhanshi03.png',
      text: '根据2017年11月机构官网显示，“十二五”以来，全院获省部级以上科技奖励72项，其中国家科技进步二等奖1项。'
    },
    {
      img: '../../pageImg/zhanshi04.png',
      text: '通过国家和省级审（认、鉴）定、登记农作物新品种236个，国审品种数占全省的100%；新品种保护授权70项、专利授权195项。'
    }]
  },
  clickMe: function () {
    this.setData({ msg: "Hello World" })
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