var VM = new Vue({
    el: "#main",
    data: {
        curT: 0,
        menus: [],
        isLoad: false,
        // newList: [],
        // floorInfo: [{
        //         floor_id: 1,
        //         url: '../../public/resouce/1F.png',
        //         floor_name: '1F'
        //     },
        //     {
        //         floor_id: 2,
        //         url: '../../public/resouce/2F.png',
        //         floor_name: '2F'
        //     },
        //     {
        //         floor_id: 3,
        //         url: '../../public/resouce/3F.png',
        //         floor_name: '3F'
        //     },
        // ],
        imgWidth: 4260, //图片像素宽
        imgHeight: 2924, //图片像素高
        myMap: null,
        imageOverlay: null,
        myLayerGroup: null,
        lists: [], //坐标点
        ind: 0
    },
    created: function () {
        this.myLayerGroup = new L.LayerGroup();
    },
    mounted: function () {
        this.getLeftMenu();
        this.getMap();
    },
    methods: {
        /**
         * @获取左侧菜单
         */
        getLeftMenu: function () {
            BaseAjax.get({
                url: "../common/nav.html",
                success: function (rlt) {
                    $(".main").prepend(rlt);
                    $(".leftnav").find(".sub2").addClass("on");
                    Utils.setLoctime();
                }
            });
        },
        /**
         * @根据地图获得展厅列表
         */
        getMap: function () {
            var v = this;
            BaseAjax.get({
                url: baseUrl + "/api/exhibition_list",
                data: {
                    p: "w",
                    // floor_id: 0,
                    language: 1
                },
                success: function (res) {
                    v.isLoad = true;
                    if (res.status == 1) {
                        console.log(res)
                        v.menus = res.data;
                        // console.log(list)
                        if (v.menus.length) {
                            // v.menus = list.sort(function(a, b) {
                            //     return a.floor_id - b.floor_id
                            // });
                            v.$nextTick(function () {
                                v.getList()
                                v.initMap();
                            })
                            // 
                            // v.newList = v.getArrEqual(list, v.floorInfo, 'floor_id').sort(function(a, b) {
                            //     return a.floor_id - b.floor_id
                            // });;
                        }
                    }
                },
                error: function (err) {
                    console.log(err);
                }
            });
        },
        /**
         * @获取展厅展品
         */
        getList:function(){
            var v=this;
            BaseAjax.get({
                url: baseUrl + "/api/map_exhibit",
                data: {
                    p: "w",
                    map_id: v.menus[v.ind].exhibition_id,
                    language: 1
                },
                success: function (res) {
                    if (res.status == 1) {
                        console.log(res)
                        v.lists = res.data;
                        // console.log(list)
                        if (v.lists.length) {
                            // v.menus = list.sort(function(a, b) {
                            //     return a.floor_id - b.floor_id
                            // });
                            v.$nextTick(function () {
                                v.initMarkers();
                            })
                            //
                            // v.newList = v.getArrEqual(list, v.floorInfo, 'floor_id').sort(function(a, b) {
                            //     return a.floor_id - b.floor_id
                            // });;
                        }
                    }
                },
                error: function (err) {
                    console.log(err);
                }
            });
        },
        initMap: function () {
            var v = this;
            var url = v.menus[v.ind].unselected_icon;
            var imgWidth = v.imgWidth;
            var imgHeight = v.imgHeight;
            v.myMap = new L.map("map", {
                // 修改坐标系
                crs: L.CRS.Simple,
                // 设置最大拖动边界
                maxBounds: [
                    [-(imgHeight / 2), -(imgWidth / 2)],
                    [imgHeight / 2, imgWidth / 2]
                ],
                minZoom: -2, // 设置缩放的最小值
                maxZoom: -2, // 设置地图放大的最大值
                zoom: -2, //设置初始化的缩放值
                center: [0, 0], //隐藏leaflet
                zoomControl: false,
                attributionControl: false
            });
            v.imageOverlay = new L.imageOverlay(url, [
                [-(imgHeight / 2), -(imgWidth / 2)],
                [imgHeight / 2, imgWidth / 2]
            ]).addTo(v.myMap);
        },
        /**
         * @地图描点---根据地图获得展厅列表
         */
        initMarkers: function() {
            var v = this;
            var imgWidth = v.imgWidth;
            var imgHeight = v.imgHeight;
            var len = v.lists.length;
            console.log(v.lists)
            for (var i = 0; i < len; i++) {
                var d = v.lists[i];
                var nx = d.x - imgWidth / 2;
                var ny = d.y - imgHeight / 2;
                var markerContent, popupContent;
                // var exhibitLen = d.exhibit_list.length;
                var exhibitLen = d.length;

                // if (exhibitLen == 1) {
                //     var o = d.exhibit_list[0];
                var o = d;
                console.log(o)
                markerContent = `<div class="cell">
                                        <div class="cell_icon markerbg_1">
                                            <img src="${o.map_icon}" alt="" />
                                        </div>
                                        <div class="cell_title">${o.exhibit_name}</div>
                                    </div>`;
                    // popupContent = v.renderPopup1(d.exhibit_list);
                // }
                // else if (exhibitLen > 1) {
                //     markerContent = `<div class="cell">
                //                         <div class="cell_icon markerbg_2">
                //                             <span>${exhibitLen}</span>
                //                         </div>
                //                     </div>`;
                //     popupContent = `<div class="swiper-container" id="mySwiper1">
                //                         <div class="swiper-wrapper">${v.renderPopup2(d.exhibit_list)}</div>
                //                     </div>
                //                     <div class="swiper-button-next"></div>
                //                     <div class="swiper-button-prev"></div>`;
                // }
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
        // initMarkers: function (idxs) {
        //     var v = this;
        //     var idx = v.ind;
        //     var id = v.menus[idx].exhibition_id;
        //     v.floor = v.menus[idx].floor_id;
        //     v.name = v.menus[idx].exhibition_name;
        //
        //     //清楚所有marker重新绘制
        //     v.myLayerGroup.clearLayers();
        //
        //     BaseAjax.get({
        //         url: baseUrl + "/api/map_exhibit",
        //         data: {
        //             p: "t",
        //             map_id: id
        //         },
        //         success: function (res) {
        //             v.lists = res.data;
        //             var len = res.data.length;
        //             // console.log(res.data)
        //             for (var i = 0; i < len; i++) {
        //                 var d = v.lists[i];
        //                 var nx = d.x - v.imgWidth / 2;
        //                 var ny = d.y - v.imgHeight / 2;
        //                 // var markerC = `<div class='cell' data_id='${d.exhibition_id}'>
        //                 //                     <div class='cell_icon'>
        //                 //                         <img src='${d.map_icon}'>
        //                 //                     </div>
        //                 //                     <div class='cell_title'>
        //                 //                         ${d.title}
        //                 //                         <a class="btn_in" href="../../pages/map/mapD.html?id=${d.exhibition_id}">点击进入></a>
        //                 //                     </div>
        //                 //                 </div>`;
        //                 var markerC = `<div class='cell' data_id='${d.exhibition_id}'></div>`;
        //                 var myIcon = new L.divIcon({
        //                     className: "my-exhibits",
        //                     html: markerC
        //                 });
        //                 var point = new L.marker([ny, nx], {
        //                     icon: myIcon
        //                 });
        //                 // 点位添加点击事件
        //                 point.on("click", function (ev) {
        //                     var target = ev.target;
        //                     var cell = target._icon.getElementsByClassName("cell")[0];
        //                     var id = cell.getAttribute("data_id");
        //                     window.location.href = "../../pages/map/mapD.html?id=" + id;
        //                 });
        //
        //                 v.myLayerGroup.addLayer(point);
        //                 v.myMap.addLayer(v.myLayerGroup);
        //             }
        //         }
        //     });
        // },
        /**
         * @地图切换
         */
        // changeMap: function (idx) {
        //     var v = this;
        //     var url = v.menus[idx].map_path;
        //     v.imageOverlay.setUrl(url); //更换图层
        //     v.initMarkers(idx); //更换图标
        //     v.imageOverlay.on('load', function () {
        //         v.curT = idx;
        //     })
        // },
        changeLeft: function () {
            var v = this;
            if (v.ind > 0) {
                v.ind -= 1;
            }
            console.log(v.ind);
            console.log(v.menus)
            var url = v.menus[v.ind].map_path;
            v.imageOverlay.setUrl(url); //更换图层
            v.initMarkers(v.ind); //更换图标
            v.imageOverlay.on('load', function () {
                v.curT = v.ind;
            })
        },
        changeRight: function () {
            var v = this;
            if (v.ind < v.menus.length - 1) {
                v.ind += 1;
            }
            console.log(v.ind);
            var url = v.menus[v.ind].map_path;
            v.imageOverlay.setUrl(url); //更换图层
            v.initMarkers(v.ind); //更换图标
            v.imageOverlay.on('load', function () {
                v.curT = v.ind;
            })
        },
        // changeMap: function(i) {
        //     var v = this;
        //     v.curT = i;
        // },
        getArrEqual(array1, array2, attr) {
            var result = [];
            for (var i = 0; i < array2.length; i++) {
                var isExist = false;
                for (var j = 0; j < array1.length; j++) {
                    if (array1[j][attr] == array2[i][attr]) {
                        isExist = true;
                        break;
                    }
                }
                if (isExist) {
                    result.push(array2[i]);
                }
            }
            return result;
        },
    }
});