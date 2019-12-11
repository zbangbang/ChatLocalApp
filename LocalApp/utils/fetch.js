module.exports=(url,data)=>{
  return new Promise((resolve,reject)=>{
    wx.request({
      // url: 'https://locally.uieee.com/${url}',    //不能用这种，{}乱码
      url: 'https://locally.uieee.com/'+url,
      data: data,
      success: resolve,
      fail: reject
    })
  })
}