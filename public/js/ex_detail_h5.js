var VM = new Vue({
    el: "#main",
    data: {
        id: null,
        detail: {
            imgs: [],
            title: "",
            content: "",
            audio: ""
        },
        isshowlayer: false,
        sharecode: null
    },
    created: function() {
        var vm = this;
        vm.id = Utils.getUrlKey("id");
    },
    mounted: function() {
        var vm = this;
        if (vm.id) {
            vm.getDetail();
        }
    },
    methods: {
        // 获取详情
        getDetail: function() {
            var vm = this;
            BaseAjax.get({
                url: baseUrl + "/api/exhibition/exhibit_detail",
                data: {
                    p: "wx",
                    exhibit_id: vm.id
                },
                success: function(res) {
                    if (res.status == 1) {
                        // console.log(res.data)
                        vm.detail = res.data;
                        vm.$nextTick(function() {
                            setaudio();
                            vm.initSwiper();
                        });
                    }
                }
            });
        },
        initSwiper: function() {
            var swiper = new Swiper('.swiper-container', {
                effect: 'slide',
                pagination: {
                    el: '.swiper-pagination',
                },
                loop: false,
                slidesPerView: 1,
                centeredSlides: true,
                observer: true,
                observerParents: true
            });
        },
    }
});