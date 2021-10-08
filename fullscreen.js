
function addFullScreen() {
    let time;
    $(".picture").mousedown(function () {
        let picture = $(this);
        timer = setTimeout(function () {
            let imgUrl = picture.attr("src");
            let imgHeight = picture.height();
            let imgWidth = picture.width();
            let top = picture.offset().top - $(window).scrollTop();
            let left = picture.offset().left - $(window).scrollLeft();
            $("body").append('<div class="fullscreen-bg">\
                                <img class="fullscreen-img" src="'+imgUrl+'">\
                              </div > ');
            let fullscreenBG = $(".fullscreen-bg");
            fullscreenBG.css({
                "z-index": 2,
                "position": "fixed",
                "height": imgHeight / 0.9,
                "width": imgWidth / 0.9,
                "left": left,
                "top": top,
                "background-color": "rgba(0,0,0,0.7)",
                "backdrop-filter": "blur(5px)",
                "display": "flex",
                "justify-content": "center",
                "align-items": "center"
            }).animate({
                "height": "100vh",
                "width": "100vw",
                "left": "0px",
                "top": "0px"
            }, 300);
            $(".fullscreen-img").css({
                "display": "block",
                "max-height": "90%",
                "max-width": "90%",
            });
            clearTimeout(timer);
            picID = picture.attr("picID");
            fullscreenBG.click(function () {
                console.log("click");
                let top = picture.offset().top - $(window).scrollTop();
                let left = picture.offset().left - $(window).scrollLeft();
                fullscreenBG.animate({
                    "height": imgHeight / 0.9,
                    "width": imgWidth / 0.9,
                    "left": left,
                    "top": top
                }, 300, "swing", fullscreenBG.remove.bind(fullscreenBG));
            })
        }, 600);
    });
    $(".picture").mouseup(function () {
        clearTimeout(timer);
    })
}

