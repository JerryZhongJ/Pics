let metadata;
let imgHeight = 200;
fetch("./metadata.json").then(function (response) {
    return response.json();
}).then(function (json) {
    metadata = json;
    let pictures = metadata.pictures;
    for (let i = pictures.length - 1; i >= 0; i--){
        let imgWidth = pictures[i].width * imgHeight / pictures[i].height;
        let filename = pictures[i].name;
        $("main").append('<div class="wrapper" style="width: ' + imgWidth + 'px">\
                            <div class="img-panel">\
                                <img class="picture" src="pictures/' + filename + '" imgID=' + i + '>\
                                <div class="tagbar"></div>\
                            </div >\
                        </div > ');
    }
    
})