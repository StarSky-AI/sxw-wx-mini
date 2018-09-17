var area = require('../../data/area')
var p = 0, c = 0, d = 0;
var inputContent = {};
Page({
  change() {
    this.setData({
      Default: !this.data.Default
    })
  },
  
  data: {
    Default: true,
    provinceName: [],
    provinceCode: [],
    provinceSelIndex: '',
    cityName: [],
    cityCode: [],
    citySelIndex: '',
    districtName: [],
    districtCode: [],
    showDistpicker: false,
    userName: '',
    phone: '',
    address: '',
    shopdetail: '',
    sele:false
  },
  onLoad: function (options) {
    this.setAreaData();
    // var userName = wx.getStorageSync('userName');
    // var phone = wx.getStorageSync('phone');
    // var address = wx.getStorageSync('address');
    // var shopdetail = wx.getStorageSync('shopdetail');
    // var sele = wx.getStorageSync('sele');
    // if (userName) {
    //   this.setData({ userName: userName });
    // }
    // if (phone) {
    //   this.setData({ phone: phone });
    // }
    // if (address) {
    //   this.setData({ address: address });
    // }
    // if (shopdetail) {
    //   this.setData({ shopdetail: shopdetail });
    // }
    // if (sele) {
    //   this.setData({ sele: sele });
    // }
    // console.log(sele)
  },
  formSubmit: function (e) {
    var objData = e.detail.value;
    var name = e.detail.value.userName;
    var phone = e.detail.value.phone;
    var address = e.detail.value.address;
    var shopdetail = e.detail.value.shopdetail;
    var sele = e.detail.value.sele;
  
    console.log(e)
    if (objData.userName && objData.phone && objData.address && objData.shopdetail) {
      // 同步方式存储表单数据
      wx.setStorageSync('userName', objData.userName);
      wx.setStorageSync('phone', objData.phone);
      wx.setStorageSync('address', objData.address);
      wx.setStorageSync('shopdetail', objData.shopdetail);
      wx.setStorageSync('default', objData.default);
      wx.setStorageSync('sele', true);
      //  页面传值 setStorage() 本地缓存
      console.log('e')
     
      console.log('e')

      //跳转到成功页面
      wx.navigateTo({
        url: '../Deliveryaddress/Deliveryaddress?userName=' + name + '&phone=' + phone + '&address=' + address + '&shopdetail=' + shopdetail + '&sele=' + false
      })
    }
  },
  setAreaData: function (p, c, d) {
    var p = p || 0 // provinceSelIndex
    var c = c || 0 // citySelIndex
    var d = d || 0 // districtSelIndex
    // 设置省的数据
    var province = area['100000']
    var provinceName = [];
    var provinceCode = [];
    for (var item in province) {
      provinceName.push(province[item])
      provinceCode.push(item)
    }
    this.setData({
      provinceName: provinceName,
      provinceCode: provinceCode
    })
    // 设置市的数据
    var city = area[provinceCode[p]]
    var cityName = [];
    var cityCode = [];
    for (var item in city) {
      cityName.push(city[item])
      cityCode.push(item)
    }
    this.setData({
      cityName: cityName,
      cityCode: cityCode
    })
    // 设置区的数据
    var district = area[cityCode[c]]
    var districtName = [];
    var districtCode = [];
    for (var item in district) {
      districtName.push(district[item])
      districtCode.push(item)
    }
    this.setData({
      districtName: districtName,
      districtCode: districtCode
    })
  },
  changeArea: function (e) {
    p = e.detail.value[0]
    c = e.detail.value[1]
    d = e.detail.value[2]
    this.setAreaData(p, c, d)
  },
  showDistpicker: function () {
    this.setData({
      showDistpicker: true
    })
  },
  distpickerCancel: function () {
    this.setData({
      showDistpicker: false
    })
  },
  distpickerSure: function () {
    this.setData({
      provinceSelIndex: p,
      citySelIndex: c,
      districtSelIndex: d
    })
    this.distpickerCancel()
  },
  onshow: function () {
    wx.chooseAddress({
      success: function (res) {
        console.log(res.userName)
        console.log(res.postalCode)
        console.log(res.provinceName)
        console.log(res.cityName)
        console.log(res.countyName)
        console.log(res.detailInfo)
        console.log(res.nationalCode)
        console.log(res.telNumber)
      }
    })

    if (wx.chooseAddress) {
      wx.chooseAddress({
        success: function (res) {
          console.log(res)
          console.log(111)
        },
        fail: function (err) {
          console.log(err)
          console.log(111)
        }
      })
    } else {
      console.log('当前微信版本不支持chooseAddress');
    }
  }
})