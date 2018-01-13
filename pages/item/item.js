const api = require('../../api/api.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    loading: true,
    movie: {}
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    api.findOne(options.id)
      .then(d => this.setData({ title: d.title, movie: d, loading: false }))
      .catch(e => {
        this.setData({ title: '获取数据失败', movie: {}, loading: false })
        console.error(e)
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: this.data.title
    })
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