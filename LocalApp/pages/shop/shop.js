const fetch = require("../../utils/fetch.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    image: ["../../imgs/ceshi1.jpg","../../imgs/ceshi2.jpg"],
    shops: {},
    comments: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    fetch("categories/" + options.categoryid + "/shops?id=" + options.id).then(res => {
      // console.log(res.data[0].comments)
      this.setData({
        shops: res.data[0],
        comments: res.data[0].comments
      })
      wx.setNavigationBarTitle({
        title: res.data[0].name,
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // console.log(this.data.shops)
    if(this.data.shops.name){
      wx.setNavigationBarTitle({
        title: this.data.shops.name,
      })
    }
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // console.log(this.data.shops);
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
    // console.log(this.data.shops);
  }
})