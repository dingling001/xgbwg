var VM = new Vue({
    el: "#main",
    data: {
        detail: ""
    },
    created: function() {
        this.getDetail();
    },
    methods: {
        // 获取详情
        getDetail: function() {
            var v = this;
            var id = Utils.getUrlKey("id");
            BaseAjax.get({
                url: baseUrl + "/api/news_detail",
                data: {
                    p: "t",
                    news_id: id||1,
                    language_id:1
                },
                success: function(res) {
                    if (res.status == 1) {
                        // console.log(res)
                        v.detail = res.data;
                        setTimeout(function() {
                            Utils.initScrollCont();
                        }, 500)
                    }
                },
                error: function(rlt) {
                    console.log(rlt);
                }
            });
        },
    }
});