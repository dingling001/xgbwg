var VM = new Vue({
    el: "#main",
    data: {
        api_token: localStorage.getItem("api_token") || "",
        today: null,
        list:[],
        lists: [
            {
                exhibit_id: 1,
                img: "http://192.168.10.158:8856/uploadfiles/resource/20191120/201911201412256154.png",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },
            {
                exhibit_id: 2,
                img: "http://192.168.10.158:8856/uploadfiles/resource/20191120/201911201412256154.png",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },
            {
                exhibit_id: 3,
                img: "http://192.168.10.158:8856/uploadfiles/resource/20191120/201911201412256154.png",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },
            {
                exhibit_id: 4,
                img: "http://192.168.10.158:8856/uploadfiles/resource/20191120/201911201412256154.png",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },
            {
                exhibit_id: 5,
                img: "http://192.168.10.158:8856/uploadfiles/resource/20191120/201911201412256154.png",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },
            {
                exhibit_id: 6,
                img: "http://192.168.10.158:8856/uploadfiles/resource/20191120/201911201412256154.png",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },
            {
                exhibit_id: 7,
                img: "http://192.168.10.158:8856/uploadfiles/resource/20191120/201911201412256154.png",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },
            {
                exhibit_id: 8,
                img: "http://192.168.10.158:8856/uploadfiles/resource/20191120/201911201412256154.png",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },
            {
                exhibit_id: 8,
                img: "http://192.168.10.158:8856/uploadfiles/resource/20191120/201911201412256154.png",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },
            {
                exhibit_id: 8,
                img: "http://192.168.10.158:8856/uploadfiles/resource/20191120/201911201412256154.png",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },
            {
                exhibit_id: 8,
                img: "http://192.168.10.158:8856/uploadfiles/resource/20191120/201911201412256154.png",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },
            {
                exhibit_id: 8,
                img: "http://192.168.10.158:8856/uploadfiles/resource/20191120/201911201412256154.png",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },
            {
                exhibit_id: 8,
                img: "http://192.168.10.158:8856/uploadfiles/resource/20191120/201911201412256154.png",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },
            {
                exhibit_id: 8,
                img: "http://192.168.10.158:8856/uploadfiles/resource/20191120/201911201412256154.png",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },
            {
                exhibit_id: 8,
                img: "http://192.168.10.158:8856/uploadfiles/resource/20191120/201911201412256154.png",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },
            {
                exhibit_id: 8,
                img: "http://192.168.10.158:8856/uploadfiles/resource/20191120/201911201412256154.png",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },{
                exhibit_id: 8,
                img: "http://192.168.10.158:8856/uploadfiles/resource/20191120/201911201412256154.png",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },{
                exhibit_id: 8,
                img: "http://192.168.10.158:8856/uploadfiles/resource/20191120/201911201412256154.png",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },{
                exhibit_id: 8,
                img: "http://192.168.10.158:8856/uploadfiles/resource/20191120/201911201412256154.png",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },{
                exhibit_id: 8,
                img: "http://192.168.10.158:8856/uploadfiles/resource/20191120/201911201412256154.png",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },{
                exhibit_id: 8,
                img: "http://192.168.10.158:8856/uploadfiles/resource/20191120/201911201412256154.png",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },{
                exhibit_id: 8,
                img: "http://192.168.10.158:8856/uploadfiles/resource/20191120/201911201412256154.png",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },{
                exhibit_id: 8,
                img: "http://192.168.10.158:8856/uploadfiles/resource/20191120/201911201412256154.png",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },{
                exhibit_id: 8,
                img: "http://192.168.10.158:8856/uploadfiles/resource/20191120/201911201412256154.png",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },{
                exhibit_id: 8,
                img: "http://192.168.10.158:8856/uploadfiles/resource/20191120/201911201412256154.png",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },{
                exhibit_id: 8,
                img: "http://192.168.10.158:8856/uploadfiles/resource/20191120/201911201412256154.png",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },{
                exhibit_id: 8,
                img: "http://192.168.10.158:8856/uploadfiles/resource/20191120/201911201412256154.png",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },{
                exhibit_id: 8,
                img: "http://192.168.10.158:8856/uploadfiles/resource/20191120/201911201412256154.png",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },{
                exhibit_id: 8,
                img: "http://192.168.10.158:8856/uploadfiles/resource/20191120/201911201412256154.png",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },{
                exhibit_id: 8,
                img: "http://192.168.10.158:8856/uploadfiles/resource/20191120/201911201412256154.png",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },{
                exhibit_id: 8,
                img: "http://192.168.10.158:8856/uploadfiles/resource/20191120/201911201412256154.png",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },{
                exhibit_id: 8,
                img: "http://192.168.10.158:8856/uploadfiles/resource/20191120/201911201412256154.png",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },{
                exhibit_id: 8,
                img: "http://192.168.10.158:8856/uploadfiles/resource/20191120/201911201412256154.png",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },{
                exhibit_id: 8,
                img: "http://192.168.10.158:8856/uploadfiles/resource/20191120/201911201412256154.png",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },{
                exhibit_id: 8,
                img: "http://192.168.10.158:8856/uploadfiles/resource/20191120/201911201412256154.png",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },{
                exhibit_id: 8,
                img: "http://192.168.10.158:8856/uploadfiles/resource/20191120/201911201412256154.png",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },{
                exhibit_id: 8,
                img: "http://192.168.10.158:8856/uploadfiles/resource/20191120/201911201412256154.png",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },{
                exhibit_id: 8,
                img: "http://192.168.10.158:8856/uploadfiles/resource/20191120/201911201412256154.png",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },{
                exhibit_id: 8,
                img: "http://192.168.10.158:8856/uploadfiles/resource/20191120/201911201412256154.png",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },{
                exhibit_id: 8,
                img: "http://192.168.10.158:8856/uploadfiles/resource/20191120/201911201412256154.png",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },{
                exhibit_id: 8,
                img: "http://192.168.10.158:8856/uploadfiles/resource/20191120/201911201412256154.png",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },{
                exhibit_id: 8,
                img: "http://192.168.10.158:8856/uploadfiles/resource/20191120/201911201412256154.png",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },{
                exhibit_id: 8,
                img: "http://192.168.10.158:8856/uploadfiles/resource/20191120/201911201412256154.png",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },{
                exhibit_id: 8,
                img: "http://192.168.10.158:8856/uploadfiles/resource/20191120/201911201412256154.png",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },{
                exhibit_id: 8,
                img: "http://192.168.10.158:8856/uploadfiles/resource/20191120/201911201412256154.png",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },{
                exhibit_id: 8,
                img: "http://192.168.10.158:8856/uploadfiles/resource/20191120/201911201412256154.png",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },{
                exhibit_id: 8,
                img: "http://192.168.10.158:8856/uploadfiles/resource/20191120/201911201412256154.png",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },{
                exhibit_id: 8,
                img: "http://192.168.10.158:8856/uploadfiles/resource/20191120/201911201412256154.png",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },{
                exhibit_id: 8,
                img: "http://192.168.10.158:8856/uploadfiles/resource/20191120/201911201412256154.png",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },{
                exhibit_id: 8,
                img: "http://192.168.10.158:8856/uploadfiles/resource/20191120/201911201412256154.png",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },{
                exhibit_id: 8,
                img: "http://192.168.10.158:8856/uploadfiles/resource/20191120/201911201412256154.png",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },{
                exhibit_id: 8,
                img: "http://192.168.10.158:8856/uploadfiles/resource/20191120/201911201412256154.png",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },{
                exhibit_id: 8,
                img: "http://192.168.10.158:8856/uploadfiles/resource/20191120/201911201412256154.png",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },{
                exhibit_id: 8,
                img: "http://192.168.10.158:8856/uploadfiles/resource/20191120/201911201412256154.png",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },{
                exhibit_id: 8,
                img: "http://192.168.10.158:8856/uploadfiles/resource/20191120/201911201412256154.png",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },{
                exhibit_id: 8,
                img: "http://192.168.10.158:8856/uploadfiles/resource/20191120/201911201412256154.png",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },{
                exhibit_id: 8,
                img: "http://192.168.10.158:8856/uploadfiles/resource/20191120/201911201412256154.png",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },{
                exhibit_id: 8,
                img: "http://192.168.10.158:8856/uploadfiles/resource/20191120/201911201412256154.png",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },{
                exhibit_id: 8,
                img: "http://192.168.10.158:8856/uploadfiles/resource/20191120/201911201412256154.png",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },{
                exhibit_id: 8,
                img: "http://192.168.10.158:8856/uploadfiles/resource/20191120/201911201412256154.png",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },{
                exhibit_id: 8,
                img: "http://192.168.10.158:8856/uploadfiles/resource/20191120/201911201412256154.png",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },{
                exhibit_id: 8,
                img: "http://192.168.10.158:8856/uploadfiles/resource/20191120/201911201412256154.png",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },{
                exhibit_id: 8,
                img: "http://192.168.10.158:8856/uploadfiles/resource/20191120/201911201412256154.png",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },{
                exhibit_id: 8,
                img: "http://192.168.10.158:8856/uploadfiles/resource/20191120/201911201412256154.png",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },{
                exhibit_id: 8,
                img: "http://192.168.10.158:8856/uploadfiles/resource/20191120/201911201412256154.png",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },{
                exhibit_id: 8,
                img: "http://192.168.10.158:8856/uploadfiles/resource/20191120/201911201412256154.png",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },{
                exhibit_id: 8,
                img: "http://192.168.10.158:8856/uploadfiles/resource/20191120/201911201412256154.png",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },{
                exhibit_id: 8,
                img: "http://192.168.10.158:8856/uploadfiles/resource/20191120/201911201412256154.png",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },{
                exhibit_id: 8,
                img: "http://192.168.10.158:8856/uploadfiles/resource/20191120/201911201412256154.png",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },{
                exhibit_id: 8,
                img: "http://192.168.10.158:8856/uploadfiles/resource/20191120/201911201412256154.png",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },{
                exhibit_id: 8,
                img: "http://192.168.10.158:8856/uploadfiles/resource/20191120/201911201412256154.png",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },{
                exhibit_id: 8,
                img: "http://192.168.10.158:8856/uploadfiles/resource/20191120/201911201412256154.png",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },{
                exhibit_id: 8,
                img: "http://192.168.10.158:8856/uploadfiles/resource/20191120/201911201412256154.png",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },{
                exhibit_id: 8,
                img: "http://192.168.10.158:8856/uploadfiles/resource/20191120/201911201412256154.png",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },{
                exhibit_id: 8,
                img: "http://192.168.10.158:8856/uploadfiles/resource/20191120/201911201412256154.png",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },{
                exhibit_id: 8,
                img: "http://192.168.10.158:8856/uploadfiles/resource/20191120/201911201412256154.png",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },
        //
        ]
    },
    created: function() {
        var vm = this;
        vm.today = vm.getCurrentDay();
    },
    mounted: function() {
        var vm = this;
        vm.getLeftMenu();
        if (vm.api_token) {
            vm.getList();
        }
    },
    filters: {
        time: function(val) {
            return val.split("/")[1];
        },
    },
    methods: {

        /**
         * @获取当前日期
         */
        getCurrentDay: function() {
            var da = new Date();
            var y = da.getFullYear();
            var m = da.getMonth() + 1;
            var d = da.getDate();
            m = m < 10 ? "0" + m : m;
            d = d < 10 ? "0" + d : d;
            return y + "-" + m + "-" + d;
        },
        /**
         * @缩略图
         */
        toThumbsimg: function(path, width, height, type) {
            return baseUrl + toThumbsimg(path, width, height, type);
        },
        /**
         * @获取左侧菜单
         */
        getLeftMenu: function() {
            $.ajax({
                type: "get",
                url: "../common/nav.html",
                success: function(rlt) {
                    $(".main").prepend(rlt);
                    $(".leftnav").find(".sub21").addClass("on");
                }
            });
        },
        /**
         * @获取浏览历史列表
         */
        getList: function() {
            var vm = this;
            $.ajax({
                url: baseUrl + "/api/my_looked",
                type: "get",
                data: {
                    p: "t",
                    api_token: vm.api_token,
                    language:1,
                    skip:0,
                    take:10000
                },
                success: function(rlt) {
                    if (rlt.status == 1) {
                        vm.list = rlt.data;
                        vm.$nextTick(function(){
                            if(vm.list.length){
                                Utils.creatScroll();
                            }
                        })
                        // console.log(rlt.data)
                    }
                },
                error: function(rlt) {
                    console.log(rlt);
                }
            });
        },
        /**
         * @点击查看详情
         */
        clkEx: function(i) {
            var vm = this;
            var id = vm.list[i].exhibit_id;
            window.location.href = "../exhibition/detail.html?id=" + id;
        },
    }
});