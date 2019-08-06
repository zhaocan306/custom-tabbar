Page({
  data: {
    PageCur: 'home'
  },
  // 切换tabbar
  NavChange(e) {
    this.setData({
      PageCur: e.currentTarget.dataset.cur
    })
  },
  // 跳转到商店页面
  toShopping() {
    wx.navigateTo({
      url: '/pages/shop/home/home',
    })
  }
})