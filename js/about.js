$(function(){
    //ナビゲーションメニュー処理
    $(".navi-btn").on("click",function(){
        if($("#header").hasClass("check")){
            $("#header").removeClass("check");
        }else{
            $("#header").addClass("check");
        }
    });
    $("#navi").on("click",function(){
        $("#header").removeClass("check");
    });
    $("a").on("click",function(){
        $("#header").removeClass("check");
    });

    //aboutページスライドの処理
    $(".about-img").slick({
        cssEase: "linear",
        arrows: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
    });
});