Utils.setLoctime();
/**
 * 用户登出、清除设备号
 */
localStorage.clear();

$("#enter").on("click touchstart", function (e) {
    $(".top").removeClass("fadeInDown").addClass("fadeOutUp");
    $(".bottom").removeClass("fadeInUp").addClass("fadeOutDown");
    $(".qrcode").addClass("animated fadeOutDown");
    setTimeout(function () {
        localStorage.date = new Date().getTime();
        window.location.href = "./pages/map/map.html";
    }, 1000);
});

function getNewList() {
    BaseAjax.get({
        url: baseUrl + "/api/news_list",
        data: {
            p: "w",
            language_id: 1
        },
        success: function (res) {
            console.log(res)
            // v.isLoad = true;
            if (res.status == 1) {
                var html = '';
                var zixunlist = res.data;
                for (var i in zixunlist) {
                    html += ` <div class="swiper-slide">${zixunlist[i].title}</div>`
                }
                $('#warper').append(html)
                setTimeout(function () {
                    var mySwiper = new Swiper('.swiper-container', {
                        autoplay: {
                            delay: 3000,      // 3秒切换一次
                        },
                        direction: 'vertical',
                        slidesPerView: 3,
                        loop: zixunlist.length >= 3,
                        observeParents: true,
                        observe: true,
                        autoplayDisableOnInteraction: false
                    });
                }, 500)
            }
        },
        error: function (err) {
            console.log(err);
        }
    });
}

getNewList();
