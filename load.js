let metadata;
let imgHeight = 200;
fetch("./metadata.json").then(function (response) {
    return response.json();
}).then(function (json) {
    metadata = json;
    let pictures = metadata.pictures;
    for (let i = pictures.length - 1; i >= 0; i--){
        let imgWidth = pictures[i].width * imgHeight / pictures[i].height;
        $("main").append('<div class="wrapper" style="--width: ' + imgWidth + 'px">\
                            <div class="img-panel">\
                                <img class="picture" src="pictures/' + pictures[i].name + '" imgID=' + i + '>\
                                <div class="info-bar">\
                                    <span class="info resolution">'+ pictures[i].width + 'x' + pictures[i].width + '</span>\
                                    <span class="info date">'+ pictures[i].date + '</span>\
                                </div>\
                                <div class="tagbar"></div>\
                            </div >\
                        </div > ');
    }
    
})