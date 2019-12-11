const fetch = require("../../utils/fetch.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    category: {},
    shops: [],
    pageIndex: 0,
    pageSize: 20,
    isLoad: false, //是否正在调用
    hasMore: true,
    search: "",
    searchContent: ""   //传入搜索参数，中文乱码
  },


  loadMore: function() {
    if (!this.data.hasMore) return;

    let { pageIndex, pageSize, searchContent} = this.data;
    fetch("categories/" + this.data.category.id + "/shops", {
        // fetch("categories/${this.data.category.id}/shops", {
        _page: ++pageIndex,
        _limit: pageSize,
        q: searchContent
      })
      .then(res => {
        const shops = this.data.shops.concat(res.data);
        const totalCount = parseInt(res.header['X-Total-Count']);
        const hasMore = pageIndex * pageSize < totalCount;
        this.setData({
          //isLoad: true,
          shops,
          pageIndex,
          hasMore
        })
      })

    /*this.setData({
      isLoad: false
    })*/
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    fetch("categories/" + options.id).then(res => {
      // console.log(res.data);
      this.setData({
        category: res.data
      })
      wx.setNavigationBarTitle({
        title: res.data.name
      })
      this.loadMore()
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    if (this.data.category.name) {
      wx.setNavigationBarTitle({
        title: this.data.category.name
      })
    }
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
    // console.log("到底了");
    /*if (this.data.isLoad) {
      console.log("正在加载");
      return;
    }*/
    this.loadMore();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  lower: function() {
    // console.log(isLoad);
    // this.setData({
    //   isLoad: true
    // })
  },

  searchInput: function(e) {
    this.setData({
      search: e.detail.value
    })
  },

  searchClick: function() {
    this.setData({
      searchContent: this.data.search
    })
    this.loadMore()
    // console.log(this.data.searchContent)
  }
})