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

    //accessページIntersection Observerによるスクロール制御の処理
    //監視対象の設定
    const accessinfo = document.querySelectorAll(".info");
    //Intersection Observerの設定
    const accessobserver = new IntersectionObserver(accessElements);
    //表示領域に入ったら処理を実行する
    accessinfo.forEach(info => {
        accessobserver.observe(info);
    });
    function accessElements(entries){
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                $(".access").addClass("inview");
            }
        });
    };
});