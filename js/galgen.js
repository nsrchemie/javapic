//JAVASCRIPT

// 	function genImg(num) {

// 		if (num < 10) {
// 			var imgURL = "images/pdxcg_0" + num + ".jpg";
// 		}
// 		else {
// 			var imgURL = "images/pdxcg_" + num + ".jpg";
// 		}
// 		return imgURL;
// 	}
// 	function gallerypop() {
// 		var imageList = document.getElementById('gallery');

// 		for (var listItem = 1; listItem <= 60; listItem++){
// 			var imgSource = genImg(listItem);
// 			if (imgSource) {
// 				var newImg = document.createElement('img');
// 				var newItem = document.createElement('li');
// 				newImg.src = imgSource;
// 				newImg.className = 'images';
// 				newItem.appendChild(newImg);
// 				imageList.appendChild(newItem);
// 			}


// 		}
// 	}

// gallerypop();


// var dispimg = document.getElementById('image_show');
// dispimg.setAttribute('class','display_img');

// document.addEventListener("click",function() {
// if (event.target.className === 'images') {
// 		dispimg.className = 'display_img';
// 		dispimg.firstChild.src = event.target.src; 
// 	}
// 	else {
// 		dispimg.className = 'display_none';
// 	}
// });






//JQUERY


$(function() {
	var i =1;
	while (i <= 61) {
		$('#gallery').append("<li><img class='image'></img></li>");
		 i++;
		};
	$('.image').each(function(index){
		if (index === 0) {
			var i = index + 1
			$(this).attr({src: "./images/pdxcg_0" + i + ".jpg"})
			$(this).closest('li').remove();
		}
		else if (index <10) {
			$(this).attr({src: "./images/pdxcg_0" + index + ".jpg"})
			}
		else {
			$(this).attr({src: "./images/pdxcg_" + index + ".jpg"})
		};


});

   var $nameText = location.search.slice(1);
    $('.tagline').text("develop something beautiful, " + $nameText + "!");

		$(document).click(function(event) {
			$('#image_show').attr('class','display_img');
				if ($(event.target).attr('class') === ('image')) {
					$('#image_show').attr('class', 'display_img');
					$('#image_show').children().attr({'src': $(event.target).attr('src')});
				}
				else {
					$('#image_show').attr('class', 'display_none');
				};

	});


});
