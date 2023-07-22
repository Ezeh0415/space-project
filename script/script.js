// import $ from "jquery"
var mainImg = document.getElementById('main-img');
var blockq = document.getElementById('blockq');
var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var p3 = document.getElementById("p3");
var p4 = document.getElementById("p4");
var lists = document.getElementById("lists");
function clickMe() {
    lists.style.opacity = '1';
}
function home() {
    document.body.style.backgroundImage = "url(\"home/background-home-desktop.jpg\")";
}
// created function and change bg img for destination
function destination() {
    document.body.style.backgroundImage = "url(\"destination/background-destination-desktop.jpg\")";
}
// crew section
function crew() {
    document.body.style.backgroundImage = "url(\"crew/background-crew-desktop.jpg\")";
}
function crewBody() {
    document.body.style.backgroundImage = "url(\"crew/background-crew-desktop.jpg\")";
}
// technology section 
function technology() {
    document.body.style.backgroundImage = "url(\"technology/background-technology-desktop.jpg\")";
}
// destination section
// image and text changeing
//europa changeing section
function europa() {
    // image change
    var newImage = "destination/image-europa.png";
    mainImg.src = newImage;
    mainImg.alt = "europa";
    // text change
    blockq.textContent = "europa : an enigmatic moon suspendend\n    in the cosmic dance,a distance world that becons with \n    icy allure and tantalizing enigamas undernearth its frozen crust \n    a hidden ocean lies in hushed wispers, concealing the potentals\n     for life and the captivating mysteries of the universe.";
    // distance change
    p1.textContent = "avg. distance";
    p2.textContent = "628 mil. km";
    p3.textContent = "est. travle time";
    p4.textContent = "3 years";
}
// mars changeing section
function mars() {
    // image change
    var newImage = "destination/image-mars.png";
    mainImg.src = newImage;
    mainImg.alt = "mars";
    // text change
    blockq.textContent = "venture into the world of mars, the captivating \n   crimson planet that ignites the human sprite with unyielding curiosity .\n    its rust-red allure, amidst the vast celestial canvas, has inspired \n    generations to ponder the misteres concealed wthin its ancient valleys \n    and towering mountains.";
    // distance
    p1.textContent = "avg. distance";
    p2.textContent = "255 mil. km";
    p3.textContent = "est. travle time";
    p4.textContent = "9 months";
}
// moon changeing section
function moon() {
    // image change
    var newImage = "destination/image-moon.png";
    mainImg.src = newImage;
    mainImg.alt = "moon";
    // text change
    blockq.textContent = "behold the moon a timeless celestial companion,\n    enchanting the night sky with its radiant glow and lunar mysterirs\n     a mesmerizing ballet of cosmic wonders that has stirred poets, dreamers, and explorers alike, \n     beckoning us to unravel the secrets of its ancent creaters and tranquils seas";
    //distance
    p1.textContent = "avg. distance";
    p2.textContent = "384,400 km";
    p3.textContent = "est. travle time";
    p4.textContent = "3 days";
}
//
function titan() {
    // image change
    var newImage = "destination/image-titan.png";
    mainImg.src = newImage;
    mainImg.alt = "titan";
    // text change
    blockq.textContent = "titan:saturn's enchanting moon,\n    a realm of etheral beauty, veiled in a haze of mystery,\n     where vast lakes of hydrocarbons mirror a distance,\n      primordial past, enticing scientists and storytellers\n       alike to contemplate the engimas of this distance world'";
    //distance
    p1.textContent = "avg. distance";
    p2.textContent = "1.6 bil. km";
    p3.textContent = "est. travle time";
    p4.textContent = "7 years";
}
// media query section
// const bodyHead = document.getElementById("body-head") as HTMLBodyElement;
var screenwidth = window.matchMedia(" (max-width:912px) ");
if (screenwidth.matches) {
    //    document.onload, function () {
    //     // function home() {
    //     //     document.body.style.backgroundImage = `url("home/background-home-desktop.jpg")`;
    //     // }
    //    }
    // function home() {
    //     document.body.style.backgroundImage = `url("home/background-home-desktop.jpg")`;
    // }
}
