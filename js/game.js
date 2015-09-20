/**
 * Created by LJP on 2015/5/28.
 */
$(function(){
    $(".other2").click(function(){
        $(".content_top").removeClass("hide");
        $(".content").css({"padding-top":"82px"});
    });
    $(".boxTitle").click(function(){
        $(this).parents(".content").find(".boxTheme").addClass("hide");
        $(this).next(".boxTheme").removeClass("hide");
    });

    $(".otherJs").click(function(){
        if($(this).hasClass("other")) {
            $(".content_top").removeClass("hide");
            $(".content").css({"padding-top":"82px"});
            $(this).removeClass("other").addClass("other2");
        }
        else {
            $(".content_top").addClass("hide");
            $(".content").css({"padding-top":"44px"});
            $(this).removeClass("other2").addClass("other");
        }
    });
});