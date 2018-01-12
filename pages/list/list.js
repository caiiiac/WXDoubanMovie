const api = require('../../api/api.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    page: 1,
    size: 20,
    type: 'in_theaters',
    subtitle: '加载中...',
    loading: true,
    hasMore: true,
    movies: []
  },

  loadMore() {
    console.log('loadmore')
    if (!this.data.hasMore) return

    this.setData({ subtitle: '加载中...', loading: true })
    api.find(this.data.type, this.data.page++, this.data.size)
      .then(d => {
        if (d.subjects.length) {
          this.setData({ subtitle: d.title, movies: this.data.movies.concat(d.subjects), loading: false })
        } else {
          this.setData({ subtitle: d.title, hasMore: false, loading: false })
        }
      })
      .catch(e => {
        this.setData({ subtitle: '获取数据失败', loading: false })
        console.error(e)
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.title = options.title || this.data.title

    this.data.type = options.type || this.data.type

    api.find(this.data.type, this.data.page++, this.data.size)
      .then(d => {
        if(d.subjects.length) {
          this.setData({ subtitle: d.title, movies: d.subjects, loading: false })
        } else {
          this.setData({ hasMore: false, loading: false })
        }
      })
      .catch(e => {
        this.setData({ subtitle: '获取数据失败', movies: [], loading: false })
        console.error(e)
      })
  },
  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: this.data.title,
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