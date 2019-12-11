const fetch = require("../../utils/fetch.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgurl: [],
    categories: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    /*wx.request({
      url: 'https://locally.uieee.com/slides',
      // url: 'https://douban.uieee.com/v2/movie/coming_soon',  //即将上映20条
      // url: 'https://douban.uieee.com/v2/movie/in_theaters?start=0&count=20',   //正在上映20个电影
      // url: 'https://douban.uieee.com/v2/movie/top250',   //250排行
      // url: 'https://douban.uieee.com/v2/book/1220562',   //畅销书
      header: {
        'Content-Type': 'json'
      },
      success: res => {
        this.setData({
          imgurl: res.data
        })
      }
    })*/
    fetch('slides').then(res => { //slides是请求的url
      this.setData({
        imgurl: res.data
      })
    })
    fetch('categories').then(res => { //categories是请求的url
      this.setData({
        categories: res.data
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})