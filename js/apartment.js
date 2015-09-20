/**
 * Created by LJP on 2015/5/27.
 */
/**
 * Created by LJP on 2015/4/23.
 */
$(function(){
    var $bg=$(".contentTop");
    var time=0;

    setInterval(function(){
        time++;
        if(time==2) {
            var n=$bg.length;
            var index=$(".slected").removeClass("slected").index();
            console.log(index);
            //console.log(n);
            if(index==n-1)
                index=0;
            else
                index++;
            console.log(index);
            $(".change").eq(index).addClass("slected");
            $bg.siblings(".contentTop").animate({opacity:"0.4","z-index":"1"},20).addClass("hide").eq(index).removeClass("hide").animate({opacity:"1","z-index":"10"},100);
            time=0;
        }
    },1000);

    $(".otherJs").click(function(){
        if($(this).hasClass("other")) {
            $(".content_top").removeClass("hide");
            $(".content").css({"padding-top":"44px"});
            $(this).removeClass("other").addClass("other2");
        }
        else {
            $(".content_top").addClass("hide");
            $(".content").css({"padding-top":"6px"});
            $(this).removeClass("other2").addClass("other");
        }
    });
});