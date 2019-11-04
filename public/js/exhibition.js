var VM = new Vue({
    el: "#main",
    data: {
        roomi: 0,
        list: [],
        //底部导航
        roomlist: [],
        roomDetail: {
            exhibition_imgs: []
        },
        isLayer: false, //列表弹层
        isLayerDe: false, //详情弹层
        currentIdx: 0,
        // 弹层中的展厅列表
        // layerList: [{
        //         exhibit_id: 11,
        //         title: "测1试展品测试展品",
        //         exhibit_count: "30",
        //         list_img: "../../public/images/icon_youke.png"
        //     },
        //     {
        //         exhibit_id: 11,
        //         title: "测1试展品测试展品",
        //         exhibit_count: "30",
        //         list_img: "../../public/images/icon_youke.png"
        //     },
        // ],
    },
    created: function() {
        var vm = this;
        if (Utils.getUrlKey("roomi")) {
            vm.roomi = Utils.getUrlKey("roomi");
        }
    },
    mounted: function() {
        var vm = this;
        vm.getLeftMenu();
        vm.getRoomlist();
    },
    methods: {
        /**
         * @获取左侧菜单
         */
        getLeftMenu: function() {
            // 加载公共元素：logo、左侧菜单
            BaseAjax.get({
                url: "../common/nav.html",
                success: function(res) {
                    $(".main").prepend(res);
                    $(".leftnav").find(".sub3").addClass("on");
                    Utils.setLoctime();
                }
            });
        },
        /**
         * @获取底部展厅列表导航
         */
        getRoomlist: function() {
            var vm = this;
            BaseAjax.get({
                url: baseUrl + "/api/exhibition/exhibition_list",
                data: {
                    p: "t"
                },
                success: function(res) {
                    // console.log(res.data)
                    vm.roomlist = res.data;
                    vm.getList();
                }
            });
        },
        /**
         * @获取当前展厅展品列表
         */
        getList: function() {
            var vm = this;
            if (vm.roomlist.length > 0) {
                var id = vm.roomlist[vm.roomi].exhibition_id;
                BaseAjax.get({
                    url: baseUrl + "/api/exhibition/exhibit_list_exhibition_id",
                    data: {
                        p: "t",
                        exhibition_id: id
                    },
                    success: function(res) {
                        vm.list = res.data;
                        // console.log(res.data)
                        if (res.data.length) {
                            vm.$nextTick(function() {
                                vm.initMainSwiper();
                            })
                        }
                    }
                })
            }
        },
        initMainSwiper: function() {
            var mySwiper1 = new Swiper("#mySwiper1", {
                freeMode : true,
                slidesPerView: 'auto',
                centeredSlides: false,
                observer: true,
                observeParents: true,
            });
        },
        // 切换展厅
        changeRoom: function(i) {
            var vm = this;
            vm.roomi = i;
            vm.getList();
        },
        // 点击展品查看详情
        clickEx: function(i) {
            var vm = this;
            var id = vm.list[i].exhibit_id;
            window.location.href = "detail.html?roomi=" + vm.roomi + "&id=" + id;
        },
    }
});