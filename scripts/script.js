// JavaScript Document
console.log("hi");

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
