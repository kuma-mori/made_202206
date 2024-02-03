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

    //メニューページタブの処理
    //一番目以外のコンテンツは非表示
    $(".menu-box:not(:first-of-type)").css("display", "none");
    //タブの制御
    $(".tab").on("click", function(){
        var menulist = $(".tab").index(this); //クリックしたタブを取得
        $(".tab").removeClass("open"); //タブにクラスを削除
        $(this).addClass("open"); //クリックしたタブにクラスを付与
        //コンテンツの制御
        $(".menu-box").hide().eq(menulist).show(); //クリックしてないコンテンツは非表示、クリックしたタブは表示
    });
});