// 创建一个页面对象
// 如果不显式调用，系统也会自动调用
// 也就是说：此文件可以留空
Page({
    data: {
        list: [],
        loading: true,
        title: 'Loading...'
    },
    onLoad (params) {
        const apiUrl = 'http://t.yushu.im/v2/movie/' + params.type
        const _this = this
        wx.request({
            url: apiUrl,
            data: {},
            header: {
                "Content-Type": "json"
            },
            success: function(res) {
                _this.setData({ 
                    list: res.data.subjects, 
                    title: params.name,
                    loading: false 
                })
            }
        })
    }
})