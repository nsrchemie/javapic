//JAVASCRIPT

// function deac() {
// var formid = document.getElementById('signup');
// formid.setAttribute('novalidate', true);
// }
// deac();

// document.getElementById('submit').addEventListener('click',function(){

// var namesubmit = document.getElementsByName('name');
// if (namesubmit.value.length < 1) {
//     window.alert('Please type in something');
// }

// });


// document.getElementById('submit').addEventListener("click", function(){

// var emailbutton = document.querySelector("input[type='email']");
// var emailCheck=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
// if (emailCheck.test(emailbutton.value) === false) {
//      window.alert('Please enter a valid email');
// }
// });


//JQUERY

$(function() {
    $('#signup').attr('novalidate', true);
});

$('#submit').click(function(event) {

if ($('[name="name"]').val().length < 1) {
    window.alert("Type in your name!");
};

if ($('[name="username"]').val().length < 1) {
    window.alert("Type in your username!");
};

    var emailCheck = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

if (emailCheck.test($('[name="email"]').val()) === false) {
     window.alert('Type in a valid email!!!');
     event.preventDefault();
};

// $.get( "/javapic/gallery.html", function() {
//     $('.tagline').html($('[name="name"]').val()
//     );});
var $name = $('[name="name"]').val();
$('#signup').attr("action","gallery.html?" + $name);
});
