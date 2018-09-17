var flag=false;
var area = require('../../data/area')
var p = 0, c = 0, d = 0;
var inputContent = {};
Page({
  data:{
    name:"请填写您的姓名",
    tel:"请填写您的联系方式",
    addreValue:0,
    index:"0",
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
    name: "请填写您的姓名",
    tel: "请填写您的联系方式",
    addreValue: 0,
    doors: "街道门牌信息",
    areaValue: 0,
    index: "0"
  },
   change() {
    this.setData({
      Default: !this.data.Default
    })
  },
   onLoad: function(options) {
    this.setAreaData();
    this.setData({
    name:options.name,
    tel:options.tel,
    addreValue:options.addrevalue,
    areaValue:options.areavalue,
    addre:options.addre,
    door:options.door,
    index:options.index
    })
  
    console.log("传过来的index"+options.index);
    console.log("接收到的index"+this.data.index);
   },
    areaPickerBindchange:function(e){
    this.setData({
      areaValue:e.detail.value
    })
  },
    addrePickerBindchange:function(e){
    this.setData({
      addreValue:e.detail.value
    })
  },
  //点击删除
    delete:function(){
      var that = this;
      wx.showModal({
       title: '提示',
       content: '确认删除该地址信息吗？',
       success: function(res) {
         if (res.confirm) {
           console.log('用户点击确定')
            wx.redirectTo({
             url: '../chooseAddre/chooseAddre?index='+that.data.index+"&sign="+'2'
             }); 
         } else if (res.cancel) {
           console.log('用户点击取消')
      }
    }
})

    },
//点击取消，返回上个页面
    cancel:function(){
      wx.navigateBack({
         delta: 1
      })
    },
  
    //点击保存
  formSubmit: function(e) {

    var warn ="";
    var that = this;
    if(e.detail.value.name==""){
      warn = "请填写您的姓名！";
    }else if(e.detail.value.tel==""){
      warn = "请填写您的手机号！";
    }else if(!(/^1(3|4|5|7|8)\d{9}$/.test(e.detail.value.tel))){
      warn = "手机号格式不正确";
    }else if(e.detail.value.addre=='0'){
      warn = "请选择您的所在区域";
    }else if(e.detail.value.door==""){
      warn = "请输入您的具体地址";
    }else{
      flag=true;
      console.log('form发生了submit事件，携带数据为：', e.detail.value)

        wx.redirectTo({
          url: '../chooseAddre/chooseAddre?tel=' + e.detail.value.tel + "&addre=" + e.detail.value.address + "&door=" + e.detail.value.door + "&name=" + e.detail.value.name+"&sign="+'1'+"&index="+that.data.index
        //？后面跟的是需要传递到下一个页面的参数
      }); 
    }
    if(flag==false){
      wx.showModal({
      title: '提示',
      content:warn
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
        console.log(res)
        // console.log(res.postalCode)
        // console.log(res.provinceName)
        // console.log(res.cityName)
        // console.log(res.countyName)
        // console.log(res.detailInfo)
        // console.log(res.nationalCode)
        // console.log(res.telNumber)
      }
    })

    if (wx.chooseAddress) {
      wx.chooseAddress({
        success: function (res) {
          console.log(res)
          // console.log(111)
        },
        fail: function (err) {
          console.log(err)
          // console.log(111)
        }
      })
    } else {
      console.log('当前微信版本不支持chooseAddress');
    }
  }
  })