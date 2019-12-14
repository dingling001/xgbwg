var VM = new Vue({
    el: "#main",
    data: {
        api_token: localStorage.getItem("api_token") || "",
        // curT: 0,
        // menus: [{ png_map_path: "" }],
        // imgWidth: 3720, //图片像素宽
        // imgHeight: 2560, //图片像素高
        // myMap: null,
        // imageOverlay: null,
        // myLayerGroup: null,
        // exhibitInfo: "",

        ind: 0,
        // menus: [{png_map_path: ""}],
        menus: [],
        imgUrl: "",
        imgWidth: 2000, //图片像素宽
        imgHeight: 2000, //图片像素高
        floor: "",
        name: "",
        myMap: null,
        imageOverlay: null,
        myLayerGroup: null,
        lists: [],
        isLoad: false,
        map_path: ''
    },
    created: function() {
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
                    // 登录状态
                    $(".leftnav").find(".sub21").addClass("on");
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
                        vm.initMap();
                        vm.getRoute();
                    }
                },
                error: function(rlt) {
                    console.log(rlt);
                }
            });
        },
        // 获取浏览路线
        getRoute: function(idx) {
            var vm = this;
            var idx = idx || 0;
            var map_id = parseInt(idx + 1);
            var url = baseUrl + vm.menus[idx].png_map_path;
            vm.imageOverlay.setUrl(url).on('load', function() {
                vm.curT = idx;
            });
            $.ajax({
                url: baseUrl + "/api/visit_road",
                type: "get",
                data: {
                    p: "t",
                    api_token: vm.api_token,
                    map_id: map_id || 1
                },
                success: function(rlt) {
                    if (rlt.status == 1) {
                        // console.log(rlt.data)
                        vm.exhibitInfo = rlt.data.exhibitInfo;
                        vm.renderPoint();
                    }
                },
                error: function(rlt) {
                    console.log(rlt);
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
         * @地图描点
         */
        renderPoint: function() {
            var vm = this;
            //清楚所有marker重新绘制
            vm.myLayerGroup.clearLayers();

            for (var i in vm.exhibitInfo) {
                var d = vm.exhibitInfo[i];
                var nx = d.axis_x - vm.imgWidth / 2;
                var ny = d.axis_y - vm.imgHeight / 2;
                var myIcon = L.divIcon({
                    className: "my-exhibits",
                    html: "<div class='cell' data_id='" + d.exhibit_id + "'><div class='cell_icon'><img src='" + vm.toThumbsimg(d.poi_1, 200, 200, 33) + "'></div><div class='cell_title' style=''>" + d.title + "</div></div>"
                });
                var point = L.marker([ny, nx], {
                    icon: myIcon
                }).addTo(vm.myMap);
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
        },
    }
});