// document.getElementById('gallery')

// var newLi = document.createElement('li')

// var liImg = document.createElement('img')

// liImg.src = genImg()

var totallist = 60
var currentlist = 0


var totalIMG = 60
var currentImg = 1
increment 

function genImg(num) {
	// var totalImg = 60
	// var currentImg = 1
	if (num < 10) {
	  var imgURL = "url(images/pdxcg_0" + num + ".jpg)";
	}
	else {
	 var imgURL = "url(images/pdxcg_" + num + ".jpg)";
	}
	num++;
	return imgURL
}

IMG ELEMENT(1).appendChild(genImg(1))



var tempIMG = genImg()

var item = document.getElementById('test')
item.appendChild(genIg()



// var liImg = document.createTextNode(image)

// newLi.appendChild(liImg)

// var position = document.getElementById('gallery')[0];

// position.appendChild(newLi)

// var totalImg = 60;
// var currentImg = 1;

// var liTotal = 60;
// var liItem = 0;

// while liItem is less than or equal to liTotal create list item elements
// For each list element, create a text node and inside that node add the corresponding image
// Then append the 


// <li></li>

// IMG

// <li>IMG</li>

// <section id="gallery"></section>

// <section id="gallery"><li>IMG</li></section>



