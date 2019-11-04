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
        imgWidth: 3720, //图片像素宽
        imgHeight: 2560, //图片像素高
        myMap: null,
        imageOverlay: null,
        myLayerGroup: null,
        lists: [], //坐标点
    },
    created: function() {
        this.myLayerGroup = new L.LayerGroup();
    },
    mounted: function() {
        this.getLeftMenu();
        this.getMap();
    },
    methods: {
        /**
         * @获取左侧菜单
         */
        getLeftMenu: function() {
            BaseAjax.get({
                url: "../common/nav.html",
                success: function(rlt) {
                    $(".main").prepend(rlt);
                    $(".leftnav").find(".sub2").addClass("on");
                    Utils.setLoctime();
                }
            });
        },
        /**
         * @根据地图获得展厅列表
         */
        getMap: function() {
            var v = this;
            BaseAjax.get({
                url: baseUrl + "/api/map_list",
                data: {
                    p: "w",
                    floor_id: 0,
                    language:1
                },
                success: function(res) {
                    v.isLoad = true;
                    if (res.status == 1) {
                        var list = res.data;
                        // console.log(list)
                        if (list.length) {
                            v.menus = list.sort(function(a, b) {
                                return a.floor_id - b.floor_id
                            });
                            v.$nextTick(function() {
                                v.initMap();
                                v.initMarkers();
                            })
                            // 
                            // v.newList = v.getArrEqual(list, v.floorInfo, 'floor_id').sort(function(a, b) {
                            //     return a.floor_id - b.floor_id
                            // });;
                        }
                    }
                },
                error: function(err) {
                    console.log(err);
                }
            });
        },
        /**
         * @地图绘制
         */
        initMap: function() {
            var v = this;
            var url = v.menus[0].map_path;
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
        initMarkers: function(idx) {
            var v = this;
            var idx = idx || 0;
            var id = v.menus[idx].map_id;
            v.floor = v.menus[idx].floor_id;
            v.name = v.menus[idx].exhibition_name;

            //清楚所有marker重新绘制
            v.myLayerGroup.clearLayers();

            BaseAjax.get({
                url: baseUrl + "/api/exhibition/exhibitions_on_map",
                data: {
                    p: "t",
                    map_id: id
                },
                success: function(res) {
                    v.lists = res.data;
                    var len = res.data.length;
                    // console.log(res.data)
                    for (var i = 0; i < len; i++) {
                        var d = v.lists[i];
                        var nx = d.x - v.imgWidth / 2;
                        var ny = d.y - v.imgHeight / 2;
                        // var markerC = `<div class='cell' data_id='${d.exhibition_id}'>
                        //                     <div class='cell_icon'>
                        //                         <img src='${d.map_icon}'>
                        //                     </div>
                        //                     <div class='cell_title'>
                        //                         ${d.title}
                        //                         <a class="btn_in" href="../../pages/map/mapD.html?id=${d.exhibition_id}">点击进入></a>
                        //                     </div>
                        //                 </div>`;
                        var markerC = `<div class='cell' data_id='${d.exhibition_id}'></div>`;
                        var myIcon = new L.divIcon({
                            className: "my-exhibits",
                            html: markerC
                        });
                        var point = new L.marker([ny, nx], {
                            icon: myIcon
                        });
                        // 点位添加点击事件
                        point.on("click", function(ev) {
                            var target = ev.target;
                            var cell = target._icon.getElementsByClassName("cell")[0];
                            var id = cell.getAttribute("data_id");
                            window.location.href = "../../pages/map/mapD.html?id=" + id;
                        });

                        v.myLayerGroup.addLayer(point);
                        v.myMap.addLayer(v.myLayerGroup);
                    }
                }
            });
        },
        /**
         * @地图切换
         */
        changeMap: function(idx) {
            var v = this;
            var url = v.menus[idx].map_path;
            v.imageOverlay.setUrl(url); //更换图层
            v.initMarkers(idx); //更换图标
            v.imageOverlay.on('load', function() {
                v.curT = idx;
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