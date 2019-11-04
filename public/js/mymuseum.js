var VM = new Vue({
    el: "#main",
    data: {
        api_token: localStorage.getItem("api_token") || "",
        res_collectList: [{
            "title": "122",
            "exhibit_id": 1,
            "time": "2018-10-24 09:42:00",
            "img": "/uploadfiles/exhibition/20181024/201810240933242142.png"
        }, {
            "title": "122",
            "exhibit_id": 1,
            "time": "2018-10-24 09:42:00",
            "img": "/uploadfiles/exhibition/20181024/201810240933242142.png"
        }, {
            "title": "122",
            "exhibit_id": 1,
            "time": "2018-10-24 09:42:00",
            "img": "/uploadfiles/exhibition/20181024/201810240933242142.png"
        }, {
            "title": "122",
            "exhibit_id": 1,
            "time": "2018-10-24 09:42:00",
            "img": "/uploadfiles/exhibition/20181024/201810240933242142.png"
        }, {
            "title": "122",
            "exhibit_id": 1,
            "time": "2018-10-24 09:42:00",
            "img": "/uploadfiles/exhibition/20181024/201810240933242142.png"
        }, {
            "title": "122",
            "exhibit_id": 1,
            "time": "2018-10-24 09:42:00",
            "img": "/uploadfiles/exhibition/20181024/201810240933242142.png"
        }, {
            "title": "122",
            "exhibit_id": 1,
            "time": "2018-10-24 09:42:00",
            "img": "/uploadfiles/exhibition/20181024/201810240933242142.png"
        }, {
            "title": "122",
            "exhibit_id": 1,
            "time": "2018-10-24 09:42:00",
            "img": "/uploadfiles/exhibition/20181024/201810240933242142.png"
        }, {
            "title": "122",
            "exhibit_id": 1,
            "time": "2018-10-24 09:42:00",
            "img": "/uploadfiles/exhibition/20181024/201810240933242142.png"
        }, {
            "title": "122",
            "exhibit_id": 1,
            "time": "2018-10-24 09:42:00",
            "img": "/uploadfiles/exhibition/20181024/201810240933242142.png"
        }, {
            "title": "122",
            "exhibit_id": 1,
            "time": "2018-10-24 09:42:00",
            "img": "/uploadfiles/exhibition/20181024/201810240933242142.png"
        }, {
            "title": "122",
            "exhibit_id": 1,
            "time": "2018-10-24 09:42:00",
            "img": "/uploadfiles/exhibition/20181024/201810240933242142.png"
        }, {
            "title": "122",
            "exhibit_id": 1,
            "time": "2018-10-24 09:42:00",
            "img": "/uploadfiles/exhibition/20181024/201810240933242142.png"
        }, {
            "title": "122",
            "exhibit_id": 1,
            "time": "2018-10-24 09:42:00",
            "img": "/uploadfiles/exhibition/20181024/201810240933242142.png"
        }, {
            "title": "122",
            "exhibit_id": 1,
            "time": "2018-10-24 09:42:00",
            "img": "/uploadfiles/exhibition/20181024/201810240933242142.png"
        }, {
            "title": "122",
            "exhibit_id": 1,
            "time": "2018-10-24 09:42:00",
            "img": "/uploadfiles/exhibition/20181024/201810240933242142.png"
        }, ],
        res_historyList: [{
                "exhibit_id": 1,
                "img": "http://192.168.10.158:8899/uploadfiles/resource/20190314/201903141612024018.png",
                "time": "10:06",
                "title": "122"
            }, {
                "exhibit_id": 1,
                "img": "http://192.168.10.158:8899/uploadfiles/resource/20190314/201903141612024018.png",
                "time": "10:06",
                "title": "122"
            }, {
                "exhibit_id": 1,
                "img": "http://192.168.10.158:8899/uploadfiles/resource/20190314/201903141612024018.png",
                "time": "10:06",
                "title": "122"
            }, {
                "exhibit_id": 1,
                "img": "http://192.168.10.158:8899/uploadfiles/resource/20190314/201903141612024018.png",
                "time": "10:06",
                "title": "122"
            }, {
                "exhibit_id": 1,
                "img": "http://192.168.10.158:8899/uploadfiles/resource/20190314/201903141612024018.png",
                "time": "10:06",
                "title": "122"
            }, {
                "exhibit_id": 1,
                "img": "http://192.168.10.158:8899/uploadfiles/resource/20190314/201903141612024018.png",
                "time": "10:06",
                "title": "122"
            }, {
                "exhibit_id": 1,
                "img": "http://192.168.10.158:8899/uploadfiles/resource/20190314/201903141612024018.png",
                "time": "10:06",
                "title": "122"
            }, {
                "exhibit_id": 1,
                "img": "http://192.168.10.158:8899/uploadfiles/resource/20190314/201903141612024018.png",
                "time": "10:06",
                "title": "122"
            }, {
                "exhibit_id": 1,
                "img": "http://192.168.10.158:8899/uploadfiles/resource/20190314/201903141612024018.png",
                "time": "10:06",
                "title": "122"
            }, {
                "exhibit_id": 1,
                "img": "http://192.168.10.158:8899/uploadfiles/resource/20190314/201903141612024018.png",
                "time": "10:06",
                "title": "122"
            }, {
                "exhibit_id": 1,
                "img": "http://192.168.10.158:8899/uploadfiles/resource/20190314/201903141612024018.png",
                "time": "10:06",
                "title": "122"
            }, {
                "exhibit_id": 1,
                "img": "http://192.168.10.158:8899/uploadfiles/resource/20190314/201903141612024018.png",
                "time": "10:06",
                "title": "122"
            }, {
                "exhibit_id": 1,
                "img": "http://192.168.10.158:8899/uploadfiles/resource/20190314/201903141612024018.png",
                "time": "10:06",
                "title": "122"
            }, {
                "exhibit_id": 1,
                "img": "http://192.168.10.158:8899/uploadfiles/resource/20190314/201903141612024018.png",
                "time": "10:06",
                "title": "122"
            }, {
                "exhibit_id": 1,
                "img": "http://192.168.10.158:8899/uploadfiles/resource/20190314/201903141612024018.png",
                "time": "10:06",
                "title": "122"
            }, {
                "exhibit_id": 1,
                "img": "http://192.168.10.158:8899/uploadfiles/resource/20190314/201903141612024018.png",
                "time": "10:06",
                "title": "122"
            }, {
                "exhibit_id": 1,
                "img": "http://192.168.10.158:8899/uploadfiles/resource/20190314/201903141612024018.png",
                "time": "10:06",
                "title": "122"
            }, {
                "exhibit_id": 1,
                "img": "http://192.168.10.158:8899/uploadfiles/resource/20190314/201903141612024018.png",
                "time": "10:06",
                "title": "122"
            }, {
                "exhibit_id": 1,
                "img": "http://192.168.10.158:8899/uploadfiles/resource/20190314/201903141612024018.png",
                "time": "10:06",
                "title": "122"
            }, {
                "exhibit_id": 1,
                "img": "http://192.168.10.158:8899/uploadfiles/resource/20190314/201903141612024018.png",
                "time": "10:06",
                "title": "122"
            }, {
                "exhibit_id": 1,
                "img": "http://192.168.10.158:8899/uploadfiles/resource/20190314/201903141612024018.png",
                "time": "10:06",
                "title": "122"
            }, {
                "exhibit_id": 1,
                "img": "http://192.168.10.158:8899/uploadfiles/resource/20190314/201903141612024018.png",
                "time": "10:06",
                "title": "122"
            }, {
                "exhibit_id": 1,
                "img": "http://192.168.10.158:8899/uploadfiles/resource/20190314/201903141612024018.png",
                "time": "10:06",
                "title": "122"
            }, {
                "exhibit_id": 1,
                "img": "http://192.168.10.158:8899/uploadfiles/resource/20190314/201903141612024018.png",
                "time": "10:06",
                "title": "122"
            }, {
                "exhibit_id": 1,
                "img": "http://192.168.10.158:8899/uploadfiles/resource/20190314/201903141612024018.png",
                "time": "10:06",
                "title": "122"
            }, {
                "exhibit_id": 1,
                "img": "http://192.168.10.158:8899/uploadfiles/resource/20190314/201903141612024018.png",
                "time": "10:06",
                "title": "122"
            }, {
                "exhibit_id": 1,
                "img": "http://192.168.10.158:8899/uploadfiles/resource/20190314/201903141612024018.png",
                "time": "10:06",
                "title": "122"
            }, {
                "exhibit_id": 1,
                "img": "http://192.168.10.158:8899/uploadfiles/resource/20190314/201903141612024018.png",
                "time": "10:06",
                "title": "122"
            }, {
                "exhibit_id": 1,
                "img": "http://192.168.10.158:8899/uploadfiles/resource/20190314/201903141612024018.png",
                "time": "10:06",
                "title": "122"
            }, {
                "exhibit_id": 1,
                "img": "http://192.168.10.158:8899/uploadfiles/resource/20190314/201903141612024018.png",
                "time": "10:06",
                "title": "122"
            }, {
                "exhibit_id": 1,
                "img": "http://192.168.10.158:8899/uploadfiles/resource/20190314/201903141612024018.png",
                "time": "10:06",
                "title": "122"
            }, {
                "exhibit_id": 1,
                "img": "http://192.168.10.158:8899/uploadfiles/resource/20190314/201903141612024018.png",
                "time": "10:06",
                "title": "122"
            }, {
                "exhibit_id": 1,
                "img": "http://192.168.10.158:8899/uploadfiles/resource/20190314/201903141612024018.png",
                "time": "10:06",
                "title": "122"
            }, {
                "exhibit_id": 1,
                "img": "http://192.168.10.158:8899/uploadfiles/resource/20190314/201903141612024018.png",
                "time": "10:06",
                "title": "122"
            }, {
                "exhibit_id": 1,
                "img": "http://192.168.10.158:8899/uploadfiles/resource/20190314/201903141612024018.png",
                "time": "10:06",
                "title": "122"
            }, {
                "exhibit_id": 1,
                "img": "http://192.168.10.158:8899/uploadfiles/resource/20190314/201903141612024018.png",
                "time": "10:06",
                "title": "122"
            }, {
                "exhibit_id": 1,
                "img": "http://192.168.10.158:8899/uploadfiles/resource/20190314/201903141612024018.png",
                "time": "10:06",
                "title": "122"
            }, {
                "exhibit_id": 1,
                "img": "http://192.168.10.158:8899/uploadfiles/resource/20190314/201903141612024018.png",
                "time": "10:06",
                "title": "122"
            }, {
                "exhibit_id": 1,
                "img": "http://192.168.10.158:8899/uploadfiles/resource/20190314/201903141612024018.png",
                "time": "10:06",
                "title": "122"
            }, {
                "exhibit_id": 1,
                "img": "http://192.168.10.158:8899/uploadfiles/resource/20190314/201903141612024018.png",
                "time": "10:06",
                "title": "122"
            }, {
                "exhibit_id": 1,
                "img": "http://192.168.10.158:8899/uploadfiles/resource/20190314/201903141612024018.png",
                "time": "10:06",
                "title": "122"
            }, {
                "exhibit_id": 1,
                "img": "http://192.168.10.158:8899/uploadfiles/resource/20190314/201903141612024018.png",
                "time": "10:06",
                "title": "122"
            }, {
                "exhibit_id": 1,
                "img": "http://192.168.10.158:8899/uploadfiles/resource/20190314/201903141612024018.png",
                "time": "10:06",
                "title": "122"
            }, {
                "exhibit_id": 1,
                "img": "http://192.168.10.158:8899/uploadfiles/resource/20190314/201903141612024018.png",
                "time": "10:06",
                "title": "122"
            },

        ],
        collectList: [],
        historyList: [],
        curNav: 1,
    },
    created: function() {
        var vm = this;
        vm.getCollectList();
    },
    mounted: function() {
        var vm = this;
    },
    filters: {
        time: function(val) {
            return val && val.split("/")[1];
        },
    },
    methods: {
        /**
         * @获取收藏列表
         */
        getCollectList: function() {
            var vm = this;
            BaseAjax.get({
                url: baseUrl + "/api/touchuser/all_collect",
                data: {
                    p: "t",
                    api_token: vm.api_token
                },
                success: function(res) {
                    if (res.status == 1) {
                        // console.log(res.data)
                        // vm.collectList = vm.to2DArray(vm.res_collectList, 10);
                        vm.collectList = vm.to2DArray(res.data, 10);
                        vm.$nextTick(function() {
                            vm.initSwiper1();
                        })
                    }
                },
                error: function(err) {
                    console.log(err);
                }
            });
        },
        /**
         * @获取浏览历史列表
         */
        getHistoryList: function() {
            var vm = this;
            BaseAjax.get({
                url: baseUrl + "/api/touchuser/all_history",
                data: {
                    p: "t",
                    api_token: vm.api_token
                },
                success: function(res) {
                    if (res.status == 1) {
                        // console.log(res.data)
                        // vm.historyList = vm.to2DArray(vm.res_historyList, 24);
                        vm.historyList = vm.to2DArray(res.data, 24);
                        vm.$nextTick(function() {
                            vm.initSwiper2();
                        })
                    }
                },
                error: function(err) {
                    console.log(err);
                }
            });
        },
        initSwiper1: function() {
            var swiper1 = new Swiper('#mySwiper1', {
                pagination: {
                    el: '.swiper-p1',
                },
                loop: false,
                slidesPerView: 1,
                centeredSlides: true,
                observer: true,
                observerParents: true,
            });
        },
        initSwiper2: function() {
            var swiper2 = new Swiper('#mySwiper2', {
                pagination: {
                    el: '.swiper-p2',
                },
                loop: false,
                slidesPerView: 1,
                centeredSlides: true,
                observer: true,
                observerParents: true
            });
        },
        /**
         * @param    {[Array]}   baseArray [要分割的数组]
         * @param    {[Number]}   arrlen    [单个数组个数]
         * @return   {[type]}             [description]
         */
        to2DArray: function(baseArray, arrlen) {
            let len = baseArray.length;
            let lineNum = len % arrlen === 0 ? len / arrlen : Math.floor((len / arrlen) + 1);
            let res = [];
            for (let i = 0; i < lineNum; i++) {
                // slice() 方法返回一个从开始到结束（不包括结束）选择的数组的一部分浅拷贝到一个新数组对象。且原始数组不会被修改。
                let temp = baseArray.slice(i * arrlen, i * arrlen + arrlen);
                res.push(JSON.parse(JSON.stringify(temp)));
            }
            return res;
        },
        changeNav: function(i) {
            var vm = this;
            vm.curNav = i;
            if (i == 1) {
                vm.getCollectList();
            } else if (i == 2) {
                vm.getHistoryList();
            }
        },
        /**
         * @点击查看详情
         */
        clkEx: function(id) {
            window.location.href = "../exhibition/detail.html?id=" + id;
        },
    }
});