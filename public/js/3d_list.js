var VM = new Vue({
    el: "#main",
    data: {
        list: [],
        id_3d: Utils.getUrlKey("3d_id") || '',
        show3d: false,
        title3d: '',
        url3d: '',
    },
    created: function() {
        this.get3dlist();
    },
    methods: {
        // 获取3d文物
        get3dlist: function() {
            var v = this;
            BaseAjax.get({
                url: baseUrl + "/api/exhibition/exhibit_3d_list",
                data: {
                    p: "t",
                },
                success: function(res) {
                    if (res.status == 1) {
                        // console.log(res)
                        v.list = res.data;
                        // id匹配3d文物
                        // v.id_3d && v.findThis(v.id_3d);
                    }
                },
                error: function(rlt) {
                    console.log(rlt);
                }
            });
        },
        //查看3d文物
        clickEx: function(i) {
            var v = this;
            v.show3d = true;
            v.title3d = v.list[i].exhibit_title;
            v.url3d = v.list[i].url_3d;
        },
        // //根据id匹配3d文物
        // findThis: function(id) {
        //     var v = this;
        //     for (var i = 0, len = v.list.length; i < len; i++) {
        //         if (v.list[i].exhibit_id == id) {
        //             v.clickEx(i);
        //             break;
        //         }
        //     }
        // }
    }
});