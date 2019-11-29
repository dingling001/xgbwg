var VM = new Vue({
    el: "#main",
    data: {
        curT: 0,
        menus: [{ png_map_path: "" }],
        imgUrl: "",
        imgWidth: 3720, //图片像素宽
        imgHeight: 2560, //图片像素高
        floor: "",
        name: "",
        myMap: null,
        imageOverlay: null,
        myLayerGroup: null,
        lists: []
    },
    created:function(){
        this.myLayerGroup = new L.LayerGroup();
    },
    mounted: function() {
        this.getLeftMenu();
        this.getMapImg();
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
                    // 未登录状态
                    $(".leftnav").find(".sub3").addClass("on");
                    // setLoctime();
                }
            });
        },
        /**
         * 获取展厅列表
         */
        getMapImg: function() {
            var vm = this;
            $.ajax({
                url: baseUrl + "/api/map_list",
                type: "get",
                data: {
                    p: "t",
                    map_id: 0
                },
                success: function(rlt) {
                    if (rlt.status == 1) {
                        vm.menus = rlt.data.sort((a, b) => {
                            return a.map_id - b.map_id
                        });
                        // console.log(vm.menus)
                        vm.initMap();
                        vm.initMarkers();
                    }
                },
                error: function(rlt) {
                    // console.log(rlt);
                }
            });

        },
        /**
         * @地图绘制
         */
        initMap: function() {
            var vm = this;
            var url = baseUrl + vm.menus[0].png_map_path;
            var imgWidth = vm.imgWidth;
            var imgHeight = vm.imgHeight;
            // vm.myMap = new L.map('map', {
            //     crs: L.CRS.Simple,
            //     minZoom: 1,
            //     maxZoom: 4,
            //     center: [0, 0], //隐藏leaflet
            //     zoom: 1,
            //     zoomControl: false,
            //     attributionControl: false
            // });
            // var southWest = vm.myMap.unproject([0, imgHeight], vm.myMap.getMaxZoom() - 1);
            // var northEast = vm.myMap.unproject([imgWidth, 0], vm.myMap.getMaxZoom() - 1);
            // var bounds = new L.LatLngBounds(southWest, northEast);
            // //加载图片
            // vm.imageOverlay = new L.imageOverlay(url, bounds, { interactive: true }).addTo(vm.myMap);
            // vm.myMap.setMaxBounds(bounds);

            vm.myMap = new L.map("map", {
                // 修改坐标系
                crs: L.CRS.Simple,
                // 设置最大拖动边界
                maxBounds: [
                    [-(imgHeight / 2), -(imgWidth / 2)],
                    [imgHeight / 2, imgWidth / 2]
                ],
                minZoom: -1.8, // 设置缩放的最小值
                maxZoom: 2, // 设置地图放大的最大值
                zoom: -1.8, //设置初始化的缩放值
                center: [0, 0], //隐藏leaflet
                zoomControl: false,
                attributionControl: false
            });
            vm.imageOverlay = new L.imageOverlay(url, [
                [-(imgHeight / 2), -(imgWidth / 2)],
                [imgHeight / 2, imgWidth / 2]
            ]).addTo(vm.myMap);
        },
        /**
         * @地图描点---根据地图获得展品列表
         */
        initMarkers: function(idx) {
            var vm = this;
            var idx = idx || 0;
            var id = vm.menus[idx].map_id;
            vm.floor = vm.menus[idx].floor_id;
            vm.name = vm.menus[idx].exhibition_name;

            //清楚所有marker重新绘制
            vm.myLayerGroup.clearLayers();

            $.ajax({
                url: baseUrl + "/api/exhibit_list",
                type: "get",
                data: {
                    p: "t",
                    map_id: id
                },
                success: function(res) {
                    vm.lists = res.data;
                    var len = res.data.length;

                    for (var i = 0; i < len; i++) {
                        var d = vm.lists[i];
                        var nx = d.x - vm.imgWidth / 2;
                        var ny = d.y - vm.imgHeight / 2;
                        var myIcon = new L.divIcon({
                            className: "my-exhibits",
                            html: "<div class='cell' data_id='" + d.exhibit_id + "'><div class='cell_icon'><img src='" + vm.toThumbsimg(d.map_icon, 45, 52, 33) + "'></div><div class='cell_title' style=''>" + d.title + "</div></div>"
                        });
                        var point = new L.marker([ny, nx], {
                            icon: myIcon
                        })
                        // 点位添加点击事件
                        point.on("click", function(ev) {
                            var target = ev.target;
                            var cell = target._icon.getElementsByClassName("cell")[0];
                            var id = cell.getAttribute("data_id");
                            window.location.href = "../exhibition/detail.html?id=" + id;
                        });

                        vm.myLayerGroup.addLayer(point);
                        vm.myMap.addLayer(vm.myLayerGroup);
                    }
                }
            });
        },
        /**
         * @地图切换
         */
        changeMap: function(idx) {
            var vm = this;
            var url = baseUrl + vm.menus[idx].png_map_path;
            vm.imageOverlay.setUrl(url); //更换图层
            vm.initMarkers(idx); //更换图标
            vm.imageOverlay.on('load', function() {
                vm.curT = idx;
            })
        },
    }
});