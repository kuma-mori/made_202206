$(function(){
    //オープニングアニメーション処理
    var webStorage = function(){
        //2回目以降のアクセス処理
        if (sessionStorage.getItem("load-anime")){
            $(".loading").addClass("active");
        }
        //初回のアクセス処理
        else {
            sessionStorage.setItem("load-anime", "true"); // sessionStorageにデータを保存
            $(".loading-animation").addClass("active"); // loading-animationを表示
            setTimeout(function(){
                // ローディングを数秒後に非表示にする
                $(".loading").addClass("active");
                $(".loading-animation").removeClass("active");
            }, 2800); // ローディングを表示する時間(ミリ秒)
        }
    }
    webStorage();

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

    //indexページスライドの処理
    $(".slider").slick({
        autoplay: true,
        fade: true,
        cssEase: "linear",
        speed: 800,
        arrows: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
    });

    //indexページIntersection Observerによるスクロール制御の処理
    //監視対象の設定
    const indextext = document.querySelectorAll(".top-text");
    //Intersection Observerの設定
    const indexobserver = new IntersectionObserver(indexElements);
    //表示領域に入ったら処理を実行する
    indextext.forEach(indextext => {
        indexobserver.observe(indextext);
    });
    function indexElements(entries){
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                $(".top-main").addClass("inview");
            }
        });
    };
});