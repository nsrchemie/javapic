
//JQUERY

$(function() {
    setInterval(changeimg, 500);
    var totalImg = 60;
    var currentImg = 1;
    function changeimg () {
        if (currentImg > totalImg) {
            currentImg = 1;
        }
        if (currentImg < 10) {
            var imgurl = '0'+ currentImg;
        }
        else {
            imgurl = currentImg;
        }
        $('.jumbotron').css('background-image', 'url(images/pdxcg_' + imgurl + '.jpg)');
        currentImg++;
    };
});


//JAVASCRIPT

// var totalImg = 60;

// var currentImg = 1;

// function changeImg() {
//  "use strict";
//  if (currentImg > totalImg) {
//      currentImg = 1;
//   }
//  if (currentImg < 10) {

//   var url = "url(images/pdxcg_0" + currentImg + ".jpg)";
//  }
//  else {
//   var url = "url(images/pdxcg_" + currentImg + ".jpg)";
//   // if (url === "url(images/pdxcg_36.jpg)" || "url(images/pdxcg_42.jpg)"){
//   //     continue;
//   // }
//  }

// document.getElementById('jumbotron').style.backgroundImage = url;


// currentImg++;
// };

// setInterval(changeImg,500);