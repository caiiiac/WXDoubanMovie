const api = require('../../api/api.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    boards: [
      { key: 'in_theaters', name: '正在热映' },
      { key: 'coming_soon', name: '即将上映' },
      { key: 'top250', name: 'TOP250' },
      { key: 'us_box', name: '北美票房榜' },
    ],
    movies: [],
    loading: true,
    imgUrls:[
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2508926717.jpg',
      'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2507227732.jpg'
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    api.find('in_theaters', 1, 5)
      .then(d => this.setData({ movies: d.subjects, loading: false}))
      .catch(e => {
        console.error(e)
        this.setData({ movies: [], loading: false })
      })
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