$(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    var divam = 10;
    $("body").css({
        "background-position":"0px -"+scrollTop/divam+"px"     
    });
});