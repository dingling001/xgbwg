var VM = new Vue({
    el: "#main",
    data: {
        api_token: localStorage.getItem("api_token") || "",
        id: Utils.getUrlKey("id") || "",
        detail: {
            imgs: [],
            title: "",
            is_collected: 0,
            collect_num: 0, //收藏数量
            share_count: 0, //分享数量
            content: "",
            audio: "",
        },
        isshowlayer: false,
        sharecode: null,
        show3d: false,
        title3d: '',
        url3d: '',
    },
    created: function() {
        var vm = this;
    },
    mounted: function() {
        var vm = this;
        vm.id && vm.getDetail();
    },
    methods: {
        // 获取详情
        getDetail: function() {
            var vm = this;
            BaseAjax.get({
                url: baseUrl + "/api/exhibition/exhibit_detail",
                data: {
                    p: "t",
                    exhibit_id: vm.id,
                    api_token: vm.api_token
                },
                success: function(res) {
                    if (res.status == 1) {
                        // console.log(res)
                        vm.detail = res.data;
                        vm.$nextTick(function() {
                            setaudio();
                            vm.initSwiper();
                        });
                        setTimeout(function() {
                            Utils.initScrollCont();
                        }, 500)
                    }
                },
                error: function(err) {
                    console.log(err);
                }
            });
        },
        initSwiper: function() {
            var swiper = new Swiper('#imgWrap', {
                effect: 'slide',
                pagination: {
                    el: '.swiper-pagination',
                },
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: false
                },
                loop: false,
                slidesPerView: 1,
                centeredSlides: true,
                observer: true,
                observerParents: true
            });
        },
        // 收藏-取消收藏
        toggleCollect: function() {
            var vm = this;
            if (!vm.api_token) {
                $(".loginEle").show();
                return;
            }
            if (vm.detail.is_collected == 0) {
                //收藏
                BaseAjax.get({
                    url: baseUrl + "/api/touchuser/collect_do",
                    data: {
                        p: "t",
                        exhibit_id: vm.id,
                        api_token: vm.api_token
                    },
                    success: function(res) {
                        if (res.status == 1) {
                            vm.detail.is_collected = 1;
                            vm.detail.collect_num++;
                        }
                    },
                    error: function(err) {
                        console.log(err);
                    }
                });
            } else if (vm.detail.is_collected == 1) {
                //取消收藏
                BaseAjax.get({
                    url: baseUrl + "/api/touchuser/collect_cancel",
                    data: {
                        p: "t",
                        exhibit_id: vm.id,
                        api_token: vm.api_token
                    },
                    success: function(res) {
                        if (res.status == 1) {
                            vm.detail.is_collected = 0;
                            if (vm.detail.collect_num > 0) {
                                vm.detail.collect_num--;
                            }
                        }
                    },
                    error: function(err) {
                        console.log(err);
                    }
                });
            }
        },
        // 展品分享，显示分享二维码
        share: function() {
            var vm = this;
            var shareurl = window.location.href.replace("detail", "detail_h5");
            $("#qrcode").empty();
            vm.isshowlayer = true;
            vm.sharecode = new QRCode("qrcode", {
                text: shareurl,
                width: 400,
                height: 400,
                colorDark: "#000000",
                colorLight: "#ffffff",
                correctLevel: QRCode.CorrectLevel.H
            });
            BaseAjax.get({
                url: baseUrl + "/api/touchuser/exhibit_share",
                data: {
                    p: "t",
                    exhibit_id: vm.id
                },
                success: function(res) {
                    if (res.status == 1) {
                        vm.detail.share_count++;
                    }
                },
                error: function(err) {
                    console.log(err);
                }
            });
        },
        view3d: function() {
            var vm = this;
            vm.show3d = true;
        },
        // 返回操作
        exBack: function() {
            var vm = this;
            if (Utils.getUrlKey("roomi")) {
                window.location.href = "exhibition.html?roomi=" + Utils.getUrlKey("roomi");
            } else {
                window.history.back();
            }
        },
    }
});
// 关闭-登录-提示弹出层
$(".loginEle .right .c2").click(function() {
    $(".loginEle").hide();
});
// 关闭-退出登录-提示弹出层
$(".logoutEle .center .c2").click(function() {
    $(".logoutEle").hide();
});