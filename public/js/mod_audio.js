/* 基于jquery
 * 自定义音频播放控件  
 */


//$(function(){
/*时间格式化 mm:ss*/
function timeFormat(t) {
    t = Math.ceil(t);
    var minute = parseInt(t / 60);
    var second = parseInt(t % 60);
    minute = (minute < 10) ? '0' + minute : minute;
    second = (second < 10) ? '0' + second : second;
    return minute + ':' + second;
}
/*设置滑轨已播放进度*/
function modOver(a, b) {
    if (a && b) {
        return a / b * 100;
    }
}

function setaudio() {
    $(".mod_audio").each(function() {
        var _this = $(this);
        _this.append('<div class="ctrl_play"></div><div class="ctrl_pause"></div><div class="ctrl_prog"><div class="prog_line"></div><input class="prog_line_hide" type="range" min="0" max="100" value="0" /><span class="prog_current">00:00</span><span class="prog_duration">00:00</span></div>');
        var audio = _this.find("audio")[0];
        var timecur = audio.currentTime;
        var timedur = audio.duration;
        var play = _this.find(".ctrl_play");
        var pause = _this.find(".ctrl_pause");
        var prog_line = _this.find(".prog_line");
        var range = _this.find(".prog_line_hide")[0];
        var val = range.value;
        var prog_cur = _this.find(".prog_current");
        var prog_dur = _this.find(".prog_duration");
        prog_cur.text(timeFormat(timecur));
        if (!timedur) {
            timedur = 0;
        }
        prog_dur.text(timeFormat(timedur));

        play.click(function() {
            play.hide();
            pause.show();
            audio.play();
            var audios = play.parents(".mod_audio").siblings(".mod_audio").find("audio");
            for (var i = 0; i < audios.length; i++) {
                audios[i].pause();
            }
            play.parents(".mod_audio").siblings(".mod_audio").find(".ctrl_play").show();
            play.parents(".mod_audio").siblings(".mod_audio").find(".ctrl_pause").hide();
        });
        pause.click(function() {
            play.show();
            pause.hide();
            audio.pause();
        });
        range.ontouchstart = function() {
            play.show();
            pause.hide();
            audio.pause();
        }

        range.oninput = function() {
            val = range.value;
            timecur = audio.currentTime;
            timedur = audio.duration;
            if (!timedur) {
                timedur = 0;
            }
            audio.currentTime = Math.ceil(val / 100 * timedur);
            prog_line.css({
                width: val + "%"
            });
        }


        range.ontouchend = function() {
            play.hide();
            pause.show();
            audio.play();
            var audios = play.parents(".mod_audio").siblings(".mod_audio").find("audio");
            for (var i = 0; i < $("audio").length - 1; i++) {
                audios[i].pause();
            }
            play.parents(".mod_audio").siblings(".mod_audio").find(".ctrl_play").show();
            play.parents(".mod_audio").siblings(".mod_audio").find(".ctrl_pause").hide();
        }


        audio.ontimeupdate = function() {
            timecur = audio.currentTime;
            timedur = audio.duration;
            prog_cur.text(timeFormat(timecur));
            if (!timedur) {
                timedur = 0;
            }
            prog_dur.text(timeFormat(timedur));
            prog_line.css({
                width: modOver(timecur, timedur) + "%"
            });
            range.value = Math.ceil(Number(modOver(timecur, timedur)));
        }
        
        audio.onended = function() {
            play.show();
            pause.hide();
            audio.pause();
            timecur = 0;
            prog_line.css({
                width: "0%"
            });
            prog_cur.text(timeFormat(timecur)); //当前时长
            range.value = Math.ceil(Number(modOver(timecur, timedur)));
        }

    });
}

//});