var SCALE = 1;
var VM = new Vue({
    el: "#main",
    data: {
        info: "", //展厅信息
        lists: [],
        imgWidth: 3720 * SCALE, //图片像素宽
        imgHeight: 2560 * SCALE, //图片像素高
        myMap: null,
    },
    mounted: function() {
        this.getDetail();
        Utils.setLoctime();
    },
    methods: {
        /**
         * @根据展厅ID获取展品
         */
        getDetail: function() {
            var v = this;
            var id = Utils.getUrlKey("id");
            BaseAjax.get({
                url: baseUrl + "/api/exhibition/kas_on_map",
                data: {
                    p: "t",
                    exhibition_id: id
                },
                success: function(res) {
                    // console.log(res.data);
                    v.info = res.data.exhibition_info;
                    v.lists = res.data.auto_nums;
                    v.$nextTick(function() {
                        v.initMap();
                        v.initMarkers();
                    })
                }
            });
        },
        initMap: function() {
            var v = this;
            var imgWidth = v.imgWidth;
            var imgHeight = v.imgHeight;
            var imgUrl = v.info.png_map;
            v.myMap = L.map("map", {
                // 修改坐标系
                crs: L.CRS.Simple,
                // 设置最大拖动边界
                maxBounds: [
                    [-(imgHeight / 1.5), -(imgWidth / 1.5)],
                    [imgHeight / 1.5, imgWidth / 1.5]
                ],
                minZoom: -1.55, // 设置缩放的最小值
                maxZoom: 0, // 设置地图放大的最大值
                zoom: -1.55, //设置初始化的缩放值
                center: [0, 0], //隐藏leaflet
                zoomControl: false,
                attributionControl: false
            });
            L.imageOverlay(imgUrl, [
                [-(imgHeight / 2), -(imgWidth / 2)],
                [imgHeight / 2, imgWidth / 2]
            ]).addTo(v.myMap).on('load', function() {
                // v.initMarkers();
            });
        },
        initMarkers: function() {
            var v = this;
            var imgWidth = v.imgWidth;
            var imgHeight = v.imgHeight;
            var len = v.lists.length;
            for (var i = 0; i < len; i++) {
                var d = v.lists[i];
                var nx = d.x - imgWidth / 2;
                var ny = d.y - imgHeight / 2;
                var markerContent, popupContent;
                var exhibitLen = d.exhibit_list.length;

                if (exhibitLen == 1) {
                    var o = d.exhibit_list[0];
                    markerContent = `<div class="cell">
                                        <div class="cell_icon markerbg_1">
                                            <img src="${o.map_icon}" alt="" />
                                        </div>
                                        <div class="cell_title">${o.title}</div>
                                    </div>`;
                    popupContent = v.renderPopup1(d.exhibit_list);
                } else if (exhibitLen > 1) {
                    markerContent = `<div class="cell">
                                        <div class="cell_icon markerbg_2">
                                            <span>${exhibitLen}</span>
                                        </div>
                                    </div>`;
                    popupContent = `<div class="swiper-container" id="mySwiper1">
                                        <div class="swiper-wrapper">${v.renderPopup2(d.exhibit_list)}</div>
                                    </div>
                                    <div class="swiper-button-next"></div>
                                    <div class="swiper-button-prev"></div>`;
                }
                var myIcon = new L.divIcon({
                    className: "my-exhibits",
                    html: markerContent
                });

                var popup = new L.popup({
                        className: 'my-exhibits-popup',
                        keepInView: true,
                        offset: [0, -80],
                        closeOnClick: false,
                    })
                    .setContent(popupContent);
                var point = L.marker([ny, nx], {
                        icon: myIcon,
                    })
                    .addTo(v.myMap)
                    .bindPopup(popup)
                    // .openPopup()
                    .on('popupopen', function(e) {
                        v.initSwiper1();
                        // 点位添加点击事件
                        $(".enter_btn").each(function() {
                            $(this).on("click", function(ev) {
                                var id = $(ev.target).attr("data_id");
                                window.location.href = "../exhibition/detail.html?id=" + id;
                            });
                        });
                    })
            }
        },
        initSwiper1: function() {
            var swiper1 = new Swiper('#mySwiper1', {
                loop: false,
                slidesPerView: 1,
                centeredSlides: true,
                observer: true,
                observerParents: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                on: {
                    init: function() {
                        // alert('当前的slide序号是' + this.activeIndex);
                        this.emit('transitionEnd'); //在初始化时触发一次transitionEnd事件
                    },
                    transitionEnd: function() {},
                    slideChangeTransitionEnd: function() {
                        // if (this.isEnd) {
                        //     this.navigation.$nextEl.css('display', 'none');
                        // } else {
                        //     this.navigation.$nextEl.css('display', 'block');
                        // }
                    },
                },
            });
        },
        renderPopup1: function(list) {
            var str = "";
            for (var i in list) {
                str += `<div class="cell">
                            <div class="img">
                                <img src="${list[i].map_icon}" alt="" />
                            </div>
                            <div class="txt">
                                <div class="title">${list[i].title}</div>
                                <div class="brief">${list[i].brief_desc}</div>
                                <div data_id="${list[i].exhibit_id}" class="enter_btn">进入》</div>
                            </div>
                        </div>`;
            }
            return str;
        },
        renderPopup2: function(list) {
            var str = "";
            for (var j in list) {
                str += `<div class="swiper-slide">
                            <div class="cell">
                                <div class="img">
                                    <img src="${list[j].map_icon}" alt="" />
                                </div>
                                <div class="txt">
                                    <div class="title">${list[j].title}</div>
                                    <div class="brief">${list[j].brief_desc}</div>
                                    <div class="swiper_num">
                                        <span class="curT">${parseInt(j) + 1}</span>/<span>${list.length}</span>
                                    </div>
                                    <div data_id="${list[j].exhibit_id}" class="enter_btn">进入》</div>
                                </div>
                            </div>
                        </div>`;
            }
            return str;
        },
    }
});