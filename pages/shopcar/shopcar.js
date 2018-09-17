var index = 0;
Page({
  computedTotalPrice() {
    // 计算总价
    let length = this.data.goodsList.length;
    let goodsList = this.data.goodsList;
    let total = 0;
    for (let i = 0; i < length; i++) {
      if (goodsList[i].selected == true) {
        total += parseInt(goodsList[i].price) * parseInt(goodsList[i].Number);
      }
    }
    if (total != 0) {
      this.setData({
        total: total + ".00"
      })
    } else {
      this.setData({
        total: total
      })
    }
  },
  changeIcon(e) {
    // 切换单个商品的选中状态
    let id = e.currentTarget.dataset.id;
    let length = this.data.goodsList.length;
    let goodsList = this.data.goodsList;
    let AllCheck = true;
    for (let i = 0; i < length; i++) {
      if (goodsList[i].id === id) {
        goodsList[i].selected = !goodsList[i].selected;
      }
      if (goodsList[i].selected == false) {
        AllCheck = false;
      }
    }
    this.setData({
      goodsList,
      AllCheck
    })
    this.computedTotalPrice();
  },
  changeAllcheckIcon() {
    // 切换全选的选中状态
    let length = this.data.goodsList.length;
    let goodsList = this.data.goodsList;
    this.setData({
      AllCheck: !this.data.AllCheck
    })
    if (this.data.AllCheck) {
      for (let i = 0; i < length; i++) {
        goodsList[i].selected = true;
      }
    } else {
      for (let i = 0; i < length; i++) {
        goodsList[i].selected = false;
      }
    }
    this.setData({
      goodsList
    })
    this.computedTotalPrice();
  },
  reduce(e) {
    // 单个商品减少数量
    let id = e.currentTarget.dataset.id;
    let length = this.data.goodsList.length;
    let goodsList = this.data.goodsList;
    for (let i = 0; i < length; i++) {
      if (goodsList[i].id === id) {
        if (goodsList[i].Number > 1) {
          goodsList[i].Number = parseInt(goodsList[i].Number) - 1;
        }
      }
    }
    this.setData({
      goodsList
    })
    this.computedTotalPrice();
  },
  add(e) {
    // 单个商品增加数量
    let id = e.currentTarget.dataset.id;
    let length = this.data.goodsList.length;
    let goodsList = this.data.goodsList;
    for (let i = 0; i < length; i++) {
      if (goodsList[i].id === id) {
        goodsList[i].Number = parseInt(goodsList[i].Number) + 1;
      }
    }
    this.setData({
      goodsList
    })
    this.computedTotalPrice();
  },
  modifi(e) {
    let modifiNum = e.detail.value;
    let id = e.currentTarget.dataset.id;
    let length = this.data.goodsList.length;
    let goodsList = this.data.goodsList;
    for (let i = 0; i < length; i++) {
      if (goodsList[i].id === id) {
        if (modifiNum > 0) {
          goodsList[i].Number = modifiNum;
        } else {
          goodsList[i].Number = 1;
        }
      }
    }
    this.setData({
      goodsList
    })
    this.computedTotalPrice();
  },
  del(e) {
    let id = e.currentTarget.dataset.id;
    let length = this.data.goodsList.length;
    let goodsList = this.data.goodsList;
    for (let i = 0; i < length; i++) {
      if (goodsList[i].id == id) {
        goodsList.splice(i, 1);
        break;
      }
    }
    this.setData({
      goodsList,
      scrollLeft: 0
    })
    this.computedTotalPrice();
  },
  changeselect1: function () {
    this.setData({
      Default1: !this.data.Default1
    })
  },
  changeselect2: function () {
    this.setData({
      Default2: !this.data.Default2
    })
  },
  changeselect3: function () {
    this.setData({
      Default3: !this.data.Default3
    })
  },
  data: {
    zhifu: [
      {
        img: '../../pageImg/zhifubao.png',
        name: '支付宝',
        key: 0
      },
      {
        img: '../../pageImg/weixin.png',
        name: '微信支付',
        key: 1,
        checked: 'true'
      },
      {
        img: '../../pageImg/bank.png',
        name: '广发银行',
        key: 2
      }
    ],
    index: 0,
    scrollLeft: 0,
    total: 0,
    AllCheck: false,
    Default1: false,
    Default2: true,
    Default3: true,
    flag: true,
    goodsList: [{
      title: "仙居碧绿-石斛花茶",
      standard: "400ml",
      price: "148.00",
      Number: "1",
      id: "1",
      selected: false
    },
    {
      title: "仙居碧绿-茶韵幽香",
      standard: "185ml",
      price: "148.00",
      Number: "2",
      id: "2",
      selected: false
    },
    {
      title: "藏仙虫草",
      standard: "18kg",
      price: "666.00",
      Number: "3",
      id: "3",
      selected: false
    },
    {
      title: "藏仙虫草",
      standard: "18kg",
      price: "666.00",
      Number: "3",
      id: "4",
      selected: false
    },
    {
      title: "藏仙虫草",
      standard: "18kg",
      price: "666.00",
      Number: "3",
      id: "5",
      selected: false
    }]
  },
  /**
    * 弹出层函数
    */
  //出现
  show: function () {
    this.setData({ flag: false })
  },
  //消失
  hide: function () {
    this.setData({ flag: true })
  },
  radioChange: function (e) {
    // console.log(e)
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