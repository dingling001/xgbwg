Utils.setLoctime();
/**
 * 用户登出、清除设备号
 */
localStorage.clear();

$("#enter").on("click touchstart", function(e) {
    $(".top").removeClass("fadeInDown").addClass("fadeOutUp");
    $(".bottom").removeClass("fadeInUp").addClass("fadeOutDown");
    $(".qrcode").addClass("animated fadeOutDown");
    setTimeout(function() {
        localStorage.date = new Date().getTime();
        window.location.href = "./pages/map/map.html";
    }, 1000);
});