// JavaScript Document
console.log("hi");

var menuButton = document.querySelector('.menu');
var hamburgerMenu = document.querySelector('.hamburgermenu');

// Voeg een click eventlistener toe aan de button
menuButton.addEventListener('click', function () {
    // Controleer of het menu verborgen is
    if (hamburgerMenu.style.display === 'none' || hamburgerMenu.style.display === '') {
        // Als het verborgen is, toon het menu
        hamburgerMenu.style.display = 'block';
    } else {
        // Als het al zichtbaar is, verberg het menu
        hamburgerMenu.style.display = 'none';
    }
});

// test //

var Button = document.querySelector(".pagina2 section:nth-of-type(2) button");

Button.addEventListener('click',function() {
    var audio = document.getElementById('kensong');
    audio.play("images/kensong.mp3");
});


var DeEersteButton;

DeEersteButton = document.querySelector(".pagina2 section:nth-of-type(3) button");

DeEersteButton.onclick = veranderMezelf;

function veranderMezelf() {
    DeEersteButton.classList.toggle("anders");
}


// nieuwe functie //

// var MenuClick = document.querySelector(".menu");
// var ShowMenu = document.querySelector(".hamburgermenu");

// MenuClick.addEventListener('click', function() {
//     if (ShowMenu.style.display === 'block' || ShowMenu.style.display === '') {
//         ShowMenu.style.display = 'none';
//     } else {
//         ShowMenu.style.display = 'block';
//     }
// });



// het staat er 2 keer, zodat je open en uitkan klappen


// var Hamburgermenu = document.getElementsByClassName("hamburgermenu");

// function OpenMenu() {
//     Hamburgermenu[0].style.display = "block";
// }

// function CloseMenu() {
//     Hamburgermenu[0].style.display = "none";
// }

// MenuClick = document.querySelector("header nav button img");
// MenuClick.onclick = ietsDoen;
// function ietsDoen() {
// MenuClick.classList.add(“hamburgermenu");
// }