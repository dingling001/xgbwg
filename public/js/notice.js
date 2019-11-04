var VM = new Vue({
    el: "#main",
    data: {
        detail: ""
    },
    created: function() {
        this.getNotice();
    },
    methods: {
        // 参观指南
        getNotice: function() {
            var v = this;
            var id = Utils.getUrlKey("id");
            BaseAjax.get({
                url: baseUrl + "/api/museuminfo/info_detail",
                data: {
                    p: "t",
                    type: 2,
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