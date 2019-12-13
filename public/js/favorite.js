var VM = new Vue({
    el: "#main",
    data: {
        api_token: localStorage.getItem("api_token") || "",
        list: [{
                exhibit_id: 1,
                img: "/uploadfiles/resource/20190215/201902151359368560.jpg",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },
            {
                exhibit_id: 2,
                img: "/uploadfiles/resource/20190215/201902151359368560.jpg",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },
            {
                exhibit_id: 3,
                img: "/uploadfiles/resource/20190215/201902151359368560.jpg",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },
            {
                exhibit_id: 4,
                img: "/uploadfiles/resource/20190215/201902151359368560.jpg",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },
            {
                exhibit_id: 5,
                img: "/uploadfiles/resource/20190215/201902151359368560.jpg",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },
            {
                exhibit_id: 6,
                img: "/uploadfiles/resource/20190215/201902151359368560.jpg",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },
            {
                exhibit_id: 7,
                img: "/uploadfiles/resource/20190215/201902151359368560.jpg",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },
            {
                exhibit_id: 8,
                img: "/uploadfiles/resource/20190215/201902151359368560.jpg",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },
            {
                exhibit_id: 8,
                img: "/uploadfiles/resource/20190215/201902151359368560.jpg",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },
            {
                exhibit_id: 8,
                img: "/uploadfiles/resource/20190215/201902151359368560.jpg",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },
            {
                exhibit_id: 8,
                img: "/uploadfiles/resource/20190215/201902151359368560.jpg",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },
            {
                exhibit_id: 8,
                img: "/uploadfiles/resource/20190215/201902151359368560.jpg",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },
            {
                exhibit_id: 8,
                img: "/uploadfiles/resource/20190215/201902151359368560.jpg",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },
            {
                exhibit_id: 8,
                img: "/uploadfiles/resource/20190215/201902151359368560.jpg",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },
            {
                exhibit_id: 8,
                img: "/uploadfiles/resource/20190215/201902151359368560.jpg",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            }, {
                exhibit_id: 8,
                img: "/uploadfiles/resource/20190215/201902151359368560.jpg",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            }, {
                exhibit_id: 8,
                img: "/uploadfiles/resource/20190215/201902151359368560.jpg",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            }, {
                exhibit_id: 8,
                img: "/uploadfiles/resource/20190215/201902151359368560.jpg",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            }, {
                exhibit_id: 8,
                img: "/uploadfiles/resource/20190215/201902151359368560.jpg",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            }, {
                exhibit_id: 8,
                img: "/uploadfiles/resource/20190215/201902151359368560.jpg",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            }, {
                exhibit_id: 8,
                img: "/uploadfiles/resource/20190215/201902151359368560.jpg",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            }, {
                exhibit_id: 8,
                img: "/uploadfiles/resource/20190215/201902151359368560.jpg",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            }, {
                exhibit_id: 8,
                img: "/uploadfiles/resource/20190215/201902151359368560.jpg",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            }, {
                exhibit_id: 8,
                img: "/uploadfiles/resource/20190215/201902151359368560.jpg",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            }, {
                exhibit_id: 8,
                img: "/uploadfiles/resource/20190215/201902151359368560.jpg",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            }, {
                exhibit_id: 8,
                img: "/uploadfiles/resource/20190215/201902151359368560.jpg",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            }, {
                exhibit_id: 8,
                img: "/uploadfiles/resource/20190215/201902151359368560.jpg",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            }, {
                exhibit_id: 8,
                img: "/uploadfiles/resource/20190215/201902151359368560.jpg",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            }, {
                exhibit_id: 8,
                img: "/uploadfiles/resource/20190215/201902151359368560.jpg",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            }, {
                exhibit_id: 8,
                img: "/uploadfiles/resource/20190215/201902151359368560.jpg",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            }, {
                exhibit_id: 8,
                img: "/uploadfiles/resource/20190215/201902151359368560.jpg",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            }, {
                exhibit_id: 8,
                img: "/uploadfiles/resource/20190215/201902151359368560.jpg",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            }, {
                exhibit_id: 8,
                img: "/uploadfiles/resource/20190215/201902151359368560.jpg",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            }, {
                exhibit_id: 8,
                img: "/uploadfiles/resource/20190215/201902151359368560.jpg",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            }, {
                exhibit_id: 8,
                img: "/uploadfiles/resource/20190215/201902151359368560.jpg",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            }, {
                exhibit_id: 8,
                img: "/uploadfiles/resource/20190215/201902151359368560.jpg",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            }, {
                exhibit_id: 8,
                img: "/uploadfiles/resource/20190215/201902151359368560.jpg",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            }, {
                exhibit_id: 8,
                img: "/uploadfiles/resource/20190215/201902151359368560.jpg",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            }, {
                exhibit_id: 8,
                img: "/uploadfiles/resource/20190215/201902151359368560.jpg",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            }, {
                exhibit_id: 8,
                img: "/uploadfiles/resource/20190215/201902151359368560.jpg",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            }, {
                exhibit_id: 8,
                img: "/uploadfiles/resource/20190215/201902151359368560.jpg",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            }, {
                exhibit_id: 8,
                img: "/uploadfiles/resource/20190215/201902151359368560.jpg",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            }, {
                exhibit_id: 8,
                img: "/uploadfiles/resource/20190215/201902151359368560.jpg",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            }, {
                exhibit_id: 8,
                img: "/uploadfiles/resource/20190215/201902151359368560.jpg",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            }, {
                exhibit_id: 8,
                img: "/uploadfiles/resource/20190215/201902151359368560.jpg",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            }, {
                exhibit_id: 8,
                img: "/uploadfiles/resource/20190215/201902151359368560.jpg",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            }, {
                exhibit_id: 8,
                img: "/uploadfiles/resource/20190215/201902151359368560.jpg",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            }, {
                exhibit_id: 8,
                img: "/uploadfiles/resource/20190215/201902151359368560.jpg",
                time: "2019-02-15/14:01",
                title: "测试展品1",
            },

        ]
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
            // return val.split("/")[1];
            return val;
        },
    },
    methods: {
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
                    $(".leftnav").find(".sub2").addClass("on");
                }
            });
        },
        /**
         * @获取收藏列表
         */
        getList: function() {
            var vm = this;
            $.ajax({
                url: baseUrl + "/api/touchuser/all_collect",
                type: "get",
                data: {
                    p: "t",
                    api_token: vm.api_token,
                },
                success: function(rlt) {
                    if (rlt.status == 1) {
                        // vm.list = rlt.data;
                        vm.list = vm.to2DArray(rlt.data, 18);
                        // vm.list = vm.to2DArray(vm.list, 18);//模拟数据
                        // console.log(vm.list)
                        vm.$nextTick(function() {
                            vm.initSwiper();
                        })
                    }
                },
                error: function(rlt) {
                    console.log(rlt);
                }
            });
        },
        initSwiper: function() {
            var swiper = new Swiper('.swiper-container', {
                // direction : 'vertical',
                // slidesPerView: 'auto',
                spaceBetween: 15,
                // freeMode: true,
            });
        },
        /**
         * @点击查看详情
         */
        clkEx: function(id) {
            var vm = this;
            window.location.href = "../exhibition/detail.html?from=favorite&id=" + id;
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
        }
    }
});