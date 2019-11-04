var VM = new Vue({
    el: "#main",
    data: {
        pdlist: [
            // {
            //     "news_id": 1,
            //     "title": "测试资讯",
            //     "list_img": "http://192.168.10.158:8899/uploadfiles/resource/20190306/201903061318253742.png",
            //     "brief_desc": "哈哈哈",
            //     "date": "2019年03月06日"
            // }
        ],
        pageNum: 0,
        pageSize: 5,
        isLoaded: false,
        mySwiper: null,
    },
    mounted: function() {
        var self = this;
        this.initSwiper();
    },
    methods: {
        /**
         * 获取展厅列表
         */
        getNewsList: function(isReset, callback) {
            var self = this;
            if (isReset) self.pageNum = 0;
            BaseAjax.get({
                url: baseUrl + "/api/news/news_list",
                data: {
                    p: "t",
                    page_count: self.pageSize,
                    skip: self.pageSize * self.pageNum,
                },
                success: function(res) {
                    if (res.status == 1) {
                        self.pageNum++;
                        "function" === typeof callback && callback(res.data);
                    }
                },
                error: function(err) {
                    console.log(err);
                }
            });
        },
        clkDetail: function(id) {
            window.location.href = "detail.html?id=" + id;
        },
        initSwiper: function() {
            var v = this,
                refreshEnd = false;

            var swiper = new Swiper('#refreshWrap', {
                speed: 300,
                slidesPerView: 'auto',
                freeMode: true,
                direction: 'vertical',
                setWrapperSize: true,
                observer: true,
                observeParents: true,
                scrollbar: {
                    el: '.swiper-scrollbar',
                },
                mousewheel: true,
                on: {
                    init: function() {
                        swiper = this;
                        swiper.removeAllSlides();
                        v.getNewsList(true, function(res) {
                            v.list = res;
                            for (i = 0; i < res.length; i++) {
                                var a = res[i];
                                swiper.appendSlide(v.renderTemp(a));
                            }
                        })
                    },
                    //下拉释放刷新
                    touchEnd: function() {
                        swiper = this;
                        refreshText = swiper.$el.find('.refresh');
                        if (this.translate > 100) {
                            swiper.setTransition(this.params.speed);
                            swiper.setTranslate(100);
                            swiper.touchEventsData.isTouched = false; //跳过touchEnd事件后面的跳转(4.0.5)
                            refreshText.html('刷新中...');

                            swiper.allowTouchMove = false;
                            v.getNewsList(true, function(res) {
                                v.list = res;
                                refreshText.html('刷新完成');
                                setTimeout(function() {
                                    swiper.removeAllSlides();
                                    for (i = 0; i < res.length; i++) {
                                        var a = res[i];
                                        swiper.appendSlide(v.renderTemp(a));
                                        refreshEnd = true;
                                        swiper.allowTouchMove = true;
                                    }
                                }, 500)
                            })
                        }
                        //加载更多
                        if (this.translate < -100) {
                            v.getNewsList(false, function(res) {
                                v.list = v.list.concat(res);
                                for (j = 0; j < res.length; j++) {
                                    var a = res[j];
                                    swiper.appendSlide(v.renderTemp(a));
                                }
                            })
                        }
                    },
                    touchStart: function() {
                        if (refreshEnd == true) {
                            this.$el.find('.refresh').html('释放刷新');
                            refreshEnd = false;
                        }
                    },
                    // //加载更多
                    // momentumBounce: function() { //非正式反弹回调函数，上拉释放加载更多可参考上例
                    //     swiper = this;
                    //     if (swiper.translate < -100) {
                    //         swiper.allowTouchMove = false; //禁止触摸
                    //         swiper.params.virtualTranslate = true; //定住不给回弹

                    //         v.getNewsList(false, function(res) {
                    //             v.list = v.list.concat(res);
                    //             for (j = 0; j < res.length; j++) {
                    //                 var a = res[j];
                    //                 swiper.appendSlide(v.renderTemp(a));
                    //             }
                    //             swiper.params.virtualTranslate = false;
                    //             swiper.allowTouchMove = true;
                    //         })
                    //     }
                    // },
                    click: function() {
                        var id = this.clickedSlide.dataset.id;
                        window.location.href = "detail.html?id=" + id;
                    },
                }
            });
        },
        renderTemp: function(a) {
            var temp = `<div class="swiper-slide" data-id="${a.news_id}">
                            <div class="left_img">
                                <img src="${a.list_img}">
                            </div>
                            <div class="right_txt">
                                <div class="title">${a.title}</div>
                                <div class="txt">${a.brief_desc}</div>
                                <div class="date">${a.date}</div>
                            </div>
                        </div>`;
            return temp;
        }
    }
});