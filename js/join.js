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
    $('#signup').attr('novalidate', true); // When the page loads, deactivate built-in browser validation checks
});

$('#submit').click(function(event) { // When the Submit button is clicked...

if ($('[name="name"]').val().length < 1) { //Return alert if nothing entered into the name field
    window.alert("Type in your name!");
};

if ($('[name="username"]').val().length < 1) { //Return alert if nothing entered into the username field
    window.alert("Type in your username!");
};

    var emailCheck = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

if (emailCheck.test($('[name="email"]').val()) === false) { //If the email input does not match the Regular Expression
     window.alert('Type in a valid email!!!');
     event.preventDefault(); //Retain information already inputted, dont clear all fields
};


var $name = $('[name="name"]').val();//Retain the value of the Name input

event.preventDefault(); // This allows the line below to execute without being skipped
window.location.href = "gallery.html?" + $name; //This alters the URL because we can't use GET or POST

});
