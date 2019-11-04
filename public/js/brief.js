var VM = new Vue({
    el: "#main",
    data: {
        detail: ""
    },
    created: function() {
        this.getBrief();
    },
    methods: {
        // 获取简介
        getBrief: function() {
            var v = this;
            BaseAjax.get({
                url: baseUrl + "/api/museuminfo/info_detail",
                data: {
                    p: "t",
                    type: 1,
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