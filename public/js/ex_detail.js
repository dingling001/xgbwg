var VM = new Vue({
    el: "#main",
    data: {
        api_token: localStorage.getItem("api_token") || "",
        id: null,
        detail: {
            exhibit_imgs: [],
            title: "",
            is_liked: 0,
            like_num: null,
            share_num: null,
            content: "",
            mp3_audio_path: "",
        },
        isshowlayer: false,
        sharecode: null
    },
    created: function () {
        var vm = this;
        vm.id = Utils.getUrlKey("id");
    },
    mounted: function () {
        var vm = this;
        if (vm.id) {
            vm.getDetail();
        }
    },
    methods: {
        // 获取详情
        getDetail: function () {
            var vm = this;
            $.ajax({
                url: baseUrl + "/api/exhibit_info",
                type: "get",
                data: {
                    p: "w",
                    exhibit_id: vm.id,
                    api_token: vm.api_token
                },
                success: function (rlt) {
                    if (rlt.status == 1) {
                        rlt.data.mp3_audio_path = baseUrl + rlt.data.mp3_audio_path;
                        rlt.data.audio_path = baseUrl + rlt.data.audio_path;
                        vm.detail = rlt.data;
                        vm.$nextTick(function () {
                            setaudio();
                            Utils.creatScroll();
                            vm.initSwiper();
                        });
                    }
                },
                error: function (rlt) {
                    console.log(rlt);
                }
            });
        },
        initSwiper: function () {
            var swiper = new Swiper('.swiper-container', {
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
        toggleCollect: function () {
            var vm = this;
            if (!vm.api_token) {
                $(".loginEle").show();
                return;
            }
                //收藏
                $.ajax({
                    url: baseUrl + "/api/do_like",
                    type: "get",
                    data: {
                        p: "t",
                        exhibit_id: vm.id,
                        type:2,
                        api_token: vm.api_token
                    },
                    success: function (rlt) {
                        if (rlt.status == 1) {
                            if (vm.detail.is_collection == 0) {
                                vm.detail.is_collection = 1;
                                vm.detail.collection_num++;
                            }else{
                                vm.detail.is_collection = 0;
                                if (vm.detail.collection_num > 0) {
                                    vm.detail.collection_num--;
                                }
                            }
                        }
                    },
                    error: function (rlt) {
                        console.log(rlt);
                    }
                });
        },
        // 展品分享，显示分享二维码
        share: function () {
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
            $.ajax({
                url: baseUrl + "/api/incr_share",
                type: "post",
                data: {
                    p: "t",
                    exhibit_id: vm.id
                },
                success: function (rlt) {
                    if (rlt.status == 1) {
                        vm.detail.share_num++;
                    }
                },
                error: function (rlt) {
                    console.log(rlt);
                }
            });
        },
        // 返回操作
        exBack: function () {
            var vm = this;
            // 查询字段：from=favorite【我的收藏】
            if (Utils.getUrlKey("from") && Utils.getUrlKey("from") == "favorite") {
                window.location.href = "../../pages/mymuseum/favorite.html";
            } else if (Utils.getUrlKey("roomi")) {
                window.location.href = "exhibition.html?roomi=" + Utils.getUrlKey("roomi");
            } else {
                window.history.back();
            }
        },
        // 缩略图
        toThumbsimg: function (path, width, height, type) {
            return baseUrl + toThumbsimg(path, width, height, type);
        }
    }
});
// 关闭-登录-提示弹出层
$(".loginEle .right .c2").click(function () {
    $(".loginEle").hide();
});
// 关闭-退出登录-提示弹出层
$(".logoutEle .center .c2").click(function () {
    $(".logoutEle").hide();
});