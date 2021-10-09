
function addFullScreen() {
    let time;
    $(".picture").mousedown(function () {
        let picture = $(this);
        let imgUrl = picture.attr("src");
        let imgHeight = picture.height();
        let imgWidth = picture.width();
        $("body").append('<div class="fullscreen-bg">\
                                <img class="fullscreen-img" src="'+ imgUrl +'">\
                            </div > ');
        let fullscreenBG = $(".fullscreen-bg");
        let fullscreenImg = $(".fullscreen-img");
        fullscreenBG.css("visibility", "hidden");
        let fixedTop = picture.offset().top - $(document).scrollTop();
        let fixedLeft = picture.offset().left - $(document).scrollLeft();
        fullscreenImg.css({
            "--fixed-top": fixedTop+"px",
            "--fixed-left": fixedLeft+"px",
            "--imgHeight": imgHeight+"px",
            "--imgWidth": imgWidth+"px"
        });
        timer = setTimeout(function () {
           
            // background css and animation is implemented in style.css.
            fullscreenBG.css("visibility", "visible");
            fullscreenBG.attr("appear", "appear");
            fullscreenImg.attr("appear", "appear");
            fullscreenBG.click(function () {
                console.log("click");
                let fixedTop = picture.offset().top - $(document).scrollTop();
                let fixedLeft = picture.offset().left - $(document).scrollLeft();
                fullscreenImg.css({
                    "--fixed-top": fixedTop+"px",
                    "--fixed-left": fixedLeft+"px",
                });
                fullscreenBG.attr("appear", "");
                fullscreenImg.attr("appear", "");
                setTimeout(fullscreenBG.remove.bind(fullscreenBG), 400);
            })
        }, 600);
    });
    $(".picture").mouseup(function () {
        clearTimeout(timer);
    })
}

